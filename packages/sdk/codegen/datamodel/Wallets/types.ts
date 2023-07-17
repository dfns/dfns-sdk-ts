import {
  Amount,
  BlockchainAddress,
  EntityId,
  IsoDatetime,
  Tag,
} from '../Foundations'

// FIXME: Missing documentation for TransferNativeAsset
export type TransferNativeAsset = {
  // FIXME: Missing documentation for kind
  kind: TransferKind.Native

  // FIXME: Missing documentation for to
  to: BlockchainAddress

  // FIXME: Missing documentation for amount
  amount: Amount
}

// FIXME: Missing documentation for TransferErc20Asset
export type TransferErc20Asset = {
  // FIXME: Missing documentation for kind
  kind: TransferKind.Erc20

  // FIXME: Missing documentation for contract
  contract: BlockchainAddress

  // FIXME: Missing documentation for to
  to: BlockchainAddress

  // FIXME: Missing documentation for amount
  amount: Amount
}

// FIXME: Missing documentation for TransferErc721Asset
export type TransferErc721Asset = {
  // FIXME: Missing documentation for kind
  kind: TransferKind.Erc721

  // FIXME: Missing documentation for contract
  contract: BlockchainAddress

  // FIXME: Missing documentation for to
  to: BlockchainAddress

  // FIXME: Missing documentation for tokenId
  tokenId: string
}

// FIXME: Missing documentation for BroadcastEvmTransaction
export type BroadcastEvmTransaction = {
  // FIXME: Missing documentation for kind
  kind: TransactionKind.Evm

  // FIXME: Missing documentation for to
  to?: BlockchainAddress

  // FIXME: Missing documentation for value
  value?: Amount

  // FIXME: Missing documentation for data
  data?: string

  // FIXME: Missing documentation for nonce
  nonce?: number
}

// FIXME: Missing documentation for BroadcastEip1559Transaction
export type BroadcastEip1559Transaction = {
  // FIXME: Missing documentation for kind
  kind: TransactionKind.Eip1559

  // FIXME: Missing documentation for to
  to?: BlockchainAddress

  // FIXME: Missing documentation for value
  value?: Amount

  // FIXME: Missing documentation for data
  data?: string

  // FIXME: Missing documentation for nonce
  nonce?: number

  // FIXME: Missing documentation for gasLimit
  gasLimit?: Amount

  // FIXME: Missing documentation for maxPriorityFeePerGas
  maxPriorityFeePerGas?: Amount

  // FIXME: Missing documentation for maxFeePerGas
  maxFeePerGas?: Amount
}

// FIXME: Missing documentation for BroadcastEvmLegacyTransaction
export type BroadcastEvmLegacyTransaction = {
  // FIXME: Missing documentation for kind
  kind: TransactionKind.EvmLegacy

  // FIXME: Missing documentation for to
  to?: BlockchainAddress

  // FIXME: Missing documentation for value
  value?: Amount

  // FIXME: Missing documentation for data
  data?: string

  // FIXME: Missing documentation for nonce
  nonce?: number

  // FIXME: Missing documentation for gasLimit
  gasLimit?: Amount

  // FIXME: Missing documentation for gasPrice
  gasPrice?: Amount
}

// FIXME: Missing documentation for SignHash
export type SignHash = {
  // FIXME: Missing documentation for kind
  kind: SignatureKind.Hash

  // FIXME: Missing documentation for hash
  hash: string
}

// FIXME: Missing documentation for Eip712Domain
export type Eip712Domain = {
  // FIXME: Missing documentation for name
  name?: string

  // FIXME: Missing documentation for version
  version?: string

  // FIXME: Missing documentation for chainId
  chainId?: number

  // FIXME: Missing documentation for verifyingContract
  verifyingContract?: BlockchainAddress

  // FIXME: Missing documentation for salt
  salt?: string
}

// FIXME: Missing documentation for SignEip712TypedData
export type SignEip712TypedData = {
  // FIXME: Missing documentation for kind
  kind: SignatureKind.Eip712

  // FIXME: Missing documentation for types
  types: Record<string, unknown>

  // FIXME: Missing documentation for domain
  domain: Eip712Domain

  // FIXME: Missing documentation for message
  message: Record<string, unknown>
}

