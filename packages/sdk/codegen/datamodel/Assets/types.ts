import {
  Amount,
  AssetSymbol,
  DfnsCertificate,
  EntityId,
  Initiator,
  IntegerPositiveStrict,
  IsoDatetime,
  Tag,
} from '../Foundations'

// FIXME: Missing documentation for PaymentInitiation
export type PaymentInitiation = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for paymentId
  paymentId: EntityId

  // FIXME: Missing documentation for externalId
  externalId?: EntityId

  // FIXME: Missing documentation for status
  status: PaymentInitiationStatus

  // FIXME: Missing documentation for orgId
  orgId?: EntityId

  // FIXME: Missing documentation for initiator
  initiator: Initiator

  // FIXME: Missing documentation for assetSymbol
  assetSymbol: AssetSymbol

  // FIXME: Missing documentation for amount
  amount: Amount

  // FIXME: Missing documentation for sender
  sender: DfnsAssetAccount

  // FIXME: Missing documentation for receiver
  receiver: PaymentInstrument

  // FIXME: Missing documentation for dateInitiated
  dateInitiated: IsoDatetime

  /**
   * In case payment initiation is rejected by the system, this field will contain information about it.
   *
   */
  rejectionReason?: string
}

// FIXME: Missing documentation for BlockchainWalletAddress
export type BlockchainWalletAddress = {
  // FIXME: Missing documentation for kind
  kind: PaymentInstrumentKind.BlockchainWalletAddress

  // FIXME: Missing documentation for address
  address: string
}

// FIXME: Missing documentation for DfnsAssetAccount
export type DfnsAssetAccount = {
  // FIXME: Missing documentation for kind
  kind: PaymentInstrumentKind.DfnsAssetAccount

  // FIXME: Missing documentation for id
  id: EntityId
}

// FIXME: Missing documentation for AssetAccount
export type AssetAccount = {
  /**
   * Multiple tags can be attached to an entity to categorise or otherwise mark it. For example tags could indicate risk (High, Medium, Low), departments (Trading, Sales, IT), purpose (Treasury, Hot, Deposits), and jurisdictions (US, EU, DE).
   *
   * Multiple tags can be attached to same entity.
   */
  tags?: Tag[]

  /**
   * Field can be used if entity is created in external (customer’s) system first. This way the external id can be attached to identify entity from Dfns’s data store.
   */
  externalId?: string

  /**
   * Indicates id of the Organisation, such as usually a customer, or sub-devision, sub-tenant, and others.
   */
  orgId: EntityId

  // FIXME: Missing documentation for id
  id: EntityId

  /**
   * Indicates whether account is ready to be used.
   */
  status: AssetAccountStatus

  /**
   * Blockchain address for a chosen Blockchain network.
   */
  address?: string

  /**
   * `PublicKey` which is used by `AssetAccount`. Usually this is used to derive addresses on a given blockchain network.
   *
   * Alternatively can be used to verify signatures produced by the platform.
   */
  publicKey?: string

  // FIXME: Missing documentation for publicKeyId
  publicKeyId?: EntityId

  /**
   * # [ENUM]
   *
   * Asset symbol indicating which asset this account is managing. BTC or ETH are obvious examples, but there are thousands of possible symbols. In case of coins (ERC20 and alike) use `COIN.BLOCKCHAIN` syntax, such as USDC.ETH or USDC.SOL to indicate that USDC on Ethereum or USDC on Solana is required. To get a list of all allowed values, send a `CreateAssetAccount` request with the `assetSymbol` field empty.
   */
  assetSymbol: AssetSymbol

  /**
   * Custom name that can be added for an account.
   */
  name: string

  // FIXME: Missing documentation for dateCreated
  dateCreated: IsoDatetime

  // FIXME: Missing documentation for dateUpdate
  dateUpdate: IsoDatetime

  // FIXME: Missing documentation for authorizations
  authorizations?: AssetAccountAuthorization[]
}

