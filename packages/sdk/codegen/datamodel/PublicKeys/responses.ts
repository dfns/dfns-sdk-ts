import {
  BadRequestError,
  EntityNotFoundError,
  ForbiddenError,
  PaymentRequiredError,
  UnauthorizedError,
} from '../Foundations'
import {
  BroadcastedTransaction,
  GetPublicKeyAddressResponse,
  GetPublicKeyResponse,
  PublicKeyRecord,
  Signature,
  SignatureResponse,
  StartWalletConnectSessionOutput,
} from './types'

// Response for GetPublicKeyById

export type GetPublicKeyByIdSuccess = GetPublicKeyResponse

export type GetPublicKeyByIdError = {
  error:
    | EntityNotFoundError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GetPublicKeyByIdResponse =
  | GetPublicKeyByIdSuccess
  | GetPublicKeyByIdError

// Response for CreatePublicKey

export type CreatePublicKeySuccess = PublicKeyRecord

export type CreatePublicKeyError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreatePublicKeyResponse =
  | CreatePublicKeySuccess
  | CreatePublicKeyError

// Response for ListPublicKeys

export type ListPublicKeysSuccess = {
  items: GetPublicKeyResponse[]
}

export type ListPublicKeysError = {
  error:
    | EntityNotFoundError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ListPublicKeysResponse = ListPublicKeysSuccess | ListPublicKeysError

// Response for GetAddressForNetwork

export type GetAddressForNetworkSuccess = GetPublicKeyAddressResponse

export type GetAddressForNetworkError = {
  error:
    | EntityNotFoundError
    | BadRequestError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GetAddressForNetworkResponse =
  | GetAddressForNetworkSuccess
  | GetAddressForNetworkError

// Response for GetSignatureById

export type GetSignatureByIdSuccess = Signature

export type GetSignatureByIdError = {
  error:
    | EntityNotFoundError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GetSignatureByIdResponse =
  | GetSignatureByIdSuccess
  | GetSignatureByIdError

// Response for CreateSignature

export type CreateSignatureSuccess = SignatureResponse

export type CreateSignatureError = {
  error:
    | EntityNotFoundError
    | PaymentRequiredError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateSignatureResponse =
  | CreateSignatureSuccess
  | CreateSignatureError

// Response for StartWalletConnectSession

export type StartWalletConnectSessionSuccess = StartWalletConnectSessionOutput

export type StartWalletConnectSessionError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type StartWalletConnectSessionResponse =
  | StartWalletConnectSessionSuccess
  | StartWalletConnectSessionError

// Response for ListTransactions

export type ListTransactionsSuccess = {
  items: BroadcastedTransaction[]
}

export type ListTransactionsError = {
  error:
    | EntityNotFoundError
    | BadRequestError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ListTransactionsResponse =
  | ListTransactionsSuccess
  | ListTransactionsError

// Response for CreateTransaction

export type CreateTransactionSuccess = BroadcastedTransaction

export type CreateTransactionError = {
  error:
    | EntityNotFoundError
    | BadRequestError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateTransactionResponse =
  | CreateTransactionSuccess
  | CreateTransactionError

// Response for GetTransactionById

export type GetTransactionByIdSuccess = BroadcastedTransaction

export type GetTransactionByIdError = {
  error:
    | EntityNotFoundError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GetTransactionByIdResponse =
  | GetTransactionByIdSuccess
  | GetTransactionByIdError
