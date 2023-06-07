import {
  BadRequestError,
  EntityNotFoundError,
  ForbiddenError,
  UnauthorizedError,
} from '../Foundations'
import { Org, OrgEmployee } from './types'

// Response for GetEmployeeById

export type GetEmployeeByIdSuccess = OrgEmployee

export type GetEmployeeByIdError = {
  error:
    | EntityNotFoundError
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GetEmployeeByIdResponse =
  | GetEmployeeByIdSuccess
  | GetEmployeeByIdError

// Response for ListEmployees

export type ListEmployeesSuccess = {
  items: OrgEmployee[]
}

export type ListEmployeesError = {
  error:
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ListEmployeesResponse = ListEmployeesSuccess | ListEmployeesError

// Response for CreateOrg

export type CreateOrgSuccess = Org

export type CreateOrgError = {
  error: ForbiddenError | BadRequestError | EntityNotFoundError
}

export type CreateOrgResponse = CreateOrgSuccess | CreateOrgError

// Response for ListOrgs

export type ListOrgsSuccess = {
  items: Org[]
}

export type ListOrgsError = {
  error: ForbiddenError | BadRequestError | EntityNotFoundError
}

export type ListOrgsResponse = ListOrgsSuccess | ListOrgsError

// Response for ListPackageVersions

export type ListPackageVersionsSuccess = {
  items: Org[]
}

export type ListPackageVersionsError = {
  error: ForbiddenError | BadRequestError | EntityNotFoundError
}

export type ListPackageVersionsResponse =
  | ListPackageVersionsSuccess
  | ListPackageVersionsError
