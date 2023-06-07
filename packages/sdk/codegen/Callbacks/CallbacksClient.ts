import { DfnsApiOptions } from '../../dfnsApiClient'
import { Fetch, userActionFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class CallbacksClient {
  private fetch: Fetch

  constructor(private apiOptions: DfnsApiOptions) {
    this.fetch = userActionFetch
  }

  async createCallbackSubscription(
    request: T.CreateCallbackSubscriptionRequest
  ): Promise<T.CreateCallbackSubscriptionResponse> {
    const path = buildPathAndQuery('/callback-subscriptions', {
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

    const response = await this.fetch(path, {
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

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async archiveCallbackSubscription(
    request: T.ArchiveCallbackSubscriptionRequest
  ): Promise<T.ArchiveCallbackSubscriptionResponse> {
    const path = buildPathAndQuery(
      '/callback-subscriptions/:callbackSubscriptionId',
      {
        path: { callbackSubscriptionId: request.callbackSubscriptionId },
        query: {},
      }
    )

    const response = await this.fetch(path, {
      method: 'DELETE',
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

    const response = await this.fetch(path, {
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

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
