import { DfnsWallet } from '@dfns/lib-solana'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import {
  clusterApiUrl,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  NONCE_ACCOUNT_LENGTH,
  NonceAccount,
  PublicKey,
  SystemProgram,
  TransactionMessage,
  VersionedTransaction,
} from '@solana/web3.js'
import * as readline from 'readline'
import dotenv from 'dotenv'

dotenv.config()

const askYesNo = (question: string): Promise<boolean> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  return new Promise((resolve) => {
    rl.question(`${question} (y/n): `, (answer) => {
      rl.close()
      const response = answer.toLowerCase().trim()
      resolve(response === 'y' || response === 'yes')
    })
  })
}

const initDfnsWallet = async (walletId: string) => {
  const signer = new AsymmetricKeySigner({
    credId: process.env.DFNS_CRED_ID!,
    privateKey: process.env.DFNS_PRIVATE_KEY!,
  })

  const dfnsClient = new DfnsApiClient({
    orgId: process.env.DFNS_ORG_ID!,
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

  let nonceAccountAddress = process.env.SOLANA_NONCE_ACCOUNT_ADDRESS
  if (!nonceAccountAddress) {
    // ask if want to create the nonce account
    const shouldCreate = await askYesNo('No nonce account address found. Would you like to create a new nonce account?')
    
    if (!shouldCreate) {
      console.log('Nonce account creation cancelled. Exiting...')
      return
    }

    const nonceKeypair = Keypair.generate()

    const latestBlockhash = await connection.getLatestBlockhash()

    const message = new TransactionMessage({
    payerKey: wallet.publicKey,
    recentBlockhash: latestBlockhash.blockhash,
    instructions: [
      // account creation
      SystemProgram.createAccount({
        fromPubkey: wallet.publicKey,
        newAccountPubkey: nonceKeypair.publicKey,
        lamports: 0.0015 * LAMPORTS_PER_SOL,
        space: NONCE_ACCOUNT_LENGTH,
        programId: SystemProgram.programId,
      }),
      // initialise nonce. Wallet is the authority
      SystemProgram.nonceInitialize({
        noncePubkey: nonceKeypair.publicKey,
        authorizedPubkey: wallet.publicKey,
      }),
    ],
  }).compileToV0Message()

    const tx = new VersionedTransaction(message)

    // sign the transaction with both the nonce keypair and the authority keypair
    tx.sign([nonceKeypair])
    const signedTx = await wallet.signVersionedTransaction(tx)
    
    const txid = await connection.sendRawTransaction(signedTx.serialize())
    await connection.confirmTransaction({ signature: txid, ...latestBlockhash })
    console.log("Nonce initiated: ", txid)

    nonceAccountAddress = nonceKeypair.publicKey.toBase58()
  }

  console.log("Nonce Account Address: ", nonceAccountAddress)
  const noncePubKey = new PublicKey(nonceAccountAddress)

  const accountInfo = await connection.getAccountInfo(new PublicKey(nonceAccountAddress))
  if (!accountInfo) {
    throw new Error(`Nonce account not found: ${nonceAccountAddress}`)
  }
  const nonceAccount = NonceAccount.fromAccountData(accountInfo.data)

  // need to get minContextSlot for durable nonce tx confirmation
  const minSlot = await connection.getSlot()

  // 100 lamport
  const amount = 100

  console.log(`Sending ${amount} lamports to ${wallet.publicKey.toBase58()} with durable nonce`)
  console.log(`Old balance for sender: ${await connection.getBalance(wallet.publicKey)}`)

  const transfer = SystemProgram.transfer({
    fromPubkey: wallet.publicKey,
    toPubkey: wallet.publicKey,
    lamports: 100,
  })

  // nonce advance instruction
  const nonceAdvance = SystemProgram.nonceAdvance({
    authorizedPubkey: wallet.publicKey,
    noncePubkey: noncePubKey,
  })

  // add them to a transaction
  const tx = new TransactionMessage({
    payerKey: wallet.publicKey,
    recentBlockhash: nonceAccount.nonce,
    instructions: [nonceAdvance, transfer],
  }).compileToV0Message()

  const transaction = new VersionedTransaction(tx)

  // In theory you need to signature: one from the none authority and one from the sender
  // since it's the same account, one signature from the wallet should suffice
  const signedTx = await wallet.signVersionedTransaction(transaction)
  
  const txid = await connection.sendRawTransaction(signedTx.serialize())

  // observer that we use the nonce for confirmation strategy
  await connection.confirmTransaction({
    signature: txid,
    nonceAccountPubkey: noncePubKey,
    nonceValue: nonceAccount.nonce,
    minContextSlot: minSlot 
  })

  console.log(`Transaction hash: ${txid}`)
  console.log(`New balance for sender: ${await connection.getBalance(wallet.publicKey)}`)
}

main()
