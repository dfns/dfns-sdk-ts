import { DfnsWallet } from '@dfns/lib-ton'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { getHttpEndpoint } from '@orbs-network/ton-access'
import { Address, SendMode, TonClient, WalletContractV4, beginCell, internal, external, storeMessageRelaxed, storeMessage, loadMessage } from '@ton/ton'


import * as dotenv from 'dotenv'

dotenv.config()

const hexToBuffer = (hex: string): Buffer => {
  return Buffer.from(hex.replace(/^0x/, ''), 'hex')
}

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
  const senderWallet = await initDfnsWallet(process.env.TON_WALLET_ID!)
  console.log('ton sender address: %s', senderWallet.address)

  // use orbs to connect TON nodes
  const endpoint = await getHttpEndpoint({
    network: 'testnet'
  })

  const client = new TonClient({ endpoint })

  // instance of your wallet (replace with the right version)
  const tonWallet = WalletContractV4.create({
    workchain: 0,
    publicKey: hexToBuffer(senderWallet.publicKey),
  })

    const opened = client.open(tonWallet)
    const seqno = await opened.getSeqno()

    const signingMessageBuilder = beginCell().storeUint(tonWallet.walletId, 32)
    if (seqno === 0) {
      for (let i = 0; i < 32; i++) {
        signingMessageBuilder.storeBit(1)
      }
    } else {
      signingMessageBuilder.storeUint(Math.floor(Date.now() / 1e3) + 60, 32)
    }

    signingMessageBuilder.storeUint(seqno, 32)
    signingMessageBuilder.storeUint(0, 8) // Simple order

    signingMessageBuilder.storeUint(SendMode.PAY_GAS_SEPARATELY, 8)

    const message = internal({
      value: '1',
      to: 'EQBfYLuQwjbBd-LAZ6eNC26XmVVxEl86MQPKG981hdTSicL_',
      body: 'Example transfer body',
    })

    const body = signingMessageBuilder.storeRef(beginCell().store(storeMessageRelaxed(message))).endCell()

    let init
    if (opened.init && !(await client.isContractDeployed(Address.parse(senderWallet.address)))) {
      init = opened.init
    }

    // Wrap into an external message
    const externalInMessage = external({
      to: senderWallet.address,
      body,
      init,
    })

    const cell = beginCell().store(storeMessage(externalInMessage)).endCell()

    const signedCell = await senderWallet.sign(cell)
    
    client.sendFile(signedCell.toBoc())
    console.log('native transfer cell broadcasted')
    
    // unfortunately, we can't have the txHash without pulling the chain
    const msg = loadMessage(signedCell.beginParse())

    const txHash = await retry(() => tryGetTxByBoc(client, tonWallet.address,  msg.body.hash().toString('hex'), 10), {
      retries: 30,
      delay: 1000,
    })
    
    console.log(`transaction hash retrieved: ${txHash}`)
}

const tryGetTxByBoc = async (
  client: TonClient,
  address: Address,
  bocHashHex: string,
  lookback: number
): Promise<string> => {
  const transactions = await client.getTransactions(address, { limit: lookback })
  for (const tx of transactions) {
    const inMsg = tx.inMessage
    if (inMsg?.info.type === 'external-in') {
      const inBOC = inMsg?.body
      if (typeof inBOC === 'undefined') {
        continue
      }

      const inHash = inMsg.body.hash().toString('hex')
      if (bocHashHex === inHash) {
        return tx.hash().toString('hex')
      }
    }
  }

  throw new Error('Transaction not found')
}

const retry = async <T>(fn: () => Promise<T>, options: { retries: number, delay: number }): Promise<T> => {
  let lastError: Error | undefined
  for (let i = 0; i < options.retries; i++) {
    try {
      return await fn()
    } catch (e) {
      if (e instanceof Error) {
        lastError = e
      }
      await new Promise(resolve => setTimeout(resolve, options.delay))
    }
  }

  throw lastError
}

main()
