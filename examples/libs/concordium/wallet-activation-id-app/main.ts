// Node.js built-in modules
import * as readline from 'readline'

// Third-party dependencies
import { JSDOM } from 'jsdom'
import { SignClient } from '@walletconnect/sign-client'
import qrcode from 'qrcode-terminal'
import pino from 'pino'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { DfnsWallet } from '@dfns/lib-concordium'

// Browser API polyfills for Node.js environment
// IMPORTANT: These must be set up BEFORE importing Concordium SDK
// Unfortunately, ConcordiumIDAppSDK relies on browser APIs like window and document.
const { window } = new JSDOM('<!DOCTYPE html>', { url: 'http://localhost:3000' })

Object.assign(global, {
  window,
  document: window.document,
  self: window,
  location: window.location,
  WebSocket,
})

import { DfnsError } from '@dfns/sdk'

import {
  ConcordiumIDAppSDK,
  type CreateAccountCreationRequestMessage,
  IDAppSdkWallectConnectMethods,
  CreateAccountCreationResponse,
  CreateAccountResponseMsgType,
} from '@concordium/id-app-sdk'
import * as dotenv from 'dotenv'

dotenv.config()

const WALLET_CONNECT_PROJECT_ID = process.env.WALLET_CONNECT_PROJECT_ID!
const DAPP_METADATA = {
  name: 'Dfns Wallet',
  description: 'dApp initiating connection',
  url: 'http://localhost:3000',
  icons: ['https://app-a.com/icon.png'],
}

const DISCONNECT_REASON = {
  code: 1000,
  message: 'User disconnected',
} as const

function askYesNo(question: string): Promise<boolean> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  return new Promise((resolve) => {
    rl.question(`${question} (y/n): `, (answer) => {
      rl.close()
      const response = answer.toLowerCase().trim()
      resolve(response === 'y' || response === 'yes')
    })
  })
}

function showQrInTerminal(uri: string): void {
  qrcode.generate(uri, { small: true })
  console.log('\nScan this QR with your wallet to connect.\n')
}

class WalletConnect {
  private wcClient!: InstanceType<typeof SignClient>
  public uri: string
  public session: { topic: string }

  // Create and initialize a new WalletConnect instance with connection to the specified chain
  static async createAndConnect(chainId: string): Promise<WalletConnect> {
    const wc = new WalletConnect()
    await wc.initClient()
    await wc.connect(chainId)

    if (!wc.session?.topic) {
      throw new DfnsError(-1, 'Failed to establish WalletConnect session')
    }

    return wc
  }

  // Initialize the WalletConnect client
  async initClient(): Promise<void> {
    this.wcClient = await SignClient.init({
      projectId: WALLET_CONNECT_PROJECT_ID,
      metadata: DAPP_METADATA,
      logger: pino({ level: 'error' }),
    })
    console.log('WalletConnect client initialized')
  }

  // Connect to a wallet and establish a session
  async connect(chainId: string): Promise<void> {
    try {
      if (!this.wcClient) {
        throw new DfnsError(-1, 'SDK not initialized')
      }

      console.log('Connecting to wallet...')
      console.log('Using chainId for WC session proposal:', chainId)

      const existingConnection = await this.tryGetExistingConnection()

      const { uri, approval } = await this.wcClient.connect({
        optionalNamespaces: {
          concordium: {
            methods: [IDAppSdkWallectConnectMethods.CREATE_ACCOUNT, IDAppSdkWallectConnectMethods.RECOVER_ACCOUNT],
            chains: [chainId],
            events: [IDAppSdkWallectConnectMethods.CREATE_ACCOUNT, IDAppSdkWallectConnectMethods.RECOVER_ACCOUNT],
          },
        },
        pairingTopic: existingConnection?.topic,
      })

      // This is the deep link the IDApp is expecting... unfortunately, a normal wc: link does not work
      const walletConnectMobileUrl = `concordiumidapp://wallet-connect?encodedUri=${uri}`

      this.uri = walletConnectMobileUrl
      console.log('Please scan the following QR code to connect the IdApp:\n')
      showQrInTerminal(this.uri)

      this.session = await approval()
      console.log('Session approved')
    } catch (error) {
      throw new DfnsError(-1, 'Session approval failed', error)
    }
  }

