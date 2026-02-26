import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { GenerateSignatureResponse } from '@dfns/sdk/types/wallets'
import {
  SignerInterface,
  Call,
  DeclareSignerDetails,
  DeployAccountSignerDetails,
  InvocationsSignerDetails,
  Signature,
  TypedData,
  V3InvocationsSignerDetails,
  V3DeployAccountSignerDetails,
  ETransactionVersion3,
  CallData,
  stark,
  transaction,
  num,
} from 'starknet'

export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
}

const assertSigned = (res: GenerateSignatureResponse) => {
  if (res.status === 'Failed') {
    throw new DfnsError(-1, 'signing failed', res)
  } else if (res.status !== 'Signed') {
    throw new DfnsError(
      -1,
      'cannot complete signing synchronously because this wallet action requires policy approval',
      res
    )
  }
}

const extractSignature = (res: GenerateSignatureResponse): Signature => {
  if (!res.signature) {
    throw new DfnsError(-1, 'signature missing', res)
  }
  return [res.signature.r, res.signature.s]
}

const damToString = (mode: number): 'L1' | 'L2' => {
  return mode === 0 ? 'L1' : 'L2'
}

export class DfnsWallet extends SignerInterface {
  private readonly dfnsClient: DfnsApiClient
  private readonly walletId: string

  private constructor(
    options: DfnsWalletOptions,
    private readonly walletAddress: string,
    private readonly publicKeyHex: string
  ) {
    super()
    this.dfnsClient = options.dfnsClient
    this.walletId = options.walletId
  }

  public static async init(options: DfnsWalletOptions): Promise<DfnsWallet> {
    const { walletId, dfnsClient } = options
    const res = await dfnsClient.wallets.getWallet({ walletId })

    if (res.status !== 'Active') {
      throw new DfnsError(-1, 'wallet not active', { walletId, status:
res.status })
    }

    if (res.network !== 'Starknet' && res.network !== 'StarknetSepolia') {
      throw new DfnsError(-1, 'wallet is not bound to a Starknet network', {
        walletId,
        network: res.network,
      })
    }

    if (!res.address) {
      throw new DfnsError(-1, 'wallet address not available', { walletId })
    }

    return new DfnsWallet(options, res.address, res.signingKey.publicKey)
  }

  public get address(): string {
    return this.walletAddress
  }

  public async getPubKey(): Promise<string> {
    return this.publicKeyHex
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async signMessage(_typedData: TypedData, _accountAddress: string):
Promise<Signature> {
    throw new DfnsError(-1, 'signMessage not implemented')
  }

  public async signTransaction(
    transactions: Call[],
    details: InvocationsSignerDetails
  ): Promise<Signature> {
    if (!Object.values(ETransactionVersion3).includes(details.version as any)) {
      throw new DfnsError(-1, 'unsupported transaction version, only V3 is supported')
    }

    const det = details as V3InvocationsSignerDetails
    const compiledCalldata = transaction.getExecuteCalldata(transactions,
det.cairoVersion)

    const res = await this.dfnsClient.wallets.generateSignature({
      walletId: this.walletId,
      body: {
        kind: 'Transaction',
        transaction: {
          type: 'INVOKE',
          senderAddress: det.walletAddress,
          calldata: compiledCalldata.map(String),
          version: num.toHex(det.version),
          nonce: num.toHex(det.nonce),
          chainId: num.toHex(det.chainId),
          resourceBounds: {
            l1Gas: {
              maxAmount: num.toHex(det.resourceBounds.l1_gas.max_amount),
              maxPricePerUnit:
num.toHex(det.resourceBounds.l1_gas.max_price_per_unit),
            },
            l2Gas: {
              maxAmount: num.toHex(det.resourceBounds.l2_gas.max_amount),
              maxPricePerUnit:
num.toHex(det.resourceBounds.l2_gas.max_price_per_unit),
            },
            l1DataGas: {
              maxAmount: det.resourceBounds.l1_data_gas
                ? num.toHex(det.resourceBounds.l1_data_gas.max_amount)
                : '0x0',
              maxPricePerUnit: det.resourceBounds.l1_data_gas
                ? num.toHex(det.resourceBounds.l1_data_gas.max_price_per_unit)
                : '0x0',
            },
          },
          tip: num.toHex(det.tip),
          paymasterData: det.paymasterData.map(String),
          accountDeploymentData: det.accountDeploymentData.map(String),
          nonceDataAvailabilityMode:
damToString(stark.intDAM(det.nonceDataAvailabilityMode)),
          feeDataAvailabilityMode:
damToString(stark.intDAM(det.feeDataAvailabilityMode)),
        },
      },
    })

    assertSigned(res)
    return extractSignature(res)
  }

  public async signDeployAccountTransaction(
    details: DeployAccountSignerDetails
  ): Promise<Signature> {
    if (!Object.values(ETransactionVersion3).includes(details.version as any)) {
      throw new DfnsError(-1, 'unsupported transaction version, only V3 is supported')
    }

    const det = details as V3DeployAccountSignerDetails
    const compiledConstructorCalldata = CallData.compile(det.constructorCalldata)

    const res = await this.dfnsClient.wallets.generateSignature({
      walletId: this.walletId,
      body: {
        kind: 'Transaction',
        transaction: {
          type: 'DEPLOY_ACCOUNT',
          version: num.toHex(det.version),
          nonce: num.toHex(det.nonce),
          chainId: num.toHex(det.chainId),
          contractAddressSalt: num.toHex(det.addressSalt),
          classHash: num.toHex(det.classHash),
          constructorCalldata: compiledConstructorCalldata.map(String),
          resourceBounds: {
            l1Gas: {
              maxAmount: num.toHex(det.resourceBounds.l1_gas.max_amount),
              maxPricePerUnit:
num.toHex(det.resourceBounds.l1_gas.max_price_per_unit),
            },
            l2Gas: {
              maxAmount: num.toHex(det.resourceBounds.l2_gas.max_amount),
              maxPricePerUnit:
num.toHex(det.resourceBounds.l2_gas.max_price_per_unit),
            },
            l1DataGas: {
              maxAmount: det.resourceBounds.l1_data_gas
                ? num.toHex(det.resourceBounds.l1_data_gas.max_amount)
                : '0x0',
              maxPricePerUnit: det.resourceBounds.l1_data_gas
                ? num.toHex(det.resourceBounds.l1_data_gas.max_price_per_unit)
                : '0x0',
            },
          },
          tip: num.toHex(det.tip),
          paymasterData: det.paymasterData.map(String),
          nonceDataAvailabilityMode:
damToString(stark.intDAM(det.nonceDataAvailabilityMode)),
          feeDataAvailabilityMode:
damToString(stark.intDAM(det.feeDataAvailabilityMode)),
        },
      },
    })

    assertSigned(res)
    return extractSignature(res)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async signDeclareTransaction(details: DeclareSignerDetails):
Promise<Signature> {
    throw new DfnsError(-1, 'signDeclareTransaction not implemented')
  }
}