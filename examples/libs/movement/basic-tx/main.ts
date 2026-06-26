import {
  Movement,
  MovementConfig,
  MimeType,
  Network,
  PendingTransactionResponse,
  postAptosFullNode,
} from '@moveindustries/ts-sdk'
import { DfnsWallet } from '@dfns/lib-movement'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'

import * as dotenv from 'dotenv'

dotenv.config()

// Movement's native gas token, used as the type argument of `0x1::coin::transfer`
const MOVE_COIN = '0x1::aptos_coin::AptosCoin'

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
  const wallet = await initDfnsWallet(process.env.MOVEMENT_WALLET_ID!)

  // If you want to provide your own fullnode/indexer URL, you need to use `Network.CUSTOM`
  const movementConfig = new MovementConfig({
    network: Network.TESTNET,
  })
  const client = new Movement(movementConfig)

  console.log('wallet address: ', wallet.address)
  let balance = await client.account.getAccountMOVEAmount({ accountAddress: wallet.address })
  console.log('initial wallet balance: ', balance)

  const tx = await client.transaction.build.simple({
    sender: wallet.address,
    data: {
      function: '0x1::coin::transfer',
      typeArguments: [MOVE_COIN],
      functionArguments: [
        '0x5bdc24cb9033286ffe19f436145b9e2267dd03b0fd0d422459d381a6431d39ba', // Receiver
        '1', // Amount
      ],
    },
  })

  // No additional signers, we can sign directly the tx
  const signed = await wallet.signTransaction(tx)

  const { data } = await postAptosFullNode<Uint8Array, PendingTransactionResponse>({
    movementConfig: client.config,
    body: signed.bcsToBytes(),
    path: 'transactions',
    originMethod: 'submitTransaction',
    contentType: MimeType.BCS_SIGNED_TRANSACTION,
  })

  // Wait for the transaction to be included
  await client.waitForTransaction({ transactionHash: data.hash })

  balance = await client.account.getAccountMOVEAmount({ accountAddress: wallet.address })
  console.log('balance after transfer: ', balance)
}

main()
