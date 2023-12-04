import {
  Amount,
  BlockchainAddress,
  EntityId,
  IntegerPositiveStrict,
  IsoDatetime,
  Tag,
} from '../Foundations'

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type TransferNativeAsset = {
  // FIXME: Missing documentation for kind
  kind: TransferKind.Native

  // FIXME: Missing documentation for to
  to: BlockchainAddress

  // FIXME: Missing documentation for amount
  amount: Amount
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
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

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
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

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type BroadcastTransaction = {
  // FIXME: Missing documentation for kind
  kind: TransactionKind.Transaction

  // FIXME: Missing documentation for transaction
  transaction: string
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
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

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
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

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
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

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type BroadcastPsbt = {
  // FIXME: Missing documentation for kind
  kind: TransactionKind.Psbt

  // FIXME: Missing documentation for psbt
  psbt: string
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type SignHash = {
  // FIXME: Missing documentation for kind
  kind: SignatureKind.Hash

  // FIXME: Missing documentation for hash
  hash: string
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type SignMessage = {
  // FIXME: Missing documentation for kind
  kind: SignatureKind.Message

  // FIXME: Missing documentation for message
  message: string
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type SignTransaction = {
  // FIXME: Missing documentation for kind
  kind: SignatureKind.Transaction

  // FIXME: Missing documentation for transaction
  transaction: string
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
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

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
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

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type SignPsbt = {
  // FIXME: Missing documentation for kind
  kind: SignatureKind.Psbt

  // FIXME: Missing documentation for psbt
  psbt: string
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type EncryptedKeyShare = {
  /**
   * Base64-encoded ID of the signer where the encrypted key share comes from.
   */
  signerId: string

  /**
   * Base64-encoded key share.
   */
  encryptedKeyShare: string
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type SupportedExportScheme = {
  /**
   * Base64-encoded ID of the signer where the encrypted key share comes from.
   */
  curve: KeyCurve

  /**
   * Base64-encoded key share.
   */
  protocol: KeyProtocol
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type TransferTrc10Asset = {
  // FIXME: Missing documentation for kind
  kind: TransferKind.Trc10

  // FIXME: Missing documentation for tokenId
  tokenId: string

  // FIXME: Missing documentation for to
  to: BlockchainAddress

  // FIXME: Missing documentation for amount
  amount: Amount
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type TransferTrc20Asset = {
  // FIXME: Missing documentation for kind
  kind: TransferKind.Trc20

  // FIXME: Missing documentation for contract
  contract: BlockchainAddress

  // FIXME: Missing documentation for to
  to: BlockchainAddress

  // FIXME: Missing documentation for amount
  amount: Amount
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type TransferTrc721Asset = {
  // FIXME: Missing documentation for kind
  kind: TransferKind.Trc721

  // FIXME: Missing documentation for contract
  contract: BlockchainAddress

  // FIXME: Missing documentation for to
  to: BlockchainAddress

  // FIXME: Missing documentation for tokenId
  tokenId: string
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type Wallet = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for network
  network: BlockchainNetwork

  // FIXME: Missing documentation for status
  status: WalletStatus

  // FIXME: Missing documentation for signingKey
  signingKey: SigningKey

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

  /**
   * If present, represents the moment when the wallet was exported for the first time.
   */
  dateExported?: IsoDatetime

  /**
   * Whether the wallet was imported, or if it was generated on Dfns side.
   */
  imported?: boolean

  /**
   * Whether the wallet was ever exported.
   */
  exported?: boolean
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type SigningKey = {
  // FIXME: Missing documentation for scheme
  scheme: KeyScheme

  // FIXME: Missing documentation for curve
  curve: KeyCurve

  // FIXME: Missing documentation for publicKey
  publicKey: string
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type WalletAssets = {
  // FIXME: Missing documentation for walletId
  walletId: EntityId

  // FIXME: Missing documentation for network
  network: BlockchainNetwork

  // FIXME: Missing documentation for assets
  assets: WalletAsset[]
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type WalletAsset = {
  // FIXME: Missing documentation for kind
  kind: BalanceKind

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

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type WalletNfts = {
  // FIXME: Missing documentation for walletId
  walletId: EntityId

  // FIXME: Missing documentation for network
  network: BlockchainNetwork

  // FIXME: Missing documentation for nfts
  nfts: WalletNft[]
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type WalletNft = {
  // FIXME: Missing documentation for kind
  kind: BalanceKind

  // FIXME: Missing documentation for contract
  contract?: string

  // FIXME: Missing documentation for symbol
  symbol?: string

  // FIXME: Missing documentation for verified
  verified?: boolean

  // FIXME: Missing documentation for tokenIds
  tokenIds: string[]

  // FIXME: Missing documentation for count
  count: number
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type PaginatedWalletList = {
  // FIXME: Missing documentation for items
  items: Wallet[]

  // FIXME: Missing documentation for nextPageToken
  nextPageToken?: string
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
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

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
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

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
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

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
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

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type TransferRequest = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for walletId
  walletId: EntityId

  // FIXME: Missing documentation for network
  network: BlockchainNetwork

  // FIXME: Missing documentation for requester
  requester: RequesterIdentity

  // FIXME: Missing documentation for requestBody
  requestBody: TransferAssetBody

  // FIXME: Missing documentation for status
  status: TransferStatus

  // FIXME: Missing documentation for txHash
  txHash?: string

  // FIXME: Missing documentation for fee
  fee?: Amount

  // FIXME: Missing documentation for dateRequested
  dateRequested: IsoDatetime

  // FIXME: Missing documentation for datePolicyEvaluated
  datePolicyEvaluated?: IsoDatetime

  // FIXME: Missing documentation for dateBroadcasted
  dateBroadcasted?: IsoDatetime

  // FIXME: Missing documentation for dateConfirmed
  dateConfirmed?: IsoDatetime

  // FIXME: Missing documentation for reason
  reason?: string

  // FIXME: Missing documentation for metadata
  metadata: TransferRequestMetadata
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type PaginatedTransferList = {
  // FIXME: Missing documentation for walletId
  walletId: EntityId

  // FIXME: Missing documentation for items
  items: TransferRequest[]

  // FIXME: Missing documentation for nextPageToken
  nextPageToken?: string
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type TransactionRequest = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for walletId
  walletId: EntityId

  // FIXME: Missing documentation for network
  network: BlockchainNetwork

  // FIXME: Missing documentation for requester
  requester: RequesterIdentity

  // FIXME: Missing documentation for requestBody
  requestBody: BroadcastTransactionBody

  // FIXME: Missing documentation for status
  status: TransactionStatus

  // FIXME: Missing documentation for txHash
  txHash?: string

  // FIXME: Missing documentation for fee
  fee?: Amount

  // FIXME: Missing documentation for dateRequested
  dateRequested: IsoDatetime

  // FIXME: Missing documentation for datePolicyEvaluated
  datePolicyEvaluated?: IsoDatetime

  // FIXME: Missing documentation for dateBroadcasted
  dateBroadcasted?: IsoDatetime

  // FIXME: Missing documentation for dateConfirmed
  dateConfirmed?: IsoDatetime

  // FIXME: Missing documentation for reason
  reason?: string
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type PaginatedTransactionList = {
  // FIXME: Missing documentation for walletId
  walletId: EntityId

  // FIXME: Missing documentation for items
  items: TransactionRequest[]

  // FIXME: Missing documentation for nextPageToken
  nextPageToken?: string
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
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

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type SignatureRequest = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for walletId
  walletId: EntityId

  // FIXME: Missing documentation for network
  network: BlockchainNetwork

  // FIXME: Missing documentation for requester
  requester: RequesterIdentity

  // FIXME: Missing documentation for requestBody
  requestBody: GenerateSignatureBody

  // FIXME: Missing documentation for signature
  signature?: Signature

  // FIXME: Missing documentation for signatures
  signatures?: Signature[]

  // FIXME: Missing documentation for signedData
  signedData?: string

  // FIXME: Missing documentation for status
  status: SignatureStatus

  // FIXME: Missing documentation for txHash
  txHash?: string

  // FIXME: Missing documentation for fee
  fee?: Amount

  // FIXME: Missing documentation for dateRequested
  dateRequested: IsoDatetime

  // FIXME: Missing documentation for datePolicyEvaluated
  datePolicyEvaluated?: IsoDatetime

  // FIXME: Missing documentation for dateSigned
  dateSigned?: IsoDatetime

  // FIXME: Missing documentation for dateConfirmed
  dateConfirmed?: IsoDatetime

  // FIXME: Missing documentation for reason
  reason?: string
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type PaginatedSignatureList = {
  // FIXME: Missing documentation for walletId
  walletId: EntityId

  // FIXME: Missing documentation for items
  items: SignatureRequest[]

  // FIXME: Missing documentation for nextPageToken
  nextPageToken?: string
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type RequesterIdentity = {
  // FIXME: Missing documentation for userId
  userId: EntityId

  // FIXME: Missing documentation for tokenId
  tokenId?: EntityId

  // FIXME: Missing documentation for appId
  appId?: EntityId
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type TransferRequestMetadata = {
  // FIXME: Missing documentation for asset
  asset: AssetMetadata
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type AssetMetadata = {
  // FIXME: Missing documentation for symbol
  symbol?: string

  // FIXME: Missing documentation for decimals
  decimals?: number

  // FIXME: Missing documentation for verified
  verified?: boolean
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type ExportedSigningKey = {
  // FIXME: Missing documentation for publicKey
  publicKey: string

  /**
   * The TSS threshold parameter of this wallet private signing key shares.
   */
  minSigners: IntegerPositiveStrict

  // FIXME: Missing documentation for curve
  curve: KeyCurve

  // FIXME: Missing documentation for protocol
  protocol: KeyProtocol

  /**
   * Key shares of the exported wallet. These key shares are encrypted with the provided encryption key. The wallet private key must then be re-constructed from them.
   */
  encryptedKeyShares: EncryptedKeyShare[]
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type DelegateWalletResult = {
  // FIXME: Missing documentation for walletId
  walletId: EntityId

  // FIXME: Missing documentation for status
  status: string
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type CreateWalletBody = {
  // FIXME: Missing documentation for network
  network: BlockchainNetwork

  /**
   * If delayDelegation is true, the wallet will be marked as "delegable". Meaning that later, you will be able to "delegate" (transfer) this wallet's ownership to an end-user, by calling the "Delegated Wallet" endpoint .
   */
  delayDelegation?: string

  // FIXME: Missing documentation for externalId
  externalId?: string

  // FIXME: Missing documentation for tags
  tags?: Tag[]

  // FIXME: Missing documentation for name
  name?: string
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type ImportWalletBody = {
  // FIXME: Missing documentation for network
  network: BlockchainNetwork

  // FIXME: Missing documentation for externalId
  externalId?: string

  // FIXME: Missing documentation for tags
  tags?: Tag[]

  // FIXME: Missing documentation for name
  name?: string

  // FIXME: Missing documentation for minSigners
  minSigners: IntegerPositiveStrict

  // FIXME: Missing documentation for protocol
  protocol: KeyProtocol

  // FIXME: Missing documentation for curve
  curve: KeyCurve

  // FIXME: Missing documentation for encryptedKeyShares
  encryptedKeyShares: EncryptedKeyShare[]
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type ExportWalletBody = {
  /**
   * Encryption public key that will be used by signers to encrypt the exported wallet key shares. The purpose of encrypting key shares is to have them extra-safe and not usable in any place in the system until they are safely returned back to the client issuing the export command.
   */
  encryptionKey: string

  /**
   * The schemes supported by the client issuing the export request, for private key reconstruction.
   */
  supportedSchemes: SupportedExportScheme[]
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type DelegateWalletBody = {
  /**
   * Encryption public key that will be used by signers to encrypt the exported wallet key shares. The purpose of encrypting key shares is to have them extra-safe and not usable in any place in the system until they are safely returned back to the client issuing the export command.
   */
  userId: EntityId
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type TransferAssetBody =
  | TransferNativeAsset
  | TransferErc20Asset
  | TransferErc721Asset
  | TransferTrc10Asset
  | TransferTrc20Asset
  | TransferTrc721Asset

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type BroadcastTransactionBody =
  | BroadcastTransaction
  | BroadcastEvmTransaction
  | BroadcastEip1559Transaction
  | BroadcastEvmLegacyTransaction
  | BroadcastPsbt

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type GenerateSignatureBody =
  | SignHash
  | SignMessage
  | SignTransaction
  | SignEip712TypedData
  | SignPsbt

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export type BlockchainEvent =
  | NativeTransferEvent
  | Erc20TransferEvent
  | Erc721TransferEvent

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export enum TransferKind {
  // FIXME: Missing documentation for Native
  Native = 'Native',
  // FIXME: Missing documentation for Erc20
  Erc20 = 'Erc20',
  // FIXME: Missing documentation for Erc721
  Erc721 = 'Erc721',
  // FIXME: Missing documentation for Trc10
  Trc10 = 'Trc10',
  // FIXME: Missing documentation for Trc20
  Trc20 = 'Trc20',
  // FIXME: Missing documentation for Trc721
  Trc721 = 'Trc721',
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export enum TransactionKind {
  // FIXME: Missing documentation for Transaction
  Transaction = 'Transaction',
  // FIXME: Missing documentation for Evm
  Evm = 'Evm',
  // FIXME: Missing documentation for Eip1559
  Eip1559 = 'Eip1559',
  // FIXME: Missing documentation for EvmLegacy
  EvmLegacy = 'EvmLegacy',
  // FIXME: Missing documentation for Psbt
  Psbt = 'Psbt',
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export enum SignatureKind {
  // FIXME: Missing documentation for Hash
  Hash = 'Hash',
  // FIXME: Missing documentation for Message
  Message = 'Message',
  // FIXME: Missing documentation for Transaction
  Transaction = 'Transaction',
  // FIXME: Missing documentation for Eip712
  Eip712 = 'Eip712',
  // FIXME: Missing documentation for Psbt
  Psbt = 'Psbt',
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export enum WalletStatus {
  // FIXME: Missing documentation for Active
  Active = 'Active',
  // FIXME: Missing documentation for Archived
  Archived = 'Archived',
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export enum KeyScheme {
  // FIXME: Missing documentation for ECDSA
  ECDSA = 'ECDSA',
  // FIXME: Missing documentation for EdDSA
  EdDSA = 'EdDSA',
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export enum KeyCurve {
  // FIXME: Missing documentation for ed25519
  ed25519 = 'ed25519',
  // FIXME: Missing documentation for secp256k1
  secp256k1 = 'secp256k1',
  // FIXME: Missing documentation for stark
  stark = 'stark',
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export enum KeyProtocol {
  // FIXME: Missing documentation for CGGMP21
  CGGMP21 = 'CGGMP21',
  // FIXME: Missing documentation for BINANCE_EDDSA
  BINANCE_EDDSA = 'BINANCE_EDDSA',
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export enum BalanceKind {
  // FIXME: Missing documentation for Native
  Native = 'Native',
  // FIXME: Missing documentation for Erc20
  Erc20 = 'Erc20',
  // FIXME: Missing documentation for Erc721
  Erc721 = 'Erc721',
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export enum EventKind {
  // FIXME: Missing documentation for NativeTransfer
  NativeTransfer = 'NativeTransfer',
  // FIXME: Missing documentation for Erc20Transfer
  Erc20Transfer = 'Erc20Transfer',
  // FIXME: Missing documentation for Erc721Transfer
  Erc721Transfer = 'Erc721Transfer',
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export enum TransferDirection {
  // FIXME: Missing documentation for In
  In = 'In',
  // FIXME: Missing documentation for Out
  Out = 'Out',
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export enum TransferStatus {
  // FIXME: Missing documentation for Pending
  Pending = 'Pending',
  // FIXME: Missing documentation for Executing
  Executing = 'Executing',
  // FIXME: Missing documentation for Broadcasted
  Broadcasted = 'Broadcasted',
  // FIXME: Missing documentation for Confirmed
  Confirmed = 'Confirmed',
  // FIXME: Missing documentation for Failed
  Failed = 'Failed',
  // FIXME: Missing documentation for Rejected
  Rejected = 'Rejected',
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export enum TransactionStatus {
  // FIXME: Missing documentation for Pending
  Pending = 'Pending',
  // FIXME: Missing documentation for Executing
  Executing = 'Executing',
  // FIXME: Missing documentation for Broadcasted
  Broadcasted = 'Broadcasted',
  // FIXME: Missing documentation for Confirmed
  Confirmed = 'Confirmed',
  // FIXME: Missing documentation for Failed
  Failed = 'Failed',
  // FIXME: Missing documentation for Rejected
  Rejected = 'Rejected',
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export enum SignatureStatus {
  // FIXME: Missing documentation for Pending
  Pending = 'Pending',
  // FIXME: Missing documentation for Executing
  Executing = 'Executing',
  // FIXME: Missing documentation for Signed
  Signed = 'Signed',
  // FIXME: Missing documentation for Confirmed
  Confirmed = 'Confirmed',
  // FIXME: Missing documentation for Failed
  Failed = 'Failed',
  // FIXME: Missing documentation for Rejected
  Rejected = 'Rejected',
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/wallets' instead
 */
export enum BlockchainNetwork {
  // FIXME: Missing documentation for ArbitrumOne
  ArbitrumOne = 'ArbitrumOne',
  // FIXME: Missing documentation for ArbitrumGoerli
  ArbitrumGoerli = 'ArbitrumGoerli',
  // FIXME: Missing documentation for ArbitrumSepolia
  ArbitrumSepolia = 'ArbitrumSepolia',
  // FIXME: Missing documentation for AvalancheC
  AvalancheC = 'AvalancheC',
  // FIXME: Missing documentation for AvalancheCFuji
  AvalancheCFuji = 'AvalancheCFuji',
  // FIXME: Missing documentation for Base
  Base = 'Base',
  // FIXME: Missing documentation for BaseGoerli
  BaseGoerli = 'BaseGoerli',
  // FIXME: Missing documentation for Bitcoin
  Bitcoin = 'Bitcoin',
  // FIXME: Missing documentation for BitcoinTestnet3
  BitcoinTestnet3 = 'BitcoinTestnet3',
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
  // FIXME: Missing documentation for FantomOpera
  FantomOpera = 'FantomOpera',
  // FIXME: Missing documentation for FantomTestnet
  FantomTestnet = 'FantomTestnet',
  // FIXME: Missing documentation for Optimism
  Optimism = 'Optimism',
  // FIXME: Missing documentation for OptimismGoerli
  OptimismGoerli = 'OptimismGoerli',
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
  // FIXME: Missing documentation for Tezos
  Tezos = 'Tezos',
  // FIXME: Missing documentation for TezosGhostnet
  TezosGhostnet = 'TezosGhostnet',
  // FIXME: Missing documentation for Tron
  Tron = 'Tron',
  // FIXME: Missing documentation for TronNile
  TronNile = 'TronNile',
  // FIXME: Missing documentation for KeyECDSA
  KeyECDSA = 'KeyECDSA',
  // FIXME: Missing documentation for KeyEdDSA
  KeyEdDSA = 'KeyEdDSA',
  // FIXME: Missing documentation for KeyECDSAStark
  KeyECDSAStark = 'KeyECDSAStark',
}
