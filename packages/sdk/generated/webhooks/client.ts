import { DfnsApiClientOptions } from '../../dfnsApiClient'
import { simpleFetch, userActionFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class WebhooksClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  async createWebhook(request: T.CreateWebhookRequest): Promise<T.CreateWebhookResponse> {
    const path = buildPathAndQuery('/webhooks', {
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

  async deleteWebhook(request: T.DeleteWebhookRequest): Promise<T.DeleteWebhookResponse> {
    const path = buildPathAndQuery('/webhooks/:webhookId', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'DELETE',
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

  async pingWebhook(request: T.PingWebhookRequest): Promise<T.PingWebhookResponse> {
    const path = buildPathAndQuery('/webhooks/:webhookId/ping', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'POST',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async updateWebhook(request: T.UpdateWebhookRequest): Promise<T.UpdateWebhookResponse> {
    const path = buildPathAndQuery('/webhooks/:webhookId', {
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
