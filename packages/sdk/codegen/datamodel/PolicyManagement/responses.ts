import {
  BadRequestError,
  EntityNotFoundError,
  ForbiddenError,
  UnauthorizedError,
} from '../Foundations'
import { Policy, PolicyControl } from './types'

// Response for CreatePolicy

export type CreatePolicySuccess = Policy

export type CreatePolicyError = {
  error:
    | BadRequestError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreatePolicyResponse = CreatePolicySuccess | CreatePolicyError

// Response for UpdatePolicy

export type UpdatePolicySuccess = Policy

export type UpdatePolicyError = {
  error:
    | BadRequestError
    | EntityNotFoundError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type UpdatePolicyResponse = UpdatePolicySuccess | UpdatePolicyError

// Response for GetPolicyById

export type GetPolicyByIdSuccess = Policy

export type GetPolicyByIdError = {
  error:
    | EntityNotFoundError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GetPolicyByIdResponse = GetPolicyByIdSuccess | GetPolicyByIdError

// Response for ListPolicies

export type ListPoliciesSuccess = {
  items: Policy[]
}

export type ListPoliciesError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ListPoliciesResponse = ListPoliciesSuccess | ListPoliciesError

// Response for ArchivePolicy

export type ArchivePolicySuccess = Policy

export type ArchivePolicyError = {
  error:
    | EntityNotFoundError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ArchivePolicyResponse = ArchivePolicySuccess | ArchivePolicyError

// Response for CreatePolicyControl

export type CreatePolicyControlSuccess = PolicyControl

export type CreatePolicyControlError = {
  error:
    | BadRequestError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreatePolicyControlResponse =
  | CreatePolicyControlSuccess
  | CreatePolicyControlError

// Response for UpdatePolicyControl

export type UpdatePolicyControlSuccess = PolicyControl

export type UpdatePolicyControlError = {
  error:
    | BadRequestError
    | EntityNotFoundError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type UpdatePolicyControlResponse =
  | UpdatePolicyControlSuccess
  | UpdatePolicyControlError

// Response for GetPolicyControlById

export type GetPolicyControlByIdSuccess = PolicyControl

export type GetPolicyControlByIdError = {
  error:
    | EntityNotFoundError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GetPolicyControlByIdResponse =
  | GetPolicyControlByIdSuccess
  | GetPolicyControlByIdError

// Response for ListPolicyControls

export type ListPolicyControlsSuccess = {
  items: PolicyControl[]
}

export type ListPolicyControlsError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ListPolicyControlsResponse =
  | ListPolicyControlsSuccess
  | ListPolicyControlsError

// Response for ArchivePolicyControl

export type ArchivePolicyControlSuccess = PolicyControl

export type ArchivePolicyControlError = {
  error:
    | EntityNotFoundError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ArchivePolicyControlResponse =
  | ArchivePolicyControlSuccess
  | ArchivePolicyControlError

// Response for CreatePolicyRule

export type CreatePolicyRuleSuccess = Policy

export type CreatePolicyRuleError = {
  error:
    | BadRequestError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreatePolicyRuleResponse =
  | CreatePolicyRuleSuccess
  | CreatePolicyRuleError

// Response for UpdatePolicyRule

export type UpdatePolicyRuleSuccess = Policy

export type UpdatePolicyRuleError = {
  error:
    | BadRequestError
    | EntityNotFoundError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type UpdatePolicyRuleResponse =
  | UpdatePolicyRuleSuccess
  | UpdatePolicyRuleError

// Response for GetPolicyRuleById

export type GetPolicyRuleByIdSuccess = Policy

export type GetPolicyRuleByIdError = {
  error:
    | EntityNotFoundError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GetPolicyRuleByIdResponse =
  | GetPolicyRuleByIdSuccess
  | GetPolicyRuleByIdError

// Response for ListPolicyRules

export type ListPolicyRulesSuccess = {
  items: Policy[]
}

export type ListPolicyRulesError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ListPolicyRulesResponse =
  | ListPolicyRulesSuccess
  | ListPolicyRulesError

// Response for ArchivePolicyRule

export type ArchivePolicyRuleSuccess = Policy

export type ArchivePolicyRuleError = {
  error:
    | EntityNotFoundError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ArchivePolicyRuleResponse =
  | ArchivePolicyRuleSuccess
  | ArchivePolicyRuleError
