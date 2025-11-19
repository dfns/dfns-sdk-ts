import { ClientCredentialOAuthController, LedgerController, TokenStandardController, WalletSDKImpl } from '@canton-network/wallet-sdk'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import * as dotenv from 'dotenv'

dotenv.config()

const CANTON_COIN_INSTRUMENT_ID = 'Amulet'

const initDfns = async () => {
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

  return dfnsClient
}

async function main(format: 'commands' | 'binary') {
  const dfnsClient = await initDfns()
  const wallet = await dfnsClient.wallets.getWallet({ walletId: process.env.CANTON_WALLET_ID! })

  const ledgerFactory = (userId: string, token: string) => {
    return new LedgerController(userId, new URL(process.env.CANTON_LEDGER_API!), token, false)
  }

  // For this example, the validator URL is not used, so we can provide a dummy value
  const validatorUrl = new URL('http://dummy')

  const tokenStandardFactory = (userId: string, token: string) => {
    return new TokenStandardController(userId, new URL(process.env.CANTON_LEDGER_API!), validatorUrl, token, false)
  }

  const authFactory = () => new ClientCredentialOAuthController(process.env.OPEN_ID_DISCOVERY_URL!, console, process.env.OAUTH_CLIENT_ID!, process.env.OAUTH_CLIENT_SECRET!, process.env.OAUTH_USER_ID!, undefined, undefined, process.env.OAUTH_AUDIENCE!)
  const sdk = new WalletSDKImpl().configure({ authFactory, ledgerFactory, tokenStandardFactory })

  await sdk.connect()

  sdk.tokenStandard?.setTransferFactoryRegistryUrl(new URL(process.env.TRANSFER_FACTORY_REGISTRY_URL!))
  sdk.tokenStandard?.setPartyId(wallet.address!)

  const instrumentAdmin = await sdk.tokenStandard!.getInstrumentAdmin()
  const instrument = { instrumentId: CANTON_COIN_INSTRUMENT_ID, instrumentAdmin: instrumentAdmin!, }

  // Fetch UTXOs
  const utxos = await sdk.tokenStandard?.listHoldingUtxos(false)

  const receiver = 'dfnsdev1::12201f8739bb0554775652b24db3d235f2327120a607c50fdc195b514a6496669326'
  const amount = '1'
  const memo = 'memo-ref'

  // Retrieve the command to execute
  const [transferCommand, disclosedContractsWithDebug] = await sdk.tokenStandard!.createTransfer(wallet.address!, receiver, amount, instrument, utxos?.map((t) => t.contractId), memo)

  // We only select fields we need (remove the debug fields)
  const disclosedContracts = disclosedContractsWithDebug.map((c) => ({ templateId: c.templateId, contractId: c.contractId, createdEventBlob: c.createdEventBlob, synchronizerId: c.synchronizerId }))

  let result
  if (format === 'commands') {
    result = await dfnsClient.wallets.broadcastTransaction({ walletId: wallet.id, body: { kind: 'Transaction', transaction: { commands: [transferCommand], disclosedContracts } } })
  } else {
    sdk.userLedger!.setPartyId(wallet.address!)

    const { connectedSynchronizers } = await sdk.userLedger!.listSynchronizers()
    const synchronizerId = connectedSynchronizers![0].synchronizerId

    sdk.userLedger!.setSynchronizerId(synchronizerId)

    const preparedSubmission = await sdk.userLedger!.prepareSubmission([transferCommand], undefined, disclosedContractsWithDebug)
    const transaction = Buffer.from(preparedSubmission.preparedTransaction!, 'base64').toString('hex')

    try {
      result = await dfnsClient.wallets.broadcastTransaction({ walletId: wallet.id, body: { kind: 'Transaction', transaction } })
    } catch (error) {
      console.dir(error, { depth: null })

      throw error
    }
  }

  console.log(`Wallet address: ${wallet.address}`)
  console.log(`Network: ${wallet.network}`)
  console.log(`Dfns transaction id ${result.id}`)
  console.log(`Canton updateId ${result.txHash}`)
}

main('commands')