// FIXME: Missing documentation for Wallet
export type Wallet = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for network
  network: BlockchainNetwork

  // FIXME: Missing documentation for status
  status: WalletStatus

  // FIXME: Missing documentation for address
  address?: string

  // FIXME: Missing documentation for name
  name?: string

  // FIXME: Missing documentation for externalId
  externalId?: string

  // FIXME: Missing documentation for tags
  tags: Tag[]

  // FIXME: Missing documentation for dateCreated
  dateCreated: IsoDatetime
}

// FIXME: Missing documentation for WalletAssets
export type WalletAssets = {
  // FIXME: Missing documentation for walletId
  walletId: EntityId

  // FIXME: Missing documentation for network
  network: BlockchainNetwork

  // FIXME: Missing documentation for assets
  assets: WalletAsset[]
}

// FIXME: Missing documentation for WalletAsset
export type WalletAsset = {
  // FIXME: Missing documentation for contract
  contract?: string

  // FIXME: Missing documentation for symbol
  symbol?: string

  // FIXME: Missing documentation for decimals
  decimals: number

  // FIXME: Missing documentation for verified
  verified?: boolean

  // FIXME: Missing documentation for balance
  balance: Amount
}

// FIXME: Missing documentation for WalletNfts
export type WalletNfts = {
  // FIXME: Missing documentation for walletId
  walletId: EntityId

  // FIXME: Missing documentation for network
  network: BlockchainNetwork

  // FIXME: Missing documentation for nfts
  nfts: WalletNft[]
}

// FIXME: Missing documentation for WalletNft
export type WalletNft = {
  // FIXME: Missing documentation for contract
  contract: string

  // FIXME: Missing documentation for symbol
  symbol?: string

  // FIXME: Missing documentation for verified
  verified?: boolean

  // FIXME: Missing documentation for tokenIds
  tokenIds: string[]

  // FIXME: Missing documentation for count
  count: number
}

// FIXME: Missing documentation for PaginatedWalletList
export type PaginatedWalletList = {
  // FIXME: Missing documentation for items
  items: Wallet[]

  // FIXME: Missing documentation for nextPageToken
  nextPageToken?: string
}

// FIXME: Missing documentation for NativeTransferEvent
export type NativeTransferEvent = {
  // FIXME: Missing documentation for kind
  kind: EventKind.NativeTransfer

  // FIXME: Missing documentation for walletId
  walletId: EntityId

  // FIXME: Missing documentation for network
  network: BlockchainNetwork

  // FIXME: Missing documentation for blockNumber
  blockNumber: number

  // FIXME: Missing documentation for txHash
  txHash: string

  // FIXME: Missing documentation for index
  index?: string

  // FIXME: Missing documentation for timestamp
  timestamp: IsoDatetime

  // FIXME: Missing documentation for fee
  fee?: Amount

  // FIXME: Missing documentation for direction
  direction: TransferDirection

  // FIXME: Missing documentation for symbol
  symbol: string

  // FIXME: Missing documentation for decimals
  decimals: number

  // FIXME: Missing documentation for verified
  verified?: boolean

  // FIXME: Missing documentation for from
  from: BlockchainAddress

  // FIXME: Missing documentation for to
  to: BlockchainAddress

  // FIXME: Missing documentation for value
  value: Amount
}

