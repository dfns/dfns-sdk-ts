import { BaseAuthApi, SignUserActionChallengeRequest, UserActionChallengeResponse } from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedSignersClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async createAddMacUserInputInit(request: T.CreateAddMacUserInputRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/key-stores/:storeId/add-mac-user/input', {
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

  async createAddMacUserInputComplete(
    request: T.CreateAddMacUserInputRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateAddMacUserInputResponse> {
    const path = buildPathAndQuery('/key-stores/:storeId/add-mac-user/input', {
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

  async createCloneInputInit(request: T.CreateCloneInputRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/key-stores/:storeId/clone/input', {
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

  async createCloneInputComplete(
    request: T.CreateCloneInputRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateCloneInputResponse> {
    const path = buildPathAndQuery('/key-stores/:storeId/clone/input', {
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

  async createGenesisInputInit(request: T.CreateGenesisInputRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/key-stores/:storeId/genesis/input', {
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

  async createGenesisInputComplete(
    request: T.CreateGenesisInputRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateGenesisInputResponse> {
    const path = buildPathAndQuery('/key-stores/:storeId/genesis/input', {
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

  async createOnchainSignInputInit(request: T.CreateOnchainSignInputRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/key-stores/:storeId/onchain-sign/input', {
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

  async createOnchainSignInputComplete(
    request: T.CreateOnchainSignInputRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateOnchainSignInputResponse> {
    const path = buildPathAndQuery('/key-stores/:storeId/onchain-sign/input', {
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

  async createProofOfControlInputInit(request: T.CreateProofOfControlInputRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/key-stores/:storeId/proof-of-control/input', {
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

  async createProofOfControlInputComplete(
    request: T.CreateProofOfControlInputRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateProofOfControlInputResponse> {
    const path = buildPathAndQuery('/key-stores/:storeId/proof-of-control/input', {
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
}
