import { BaseAuthApi, SignUserActionChallengeRequest, UserActionChallengeResponse } from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedKeysClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async createKeyInit(request: T.CreateKeyRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/keys', {
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

  async createKeyComplete(
    request: T.CreateKeyRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateKeyResponse> {
    const path = buildPathAndQuery('/keys', {
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

  async delegateKeyInit(request: T.DelegateKeyRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/keys/:keyId/delegate', {
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

  async delegateKeyComplete(
    request: T.DelegateKeyRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.DelegateKeyResponse> {
    const path = buildPathAndQuery('/keys/:keyId/delegate', {
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

  async deleteKeyInit(request: T.DeleteKeyRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/keys/:keyId', {
      path: request ?? {},
      query: {},
    })

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'DELETE',
        userActionHttpPath: path,
        userActionPayload: JSON.stringify({}),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async deleteKeyComplete(
    request: T.DeleteKeyRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.DeleteKeyResponse> {
    const path = buildPathAndQuery('/keys/:keyId', {
      path: request ?? {},
      query: {},
    })

    const { userAction } = await BaseAuthApi.signUserActionChallenge(
      signedChallenge,
      this.apiOptions
    )

    const response = await simpleFetch(path, {
      method: 'DELETE',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async deriveKeyInit(request: T.DeriveKeyRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/keys/:keyId/derive', {
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

  async deriveKeyComplete(
    request: T.DeriveKeyRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.DeriveKeyResponse> {
    const path = buildPathAndQuery('/keys/:keyId/derive', {
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

  async exportKeyInit(request: T.ExportKeyRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/keys/:keyId/export', {
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

  async exportKeyComplete(
    request: T.ExportKeyRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ExportKeyResponse> {
    const path = buildPathAndQuery('/keys/:keyId/export', {
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
    const path = buildPathAndQuery('/keys/:keyId/signatures', {
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
    const path = buildPathAndQuery('/keys/:keyId/signatures', {
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

  async getKey(request: T.GetKeyRequest): Promise<T.GetKeyResponse> {
    const path = buildPathAndQuery('/keys/:keyId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getSignature(request: T.GetSignatureRequest): Promise<T.GetSignatureResponse> {
    const path = buildPathAndQuery('/keys/:keyId/signatures/:signatureId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async importKeyInit(request: T.ImportKeyRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/keys/import', {
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

  async importKeyComplete(
    request: T.ImportKeyRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ImportKeyResponse> {
    const path = buildPathAndQuery('/keys/import', {
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

  async listKeys(request?: T.ListKeysRequest): Promise<T.ListKeysResponse> {
    const path = buildPathAndQuery('/keys', {
      path: request ?? {},
      query: request?.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listSignatures(request: T.ListSignaturesRequest): Promise<T.ListSignaturesResponse> {
    const path = buildPathAndQuery('/keys/:keyId/signatures', {
      path: request ?? {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async updateKeyInit(request: T.UpdateKeyRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/keys/:keyId', {
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

  async updateKeyComplete(
    request: T.UpdateKeyRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.UpdateKeyResponse> {
    const path = buildPathAndQuery('/keys/:keyId', {
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
