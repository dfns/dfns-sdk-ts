import { BaseAuthApi, SignUserActionChallengeRequest, UserActionChallengeResponse } from '../../baseAuthApi'
import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedNetworksClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async getFees(request?: T.GetFeesRequest): Promise<T.GetFeesResponse> {
    const path = buildPathAndQuery('/networks/fees', {
      path: request ?? {},
      query: request?.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async readContract(request: T.ReadContractRequest): Promise<T.ReadContractResponse> {
    const path = buildPathAndQuery('/networks/read-contract', {
      path: request ?? {},
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
