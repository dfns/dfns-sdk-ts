import { fetch as _fetch } from 'cross-fetch'

import { DfnsError, PolicyPendingError } from '../dfnsError'
import { DfnsBaseApiOptions } from '../types/generic'
import { extractTokenScope } from './authToken'
import { sha256 } from './sha256'

const DEFAULT_DFNS_BASE_URL = 'https://api.dfns.io'

import { version } from '../package.json'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type FetchOptions<T> = {
  method: HttpMethod
  headers?: Record<string, string>
  body?: string | unknown
  file?: { bytes: Uint8Array; name?: string }
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
    if (options.body && !(options.body instanceof FormData)) {
      options.body = JSON.stringify(options.body)

      options.headers = {
        'content-type': 'application/json',
        ...(options.headers ?? {}),
      }
    }

    return fetch(resource, options)
  }
}

export const formDataSerializer = <T>(fetch: Fetch<T>): Fetch<T> => {
  return async (resource, options) => {
    if (!options.file) return fetch(resource, options)

    const { bytes, name } = options.file
    const fileChecksum = await sha256(bytes)
    const body = { ...((options.body as Record<string, unknown>) ?? {}), fileChecksum }

    const form = new FormData()
    form.append('data', JSON.stringify(body))
    form.append('file', new Blob([bytes as BlobPart]), name)

    return fetch(resource, { ...options, body: form })
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
    const { orgId, authToken } = options.apiOptions

    if (authToken) {
      const tokenScope = extractTokenScope({ authToken })

      // if orgId passed in SDK instantiation, check auth token scope matches
      if (options.apiOptions.orgId && options.apiOptions.orgId !== tokenScope.orgId) {
        throw new Error(`Provided auth token is not scoped to org ID ${options.apiOptions.orgId}`)
      }

      // if tenantId passed in SDK instantiation, check auth token scope matches
      if (options.apiOptions.tenantId && options.apiOptions.tenantId !== tokenScope.tenantId) {
        throw new Error(`Provided auth token is not scoped to tenant ID ${options.apiOptions.tenantId}`)
      }

      // pass these scopes down to other middlewares
      options.apiOptions.orgId = tokenScope.orgId
      options.apiOptions.tenantId = tokenScope.tenantId
    }

    const authorization: Record<string, string> = authToken
      ? {
          authorization: `Bearer ${authToken}`,
        }
      : {}

    options.headers = {
      'x-dfns-sdk-version': version,
      ...authorization,
      ...(options.headers ?? {}),
    }

    return fetch(resource, options)
  }
}

export const simpleFetch = fullUrl(
  jsonSerializer(dfnsAuth(catchPolicyPending(errorHandler(<Fetch<DfnsBaseApiOptions>>_fetch))))
)
