import { DfnsApiOptions } from '../../dfnsApiClient'
import { Fetch, userActionFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class WalletsClient {
  private fetch: Fetch

  constructor(private apiOptions: DfnsApiOptions) {
    this.fetch = userActionFetch
  }

  async createWallet(
    request: T.CreateWalletRequest
  ): Promise<T.CreateWalletResponse> {
    const path = buildPathAndQuery('/wallets', {
      path: {},
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getWallet(request: T.GetWalletRequest): Promise<T.GetWalletResponse> {
    const path = buildPathAndQuery('/wallets/:walletId', {
      path: { walletId: request.walletId },
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getWalletAssets(
    request: T.GetWalletAssetsRequest
  ): Promise<T.GetWalletAssetsResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/assets', {
      path: { walletId: request.walletId },
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getWalletNfts(
    request: T.GetWalletNftsRequest
  ): Promise<T.GetWalletNftsResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/nfts', {
      path: { walletId: request.walletId },
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listWallets(
    request: T.ListWalletsRequest
  ): Promise<T.ListWalletsResponse> {
    const path = buildPathAndQuery('/wallets', {
      path: {},
      query: request.query ?? {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getWalletHistory(
    request: T.GetWalletHistoryRequest
  ): Promise<T.GetWalletHistoryResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/history', {
      path: { walletId: request.walletId },
      query: request.query ?? {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async transferAsset(
    request: T.TransferAssetRequest
  ): Promise<T.TransferAssetResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/transfers', {
      path: { walletId: request.walletId },
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getTransfer(
    request: T.GetTransferRequest
  ): Promise<T.GetTransferResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/transfers/:transferId', {
      path: { walletId: request.walletId, transferId: request.transferId },
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listTransfers(
    request: T.ListTransfersRequest
  ): Promise<T.ListTransfersResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/transfers', {
      path: { walletId: request.walletId },
      query: request.query ?? {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async broadcastTransaction(
    request: T.BroadcastTransactionRequest
  ): Promise<T.BroadcastTransactionResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/transactions', {
      path: { walletId: request.walletId },
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getTransaction(
    request: T.GetTransactionRequest
  ): Promise<T.GetTransactionResponse> {
    const path = buildPathAndQuery(
      '/wallets/:walletId/transactions/:transactionId',
      {
        path: {
          walletId: request.walletId,
          transactionId: request.transactionId,
        },
        query: {},
      }
    )

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listTransactions(
    request: T.ListTransactionsRequest
  ): Promise<T.ListTransactionsResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/transactions', {
      path: { walletId: request.walletId },
      query: request.query ?? {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async generateSignature(
    request: T.GenerateSignatureRequest
  ): Promise<T.GenerateSignatureResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/signatures', {
      path: { walletId: request.walletId },
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getSignature(
    request: T.GetSignatureRequest
  ): Promise<T.GetSignatureResponse> {
    const path = buildPathAndQuery(
      '/wallets/:walletId/signatures/:signatureId',
      {
        path: { walletId: request.walletId, signatureId: request.signatureId },
        query: {},
      }
    )

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listSignatures(
    request: T.ListSignaturesRequest
  ): Promise<T.ListSignaturesResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/signatures', {
      path: { walletId: request.walletId },
      query: request.query ?? {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
