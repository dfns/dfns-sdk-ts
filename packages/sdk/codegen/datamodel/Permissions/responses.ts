import {
  BadRequestError,
  DuplicateError,
  EntityNotFoundError,
  ForbiddenError,
  UnauthorizedError,
} from '../Foundations'
import {
  DeletionAcknowledgement,
  Permission,
  PermissionAssignment,
  PermissionPredicate,
} from './types'

// Response for CreatePermission

export type CreatePermissionSuccess = Permission

export type CreatePermissionError = {
  error:
    | BadRequestError
    | DuplicateError
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreatePermissionResponse =
  | CreatePermissionSuccess
  | CreatePermissionError

// Response for UpdatePermission

export type UpdatePermissionSuccess = Permission

export type UpdatePermissionError = {
  error:
    | BadRequestError
    | EntityNotFoundError
    | ForbiddenError
    | DuplicateError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type UpdatePermissionResponse =
  | UpdatePermissionSuccess
  | UpdatePermissionError

// Response for ArchivePermission

export type ArchivePermissionSuccess = Permission

export type ArchivePermissionError = {
  error:
    | EntityNotFoundError
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ArchivePermissionResponse =
  | ArchivePermissionSuccess
  | ArchivePermissionError

// Response for GetPermissionById

export type GetPermissionByIdSuccess = Permission

export type GetPermissionByIdError = {
  error:
    | EntityNotFoundError
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GetPermissionByIdResponse =
  | GetPermissionByIdSuccess
  | GetPermissionByIdError

// Response for ListPermissions

export type ListPermissionsSuccess = {
  items: Permission[]
}

export type ListPermissionsError = {
  error:
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ListPermissionsResponse =
  | ListPermissionsSuccess
  | ListPermissionsError

// Response for CreatePermissionPredicate

export type CreatePermissionPredicateSuccess = PermissionPredicate

export type CreatePermissionPredicateError = {
  error:
    | BadRequestError
    | DuplicateError
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreatePermissionPredicateResponse =
  | CreatePermissionPredicateSuccess
  | CreatePermissionPredicateError

// Response for UpdatePermissionPredicate

export type UpdatePermissionPredicateSuccess = PermissionPredicate

export type UpdatePermissionPredicateError = {
  error:
    | BadRequestError
    | EntityNotFoundError
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type UpdatePermissionPredicateResponse =
  | UpdatePermissionPredicateSuccess
  | UpdatePermissionPredicateError

// Response for ArchivePermissionPredicate

export type ArchivePermissionPredicateSuccess = PermissionPredicate

export type ArchivePermissionPredicateError = {
  error:
    | EntityNotFoundError
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ArchivePermissionPredicateResponse =
  | ArchivePermissionPredicateSuccess
  | ArchivePermissionPredicateError

// Response for ListPermissionPredicates

export type ListPermissionPredicatesSuccess = {
  items: PermissionPredicate[]
}

export type ListPermissionPredicatesError = {
  error:
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ListPermissionPredicatesResponse =
  | ListPermissionPredicatesSuccess
  | ListPermissionPredicatesError

// Response for CreatePermissionAssignment

export type CreatePermissionAssignmentSuccess = PermissionAssignment

export type CreatePermissionAssignmentError = {
  error:
    | BadRequestError
    | EntityNotFoundError
    | DuplicateError
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreatePermissionAssignmentResponse =
  | CreatePermissionAssignmentSuccess
  | CreatePermissionAssignmentError

// Response for RevokePermissionAssignment

export type RevokePermissionAssignmentSuccess = DeletionAcknowledgement

export type RevokePermissionAssignmentError = {
  error:
    | EntityNotFoundError
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type RevokePermissionAssignmentResponse =
  | RevokePermissionAssignmentSuccess
  | RevokePermissionAssignmentError

// Response for ListPermissionAssignments

export type ListPermissionAssignmentsSuccess = {
  items: PermissionAssignment[]
}

export type ListPermissionAssignmentsError = {
  error:
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ListPermissionAssignmentsResponse =
  | ListPermissionAssignmentsSuccess
  | ListPermissionAssignmentsError

// Response for ListPermissionsHistorical

export type ListPermissionsHistoricalSuccess = {
  items: Permission[]
}

export type ListPermissionsHistoricalError = {
  error:
    | ForbiddenError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ListPermissionsHistoricalResponse =
  | ListPermissionsHistoricalSuccess
  | ListPermissionsHistoricalError
