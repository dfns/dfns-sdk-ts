import {
  BadRequestError,
  EntityNotFoundError,
  ForbiddenError,
  UnauthorizedError,
} from '../Foundations'
import { BroadcastedTransaction } from '../PublicKeys'
import { EvmFeeEstimates } from './types'

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

// Response for CallReadFunction

export type CallReadFunctionSuccess = BroadcastedTransaction

export type CallReadFunctionError = {
  error:
    | EntityNotFoundError
    | BadRequestError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CallReadFunctionResponse =
  | CallReadFunctionSuccess
  | CallReadFunctionError
