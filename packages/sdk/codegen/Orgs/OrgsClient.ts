import { DfnsApiOptions } from '../../dfnsApiClient'
import { Fetch, userActionFetch } from '../../utils/fetch'
import { buildPathAndQuery } from '../../utils/url'
import * as T from './types'

export class OrgsClient {
  private fetch: Fetch

  constructor(private apiOptions: DfnsApiOptions) {
    this.fetch = userActionFetch
  }

  async getEmployeeById(
    request: T.GetEmployeeByIdRequest
  ): Promise<T.GetEmployeeByIdResponse> {
    const path = buildPathAndQuery('/employees/:employeeId', {
      path: { employeeId: request.employeeId },
      query: {},
    })

    const response = await this.fetch(path, {
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

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async createOrg(): Promise<T.CreateOrgResponse> {
    const path = buildPathAndQuery('/staff/orgs', {
      path: {},
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'POST',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listOrgs(): Promise<T.ListOrgsResponse> {
    const path = buildPathAndQuery('/staff/orgs', {
      path: {},
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }

  async listPackageVersions(): Promise<T.ListPackageVersionsResponse> {
    const path = buildPathAndQuery('/staff/orgs', {
      path: {},
      query: {},
    })

    const response = await this.fetch(path, {
      method: 'GET',
      apiOptions: this.apiOptions,
    })

    return response.json()
  }
}
