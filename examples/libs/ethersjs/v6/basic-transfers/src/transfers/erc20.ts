import { Contract, parseUnits, TransactionResponse } from 'ethers'
import { ethereum, initDfnsWallet } from '../utils'

const ERC20_ABI = ['function transfer(address to, uint amount) returns (bool)']

const USDC_CONTRACT = {
  address: '0x6262998ced04146fa42253a5c0af90ca02dfd2a3',
  decimals: 6,
}

const WALLET_ID = 'wa-xxxx-xxxxxxx'

export const erc20Transfer = async () => {
  console.log(`--------------------------`)
  console.log(`ERC20 Transfer`)
  console.log(`--------------------------`)

  const wallet = (await initDfnsWallet(WALLET_ID)).connect(ethereum)

  const usdc = new Contract(USDC_CONTRACT.address, ERC20_ABI, wallet)

  const broadcastedTx: TransactionResponse = await usdc.transfer(parseUnits('100000', USDC_CONTRACT.decimals))

  console.log(`Transaction has been broadcasted (hash ${broadcastedTx.hash})`)
  console.log(`Waiting for on-chain confirmation...`)

  const confirmedTx = await broadcastedTx.wait()

  if (confirmedTx) {
    console.log(`Transaction confirmed ! (hash ${confirmedTx.hash})`)
  } else {
    console.log(`Transaction not confirmed.`)
  }
}
