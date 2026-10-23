export type AddTenantUserGroupMembersBody = {
    /** Tenant users to add. Users already in the group are left unchanged. */
    userIds: string[];
};

export type AddTenantUserGroupMembersParams = {
    /** User group id. */
    userGroupId: string;
};

export type AddTenantUserGroupMembersResponse = {};

export type AddTenantUserGroupMembersRequest = AddTenantUserGroupMembersParams & { body: AddTenantUserGroupMembersBody }

export type AssignTenantPermissionBody = {
    /** ID of the identity to assign the permission to. Can be a user ID, a service account ID, or a personal access token (PAT) ID. */
    identityId: string;
};

export type AssignTenantPermissionParams = {
    /** ID of the permission (also referred to as "role" in the dashboard). */
    permissionId: string;
};

export type AssignTenantPermissionResponse = void | undefined;

export type AssignTenantPermissionRequest = AssignTenantPermissionParams & { body: AssignTenantPermissionBody }

export type CreateOrgBody = {
    name: string;
    keyStores: {
        id: string;
        primary?: boolean | undefined;
    }[];
};

export type CreateOrgResponse = {
    org: {
        id: string;
        name: string;
    };
};

export type CreateOrgRequest = { body: CreateOrgBody }

export type CreateTenantUserBody = {
    /** The email address of the new user. */
    email: string;
    /** Value that can be used to correlate the entity with an external system. */
    externalId?: string | undefined;
    /** If set to true, the user will have to authenticate via SSO */
    isSSORequired?: boolean | undefined;
};

export type CreateTenantUserResponse = {
    /** User id. */
    id: string;
    kind: "TenantUser";
    username: string;
    isRegistered: boolean;
    isActive: boolean;
    isSSORequired: boolean;
    externalId?: string | undefined;
    permissions: {
        id: string;
        name: string;
        operations: string[];
    }[];
    /** orgs this user has access to */
    orgs: {
        orgId: string;
        name: string;
    }[];
};

export type CreateTenantUserRequest = { body: CreateTenantUserBody }

export type CreateTenantUserGroupBody = {
    /** Name of the group. Unique within the org or tenant, ignoring case. A deleted group frees its name for reuse. */
    name: string;
    /** Description of the group. */
    description?: string | undefined;
};

export type CreateTenantUserGroupResponse = {
    /** User group id. */
    id: string;
    /** Organization id. */
    orgId?: string | undefined;
    /** Tenant id. */
    tenantId?: string | undefined;
    /** Name of the group. */
    name: string;
    /** Description of the group. */
    description?: string | undefined;
    /** Number of members. */
    memberCount: number;
    dateCreated: string;
    dateUpdated: string;
};

export type CreateTenantUserGroupRequest = { body: CreateTenantUserGroupBody }

export type DeleteTenantUserParams = {
    /** User id. */
    userId: string;
};

export type DeleteTenantUserResponse = {};

export type DeleteTenantUserRequest = DeleteTenantUserParams

export type DeleteTenantUserGroupParams = {
    /** User group id. */
    userGroupId: string;
};

export type DeleteTenantUserGroupResponse = {};

export type DeleteTenantUserGroupRequest = DeleteTenantUserGroupParams

export type GetOrgParams = {
    /** Organization id. */
    orgId: string;
};

export type GetOrgResponse = {
    org: {
        id: string;
        name: string;
        status: "Active" | "Suspended" | "Archived";
        dateCreated: string;
    };
};

export type GetOrgRequest = GetOrgParams

export type GetTenantPermissionParams = {
    /** ID of the permission (also referred to as "role" in the dashboard). */
    permissionId: string;
};

