import dotenv from 'dotenv'
import { createPublicClient, http, zeroAddress, type Hex } from 'viem'
import { sepolia } from 'viem/chains'

import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { DfnsWallet } from '@dfns/lib-viem'

dotenv.config()

const initDfnsClient = () =>
  new DfnsApiClient({
    orgId: process.env.DFNS_ORG_ID!,
    authToken: process.env.DFNS_AUTH_TOKEN!,
    baseUrl: process.env.DFNS_API_URL!,
    signer: new AsymmetricKeySigner({
      credId: process.env.DFNS_CRED_ID!,
      privateKey: process.env.DFNS_PRIVATE_KEY!,
    }),
  })

const main = async () => {
  const dfnsClient = initDfnsClient()
  const walletId = process.env.ETHEREUM_WALLET_ID!

  const wallet = await DfnsWallet.init({ walletId, dfnsClient })

  const publicClient = createPublicClient({ chain: sepolia, transport: http() })

  const codeBefore = await publicClient.getCode({ address: wallet.address })
  if (!codeBefore || codeBefore === '0x') {
    console.log(`EOA ${wallet.address} has no delegation. Nothing to undelegate.`)
    return
  }
  console.log(`Current delegation code at ${wallet.address}: ${codeBefore}`)

  const nonce = await publicClient.getTransactionCount({ address: wallet.address })

  // Self-sponsored EIP-7702: the EOA signs the authorization AND sends the tx.
  // When the authority equals tx.origin, the auth nonce must be tx.nonce + 1
  // because the sender's nonce is bumped before authorizations are processed.
  const authorization = {
    chainId: sepolia.id,
    address: zeroAddress,
    nonce: nonce + 1,
  }

  const { status, signature } = await dfnsClient.wallets.generateSignature({
    walletId,
    body: { kind: 'Eip7702', ...authorization },
  })
  if (status !== 'Signed' || !signature) {
    throw new Error(`failed to sign authorization: status=${status}`)
  }

  const res = await dfnsClient.wallets.broadcastTransaction({
    walletId,
    body: {
      kind: 'Transaction',
      transaction: {
        to: wallet.address,
        data: '0x',
        nonce,
        authorizationList: [
          {
            ...authorization,
            signature: signature.encoded,
          },
        ],
      },
    },
  })

  if (res.status !== 'Broadcasted' || !res.txHash) {
    throw new Error(`failed to undelegate EOA: status=${res.status}`)
  }

  console.log(`Submitted undelegation tx: ${res.txHash}`)
  const receipt = await publicClient.waitForTransactionReceipt({ hash: res.txHash as Hex })
  console.log(`Mined in block ${receipt.blockNumber} with status=${receipt.status}`)

  const codeAfter = await publicClient.getCode({ address: wallet.address })
  console.log(`Code at ${wallet.address} after undelegation: ${codeAfter ?? '0x'}`)
}

main()
