import { DfnsWallet } from '@dfns/lib-stellar'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import {
  Address,
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
import * as fs from 'fs'
import * as path from 'path'

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
  const preparedTx = await server.prepareTransaction(transaction)

  const signedTx = await wallet.sign(preparedTx)
  console.log(`soroban transaction signed`)

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

const uploadWasm = async (wallet: DfnsWallet, server: rpc.Server): Promise<Buffer> => {
  const wasm = fs.readFileSync(path.join(__dirname, 'hello_world.wasm'))

  const account = await server.getAccount(wallet.address)
  const transaction = new TransactionBuilder(account, {
    fee: BASE_FEE,
    networkPassphrase: Networks.TESTNET,
  })
    .addOperation(Operation.uploadContractWasm({ wasm }))
    .setTimeout(180)
    .build()

  const response = await signAndSubmit(wallet, server, transaction)
  const wasmHash = Buffer.from(scValToNative(response.returnValue!))
  console.log(`wasm hash: ${wasmHash.toString('hex')}`)

  return wasmHash
}

const createContract = async (wallet: DfnsWallet, server: rpc.Server, wasmHash: Buffer): Promise<string> => {
  const account = await server.getAccount(wallet.address)
  const transaction = new TransactionBuilder(account, {
    fee: BASE_FEE,
    networkPassphrase: Networks.TESTNET,
  })
    .addOperation(
      Operation.createCustomContract({
        address: new Address(wallet.address),
        wasmHash,
      })
    )
    .setTimeout(180)
    .build()

  const response = await signAndSubmit(wallet, server, transaction)
  const contractId = Address.fromScVal(response.returnValue!).toString()
  console.log(`contract id: ${contractId}`)

  return contractId
}

const invokeHello = async (wallet: DfnsWallet, server: rpc.Server, contractId: string) => {
  const account = await server.getAccount(wallet.address)
  const transaction = new TransactionBuilder(account, {
    fee: BASE_FEE,
    networkPassphrase: Networks.TESTNET,
  })
    .addOperation(new Contract(contractId).call('hello', nativeToScVal('Dfns', { type: 'string' })))
    .setTimeout(180)
    .build()

  const simulation = await server.simulateTransaction(transaction)
  if (!rpc.Api.isSimulationSuccess(simulation)) {
    throw new Error(`simulation failed: ${simulation.error}`)
  }
  console.log(`hello("Dfns") returned: ${JSON.stringify(scValToNative(simulation.result!.retval))}`)
}

async function main() {
  const wallet = await initDfnsWallet(process.env.STELLAR_WALLET_ID!)
  console.log('stellar wallet address: %s', wallet.address)

  const server = new rpc.Server(process.env.SOROBAN_RPC_URL!)

  const wasmHash = await uploadWasm(wallet, server)
  const contractId = await createContract(wallet, server, wasmHash)
  await invokeHello(wallet, server, contractId)
}

main()
