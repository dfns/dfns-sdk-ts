import { DfnsWallet } from '@dfns/lib-iota'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { IotaClient } from '@iota/iota-sdk/client'
import { Transaction } from '@iota/iota-sdk/transactions'

import * as dotenv from 'dotenv'

dotenv.config()

const initDfnsWallet = async (walletId: string) => {
  const signer = new AsymmetricKeySigner({
    credId: process.env.DFNS_CRED_ID!,
    privateKey: process.env.DFNS_PRIVATE_KEY!,
  })

  const dfnsClient = new DfnsApiClient({
    authToken: process.env.DFNS_AUTH_TOKEN!,
    baseUrl: process.env.DFNS_API_URL!,
    signer,
  })

  return DfnsWallet.init({
    walletId: walletId,
    dfnsClient,
  })
}

async function main() {
  const BuildOnly = process.env.BUILD_ONLY === 'true'
  const wallet = await initDfnsWallet(process.env.IOTA_WALLET_ID!)
  console.log(`Iota wallet:\n Id: ${process.env.IOTA_WALLET_ID!}\n address: ${wallet.address}\n`)

  const client = new IotaClient({ url: process.env.IOTA_RPC_URL! })

  const contract = '0x8e52c5bd5a915e45353f2c5087c299061e4cfd7cac659271e7da57d5fb920658'
  const module = 'app'
  const execute = 'write_message'

  console.log(`calling contract = ${contract}, module = ${module}, execute = ${execute}`)

  const objectToWriteInAddress = "0x09cf262209e4fd39853a14411379d87fced470bf7085f2610374f3a12fafcd40"

  const message = `Message_${Date.now()}`

  console.log(`\nwriting message = ${message} in object = ${objectToWriteInAddress}`)

  const tx = new Transaction()

  tx.moveCall({
    target: `${contract}::${module}::${execute}`,
    arguments: [
      tx.object(objectToWriteInAddress),
      tx.pure.string(message),
    ],
  })

  if(BuildOnly){
    tx.setSender(wallet.address)
    const unsignedTx = await tx.build({client})
    console.log(`\nunsigned transaction =\n ${`0x${Buffer.from(unsignedTx).toString('hex')}`}`)

    return
  }

  const res = await client.signAndExecuteTransaction({transaction: tx, signer: wallet})

  console.log(`transaction broadcasted: hash = ${res.digest}`)
}

main()
