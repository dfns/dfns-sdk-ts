import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import { DfnsWallet } from '@dfns/lib-starknet'
import { Account, RpcProvider, Call, PaymasterRpc, cairo, PaymasterDetails } from 'starknet'

import * as dotenv from 'dotenv'

dotenv.config()

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
  const starknetWalletId = process.env.STARKNET_WALLET_ID!

  const senderWallet = await initDfnsWallet(starknetWalletId)
  console.log('Starknet wallet public key: %s', await senderWallet.getPubKey())

  // Initialize provider (using Sepolia testnet)
  const provider = new RpcProvider({ 
    nodeUrl: 'https://rpc.starknet-testnet.lava.build:443'
  })

  const myPaymasterRpc = new PaymasterRpc({ nodeUrl: 'https://sepolia.paymaster.avnu.fi' });

  const recipientAddress = "0x0535a9762b984c876abe0b164b0ccedb0d23a78978c9fe87e29deae0ea890c72"

  // Create account instance with Dfns signer with a paymaster
  const account = new Account(
    provider,
    senderWallet.getAddress(),
    senderWallet,
    '1',
    '0x3',
    myPaymasterRpc
  )

  const amount = '1'
  console.log(`transferring ${amount} from wallet ${senderWallet.getAddress()} to ${recipientAddress}`)

  const cairoAmount = cairo.uint256(amount)
  console.log('creating transfer transaction...')
  const transferCall: Call = {
    // STRK
    contractAddress: '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d',
    entrypoint: 'transfer',
    calldata: [recipientAddress, '0x' + BigInt(cairoAmount.low).toString(16), '0x' + BigInt(cairoAmount.high).toString(16)],
  }

  const gasToken = '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7'

  const feesDetails: PaymasterDetails = {
    feeMode: { mode: 'default', gasToken },
  }

  const feeEstimation = await account.estimatePaymasterTransactionFee([transferCall], feesDetails);

  const res = await account.executePaymasterTransaction(
    [transferCall],
    feesDetails,
    feeEstimation.suggested_max_fee_in_gas_token
  );
  const txR = await provider.waitForTransaction(res.transaction_hash);

  console.log(txR)
}

main()