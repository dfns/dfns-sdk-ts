import { DfnsApiOptions } from '../../dfnsApiClient'
import { Fetch, userActionFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class PublicKeysClient {
  private fetch: Fetch

  constructor(private apiOptions: DfnsApiOptions) {
    this.fetch = userActionFetch
  }

  async getPublicKeyById(
    request: T.GetPublicKeyByIdRequest
  ): Promise<T.GetPublicKeyByIdResponse> {
    const path = buildPathAndQuery('/public-keys/:publicKeyId', {
      path: { publicKeyId: request.publicKeyId },
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createPublicKey(
    request: T.CreatePublicKeyRequest
  ): Promise<T.CreatePublicKeyResponse> {
    const path = buildPathAndQuery('/public-keys', {
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

  async listPublicKeys(): Promise<T.ListPublicKeysResponse> {
    const path = buildPathAndQuery('/public-keys', {
      path: {},
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getAddressForNetwork(
    request: T.GetAddressForNetworkRequest
  ): Promise<T.GetAddressForNetworkResponse> {
    const path = buildPathAndQuery('/public-keys/:publicKeyId/address', {
      path: { publicKeyId: request.publicKeyId },
      query: request.query ?? {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getSignatureById(
    request: T.GetSignatureByIdRequest
  ): Promise<T.GetSignatureByIdResponse> {
    const path = buildPathAndQuery(
      '/public-keys/:publicKeyId/signatures/:signatureId',
      {
        path: {
          publicKeyId: request.publicKeyId,
          signatureId: request.signatureId,
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

  async createSignature(
    request: T.CreateSignatureRequest
  ): Promise<T.CreateSignatureResponse> {
    const path = buildPathAndQuery('/public-keys/:publicKeyId/signatures', {
      path: { publicKeyId: request.publicKeyId },
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async startWalletConnectSession(
    request: T.StartWalletConnectSessionRequest
  ): Promise<T.StartWalletConnectSessionResponse> {
    const path = buildPathAndQuery(
      '/public-keys/:publicKeyId/walletconnect-session',
      {
        path: { publicKeyId: request.publicKeyId },
        query: {},
      }
    )

    const response = await this.fetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listTransactions(
    request: T.ListTransactionsRequest
  ): Promise<T.ListTransactionsResponse> {
    const path = buildPathAndQuery('/public-keys/:publicKeyId/transactions', {
      path: { publicKeyId: request.publicKeyId },
      query: request.query ?? {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createTransaction(
    request: T.CreateTransactionRequest
  ): Promise<T.CreateTransactionResponse> {
    const path = buildPathAndQuery('/public-keys/transactions', {
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

  async getTransactionById(
    request: T.GetTransactionByIdRequest
  ): Promise<T.GetTransactionByIdResponse> {
    const path = buildPathAndQuery('/public-keys/transactions/:transactionId', {
      path: { transactionId: request.transactionId },
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
