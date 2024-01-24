import { DocumentSnapshot, EntityId, InitiatorKind, IsoDatetime } from '../Foundations'
import { PolicyActivityKind, PolicyControlKind } from '../PolicyManagement'

/**
 * @deprecated use the new policy engine instead
 */
export type PolicyExecution = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for kind
  kind: PolicyActivityKind

  // FIXME: Missing documentation for status
  status: ExecutionStatus

  // FIXME: Missing documentation for orgId
  orgId: EntityId

  // FIXME: Missing documentation for dateCreated
  dateCreated: IsoDatetime

  // FIXME: Missing documentation for initiatorKind
  initiatorKind: InitiatorKind

  // FIXME: Missing documentation for initiatingEventId
  initiatingEventId: EntityId

  /**
   * Applied poliies stored along with PolicyExecution status as-raw-json-string. This ensures that even if somebody tampers with policy, the audit log would have actual-literal representation of what was executed.
   *
   */
  documentedPolicies?: DocumentSnapshot[]

  // FIXME: Missing documentation for documentedActivity
  documentedActivity: DocumentSnapshot

  // FIXME: Missing documentation for controlExecutions
  controlExecutions?: PolicyControlExecution[]

  // FIXME: Missing documentation for policyId
  policyId: EntityId
}

/**
 * @deprecated use the new policy engine instead
 */
export type PolicyControlExecution = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for status
  status: ExecutionStatus

  // FIXME: Missing documentation for controlId
  controlId: EntityId

  // FIXME: Missing documentation for dateExecuted
  dateExecuted: IsoDatetime

  // FIXME: Missing documentation for dateFullfiled
  dateFullfiled?: IsoDatetime

  // FIXME: Missing documentation for policyExecutionId
  policyExecutionId: EntityId

  // FIXME: Missing documentation for approvals
  approvals?: string[]

  // FIXME: Missing documentation for documentedActivity
  documentedActivity: DocumentSnapshot

  // FIXME: Missing documentation for controlKind
  controlKind: PolicyControlKind

  // FIXME: Missing documentation for author
  author: EntityId

  // FIXME: Missing documentation for approverUsernames
  approverUsernames?: string[]

  // FIXME: Missing documentation for activityKind
  activityKind: PolicyActivityKind

  // FIXME: Missing documentation for numApprovals
  numApprovals?: number

  // FIXME: Missing documentation for activityId
  activityId: string
}

/**
 * @deprecated use the new policy engine instead
 */
export type AppraisableActivity = {}

/**
 * @deprecated use the new policy engine instead
 */
export type UpdatePolicyControlExecutionInput = {
  // FIXME: Missing documentation for status
  status: ExecutionStatus
}

/**
 * @deprecated use the new policy engine instead
 */
export enum ExecutionStatus {
  // FIXME: Missing documentation for Awaiting
  Awaiting = 'Awaiting',
  // FIXME: Missing documentation for Passed
  Passed = 'Passed',
  // FIXME: Missing documentation for Failed
  Failed = 'Failed',
  // FIXME: Missing documentation for Timedout
  Timedout = 'Timedout',
}
