import { DfnsWallet } from '@dfns/lib-stellar'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import {
  Address,
  Asset,
  BASE_FEE,
  Contract,
  Networks,
  Operation,
  Transaction,
  TransactionBuilder,
  nativeToScVal,
  rpc,
  scValToNative,
} from '@stellar/stellar-sdk'

import * as dotenv from 'dotenv'

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

  return DfnsWallet.init({
    walletId: walletId,
    dfnsClient,
  })
}

const signAndSubmit = async (
  wallet: DfnsWallet,
  server: rpc.Server,
  transaction: Transaction
): Promise<rpc.Api.GetSuccessfulTransactionResponse> => {
  const signedTx = await wallet.sign(transaction)
  console.log(`transaction signed`)

  const sent = await server.sendTransaction(signedTx)
  if (sent.status !== 'PENDING') {
    throw new Error(`sendTransaction failed with status ${sent.status}: ${sent.errorResult?.toXDR('base64')}`)
  }
  console.log(`transaction broadcasted: ${sent.hash}`)

  let response = await server.getTransaction(sent.hash)
  while (response.status === rpc.Api.GetTransactionStatus.NOT_FOUND) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    response = await server.getTransaction(sent.hash)
  }

  if (response.status !== rpc.Api.GetTransactionStatus.SUCCESS) {
    throw new Error(`transaction ${sent.hash} failed: ${response.resultXdr.toXDR('base64')}`)
  }

  return response
}

const createTrustline = async (distributor: DfnsWallet, server: rpc.Server, asset: Asset) => {
  const account = await server.getAccount(distributor.address)
  const transaction = new TransactionBuilder(account, {
    fee: BASE_FEE,
    networkPassphrase: Networks.TESTNET,
  })
    .addOperation(Operation.changeTrust({ asset }))
    .setTimeout(180)
    .build()

  // classic operation, nothing to prepare
  await signAndSubmit(distributor, server, transaction)
  console.log(`trustline ${asset.code}:${asset.issuer} created for ${distributor.address}`)
}

const deploySac = async (issuer: DfnsWallet, server: rpc.Server, asset: Asset): Promise<string> => {
  const account = await server.getAccount(issuer.address)
  const transaction = new TransactionBuilder(account, {
    fee: BASE_FEE,
    networkPassphrase: Networks.TESTNET,
  })
    .addOperation(Operation.createStellarAssetContract({ asset }))
    .setTimeout(180)
    .build()

  const preparedTx = await server.prepareTransaction(transaction)
  const response = await signAndSubmit(issuer, server, preparedTx)
  const contractId = Address.fromScVal(response.returnValue!).toString()
  console.log(`stellar asset contract deployed: ${contractId}`)

  return contractId
}

const transferViaSac = async (issuer: DfnsWallet, server: rpc.Server, contractId: string, to: string, amount: bigint) => {
  const account = await server.getAccount(issuer.address)
  const transaction = new TransactionBuilder(account, {
    fee: BASE_FEE,
    networkPassphrase: Networks.TESTNET,
  })
    .addOperation(
      new Contract(contractId).call(
        'transfer',
        nativeToScVal(issuer.address, { type: 'address' }),
        nativeToScVal(to, { type: 'address' }),
        nativeToScVal(amount, { type: 'i128' })
      )
    )
    .setTimeout(180)
    .build()

  // simulation fills the footprint, the resource fee and the source account auth entry
  const preparedTx = await server.prepareTransaction(transaction)
  await signAndSubmit(issuer, server, preparedTx)
  console.log(`transferred ${amount} stroops of the asset from ${issuer.address} to ${to} through the contract`)
}

const readBalance = async (server: rpc.Server, contractId: string, holder: string): Promise<bigint> => {
  const account = await server.getAccount(holder)
  const transaction = new TransactionBuilder(account, {
    fee: BASE_FEE,
    networkPassphrase: Networks.TESTNET,
  })
    .addOperation(new Contract(contractId).call('balance', nativeToScVal(holder, { type: 'address' })))
    .setTimeout(180)
    .build()

  const simulation = await server.simulateTransaction(transaction)
  if (!rpc.Api.isSimulationSuccess(simulation)) {
    throw new Error(`simulation failed: ${simulation.error}`)
  }

  return scValToNative(simulation.result!.retval)
}

async function main() {
  const issuer = await initDfnsWallet(process.env.ISSUER_WALLET_ID!)
  console.log('issuer address: %s', issuer.address)

  const distributor = await initDfnsWallet(process.env.DISTRIBUTOR_WALLET_ID!)
  console.log('distributor address: %s', distributor.address)

  const server = new rpc.Server(process.env.SOROBAN_RPC_URL!)

  // a classic asset issued by the issuer wallet, 7 decimals like every classic asset
  const asset = new Asset('DFNS', issuer.address)

  await createTrustline(distributor, server, asset)
  const contractId = await deploySac(issuer, server, asset)

  // interact with the contract (here a basic transfer). We might support it directly later
  await transferViaSac(issuer, server, contractId, distributor.address, 1_000_0000000n)

  const balance = await readBalance(server, contractId, distributor.address)
  console.log(`balance(${distributor.address}) = ${balance} stroops`)
}

main()