// FIXME: Missing documentation for Erc20TransferEvent
export type Erc20TransferEvent = {
  // FIXME: Missing documentation for kind
  kind: EventKind.Erc20Transfer

  // FIXME: Missing documentation for walletId
  walletId: EntityId

  // FIXME: Missing documentation for network
  network: BlockchainNetwork

  // FIXME: Missing documentation for blockNumber
  blockNumber: number

  // FIXME: Missing documentation for txHash
  txHash: string

  // FIXME: Missing documentation for index
  index?: string

  // FIXME: Missing documentation for timestamp
  timestamp: IsoDatetime

  // FIXME: Missing documentation for fee
  fee?: Amount

  // FIXME: Missing documentation for direction
  direction: TransferDirection

  // FIXME: Missing documentation for contract
  contract: BlockchainAddress

  // FIXME: Missing documentation for symbol
  symbol?: string

  // FIXME: Missing documentation for decimals
  decimals: number

  // FIXME: Missing documentation for verified
  verified?: boolean

  // FIXME: Missing documentation for from
  from: BlockchainAddress

  // FIXME: Missing documentation for to
  to: BlockchainAddress

  // FIXME: Missing documentation for value
  value: Amount
}

// FIXME: Missing documentation for Erc721TransferEvent
export type Erc721TransferEvent = {
  // FIXME: Missing documentation for kind
  kind: EventKind.Erc721Transfer

  // FIXME: Missing documentation for walletId
  walletId: EntityId

  // FIXME: Missing documentation for network
  network: BlockchainNetwork

  // FIXME: Missing documentation for blockNumber
  blockNumber: number

  // FIXME: Missing documentation for txHash
  txHash: string

  // FIXME: Missing documentation for index
  index?: string

  // FIXME: Missing documentation for timestamp
  timestamp: IsoDatetime

  // FIXME: Missing documentation for fee
  fee?: Amount

  // FIXME: Missing documentation for direction
  direction: TransferDirection

  // FIXME: Missing documentation for contract
  contract: BlockchainAddress

  // FIXME: Missing documentation for symbol
  symbol?: string

  // FIXME: Missing documentation for verified
  verified?: boolean

  // FIXME: Missing documentation for from
  from: BlockchainAddress

  // FIXME: Missing documentation for to
  to: BlockchainAddress

  // FIXME: Missing documentation for tokenId
  tokenId: string
}

// FIXME: Missing documentation for PaginatedEventHistory
export type PaginatedEventHistory = {
  // FIXME: Missing documentation for walletId
  walletId: EntityId

  // FIXME: Missing documentation for network
  network: BlockchainNetwork

  // FIXME: Missing documentation for items
  items: BlockchainEvent[]

  // FIXME: Missing documentation for nextPageToken
  nextPageToken?: string
}

// FIXME: Missing documentation for TransferRequest
export type TransferRequest = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for walletId
  walletId: EntityId

  // FIXME: Missing documentation for network
  network: BlockchainNetwork

  // FIXME: Missing documentation for txHash
  txHash?: string

  // FIXME: Missing documentation for requester
  requester: RequesterIdentity

  // FIXME: Missing documentation for requestBody
  requestBody: TransferAssetBody

  // FIXME: Missing documentation for status
  status: TransferStatus

  // FIXME: Missing documentation for fee
  fee?: Amount

  // FIXME: Missing documentation for error
  error?: string

  // FIXME: Missing documentation for dateRequested
  dateRequested: IsoDatetime

  // FIXME: Missing documentation for dateBroadcasted
  dateBroadcasted?: IsoDatetime

  // FIXME: Missing documentation for dateConfirmed
  dateConfirmed?: IsoDatetime
}

// FIXME: Missing documentation for PaginatedTransferList
export type PaginatedTransferList = {
  // FIXME: Missing documentation for walletId
  walletId: EntityId

  // FIXME: Missing documentation for items
  items: TransferRequest[]

  // FIXME: Missing documentation for nextPageToken
  nextPageToken?: string
}

// FIXME: Missing documentation for TransactionRequest
export type TransactionRequest = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for walletId
  walletId: EntityId

  // FIXME: Missing documentation for network
  network: BlockchainNetwork

  // FIXME: Missing documentation for txHash
  txHash?: string

  // FIXME: Missing documentation for requester
  requester: RequesterIdentity

  // FIXME: Missing documentation for requestBody
  requestBody: BroadcastTransactionBody

  // FIXME: Missing documentation for status
  status: TransactionStatus

  // FIXME: Missing documentation for error
  error?: string

  // FIXME: Missing documentation for fee
  fee?: Amount

  // FIXME: Missing documentation for dateRequested
  dateRequested: IsoDatetime

  // FIXME: Missing documentation for dateBroadcasted
  dateBroadcasted?: IsoDatetime

  // FIXME: Missing documentation for dateConfirmed
  dateConfirmed?: IsoDatetime
}

