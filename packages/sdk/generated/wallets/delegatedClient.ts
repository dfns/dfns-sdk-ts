import { BaseAuthApi, SignUserActionChallengeRequest, UserActionChallengeResponse } from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedWalletsClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async broadcastTransactionInit(request: T.BroadcastTransactionRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/transactions', {
      path: request ?? {},
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

  async broadcastTransactionComplete(
    request: T.BroadcastTransactionRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.BroadcastTransactionResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/transactions', {
      path: request ?? {},
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

  async createWalletInit(request: T.CreateWalletRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/wallets', {
      path: request ?? {},
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

  async createWalletComplete(
    request: T.CreateWalletRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateWalletResponse> {
    const path = buildPathAndQuery('/wallets', {
      path: request ?? {},
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

  async delegateWalletInit(request: T.DelegateWalletRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/delegate', {
      path: request ?? {},
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

  async delegateWalletComplete(
    request: T.DelegateWalletRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.DelegateWalletResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/delegate', {
      path: request ?? {},
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

  async exportWalletInit(request: T.ExportWalletRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/export', {
      path: request ?? {},
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

  async exportWalletComplete(
    request: T.ExportWalletRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ExportWalletResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/export', {
      path: request ?? {},
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

  async generateSignatureInit(request: T.GenerateSignatureRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/signatures', {
      path: request ?? {},
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

  async generateSignatureComplete(
    request: T.GenerateSignatureRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.GenerateSignatureResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/signatures', {
      path: request ?? {},
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

  async importWalletInit(request: T.ImportWalletRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/wallets/import', {
      path: request ?? {},
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

  async importWalletComplete(
    request: T.ImportWalletRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ImportWalletResponse> {
    const path = buildPathAndQuery('/wallets/import', {
      path: request ?? {},
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

  async tagWalletInit(request: T.TagWalletRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/tags', {
      path: request ?? {},
      query: {},
    })

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'PUT',
        userActionHttpPath: path,
        userActionPayload: JSON.stringify(request.body),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async tagWalletComplete(
    request: T.TagWalletRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.TagWalletResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/tags', {
      path: request ?? {},
      query: {},
    })

    const { userAction } = await BaseAuthApi.signUserActionChallenge(
      signedChallenge,
      this.apiOptions
    )

    const response = await simpleFetch(path, {
      method: 'PUT',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async transferAssetInit(request: T.TransferAssetRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/transfers', {
      path: request ?? {},
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

  async transferAssetComplete(
    request: T.TransferAssetRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.TransferAssetResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/transfers', {
      path: request ?? {},
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

  async untagWalletInit(request: T.UntagWalletRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/tags', {
      path: request ?? {},
      query: {},
    })

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'DELETE',
        userActionHttpPath: path,
        userActionPayload: JSON.stringify(request.body),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async untagWalletComplete(
    request: T.UntagWalletRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.UntagWalletResponse> {
    const path = buildPathAndQuery('/wallets/:walletId/tags', {
      path: request ?? {},
      query: {},
    })

    const { userAction } = await BaseAuthApi.signUserActionChallenge(
      signedChallenge,
      this.apiOptions
    )

    const response = await simpleFetch(path, {
      method: 'DELETE',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async updateWalletInit(request: T.UpdateWalletRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/wallets/:walletId', {
      path: request ?? {},
      query: {},
    })

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'PUT',
        userActionHttpPath: path,
        userActionPayload: JSON.stringify(request.body),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async updateWalletComplete(
    request: T.UpdateWalletRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.UpdateWalletResponse> {
    const path = buildPathAndQuery('/wallets/:walletId', {
      path: request ?? {},
      query: {},
    })

    const { userAction } = await BaseAuthApi.signUserActionChallenge(
      signedChallenge,
      this.apiOptions
    )

    const response = await simpleFetch(path, {
      method: 'PUT',
      body: request.body,
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