export type GetTenantPermissionResponse = {
    /** ID of the permission (also referred to as "role" in the dashboard). */
    id: string;
    /** Human-readable name of the permission (role). */
    name: string;
    /** List of API operations this permission grants access to. See [Permissions List](https://docs.dfns.co/core-concepts/roles-and-permissions#list-of-permissions) for available operations. */
    operations: string[];
    /** Current status of the permission. */
    status: "Active";
    /** Whether this permission is system-managed and cannot be modified. */
    isImmutable: boolean;
    /** Whether this permission has been archived (soft-deleted). */
    isArchived: boolean;
    dateCreated: string;
    dateUpdated: string;
};

export type GetTenantPermissionRequest = GetTenantPermissionParams

export type GetTenantUserParams = {
    /** User id. */
    userId: string;
};

export type GetTenantUserResponse = {
    /** User id. */
    id: string;
    kind: "TenantUser";
    username: string;
    isRegistered: boolean;
    isActive: boolean;
    isSSORequired: boolean;
    externalId?: string | undefined;
    permissions: {
        id: string;
        name: string;
        operations: string[];
    }[];
    /** orgs this user has access to */
    orgs: {
        orgId: string;
        name: string;
    }[];
};

export type GetTenantUserRequest = GetTenantUserParams

export type GetTenantUserGroupParams = {
    /** User group id. */
    userGroupId: string;
};

export type GetTenantUserGroupResponse = {
    /** User group id. */
    id: string;
    /** Organization id. */
    orgId?: string | undefined;
    /** Tenant id. */
    tenantId?: string | undefined;
    /** Name of the group. */
    name: string;
    /** Description of the group. */
    description?: string | undefined;
    /** Number of members. */
    memberCount: number;
    dateCreated: string;
    dateUpdated: string;
};

export type GetTenantUserGroupRequest = GetTenantUserGroupParams

export type ListOrgsQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
    status?: (("Active" | "Suspended" | "Archived") | ("Active" | "Suspended" | "Archived")[]) | undefined;
};

