import {
  Amount,
  AssetSymbol,
  EntityId,
  IntegerPositiveStrict,
  IsoDatetime,
  Tag,
  Username,
} from '../Foundations'

// FIXME: Missing documentation for Policy
export type Policy = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for version
  version: string

  // FIXME: Missing documentation for activityKind
  activityKind: PolicyActivityKind

  // FIXME: Missing documentation for tags
  tags?: Tag[]

  // FIXME: Missing documentation for dateCreated
  dateCreated: IsoDatetime

  // FIXME: Missing documentation for orgId
  orgId: EntityId

  // FIXME: Missing documentation for description
  description?: string

  // FIXME: Missing documentation for author
  author: Username

  // FIXME: Missing documentation for name
  name?: string

  // FIXME: Missing documentation for status
  status: PolicyStatus

  // FIXME: Missing documentation for controlIds
  controlIds: EntityId[]

  // FIXME: Missing documentation for ruleIds
  ruleIds: EntityId[]

  // FIXME: Missing documentation for filter
  filter?: PolicyObjectFilter
}

// FIXME: Missing documentation for NotifyAndAuditPcConf
export type NotifyAndAuditPcConf = {
  // FIXME: Missing documentation for kind
  kind: PolicyControlKind.NotifyAndAudit

  // FIXME: Missing documentation for usernames
  usernames?: string[]

  // FIXME: Missing documentation for groups
  groups?: string[]
}

// FIXME: Missing documentation for RequestApprovalPcConf
export type RequestApprovalPcConf = {
  // FIXME: Missing documentation for kind
  kind: PolicyControlKind.RequestApproval

  // FIXME: Missing documentation for approverGroups
  approverGroups?: string[]

  // FIXME: Missing documentation for approverUsernames
  approverUsernames?: string[]

  // FIXME: Missing documentation for numApprovals
  numApprovals: number

  // FIXME: Missing documentation for timeoutInMinutes
  timeoutInMinutes?: IntegerPositiveStrict
}

// FIXME: Missing documentation for PolicyRule
export type PolicyRule = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for version
  version: string

  // FIXME: Missing documentation for kind
  kind: PolicyRuleKind

  // FIXME: Missing documentation for tags
  tags?: Tag[]

  // FIXME: Missing documentation for dateCreated
  dateCreated: IsoDatetime

  // FIXME: Missing documentation for orgId
  orgId: EntityId

  // FIXME: Missing documentation for author
  author: Username

  // FIXME: Missing documentation for description
  description?: string

  // FIXME: Missing documentation for name
  name?: string

  // FIXME: Missing documentation for configuration
  configuration: PolicyRuleConfiguration

  // FIXME: Missing documentation for status
  status: PolicyRuleStatus
}

// FIXME: Missing documentation for PolicyControl
export type PolicyControl = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for version
  version: string

  // FIXME: Missing documentation for kind
  kind: PolicyControlKind

  // FIXME: Missing documentation for tags
  tags?: Tag[]

  // FIXME: Missing documentation for dateCreated
  dateCreated: IsoDatetime

  // FIXME: Missing documentation for orgId
  orgId: EntityId

  // FIXME: Missing documentation for author
  author: Username

  // FIXME: Missing documentation for description
  description?: string

  // FIXME: Missing documentation for name
  name?: string

  /**
   * Indicates whether control should merge with same one (compared by values).
   * This property should not be set to true, unless outcomes are understood. For example: Let's say we have 3 policies:
   *
   * 1. policy to require approval for payments over €5000
   * 1. policy to require approval for payments done out of office hours
   * 1. policy to require approval for payments done out of Geofence.
   *
   * In this case policies will require 3 approvals combined, which might not be an intent, and only one approval is required.
   */
  shouldMergeWithSameControl: boolean

  // FIXME: Missing documentation for configuration
  configuration: PolicyControlConfiguration

  // FIXME: Missing documentation for status
  status: PolicyControlStatus
}

// FIXME: Missing documentation for CreateAmountLimitPrConf
export type CreateAmountLimitPrConf = {
  // FIXME: Missing documentation for kind
  kind: PolicyRuleKind.PaymentAmountLimit

  // FIXME: Missing documentation for limit
  limit: Amount

  // FIXME: Missing documentation for assetSymbol
  assetSymbol: AssetSymbol

  // FIXME: Missing documentation for shouldIgnoreAssetsWithoutMarketValue
  shouldIgnoreAssetsWithoutMarketValue: boolean
}

// FIXME: Missing documentation for UpdateAmountLimitPrConf
export type UpdateAmountLimitPrConf = {
  // FIXME: Missing documentation for limit
  limit?: Amount

  // FIXME: Missing documentation for assetSymbol
  assetSymbol?: AssetSymbol

  // FIXME: Missing documentation for shouldIgnoreAssetsWithoutMarketValue
  shouldIgnoreAssetsWithoutMarketValue?: boolean
}

