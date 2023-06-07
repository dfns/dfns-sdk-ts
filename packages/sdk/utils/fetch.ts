import { Response, fetch as _fetch } from 'cross-fetch'

import { DfnsError } from '../dfnsError'
import { DfnsApiOptions } from '../dfnsApiClient'
import { BaseAuthApi } from '../baseAuthApi'
import { generateNonce } from './nonce'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type Fetch = (
  resource: string | URL,
  options: { method: HttpMethod; headers?: Record<string, string>; body?: unknown; apiOptions: DfnsApiOptions }
) => Promise<Response>

const fullUrl = (fetch: Fetch): Fetch => {
  return async (resource, options) => {
    const { baseUrl } = options.apiOptions
    resource = new URL(resource, baseUrl)
    return fetch(resource, options)
  }
}

const jsonSerializer = (fetch: Fetch): Fetch => {
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

const errorHandler = (fetch: Fetch): Fetch => {
  return async (resource, options) => {
    const response = await fetch(resource, options)

    if (response.ok) {
      return response
    } else {
      const body = await response.json()
      throw new DfnsError(response.status, body.message, body)
    }
  }
}

const preflight = (fetch: Fetch): Fetch => {
  return async (resource, options) => {
    const { appId, appSecret, accessToken } = options.apiOptions

    const authorization: Record<string, string> = accessToken
      ? {
          authorization: `Bearer ${accessToken}`,
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

const userAction = (fetch: Fetch): Fetch => {
  return async (resource, options) => {
    if (options.method !== 'GET') {
      const api = new BaseAuthApi(options.apiOptions)

      const { challenge, challengeIdentifier, allowCredentials } = await api.createUserActionChallenge({
        userActionPayload: <string>options.body ?? '',
        userActionHttpMethod: options.method,
        userActionHttpPath: (<URL>resource).pathname,
        userActionServerKind: 'Api',
      })

      const { signer } = options.apiOptions
      const assertions = await signer.sign(challenge, allowCredentials)

      const { userAction } = await api.signUserActionChallenge({
        challengeIdentifier,
        ...assertions,
      })

      options.headers = {
        'x-dfns-useraction': userAction,
        ...(options.headers ?? {}),
      }
    }

    return fetch(resource, options)
  }
}

export const preflightFetch = fullUrl(jsonSerializer(preflight(errorHandler(<Fetch>_fetch))))

export const userActionFetch = fullUrl(jsonSerializer(preflight(userAction(errorHandler(<Fetch>_fetch)))))
