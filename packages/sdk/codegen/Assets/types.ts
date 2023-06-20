import * as Assets from '../datamodel/Assets'

export type InitiatePaymentRequest = {
  assetAccountId: string
  body: Assets.CreatePaymentInput
}

export type InitiatePaymentResponse = Assets.Payment

export type GetPaymentByIdRequest = {
  assetAccountId: string
  paymentId: string
}

export type GetPaymentByIdResponse = Assets.Payment

export type ListPaymentsRequest = {
  assetAccountId: string
}

export type ListPaymentsResponse = { items: Assets.Payment[] }

export type CreateAssetAccountRequest = {
  body: Assets.CreateAssetAccountInput
}

export type CreateAssetAccountResponse = Assets.AssetAccount

export type GetAssetAccountByIdRequest = {
  assetAccountId: string
}

export type GetAssetAccountByIdResponse = Assets.AssetAccount

export type ListAssetAccountsRequest = {
  query?: { status?: Assets.AssetAccountStatus }
}

export type ListAssetAccountsResponse = { items: Assets.AssetAccount[] }

export type ArchiveAssetAccountRequest = {
  assetAccountId: string
}

export type ArchiveAssetAccountResponse = Assets.AssetAccount

export type GetAssetAccountBalanceByIdRequest = {
  assetAccountId: string
}

export type GetAssetAccountBalanceByIdResponse = Assets.AssetAccountBalance
