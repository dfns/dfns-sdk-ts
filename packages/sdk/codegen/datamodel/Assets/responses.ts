import {
  BadRequestError,
  EntityNotFoundError,
  ForbiddenError,
  PaymentRequiredError,
  UnauthorizedError,
} from '../Foundations'
import { InsufficientFunds } from './errors'
import { AssetAccount, AssetAccountBalance, Payment } from './types'

// Response for InitiatePayment

export type InitiatePaymentSuccess = Payment

export type InitiatePaymentError = {
  error:
    | BadRequestError
    | PaymentRequiredError
    | InsufficientFunds
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type InitiatePaymentResponse =
  | InitiatePaymentSuccess
  | InitiatePaymentError

// Response for GetPaymentById

export type GetPaymentByIdSuccess = Payment

export type GetPaymentByIdError = {
  error:
    | EntityNotFoundError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GetPaymentByIdResponse = GetPaymentByIdSuccess | GetPaymentByIdError

// Response for ListPayments

export type ListPaymentsSuccess = Payment

export type ListPaymentsError = {
  error:
    | EntityNotFoundError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ListPaymentsResponse = ListPaymentsSuccess | ListPaymentsError

// Response for CreateAssetAccount

export type CreateAssetAccountSuccess = AssetAccount

export type CreateAssetAccountError = {
  error:
    | EntityNotFoundError
    | BadRequestError
    | PaymentRequiredError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateAssetAccountResponse =
  | CreateAssetAccountSuccess
  | CreateAssetAccountError

// Response for GetAssetAccountById

export type GetAssetAccountByIdSuccess = AssetAccount

export type GetAssetAccountByIdError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GetAssetAccountByIdResponse =
  | GetAssetAccountByIdSuccess
  | GetAssetAccountByIdError

// Response for ListAssetAccounts

export type ListAssetAccountsSuccess = {
  items: AssetAccount[]
}

export type ListAssetAccountsError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ListAssetAccountsResponse =
  | ListAssetAccountsSuccess
  | ListAssetAccountsError

// Response for ArchiveAssetAccount

export type ArchiveAssetAccountSuccess = AssetAccount

export type ArchiveAssetAccountError = {
  error:
    | EntityNotFoundError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ArchiveAssetAccountResponse =
  | ArchiveAssetAccountSuccess
  | ArchiveAssetAccountError

// Response for GetAssetAccountBalanceById

export type GetAssetAccountBalanceByIdSuccess = AssetAccountBalance

export type GetAssetAccountBalanceByIdError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GetAssetAccountBalanceByIdResponse =
  | GetAssetAccountBalanceByIdSuccess
  | GetAssetAccountBalanceByIdError