// FIXME: Missing documentation for AmountLimitPrConf
export type AmountLimitPrConf = {
  // FIXME: Missing documentation for limit
  limit: Amount

  // FIXME: Missing documentation for assetSymbol
  assetSymbol: AssetSymbol

  // FIXME: Missing documentation for shouldIgnoreAssetsWithoutMarketValue
  shouldIgnoreAssetsWithoutMarketValue: boolean
}

// FIXME: Missing documentation for CreateTransferLimitPrConf
export type CreateTransferLimitPrConf = {
  // FIXME: Missing documentation for kind
  kind: PolicyRuleKind.TransferAmountLimit

  // FIXME: Missing documentation for limit
  limit: Amount

  // FIXME: Missing documentation for currency
  currency: Currency
}

// FIXME: Missing documentation for UpdateTransferLimitPrConf
export type UpdateTransferLimitPrConf = {
  // FIXME: Missing documentation for limit
  limit?: Amount

  // FIXME: Missing documentation for currency
  currency?: Currency
}

// FIXME: Missing documentation for TransferLimitPrConf
export type TransferLimitPrConf = {
  // FIXME: Missing documentation for limit
  limit: Amount

  // FIXME: Missing documentation for currency
  currency: Currency
}

// FIXME: Missing documentation for CreateOutgoingVelocityPrConf
export type CreateOutgoingVelocityPrConf = {
  // FIXME: Missing documentation for kind
  kind: PolicyRuleKind.PaymentAmountOutgoingVelocity

  // FIXME: Missing documentation for velocity
  velocity: Amount

  // FIXME: Missing documentation for assetSymbol
  assetSymbol: AssetSymbol

  // FIXME: Missing documentation for intervalInMinutes
  intervalInMinutes: number

  // FIXME: Missing documentation for shouldIgnoreAssetsWithoutMarketValue
  shouldIgnoreAssetsWithoutMarketValue: boolean
}

// FIXME: Missing documentation for UpdateOutgoingVelocityPrConf
export type UpdateOutgoingVelocityPrConf = {
  // FIXME: Missing documentation for velocity
  velocity?: Amount

  // FIXME: Missing documentation for assetSymbol
  assetSymbol?: AssetSymbol

  // FIXME: Missing documentation for intervalInMinutes
  intervalInMinutes: number

  // FIXME: Missing documentation for shouldIgnoreAssetsWithoutMarketValue
  shouldIgnoreAssetsWithoutMarketValue?: boolean
}

// FIXME: Missing documentation for OutgoingVelocityPrConf
export type OutgoingVelocityPrConf = {
  // FIXME: Missing documentation for velocity
  velocity: Amount

  // FIXME: Missing documentation for assetSymbol
  assetSymbol: AssetSymbol

  // FIXME: Missing documentation for intervalInMinutes
  intervalInMinutes: number

  // FIXME: Missing documentation for shouldIgnoreAssetsWithoutMarketValue
  shouldIgnoreAssetsWithoutMarketValue: boolean
}

// FIXME: Missing documentation for CreateRequestApprovalPcConf
export type CreateRequestApprovalPcConf = {
  // FIXME: Missing documentation for kind
  kind: PolicyControlKind.RequestApproval

  // FIXME: Missing documentation for approverUsernames
  approverUsernames?: string[]

  // FIXME: Missing documentation for approverGroups
  approverGroups?: string[]

  // FIXME: Missing documentation for timeoutInMinutes
  timeoutInMinutes?: IntegerPositiveStrict

  // FIXME: Missing documentation for numApprovals
  numApprovals: number
}

// FIXME: Missing documentation for UpdateRequestApprovalPcConf
export type UpdateRequestApprovalPcConf = {
  // FIXME: Missing documentation for approverUsernames
  approverUsernames?: string[]

  // FIXME: Missing documentation for approverGroups
  approverGroups?: string[]

  // FIXME: Missing documentation for timeoutInMinutes
  timeoutInMinutes?: number

  // FIXME: Missing documentation for numApprovals
  numApprovals?: number
}

// FIXME: Missing documentation for CreateNotifyAndAuditPcConf
export type CreateNotifyAndAuditPcConf = {
  // FIXME: Missing documentation for kind
  kind: PolicyControlKind.NotifyAndAudit

  // FIXME: Missing documentation for usernames
  usernames?: string[]

  // FIXME: Missing documentation for groups
  groups?: string[]
}

// FIXME: Missing documentation for UpdateNotifyAndAuditPcConf
export type UpdateNotifyAndAuditPcConf = {
  // FIXME: Missing documentation for groups
  groups?: string[]

  // FIXME: Missing documentation for usernames
  usernames?: string[]
}