  // Disconnect from the current session
  async disconnect(topic?: string): Promise<void> {
    if (!this.wcClient) {
      throw new DfnsError(-1, 'SDK not initialized')
    }

    const sessionTopic = topic || this.session?.topic
    if (!sessionTopic) {
      throw new DfnsError(-1, 'No active session to disconnect')
    }

    return this.wcClient.disconnect({
      topic: sessionTopic,
      reason: DISCONNECT_REASON,
    })
  }

  // Try to get an existing active connection to avoid opening multiple connections
  private async tryGetExistingConnection(): Promise<{ topic: string; active: boolean } | undefined> {
    const pairings = await this.wcClient.pairing.getAll()
    return pairings.find((p: { active: boolean }) => p?.active)
  }

  // Send a request to the connected wallet
  async request(
    method = 'custom_message',
    chainId: string,
    message: CreateAccountCreationRequestMessage
  ): Promise<CreateAccountCreationResponse> {
    console.log('Inside request method:', { chainId })

    if (!this.wcClient) {
      throw new DfnsError(-1, 'SDK not initialized')
    }

    if (!this.session) {
      throw new DfnsError(-1, 'No active session')
    }

    const result = await this.wcClient.request({
      topic: this.session.topic,
      chainId: chainId,
      request: {
        method: method,
        params: { message },
      },
    })

    return result as CreateAccountCreationResponse
  }
}

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
    walletId,
    dfnsClient,
  })
}

async function main() {
  const ccdWalletId = process.env.CONCORDIUM_WALLET_ID!

  const walletToActivate = await initDfnsWallet(ccdWalletId)

  if (walletToActivate.getStatus() === 'Active'){
    throw new DfnsError(-1, 'Wallet already active')
  }

  console.log(`Concordium wallet public key ${walletToActivate.getPublicKey()}`)

  // Initialize WalletConnect and establish connection
  // Change to ConcordiumIDAppSDK.chainId.Mainnet for mainnet
  const wc = await WalletConnect.createAndConnect(ConcordiumIDAppSDK.chainId.Testnet)

  // Confirm account creation
  const proceed = await askYesNo('Proceed with account creation?')
  if (!proceed) {
    console.log('Account creation aborted.')
    return
  }

  // Create account creation request
  const accountCreationRequest: CreateAccountCreationRequestMessage =
    ConcordiumIDAppSDK.getCreateAccountCreationRequest(walletToActivate.getPublicKey())

  console.log(`Sending account creation request with public_key ${walletToActivate.getPublicKey()}\n`)
  console.log(`Please enter the following code in the app: ${wc.session.topic.substring(0, 4).toUpperCase()}\n`)
  const createAccountResp = await wc.request(
    IDAppSdkWallectConnectMethods.CREATE_ACCOUNT,
    ConcordiumIDAppSDK.chainId.Testnet,
    accountCreationRequest
  )

  const resp: CreateAccountResponseMsgType = createAccountResp.message as CreateAccountResponseMsgType

  // Change expiration to be confortable
  resp.serializedCredentialDeploymentTransaction.expiry = Math.floor(Date.now() / 1000) + 24 * 60 * 60


  console.log(`Activating account... (address: ${resp.accountAddress})`)

  const { id } = await walletToActivate.activate(resp.serializedCredentialDeploymentTransaction)

  console.log(`transaction id: ${id}`)

  console.log(`waiting for wallet to be active... it can take a few minutes.`)

  let isActive = false
  for (let i = 0; i < 20; i++) {
    await new Promise((resolve) => setTimeout(resolve, 15000)) // wait for 15 seconds
    await walletToActivate.refresh()
    const status = walletToActivate.getStatus()
    console.log(`Current wallet status: ${status}`)
    if (status === 'Active') {
      isActive = true
      break
    }
  }

  if (isActive) {
    console.log('Wallet is now active!')
  } else {
    console.log('Wallet activation timed out. Please check the status later.')
  }

  // Disconnect WalletConnect session
  await wc.disconnect()
  console.log('Disconnected from WalletConnect session.')
}

main()
