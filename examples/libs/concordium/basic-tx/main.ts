 import { DfnsWallet } from '@dfns/lib-concordium'
 import { DfnsApiClient } from '@dfns/sdk'
 import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
 import {
   AccountAddress,
   CcdAmount,
   ConcordiumGRPCClient,
   SequenceNumber,
   Transaction,
   TransactionExpiry,
 } from '@concordium/web-sdk'
 import { ChannelCredentials } from '@grpc/grpc-js'
 import { GrpcTransport } from '@protobuf-ts/grpc-transport'
 import dotenv from 'dotenv'

 dotenv.config()

const stripHexPrefix = (hex: string): string => {
  return hex.replace(/^0x/, '')
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
   const wallet = await initDfnsWallet(process.env.CONCORDIUM_WALLET_ID!)
   const senderAddress = wallet.getAccountAddress()!
   console.log(`Concordium wallet address: ${senderAddress.address}`)

   const client = new ConcordiumGRPCClient(
     new GrpcTransport({
       host: process.env.CONCORDIUM_NODE_URL!,
       channelCredentials: ChannelCredentials.createSsl(),
       timeout: 15000,
     })
   )

   const toAddress = AccountAddress.fromBase58('4HhAcToZs6rtxGcgsBRS3VcjeAECPTTSTFVUKS6rBSVEZAPL6d')
   const amount = CcdAmount.fromMicroCcd(1n)

   const tx = Transaction.transfer({
     amount,
     toAddress,
   })

   tx.header.sender = senderAddress
   const { nonce } = await client.getNextAccountNonce(senderAddress)
   tx.header.nonce = SequenceNumber.create(nonce.value)
   tx.header.expiry = TransactionExpiry.fromEpochSeconds(BigInt(Math.floor(Date.now() / 1000) + 3600))

   console.log(`Transferring 1e-6 CCD to ${toAddress.address}`)

   const signature = await wallet.signTransaction(tx)

   console.log('Transaction signed successfully')

   // Single Sig Transaction
   const signedData = Transaction.addSignature(tx as any, { '0': { '0': stripHexPrefix(signature) } })
   const finalized = Transaction.finalize(signedData)
   const txHash = await client.sendTransaction(finalized)

   console.log(`Transaction submitted: ${txHash}`)
 }

 main()