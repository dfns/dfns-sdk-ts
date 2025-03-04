import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { DfnsWallet, DfnsSigningManager } from '@dfns/lib-polymesh'
import { BigNumber, Polymesh } from '@polymeshassociation/polymesh-sdk'
import { MAX_DECIMALS } from '@polymeshassociation/polymesh-sdk/utils/constants'


import * as dotenv from 'dotenv'

dotenv.config()

const initDfnsWallet = async (walletId: string) => {
  const signer = new AsymmetricKeySigner({
    credId: process.env.DFNS_CRED_ID!,
    privateKey: process.env.DFNS_PRIVATE_KEY!,
  })

  const dfnsClient = new DfnsApiClient({
    appId: process.env.DFNS_APP_ID!,
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
  const polymeshWalletId = process.env.POLYMESH_WALLET_ID!
  const senderWallet = await initDfnsWallet(polymeshWalletId)
  console.log('Polymesh wallet address: %s', senderWallet.address)

  // create DfnsSigning Manager
  const signingManager = new DfnsSigningManager(senderWallet)
  console.log('Polymesh signing manager created')

  const client = await Polymesh.connect({
    nodeUrl: process.env.POLYMESH_NODE_URL!,
    polkadot: { noInitWarn: true },
    signingManager
  })

  const amount = 1
  console.log(`Sending ${amount} in minimal decimal representation of PolyX.`)

  const transaction = await client.network.transferPolyx({
    to: '5GDVGLrdAs4eVTi7rFzky68j64qYPgiu1JAoU1x3sYRABJjz',
    amount: new BigNumber(amount).shiftedBy(-1 * MAX_DECIMALS)
  })
  
  await transaction.run()

  console.log(`transaction ${transaction.txHash}: ${transaction.status}`)
}

main()
