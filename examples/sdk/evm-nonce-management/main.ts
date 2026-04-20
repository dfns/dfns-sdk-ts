import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import dotenv from 'dotenv'

dotenv.config()

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const main = async () => {
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

  const walletId = process.env.WALLET_ID!

  // Fetch wallet to get its address for the self-transfer
  const wallet = await dfnsClient.wallets.getWallet({ walletId })
  const address = wallet.address!
  console.log(`Wallet address: ${address}`)

  // Step 1: Broadcast a self-transfer of 0 ETH with a very low fee using the
  // Transaction API. We try increasing maxFeePerGas values until the node accepts the transaction. The near-zero priority fee
  // means validators have no incentive to include it.
  console.log('\n--- Step 1: Broadcasting a stuck transaction (very low fee) ---')

  const maxPriorityFeePerGas = 0n
  const feeAttempts = [1_000_000n, 10_000_000n, 30_000_000n, 50_000_000n, 100_000_000n, 300_000_000n, 500_000_000n, 1_000_000_000n, 10_000_000_000n]

  let stuckTx
  for (const maxFeePerGas of feeAttempts) {
    console.log(`  Trying maxFeePerGas: ${maxFeePerGas} wei...`)
    const tx = await dfnsClient.wallets.broadcastTransaction({
      walletId,
      body: {
        kind: 'Eip1559',
        to: address,
        value: '0',
        maxFeePerGas: maxFeePerGas.toString(),
        maxPriorityFeePerGas: maxPriorityFeePerGas.toString(),
      },
    })

    if (tx.status !== 'Failed') {
      console.log(`  Accepted at maxFeePerGas: ${maxFeePerGas} wei`)
      stuckTx = tx
      break
    }

    console.log(`  Rejected: ${tx.reason}`)
  }

  if (!stuckTx) {
    console.log('  Could not broadcast a stuck transaction at any fee level.')
    return
  }

  console.log(`Stuck transaction id: ${stuckTx.id}`)
  console.log(`Stuck transaction status: ${stuckTx.status}`)
  console.log(`Stuck transaction hash: ${stuckTx.txHash}`)

  // Step 2: Create a transfer of 0 ETH with a normal fee using the Transfer
  // API. Because this transfer will be assigned the next nonce, it cannot be
  // mined until the stuck transaction (previous nonce) is confirmed first.
  console.log('\n--- Step 2: Creating a transfer (normal fee, queued behind stuck tx) ---')
  const queuedTransfer = await dfnsClient.wallets.transferAsset({
    walletId,
    body: {
      kind: 'Native',
      to: address,
      amount: '0',
    },
  })

  console.log(`Queued transfer id: ${queuedTransfer.id}`)
  console.log(`Queued transfer status: ${queuedTransfer.status}`)
  console.log(`Queued transfer hash: ${queuedTransfer.txHash}`)
  // Step 3: Speed up the stuck transaction. This resubmits it with a higher
  // fee so validators will pick it up.
  console.log('\n--- Step 3: Speeding up the stuck transaction ---')
  const speedUpResult = await dfnsClient.wallets.speedUpTransaction({
    walletId,
    transactionId: stuckTx.id,
  })

  console.log(`Speed-up transaction id: ${speedUpResult.id}`)
  console.log(`Speed-up transaction status: ${speedUpResult.status}`)
  if (speedUpResult.txHash) {
    console.log(`Speed-up tx hash: ${speedUpResult.txHash}`)
  }

  // Step 4: Poll the speed-up transaction until it confirms.
  console.log('\n--- Step 4: Waiting for speed-up transaction to confirm ---')
  let speedUpConfirmed = false
  for (let i = 1; i <= 60; i++) {
    await sleep(3000)
    const tx = await dfnsClient.wallets.getTransaction({
      walletId,
      transactionId: speedUpResult.id,
    })
    console.log(`  [${i * 3}s] Speed-up status: ${tx.status}`)
    if (tx.status === 'Confirmed') {
      console.log(`  Speed-up confirmed! tx hash: ${tx.txHash}`)
      speedUpConfirmed = true
      break
    }
    if (tx.status === 'Failed' || tx.status === 'Rejected') {
      console.log(`  Speed-up ${tx.status}: ${tx.reason}`)
      return
    }
  }

  if (!speedUpConfirmed) {
    console.log('  Speed-up did not confirm within the expected time.')
    return
  }

  // Step 5: Now that the stuck nonce is resolved, poll the queued transfer
  // until it completes. It should be picked up automatically.
  console.log('\n--- Step 5: Waiting for queued transfer to complete ---')
  for (let i = 1; i <= 60; i++) {
    await sleep(1000)
    const transfer = await dfnsClient.wallets.getTransfer({
      walletId,
      transferId: queuedTransfer.id,
    })
    console.log(`  [${i}s] Transfer status: ${transfer.status}`)
    if (transfer.status === 'Confirmed') {
      console.log(`  Transfer confirmed! tx hash: ${transfer.txHash}`)
      break
    }
    if (transfer.status === 'Failed' || transfer.status === 'Rejected') {
      console.log(`  Transfer ${transfer.status}: ${transfer.reason}`)
      break
    }
  }

  console.log('\nDone!')
}

main()
