import {
  BadRequestError,
  EntityNotFoundError,
  ForbiddenError,
  UnauthorizedError,
} from '../Foundations'
import { PolicyControlExecution } from './types'

// Response for ListPolicyControlExecutions

export type ListPolicyControlExecutionsSuccess = {
  items: PolicyControlExecution[]
}

export type ListPolicyControlExecutionsError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ListPolicyControlExecutionsResponse =
  | ListPolicyControlExecutionsSuccess
  | ListPolicyControlExecutionsError

// Response for GetPolicyControlExecutionById

export type GetPolicyControlExecutionByIdSuccess = PolicyControlExecution

export type GetPolicyControlExecutionByIdError = {
  error:
    | EntityNotFoundError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GetPolicyControlExecutionByIdResponse =
  | GetPolicyControlExecutionByIdSuccess
  | GetPolicyControlExecutionByIdError

// Response for UpdatePolicyControlExecution

export type UpdatePolicyControlExecutionSuccess = PolicyControlExecution

export type UpdatePolicyControlExecutionError = {
  error:
    | EntityNotFoundError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type UpdatePolicyControlExecutionResponse =
  | UpdatePolicyControlExecutionSuccess
  | UpdatePolicyControlExecutionError
