/* eslint @typescript-eslint/no-unused-vars: 0 */

import { DfnsApiClientOptions } from '../../types/generic'
import { simpleFetch } from '../../utils/fetch'
import { userActionFetch } from '../../utils/userActionFetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class KeysClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  async createKey(request: T.CreateKeyRequest): Promise<T.CreateKeyResponse> {
    const path = buildPathAndQuery('/keys', {
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

  async delegateKey(request: T.DelegateKeyRequest): Promise<T.DelegateKeyResponse> {
    const path = buildPathAndQuery('/keys/:keyId/delegate', {
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

  async deleteKey(request: T.DeleteKeyRequest): Promise<T.DeleteKeyResponse> {
    const path = buildPathAndQuery('/keys/:keyId', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'DELETE',
      body: {},
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async deriveKey(request: T.DeriveKeyRequest): Promise<T.DeriveKeyResponse> {
    const path = buildPathAndQuery('/keys/:keyId/derive', {
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

  async exportKey(request: T.ExportKeyRequest): Promise<T.ExportKeyResponse> {
    const path = buildPathAndQuery('/keys/:keyId/export', {
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
    const path = buildPathAndQuery('/keys/:keyId/signatures', {
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

  async importKey(request: T.ImportKeyRequest): Promise<T.ImportKeyResponse> {
    const path = buildPathAndQuery('/keys/import', {
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

  async updateKey(request: T.UpdateKeyRequest): Promise<T.UpdateKeyResponse> {
    const path = buildPathAndQuery('/keys/:keyId', {
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
