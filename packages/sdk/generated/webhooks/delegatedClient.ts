import { BaseAuthApi, SignUserActionChallengeRequest, UserActionChallengeResponse } from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedWebhooksClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async createWebhookInit(request: T.CreateWebhookRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/webhooks', {
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

  async createWebhookComplete(
    request: T.CreateWebhookRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.CreateWebhookResponse> {
    const path = buildPathAndQuery('/webhooks', {
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

  async deleteWebhookInit(request: T.DeleteWebhookRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/webhooks/:webhookId', {
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

  async deleteWebhookComplete(
    request: T.DeleteWebhookRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.DeleteWebhookResponse> {
    const path = buildPathAndQuery('/webhooks/:webhookId', {
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

  async getWebhook(request: T.GetWebhookRequest): Promise<T.GetWebhookResponse> {
    const path = buildPathAndQuery('/webhooks/:webhookId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async getWebhookEvent(request: T.GetWebhookEventRequest): Promise<T.GetWebhookEventResponse> {
    const path = buildPathAndQuery('/webhooks/:webhookId/events/:webhookEventId', {
      path: request ?? {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listWebhookEvents(request: T.ListWebhookEventsRequest): Promise<T.ListWebhookEventsResponse> {
    const path = buildPathAndQuery('/webhooks/:webhookId/events', {
      path: request ?? {},
      query: request.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listWebhooks(request?: T.ListWebhooksRequest): Promise<T.ListWebhooksResponse> {
    const path = buildPathAndQuery('/webhooks', {
      path: request ?? {},
      query: request?.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async pingWebhookInit(request: T.PingWebhookRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/webhooks/:webhookId/ping', {
      path: request ?? {},
      query: {},
    })

    const challenge = await BaseAuthApi.createUserActionChallenge(
      {
        userActionHttpMethod: 'POST',
        userActionHttpPath: path,
        userActionPayload: JSON.stringify({}),
        userActionServerKind: 'Api',
      },
      this.apiOptions
    )

    return challenge
  }

  async pingWebhookComplete(
    request: T.PingWebhookRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.PingWebhookResponse> {
    const path = buildPathAndQuery('/webhooks/:webhookId/ping', {
      path: request ?? {},
      query: {},
    })

    const { userAction } = await BaseAuthApi.signUserActionChallenge(
      signedChallenge,
      this.apiOptions
    )

    const response = await simpleFetch(path, {
      method: 'POST',
      body: {},
      headers: { 'x-dfns-useraction': userAction },
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async updateWebhookInit(request: T.UpdateWebhookRequest): Promise<UserActionChallengeResponse> {
    const path = buildPathAndQuery('/webhooks/:webhookId', {
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

  async updateWebhookComplete(
    request: T.UpdateWebhookRequest,
    signedChallenge: SignUserActionChallengeRequest
  ): Promise<T.UpdateWebhookResponse> {
    const path = buildPathAndQuery('/webhooks/:webhookId', {
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
