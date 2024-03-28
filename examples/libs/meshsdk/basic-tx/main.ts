import { DfnsWallet } from '@dfns/lib-meshsdk'
import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'

import * as CSL from '@emurgo/cardano-serialization-lib-nodejs'
import { BlockfrostProvider, IFetcher, IInitiator, ISubmitter, Transaction, UTxO } from '@meshsdk/core'

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

const hexToBuffer = (hex: string): Buffer => {
  return Buffer.from(hex.replace(/^0x/, ''), 'hex')
}

interface IFetcherSubmitter extends IFetcher, ISubmitter {}

export class meshWrapper implements IInitiator, ISubmitter {
  constructor(private readonly wallet: DfnsWallet, private readonly fetcherSubmitter: IFetcherSubmitter) {}

  submitTx(tx: string): Promise<string> {
    return this.fetcherSubmitter.submitTx(tx)
  }

  getUsedAddress() {
    return CSL.Address.from_bech32(this.wallet.address)
  }
  getUsedCollateral(
    limit?: number | undefined
  ): CSL.TransactionUnspentOutput[] | Promise<CSL.TransactionUnspentOutput[]> {
    throw new DfnsError(-1, 'getUsedCollateral not implemented.')
  }
  async getUsedUTxOs(): Promise<CSL.TransactionUnspentOutput[]> {
    const utxos = await this.fetcherSubmitter.fetchAddressUTxOs(this.wallet.address)

    return utxos.map((utxo) => toTxUnspentOutput(utxo))
  }
}

const toTxUnspentOutput = (utxo: UTxO) => {
  const txInput = CSL.TransactionInput.new(
    CSL.TransactionHash.from_bytes(hexToBuffer(utxo.input.txHash)),
    utxo.input.outputIndex
  )

  const lovelace = utxo.output.amount.find((asset) => asset.unit === 'lovelace')

  const txOutput = CSL.TransactionOutput.new(
    CSL.Address.from_bech32(utxo.output.address),
    CSL.Value.new(CSL.BigNum.from_str(lovelace ? lovelace.quantity : '0'))
  )

  if (utxo.output.dataHash !== undefined) {
    txOutput.set_data_hash(CSL.DataHash.from_bytes(hexToBuffer(utxo.output.dataHash)))
  }

  if (utxo.output.plutusData !== undefined) {
    txOutput.set_plutus_data(CSL.PlutusData.from_bytes(hexToBuffer(utxo.output.plutusData)))
  }

  if (utxo.output.scriptRef !== undefined) {
    txOutput.set_script_ref(CSL.ScriptRef.from_bytes(hexToBuffer(utxo.output.scriptRef)))
  }

  return CSL.TransactionUnspentOutput.new(txInput, txOutput)
}

async function main() {
  const senderWallet = await initDfnsWallet(process.env.CARDANO_WALLET_ID!)
  console.log('cardano sender address: %s', senderWallet.address)

  const provider = new BlockfrostProvider(process.env.BLOCKFROST_PROJECT_ID!)

  const mesh = new meshWrapper(senderWallet, provider)

  const tx = await new Transaction({ initiator: mesh }).sendLovelace(senderWallet.address, '1000000').build()
  console.log(`native transaction created`)

  const signedTx = await senderWallet.signTx(tx)
  console.log(`native transaction signed`)

  const txHash = await mesh.submitTx(signedTx.substring(2))
  console.log(`transaction broadcasted: ${txHash}`)
}

main()
