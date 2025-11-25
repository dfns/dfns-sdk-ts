import { DfnsWallet } from '@dfns/lib-iota'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { IotaClient, IotaMoveObject, IotaObjectChange, MoveStruct, MoveValue } from '@iota/iota-sdk/client'
import { Transaction } from '@iota/iota-sdk/transactions'

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
const prepareLockingTransaction = (tx: Transaction, recipient: string, amount: number, expirationMs: number): void => {
  const [coin] = tx.splitCoins(tx.gas, [amount])
  const balance = tx.moveCall({
    target: '0x2::coin::into_balance',
    typeArguments: ['0x2::iota::IOTA'],
    arguments: [coin],
  })

  tx.moveCall({
    target: '0x2::timelock::lock_and_transfer',
    typeArguments: ['0x2::balance::Balance<0x2::iota::IOTA>'],
    arguments: [balance, tx.pure.address(recipient), tx.pure.u64(expirationMs)],
  })
}

const prepareUnlockingTransaction = (tx: Transaction, lockedObjects: string[], recipient: string): void => {
  const coins = lockedObjects.map((objectId) => {
    const [unlock] = tx.moveCall({
      target: '0x2::timelock::unlock',
      typeArguments: ['0x2::balance::Balance<0x2::iota::IOTA>'],
      arguments: [tx.object(objectId)],
    })
    return tx.moveCall({
      target: '0x2::coin::from_balance',
      typeArguments: ['0x2::iota::IOTA'],
      arguments: [tx.object(unlock)],
    })[0]
  })
  tx.transferObjects(coins, tx.pure.address(recipient))
}

const main = async (): Promise<void> => {
  const wallet = await initDfnsWallet(process.env.IOTA_WALLET_ID!)
  console.log(`Iota wallet address: ${wallet.address}`)
  const client = new IotaClient({ url: process.env.IOTA_RPC_URL! })
  const amount = 1
  const recipient = wallet.address
  const expirationMs = Date.now() - 10 * 24 * 60 * 60 * 1000

  console.log(`Preparing lock & transfer: Amount = ${amount}, Recipient = ${recipient}, Expiration = ${expirationMs}`)
  let tx = new Transaction()
  prepareLockingTransaction(tx, recipient, amount, expirationMs)
  let txRes = await client.signAndExecuteTransaction({
    transaction: tx,
    signer: wallet,
    options: { showObjectChanges: true },
  })
  console.log(`Transaction broadcasted: hash = ${txRes.digest}`)

  if (!txRes.objectChanges) throw new Error('Failed to retrieve objectChanges')

  // To be sure the locked object will appear when callin getOwnedObjects
  await client.waitForTransaction({ digest: txRes.digest })

  console.log('\n\nTimelocked objects after locking transaction:\n')

  await displayTimelockedObjects(client, recipient)

  const lockedObjects = txRes.objectChanges
    .filter((o: IotaObjectChange) => o.type === 'created' && o.objectType.includes('TimeLock'))
    .map((o) => (o as { objectId: string }).objectId)

  if (!lockedObjects.length) throw new Error('No locked objects found')

  console.log(`\n\nUnlocking previous locked objects: ${lockedObjects}`)

  // We need to be sure that the object made it on chain. Unfortunately,
  // signAndExecuteTransaction can return before the tx makes it onchain.
  // The execution is made locally
  await client.waitForTransaction({ digest: txRes.digest })

  tx = new Transaction()
  prepareUnlockingTransaction(tx, lockedObjects, recipient)
  txRes = await client.signAndExecuteTransaction({ transaction: tx, signer: wallet })
  console.log(`Transaction broadcasted: hash = ${txRes.digest}`)
}

type MoveObjectWithId = IotaMoveObject & { objectId: string }

const getOwnedObjects = async (client: IotaClient, owner: string, objectType: string): Promise<MoveObjectWithId[]> => {
  let nextCursor: string | null = null
  let hasNextPage = true
  const objects: MoveObjectWithId[] = []

  while (hasNextPage) {
    const ownedObjects = await client.getOwnedObjects({
      owner,
      filter: { StructType: objectType },
      options: { showType: true, showContent: true },
      cursor: nextCursor,
    })
    ownedObjects.data.forEach((o) => {
      if (o.data?.content?.dataType === 'moveObject') {
        objects.push({ ...o.data.content, objectId: o.data?.objectId || 'unknown' })
      }
    })
    nextCursor = ownedObjects.nextCursor || null
    hasNextPage = ownedObjects.hasNextPage
  }
  return objects
}

const displayTimelockedObjects = async (client: IotaClient, recipient: string): Promise<void> => {
  const timelockedObjects = await getOwnedObjects(
    client,
    recipient,
    '0x2::timelock::TimeLock<0x2::balance::Balance<0x2::iota::IOTA>>'
  )
  console.log('ObjectId | Amount | Expiration')
  timelockedObjects.forEach((t) => {
    const value = getMoveFields(t)['locked']?.toString() ?? '0'
    const expiration = getMoveFields(t)['expiration_timestamp_ms']?.toString() ?? '0'
    console.log(`${t.objectId} | ${value} | ${expiration}`)
  })
}

const getMoveFields = (object: MoveStruct): { [key: string]: MoveValue } =>
  isMoveStructWithFields(object) ? object.fields : {}
const isMoveStructWithFields = (data: any): data is { fields: { [key: string]: MoveValue }; type: string } =>
  data && typeof data === 'object' && 'fields' in data

main()