// FIXME: Missing documentation for Payment
export type Payment = {
  /**
   * Multiple tags can be attached to an entity to categorise or otherwise mark it. For example tags could indicate risk (High, Medium, Low), departments (Trading, Sales, IT), purpose (Treasury, Hot, Deposits), and jurisdictions (US, EU, DE).
   *
   * Multiple tags can be attached to same entity.
   */
  tags?: Tag[]

  /**
   * Field can be used if entity is created in external (customer’s) system first. This way the external id can be attached to identify entity from Dfns’s data store.
   */
  externalId?: string

  /**
   * Indicates id of the Organisation, such as usually a customer, or sub-devision, sub-tenant, and others.
   */
  orgId: EntityId

  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for status
  status: PaymentStatus

  // FIXME: Missing documentation for initiator
  initiator: Initiator

  // FIXME: Missing documentation for assetAccountId
  assetAccountId: EntityId

  // FIXME: Missing documentation for assetSymbol
  assetSymbol: AssetSymbol

  // FIXME: Missing documentation for amount
  amount: Amount

  // FIXME: Missing documentation for sender
  sender: PaymentInstrument

  // FIXME: Missing documentation for receiver
  receiver: PaymentInstrument

  /**
   * SWIFT (MT, ISO15022) field. Represents additional information about payment.
   *
   */
  narrative?: string

  // FIXME: Missing documentation for note
  note?: string

  // FIXME: Missing documentation for receiverAddress
  receiverAddress: string

  // FIXME: Missing documentation for policyCertificate
  policyCertificate?: DfnsCertificate

  // FIXME: Missing documentation for dateCreated
  dateCreated: IsoDatetime

  // FIXME: Missing documentation for dateUpdated
  dateUpdated: IsoDatetime

  // FIXME: Missing documentation for dateExecuted
  dateExecuted?: IsoDatetime

  // FIXME: Missing documentation for dateBroadcasted
  dateBroadcasted?: IsoDatetime

  // FIXME: Missing documentation for dateFirstConfirmed
  dateFirstConfirmed?: IsoDatetime

  // FIXME: Missing documentation for dateConfirmed
  dateConfirmed?: IsoDatetime

  // FIXME: Missing documentation for dateSettled
  dateSettled?: IsoDatetime

  // FIXME: Missing documentation for txHash
  txHash?: string

  // FIXME: Missing documentation for blockHeight
  blockHeight?: number

  // FIXME: Missing documentation for direction
  direction: PaymentDirection

  // FIXME: Missing documentation for fee
  fee?: Amount
}

// FIXME: Missing documentation for AssetAccountAuthorization
export type AssetAccountAuthorization = {
  // FIXME: Missing documentation for kind
  kind: AssetAccountAuthorizationKind

  // FIXME: Missing documentation for entityId
  entityId: EntityId

  // FIXME: Missing documentation for permission
  permission: AssetAccountPermissions
}

/**
 * Balance of one asset account.
 */
export type AssetAccountBalance = {
  /**
   * Id of the AssetAccount.
   */
  id: EntityId

  /**
   * Asset Symbol of the account.
   */
  assetSymbol: AssetSymbol

  /**
   * Balance of the account.
   */
  balance: Amount

  // FIXME: Missing documentation for maxUnitBalance
  maxUnitBalance: Amount
}

// FIXME: Missing documentation for UpdateAssetAccountPayload
export type UpdateAssetAccountPayload = {
  /**
   * Indicates whether account is ready to be used.
   */
  status: AssetAccountStatus

  /**
   * Blockchain address for a chosen Blockchain network.
   */
  address?: string

  /**
   * `PublicKey` which is used by `AssetAccount`. Usually this is used to derive addresses on a given blockchain network.
   *
   * Alternatively can be used to verify signatures produced by the platform.
   */
  publicKey?: string

  /**
   * Custom name that can be added for an account.
   */
  name?: string
}

