import * as PolicyManagement from '../datamodel/PolicyManagement'

export type CreatePolicyRequest = {
  body: PolicyManagement.CreatePolicyInput
}

export type CreatePolicyResponse = PolicyManagement.Policy

export type GetPolicyByIdRequest = {
  policyId: string
}

export type GetPolicyByIdResponse = PolicyManagement.Policy

export type ListPoliciesResponse = { items: PolicyManagement.Policy[] }

export type ArchivePolicyRequest = {
  policyId: string
}

export type ArchivePolicyResponse = PolicyManagement.Policy

export type CreatePolicyControlRequest = {
  body: PolicyManagement.CreatePolicyControlInput
}

export type CreatePolicyControlResponse = PolicyManagement.PolicyControl

export type GetPolicyControlByIdRequest = {
  policyControlId: string
}

export type GetPolicyControlByIdResponse = PolicyManagement.PolicyControl

export type ListPolicyControlsResponse = {
  items: PolicyManagement.PolicyControl[]
}

export type ArchivePolicyControlRequest = {
  policyControlId: string
}

export type ArchivePolicyControlResponse = PolicyManagement.PolicyControl

export type CreatePolicyRuleRequest = {
  body: PolicyManagement.CreatePolicyRuleInput
}

export type CreatePolicyRuleResponse = PolicyManagement.PolicyRule

export type GetPolicyRuleByIdRequest = {
  policyRuleId: string
}

export type GetPolicyRuleByIdResponse = PolicyManagement.PolicyRule

export type ListPolicyRulesRequest = {
  query?: { author?: string }
}

export type ListPolicyRulesResponse = { items: PolicyManagement.PolicyRule[] }

export type ArchivePolicyRuleRequest = {
  policyRuleId: string
}

export type ArchivePolicyRuleResponse = PolicyManagement.PolicyRule
