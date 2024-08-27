import { fetch as _fetch } from 'cross-fetch'

import { generateNonce } from './nonce'
import { DfnsError, PolicyPendingError } from '../dfnsError'
import { DfnsBaseApiOptions } from '../types/generic'

const DEFAULT_DFNS_BASE_URL = 'https://api.dfns.io'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type FetchOptions<T> = {
  method: HttpMethod
  headers?: Record<string, string>
  body?: string | unknown
  apiOptions: T
}

export type Fetch<T> = (resource: string | URL, options: FetchOptions<T>) => Promise<Response>

export const fullUrl = <T extends DfnsBaseApiOptions>(fetch: Fetch<T>): Fetch<T> => {
  return async (resource, options) => {
    const baseUrl = options.apiOptions.baseUrl || DEFAULT_DFNS_BASE_URL
    resource = new URL(resource, baseUrl)
    return fetch(resource, options)
  }
}

export const jsonSerializer = <T>(fetch: Fetch<T>): Fetch<T> => {
  return async (resource, options) => {
    if (options.body) {
      options.body = JSON.stringify(options.body)

      options.headers = {
        'content-type': 'application/json',
        ...(options.headers ?? {}),
      }
    }

    return fetch(resource, options)
  }
}

export const errorHandler = <T>(fetch: Fetch<T>): Fetch<T> => {
  return async (resource, options) => {
    const response = await fetch(resource, options)

    if (response.ok) {
      return response
    } else {
      const body = await response.json()
      const message = body?.error?.message ?? body?.message
      throw new DfnsError(response.status, message, {
        url: response.url,
        headers: response.headers,
        body,
      })
    }
  }
}

// raise a 202 response by policy execution as error
export const catchPolicyPending = <T>(fetch: Fetch<T>): Fetch<T> => {
  return async (resource, options) => {
    const response = await fetch(resource, options)

    if (response.status === PolicyPendingError.HTTP_ACCEPTED) {
      throw new PolicyPendingError(await response.json())
    } else {
      return response
    }
  }
}

export const dfnsAuth = <T extends DfnsBaseApiOptions>(fetch: Fetch<T>): Fetch<T> => {
  return async (resource, options) => {
    const { appId, appSecret, authToken } = options.apiOptions

    const authorization: Record<string, string> = authToken
      ? {
        authorization: `Bearer ${authToken}`,
      }
      : {}

    const dfnsAppSecret: Record<string, string> = appSecret
      ? {
        'x-dfns-appsecret': appSecret,
      }
      : {}

    options.headers = {
      'x-dfns-appid': appId,
      'x-dfns-nonce': generateNonce(),
      ...dfnsAppSecret,
      ...authorization,
      ...(options.headers ?? {}),
    }

    return fetch(resource, options)
  }
}

export const simpleFetch = fullUrl(
  jsonSerializer(dfnsAuth(catchPolicyPending(errorHandler(<Fetch<DfnsBaseApiOptions>>_fetch))))
)
