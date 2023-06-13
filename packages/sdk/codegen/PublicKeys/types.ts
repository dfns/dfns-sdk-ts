import * as PublicKeys from '../datamodel/PublicKeys'

export type GetPublicKeyByIdRequest = {
  publicKeyId: string
}

export type GetPublicKeyByIdResponse = PublicKeys.GetPublicKeyResponse

export type CreatePublicKeyRequest = {
  body: PublicKeys.CreatePublicKeyInput
}

export type CreatePublicKeyResponse = PublicKeys.PublicKeyRecord

export type ListPublicKeysResponse = {
  items: PublicKeys.GetPublicKeyResponse[]
}

export type GetAddressForNetworkRequest = {
  publicKeyId: string
  query?: { network: string }
}

export type GetAddressForNetworkResponse =
  PublicKeys.GetPublicKeyAddressResponse

export type GetSignatureByIdRequest = {
  publicKeyId: string
  signatureId: string
}

export type GetSignatureByIdResponse = PublicKeys.Signature

export type CreateSignatureRequest = {
  publicKeyId: string
  body: PublicKeys.CreateSignatureInput
}

export type CreateSignatureResponse = PublicKeys.SignatureResponse

export type StartWalletConnectSessionRequest = {
  publicKeyId: string
  body: PublicKeys.StartWalletConnectSessionInput
}

export type StartWalletConnectSessionResponse =
  PublicKeys.StartWalletConnectSessionOutput

export type ListTransactionsRequest = {
  publicKeyId: string
  query?: { assets: string }
}

export type ListTransactionsResponse = {
  items: PublicKeys.BroadcastedTransaction[]
}

export type CreateTransactionRequest = {
  body: PublicKeys.CreateWalletTxInput
}

export type CreateTransactionResponse = PublicKeys.BroadcastedTransaction

export type GetTransactionByIdRequest = {
  transactionId: string
}

export type GetTransactionByIdResponse = PublicKeys.BroadcastedTransaction
