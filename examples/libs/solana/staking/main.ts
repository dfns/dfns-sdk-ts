import { DfnsWallet } from '@dfns/lib-solana'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { Authorized, clusterApiUrl, Connection, Lockup, PublicKey, StakeProgram } from '@solana/web3.js'
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
  const authority = await initDfnsWallet(process.env.AUTHORITY_WALLET_ID!)
  console.log(`Authority: ${authority.address}`)

  const stakeAccount = await initDfnsWallet(process.env.STAKE_ACCOUNT_WALLET_ID!)
  console.log(`Stake account: ${stakeAccount.address}`)

  const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')

  const amountToStake = 100000000
  const latestBlockhash = await connection.getLatestBlockhash()

  // to create the stake account
  const createAccountTx = StakeProgram.createAccount({
    authorized: new Authorized(authority.publicKey, authority.publicKey),
    fromPubkey: authority.publicKey,
    lamports: amountToStake,
    lockup: new Lockup(0, 0, authority.publicKey),
    stakePubkey: stakeAccount.publicKey,
  })
  createAccountTx.feePayer = authority.publicKey
  createAccountTx.recentBlockhash = latestBlockhash.blockhash
  createAccountTx.lastValidBlockHeight = latestBlockhash.lastValidBlockHeight

  const feePayerSigned = await authority.signTransaction(createAccountTx)
  const stakeAccountSigned = await stakeAccount.signTransaction(feePayerSigned)

  const createAccountTxId = await connection.sendRawTransaction(stakeAccountSigned.serialize())
  await connection.confirmTransaction({ signature: createAccountTxId, ...latestBlockhash })
  console.log(`Stake account created: ${createAccountTxId}`)

  const stakeBalance = await connection.getBalance(stakeAccount.publicKey)
  console.log(`Stake account balance: ${stakeBalance}`)

  const stakeStatus = await connection.getStakeActivation(stakeAccount.publicKey)
  console.log(`Stake account status: ${stakeStatus.state}`)

  // to delegate the stake
  const validators = await connection.getVoteAccounts()
  const selectedValidator = validators.current[0]
  const selectedValidatorPubkey = new PublicKey(selectedValidator.votePubkey)
  console.log(`Selected validator: ${selectedValidatorPubkey.toBase58()}`)

  const delegateTx = StakeProgram.delegate({
    stakePubkey: stakeAccount.publicKey,
    authorizedPubkey: authority.publicKey,
    votePubkey: selectedValidatorPubkey,
  })
  delegateTx.feePayer = authority.publicKey
  delegateTx.recentBlockhash = latestBlockhash.blockhash
  delegateTx.lastValidBlockHeight = latestBlockhash.lastValidBlockHeight

  const signedDelegatedTx = await authority.signTransaction(delegateTx)
  const delegateTxId = await connection.sendRawTransaction(signedDelegatedTx.serialize())
  await connection.confirmTransaction({ signature: delegateTxId, ...latestBlockhash })
  console.log(`Delegated stake to validator: ${delegateTxId}`)

  const newStatus = await connection.getStakeActivation(stakeAccount.publicKey)
  console.log(`Stake account status: ${newStatus.state}`)
}

main()
