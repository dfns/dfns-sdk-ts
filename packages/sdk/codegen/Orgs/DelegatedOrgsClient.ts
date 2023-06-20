import { DfnsDelegatedApiClientOptions } from '../../dfnsDelegatedApiClient'
import { simpleFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class DelegatedOrgsClient {
  constructor(private apiOptions: DfnsDelegatedApiClientOptions) {}

  async getEmployeeById(
    request: T.GetEmployeeByIdRequest
  ): Promise<T.GetEmployeeByIdResponse> {
    const path = buildPathAndQuery('/employees/:employeeId', {
      path: { employeeId: request.employeeId },
      query: {},
    })

    const response = await simpleFetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listEmployees(): Promise<T.ListEmployeesResponse> {
    const path = buildPathAndQuery('/employees', {
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
