import { DfnsWallet } from '@dfns/vechain-wallet'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { Framework } from '@vechain/connex-framework'
import { Driver, SimpleNet } from '@vechain/connex-driver'
import dotenv from 'dotenv'

dotenv.config()

const initDfnsWallet = async () => {
  const signer = new AsymmetricKeySigner({
    privateKey: process.env.DFNS_PRIVATE_KEY!,
    credId: process.env.DFNS_CRED_ID!,
    appOrigin: process.env.DFNS_APP_ORIGIN!,
  })

  const dfnsClient = new DfnsApiClient({
    appId: process.env.DFNS_APP_ID!,
    authToken: process.env.DFNS_AUTH_TOKEN!,
    baseUrl: process.env.DFNS_API_URL!,
    signer,
  })

  return DfnsWallet.init({
    walletId: process.env.DFNS_WALLET_ID!,
    dfnsClient,
    maxRetries: 10,
  })
}

const main = async () => {
  const wallet = await initDfnsWallet()
  console.log(`address: ${wallet.address}`)

  const net = new SimpleNet('https://testnet.veblocks.net/')
  const driver = await Driver.connect(net, wallet)
  const connex = new Framework(driver)

  const before = await connex.thor.account(wallet.address).get()
  console.log(`pre balance: ${BigInt(before.balance)}`)
  console.log(`pre energy: ${BigInt(before.energy)}`)

  // Converts 1 VET to VTHO
  // Solidity: function convertForEnergy(uint256 _minReturn) public payable
  const vthoContract = '0x0000000000000000000000000000456E65726779'
  const convertForEnergyABI = {
    constant: false,
    inputs: [{ name: '_minReturn', type: 'uint256' }],
    name: 'convertForEnergy',
    outputs: [{ name: '', type: 'uint256' }],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  }
  const convertForEnergyMethod = connex.thor.account(vthoContract).method(convertForEnergyABI)

  const convertTx = await convertForEnergyMethod
    .value('1000000000000000000') // Set value to 1e18
    .transact('10000000000000000') // minReturn in wei(1e16 wei)
    .request()

  console.log(`signer: ${convertTx.signer}`)
  console.log(`txid: ${convertTx.txid}`)

  await connex.thor.transaction(convertTx.txid).getReceipt()
  const after = await connex.thor.account(wallet.address).get()
  console.log(`post balance: ${BigInt(after.balance)}`)
  console.log(`post energy: ${BigInt(after.energy)}`)

  driver.close()
}

main()
