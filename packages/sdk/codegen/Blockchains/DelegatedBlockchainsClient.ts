import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedBlockchainsClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async callViewFunction(
    request: T.CallViewFunctionRequest
  ): Promise<T.CallViewFunctionResponse> {
    const path = buildPathAndQuery('/blockchains/:network/call-read-function', {
      path: { network: request.network },
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'POST',
      body: request.body,
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
