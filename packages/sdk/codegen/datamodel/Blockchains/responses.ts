import {
  BadRequestError,
  EntityNotFoundError,
  ForbiddenError,
  UnauthorizedError,
} from '../Foundations'
import { CallViewFunctionResult, EvmFeeEstimates } from './types'

// Response for EvmBlockchainFee

export type EvmBlockchainFeeSuccess = EvmFeeEstimates

export type EvmBlockchainFeeError = {
  error:
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | EntityNotFoundError
}

export type EvmBlockchainFeeResponse =
  | EvmBlockchainFeeSuccess
  | EvmBlockchainFeeError

// Response for CallViewFunction

export type CallViewFunctionSuccess = CallViewFunctionResult

export type CallViewFunctionError = {
  error:
    | EntityNotFoundError
    | BadRequestError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CallViewFunctionResponse =
  | CallViewFunctionSuccess
  | CallViewFunctionError