// FIXME: Missing documentation for PaginatedTransactionList
export type PaginatedTransactionList = {
  // FIXME: Missing documentation for walletId
  walletId: EntityId

  // FIXME: Missing documentation for items
  items: TransactionRequest[]

  // FIXME: Missing documentation for nextPageToken
  nextPageToken?: string
}

// FIXME: Missing documentation for Signature
export type Signature = {
  // FIXME: Missing documentation for r
  r: string

  // FIXME: Missing documentation for s
  s: string

  // FIXME: Missing documentation for recid
  recid?: number

  // FIXME: Missing documentation for encoded
  encoded?: string
}

// FIXME: Missing documentation for SignatureRequest
export type SignatureRequest = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for walletId
  walletId: EntityId

  // FIXME: Missing documentation for requester
  requester: RequesterIdentity

  // FIXME: Missing documentation for requestBody
  requestBody: GenerateSignatureBody

  // FIXME: Missing documentation for signature
  signature?: Signature

  // FIXME: Missing documentation for status
  status: SignatureStatus

  // FIXME: Missing documentation for error
  error?: string

  // FIXME: Missing documentation for dateRequested
  dateRequested: IsoDatetime

  // FIXME: Missing documentation for datePolicyResolved
  datePolicyResolved?: IsoDatetime

  // FIXME: Missing documentation for dateSigned
  dateSigned?: IsoDatetime
}

// FIXME: Missing documentation for PaginatedSignatureList
export type PaginatedSignatureList = {
  // FIXME: Missing documentation for walletId
  walletId: EntityId

  // FIXME: Missing documentation for items
  items: SignatureRequest[]

  // FIXME: Missing documentation for nextPageToken
  nextPageToken?: string
}

// FIXME: Missing documentation for RequesterIdentity
export type RequesterIdentity = {
  // FIXME: Missing documentation for userId
  userId: EntityId

  // FIXME: Missing documentation for tokenId
  tokenId?: EntityId

  // FIXME: Missing documentation for appId
  appId?: EntityId
}

// FIXME: Missing documentation for CreateWalletBody
export type CreateWalletBody = {
  // FIXME: Missing documentation for network
  network: BlockchainNetwork

  // FIXME: Missing documentation for externalId
  externalId?: string

  // FIXME: Missing documentation for tags
  tags?: Tag[]

  // FIXME: Missing documentation for name
  name?: string
}

// FIXME: Missing documentation for TransferAssetBody
export type TransferAssetBody =
  | TransferNativeAsset
  | TransferErc20Asset
  | TransferErc721Asset

// FIXME: Missing documentation for BroadcastTransactionBody
export type BroadcastTransactionBody =
  | BroadcastEvmTransaction
  | BroadcastEip1559Transaction
  | BroadcastEvmLegacyTransaction

// FIXME: Missing documentation for GenerateSignatureBody
export type GenerateSignatureBody = SignHash | SignEip712TypedData

// FIXME: Missing documentation for BlockchainEvent
export type BlockchainEvent =
  | NativeTransferEvent
  | Erc20TransferEvent
  | Erc721TransferEvent

// FIXME: Missing documentation for TransferKind
export enum TransferKind {
  // FIXME: Missing documentation for Native
  Native = 'Native',
  // FIXME: Missing documentation for Erc20
  Erc20 = 'Erc20',
  // FIXME: Missing documentation for Erc721
  Erc721 = 'Erc721',
}

// FIXME: Missing documentation for TransactionKind
export enum TransactionKind {
  // FIXME: Missing documentation for Evm
  Evm = 'Evm',
  // FIXME: Missing documentation for Eip1559
  Eip1559 = 'Eip1559',
  // FIXME: Missing documentation for EvmLegacy
  EvmLegacy = 'EvmLegacy',
}

