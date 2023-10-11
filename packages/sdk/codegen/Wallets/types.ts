import * as Foundations from '../datamodel/Foundations'
import * as Wallets from '../datamodel/Wallets'

export type CreateWalletRequest = {
  body: Wallets.CreateWalletBody
}

export type CreateWalletResponse = Wallets.Wallet

export type GetWalletRequest = {
  walletId: Foundations.EntityId
}

export type GetWalletResponse = Wallets.Wallet

export type GetWalletAssetsRequest = {
  walletId: Foundations.EntityId
}

export type GetWalletAssetsResponse = Wallets.WalletAssets

export type GetWalletNftsRequest = {
  walletId: Foundations.EntityId
}

export type GetWalletNftsResponse = Wallets.WalletNfts

export type ListWalletsRequest = {
  query?: {
    limit?: Foundations.IntegerPositiveStrict
    paginationToken?: string
  }
}

export type ListWalletsResponse = Wallets.PaginatedWalletList

export type GetWalletHistoryRequest = {
  walletId: Foundations.EntityId
  query?: {
    limit?: Foundations.IntegerPositiveStrict
    paginationToken?: Foundations.IsoDatetime
  }
}

export type GetWalletHistoryResponse = Wallets.PaginatedEventHistory

export type TransferAssetRequest = {
  walletId: Foundations.EntityId
  body: Wallets.TransferAssetBody
}

export type TransferAssetResponse = Wallets.TransferRequest

export type GetTransferRequest = {
  walletId: Foundations.EntityId
  transferId: Foundations.EntityId
}

export type GetTransferResponse = Wallets.TransferRequest

export type ListTransfersRequest = {
  walletId: Foundations.EntityId
  query?: {
    limit?: Foundations.IntegerPositiveStrict
    paginationToken?: string
  }
}

export type ListTransfersResponse = Wallets.PaginatedTransferList

export type BroadcastTransactionRequest = {
  walletId: Foundations.EntityId
  body: Wallets.BroadcastTransactionBody
}

export type BroadcastTransactionResponse = Wallets.TransactionRequest

export type GetTransactionRequest = {
  walletId: Foundations.EntityId
  transactionId: Foundations.EntityId
}

export type GetTransactionResponse = Wallets.TransactionRequest

export type ListTransactionsRequest = {
  walletId: Foundations.EntityId
  query?: {
    limit?: Foundations.IntegerPositiveStrict
    paginationToken?: string
  }
}

export type ListTransactionsResponse = Wallets.PaginatedTransactionList

export type GenerateSignatureRequest = {
  walletId: Foundations.EntityId
  body: Wallets.GenerateSignatureBody
}

export type GenerateSignatureResponse = Wallets.SignatureRequest

export type GetSignatureRequest = {
  walletId: Foundations.EntityId
  signatureId: Foundations.EntityId
}

export type GetSignatureResponse = Wallets.SignatureRequest

export type ListSignaturesRequest = {
  walletId: Foundations.EntityId
  query?: {
    limit?: Foundations.IntegerPositiveStrict
    paginationToken?: string
  }
}

export type ListSignaturesResponse = Wallets.PaginatedSignatureList

export type ImportWalletRequest = {
  body: Wallets.ImportWalletBody
}

export type ImportWalletResponse = Wallets.Wallet
