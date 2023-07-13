import {
  Amount,
  BlockchainAddress,
  IntegerPositiveStrict,
  IsoDatetime,
} from '../Foundations'

// FIXME: Missing documentation for BtcBlock
export type BtcBlock = {
  // FIXME: Missing documentation for hash
  hash: string

  // FIXME: Missing documentation for number
  number: number

  // FIXME: Missing documentation for timestamp
  timestamp: IsoDatetime

  // FIXME: Missing documentation for transactions
  transactions: BtcTransaction[]
}

// FIXME: Missing documentation for BtcTransaction
export type BtcTransaction = {
  // FIXME: Missing documentation for hash
  hash: string

  // FIXME: Missing documentation for blockNumber
  blockNumber: number

  // FIXME: Missing documentation for size
  size: number

  // FIXME: Missing documentation for weight
  weight: number

  // FIXME: Missing documentation for locktime
  locktime: number

  // FIXME: Missing documentation for vins
  vins: BtcTransactionInput[]

  // FIXME: Missing documentation for vouts
  vouts: BtcTransactionOutput[]

  // FIXME: Missing documentation for coinbase
  coinbase: boolean

  // FIXME: Missing documentation for fee
  fee?: Amount
}

// FIXME: Missing documentation for BtcTransactionInput
export type BtcTransactionInput = {
  // FIXME: Missing documentation for hash
  hash: string

  // FIXME: Missing documentation for index
  index: number

  // FIXME: Missing documentation for address
  address?: BlockchainAddress

  // FIXME: Missing documentation for value
  value?: Amount
}

// FIXME: Missing documentation for BtcTransactionOutput
export type BtcTransactionOutput = {
  // FIXME: Missing documentation for index
  index: number

  // FIXME: Missing documentation for address
  address?: BlockchainAddress

  // FIXME: Missing documentation for value
  value: Amount
}

// FIXME: Missing documentation for EvmBlock
export type EvmBlock = {
  // FIXME: Missing documentation for hash
  hash: string

  // FIXME: Missing documentation for number
  number: number

  // FIXME: Missing documentation for timestamp
  timestamp: IsoDatetime

  // FIXME: Missing documentation for transactions
  transactions: EvmTransaction[]
}

// FIXME: Missing documentation for EvmTransaction
export type EvmTransaction = {
  // FIXME: Missing documentation for hash
  hash: string

  // FIXME: Missing documentation for blockNumber
  blockNumber: number

  // FIXME: Missing documentation for nonce
  nonce: number

  // FIXME: Missing documentation for from
  from: BlockchainAddress

  // FIXME: Missing documentation for to
  to?: BlockchainAddress

  // FIXME: Missing documentation for value
  value: Amount

  // FIXME: Missing documentation for data
  data?: string

  // FIXME: Missing documentation for signature
  signature: string

  // FIXME: Missing documentation for gasLimit
  gasLimit: Amount

  // FIXME: Missing documentation for gasPrice
  gasPrice?: Amount

  // FIXME: Missing documentation for maxFeePerGas
  maxFeePerGas?: Amount

  // FIXME: Missing documentation for maxPriorityFeePerGas
  maxPriorityFeePerGas?: Amount

  // FIXME: Missing documentation for receipt
  receipt?: EvmTransactionReceipt

  // FIXME: Missing documentation for logs
  logs?: EvmLog[]
}

// FIXME: Missing documentation for EvmTransactionReceipt
export type EvmTransactionReceipt = {
  // FIXME: Missing documentation for gasUsed
  gasUsed: Amount

  // FIXME: Missing documentation for effectiveGasPrice
  effectiveGasPrice: Amount

  // FIXME: Missing documentation for fee
  fee: Amount

  // FIXME: Missing documentation for status
  status: TransactionStatus

  // FIXME: Missing documentation for error
  error?: string
}

// FIXME: Missing documentation for Erc20Log
export type Erc20Log = {
  // FIXME: Missing documentation for kind
  kind: EvmLogKind.Erc20

  // FIXME: Missing documentation for index
  index: number

  // FIXME: Missing documentation for address
  address: BlockchainAddress

  // FIXME: Missing documentation for from
  from: BlockchainAddress

  // FIXME: Missing documentation for to
  to: BlockchainAddress

  // FIXME: Missing documentation for value
  value: Amount
}

