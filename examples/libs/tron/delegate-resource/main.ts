import { DfnsWallet } from '@dfns/lib-tron'
import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { TronWeb } from 'tronweb'

import * as dotenv from 'dotenv'
dotenv.config()

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

  return DfnsWallet.init({ walletId, dfnsClient })
}

async function main() {
  const [delegator, delegatee] = await Promise.all([
    initDfnsWallet(process.env.TRON_DELEGATOR_WALLET_ID!),
    initDfnsWallet(process.env.TRON_DELEGATEE_WALLET_ID!),
  ])

  console.log(`Tron delegator wallet address: ${delegator.address}`)
  console.log(`Tron delegatee wallet address: ${delegatee.address}`)

  const tronWeb = new TronWeb({ fullHost: process.env.TRON_NODE_URL! })

  const [{ max_size: maxDelegableForEnergy}, { max_size: maxDelegableForBandwidth}] = await Promise.all([
    tronWeb.trx.getCanDelegatedMaxSize(delegator.address, 'ENERGY'),
    tronWeb.trx.getCanDelegatedMaxSize(delegator.address, 'BANDWIDTH'),
  ])

  console.log(`Max delegable SUN for energy: ${maxDelegableForEnergy}`)
  console.log(`Max delegable SUN for bandwidth: ${maxDelegableForBandwidth}`)

  // Change this if you want to use another amount. You can use directly the max delegable amount retrieved above.
  const amountToDelegateForEnergy = 1_000_000
  const amountToDelegateForBandwidth = 1_000_000
  
  if (amountToDelegateForBandwidth) {
    if (amountToDelegateForBandwidth > maxDelegableForBandwidth) {
      throw new DfnsError(-1, `Amount to delegate for bandwidth exceeds max delegable amount`)
    }

    console.log(`Delegating ${amountToDelegateForBandwidth} SUN for bandwidth from ${delegator.address} to ${delegatee.address}`)

    // Feel free to add a lock as well
    const unsignedTx = await tronWeb.transactionBuilder.delegateResource(
      amountToDelegateForBandwidth,
      delegatee.address,
      'BANDWIDTH',
      delegator.address
    )

    const signedTx = await delegator.signTransaction(unsignedTx)
    console.log(`Delegate bandwidth txID: ${signedTx.txID}`)

    const receipt = await tronWeb.trx.sendRawTransaction(signedTx)
    console.log(`Delegate bandwidth broadcasted: ${receipt.result}`)
  }

  if (amountToDelegateForEnergy) {
    if (amountToDelegateForEnergy > maxDelegableForEnergy) {
      throw new DfnsError(-1, `Amount to delegate for energy exceeds max delegable amount`)
    }

    console.log(`Delegating ${amountToDelegateForEnergy} SUN for energy from ${delegator.address} to ${delegatee.address}`)

    // Feel free to add a lock as well
    const unsignedTx = await tronWeb.transactionBuilder.delegateResource(
      amountToDelegateForEnergy,
      delegatee.address,
      'ENERGY',
      delegator.address
    )

    const signedTx = await delegator.signTransaction(unsignedTx)
    console.log(`Delegate energy txID: ${signedTx.txID}`)
    
    const receipt = await tronWeb.trx.sendRawTransaction(signedTx)
    console.log(`Delegate energy broadcasted: ${receipt.result}`)
  }

  console.log('waiting for transactions to finalize ...')
  await new Promise((f) => setTimeout(f, 60000))

  // For an obscure reason, tronWeb.trx.getDelegatedResourceV2 returns the wrong type. It should be 
  // a list https://developers.tron.network/reference/getdelegatedresourcev2
  type DelegatedResourceInfo = {
    from: string
    to: string
    frozen_balance_for_bandwidth: number
    frozen_balance_for_energy: number
    expire_time_for_bandwidth: number
    expire_time_for_energy: number
  }  

  // there should be only one entry in the list as we are querying for a specific delegatee
  const { delegatedResource } = 
    await tronWeb.trx.getDelegatedResourceV2(delegator.address, delegatee.address) as unknown as { delegatedResource: DelegatedResourceInfo[] }

  console.log(`Amount staked for bandwidth for ${delegatee.address}: ${delegatedResource[0].frozen_balance_for_bandwidth}`)
  console.log(`Amount staked for energy for ${delegatee.address}: ${delegatedResource[0].frozen_balance_for_energy}`)
}

main()
