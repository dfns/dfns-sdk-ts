import { fetch as _fetch } from 'cross-fetch'

import { Fetch, catchPolicyPending, dfnsAuth, errorHandler, formDataSerializer, fullUrl, jsonSerializer } from './fetch'
import { BaseAuthApi } from '../baseAuthApi'
import { DfnsError } from '../dfnsError'
import { DfnsApiClientOptions } from '../types/generic'
import { sha256 } from './sha256'
import { generateClientChallengeNonce } from './nonce'
import { toBase64Url } from './base64'
import { UserActionChallenge } from '../signer'

const userAction = <T extends DfnsApiClientOptions>(fetch: Fetch<T>): Fetch<T> => {
  return async (resource, options) => {
    const url = resource as URL

    if (options.method !== 'GET') {
      const apiOptions = {
        ...options.apiOptions,
        baseUrl: options.apiOptions.baseAuthUrl || options.apiOptions.baseUrl,
      }

      if (!apiOptions.signer) {
        throw new DfnsError(-1, 'A "signer" needs to be passed to Dfns client.', {
          detail:
            `Most non-readonly endpoints require "User Action Signing" flow.` +
            ` During that flow, the credential "signer" that you passed will handle signing` +
            ` the user action challenge, using your credential.`,
        })
      }

      const body = (options.body instanceof FormData ? options.body.get('data') : options.body) ?? ''
      if (typeof body !== 'string') {
        throw new DfnsError(-1, 'unexpected fetch body for user action signing', {
          details: { type: typeof body },
        })
      }

      if (apiOptions.signer.useClientChallenge) {
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // client challenge flow: 0 additional preflight requests
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        if (!apiOptions.orgId && !apiOptions.tenantId) {
          throw new DfnsError(-1, 'cannot infer scope from auth token to perform client-challenge signature', {
            details: { type: typeof body },
          })
        }

        const challenge = toBase64Url(
          JSON.stringify({
            timestamp: String(Date.now()),
            nonce: generateClientChallengeNonce(),
            host: new URL(apiOptions.baseUrl ?? url).host,
            method: options.method,
            path: (options.userActionHttpPath ?? url.pathname) + url.search,
            payloadHash: await sha256(new TextEncoder().encode(body), 'base64url'),
            ...(!!apiOptions.orgId && { orgId: apiOptions.orgId }),
            ...(!!apiOptions.tenantId && { tenantId: apiOptions.tenantId }),
          })
        )

        const assertion = await apiOptions.signer.sign({ challenge } as UserActionChallenge)
        const userActionHeader = toBase64Url(JSON.stringify(assertion))

        options.headers = {
          'x-dfns-useraction': userActionHeader,
          ...(options.headers ?? {}),
        }
      } else {
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // server challenge flow: 2 additional preflight requests
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        const challenge = await BaseAuthApi.createUserActionChallenge(
          {
            userActionPayload: body,
            userActionHttpMethod: options.method,
            userActionHttpPath: options.userActionHttpPath ?? url.pathname,
            userActionServerKind: apiOptions.userActionServerKind ?? 'Api',
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
    }

    return fetch(resource, options)
  }
}

export const userActionFetch = fullUrl(
  formDataSerializer(
    jsonSerializer(dfnsAuth(userAction(catchPolicyPending(errorHandler(<Fetch<DfnsApiClientOptions>>_fetch)))))
  )
)
