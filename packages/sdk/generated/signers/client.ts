/* eslint @typescript-eslint/no-unused-vars: 0 */

import { DfnsApiClientOptions } from '../../types/generic'
import { simpleFetch } from '../../utils/fetch'
import { userActionFetch } from '../../utils/userActionFetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class SignersClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  async createAddMacUserInput(request: T.CreateAddMacUserInputRequest): Promise<T.CreateAddMacUserInputResponse> {
    const path = buildPathAndQuery('/key-stores/:storeId/add-mac-user/input', {
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

  async createCloneInput(request: T.CreateCloneInputRequest): Promise<T.CreateCloneInputResponse> {
    const path = buildPathAndQuery('/key-stores/:storeId/clone/input', {
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

  async createGenesisInput(request: T.CreateGenesisInputRequest): Promise<T.CreateGenesisInputResponse> {
    const path = buildPathAndQuery('/key-stores/:storeId/genesis/input', {
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

  async createKeyHarvestInput(request: T.CreateKeyHarvestInputRequest): Promise<T.CreateKeyHarvestInputResponse> {
    const path = buildPathAndQuery('/key-stores/:storeId/key-harvest/input', {
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

  async createOnchainSignInput(request: T.CreateOnchainSignInputRequest): Promise<T.CreateOnchainSignInputResponse> {
    const path = buildPathAndQuery('/key-stores/:storeId/onchain-sign/input', {
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

  async createProofOfControlInput(request: T.CreateProofOfControlInputRequest): Promise<T.CreateProofOfControlInputResponse> {
    const path = buildPathAndQuery('/key-stores/:storeId/proof-of-control/input', {
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

  async listKeyStores(): Promise<T.ListKeyStoresResponse> {
    const path = buildPathAndQuery('/key-stores', {
      path: {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listSigners(): Promise<T.ListSignersResponse> {
    const path = buildPathAndQuery('/signers', {
      path: {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async submitAddMacUserOutput(
    request: T.SubmitAddMacUserOutputRequest,
    file: { bytes: Uint8Array; name?: string }
  ): Promise<T.SubmitAddMacUserOutputResponse> {
    const path = buildPathAndQuery('/key-stores/:storeId/add-mac-user/output', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'POST',
      body: request.body,
      file,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async submitCloneOutput(
    request: T.SubmitCloneOutputRequest,
    file: { bytes: Uint8Array; name?: string }
  ): Promise<T.SubmitCloneOutputResponse> {
    const path = buildPathAndQuery('/key-stores/:storeId/clone/output', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'POST',
      body: request.body,
      file,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async submitGenesisOutput(
    request: T.SubmitGenesisOutputRequest,
    file: { bytes: Uint8Array; name?: string }
  ): Promise<T.SubmitGenesisOutputResponse> {
    const path = buildPathAndQuery('/key-stores/:storeId/genesis/output', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'POST',
      body: request.body,
      file,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async submitKeyHarvestOutput(
    request: T.SubmitKeyHarvestOutputRequest,
    file: { bytes: Uint8Array; name?: string }
  ): Promise<T.SubmitKeyHarvestOutputResponse> {
    const path = buildPathAndQuery('/key-stores/:storeId/key-harvest/output', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'POST',
      body: request.body,
      file,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async submitOnchainSignOutput(
    request: T.SubmitOnchainSignOutputRequest,
    file: { bytes: Uint8Array; name?: string }
  ): Promise<T.SubmitOnchainSignOutputResponse> {
    const path = buildPathAndQuery('/key-stores/:storeId/onchain-sign/output', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'POST',
      body: request.body,
      file,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async submitProofOfControlOutput(
    request: T.SubmitProofOfControlOutputRequest,
    file: { bytes: Uint8Array; name?: string }
  ): Promise<T.SubmitProofOfControlOutputResponse> {
    const path = buildPathAndQuery('/key-stores/:storeId/proof-of-control/output', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'POST',
      body: request.body,
      file,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
