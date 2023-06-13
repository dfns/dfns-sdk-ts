import * as PolicyExecution from '../datamodel/PolicyExecution'

export type ListPolicyControlExecutionsRequest = {
  query?: { activityId: string }
}

export type ListPolicyControlExecutionsResponse =
  PolicyExecution.PolicyControlExecution

export type GetPolicyControlExecutionByIdRequest = {
  policyControlExecutionId: string
}

export type GetPolicyControlExecutionByIdResponse =
  PolicyExecution.PolicyControlExecution

export type UpdatePolicyControlExecutionRequest = {
  policyControlExecutionId: string
  body: PolicyExecution.UpdatePolicyControlExecutionInput
}

export type UpdatePolicyControlExecutionResponse =
  PolicyExecution.PolicyControlExecution