// FIXME: Missing documentation for SignatureKind
export enum SignatureKind {
  // FIXME: Missing documentation for Hash
  Hash = 'Hash',
  // FIXME: Missing documentation for Eip712
  Eip712 = 'Eip712',
}

// FIXME: Missing documentation for WalletStatus
export enum WalletStatus {
  // FIXME: Missing documentation for Active
  Active = 'Active',
  //Initial state of `AssetAccount` entity, indicating that it’s being created at the moment.
  Creating = 'Creating',
  // FIXME: Missing documentation for Failed
  Failed = 'Failed',
}

// FIXME: Missing documentation for EventKind
export enum EventKind {
  // FIXME: Missing documentation for NativeTransfer
  NativeTransfer = 'NativeTransfer',
  // FIXME: Missing documentation for Erc20Transfer
  Erc20Transfer = 'Erc20Transfer',
  // FIXME: Missing documentation for Erc721Transfer
  Erc721Transfer = 'Erc721Transfer',
}

// FIXME: Missing documentation for TransferDirection
export enum TransferDirection {
  // FIXME: Missing documentation for In
  In = 'In',
  // FIXME: Missing documentation for Out
  Out = 'Out',
}

// FIXME: Missing documentation for TransferStatus
export enum TransferStatus {
  // FIXME: Missing documentation for Pending
  Pending = 'Pending',
  // FIXME: Missing documentation for Broadcasted
  Broadcasted = 'Broadcasted',
  // FIXME: Missing documentation for Confirmed
  Confirmed = 'Confirmed',
  // FIXME: Missing documentation for Failed
  Failed = 'Failed',
}

// FIXME: Missing documentation for TransactionStatus
export enum TransactionStatus {
  // FIXME: Missing documentation for Pending
  Pending = 'Pending',
  // FIXME: Missing documentation for Broadcasted
  Broadcasted = 'Broadcasted',
  // FIXME: Missing documentation for Confirmed
  Confirmed = 'Confirmed',
  // FIXME: Missing documentation for Failed
  Failed = 'Failed',
}

// FIXME: Missing documentation for SignatureStatus
export enum SignatureStatus {
  // FIXME: Missing documentation for Pending
  Pending = 'Pending',
  // FIXME: Missing documentation for Signed
  Signed = 'Signed',
  // FIXME: Missing documentation for Confirmed
  Confirmed = 'Confirmed',
  // FIXME: Missing documentation for Failed
  Failed = 'Failed',
}

// FIXME: Missing documentation for BlockchainNetwork
export enum BlockchainNetwork {
  // FIXME: Missing documentation for Bitcoin
  Bitcoin = 'Bitcoin',
  // FIXME: Missing documentation for BitcoinTestnet
  BitcoinTestnet = 'BitcoinTestnet',
  // FIXME: Missing documentation for Bsc
  Bsc = 'Bsc',
  // FIXME: Missing documentation for BscTestnet
  BscTestnet = 'BscTestnet',
  // FIXME: Missing documentation for Ethereum
  Ethereum = 'Ethereum',
  // FIXME: Missing documentation for EthereumGoerli
  EthereumGoerli = 'EthereumGoerli',
  // FIXME: Missing documentation for EthereumSepolia
  EthereumSepolia = 'EthereumSepolia',
  // FIXME: Missing documentation for Polygon
  Polygon = 'Polygon',
  // FIXME: Missing documentation for PolygonMumbai
  PolygonMumbai = 'PolygonMumbai',
  // FIXME: Missing documentation for Ripple
  Ripple = 'Ripple',
  // FIXME: Missing documentation for RippleTestnet
  RippleTestnet = 'RippleTestnet',
  // FIXME: Missing documentation for Solana
  Solana = 'Solana',
  // FIXME: Missing documentation for SolanaDevnet
  SolanaDevnet = 'SolanaDevnet',
  // FIXME: Missing documentation for Tron
  Tron = 'Tron',
  // FIXME: Missing documentation for TronShasta
  TronShasta = 'TronShasta',
}
