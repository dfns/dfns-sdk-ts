import * as Orgs from '../datamodel/Orgs'

export type GetEmployeeByIdRequest = {
  employeeId: string
}

export type GetEmployeeByIdResponse = Orgs.OrgEmployee

export type ListEmployeesResponse = { items: Orgs.OrgEmployee[] }

export type CreateOrgResponse = Orgs.Org

export type ListOrgsResponse = { items: Orgs.Org[] }

export type ListPackageVersionsResponse = { items: Orgs.Org[] }
