import { DfnsWallet } from '@dfns/lib-bitcoinjs'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { networks, payments, Psbt } from 'bitcoinjs-lib'
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

// change this to an utxo for your wallet
const utxo = {
  txid: '87872516c6e93f136fc6c493c7172596b11c695e27889de7532abffcac2a4b5e',
  n: 1,
}

const main = async () => {
  const network = networks.testnet
  const wallet = await initDfnsWallet(process.env.BITCOIN_WALLET_ID!)

  const { address } = payments.p2wpkh({ pubkey: wallet.publicKey, network })
  if (!address) throw Error(`bad public key ${wallet.publicKey}`)
  console.log(`Wallet address: ${address}`)

  const unspent = await getTxOut(utxo.txid, utxo.n)
  const balance = toSatoshi(unspent.value)
  console.log(`Unspent balance: ${balance} satoshis`)

  const psbt = new Psbt({ network })
  psbt.addInput({
    hash: utxo.txid,
    index: utxo.n,
    witnessUtxo: {
      script: Buffer.from(unspent.scriptPubKey.hex, 'hex'),
      value: balance,
    },
  })

  const to = 'tb1q5s9xtdr07dk98ud0hr34ufdycz70exte2kehm2'
  const amount = 1
  const fee = 150

  psbt.addOutput({
    address: to,
    value: amount,
  })

  psbt.addOutput({
    address,
    value: balance - amount - fee,
  })

  console.log(`Transfer amount: ${amount} satoshis`)
  console.log(`Transfer fee: ${fee} satoshis`)

  const signed = (await wallet.SignPsbt(psbt)).finalizeAllInputs()
  const txHex = signed.extractTransaction().toHex()
  const txHash = await sendRawTransaction(txHex)
  console.log(`Transaction hash: ${txHash}`)
}

main()