// FIXME: Missing documentation for Erc721Log
export type Erc721Log = {
  // FIXME: Missing documentation for kind
  kind: EvmLogKind.Erc721

  // FIXME: Missing documentation for index
  index: number

  // FIXME: Missing documentation for address
  address: BlockchainAddress

  // FIXME: Missing documentation for from
  from: BlockchainAddress

  // FIXME: Missing documentation for to
  to: BlockchainAddress

  // FIXME: Missing documentation for tokenId
  tokenId: string
}

// FIXME: Missing documentation for EvmUntypedLog
export type EvmUntypedLog = {
  // FIXME: Missing documentation for kind
  kind: EvmLogKind.Unknown

  // FIXME: Missing documentation for index
  index: number

  // FIXME: Missing documentation for address
  address: BlockchainAddress

  // FIXME: Missing documentation for topics
  topics: string[]

  // FIXME: Missing documentation for data
  data: string
}

// FIXME: Missing documentation for EvmFeeEstimates
export type EvmFeeEstimates = {
  // FIXME: Missing documentation for safeLow
  safeLow: Eip1559Fee

  // FIXME: Missing documentation for standard
  standard: Eip1559Fee

  // FIXME: Missing documentation for fast
  fast: Eip1559Fee

  // FIXME: Missing documentation for estimatedBaseFee
  estimatedBaseFee: string

  // FIXME: Missing documentation for blockNumber
  blockNumber: IntegerPositiveStrict

  // FIXME: Missing documentation for kind
  kind: FeeEstimationKind
}

// FIXME: Missing documentation for Eip1559Fee
export type Eip1559Fee = {
  // FIXME: Missing documentation for maxPriorityFee
  maxPriorityFee: string

  // FIXME: Missing documentation for maxFee
  maxFee: string
}

// FIXME: Missing documentation for CallViewFunctionInput
export type CallViewFunctionInput = {
  // FIXME: Missing documentation for data
  data: string

  // FIXME: Missing documentation for contract
  contract: string
}

// FIXME: Missing documentation for CallViewFunctionResult
export type CallViewFunctionResult = {
  // FIXME: Missing documentation for data
  data: string
}

// FIXME: Missing documentation for TrxBlock
export type TrxBlock = {
  // FIXME: Missing documentation for hash
  hash: string

  // FIXME: Missing documentation for number
  number: number

  // FIXME: Missing documentation for timestamp
  timestamp: IsoDatetime

  // FIXME: Missing documentation for transactions
  transactions: TrxTransaction[]
}

// FIXME: Missing documentation for TrxTransaction
export type TrxTransaction = {
  // FIXME: Missing documentation for hash
  hash: string

  // FIXME: Missing documentation for blockNumber
  blockNumber: number

  // FIXME: Missing documentation for feeLimit
  feeLimit?: Amount

  // FIXME: Missing documentation for from
  from: BlockchainAddress

  // FIXME: Missing documentation for receipt
  receipt: TrxReceipt
}

// FIXME: Missing documentation for TrxTransferTransaction
export type TrxTransferTransaction = {
  // FIXME: Missing documentation for hash
  hash: string

  // FIXME: Missing documentation for blockNumber
  blockNumber: number

  // FIXME: Missing documentation for feeLimit
  feeLimit?: Amount

  // FIXME: Missing documentation for from
  from: BlockchainAddress

  // FIXME: Missing documentation for receipt
  receipt: TrxReceipt

  // FIXME: Missing documentation for kind
  kind: TrxTransactionKind.TransferContract

  // FIXME: Missing documentation for to
  to: BlockchainAddress

  // FIXME: Missing documentation for amount
  amount: Amount
}

// FIXME: Missing documentation for TrxTransferAssetTransaction
export type TrxTransferAssetTransaction = {
  // FIXME: Missing documentation for hash
  hash: string

  // FIXME: Missing documentation for blockNumber
  blockNumber: number

  // FIXME: Missing documentation for feeLimit
  feeLimit?: Amount

  // FIXME: Missing documentation for from
  from: BlockchainAddress

  // FIXME: Missing documentation for receipt
  receipt: TrxReceipt

  // FIXME: Missing documentation for kind
  kind: TrxTransactionKind.TransferAssetContract

  // FIXME: Missing documentation for asset
  asset: string

  // FIXME: Missing documentation for to
  to: BlockchainAddress

  // FIXME: Missing documentation for amount
  amount: Amount
}

