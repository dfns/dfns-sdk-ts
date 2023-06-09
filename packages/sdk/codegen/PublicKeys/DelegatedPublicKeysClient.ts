import {
  BaseAuthApi,
  SignUserActionChallengeRequest,
  UserActionChallengeResponse,
} from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedPublicKeysClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async getPublicKeyById(
    request: T.GetPublicKeyByIdRequest
  ): Promise<T.GetPublicKeyByIdResponse> {
    const path = buildPathAndQuery('/public-keys/:publicKeyId', {
      path: { publicKeyId: request.publicKeyId },
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createPublicKeyInit(
    request: T.CreatePublicKeyRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/public-keys', {
      path: {},
      query: {},
    })

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath: path,
        userActionPayload: JSON.stringify(request.body),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async createPublicKeyComplete(
    request: T.CreatePublicKeyRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreatePublicKeyResponse> {
    const path = buildPathAndQuery('/public-keys', {
      path: {},
      query: {},
    })

    const { userAction } = await BaseAuthApi.signUserActionChallenge(
      signedChallenge,
      this.apiOptions
    )

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listPublicKeys(): Promise<T.ListPublicKeysResponse> {
    const path = buildPathAndQuery('/public-keys', {
      path: {},
      query: {},
    })

    const response = await simpleFetch(path, {
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

    const response = await simpleFetch(path, {
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

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createSignatureInit(
    request: T.CreateSignatureRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/public-keys/:publicKeyId/signatures', {
      path: { publicKeyId: request.publicKeyId },
      query: {},
    })

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath: path,
        userActionPayload: JSON.stringify(request.body),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async createSignatureComplete(
    request: T.CreateSignatureRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateSignatureResponse> {
    const path = buildPathAndQuery('/public-keys/:publicKeyId/signatures', {
      path: { publicKeyId: request.publicKeyId },
      query: {},
    })

    const { userAction } = await BaseAuthApi.signUserActionChallenge(
      signedChallenge,
      this.apiOptions
    )

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async startWalletConnectSessionInit(
    request: T.StartWalletConnectSessionRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery(
      '/public-keys/:publicKeyId/walletconnect-session',
      {
        path: { publicKeyId: request.publicKeyId },
        query: {},
      }
    )

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath: path,
        userActionPayload: JSON.stringify(request.body),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async startWalletConnectSessionComplete(
    request: T.StartWalletConnectSessionRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.StartWalletConnectSessionResponse> {
    const path = buildPathAndQuery(
      '/public-keys/:publicKeyId/walletconnect-session',
      {
        path: { publicKeyId: request.publicKeyId },
        query: {},
      }
    )

    const { userAction } = await BaseAuthApi.signUserActionChallenge(
      signedChallenge,
      this.apiOptions
    )

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
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

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createTransactionInit(
    request: T.CreateTransactionRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/public-keys/transactions', {
      path: {},
      query: {},
    })

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath: path,
        userActionPayload: JSON.stringify(request.body),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async createTransactionComplete(
    request: T.CreateTransactionRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateTransactionResponse> {
    const path = buildPathAndQuery('/public-keys/transactions', {
      path: {},
      query: {},
    })

    const { userAction } = await BaseAuthApi.signUserActionChallenge(
      signedChallenge,
      this.apiOptions
    )

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
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

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