// FIXME: Missing documentation for CreateAssetAccountInput
export type CreateAssetAccountInput = {
  /**
   * # [ENUM]
   *
   * Asset symbol indicating which asset this account is managing. BTC or ETH are obvious examples, but there are thousands of possible symbols. In case of coins (ERC20 and alike) use `COIN.BLOCKCHAIN` syntax, such as USDC.ETH or USDC.SOL to indicate that USDC on Ethereum or USDC on Solana is required. To get a list of all allowed values, send a `CreateAssetAccount` request with the `assetSymbol` field empty.
   */
  assetSymbol: AssetSymbol

  // FIXME: Missing documentation for groupSize
  groupSize?: IntegerPositiveStrict

  // FIXME: Missing documentation for groupThreshold
  groupThreshold?: IntegerPositiveStrict

  // FIXME: Missing documentation for externalId
  externalId?: string

  // FIXME: Missing documentation for tags
  tags?: Tag[]

  /**
   * Custom name that can be added for an account.
   */
  name?: string
}

// FIXME: Missing documentation for CreatePaymentInput
export type CreatePaymentInput = {
  // FIXME: Missing documentation for externalId
  externalId?: string

  // FIXME: Missing documentation for assetSymbol
  assetSymbol: AssetSymbol

  // FIXME: Missing documentation for amount
  amount: Amount

  // FIXME: Missing documentation for receiver
  receiver: PaymentInstrument

  // FIXME: Missing documentation for note
  note?: string

  // FIXME: Missing documentation for narrative
  narrative?: string
}

// FIXME: Missing documentation for PaymentInstrument
export type PaymentInstrument = BlockchainWalletAddress | DfnsAssetAccount

// FIXME: Missing documentation for PaymentInstrumentKind
export enum PaymentInstrumentKind {
  // FIXME: Missing documentation for DfnsAssetAccount
  DfnsAssetAccount = 'DfnsAssetAccount',
  // FIXME: Missing documentation for BlockchainWalletAddress
  BlockchainWalletAddress = 'BlockchainWalletAddress',
}

// FIXME: Missing documentation for PaymentInitiationStatus
export enum PaymentInitiationStatus {
  // FIXME: Missing documentation for Initiated
  Initiated = 'Initiated',
  // FIXME: Missing documentation for Canceled
  Canceled = 'Canceled',
  // FIXME: Missing documentation for Rejected
  Rejected = 'Rejected',
}

// FIXME: Missing documentation for AssetAccountStatus
export enum AssetAccountStatus {
  //Initial state of `AssetAccount` entity, indicating that it’s being created at the moment.
  Creating = 'Creating',
  // FIXME: Missing documentation for Enabled
  Enabled = 'Enabled',
  // FIXME: Missing documentation for Failed
  Failed = 'Failed',
}

// FIXME: Missing documentation for PaymentStatus
export enum PaymentStatus {
  //Payment order is received and initiated. It will execute later.
  Initiated = 'Initiated',
  //Some Policy blocked the payment, it is not approved.
  Rejected = 'Rejected',
  //Payment passed Policies, it is approved.
  Approved = 'Approved',
  //Payment is successfully Executed and Broadcasted on the blockchain.
  Executed = 'Executed',
  //Payment tried to execute, but failed doing so.
  Failed = 'Failed',
  //Payment transaction is confirmed on the blockchain.
  Confirmed = 'Confirmed',
}

// FIXME: Missing documentation for AssetAccountAuthorizationKind
export enum AssetAccountAuthorizationKind {
  // FIXME: Missing documentation for Employee
  Employee = 'Employee',
  // FIXME: Missing documentation for Group
  Group = 'Group',
  // FIXME: Missing documentation for ApiKey
  ApiKey = 'ApiKey',
}

// FIXME: Missing documentation for AssetAccountPermissions
export enum AssetAccountPermissions {
  // FIXME: Missing documentation for InitiatePayments
  InitiatePayments = 'InitiatePayments',
  // FIXME: Missing documentation for ReadBalance
  ReadBalance = 'ReadBalance',
  // FIXME: Missing documentation for ReadPublicKey
  ReadPublicKey = 'ReadPublicKey',
}

// FIXME: Missing documentation for PaymentDirection
export enum PaymentDirection {
  // FIXME: Missing documentation for Incoming
  Incoming = 'Incoming',
  // FIXME: Missing documentation for Outgoing
  Outgoing = 'Outgoing',
}
