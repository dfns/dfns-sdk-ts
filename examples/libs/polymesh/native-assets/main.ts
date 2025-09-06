/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { DfnsServiceAccountSigningManager } from '@dfns/lib-polymesh'
import { BigNumber, Polymesh } from '@polymeshassociation/polymesh-sdk'

import * as dotenv from 'dotenv'
import {
  CreateAssetWithTickerParams,
  FungibleAsset,
  FungibleLeg,
  KnownAssetType,
} from '@polymeshassociation/polymesh-sdk/types'
import assert from 'assert'
import { DefaultPortfolio } from '@polymeshassociation/polymesh-sdk/internal'

dotenv.config()

const createPolymeshClient = async (walletId: string): Promise<Polymesh> => {
  const client = await Polymesh.connect({
    nodeUrl: process.env.POLYMESH_NODE_URL!,
    polkadot: { noInitWarn: true },
  })

  // Create DFNS Service Account Signing Manager
  const signingManager = await DfnsServiceAccountSigningManager.create({
    connection: {
      baseUrl: process.env.DFNS_API_URL!,
      orgId: process.env.DFNS_ORG_ID!,
    },
    auth: {
      credId: process.env.DFNS_CRED_ID!,
      privateKey: process.env.DFNS_PRIVATE_KEY!,
      authToken: process.env.DFNS_AUTH_TOKEN!,
    },
    walletFilter: {
      walletId,
    },
  })

  await client.setSigningManager(signingManager)

  const accounts = await signingManager.getAccounts()
  console.log(`Polymesh wallet address for ${walletId}: ${accounts[0]}`)

  return client
}

/*
  Check if the given asset exists. If not create it.
  Asset creation is a multistep process:
    - Ticker Reservation
    - Asset Creation
    - Issue Tokens (optional). By default, the tokens will be issued on the default portfolio
*/
const getOrCreateAsset = async (client: Polymesh, assetParams: CreateAssetWithTickerParams) => {
  let asset
  try {
    asset = await client.assets.getFungibleAsset({ ticker: assetParams.ticker! })
  } catch (error) {
    if (!/There is no Asset with ticker:/i.test(error instanceof Error ? error.message : String(error))) {
      throw error
    }
  }
  if (!asset) {
    console.log(`Asset with given ticker not found... creating it`)
    console.log(`Creating asset`)
    const assetTx = await client.assets.createAsset(assetParams)
    asset = await assetTx.run()

    console.log(`Asset created`)

    assert(assetTx.isSuccess)
  }

  console.log(`Asset to be transferred: ${asset.rawId}`)

  return asset
}

async function main() {
  const senderWalletId = process.env.POLYMESH_SENDER_WALLET_ID!
  const senderClient = await createPolymeshClient(senderWalletId)

  const receiverWalletId = process.env.POLYMESH_RECEIVER_WALLET_ID!
  const receiverClient = await createPolymeshClient(receiverWalletId)

  // Get Asset for ticker. If it doesn't exist, create it
  const asset = await getOrCreateAsset(senderClient, {
    name: 'Dfns FA',
    isDivisible: false,
    assetType: KnownAssetType.EquityCommon,
    initialSupply: new BigNumber(100),
    ticker: process.env.POLYMESH_ASSET_TICKER!,
  })

  /*
  Now we will send this tokens to another accounts
  This is a various step process:
     - Create Instruction
     - Parties affirm instruction 
  */
  console.log(`Transfering some tokens to receiver`)
  const senderSigningIdentity = await senderClient.getSigningIdentity()

  if (!senderSigningIdentity) {
    throw new Error('Sender identity not found')
  }
  const senderPortfolio = await senderSigningIdentity.portfolios.getPortfolio()

  const receiverSigningIdentity = await receiverClient.getSigningIdentity()
  if (!receiverSigningIdentity) {
    throw new Error('Receiver identity not found')
  }
  const receiverPortfolio = await receiverSigningIdentity.portfolios.getPortfolio()

  const amount = new BigNumber(1) // 3 tokens

  console.log(`create instruction`)
  const addInstructionTx = await senderClient.settlements.addInstruction({
    venueId: undefined,
    legs: [
      {
        amount,
        from: senderPortfolio,
        to: receiverPortfolio,
        asset,
      },
    ],
  })
  const instruction = await addInstructionTx.run()
  assert(addInstructionTx.isSuccess)
  console.log(`instruction created with ID: ${instruction.id.toString()}`)

  console.log(`Receiver affirmation`)
  const { pending } = await receiverSigningIdentity!.getInstructions()

  // get only the pending instruction with the right id
  const receiverInstruction = pending.find(({ id }) => id.eq(instruction.id))
  assert(receiverInstruction, 'the receiver should have the instruction as pending')

  // No needs for pagination here since it's a simple transfer
  const legs = await receiverInstruction.getLegs()
  // Feel free to change this display
  const leg = legs.data[0] as FungibleLeg
  console.log(`Leg instruction: 
    {
      asset:   ${(leg.asset as FungibleAsset).id},
      fromDiD: ${(leg.from as DefaultPortfolio).toHuman().did},
      toDiD:   ${(leg.to as DefaultPortfolio).toHuman().did},
      amount:  ${leg.amount.toString()},
    }`)

  const affirmTx = await receiverInstruction.affirm(
    {},
    {
      signingAccount: receiverClient.accountManagement.getSigningAccount()!,
    }
  )
  await affirmTx.run()
  assert(affirmTx.isSuccess)
  console.log(`Receiver affirmed`)
}

main()
