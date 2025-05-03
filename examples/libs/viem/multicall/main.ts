import dotenv from 'dotenv'
import { createWalletClient, http, encodeFunctionData, parseEther } from 'viem'
import { holesky } from 'viem/chains'

import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { DfnsWallet } from '@dfns/lib-viem'
import { toAccount } from 'viem/accounts'
import { multicallAbi } from './multicallAbi'

dotenv.config()

const multiCallAddress = '0xcA11bde05977b3631167028862bE2a173976CA11'

const address1 = '0xdBA99aAA622C900e4322B916A766763E95aF3D45'
const address2 = '0x8285Bf52a6E53a42e724e3D4B08204623652a7A6'

const initDfnsWallet = (walletId: string) => {
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

  return DfnsWallet.init({ walletId, dfnsClient })
}

const main = async () => {
  // The sponsor wallet will pay for the gas
  const ethereumWallet = await initDfnsWallet(process.env.ETHEREUM_WALLET_ID!);

  const ethereumWalletClient = createWalletClient({
    account: toAccount(ethereumWallet),
    chain: holesky,
    transport: http(),
  })

  const hash = await ethereumWalletClient.sendTransaction({
    data: encodeFunctionData({
      abi: multicallAbi,
      functionName: 'aggregate3Value',
      args: [[
        { target: address1, value: parseEther('0.00001'), allowFailure: false, callData: "" },
        { target: address2, value: parseEther('0.00001'), allowFailure: false, callData: "" }
      ]]
    }),
    to: multiCallAddress,
    value: parseEther('0.00002')
  })

  console.log(hash)
}

main()
