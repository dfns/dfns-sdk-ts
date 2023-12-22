import {
  Amount,
  AssetSymbol,
  EntityId,
  IntegerPositiveStrict,
  IsoDatetime,
  Tag,
  Username,
} from '../Foundations'

/**
 * @deprecated use the new policy engine instead
 */
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

/**
 * @deprecated use the new policy engine instead
 */
export type NotifyAndAuditPcConf = {
  // FIXME: Missing documentation for kind
  kind: PolicyControlKind.NotifyAndAudit

  // FIXME: Missing documentation for usernames
  usernames?: string[]

  // FIXME: Missing documentation for groups
  groups?: string[]
}

/**
 * @deprecated use the new policy engine instead
 */
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

/**
 * @deprecated use the new policy engine instead
 */
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

/**
 * @deprecated use the new policy engine instead
 */
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

/**
 * @deprecated use the new policy engine instead
 */
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

/**
 * @deprecated use the new policy engine instead
 */
export type UpdateAmountLimitPrConf = {
  // FIXME: Missing documentation for limit
  limit?: Amount

  // FIXME: Missing documentation for assetSymbol
  assetSymbol?: AssetSymbol

  // FIXME: Missing documentation for shouldIgnoreAssetsWithoutMarketValue
  shouldIgnoreAssetsWithoutMarketValue?: boolean
}

/**
 * @deprecated use the new policy engine instead
 */
export type AmountLimitPrConf = {
  // FIXME: Missing documentation for limit
  limit: Amount

  // FIXME: Missing documentation for assetSymbol
  assetSymbol: AssetSymbol

  // FIXME: Missing documentation for shouldIgnoreAssetsWithoutMarketValue
  shouldIgnoreAssetsWithoutMarketValue: boolean
}

/**
 * @deprecated use the new policy engine instead
 */
export type CreateTransferLimitPrConf = {
  // FIXME: Missing documentation for kind
  kind: PolicyRuleKind.TransferAmountLimit

  // FIXME: Missing documentation for limit
  limit: Amount

  // FIXME: Missing documentation for currency
  currency: Currency
}

/**
 * @deprecated use the new policy engine instead
 */
export type UpdateTransferLimitPrConf = {
  // FIXME: Missing documentation for limit
  limit?: Amount

  // FIXME: Missing documentation for currency
  currency?: Currency
}

/**
 * @deprecated use the new policy engine instead
 */
export type TransferLimitPrConf = {
  // FIXME: Missing documentation for limit
  limit: Amount

  // FIXME: Missing documentation for currency
  currency: Currency
}

/**
 * @deprecated use the new policy engine instead
 */
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

/**
 * @deprecated use the new policy engine instead
 */
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

/**
 * @deprecated use the new policy engine instead
 */
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

/**
 * @deprecated use the new policy engine instead
 */
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

/**
 * @deprecated use the new policy engine instead
 */
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

/**
 * @deprecated use the new policy engine instead
 */
export type CreateNotifyAndAuditPcConf = {
  // FIXME: Missing documentation for kind
  kind: PolicyControlKind.NotifyAndAudit

  // FIXME: Missing documentation for usernames
  usernames?: string[]

  // FIXME: Missing documentation for groups
  groups?: string[]
}

/**
 * @deprecated use the new policy engine instead
 */
export type UpdateNotifyAndAuditPcConf = {
  // FIXME: Missing documentation for groups
  groups?: string[]

  // FIXME: Missing documentation for usernames
  usernames?: string[]
}

/**
 * @deprecated use the new policy engine instead
 */
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

/**
 * @deprecated use the new policy engine instead
 */
export type Create = {}

/**
 * @deprecated use the new policy engine instead
 */
export type EmptyConfiguration = {}

/**
 * @deprecated use the new policy engine instead
 */
export type CreateAlwaysActivatedPrConf = {
  // FIXME: Missing documentation for kind
  kind: PolicyRuleKind.AlwaysActivated
}

/**
 * @deprecated use the new policy engine instead
 */
export type UpdateAlwaysActivatedPrConf = {}

/**
 * @deprecated use the new policy engine instead
 */
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

/**
 * @deprecated use the new policy engine instead
 */
export type PublicKeyFilter = {
  // FIXME: Missing documentation for kind
  kind: PolicyObjectFilterKind.PublicKey

  // FIXME: Missing documentation for publicKeyIds
  publicKeyIds?: EntityId[]

  // FIXME: Missing documentation for tags
  tags?: string[]
}

/**
 * @deprecated use the new policy engine instead
 */
export type WalletFilter = {
  // FIXME: Missing documentation for kind
  kind: PolicyObjectFilterKind.Wallet

  // FIXME: Missing documentation for walletIds
  walletIds?: EntityId[]
}

/**
 * @deprecated use the new policy engine instead
 */
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

