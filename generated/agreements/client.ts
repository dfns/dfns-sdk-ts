/* eslint @typescript-eslint/no-unused-vars: 0 */

import { DfnsApiClientOptions } from '../../types/generic'
import { simpleFetch } from '../../utils/fetch'
import { userActionFetch } from '../../utils/userActionFetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class AgreementsClient {
  constructor(private apiOptions: DfnsApiClientOptions) {}

  async getLatestUnacceptedAgreement(request?: T.GetLatestUnacceptedAgreementRequest): Promise<T.GetLatestUnacceptedAgreementResponse> {
    const path = buildPathAndQuery('/agreements/latest-unaccepted', {
      path: request ?? {},
      query: request?.query ?? {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async recordAgreementAcceptance(request: T.RecordAgreementAcceptanceRequest): Promise<T.RecordAgreementAcceptanceResponse> {
    const path = buildPathAndQuery('/agreements/:agreementId/accept', {
      path: request ?? {},
      query: {},
    })

    const response = await userActionFetch(path, {
      method: 'POST',
      body: {},
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
