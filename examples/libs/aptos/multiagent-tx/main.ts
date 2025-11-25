import {
  AccountAddress,
  Aptos,
  APTOS_COIN,
  AptosConfig,
  MimeType,
  Network,
  parseTypeTag,
  PendingTransactionResponse,
  postAptosFullNode,
  U64,
} from '@aptos-labs/ts-sdk'
import { DfnsWallet, hexToBuffer } from '@dfns/lib-aptos'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'

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
    walletId,
    dfnsClient,
  })
}

async function main() {
  const sender = await initDfnsWallet(process.env.APTOS_SENDER_WALLET_ID!)
  const receiver = await initDfnsWallet(process.env.APTOS_RECEIVER_WALLET_ID!)

  // If you want to provide your own fullnode/indexer URL, you need to use `Network.CUSTOM`
  const aptosConfig = new AptosConfig({
    network: Network.TESTNET,
  })
  const client = new Aptos(aptosConfig)

  console.log('sender wallet address: ', sender.address)
  console.log('receiver wallet address: ', receiver.address)

  console.log('creating a new object owned by sender')

  // We first create an object owned by the receiver
  const createObjectScript =
    '0xa11ceb0b060000000601000402040403080a051209071b3608512000000001000302000102000200000402030001060c000105010800066f626a656374067369676e65720a616464726573735f6f660e436f6e7374727563746f725265660d6372656174655f6f626a6563740000000000000000000000000000000000000000000000000000000000000001000001050b00110011010102'

  const createObject = await client.transaction.build.simple({
    sender: new AccountAddress(hexToBuffer(sender.address)),
    data: {
      bytecode: createObjectScript,
      functionArguments: [],
    },
  })

  // simple transaction
  const signed = await sender.signTransaction(createObject.rawTransaction)

  const { data } = await postAptosFullNode<Uint8Array, PendingTransactionResponse>({
    aptosConfig: client.config,
    body: signed.bcsToBytes(),
    path: 'transactions',
    originMethod: 'submitTransaction',
    contentType: MimeType.BCS_SIGNED_TRANSACTION,
  })

  let response = await client.waitForTransaction({ transactionHash: data.hash })

  const objects = await client.getAccountOwnedObjects({
    accountAddress: sender.address,
    minimumLedgerVersion: BigInt(response.version),
  })

  const objectAddress = objects[0].object_address

  console.log(`created object address: ${objectAddress}`)

  // Then we create the multiAgent transaction that will give the receiver the ownership of the object
  const transferObjectMultiSigScript =
    '0xa11ceb0b060000000701000602060a031017042706052d2d075a4b08a5012000000001000201030701000101040800020503040000060602010001070408010801060902010801050207030704060c060c0503010b000108010001060c010501090003060c0503010801010b0001090003060c0b000109000504636f696e066f626a656374067369676e6572064f626a6563740a4f626a656374436f72650a616464726573735f6f66087472616e7366657211616464726573735f746f5f6f626a6563740000000000000000000000000000000000000000000000000000000000000001010000010e0a010a0011000b0338000b0238010c040b000b040b011100380202'

  const transferTx = await client.transaction.build.multiAgent({
    sender: sender.address,
    data: {
      bytecode: transferObjectMultiSigScript,
      typeArguments: [parseTypeTag(APTOS_COIN)],
      functionArguments: [AccountAddress.fromString(objectAddress), new U64(1)],
    },
    secondarySignerAddresses: [receiver.address],
  })
  console.log(`ownership transfer transaction created`)
  // sender signs
  const partial = await sender.signTransaction(transferTx)
  console.log(`sender signed`)
  // receiver signs
  const complete = await receiver.signTransaction(partial)
  console.log(`receiver signed`)

  const {
    data: { hash },
  } = await postAptosFullNode<Uint8Array, PendingTransactionResponse>({
    aptosConfig: client.config,
    body: complete.bcsToBytes(),
    path: 'transactions',
    originMethod: 'submitTransaction',
    contentType: MimeType.BCS_SIGNED_TRANSACTION,
  })
  console.log(`transaction broadcasted: ${hash}`)

  response = await client.waitForTransaction({ transactionHash: hash })

  console.log(`checking if the object has a new owner`)
  const receiverObjects = await client.getAccountOwnedObjects({
    accountAddress: receiver.address,
    minimumLedgerVersion: BigInt(response.version),
  })

  console.log(`ownership transferred: ${receiverObjects[0].owner_address === receiver.address}`)
}

main()
