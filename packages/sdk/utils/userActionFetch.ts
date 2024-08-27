import { fetch as _fetch } from 'cross-fetch'

import { Fetch, catchPolicyPending, dfnsAuth, errorHandler, fullUrl, jsonSerializer } from './fetch'
import { BaseAuthApi } from '../baseAuthApi'
import { DfnsError } from '../dfnsError'
import { DfnsApiClientOptions } from '../types/generic'

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

export const userActionFetch = fullUrl(
  jsonSerializer(dfnsAuth(userAction(catchPolicyPending(errorHandler(<Fetch<DfnsApiClientOptions>>_fetch)))))
)
