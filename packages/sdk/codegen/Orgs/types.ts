import * as Orgs from '../datamodel/Orgs'

export type GetEmployeeByIdRequest = {
  employeeId: string
}

export type GetEmployeeByIdResponse = Orgs.OrgEmployee

export type ListEmployeesResponse = { items: Orgs.OrgEmployee[] }
