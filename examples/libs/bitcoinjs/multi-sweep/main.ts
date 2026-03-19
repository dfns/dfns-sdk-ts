import { initEccLib } from 'bitcoinjs-lib'
import * as ecc from 'tiny-secp256k1'
// If we have a taproot wallet...
initEccLib(ecc)

import { DfnsWallet } from '@dfns/lib-bitcoinjs'
import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { address as btcAddress, Network, networks, Psbt } from 'bitcoinjs-lib'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

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

const initDfnsWallet = async (walletId: string) => {
  return DfnsWallet.init({ walletId, dfnsClient })
}

type UTXO = {
  txid: string
  vout: number
  value: number
  status: {
    confirmed: boolean
    block_height: number
    block_hash: string
    block_time: number
  }
}

const btcNetworks: Record<string, Network> = {
  Bitcoin: networks.bitcoin,
  BitcoinTestnet3: networks.testnet,
  BitcoinSignet: networks.testnet,
}

const mempoolUrl = process.env.MEMPOOL_API_URL!

// Here we are using mempool.space's API to fetch UTXOs, but you can use any other provider
const fetchUtxos = async (address: string): Promise<UTXO[]> => {
  const response = await axios.get(`${mempoolUrl}/address/${address}/utxo`)
  return response.data
}

// Estimate virtual size based on input/output types
// P2WPKH input: ~68 vB, P2TR input: ~57.5 vB
// Single output: P2WPKH ~31 vB, P2TR ~43 vB
// Header: ~10.5 vB
const estimateVsize = (inputs: { scheme: string }[], destinationAddress: string): number => {
  let vsize = 10.5

  for (const input of inputs) {
    vsize += input.scheme === 'Schnorr' ? 57.5 : 68
  }

  // P2TR destinations start with bc1p / tb1p
  const isP2TR = destinationAddress.startsWith('bc1p') || destinationAddress.startsWith('tb1p')
  vsize += isP2TR ? 43 : 31

  return Math.ceil(vsize)
}

const main = async () => {
  const walletIds = process.env.WALLET_IDS!.split(',').map((id) => id.trim())
  const destinationAddress = process.env.DESTINATION_ADDRESS!

  if (walletIds.length === 0) throw new DfnsError(-1, 'WALLET_IDS is empty')

  console.log(`Sweeping ${walletIds.length} wallet(s) to ${destinationAddress}`)

  // Init all wallets
  console.log('\n1. Initializing wallets...')
  const wallets = await Promise.all(walletIds.map((id) => initDfnsWallet(id)))

  // Verify all wallets are on the same Bitcoin network (extra security)
  const walletNetwork = wallets[0].network
  const btcNetwork = btcNetworks[walletNetwork]

  for (const w of wallets) {
    if (w.network !== walletNetwork) {
      throw new DfnsError(-1, `Network mismatch: expected ${walletNetwork}, got ${w.network}`)
    }
  }

  console.log(`Network: ${walletNetwork}`)

  // Fetch UTXOs for all wallets
  console.log('\n2. Fetching UTXOs...')
  const walletUtxos = await Promise.all(
    wallets.map(async (wallet, i) => {
      const utxos = await fetchUtxos(wallet.address!)
      console.log(`  Wallet ${walletIds[i]}: ${wallet.address} — ${utxos.length} UTXO(s)`)
      return { wallet, walletId: walletIds[i], utxos }
    })
  )

  const allInputs: { utxo: UTXO; wallet: DfnsWallet; walletId: string }[] = []
  for (const { wallet, walletId, utxos } of walletUtxos) {
    for (const utxo of utxos) {
      allInputs.push({ utxo, wallet, walletId })
    }
  }

  if (allInputs.length === 0) {
    console.log('No UTXOs to sweep.')
    return
  }

  const totalInputAmount = allInputs.reduce((sum, { utxo }) => sum + utxo.value, 0)
  console.log(`Total UTXOs: ${allInputs.length}, Total amount: ${totalInputAmount} sats`)

  // 3. Get fee rate from DFNS
  console.log('\n3. Fetching fee rate...')
  const feesResponse = await dfnsClient.networks.getFees({
    query: { network: walletNetwork as any},
  })

  // extra security
  if (feesResponse.kind !== 'Bitcoin') {
    throw new DfnsError(-1, `Unexpected fee response kind: ${feesResponse.kind}`)
  }

  // Here we use the "standard" fee rate, but you could also choose "fast" or "slow" depending on your needs
  const feeRate = Math.ceil(parseFloat(feesResponse.standard.feeRate))
  console.log(`Fee rates (sat/vB) — slow: ${feesResponse.slow.feeRate}, standard: ${feesResponse.standard.feeRate}, fast: ${feesResponse.fast.feeRate}`)
  console.log(`Using standard: ${feeRate} sat/vB`)

  // 4. Build PSBT
  console.log('\n4. Building PSBT...')
  const psbt = new Psbt({ network: btcNetwork })

  for (const { utxo, wallet } of allInputs) {
    const script = btcAddress.toOutputScript(wallet.address!, btcNetwork)

    const input: Parameters<typeof psbt.addInput>[0] = {
      hash: utxo.txid,
      index: utxo.vout,
      witnessUtxo: {
        script,
        value: utxo.value,
      },
    }

    if (wallet.scheme === 'Schnorr' && wallet.internalPubkey) {
      input.tapInternalKey = wallet.internalPubkey.subarray(1, 33)
    }

    psbt.addInput(input)
  }

  // Estimate fee
  const inputSchemes = allInputs.map(({ wallet }) => ({ scheme: wallet.scheme }))
  const vsize = estimateVsize(inputSchemes, destinationAddress)
  const fee = vsize * feeRate
  const sweepAmount = totalInputAmount - fee

  console.log(`Estimated vsize: ${vsize} vB`)
  console.log(`Estimated fee: ${fee} sats`)
  console.log(`Sweep amount: ${sweepAmount} sats`)

  if (sweepAmount <= 0) {
    console.log(`Total balance (${totalInputAmount}) is less than estimated fee (${fee}). Aborting.`)
    return
  }

  if (allInputs.length > 400) {
    console.warn(`Warning: ${allInputs.length} inputs — transaction may exceed block size limits`)
  }

  psbt.addOutput({
    address: destinationAddress,
    value: sweepAmount,
  })

  // 5. Sign with each wallet, broadcast with the last one
  console.log('\n5. Signing...')
  let currentPsbt = psbt

  for (let i = 0; i < wallets.length - 1; i++) {
    console.log(`  Signing with wallet ${walletIds[i]}...`)
    currentPsbt = await wallets[i].SignPsbt(currentPsbt)
    console.log(`  Done.`)
  }

  // Last wallet: broadcastTransaction signs remaining inputs + finalizes + broadcasts
  const lastWalletId = walletIds[walletIds.length - 1]
  console.log(`  Signing & broadcasting with wallet ${lastWalletId}...`)

  const broadcastResponse = await dfnsClient.wallets.broadcastTransaction({
    walletId: lastWalletId,
    body: {
      kind: 'Psbt',
      psbt: `0x${currentPsbt.toHex()}`,
    },
  })

  console.log('\n6. Broadcast successful!')
  console.log(`Transaction Hash: ${broadcastResponse.txHash}`)

  const explorerBase = mempoolUrl.replace('/api', '/tx/')
  console.log(`Explorer: ${explorerBase}${broadcastResponse.txHash}`)
}

main()