// FIXME: Missing documentation for TrxSmartContractTransaction
export type TrxSmartContractTransaction = {
  // FIXME: Missing documentation for hash
  hash: string

  // FIXME: Missing documentation for blockNumber
  blockNumber: number

  // FIXME: Missing documentation for feeLimit
  feeLimit?: Amount

  // FIXME: Missing documentation for from
  from: BlockchainAddress

  // FIXME: Missing documentation for receipt
  receipt: TrxReceipt

  // FIXME: Missing documentation for kind
  kind: TrxTransactionKind.TriggerSmartContract

  // FIXME: Missing documentation for contract
  contract: BlockchainAddress

  // FIXME: Missing documentation for data
  data: string

  // FIXME: Missing documentation for logs
  logs: EvmLog[]
}

// FIXME: Missing documentation for TrxUntypedTransaction
export type TrxUntypedTransaction = {
  // FIXME: Missing documentation for hash
  hash: string

  // FIXME: Missing documentation for blockNumber
  blockNumber: number

  // FIXME: Missing documentation for feeLimit
  feeLimit?: Amount

  // FIXME: Missing documentation for from
  from: BlockchainAddress

  // FIXME: Missing documentation for receipt
  receipt: TrxReceipt

  // FIXME: Missing documentation for kind
  kind: TrxTransactionKind

  // FIXME: Missing documentation for parameters
  parameters: Record<string, unknown>
}

// FIXME: Missing documentation for TrxReceipt
export type TrxReceipt = {
  // FIXME: Missing documentation for fee
  fee?: Amount

  // FIXME: Missing documentation for energyFee
  energyFee?: Amount

  // FIXME: Missing documentation for energyUsage
  energyUsage?: Amount

  // FIXME: Missing documentation for netFee
  netFee?: Amount

  // FIXME: Missing documentation for netUsage
  netUsage?: Amount

  // FIXME: Missing documentation for status
  status: TransactionStatus

  // FIXME: Missing documentation for error
  error?: string
}

// FIXME: Missing documentation for XrpBlock
export type XrpBlock = {
  // FIXME: Missing documentation for hash
  hash: string

  // FIXME: Missing documentation for number
  number: number

  // FIXME: Missing documentation for timestamp
  timestamp: IsoDatetime

  // FIXME: Missing documentation for transactions
  transactions: XrpTransaction[]
}

// FIXME: Missing documentation for XrpTransaction
export type XrpTransaction = {
  // FIXME: Missing documentation for hash
  hash: string

  // FIXME: Missing documentation for blockNumber
  blockNumber: number

  // FIXME: Missing documentation for account
  account: BlockchainAddress

  // FIXME: Missing documentation for fee
  fee: Amount

  // FIXME: Missing documentation for status
  status: TransactionStatus

  // FIXME: Missing documentation for error
  error?: string
}

// FIXME: Missing documentation for XrpPaymentTransaction
export type XrpPaymentTransaction = {
  // FIXME: Missing documentation for hash
  hash: string

  // FIXME: Missing documentation for blockNumber
  blockNumber: number

  // FIXME: Missing documentation for account
  account: BlockchainAddress

  // FIXME: Missing documentation for fee
  fee: Amount

  // FIXME: Missing documentation for status
  status: TransactionStatus

  // FIXME: Missing documentation for error
  error?: string

  // FIXME: Missing documentation for kind
  kind: XrpTransactionKind.Payment

  // FIXME: Missing documentation for to
  to: BlockchainAddress

  // FIXME: Missing documentation for currency
  currency?: string

  // FIXME: Missing documentation for issuer
  issuer?: BlockchainAddress

  // FIXME: Missing documentation for amount
  amount: Amount
}

// FIXME: Missing documentation for XrpUntypedTransaction
export type XrpUntypedTransaction = {
  // FIXME: Missing documentation for hash
  hash: string

  // FIXME: Missing documentation for blockNumber
  blockNumber: number

  // FIXME: Missing documentation for account
  account: BlockchainAddress

  // FIXME: Missing documentation for fee
  fee: Amount

  // FIXME: Missing documentation for status
  status: TransactionStatus

  // FIXME: Missing documentation for error
  error?: string

  // FIXME: Missing documentation for kind
  kind: XrpTransactionKind
}

// FIXME: Missing documentation for SolBlock
export type SolBlock = {
  // FIXME: Missing documentation for hash
  hash: string

  // FIXME: Missing documentation for number
  number: number

  // FIXME: Missing documentation for timestamp
  timestamp: IsoDatetime

  // FIXME: Missing documentation for transactions
  transactions: SolTransaction[]
}

