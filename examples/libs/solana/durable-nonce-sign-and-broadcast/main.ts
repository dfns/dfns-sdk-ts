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

const dfnsClient = new DfnsApiClient({
  orgId: process.env.DFNS_ORG_ID!,
  authToken: process.env.DFNS_AUTH_TOKEN!,
  baseUrl: process.env.DFNS_API_URL!,
  signer: new AsymmetricKeySigner({
    credId: process.env.DFNS_CRED_ID!,
    privateKey: process.env.DFNS_PRIVATE_KEY!,
  }),
})

const walletId = process.env.SOLANA_WALLET_ID!
const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')

// A seed you control, used to derive the nonce account address from the wallet. Keep it distinct
// from the `nonce/<index>` seeds DFNS uses for its server-managed pool (the CreateSolanaNonceAccounts
// transaction kind), so a self-managed account and a pool account can never collide.
const NONCE_SEED = 'my-app/nonce/0'

// DFNS Sign & Broadcast expects an unsigned, hex-encoded transaction. A freshly built
// VersionedTransaction already carries zero-padded placeholder signatures, which is exactly what the
// endpoint needs — DFNS fills in the real signature during the MPC signing ceremony.
const toDfnsHex = (tx: VersionedTransaction) => `0x${Buffer.from(tx.serialize()).toString('hex')}`

// Submit an unsigned transaction to DFNS Sign & Broadcast, then poll the transaction request until it
// is confirmed on-chain. Confirmation matters here: a durable nonce only advances once its transaction
// executes, so each reuse must wait for the previous one to confirm.
const signBroadcastAndWait = async (tx: VersionedTransaction, label: string): Promise<void> => {
  const { id } = await dfnsClient.wallets.broadcastTransaction({
    walletId,
    body: { kind: 'Transaction', transaction: toDfnsHex(tx) },
  })
  console.log(`${label}: request ${id} submitted, waiting for confirmation…`)

  for (let attempt = 0; attempt < 100; attempt++) {
    const request = await dfnsClient.wallets.getTransaction({ walletId, transactionId: id })
    if (request.status === 'Confirmed') {
      console.log(`${label}: confirmed — ${request.txHash}`)
      return
    }
    if (request.status === 'Failed' || request.status === 'Rejected') {
      throw new Error(`${label}: transaction ${request.status}`)
    }
    await new Promise((resolve) => setTimeout(resolve, 3000))
  }
  throw new Error(`${label}: timed out waiting for confirmation`)
}

const main = async () => {
  const wallet = await dfnsClient.wallets.getWallet({ walletId })
  const walletPubkey = new PublicKey(wallet.address)
  const noncePubkey = await PublicKey.createWithSeed(walletPubkey, NONCE_SEED, SystemProgram.programId)
  console.log(`Solana wallet:  ${wallet.address}`)
  console.log(`Nonce account:  ${noncePubkey.toBase58()}`)

  // 1. Create the nonce account (once). createAccountWithSeed derives the account address from the
  //    wallet, so the wallet is the only required signer — there is no extra keypair for DFNS to sign
  //    for. This bootstrap transaction is ordinary, so it uses a recent blockhash.
  if (!(await connection.getAccountInfo(noncePubkey))) {
    const rentExemption = await connection.getMinimumBalanceForRentExemption(NONCE_ACCOUNT_LENGTH)
    const { blockhash } = await connection.getLatestBlockhash()
    const createTx = new VersionedTransaction(
      new TransactionMessage({
        payerKey: walletPubkey,
        recentBlockhash: blockhash,
        instructions: [
          SystemProgram.createAccountWithSeed({
            fromPubkey: walletPubkey,
            newAccountPubkey: noncePubkey,
            basePubkey: walletPubkey,
            seed: NONCE_SEED,
            lamports: rentExemption,
            space: NONCE_ACCOUNT_LENGTH,
            programId: SystemProgram.programId,
          }),
          SystemProgram.nonceInitialize({ noncePubkey, authorizedPubkey: walletPubkey }),
        ],
      }).compileToV0Message()
    )
    await signBroadcastAndWait(createTx, 'Create nonce account')
  } else {
    console.log('Nonce account already exists, reusing it')
  }

  // 2. Use the durable nonce several times. Re-read the nonce value before each transaction: every
  //    executed durable-nonce transaction advances the stored nonce to a new value, so a stale value
  //    would be rejected.
  const recipient = new PublicKey('3U6stgsD1FmA7o3omUguritCU8iWmUM7Rs6KqAHHxHVZ')
  for (let i = 1; i <= 3; i++) {
    const info = await connection.getAccountInfo(noncePubkey)
    if (!info) throw new Error('nonce account not found')
    const { nonce } = NonceAccount.fromAccountData(info.data)

    const tx = new VersionedTransaction(
      new TransactionMessage({
        payerKey: walletPubkey,
        recentBlockhash: nonce, // the durable nonce takes the place of a recent blockhash
        instructions: [
          // AdvanceNonceAccount MUST be the first instruction of a durable-nonce transaction.
          SystemProgram.nonceAdvance({ noncePubkey, authorizedPubkey: walletPubkey }),
          SystemProgram.transfer({ fromPubkey: walletPubkey, toPubkey: recipient, lamports: 1 }),
        ],
      }).compileToV0Message()
    )
    await signBroadcastAndWait(tx, `Durable-nonce transfer ${i}`)
  }

  // 3. Destroy the nonce account by withdrawing its full balance, which closes it. This reclaims the
  //    rent-exempt deposit. The withdrawal is an ordinary transaction, so it uses a recent blockhash.
  const balance = await connection.getBalance(noncePubkey)
  const { blockhash } = await connection.getLatestBlockhash()
  const closeTx = new VersionedTransaction(
    new TransactionMessage({
      payerKey: walletPubkey,
      recentBlockhash: blockhash,
      instructions: [
        SystemProgram.nonceWithdraw({
          noncePubkey,
          authorizedPubkey: walletPubkey,
          toPubkey: walletPubkey,
          lamports: balance,
        }),
      ],
    }).compileToV0Message()
  )
  await signBroadcastAndWait(closeTx, 'Destroy nonce account')
  console.log('Done.')
}

main()
