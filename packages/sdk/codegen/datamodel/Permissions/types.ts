import { EntityId, IsoDatetime } from '../Foundations'

// FIXME: Missing documentation for Permission
export type Permission = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for orgId
  orgId: EntityId

  // FIXME: Missing documentation for name
  name: string

  // FIXME: Missing documentation for operations
  operations: string[]

  // FIXME: Missing documentation for status
  status: PermissionStatus

  // FIXME: Missing documentation for resourceId
  resourceId?: string

  // FIXME: Missing documentation for isImmutable
  isImmutable: boolean

  // FIXME: Missing documentation for predicates
  predicates?: PermissionPredicate[]

  // FIXME: Missing documentation for dateCreated
  dateCreated: IsoDatetime

  // FIXME: Missing documentation for dateUpdated
  dateUpdated: IsoDatetime

  // FIXME: Missing documentation for isArchived
  isArchived: boolean
}

// FIXME: Missing documentation for PermissionPredicate
export type PermissionPredicate = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for permissionId
  permissionId: EntityId

  // FIXME: Missing documentation for fieldName
  fieldName: string

  // FIXME: Missing documentation for evaluatorKind
  evaluatorKind: FieldEvaluatorKind

  // FIXME: Missing documentation for parameters
  parameters: string[]

  // FIXME: Missing documentation for isImmutable
  isImmutable: boolean

  // FIXME: Missing documentation for dateCreated
  dateCreated: IsoDatetime

  // FIXME: Missing documentation for dateUpdated
  dateUpdated: IsoDatetime

  // FIXME: Missing documentation for isArchived
  isArchived: boolean
}

// FIXME: Missing documentation for PermissionAssignment
export type PermissionAssignment = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for permissionId
  permissionId: string

  // FIXME: Missing documentation for identityId
  identityId: EntityId

  // FIXME: Missing documentation for identityKind
  identityKind: IdentityKind

  // FIXME: Missing documentation for dateCreated
  dateCreated: IsoDatetime

  // FIXME: Missing documentation for dateUpdated
  dateUpdated: IsoDatetime
}

// FIXME: Missing documentation for DeletionAcknowledgement
export type DeletionAcknowledgement = {
  // FIXME: Missing documentation for id
  id: string
}

// FIXME: Missing documentation for ResourceOwnership
export type ResourceOwnership = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for orgId
  orgId: EntityId

  // FIXME: Missing documentation for resourceId
  resourceId: EntityId

  // FIXME: Missing documentation for resourceKind
  resourceKind: string

  // FIXME: Missing documentation for ownerId
  ownerId: EntityId

  // FIXME: Missing documentation for ownerKind
  ownerKind: OwnerKind

  // FIXME: Missing documentation for dateCreated
  dateCreated: IsoDatetime

  // FIXME: Missing documentation for dateUpdated
  dateUpdated: IsoDatetime
}

// FIXME: Missing documentation for CreatePermissionInput
export type CreatePermissionInput = {
  // FIXME: Missing documentation for name
  name: string

  // FIXME: Missing documentation for operations
  operations: string[]
}

// FIXME: Missing documentation for UpdatePermissionInput
export type UpdatePermissionInput = {
  // FIXME: Missing documentation for name
  name?: string

  // FIXME: Missing documentation for operations
  operations?: string[]
}

// FIXME: Missing documentation for ArchivePermissionInput
export type ArchivePermissionInput = {
  // FIXME: Missing documentation for isArchived
  isArchived: boolean
}

// FIXME: Missing documentation for CreatePermissionPredicateInput
export type CreatePermissionPredicateInput = {
  // FIXME: Missing documentation for fieldName
  fieldName: string

  // FIXME: Missing documentation for evaluatorKind
  evaluatorKind: FieldEvaluatorKind

  // FIXME: Missing documentation for parameters
  parameters: string[]
}

// FIXME: Missing documentation for UpdatePermissionPredicateInput
export type UpdatePermissionPredicateInput = {
  // FIXME: Missing documentation for fieldName
  fieldName?: string

  // FIXME: Missing documentation for evaluatorKind
  evaluatorKind?: FieldEvaluatorKind

  // FIXME: Missing documentation for parameters
  parameters?: string[]
}

// FIXME: Missing documentation for ArchivePermissionPredicateInput
export type ArchivePermissionPredicateInput = {
  // FIXME: Missing documentation for isArchived
  isArchived: boolean
}

// FIXME: Missing documentation for CreatePermissionAssignmentInput
export type CreatePermissionAssignmentInput = {
  // FIXME: Missing documentation for permissionId
  permissionId: string

  // FIXME: Missing documentation for identityId
  identityId: string

  // FIXME: Missing documentation for identityKind
  identityKind: IdentityKindCustomerFacing
}

// FIXME: Missing documentation for FieldEvaluatorKind
export enum FieldEvaluatorKind {
  // FIXME: Missing documentation for ContainsAll
  ContainsAll = 'ContainsAll',
  // FIXME: Missing documentation for ContainsOneOf
  ContainsOneOf = 'ContainsOneOf',
  // FIXME: Missing documentation for DateAfter
  DateAfter = 'DateAfter',
  // FIXME: Missing documentation for DateBefore
  DateBefore = 'DateBefore',
  // FIXME: Missing documentation for Is
  Is = 'Is',
  // FIXME: Missing documentation for ValueGreaterThan
  ValueGreaterThan = 'ValueGreaterThan',
  // FIXME: Missing documentation for ValueLessThan
  ValueLessThan = 'ValueLessThan',
}

// FIXME: Missing documentation for PermissionStatus
export enum PermissionStatus {
  // FIXME: Missing documentation for Active
  Active = 'Active',
}

// FIXME: Missing documentation for IdentityKind
export enum IdentityKind {
  // FIXME: Missing documentation for Application
  Application = 'Application',
  // FIXME: Missing documentation for CustomerEmployee
  CustomerEmployee = 'CustomerEmployee',
  // FIXME: Missing documentation for DfnsStaff
  DfnsStaff = 'DfnsStaff',
  // FIXME: Missing documentation for EndUser
  EndUser = 'EndUser',
}

// FIXME: Missing documentation for IdentityKindCustomerFacing
export enum IdentityKindCustomerFacing {
  // FIXME: Missing documentation for Application
  Application = 'Application',
  // FIXME: Missing documentation for CustomerEmployee
  CustomerEmployee = 'CustomerEmployee',
  // FIXME: Missing documentation for EndUser
  EndUser = 'EndUser',
}

// FIXME: Missing documentation for OwnerKind
export enum OwnerKind {
  // FIXME: Missing documentation for LegalPerson
  LegalPerson = 'LegalPerson',
  // FIXME: Missing documentation for NaturalPerson
  NaturalPerson = 'NaturalPerson',
}

// FIXME: Missing documentation for ResourceKind
export enum ResourceKind {
  // FIXME: Missing documentation for Wallet
  Wallet = 'Wallet',
  // FIXME: Missing documentation for PublicKey
  PublicKey = 'PublicKey',
}
