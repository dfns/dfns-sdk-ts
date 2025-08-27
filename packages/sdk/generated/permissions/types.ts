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
    operations: (("Alias:Create" | "Alias:Delete" | "Alias:Read" | "Alias:Update" | "Auth:Users:Create" | "Auth:Users:Read" | "Auth:Users:Activate" | "Auth:Users:Deactivate" | "Auth:Users:Delete" | "Auth:ServiceAccounts:Create" | "Auth:ServiceAccounts:Read" | "Auth:ServiceAccounts:Update" | "Auth:ServiceAccounts:Deactivate" | "Auth:ServiceAccounts:Activate" | "Auth:ServiceAccounts:Delete" | "Auth:Pats:Create" | "Auth:Register:Delegated" | "Auth:Login:Delegated" | "Auth:Recover:Delegated" | "Agreements:Acceptance:Create" | "Agreements:Acceptance:Read" | "Exchanges:Create" | "Exchanges:Read" | "Exchanges:Delete" | "Exchanges:Deposits:Create" | "Exchanges:Withdrawals:Create" | "FeeSponsors:Create" | "FeeSponsors:Read" | "FeeSponsors:Update" | "FeeSponsors:Delete" | "Orgs:Read" | "Orgs:Update" | "Orgs:Settings:Read" | "Orgs:Settings:Update" | "Permissions:Archive" | "Permissions:Create" | "Permissions:Read" | "Permissions:Update" | "Permissions:Assign" | "Permissions:Revoke" | "Permissions:Assignments:Read" | "Policies:Archive" | "Policies:Create" | "Policies:Read" | "Policies:Update" | "Policies:Approvals:Read" | "Policies:Approvals:Approve" | "Signers:ListSigners" | "Stakes:Create" | "Stakes:Read" | "Stakes:Update" | "Swaps:Create" | "Swaps:Read" | "Keys:Create" | "Keys:Delete" | "Keys:Read" | "Keys:Update" | "Keys:Reuse" | "Keys:Delegate" | "Keys:Import" | "Keys:Export" | "Keys:Derive" | "Keys:Signatures:Create" | "Keys:Signatures:Read" | "Networks:CantonValidators:Create" | "Networks:CantonValidators:Read" | "Networks:CantonValidators:Update" | "Networks:CantonValidators:Delete" | "Wallets:Create" | "Wallets:Read" | "Wallets:Update" | "Wallets:Tags:Add" | "Wallets:Tags:Delete" | "Wallets:Transactions:Create" | "Wallets:Transactions:Read" | "Wallets:Transfers:Create" | "Wallets:Transfers:Read" | "Webhooks:Create" | "Webhooks:Read" | "Webhooks:Update" | "Webhooks:Delete" | "Webhooks:Ping" | "Webhooks:Events:Read" | "Billing:Read" | "Billing:Write" | "Analytics:Read") | ("Wallets:GenerateSignature" | "Wallets:BroadcastTransaction" | "Auth:Action:Sign" | "Auth:Apps:Read" | "Auth:Apps:Create" | "Auth:Apps:Update" | "Auth:Creds:Create" | "Auth:Creds:Read" | "Auth:Creds:Update" | "Auth:Creds:Code:Create" | "Auth:Types:Application" | "Auth:Types:Employee" | "Auth:Types:EndUser" | "Auth:Types:Pat" | "Auth:Types:ServiceAccount" | "Internal:Auth:Types:Staff" | "Auth:Users:Delegate" | "Auth:Users:Update" | "PermissionAssignments:Create" | "PermissionAssignments:Read" | "PermissionAssignments:Revoke"))[];
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

export type DeleteAssignmentQuery = {
    force?: boolean;
};

export type DeleteAssignmentResponse = void | undefined;

export type DeleteAssignmentRequest = DeleteAssignmentParams & { query?: DeleteAssignmentQuery }

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
    operations?: (("Alias:Create" | "Alias:Delete" | "Alias:Read" | "Alias:Update" | "Auth:Users:Create" | "Auth:Users:Read" | "Auth:Users:Activate" | "Auth:Users:Deactivate" | "Auth:Users:Delete" | "Auth:ServiceAccounts:Create" | "Auth:ServiceAccounts:Read" | "Auth:ServiceAccounts:Update" | "Auth:ServiceAccounts:Deactivate" | "Auth:ServiceAccounts:Activate" | "Auth:ServiceAccounts:Delete" | "Auth:Pats:Create" | "Auth:Register:Delegated" | "Auth:Login:Delegated" | "Auth:Recover:Delegated" | "Agreements:Acceptance:Create" | "Agreements:Acceptance:Read" | "Exchanges:Create" | "Exchanges:Read" | "Exchanges:Delete" | "Exchanges:Deposits:Create" | "Exchanges:Withdrawals:Create" | "FeeSponsors:Create" | "FeeSponsors:Read" | "FeeSponsors:Update" | "FeeSponsors:Delete" | "Orgs:Read" | "Orgs:Update" | "Orgs:Settings:Read" | "Orgs:Settings:Update" | "Permissions:Archive" | "Permissions:Create" | "Permissions:Read" | "Permissions:Update" | "Permissions:Assign" | "Permissions:Revoke" | "Permissions:Assignments:Read" | "Policies:Archive" | "Policies:Create" | "Policies:Read" | "Policies:Update" | "Policies:Approvals:Read" | "Policies:Approvals:Approve" | "Signers:ListSigners" | "Stakes:Create" | "Stakes:Read" | "Stakes:Update" | "Swaps:Create" | "Swaps:Read" | "Keys:Create" | "Keys:Delete" | "Keys:Read" | "Keys:Update" | "Keys:Reuse" | "Keys:Delegate" | "Keys:Import" | "Keys:Export" | "Keys:Derive" | "Keys:Signatures:Create" | "Keys:Signatures:Read" | "Networks:CantonValidators:Create" | "Networks:CantonValidators:Read" | "Networks:CantonValidators:Update" | "Networks:CantonValidators:Delete" | "Wallets:Create" | "Wallets:Read" | "Wallets:Update" | "Wallets:Tags:Add" | "Wallets:Tags:Delete" | "Wallets:Transactions:Create" | "Wallets:Transactions:Read" | "Wallets:Transfers:Create" | "Wallets:Transfers:Read" | "Webhooks:Create" | "Webhooks:Read" | "Webhooks:Update" | "Webhooks:Delete" | "Webhooks:Ping" | "Webhooks:Events:Read" | "Billing:Read" | "Billing:Write" | "Analytics:Read") | ("Wallets:GenerateSignature" | "Wallets:BroadcastTransaction" | "Auth:Action:Sign" | "Auth:Apps:Read" | "Auth:Apps:Create" | "Auth:Apps:Update" | "Auth:Creds:Create" | "Auth:Creds:Read" | "Auth:Creds:Update" | "Auth:Creds:Code:Create" | "Auth:Types:Application" | "Auth:Types:Employee" | "Auth:Types:EndUser" | "Auth:Types:Pat" | "Auth:Types:ServiceAccount" | "Internal:Auth:Types:Staff" | "Auth:Users:Delegate" | "Auth:Users:Update" | "PermissionAssignments:Create" | "PermissionAssignments:Read" | "PermissionAssignments:Revoke"))[] | undefined;
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

