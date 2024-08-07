export type ArchivePermissionBody = {
    isArchived: boolean;
};

export type ArchivePermissionParams = {
    permissionId: string;
};

export type ArchivePermissionResponse = {
    id: string;
    name: string;
    operations: string[];
    status: "Active";
    isImmutable: boolean;
    isArchived: boolean;
    dateCreated: string;
    dateUpdated: string;
};

export type ArchivePermissionRequest = ArchivePermissionParams & { body: ArchivePermissionBody }

export type CreateAssignmentBody = {
    identityId: string;
};

export type CreateAssignmentParams = {
    permissionId: string;
};

export type CreateAssignmentResponse = {
    id: string;
    permissionId: string;
    identityId: string;
    isImmutable: boolean;
    dateCreated: string;
    dateUpdated: string;
};

export type CreateAssignmentRequest = CreateAssignmentParams & { body: CreateAssignmentBody }

export type CreatePermissionBody = {
    name: string;
    operations: ("Auth:Action:Sign" | "Auth:Apps:Create" | "Auth:Apps:Read" | "Auth:Apps:Update" | "Auth:Creds:Create" | "Auth:Creds:Read" | "Auth:Creds:Update" | "Auth:Creds:Code:Create" | "Auth:Types:Application" | "Auth:Types:Employee" | "Auth:Types:EndUser" | "Auth:Types:Pat" | "Auth:Types:ServiceAccount" | "Auth:Users:Create" | "Auth:Users:Delegate" | "Auth:Users:Read" | "Auth:Users:Update" | "Exchanges:Create" | "Exchanges:Read" | "Exchanges:Delete" | "Orgs:Read" | "Orgs:Update" | "Orgs:Settings:Read" | "Orgs:Settings:Update" | "PermissionAssignments:Create" | "PermissionAssignments:Read" | "PermissionAssignments:Revoke" | "PermissionPredicates:Archive" | "PermissionPredicates:Create" | "PermissionPredicates:Read" | "PermissionPredicates:Update" | "Permissions:Archive" | "Permissions:Create" | "Permissions:Read" | "Permissions:Update" | "Policies:Archive" | "Policies:Create" | "Policies:Read" | "Policies:Update" | "Policies:Approvals:Read" | "Policies:Approvals:Approve" | "Signers:ListSigners" | "Wallets:BroadcastTransaction" | "Wallets:Create" | "Wallets:Delegate" | "Wallets:Export" | "Wallets:GenerateSignature" | "Wallets:Import" | "Wallets:Read" | "Wallets:ReadSignature" | "Wallets:ReadTransaction" | "Wallets:ReadTransfer" | "Wallets:TransferAsset" | "Wallets:Update" | "Wallets:Tags:Add" | "Wallets:Tags:Delete" | "Webhooks:Create" | "Webhooks:Read" | "Webhooks:Update" | "Webhooks:Delete" | "Webhooks:Ping" | "Webhooks:Events:Read")[];
};

export type CreatePermissionResponse = {
    id: string;
    name: string;
    operations: string[];
    status: "Active";
    isImmutable: boolean;
    isArchived: boolean;
    dateCreated: string;
    dateUpdated: string;
};

export type CreatePermissionRequest = { body: CreatePermissionBody }

export type DeleteAssignmentParams = {
    permissionId: string;
    assignmentId: string;
};

export type DeleteAssignmentResponse = void | undefined;

export type DeleteAssignmentRequest = DeleteAssignmentParams

export type GetPermissionParams = {
    permissionId: string;
};

export type GetPermissionResponse = {
    id: string;
    name: string;
    operations: string[];
    status: "Active";
    isImmutable: boolean;
    isArchived: boolean;
    dateCreated: string;
    dateUpdated: string;
} & {
    pendingChangeRequest?: {
        id: string;
        requester: {
            userId: string;
            tokenId?: string | undefined;
            appId?: string | undefined;
        };
        status: "Applied" | "Failed" | "Pending" | "Rejected";
        entityId: string;
        dateCreated: string;
        dateResolved?: string | undefined;
        approvalId?: string | undefined;
        kind: "Permission";
        operationKind: "Update";
        body: {
            id: string;
            name: string;
            status: "Active";
            operations: string[];
            isImmutable: boolean;
            isArchived: boolean;
        };
    } | undefined;
};

export type GetPermissionRequest = GetPermissionParams

export type ListAssignmentsParams = {
    permissionId: string;
};