// FIXME: Missing documentation for SolTransaction
export type SolTransaction = {
  // FIXME: Missing documentation for hash
  hash: string

  // FIXME: Missing documentation for blockNumber
  blockNumber: number

  // FIXME: Missing documentation for version
  version: string

  // FIXME: Missing documentation for from
  from: BlockchainAddress

  // FIXME: Missing documentation for instructions
  instructions: SolInstruction[]

  // FIXME: Missing documentation for fee
  fee: Amount

  // FIXME: Missing documentation for status
  status: TransactionStatus

  // FIXME: Missing documentation for error
  error?: string
}

// FIXME: Missing documentation for SolInstruction
export type SolInstruction = {
  // FIXME: Missing documentation for index
  index: string

  // FIXME: Missing documentation for program
  program: BlockchainAddress
}

// FIXME: Missing documentation for SolSystemTransferInstruction
export type SolSystemTransferInstruction = {
  // FIXME: Missing documentation for index
  index: string

  // FIXME: Missing documentation for program
  program: BlockchainAddress

  // FIXME: Missing documentation for kind
  kind: SolInstructionKind.SystemTransfer

  // FIXME: Missing documentation for from
  from: BlockchainAddress

  // FIXME: Missing documentation for to
  to: BlockchainAddress

  // FIXME: Missing documentation for value
  value: Amount
}

// FIXME: Missing documentation for SolTokenTransferInstruction
export type SolTokenTransferInstruction = {
  // FIXME: Missing documentation for index
  index: string

  // FIXME: Missing documentation for program
  program: BlockchainAddress

  // FIXME: Missing documentation for kind
  kind: SolInstructionKind.TokenTransfer

  // FIXME: Missing documentation for mint
  mint: BlockchainAddress

  // FIXME: Missing documentation for from
  from: BlockchainAddress

  // FIXME: Missing documentation for fromTokenAccount
  fromTokenAccount: BlockchainAddress

  // FIXME: Missing documentation for to
  to: BlockchainAddress

  // FIXME: Missing documentation for toTokenAccount
  toTokenAccount: BlockchainAddress

  // FIXME: Missing documentation for value
  value: Amount
}

// FIXME: Missing documentation for SolUntypedInstruction
export type SolUntypedInstruction = {
  // FIXME: Missing documentation for index
  index: string

  // FIXME: Missing documentation for program
  program: BlockchainAddress

  // FIXME: Missing documentation for accounts
  accounts: BlockchainAddress[]

  // FIXME: Missing documentation for data
  data: string
}

// FIXME: Missing documentation for EvmLog
export type EvmLog = Erc20Log | Erc721Log | EvmUntypedLog

// FIXME: Missing documentation for EvmLogKind
export enum EvmLogKind {
  // FIXME: Missing documentation for Unknown
  Unknown = 'Unknown',
  // FIXME: Missing documentation for Erc20
  Erc20 = 'Erc20',
  // FIXME: Missing documentation for Erc721
  Erc721 = 'Erc721',
}

// FIXME: Missing documentation for TransactionStatus
export enum TransactionStatus {
  // FIXME: Missing documentation for SUCCESS
  SUCCESS = 'SUCCESS',
  // FIXME: Missing documentation for FAILED
  FAILED = 'FAILED',
}

// FIXME: Missing documentation for TrxTransactionKind
export enum TrxTransactionKind {
  // FIXME: Missing documentation for TransferContract
  TransferContract = 'TransferContract',
  // FIXME: Missing documentation for TransferAssetContract
  TransferAssetContract = 'TransferAssetContract',
  // FIXME: Missing documentation for TriggerSmartContract
  TriggerSmartContract = 'TriggerSmartContract',
}

// FIXME: Missing documentation for XrpTransactionKind
export enum XrpTransactionKind {
  // FIXME: Missing documentation for Payment
  Payment = 'Payment',
}

// FIXME: Missing documentation for SolInstructionKind
export enum SolInstructionKind {
  // FIXME: Missing documentation for SystemTransfer
  SystemTransfer = 'SystemTransfer',
  // FIXME: Missing documentation for TokenTransfer
  TokenTransfer = 'TokenTransfer',
}

// FIXME: Missing documentation for FeeEstimationKind
export enum FeeEstimationKind {
  // FIXME: Missing documentation for Eip1559
  Eip1559 = 'Eip1559',
  // FIXME: Missing documentation for EthLegacy
  EthLegacy = 'EthLegacy',
}
