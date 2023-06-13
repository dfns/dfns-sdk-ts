import * as PolicyManagement from '../datamodel/PolicyManagement'

export type CreatePolicyRequest = {
  body: PolicyManagement.CreatePolicyInput
}

export type CreatePolicyResponse = PolicyManagement.Policy

export type UpdatePolicyRequest = {
  policyId: string
  body: PolicyManagement.UpdatePolicyInput
}

export type UpdatePolicyResponse = PolicyManagement.Policy

export type GetPolicyByIdRequest = {
  policyId: string
}

export type GetPolicyByIdResponse = PolicyManagement.Policy

export type ListPoliciesRequest = {
  query?: {
    dateCreated?: string
    dateUpdated?: string
    activityKind?: PolicyManagement.PolicyActivityKind
    isEnabled?: boolean
    isDisabled?: boolean
    isArchived?: boolean
  }
}

export type ListPoliciesResponse = { items: PolicyManagement.Policy[] }

export type ArchivePolicyRequest = {
  policyId: string
}

export type ArchivePolicyResponse = PolicyManagement.Policy

export type CreatePolicyControlRequest = {
  body: PolicyManagement.CreatePolicyControlInput
}

export type CreatePolicyControlResponse = PolicyManagement.PolicyControl

export type UpdatePolicyControlRequest = {
  policyControlId: string
  body: PolicyManagement.UpdatePolicyControlInput
}

export type UpdatePolicyControlResponse = PolicyManagement.PolicyControl

export type GetPolicyControlByIdRequest = {
  policyControlId: string
}

export type GetPolicyControlByIdResponse = PolicyManagement.PolicyControl

export type ListPolicyControlsRequest = {
  query?: {
    dateCreated?: string
    dateUpdated?: string
    policyControlKind?: PolicyManagement.PolicyControlKind
    isEnabled?: boolean
    isDisabled?: boolean
    isArchived?: boolean
  }
}

export type ListPolicyControlsResponse = {
  items: PolicyManagement.PolicyControl[]
}

export type ArchivePolicyControlRequest = {
  policyControlId: string
}

export type ArchivePolicyControlResponse = PolicyManagement.PolicyControl

export type CreatePolicyRuleRequest = {
  body: PolicyManagement.CreatePolicyInput
}

export type CreatePolicyRuleResponse = PolicyManagement.Policy

export type UpdatePolicyRuleRequest = {
  policyRuleId: string
  body: PolicyManagement.UpdatePolicyInput
}

export type UpdatePolicyRuleResponse = PolicyManagement.Policy

export type GetPolicyRuleByIdRequest = {
  policyRuleId: string
}

export type GetPolicyRuleByIdResponse = PolicyManagement.Policy

export type ListPolicyRulesRequest = {
  query?: {
    dateCreated?: string
    dateUpdated?: string
    activityKind?: PolicyManagement.PolicyActivityKind
    isEnabled?: boolean
    isDisabled?: boolean
    isArchived?: boolean
  }
}

export type ListPolicyRulesResponse = { items: PolicyManagement.Policy[] }

export type ArchivePolicyRuleRequest = {
  policyRuleId: string
}

export type ArchivePolicyRuleResponse = PolicyManagement.Policy
