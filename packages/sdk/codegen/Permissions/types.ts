import * as Permissions from '../datamodel/Permissions'

export type CreatePermissionRequest = {
  body: Permissions.CreatePermissionInput
}

export type CreatePermissionResponse = Permissions.Permission

export type UpdatePermissionRequest = {
  permissionId: string
  body: Permissions.UpdatePermissionInput
}

export type UpdatePermissionResponse = Permissions.Permission

export type ArchivePermissionRequest = {
  permissionId: string
  body: Permissions.ArchivePermissionInput
}

export type ArchivePermissionResponse = Permissions.Permission

export type GetPermissionByIdRequest = {
  permissionId: string
}

export type GetPermissionByIdResponse = Permissions.Permission

export type ListPermissionsResponse = { items: Permissions.Permission[] }

export type CreatePermissionPredicateRequest = {
  permissionId: string
  body: Permissions.CreatePermissionPredicateInput
}

export type CreatePermissionPredicateResponse = Permissions.PermissionPredicate

export type UpdatePermissionPredicateRequest = {
  permissionId: string
  predicateId: string
  body: Permissions.UpdatePermissionPredicateInput
}

export type UpdatePermissionPredicateResponse = Permissions.PermissionPredicate

export type ArchivePermissionPredicateRequest = {
  permissionId: string
  predicateId: string
  body: Permissions.ArchivePermissionPredicateInput
}

export type ArchivePermissionPredicateResponse = Permissions.PermissionPredicate

export type ListPermissionPredicatesRequest = {
  permissionId: string
}

export type ListPermissionPredicatesResponse = {
  items: Permissions.PermissionPredicate[]
}

export type CreatePermissionAssignmentRequest = {
  body: Permissions.CreatePermissionAssignmentInput
}

export type CreatePermissionAssignmentResponse =
  Permissions.PermissionAssignment

export type RevokePermissionAssignmentRequest = {
  assignmentId: string
}

export type RevokePermissionAssignmentResponse =
  Permissions.DeletionAcknowledgement

export type ListPermissionAssignmentsRequest = {
  query?: { permissionId?: string; identityId?: string }
}

export type ListPermissionAssignmentsResponse = {
  items: Permissions.PermissionAssignment[]
}
