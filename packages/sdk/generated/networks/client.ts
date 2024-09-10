import { DfnsApiClientOptions } from '../../types/generic'
import { simpleFetch } from '../../utils/fetch'
import { userActionFetch } from '../../utils/userActionFetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class NetworksClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

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