export type ListAssignmentsResponse = {
    items: ({
        id: string;
        permissionId: string;
        identityId: string;
        isImmutable: boolean;
        dateCreated: string;
        dateUpdated: string;
    } & {
        pendingChangeRequest?: {
            id: string;
            requester: {
                userId: string;
                tokenId?: string | undefined;
                appId?: string | undefined;
            };
            status: "Applied" | "Failed" | "Pending" | "Rejected";
            entityId: string;
            dateCreated: string;
            dateResolved?: string | undefined;
            approvalId?: string | undefined;
            kind: "Assignment";
            operationKind: "Create" | "Delete";
            body: {
                id: string;
                permissionId: string;
                identityId: string;
                isImmutable: boolean;
            };
        } | undefined;
    })[];
    nextPageToken?: string | undefined;
};

export type ListAssignmentsRequest = ListAssignmentsParams

export type ListPermissionsQuery = {
    limit?: string | undefined;
    paginationToken?: string | undefined;
};

export type ListPermissionsResponse = {
    items: ({
        id: string;
        name: string;
        operations: string[];
        status: "Active";
        isImmutable: boolean;
        isArchived: boolean;
        dateCreated: string;
        dateUpdated: string;
    } & {
        pendingChangeRequest?: {
            id: string;
            requester: {
                userId: string;
                tokenId?: string | undefined;
                appId?: string | undefined;
            };
            status: "Applied" | "Failed" | "Pending" | "Rejected";
            entityId: string;
            dateCreated: string;
            dateResolved?: string | undefined;
            approvalId?: string | undefined;
            kind: "Permission";
            operationKind: "Update";
            body: {
                id: string;
                name: string;
                status: "Active";
                operations: string[];
                isImmutable: boolean;
                isArchived: boolean;
            };
        } | undefined;
    })[];
    nextPageToken?: string | undefined;
};

export type ListPermissionsRequest = { query?: ListPermissionsQuery }

export type UpdatePermissionBody = {
    name?: string | undefined;
    operations?: ("Auth:Action:Sign" | "Auth:Apps:Create" | "Auth:Apps:Read" | "Auth:Apps:Update" | "Auth:Creds:Create" | "Auth:Creds:Read" | "Auth:Creds:Update" | "Auth:Creds:Code:Create" | "Auth:Types:Application" | "Auth:Types:Employee" | "Auth:Types:EndUser" | "Auth:Types:Pat" | "Auth:Types:ServiceAccount" | "Auth:Users:Create" | "Auth:Users:Delegate" | "Auth:Users:Read" | "Auth:Users:Update" | "Exchanges:Create" | "Exchanges:Read" | "Exchanges:Delete" | "Orgs:Read" | "Orgs:Update" | "Orgs:Settings:Read" | "Orgs:Settings:Update" | "PermissionAssignments:Create" | "PermissionAssignments:Read" | "PermissionAssignments:Revoke" | "PermissionPredicates:Archive" | "PermissionPredicates:Create" | "PermissionPredicates:Read" | "PermissionPredicates:Update" | "Permissions:Archive" | "Permissions:Create" | "Permissions:Read" | "Permissions:Update" | "Policies:Archive" | "Policies:Create" | "Policies:Read" | "Policies:Update" | "Policies:Approvals:Read" | "Policies:Approvals:Approve" | "Signers:ListSigners" | "Wallets:BroadcastTransaction" | "Wallets:Create" | "Wallets:Delegate" | "Wallets:Export" | "Wallets:GenerateSignature" | "Wallets:Import" | "Wallets:Read" | "Wallets:ReadSignature" | "Wallets:ReadTransaction" | "Wallets:ReadTransfer" | "Wallets:TransferAsset" | "Wallets:Update" | "Wallets:Tags:Add" | "Wallets:Tags:Delete" | "Webhooks:Create" | "Webhooks:Read" | "Webhooks:Update" | "Webhooks:Delete" | "Webhooks:Ping" | "Webhooks:Events:Read")[] | undefined;
};

export type UpdatePermissionParams = {
    permissionId: string;
};

export type UpdatePermissionResponse = {
    id: string;
    name: string;
    operations: string[];
    status: "Active";
    isImmutable: boolean;
    isArchived: boolean;
    dateCreated: string;
    dateUpdated: string;
};

export type UpdatePermissionRequest = UpdatePermissionParams & { body: UpdatePermissionBody }

