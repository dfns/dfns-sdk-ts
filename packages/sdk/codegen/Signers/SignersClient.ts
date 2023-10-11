import { DfnsApiClientOptions } from '../../dfnsApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class SignersClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  async listSigners(): Promise<T.ListSignersResponse> {
    const path = buildPathAndQuery('/signers', {
      path: {},
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
