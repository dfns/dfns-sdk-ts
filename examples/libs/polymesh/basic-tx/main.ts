/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { DfnsServiceAccountSigningManager } from '@dfns/lib-polymesh'
import { BigNumber, Polymesh } from '@polymeshassociation/polymesh-sdk'

import * as dotenv from 'dotenv'

dotenv.config()

async function main() {
  // Validate required environment variables
  const requiredEnvVars = [
    'POLYMESH_NODE_URL',
    'DFNS_API_URL',
    'DFNS_ORG_ID',
    'DFNS_CRED_ID',
    'DFNS_PRIVATE_KEY',
    'DFNS_AUTH_TOKEN',
  ]

  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      throw new Error(`Required environment variable ${envVar} is not set`)
    }
  }

  // Connect to Polymesh
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
      walletId: process.env.POLYMESH_WALLET_ID || undefined,
      user: process.env.DFNS_USER_ID || undefined,
    },
  })

  await client.setSigningManager(signingManager)
  console.log('DFNS Service Account Signing Manager created')

  const accounts = await signingManager.getAccounts()
  console.log('Number of available accounts:', accounts.length)
  if (accounts.length > 0) {
    console.log('First account address:', accounts[0])
  }

  // Set the signing manager for the Polymesh client
  await client.setSigningManager(signingManager)

  const amount = 0.000001 // Minimum transfer amount (1*10^-6 POLYX)
  console.log(`Sending ${amount} POLYX to recipient from account ${accounts[0]}`)

  // Create and execute the transfer transaction
  const transaction = await client.network.transferPolyx(
    {
      to: '5GDVGLrdAs4eVTi7rFzky68j64qYPgiu1JAoU1x3sYRABJjz',
      amount: new BigNumber(amount),
    },
    { signingAccount: accounts[0] }
  )

  await transaction.run()

  console.log(`Transaction ${transaction.txHash}: ${transaction.status}`)
}

main().catch(console.error)
