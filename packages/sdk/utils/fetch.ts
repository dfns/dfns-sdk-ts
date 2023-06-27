import { Response, fetch as _fetch } from 'cross-fetch'

import { DfnsError } from '../dfnsError'
import { BaseAuthApi, DfnsBaseApiOptions } from '../baseAuthApi'
import { generateNonce } from './nonce'
import { DfnsApiClientOptions } from '../dfnsApiClient'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type FetchOptions<T> = {
  method: HttpMethod
  headers?: Record<string, string>
  body?: string | unknown
  apiOptions: T
}

export type Fetch<T> = (resource: string | URL, options: FetchOptions<T>) => Promise<Response>

const fullUrl = <T extends DfnsBaseApiOptions>(fetch: Fetch<T>): Fetch<T> => {
  return async (resource, options) => {
    const { baseUrl } = options.apiOptions
    resource = new URL(resource, baseUrl)
    return fetch(resource, options)
  }
}

const jsonSerializer = <T>(fetch: Fetch<T>): Fetch<T> => {
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

const errorHandler = <T>(fetch: Fetch<T>): Fetch<T> => {
  return async (resource, options) => {
    const response = await fetch(resource, options)

    if (response.ok) {
      return response
    } else {
      const body = await response.json()
      throw new DfnsError(response.status, body.error.message, body.error)
    }
  }
}

const dfnsAuth = <T extends DfnsBaseApiOptions>(fetch: Fetch<T>): Fetch<T> => {
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

const userAction = <T extends DfnsApiClientOptions>(fetch: Fetch<T>): Fetch<T> => {
  return async (resource, options) => {
    if (options.method !== 'GET') {
      const { challenge, challengeIdentifier, allowCredentials } = await BaseAuthApi.createUserActionChallenge(
        {
          userActionPayload: <string>options.body ?? '',
          userActionHttpMethod: options.method,
          userActionHttpPath: (<URL>resource).pathname,
          userActionServerKind: 'Api',
        },
        options.apiOptions
      )

      const { signer } = options.apiOptions

      const assertion = await signer.sign(challenge, allowCredentials)

      const { userAction } = await BaseAuthApi.signUserActionChallenge(
        {
          challengeIdentifier,
          firstFactor: assertion,
        },
        options.apiOptions
      )

      options.headers = {
        'x-dfns-useraction': userAction,
        ...(options.headers ?? {}),
      }
    }

    return fetch(resource, options)
  }
}

export const simpleFetch = fullUrl(jsonSerializer(dfnsAuth(errorHandler(<Fetch<DfnsBaseApiOptions>>_fetch))))

export const userActionFetch = fullUrl(
  jsonSerializer(dfnsAuth(userAction(errorHandler(<Fetch<DfnsApiClientOptions>>_fetch))))
)