// FIXME: Missing documentation for PolicyManagementPreferences
export type PolicyManagementPreferences = {
  /**
   * Sets default `AssetSymbol` for the policy rules that use it, such as Limit, Velocity, Siphoning, and others.
   */
  policyRuleAssetSymbol?: boolean

  /**
   * Sets default interval in minutes for policy rules that use intervals, such as Velocity and Siphoning. \n\nThis setting does not update existing rules. This will only impact rules that are created after this setting is set.
   */
  policyRuleVelocityIntervalInMinutes: number
}

// FIXME: Missing documentation for Create
export type Create = {}

// FIXME: Missing documentation for EmptyConfiguration
export type EmptyConfiguration = {}

// FIXME: Missing documentation for CreateAlwaysActivatedPrConf
export type CreateAlwaysActivatedPrConf = {
  // FIXME: Missing documentation for kind
  kind: PolicyRuleKind.AlwaysActivated
}

// FIXME: Missing documentation for UpdateAlwaysActivatedPrConf
export type UpdateAlwaysActivatedPrConf = {}

// FIXME: Missing documentation for AssetAccountFilter
export type AssetAccountFilter = {
  // FIXME: Missing documentation for kind
  kind: PolicyObjectFilterKind.AssetAccount

  // FIXME: Missing documentation for assetAccountIds
  assetAccountIds?: EntityId[]

  // FIXME: Missing documentation for tags
  tags?: Tag[]

  // FIXME: Missing documentation for assetSymbols
  assetSymbols?: string[]
}

// FIXME: Missing documentation for PublicKeyFilter
export type PublicKeyFilter = {
  // FIXME: Missing documentation for kind
  kind: PolicyObjectFilterKind.PublicKey

  // FIXME: Missing documentation for publicKeyIds
  publicKeyIds?: EntityId[]

  // FIXME: Missing documentation for tags
  tags?: string[]
}

// FIXME: Missing documentation for WalletFilter
export type WalletFilter = {
  // FIXME: Missing documentation for kind
  kind: PolicyObjectFilterKind.Wallet

  // FIXME: Missing documentation for walletIds
  walletIds?: EntityId[]
}

// FIXME: Missing documentation for CreatePolicyInput
export type CreatePolicyInput = {
  // FIXME: Missing documentation for activityKind
  activityKind: PolicyActivityKind

  // FIXME: Missing documentation for description
  description: string

  // FIXME: Missing documentation for name
  name?: string

  // FIXME: Missing documentation for controlIds
  controlIds: EntityId[]

  // FIXME: Missing documentation for ruleIds
  ruleIds: EntityId[]

  // FIXME: Missing documentation for status
  status: PolicyStatus

  // FIXME: Missing documentation for filter
  filter?: PolicyObjectFilter

  // FIXME: Missing documentation for isImmutable
  isImmutable?: boolean
}

// FIXME: Missing documentation for UpdatePolicyInput
export type UpdatePolicyInput = {
  // FIXME: Missing documentation for description
  description?: string

  // FIXME: Missing documentation for controlIds
  controlIds?: EntityId[]

  // FIXME: Missing documentation for ruleIds
  ruleIds?: EntityId[]

  // FIXME: Missing documentation for status
  status?: PolicyStatus

  // FIXME: Missing documentation for filter
  filter?: PolicyObjectFilter
}

// FIXME: Missing documentation for CreatePolicyControlInput
export type CreatePolicyControlInput = {
  // FIXME: Missing documentation for description
  description?: string

  // FIXME: Missing documentation for name
  name?: string

  // FIXME: Missing documentation for configuration
  configuration: CreatePolicyControlConfiguration

  // FIXME: Missing documentation for isImmutable
  isImmutable?: boolean
}

// FIXME: Missing documentation for UpdatePolicyControlInput
export type UpdatePolicyControlInput = {
  // FIXME: Missing documentation for description
  description?: string

  // FIXME: Missing documentation for name
  name?: string

  // FIXME: Missing documentation for configuration
  configuration?: UpdatePolicyControlConfiguration
}

// FIXME: Missing documentation for CreatePolicyRuleInput
export type CreatePolicyRuleInput = {
  // FIXME: Missing documentation for description
  description?: string

  // FIXME: Missing documentation for name
  name?: string

  // FIXME: Missing documentation for configuration
  configuration: CreatePolicyRuleConfiguration

  // FIXME: Missing documentation for isImmutable
  isImmutable?: boolean
}

// FIXME: Missing documentation for UpdatePolicyRuleInput
export type UpdatePolicyRuleInput = {
  // FIXME: Missing documentation for description
  description?: string

  // FIXME: Missing documentation for name
  name?: string

  // FIXME: Missing documentation for configuration
  configuration: UpdatePolicyRuleConfiguration
}

