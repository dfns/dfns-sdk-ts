import { DfnsApiClientOptions } from '../../dfnsApiClient'
import { simpleFetch, userActionFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class WalletsClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  async broadcastTransaction(request: T.BroadcastTransactionRequest): Promise<T.BroadcastTransactionResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/transactions', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createWallet(request: T.CreateWalletRequest): Promise<T.CreateWalletResponse> {
    const path = buildPathAndQuery('/wallets', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async delegateWallet(request: T.DelegateWalletRequest): Promise<T.DelegateWalletResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/delegate', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async exportWallet(request: T.ExportWalletRequest): Promise<T.ExportWalletResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/export', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async generateSignature(request: T.GenerateSignatureRequest): Promise<T.GenerateSignatureResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/signatures', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getSignature(request: T.GetSignatureRequest): Promise<T.GetSignatureResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/signatures/:signatureId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getTransaction(request: T.GetTransactionRequest): Promise<T.GetTransactionResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/transactions/:transactionId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getTransfer(request: T.GetTransferRequest): Promise<T.GetTransferResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/transfers/:transferId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getWallet(request: T.GetWalletRequest): Promise<T.GetWalletResponse> {
    const path = buildPathAndQuery('/wallets/:walletId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getWalletAssets(request: T.GetWalletAssetsRequest): Promise<T.GetWalletAssetsResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/assets', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getWalletHistory(request: T.GetWalletHistoryRequest): Promise<T.GetWalletHistoryResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/history', {
      path: request ?? {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getWalletNfts(request: T.GetWalletNftsRequest): Promise<T.GetWalletNftsResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/nfts', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async importWallet(request: T.ImportWalletRequest): Promise<T.ImportWalletResponse> {
    const path = buildPathAndQuery('/wallets/import', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listSignatures(request: T.ListSignaturesRequest): Promise<T.ListSignaturesResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/signatures', {
      path: request ?? {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listTransactions(request: T.ListTransactionsRequest): Promise<T.ListTransactionsResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/transactions', {
      path: request ?? {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listTransfers(request: T.ListTransfersRequest): Promise<T.ListTransfersResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/transfers', {
      path: request ?? {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listWallets(request?: T.ListWalletsRequest): Promise<T.ListWalletsResponse> {
    const path = buildPathAndQuery('/wallets', {
      path: request ?? {},
      query: request?.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async transferAsset(request: T.TransferAssetRequest): Promise<T.TransferAssetResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/transfers', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async updateWallet(request: T.UpdateWalletRequest): Promise<T.UpdateWalletResponse> {
    const path = buildPathAndQuery('/wallets/:walletId', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'PUT',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