export type ListOrgsResponse = {
    /** Current page items. */
    items: {
        id: string;
        name: string;
        status: "Active" | "Suspended" | "Archived";
        dateCreated: string;
    }[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListOrgsRequest = { query?: ListOrgsQuery }

export type ListTenantPermissionsQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
};

export type ListTenantPermissionsResponse = {
    /** Current page items. */
    items: {
        /** ID of the permission (also referred to as "role" in the dashboard). */
        id: string;
        /** Human-readable name of the permission (role). */
        name: string;
        /** List of API operations this permission grants access to. See [Permissions List](https://docs.dfns.co/core-concepts/roles-and-permissions#list-of-permissions) for available operations. */
        operations: string[];
        /** Current status of the permission. */
        status: "Active";
        /** Whether this permission is system-managed and cannot be modified. */
        isImmutable: boolean;
        /** Whether this permission has been archived (soft-deleted). */
        isArchived: boolean;
        dateCreated: string;
        dateUpdated: string;
    }[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListTenantPermissionsRequest = { query?: ListTenantPermissionsQuery }

export type ListTenantUserGroupMembersParams = {
    /** User group id. */
    userGroupId: string;
};

export type ListTenantUserGroupMembersQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
};

export type ListTenantUserGroupMembersResponse = {
    /** Current page items. */
    items: {
        /** User id. */
        userId: string;
        /** Username/identifier of the member. */
        username: string;
        /** User kind. */
        kind: "DfnsStaff" | "TenantUser" | "CustomerEmployee" | "EndUser";
        /** Whether the member is an active user. */
        isActive: boolean;
        /** Whether the member has been archived. Archived members hold no permissions. */
        isArchived: boolean;
        /** Whether the member is a service account. */
        isServiceAccount: boolean;
        dateAdded: string;
    }[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListTenantUserGroupMembersRequest = ListTenantUserGroupMembersParams & { query?: ListTenantUserGroupMembersQuery }

export type ListTenantUserGroupsQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
};

export type ListTenantUserGroupsResponse = {
    /** Current page items. */
    items: {
        /** User group id. */
        id: string;
        /** Organization id. */
        orgId?: string | undefined;
        /** Tenant id. */
        tenantId?: string | undefined;
        /** Name of the group. */
        name: string;
        /** Description of the group. */
        description?: string | undefined;
        /** Number of members. */
        memberCount: number;
        dateCreated: string;
        dateUpdated: string;
    }[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListTenantUserGroupsRequest = { query?: ListTenantUserGroupsQuery }

export type ListTenantUsersQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
};

export type ListTenantUsersResponse = {
    /** Current page items. */
    items: {
        /** User id. */
        id: string;
        kind: "TenantUser";
        username: string;
        isRegistered: boolean;
        isActive: boolean;
        isSSORequired: boolean;
        externalId?: string | undefined;
        permissions: {
            id: string;
            name: string;
            operations: string[];
        }[];
        /** orgs this user has access to */
        orgs: {
            orgId: string;
            name: string;
        }[];
    }[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListTenantUsersRequest = { query?: ListTenantUsersQuery }

export type RemoveTenantUserGroupMembersBody = {
    /** Tenant users to remove. Users not in the group are left unchanged. */
    userIds: string[];
};

export type RemoveTenantUserGroupMembersParams = {
    /** User group id. */
    userGroupId: string;
};

export type RemoveTenantUserGroupMembersResponse = {};

export type RemoveTenantUserGroupMembersRequest = RemoveTenantUserGroupMembersParams & { body: RemoveTenantUserGroupMembersBody }

export type RevokeTenantPermissionBody = {
    /** ID of the identity to revoke the permission from. Can be a user ID, a service account ID, or a personal access token (PAT) ID. */
    identityId: string;
};

export type RevokeTenantPermissionParams = {
    /** ID of the permission (also referred to as "role" in the dashboard). */
    permissionId: string;
};

export type RevokeTenantPermissionResponse = void | undefined;

export type RevokeTenantPermissionRequest = RevokeTenantPermissionParams & { body: RevokeTenantPermissionBody }

export type UpdateOrgBody = {
    name?: string | undefined;
};

export type UpdateOrgParams = {
    /** Organization id. */
    orgId: string;
};

export type UpdateOrgResponse = {
    org: {
        id: string;
        name: string;
        status: "Active" | "Suspended" | "Archived";
        dateCreated: string;
    };
};

export type UpdateOrgRequest = UpdateOrgParams & { body: UpdateOrgBody }

export type UpdateOrgStatusBody = {
    status: "Active" | "Suspended" | "Archived";
};

export type UpdateOrgStatusParams = {
    /** Organization id. */
    orgId: string;
};

export type UpdateOrgStatusResponse = {};

export type UpdateOrgStatusRequest = UpdateOrgStatusParams & { body: UpdateOrgStatusBody }

export type UpdateTenantUserBody = {
    isSSORequired: boolean;
};

export type UpdateTenantUserParams = {
    /** User id. */
    userId: string;
};

export type UpdateTenantUserResponse = {};

export type UpdateTenantUserRequest = UpdateTenantUserParams & { body: UpdateTenantUserBody }

export type UpdateTenantUserGroupBody = {
    /** Name of the group. Unique within the org or tenant, ignoring case. A deleted group frees its name for reuse. */
    name?: string | undefined;
    /** Description of the group. Null removes it. */
    description?: (string | null) | undefined;
};

export type UpdateTenantUserGroupParams = {
    /** User group id. */
    userGroupId: string;
};

export type UpdateTenantUserGroupResponse = {
    /** User group id. */
    id: string;
    /** Organization id. */
    orgId?: string | undefined;
    /** Tenant id. */
    tenantId?: string | undefined;
    /** Name of the group. */
    name: string;
    /** Description of the group. */
    description?: string | undefined;
    /** Number of members. */
    memberCount: number;
    dateCreated: string;
    dateUpdated: string;
};

export type UpdateTenantUserGroupRequest = UpdateTenantUserGroupParams & { body: UpdateTenantUserGroupBody }