// FIXME: Missing documentation for CreatePolicyRuleConfiguration
export type CreatePolicyRuleConfiguration =
  | CreateAmountLimitPrConf
  | CreateTransferLimitPrConf
  | CreateOutgoingVelocityPrConf
  | CreateAlwaysActivatedPrConf

// FIXME: Missing documentation for UpdatePolicyRuleConfiguration
export type UpdatePolicyRuleConfiguration =
  | UpdateAmountLimitPrConf
  | UpdateTransferLimitPrConf
  | UpdateOutgoingVelocityPrConf
  | UpdateAlwaysActivatedPrConf

// FIXME: Missing documentation for UpdatePolicyControlConfiguration
export type UpdatePolicyControlConfiguration =
  | UpdateRequestApprovalPcConf
  | UpdateNotifyAndAuditPcConf

// FIXME: Missing documentation for CreatePolicyControlConfiguration
export type CreatePolicyControlConfiguration =
  | CreateRequestApprovalPcConf
  | CreateNotifyAndAuditPcConf

// FIXME: Missing documentation for PolicyRuleConfiguration
export type PolicyRuleConfiguration =
  | AmountLimitPrConf
  | TransferLimitPrConf
  | OutgoingVelocityPrConf
  | EmptyConfiguration

// FIXME: Missing documentation for PolicyControlConfiguration
export type PolicyControlConfiguration =
  | NotifyAndAuditPcConf
  | RequestApprovalPcConf

// FIXME: Missing documentation for PolicyObjectFilter
export type PolicyObjectFilter =
  | AssetAccountFilter
  | PublicKeyFilter
  | WalletFilter

// FIXME: Missing documentation for PolicyActivityKind
export enum PolicyActivityKind {
  // FIXME: Missing documentation for CreatingSignature
  CreatingSignature = 'CreatingSignature',
  // FIXME: Missing documentation for TransactionInitiation
  TransactionInitiation = 'TransactionInitiation',
  // FIXME: Missing documentation for PaymentInitiation
  PaymentInitiation = 'PaymentInitiation',
  // FIXME: Missing documentation for WalletsTransferAsset
  WalletsTransferAsset = 'WalletsTransferAsset',
  // FIXME: Missing documentation for WalletsBroadcastTransaction
  WalletsBroadcastTransaction = 'WalletsBroadcastTransaction',
  // FIXME: Missing documentation for WalletsGenerateSignature
  WalletsGenerateSignature = 'WalletsGenerateSignature',
}

// FIXME: Missing documentation for PolicyStatus
export enum PolicyStatus {
  // FIXME: Missing documentation for Enabled
  Enabled = 'Enabled',
  // FIXME: Missing documentation for Disabled
  Disabled = 'Disabled',
  // FIXME: Missing documentation for Archived
  Archived = 'Archived',
}

/**
 * enumm:
 * * NotifyAndAudit
 * * RequestApproval
 */
export enum PolicyControlKind {
  // FIXME: Missing documentation for NotifyAndAudit
  NotifyAndAudit = 'NotifyAndAudit',
  // FIXME: Missing documentation for RequestApproval
  RequestApproval = 'RequestApproval',
}

// FIXME: Missing documentation for PolicyRuleKind
export enum PolicyRuleKind {
  // FIXME: Missing documentation for AlwaysActivated
  AlwaysActivated = 'AlwaysActivated',
  // FIXME: Missing documentation for PaymentAmountLimit
  PaymentAmountLimit = 'PaymentAmountLimit',
  // FIXME: Missing documentation for PaymentAmountOutgoingVelocity
  PaymentAmountOutgoingVelocity = 'PaymentAmountOutgoingVelocity',
  // FIXME: Missing documentation for TransferAmountLimit
  TransferAmountLimit = 'TransferAmountLimit',
}

// FIXME: Missing documentation for Currency
export enum Currency {
  // FIXME: Missing documentation for EUR
  EUR = 'EUR',
  // FIXME: Missing documentation for USD
  USD = 'USD',
}

// FIXME: Missing documentation for PolicyControlStatus
export enum PolicyControlStatus {
  // FIXME: Missing documentation for Enabled
  Enabled = 'Enabled',
  // FIXME: Missing documentation for Archived
  Archived = 'Archived',
}

// FIXME: Missing documentation for PolicyRuleStatus
export enum PolicyRuleStatus {
  // FIXME: Missing documentation for Enabled
  Enabled = 'Enabled',
  // FIXME: Missing documentation for Archived
  Archived = 'Archived',
}

// FIXME: Missing documentation for PolicyObjectFilterKind
export enum PolicyObjectFilterKind {
  // FIXME: Missing documentation for AssetAccount
  AssetAccount = 'AssetAccount',
  // FIXME: Missing documentation for PublicKey
  PublicKey = 'PublicKey',
  // FIXME: Missing documentation for Wallet
  Wallet = 'Wallet',
}
