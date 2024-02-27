import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { HttpProvider } from '@polkadot/api';
import { DfnsWallet } from '@dfns/lib-polkadot'

import { xxhashAsHex, blake2AsHex } from '@polkadot/util-crypto'
import { decodeAddress } from '@polkadot/keyring'

import { methods, getRegistry } from '@substrate/txwrapper-polkadot';
import { u8aToHex } from '@polkadot/util'

import * as dotenv from 'dotenv'

dotenv.config()

const initDfnsWallet = async (walletId: string) => {
  const signer = new AsymmetricKeySigner({
    privateKey: process.env.DFNS_PRIVATE_KEY!,
    credId: process.env.DFNS_CRED_ID!,
    appOrigin: process.env.DFNS_APP_ORIGIN!,
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

const getAccountNonce = async (httpProvider: HttpProvider, address: string) => {
  const rawAddress = decodeAddress(address)

  const accountLocation = '0x'
    + xxhashAsHex("System", 128).substring(2)
    + xxhashAsHex("Account", 128).substring(2)
    + blake2AsHex(rawAddress, 128).substring(2)
    + u8aToHex(rawAddress).substring(2);
  const accountStorage = await httpProvider.send('state_getStorage', [accountLocation]) as any

  return parseInt('0x' + accountStorage.substring(2, 10).match(/../g).reverse().join('')) as number;
}

async function main() {
  const polkadotWalletId = process.env.POLKADOT_WALLET_ID!
  const senderWallet = await initDfnsWallet(polkadotWalletId)

  const httpProvider = new HttpProvider(process.env.POLKADOT_NODE_URL!);

  // In polkadot, an account must have at least 1 DOT, we need to make sure that
  // this address has funds or that we transfer at least 1 DOT.
  // https://wiki.polkadot.network/docs/learn-accounts#existential-deposit-and-reaping
  const receiverAddress = '5DLJur1FsXezqiRvsq7nTJGDGszDW4xtNeENAYBMXPwPY9bZ'

  // 1 WND or DOT, precision of the asset is 12
  const amount = 10 ** 12;

  console.log(`Sending ${amount / (10 ** 12)} DOT/WND to the address ${receiverAddress}`);

  const { block: { header: { number: blockNumber } } } = await httpProvider.send('chain_getBlock', []) as any
  const blockHash = await httpProvider.send('chain_getBlockHash', []) as string
  const genesisHash = await httpProvider.send('chain_getBlockHash', [0]) as string
  const metadataRpc = await httpProvider.send('state_getMetadata', []) as `0x${string}`
  const { specVersion, transactionVersion, specName } = (await httpProvider.send('state_getRuntimeVersion', [])) as any
  const nonce = await getAccountNonce(httpProvider, senderWallet.address)

  const registry = getRegistry({ chainName: 'Westend', specName, specVersion, metadataRpc, });

  const unsigned = methods.balances.transferKeepAlive(
    {
      value: amount.toString(),
      dest: { id: receiverAddress },
    },
    {
      address: senderWallet.address,
      blockHash: blockHash,
      blockNumber: parseInt(blockNumber, 16),
      eraPeriod: 64,
      genesisHash: genesisHash,
      metadataRpc: metadataRpc,
      nonce: nonce,
      specVersion: specVersion,
      tip: 0,
      transactionVersion: transactionVersion,
    },
    {
      metadataRpc: metadataRpc,
      registry: registry
    },
  );

  const signerPayload = registry.createType('SignerPayload', unsigned, { version: unsigned.version })

  // Broadcast transaction
  const result = await senderWallet.broadcast(signerPayload.toHex())
  console.log(`Transaction submitted with hash ${result.txHash}`)
}

main()
