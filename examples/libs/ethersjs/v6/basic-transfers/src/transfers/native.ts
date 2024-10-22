import { parseEther } from 'ethers'
import { ethereum, initDfnsWallet } from '../utils'

const WALLET_ID = 'wa-xxxx-xxxxxxx'

export const nativeTransfer = async () => {
  console.log(`--------------------------`)
  console.log(`Native Transfer`)
  console.log(`--------------------------`)

  const wallet = (await initDfnsWallet(WALLET_ID)).connect(ethereum)

  const broadcastedTx = await wallet.sendTransaction({
    to: '0xb903e95a6c058f3eaab2b3aef119287d72a4c5c6',
    value: parseEther('1.0'),
  })

  console.log(`Transaction has been broadcasted (hash ${broadcastedTx.hash})`)
  console.log(`Waiting for on-chain confirmation...`)

  const confirmedTx = await broadcastedTx.wait()

  if (confirmedTx) {
    console.log(`Transaction confirmed ! (hash ${confirmedTx.hash})`)
  } else {
    console.log(`Transaction not confirmed.`)
  }
}
