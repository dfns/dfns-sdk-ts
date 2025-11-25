import { DfnsWallet } from '@dfns/lib-solana'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { clusterApiUrl, Connection, SystemProgram, Transaction } from '@solana/web3.js'

import {
  ExtensionType,
  TOKEN_2022_PROGRAM_ID,
  createCloseAccountInstruction,
  createInitializeMintCloseAuthorityInstruction,
  createInitializeMintInstruction,
  getMintLen,
} from '@solana/spl-token'

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

const main = async () => {
  const mint = await initDfnsWallet(process.env.MINT_WALLET_ID!)
  console.log(`mint: ${mint.address}`)

  const authority = await initDfnsWallet(process.env.AUTHORITY_WALLET_ID!)
  console.log(`authority account: ${authority.address}`)

  const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')

  let latestBlockhash = await connection.getLatestBlockhash()

  const decimals = 2

  const mintLen = getMintLen([ExtensionType.MintCloseAuthority])
  const lamports = await connection.getMinimumBalanceForRentExemption(mintLen)

  const createAccountInstruction = SystemProgram.createAccount({
    fromPubkey: authority.publicKey,
    newAccountPubkey: mint.publicKey,
    space: mintLen,
    lamports: lamports,
    programId: TOKEN_2022_PROGRAM_ID,
  })

  const initializeMintCloseAuthorityInstruction = createInitializeMintCloseAuthorityInstruction(
    mint.publicKey,
    authority.publicKey, // Designated Close Authority
    TOKEN_2022_PROGRAM_ID // Token Extension Program ID
  )

  const initializeMintInstruction = createInitializeMintInstruction(
    mint.publicKey,
    decimals,
    authority.publicKey,
    authority.publicKey,
    TOKEN_2022_PROGRAM_ID
  )

  const mintInitTx = new Transaction().add(
    createAccountInstruction,
    initializeMintCloseAuthorityInstruction,
    initializeMintInstruction
  )

  mintInitTx.feePayer = authority.publicKey
  mintInitTx.recentBlockhash = latestBlockhash.blockhash
  mintInitTx.lastValidBlockHeight = latestBlockhash.lastValidBlockHeight

  const feePayerSigned = await authority.signTransaction(mintInitTx)
  const mintInitTxSigned = await mint.signTransaction(feePayerSigned)

  const mintInitId = await connection.sendRawTransaction(mintInitTxSigned.serialize())
  await connection.confirmTransaction({ signature: mintInitId, ...latestBlockhash })
  console.log(`mint creation confirmed: ${mintInitId}`)

  // Close account
  const closeMintAccountTx = new Transaction().add(
    createCloseAccountInstruction(
      mint.publicKey,
      authority.publicKey,
      authority.publicKey, // Authority
      [],
      TOKEN_2022_PROGRAM_ID
    )
  )

  latestBlockhash = await connection.getLatestBlockhash()
  closeMintAccountTx.feePayer = authority.publicKey
  closeMintAccountTx.recentBlockhash = latestBlockhash.blockhash
  closeMintAccountTx.lastValidBlockHeight = latestBlockhash.lastValidBlockHeight

  const closeAuthoritySigned = await authority.signTransaction(closeMintAccountTx)
  const closeMintId = await connection.sendRawTransaction(closeAuthoritySigned.serialize())
  await connection.confirmTransaction({ signature: closeMintId, ...latestBlockhash })
  console.log(`mint account closure confirmed: ${closeMintId}`)
}

main()