/**
 * @deprecated use the new policy engine instead
 */
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

/**
 * @deprecated use the new policy engine instead
 */
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

/**
 * @deprecated use the new policy engine instead
 */
export type UpdatePolicyControlInput = {
  // FIXME: Missing documentation for description
  description?: string

  // FIXME: Missing documentation for name
  name?: string

  // FIXME: Missing documentation for configuration
  configuration?: UpdatePolicyControlConfiguration
}

/**
 * @deprecated use the new policy engine instead
 */
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

/**
 * @deprecated use the new policy engine instead
 */
export type UpdatePolicyRuleInput = {
  // FIXME: Missing documentation for description
  description?: string

  // FIXME: Missing documentation for name
  name?: string

  // FIXME: Missing documentation for configuration
  configuration: UpdatePolicyRuleConfiguration
}

/**
 * @deprecated use the new policy engine instead
 */
export type CreatePolicyRuleConfiguration =
  | CreateAmountLimitPrConf
  | CreateTransferLimitPrConf
  | CreateOutgoingVelocityPrConf
  | CreateAlwaysActivatedPrConf

/**
 * @deprecated use the new policy engine instead
 */
export type UpdatePolicyRuleConfiguration =
  | UpdateAmountLimitPrConf
  | UpdateTransferLimitPrConf
  | UpdateOutgoingVelocityPrConf
  | UpdateAlwaysActivatedPrConf

/**
 * @deprecated use the new policy engine instead
 */
export type UpdatePolicyControlConfiguration =
  | UpdateRequestApprovalPcConf
  | UpdateNotifyAndAuditPcConf

/**
 * @deprecated use the new policy engine instead
 */
export type CreatePolicyControlConfiguration =
  | CreateRequestApprovalPcConf
  | CreateNotifyAndAuditPcConf

/**
 * @deprecated use the new policy engine instead
 */
export type PolicyRuleConfiguration =
  | AmountLimitPrConf
  | TransferLimitPrConf
  | OutgoingVelocityPrConf
  | EmptyConfiguration

/**
 * @deprecated use the new policy engine instead
 */
export type PolicyControlConfiguration =
  | NotifyAndAuditPcConf
  | RequestApprovalPcConf

/**
 * @deprecated use the new policy engine instead
 */
export type PolicyObjectFilter =
  | AssetAccountFilter
  | PublicKeyFilter
  | WalletFilter

/**
 * @deprecated use the new policy engine instead
 */
export enum PolicyActivityKind {
  // FIXME: Missing documentation for CreatingSignature
  CreatingSignature = 'CreatingSignature',
  // FIXME: Missing documentation for TransactionInitiation
  TransactionInitiation = 'TransactionInitiation',
  // FIXME: Missing documentation for PaymentInitiation
  PaymentInitiation = 'PaymentInitiation',
  // FIXME: Missing documentation for WalletsTransferAsset
  WalletsTransferAsset = 'WalletsTransferAsset',
}

/**
 * @deprecated use the new policy engine instead
 */
export enum PolicyStatus {
  // FIXME: Missing documentation for Enabled
  Enabled = 'Enabled',
  // FIXME: Missing documentation for Disabled
  Disabled = 'Disabled',
  // FIXME: Missing documentation for Archived
  Archived = 'Archived',
}

/**
 * @deprecated use the new policy engine instead
 */
export enum PolicyControlKind {
  // FIXME: Missing documentation for NotifyAndAudit
  NotifyAndAudit = 'NotifyAndAudit',
  // FIXME: Missing documentation for RequestApproval
  RequestApproval = 'RequestApproval',
}

/**
 * @deprecated use the new policy engine instead
 */
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

/**
 * @deprecated use the new policy engine instead
 */
export enum Currency {
  // FIXME: Missing documentation for EUR
  EUR = 'EUR',
  // FIXME: Missing documentation for USD
  USD = 'USD',
}

/**
 * @deprecated use the new policy engine instead
 */
export enum PolicyControlStatus {
  // FIXME: Missing documentation for Enabled
  Enabled = 'Enabled',
  // FIXME: Missing documentation for Archived
  Archived = 'Archived',
}

/**
 * @deprecated use the new policy engine instead
 */
export enum PolicyRuleStatus {
  // FIXME: Missing documentation for Enabled
  Enabled = 'Enabled',
  // FIXME: Missing documentation for Archived
  Archived = 'Archived',
}

/**
 * @deprecated use the new policy engine instead
 */
export enum PolicyObjectFilterKind {
  // FIXME: Missing documentation for AssetAccount
  AssetAccount = 'AssetAccount',
  // FIXME: Missing documentation for PublicKey
  PublicKey = 'PublicKey',
  // FIXME: Missing documentation for Wallet
  Wallet = 'Wallet',
}
