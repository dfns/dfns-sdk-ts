import { DelegatedTenantClient, TenantClient } from './generated/tenant'

/**
 * The tenant endpoints, grouped by service the way the org client groups its modules.
 * Each group is the `/tenant/<service>` path segment, and method names are the API operation ids.
 */
type TenantOrgsOperations = 'createOrg' | 'getOrg' | 'listOrgs' | 'updateOrg' | 'updateOrgStatus'

type TenantUsersOperations =
  | 'createTenantUser'
  | 'deleteTenantUser'
  | 'getTenantUser'
  | 'listTenantUsers'
  | 'updateTenantUser'

type TenantUserGroupsOperations =
  | 'addTenantUserGroupMembers'
  | 'createTenantUserGroup'
  | 'deleteTenantUserGroup'
  | 'getTenantUserGroup'
  | 'listTenantUserGroupMembers'
  | 'listTenantUserGroups'
  | 'removeTenantUserGroupMembers'
  | 'updateTenantUserGroup'

type TenantPermissionsOperations =
  | 'assignTenantPermission'
  | 'getTenantPermission'
  | 'listTenantPermissions'
  | 'revokeTenantPermission'

/** Delegated clients split signed operations into `...Init` and `...Complete`. */
type Delegated<C, M extends string> = Pick<C, Extract<keyof C, M | `${M}Init` | `${M}Complete`>>

export type TenantOrgsClient = Pick<TenantClient, TenantOrgsOperations>
export type TenantUsersClient = Pick<TenantClient, TenantUsersOperations>
export type TenantUserGroupsClient = Pick<TenantClient, TenantUserGroupsOperations>
export type TenantPermissionsClient = Pick<TenantClient, TenantPermissionsOperations>

export type DelegatedTenantOrgsClient = Delegated<DelegatedTenantClient, TenantOrgsOperations>
export type DelegatedTenantUsersClient = Delegated<DelegatedTenantClient, TenantUsersOperations>
export type DelegatedTenantUserGroupsClient = Delegated<DelegatedTenantClient, TenantUserGroupsOperations>
export type DelegatedTenantPermissionsClient = Delegated<DelegatedTenantClient, TenantPermissionsOperations>

/** Fails to compile when a tenant endpoint is in no group, so a new endpoint cannot be left out of the getters. */
type UngroupedTenantOperations = Exclude<
  keyof TenantClient,
  TenantOrgsOperations | TenantUsersOperations | TenantUserGroupsOperations | TenantPermissionsOperations
>
export const allTenantOperationsGrouped: [UngroupedTenantOperations] extends [never]
  ? true
  : UngroupedTenantOperations = true
