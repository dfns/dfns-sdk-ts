import { DfnsWallet } from '@dfns/lib-ethersjs6'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { ChainId, CurrencyAmount, Percent, Token, TradeType } from '@uniswap/sdk-core'
import { abi as UniswapV3PoolAbi } from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json'
import { computePoolAddress, FeeAmount, Pool, Route, SwapOptions, SwapQuoter, SwapRouter, Trade } from '@uniswap/v3-sdk'
import dotenv from 'dotenv'
import { AbiCoder, Contract, JsonRpcProvider, TransactionResponse } from 'ethers'

dotenv.config()

const WETH_ABI = [
  'function approve(address _spender, uint256 _value) returns (bool)',
  'function deposit() external payable',
]

const POOL_FACTORY_CONTRACT_ADDRESS = '0x1F98431c8aD98523631AE4a59f267346ea31F984'
const QUOTER_CONTRACT_ADDRESS = '0x61fFE014bA17989E743c5F6cB21bF9697530B21e'
const SWAP_ROUTER_CONTRACT_ADDRESS = '0xE592427A0AEce92De3Edee1F18E0157C05861564'

const WETH = new Token(ChainId.GOERLI, '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', 18)
const USDC = new Token(ChainId.GOERLI, '0x07865c6e87b9f70255377e024ace6630c1eaa37f', 6)

const ethereum = new JsonRpcProvider(process.env.ETHEREUM_NODE_URL!)

const initDfnsWallet = async (walletId: string) => {
  const signer = new AsymmetricKeySigner({
    credId: process.env.DFNS_CRED_ID!,
    privateKey: process.env.DFNS_PRIVATE_KEY!,
  })

  const dfnsClient = new DfnsApiClient({
    appId: process.env.DFNS_APP_ID!,
    authToken: process.env.DFNS_AUTH_TOKEN!,
    baseUrl: process.env.DFNS_API_URL!,
    signer,
  })

  return DfnsWallet.init({ walletId, dfnsClient })
}

const AMOUNT_TO_TRADE = '1000000'

interface PoolInfo {
  token0: string
  token1: string
  fee: number
  tickSpacing: number
  sqrtPriceX96: BigInt
  liquidity: BigInt
  tick: number
}

const getPoolInfo = async (): Promise<PoolInfo> => {
  const poolAddress = computePoolAddress({
    factoryAddress: POOL_FACTORY_CONTRACT_ADDRESS,
    tokenA: WETH,
    tokenB: USDC,
    fee: FeeAmount.MEDIUM,
  })

  const poolContract = new Contract(poolAddress, UniswapV3PoolAbi, ethereum)

  const [token0, token1, fee, tickSpacing, liquidity, slot0] = await Promise.all([
    poolContract.token0(),
    poolContract.token1(),
    poolContract.fee(),
    poolContract.tickSpacing(),
    poolContract.liquidity(),
    poolContract.slot0(),
  ])

  return {
    token0,
    token1,
    fee,
    tickSpacing,
    liquidity,
    sqrtPriceX96: slot0[0],
    tick: slot0[1],
  }
}

const getOutputQuote = async (
  route: Route<Token, Token>,
  inputAmount: CurrencyAmount<Token>,
  tradeType: TradeType
): Promise<CurrencyAmount<Token>> => {
  const { calldata: data } = SwapQuoter.quoteCallParameters(route, inputAmount, tradeType, {
    useQuoterV2: true,
  })

  const quote = await ethereum.call({
    to: QUOTER_CONTRACT_ADDRESS,
    data,
  })

  return CurrencyAmount.fromRawAmount(route.output, AbiCoder.defaultAbiCoder().decode(['uint256'], quote).toString())
}

const createTrade = async (): Promise<Trade<Token, Token, TradeType.EXACT_INPUT>> => {
  const poolInfo = await getPoolInfo()

  const pool = new Pool(
    WETH,
    USDC,
    FeeAmount.MEDIUM,
    poolInfo.sqrtPriceX96.toString(),
    poolInfo.liquidity.toString(),
    Number(poolInfo.tick)
  )

  const swapRoute = new Route([pool], WETH, USDC)
  const inputAmount = CurrencyAmount.fromRawAmount(swapRoute.input, AMOUNT_TO_TRADE)
  const tradeType = TradeType.EXACT_INPUT

  const outputAmount = await getOutputQuote(swapRoute, inputAmount, tradeType)

  return Trade.createUncheckedTrade({
    route: swapRoute,
    inputAmount,
    outputAmount,
    tradeType,
  })
}

const main = async () => {
  const wallet = (await initDfnsWallet(process.env.ETHEREUM_WALLET_ID!)).connect(ethereum)
  const address = await wallet.getAddress()
  const wethContract = new Contract(WETH.address, WETH_ABI, wallet)

  // convert some ETH to wrapped ETH
  const depositTx: TransactionResponse = await wethContract.deposit({ value: AMOUNT_TO_TRADE })
  console.log(`Convert ETH to WETH: ${depositTx.hash}`)
  await depositTx.wait()

  // approve uniswap access to WETH funds
  const approveTx: TransactionResponse = await wethContract.approve(SWAP_ROUTER_CONTRACT_ADDRESS, AMOUNT_TO_TRADE)
  console.log(`Approve Uniswap contract allowance: ${approveTx.hash}`)
  await approveTx.wait()

  // execute the trade swap for USDC
  const trade = await createTrade()

  const options: SwapOptions = {
    slippageTolerance: new Percent(50, 10000),
    deadline: Math.floor(Date.now() / 1000) + 60 * 20,
    recipient: address,
  }

  const params = SwapRouter.swapCallParameters([trade], options)

  const tx = await wallet.populateTransaction({
    to: SWAP_ROUTER_CONTRACT_ADDRESS,
    data: params.calldata,
    value: params.value,
    maxFeePerGas: 120000000000,
    maxPriorityFeePerGas: 120000000000,
  })
  const signedTx = await wallet.signTransaction(tx)

  const tradeTx = await ethereum.broadcastTransaction(signedTx)
  const tradeRec = await tradeTx.wait()
  console.log(`Swapped WETH for USDC: ${tradeRec?.hash}`)
}

main()
