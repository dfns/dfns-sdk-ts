import { DfnsWallet } from '@dfns/lib-solana'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import {
  clusterApiUrl,
  Connection,
  NONCE_ACCOUNT_LENGTH,
  NonceAccount,
  PublicKey,
  SystemProgram,
  TransactionMessage,
  VersionedTransaction,
} from '@solana/web3.js'
import dotenv from 'dotenv'

dotenv.config()

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

const NONCE_SEED = 'dfns/nonce/0'

const getNonceAccountPublicKey = async (basePublicKey: PublicKey): Promise<PublicKey> =>
  PublicKey.createWithSeed(basePublicKey, NONCE_SEED, SystemProgram.programId)

const main = async () => {
  const wallet = await initDfnsWallet(process.env.SOLANA_WALLET_ID!)
  console.log(`Solana wallet address: ${wallet.address}`)

  const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')

  const noncePubkey = await getNonceAccountPublicKey(wallet.publicKey)
  let nonceAccount = await connection.getAccountInfo(noncePubkey)

  // don't have the nonce account yet, let's create one
  if (!nonceAccount) {
    const rentExemption = await connection.getMinimumBalanceForRentExemption(NONCE_ACCOUNT_LENGTH)
    const latestBlockhash = await connection.getLatestBlockhash()

    const message = new TransactionMessage({
      payerKey: wallet.publicKey,
      recentBlockhash: latestBlockhash.blockhash,
      instructions: [
        // create nonce account
        SystemProgram.createAccountWithSeed({
          fromPubkey: wallet.publicKey,
          newAccountPubkey: noncePubkey,
          basePubkey: wallet.publicKey,
          seed: NONCE_SEED,
          lamports: rentExemption,
          space: NONCE_ACCOUNT_LENGTH,
          programId: SystemProgram.programId,
        }),
        // init nonce
        SystemProgram.nonceInitialize({
          noncePubkey,
          authorizedPubkey: wallet.publicKey,
        }),
      ],
    }).compileToV0Message()

    const nonceCreate = new VersionedTransaction(message)
    const signed = await wallet.signVersionedTransaction(nonceCreate)
    const txid = await connection.sendRawTransaction(signed.serialize())
    await connection.confirmTransaction({ signature: txid, ...latestBlockhash })

    console.log(`Created nonce account ${noncePubkey.toBase58()}`)

    nonceAccount = await connection.getAccountInfo(noncePubkey)
    if (!nonceAccount) throw Error('nonce account not found')
  } else {
    console.log(`nonce account ${noncePubkey.toBase58()}`)
  }

  console.log(`Current balance: ${await connection.getBalance(wallet.publicKey)}`)

  // use durable nonce for transfer
  const { nonce } = NonceAccount.fromAccountData(nonceAccount.data)
  const message = new TransactionMessage({
    payerKey: wallet.publicKey,
    recentBlockhash: nonce,
    instructions: [
      SystemProgram.nonceAdvance({
        noncePubkey,
        authorizedPubkey: wallet.publicKey,
      }),
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: new PublicKey('3U6stgsD1FmA7o3omUguritCU8iWmUM7Rs6KqAHHxHVZ'),
        lamports: BigInt(1),
      }),
    ],
  }).compileToV0Message()

  const transfer = new VersionedTransaction(message)
  const signed = await wallet.signVersionedTransaction(transfer)
  const txid = await connection.sendRawTransaction(signed.serialize())
  await connection.confirmTransaction({
    signature: txid,
    nonceAccountPubkey: noncePubkey,
    nonceValue: nonce,
    minContextSlot: await connection.getSlot(),
  })

  console.log(`Transaction signature: ${txid}`)
  console.log(`New balance: ${await connection.getBalance(wallet.publicKey)}`)
}

main()
