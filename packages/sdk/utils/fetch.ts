import { Response, fetch as _fetch } from 'cross-fetch'

import { DfnsError, PolicyPendingError } from '../dfnsError'
import { BaseAuthApi, DfnsBaseApiOptions } from '../baseAuthApi'
import { generateNonce } from './nonce'
import { DfnsApiClientOptions } from '../dfnsApiClient'

const DEFAULT_DFNS_BASE_URL = 'https://api.dfns.io'

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
    const baseUrl = options.apiOptions.baseUrl || DEFAULT_DFNS_BASE_URL
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
const catchPolicyPending = <T>(fetch: Fetch<T>): Fetch<T> => {
  return async (resource, options) => {
    const response = await fetch(resource, options)

    if (response.status === PolicyPendingError.HTTP_ACCEPTED) {
      throw new PolicyPendingError(await response.json())
    } else {
      return response
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
      const apiOptions = {
        ...options.apiOptions,
        baseUrl: (<any>options.apiOptions).baseAuthUrl || options.apiOptions.baseUrl,
      }

      if (!apiOptions.signer) {
        throw new DfnsError(-1, 'A "signer" needs to be passed to Dfns client.', {
          detail:
            `Most non-readonly endpoints require "User Action Signing" flow.` +
            ` During that flow, the credential "signer" that you passed will handle signing` +
            ` the user action challenge, using your credential.`,
        })
      }

      const challenge = await BaseAuthApi.createUserActionChallenge(
        {
          userActionPayload: <string>options.body ?? '',
          userActionHttpMethod: options.method,
          userActionHttpPath: (<URL>resource).pathname,
          userActionServerKind: (<any>apiOptions)?.userActionServerKind || 'Api',
        },
        apiOptions
      )

      const assertion = await apiOptions.signer.sign(challenge)

      const { userAction } = await BaseAuthApi.signUserActionChallenge(
        {
          challengeIdentifier: challenge.challengeIdentifier,
          firstFactor: assertion,
        },
        apiOptions
      )

      options.headers = {
        'x-dfns-useraction': userAction,
        ...(options.headers ?? {}),
      }
    }

    return fetch(resource, options)
  }
}

export const simpleFetch = fullUrl(
  jsonSerializer(dfnsAuth(catchPolicyPending(errorHandler(<Fetch<DfnsBaseApiOptions>>_fetch))))
)

export const userActionFetch = fullUrl(
  jsonSerializer(dfnsAuth(userAction(catchPolicyPending(errorHandler(<Fetch<DfnsApiClientOptions>>_fetch)))))
)
