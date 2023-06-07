import {
  BadRequestError,
  EntityNotFoundError,
  ForbiddenError,
  UnauthorizedError,
} from '../Foundations'
import {
  PaginatedEventHistory,
  PaginatedSignatureList,
  PaginatedTransactionList,
  PaginatedTransferList,
  PaginatedWalletList,
  SignatureRequest,
  TransactionRequest,
  TransferRequest,
  Wallet,
  WalletAssets,
  WalletNfts,
} from './types'

// Response for CreateWallet

export type CreateWalletSuccess = Wallet

export type CreateWalletError = {
  error:
    | BadRequestError
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateWalletResponse = CreateWalletSuccess | CreateWalletError

// Response for GetWallet

export type GetWalletSuccess = Wallet

export type GetWalletError = {
  error:
    | EntityNotFoundError
    | BadRequestError
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GetWalletResponse = GetWalletSuccess | GetWalletError

// Response for GetWalletAssets

export type GetWalletAssetsSuccess = WalletAssets

export type GetWalletAssetsError = {
  error:
    | EntityNotFoundError
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GetWalletAssetsResponse =
  | GetWalletAssetsSuccess
  | GetWalletAssetsError

// Response for GetWalletNfts

export type GetWalletNftsSuccess = WalletNfts

export type GetWalletNftsError = {
  error:
    | EntityNotFoundError
    | BadRequestError
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GetWalletNftsResponse = GetWalletNftsSuccess | GetWalletNftsError

// Response for ListWallets

export type ListWalletsSuccess = PaginatedWalletList

export type ListWalletsError = {
  error:
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ListWalletsResponse = ListWalletsSuccess | ListWalletsError

// Response for GetWalletHistory

export type GetWalletHistorySuccess = PaginatedEventHistory

export type GetWalletHistoryError = {
  error:
    | EntityNotFoundError
    | BadRequestError
    | ForbiddenError
    | UnauthorizedError
}

export type GetWalletHistoryResponse =
  | GetWalletHistorySuccess
  | GetWalletHistoryError

// Response for TransferAsset

export type TransferAssetSuccess = TransferRequest

export type TransferAssetError = {
  error:
    | BadRequestError
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type TransferAssetResponse = TransferAssetSuccess | TransferAssetError

// Response for GetTransfer

export type GetTransferSuccess = TransferRequest

export type GetTransferError = {
  error:
    | EntityNotFoundError
    | BadRequestError
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GetTransferResponse = GetTransferSuccess | GetTransferError

// Response for ListTransfers

export type ListTransfersSuccess = PaginatedTransferList

export type ListTransfersError = {
  error:
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ListTransfersResponse = ListTransfersSuccess | ListTransfersError

// Response for BroadcastTransaction

export type BroadcastTransactionSuccess = TransactionRequest

export type BroadcastTransactionError = {
  error:
    | BadRequestError
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type BroadcastTransactionResponse =
  | BroadcastTransactionSuccess
  | BroadcastTransactionError

// Response for GetTransaction

export type GetTransactionSuccess = TransactionRequest

export type GetTransactionError = {
  error:
    | EntityNotFoundError
    | BadRequestError
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GetTransactionResponse = GetTransactionSuccess | GetTransactionError

// Response for ListTransactions

export type ListTransactionsSuccess = PaginatedTransactionList

export type ListTransactionsError = {
  error:
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ListTransactionsResponse =
  | ListTransactionsSuccess
  | ListTransactionsError

// Response for GenerateSignature

export type GenerateSignatureSuccess = SignatureRequest

export type GenerateSignatureError = {
  error:
    | BadRequestError
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GenerateSignatureResponse =
  | GenerateSignatureSuccess
  | GenerateSignatureError

// Response for GetSignature

export type GetSignatureSuccess = SignatureRequest

export type GetSignatureError = {
  error:
    | EntityNotFoundError
    | BadRequestError
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GetSignatureResponse = GetSignatureSuccess | GetSignatureError

// Response for ListSignatures

export type ListSignaturesSuccess = PaginatedSignatureList

export type ListSignaturesError = {
  error:
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ListSignaturesResponse = ListSignaturesSuccess | ListSignaturesError
