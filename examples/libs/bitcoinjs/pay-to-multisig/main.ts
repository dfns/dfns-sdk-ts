import { DfnsWallet } from '@dfns/lib-bitcoinjs'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { crypto, networks, payments, Psbt } from 'bitcoinjs-lib'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const initDfnsWallet = async (walletId: string) => {
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

  return DfnsWallet.init({ walletId, dfnsClient })
}

const toSatoshi = (btc: number): number => {
  return Math.floor(btc * 100000000)
}

const getTxOut = async (txid: string, n: number): Promise<any> => {
  return (
    await axios.post(process.env.BITCOIN_NODE_URL!, {
      jsonrpc: '2.0',
      id: 'gettxout',
      method: 'gettxout',
      params: [txid, n, false],
    })
  ).data.result
}

const sendRawTransaction = async (hex: string): Promise<string> => {
  return (
    await axios.post(process.env.BITCOIN_NODE_URL!, {
      jsonrpc: '2.0',
      id: 'sendrawtransaction',
      method: 'sendrawtransaction',
      params: [hex],
    })
  ).data.result
}

// change this to an utxo for the multi-sig address
const utxo = {
  txid: '9c3daf42bfcb7e4d2c824a67632b240439d298b97f8c7008632b9b3a40a7aa38',
  n: 1,
}

const main = async () => {
  const network = networks.testnet
  const wallet1 = await initDfnsWallet(process.env.BITCOIN_WALLET1_ID!)
  const wallet2 = await initDfnsWallet(process.env.BITCOIN_WALLET2_ID!)

  const p2ms = payments.p2ms({ m: 2, pubkeys: [wallet1.publicKey, wallet2.publicKey], network })
  const p2wsh = payments.p2wsh({ redeem: p2ms, network })

  if (!p2wsh.address) throw Error(`no p2ms address`)
  console.log(`Multisig address: ${p2wsh.address}`)

  const unspent = await getTxOut(utxo.txid, utxo.n)
  const balance = toSatoshi(unspent.value)
  console.log(`Unspent balance: ${balance} satoshis`)

  const psbt = new Psbt({ network })
  psbt.addInput({
    hash: utxo.txid,
    index: utxo.n,
    witnessScript: p2wsh.redeem?.output,
    witnessUtxo: {
      script: Buffer.from('0020' + crypto.sha256(p2ms.output!).toString('hex'), 'hex'),
      value: balance,
    },
  })

  const amount = 1
  const fee = 200

  psbt.addOutput({
    address: wallet2.address!,
    value: amount,
  })

  psbt.addOutput({
    address: p2wsh.address,
    value: balance - amount - fee,
  })

  console.log(`Transfer amount: ${amount} satoshis`)
  console.log(`Transfer fee: ${fee} satoshis`)

  const oneOfTwo = await wallet1.SignPsbt(psbt)
  const twoOfTwo = await wallet2.SignPsbt(oneOfTwo)
  const txHex = twoOfTwo.finalizeAllInputs().extractTransaction().toHex()

  const txHash = await sendRawTransaction(txHex)
  console.log(`Transaction hash: ${txHash}`)
}

main()
