import {
  BaseAuthApi,
  SignUserActionChallengeRequest,
  UserActionChallengeResponse,
} from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedCallbacksClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async createCallbackSubscriptionInit(
    request: T.CreateCallbackSubscriptionRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/callback-subscriptions', {
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

  async createCallbackSubscriptionComplete(
    request: T.CreateCallbackSubscriptionRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateCallbackSubscriptionResponse> {
    const path = buildPathAndQuery('/callback-subscriptions', {
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

  async getCallbackSubscriptionById(
    request: T.GetCallbackSubscriptionByIdRequest
  ): Promise<T.GetCallbackSubscriptionByIdResponse> {
    const path = buildPathAndQuery(
      '/callback-subscriptions/:callbackSubscriptionId',
      {
        path: { callbackSubscriptionId: request.callbackSubscriptionId },
        query: {},
      }
    )

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listCallbackSubscriptions(): Promise<T.ListCallbackSubscriptionsResponse> {
    const path = buildPathAndQuery('/callback-subscriptions', {
      path: {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async archiveCallbackSubscriptionInit(
    request: T.ArchiveCallbackSubscriptionRequest
  ): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery(
      '/callback-subscriptions/:callbackSubscriptionId',
      {
        path: { callbackSubscriptionId: request.callbackSubscriptionId },
        query: {},
      }
    )

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

  async archiveCallbackSubscriptionComplete(
    request: T.ArchiveCallbackSubscriptionRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.ArchiveCallbackSubscriptionResponse> {
    const path = buildPathAndQuery(
      '/callback-subscriptions/:callbackSubscriptionId',
      {
        path: { callbackSubscriptionId: request.callbackSubscriptionId },
        query: {},
      }
    )

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

  async getCallbackEventById(
    request: T.GetCallbackEventByIdRequest
  ): Promise<T.GetCallbackEventByIdResponse> {
    const path = buildPathAndQuery('/callback-events/:callbackEventId', {
      path: { callbackEventId: request.callbackEventId },
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listCallbackEvents(): Promise<T.ListCallbackEventsResponse> {
    const path = buildPathAndQuery('/callback-events', {
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
