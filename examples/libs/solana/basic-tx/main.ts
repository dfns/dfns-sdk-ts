import { DfnsWallet } from '@dfns/lib-solana'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import {
  clusterApiUrl,
  Connection,
  PublicKey,
  SystemProgram,
  TransactionMessage,
  VersionedTransaction,
} from '@solana/web3.js'
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

const main = async () => {
  const wallet = await initDfnsWallet(process.env.SOLANA_WALLET_ID!)
  console.log(`Solana wallet address: ${wallet.address}`)

  const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
  console.log(`Current balance: ${await connection.getBalance(wallet.publicKey)}`)

  const amount = 100000000
  const toAddress = '3U6stgsD1FmA7o3omUguritCU8iWmUM7Rs6KqAHHxHVZ'
  const latestBlockhash = await connection.getLatestBlockhash()

  const message = new TransactionMessage({
    payerKey: wallet.publicKey,
    recentBlockhash: latestBlockhash.blockhash,
    instructions: [
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: new PublicKey(toAddress),
        lamports: BigInt(amount),
      }),
    ],
  }).compileToV0Message()
  const transaction = new VersionedTransaction(message)
  const signedTx = await wallet.signVersionedTransaction(transaction)
  console.log(`Sending ${amount} lamports to ${toAddress}`)

  const txid = await connection.sendRawTransaction(signedTx.serialize())
  await connection.confirmTransaction({ signature: txid, ...latestBlockhash })
  console.log(`Transaction signature: ${txid}`)
  console.log(`New balance: ${await connection.getBalance(wallet.publicKey)}`)
}

main()
