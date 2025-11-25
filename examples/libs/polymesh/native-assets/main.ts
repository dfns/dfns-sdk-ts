import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { DfnsWallet, DfnsSigningManager } from '@dfns/lib-polymesh'
import { BigNumber, Polymesh } from '@polymeshassociation/polymesh-sdk'
import { awaitMiddlewareSynced } from './utils'

import * as dotenv from 'dotenv'
import { CreateAssetWithTickerParams, FungibleAsset, FungibleLeg, KnownAssetType, VenueType } from '@polymeshassociation/polymesh-sdk/types'
import assert from 'assert'
import { DefaultPortfolio } from '@polymeshassociation/polymesh-sdk/internal'

dotenv.config()

const POLYMESH_ASSET_DECIMALS = 6

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

const createPolymeshClient = async (walletId: string): Promise<Polymesh> => {
  const client = await Polymesh.connect({
    nodeUrl: process.env.POLYMESH_NODE_URL!,
    polkadot: { noInitWarn: true },
  })

  const wallet = await initDfnsWallet(walletId)

  console.log(`Polymesh wallet address for ${walletId}: ${wallet.address}`)
  const signingManager = new DfnsSigningManager(wallet)
  await client.setSigningManager(signingManager)
  return client
}

/*
  Check if the given asset exists. If not create it.
  Asset creation is a multistep process:
    - Ticker Reservation
    - Asset Creation
    - Issue Tokens (optional). By default, the tokens will be issued on the default portfolio
*/
const getOrCreateAsset = async (
  client: Polymesh,
  ticker: string,
  assetParams: CreateAssetWithTickerParams
) => {
  let asset 
  try {
    asset = await client.assets.getFungibleAsset({ ticker })
  } catch(error: any) {
    if(!/There is no Asset with ticker:/i.test(error.message)){
      throw error
    }
  }
  if (!asset) {
    console.log(`Asset with given ticker not found... creating it`)
    console.log(`Reserving ticker: ${ticker}`)
    const reservationQueue = await client.assets.reserveTicker({ ticker })
    const reservation = await reservationQueue.run()

    console.log(`Creating asset`)
    const assetQueue = await reservation.createAsset(assetParams)
    asset = await assetQueue.run()

    console.log(`Asset created`)

    console.log(`Issuing Tokens for this asset`)

    const issueTokensTx = await asset.issuance.issue(
      { amount: new BigNumber(100000000) },
      { signingAccount: client.accountManagement.getSigningAccount()! }
    )
    await issueTokensTx.run()
    assert(issueTokensTx.isSuccess)
    console.log(`Tokens issued`)
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
  const asset = await getOrCreateAsset(
    senderClient,
    process.env.POLYMESH_ASSET_TICKER!,
    {
      name: 'Dfns FA',
      isDivisible: false,
      assetType: KnownAssetType.EquityCommon
    }
  )

  /*
  Now we will send this tokens to another accounts
  This is a various step process:
     - Create Venue
     - Create Instruction
     - Parties affirm instruction 
  */
  console.log(`Transferring some tokens to receiver`)
  const senderSigningIdentity = await senderClient.getSigningIdentity()
  const senderPortfolio = await senderSigningIdentity!.portfolios.getPortfolio()

  const receiverSigningIdentity = await receiverClient.getSigningIdentity()
  const receiverPortfolio = await receiverSigningIdentity!.portfolios.getPortfolio()

  console.log(`creating venue`)
  const venueTx = await senderClient.settlements.createVenue({
    description: 'DFNS Venue',
    type: VenueType.Exchange,
  })

  const venue = await venueTx.run()
  assert(venueTx.isSuccess)
  console.log(`venue created`)

  const amount = new BigNumber(3000000).shiftedBy(-1 * POLYMESH_ASSET_DECIMALS) // 3 tokens

  console.log(`create instruction`)
  const addInstructionTx = await venue.addInstruction({
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
  console.log(`instruction created`)
  
  await awaitMiddlewareSynced(addInstructionTx, senderClient, 20, 5000);

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

  const affirmTx = await receiverInstruction.affirm({}, { 
    signingAccount: receiverClient.accountManagement.getSigningAccount()! 
  })
  await affirmTx.run()
  assert(affirmTx.isSuccess)
  console.log(`Receiver affirmed`)
}

main()

