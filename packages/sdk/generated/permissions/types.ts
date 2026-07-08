export type ArchivePermissionBody = {
    /** Set to true to archive, false to unarchive. */
    isArchived: boolean;
};

export type ArchivePermissionParams = {
    /** ID of the permission (also referred to as "role" in the dashboard). */
    permissionId: string;
};

export type ArchivePermissionResponse = {
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

export type ArchivePermissionRequest = ArchivePermissionParams & { body: ArchivePermissionBody }

export type CreateAssignmentBody = {
    /** ID of the identity to assign the permission to. Can be a user ID, a service account ID, or a personal access token (PAT) ID. */
    identityId: string;
};

export type CreateAssignmentParams = {
    /** ID of the permission (also referred to as "role" in the dashboard). */
    permissionId: string;
};

export type CreateAssignmentResponse = {
    /** ID of the permission assignment. */
    id: string;
    /** ID of the permission (also referred to as "role" in the dashboard). */
    permissionId: string;
    /** ID of the identity the permission is assigned to. Can be a user ID, a service account ID, or a personal access token (PAT) ID. */
    identityId: string;
    /** Whether this assignment is system-managed and cannot be modified. */
    isImmutable: boolean;
    dateCreated: string;
    dateUpdated: string;
};

export type CreateAssignmentRequest = CreateAssignmentParams & { body: CreateAssignmentBody }

export type CreatePermissionBody = {
    /** Human-readable name for the permission (role). */
    name: string;
    /** List of API operations this permission grants access to. See [Permissions List](https://docs.dfns.co/core-concepts/roles-and-permissions#list-of-permissions) for available operations. */
    operations: (("Registry:Addresses:Create" | "Registry:Addresses:Delete" | "Registry:Addresses:Read" | "Registry:Addresses:Update" | "Registry:ContractSchemas:Create" | "Registry:ContractSchemas:Delete" | "Registry:ContractSchemas:Read" | "Auth:Logs:Read" | "Auth:Users:Create" | "Auth:Users:Read" | "Auth:Users:Update" | "Auth:Users:Activate" | "Auth:Users:Deactivate" | "Auth:Users:Delete" | "Auth:ServiceAccounts:Create" | "Auth:ServiceAccounts:Read" | "Auth:ServiceAccounts:Update" | "Auth:ServiceAccounts:Deactivate" | "Auth:ServiceAccounts:Activate" | "Auth:ServiceAccounts:Delete" | "Auth:Pats:Create" | "Auth:Register:Delegated" | "Auth:Login:Delegated" | "Auth:Recover:Delegated" | "Agreements:Acceptance:Create" | "Agreements:Acceptance:Read" | "Events:Read" | "Exchanges:Create" | "Exchanges:Read" | "Exchanges:Delete" | "Exchanges:Deposits:Create" | "Exchanges:Withdrawals:Create" | "FeeSponsors:Create" | "FeeSponsors:Read" | "FeeSponsors:Update" | "FeeSponsors:Delete" | "FeeSponsors:Use" | "Orgs:Read" | "Orgs:Update" | "Orgs:Settings:Read" | "Orgs:Settings:Update" | "Permissions:Archive" | "Permissions:Create" | "Permissions:Read" | "Permissions:Update" | "Permissions:Assign" | "Permissions:Revoke" | "Permissions:Assignments:Read" | "Policies:Archive" | "Policies:Create" | "Policies:Read" | "Policies:Update" | "Policies:Approvals:Read" | "Policies:Approvals:Approve" | "Signers:ListSigners" | "Stakes:Create" | "Stakes:Read" | "Stakes:Update" | "Swaps:Create" | "Swaps:Read" | "Payouts:Create" | "Payouts:Read" | "Payouts:Write" | "Payins:Create" | "Payins:Read" | "Allocations:Create" | "Allocations:Update" | "Allocations:Read" | "Keys:Create" | "Keys:Delete" | "Keys:Read" | "Keys:Update" | "Keys:Reuse" | "Keys:Delegate" | "Keys:Import" | "Keys:Export" | "Keys:Derive" | "Keys:ChildKeys:Create" | "Keys:Signatures:Create" | "Keys:Signatures:Read" | "KeyStores:Read" | "KeyStores:Fleets:Create" | "KeyStores:Fleets:Clone" | "KeyStores:Fleets:AddMacUser" | "KeyStores:ProofOfControl:Create" | "KeyStores:OnchainSignatures:Create" | "Networks:CantonValidators:Create" | "Networks:CantonValidators:Read" | "Networks:CantonValidators:Update" | "Networks:CantonValidators:Delete" | "Wallets:Create" | "Wallets:Read" | "Wallets:Update" | "Wallets:Tags:Add" | "Wallets:Tags:Delete" | "Wallets:Transactions:Create" | "Wallets:Transactions:Read" | "Wallets:Transactions:Abort" | "Wallets:Transfers:Create" | "Wallets:Transfers:Read" | "Wallets:Transfers:Abort" | "Wallets:Offers:Read" | "Wallets:Offers:Settle" | "Vaults:Create" | "Vaults:Read" | "Vaults:Update" | "Vaults:Tags:Add" | "Vaults:Tags:Delete" | "Vaults:Addresses:Create" | "Vaults:Balances:Unquarantine" | "Vaults:Transfers:Create" | "Webhooks:Create" | "Webhooks:Read" | "Webhooks:Update" | "Webhooks:Delete" | "Webhooks:Ping" | "Webhooks:Events:Read" | "Billing:Read" | "Billing:Write" | "Analytics:Read") | ("Alias:Create" | "Alias:Delete" | "Alias:Read" | "Alias:Update" | "Wallets:GenerateSignature" | "Wallets:BroadcastTransaction" | "Auth:Action:Sign" | "Auth:Apps:Read" | "Auth:Apps:Create" | "Auth:Apps:Update" | "Auth:Creds:Create" | "Auth:Creds:Read" | "Auth:Creds:Update" | "Auth:Creds:Code:Create" | "Auth:Types:Application" | "Auth:Types:Employee" | "Auth:Types:EndUser" | "Auth:Types:Pat" | "Auth:Types:ServiceAccount" | "Internal:Auth:Types:Staff" | "Auth:Users:Delegate" | "PermissionAssignments:Create" | "PermissionAssignments:Read" | "PermissionAssignments:Revoke"))[];
};

export type CreatePermissionResponse = {
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

export type CreatePermissionRequest = { body: CreatePermissionBody }

export type DeleteAssignmentParams = {
    /** ID of the permission (also referred to as "role" in the dashboard). */
    permissionId: string;
    /** ID of the permission assignment. */
    assignmentId: string;
};

export type DeleteAssignmentQuery = {
    /** If true, bypasses the approval process and revokes immediately. */
    force?: boolean | undefined;
};

export type DeleteAssignmentResponse = void | undefined;

export type DeleteAssignmentRequest = DeleteAssignmentParams & { query?: DeleteAssignmentQuery }

export type GetPermissionParams = {
    /** ID of the permission (also referred to as "role" in the dashboard). */
    permissionId: string;
};

export type GetPermissionResponse = {
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
} & {
    pendingChangeRequest?: {
        /** ID of the change request. */
        id: string;
        /** The user who initiated the change request. */
        requester: {
            userId: string;
            tokenId?: string | undefined;
            appId?: string | undefined;
        };
        /** Current status of the change request. */
        status: "Applied" | "Failed" | "Pending" | "Rejected";
        /** ID of the entity being changed. */
        entityId: string;
        dateCreated: string;
        dateResolved?: string | undefined;
        approvalId?: string | undefined;
        kind: "Permission";
        operationKind: "Update";
        body: {
            /** ID of the permission (also referred to as "role" in the dashboard). */
            id: string;
            /** Human-readable name of the permission (role). */
            name: string;
            /** Current status of the permission. */
            status: "Active";
            /** List of API operations this permission grants access to. See [Permissions List](https://docs.dfns.co/core-concepts/roles-and-permissions#list-of-permissions) for available operations. */
            operations: string[];
            /** Whether this permission is system-managed and cannot be modified. */
            isImmutable: boolean;
            /** Whether this permission has been archived (soft-deleted). */
            isArchived: boolean;
        };
    } | undefined;
};

export type GetPermissionRequest = GetPermissionParams

export type ListAssignmentsParams = {
    /** ID of the permission (also referred to as "role" in the dashboard). */
    permissionId: string;
};

export type ListAssignmentsQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
};

export type ListAssignmentsResponse = {
    /** Current page items. */
    items: ({
        /** ID of the permission assignment. */
        id: string;
        /** ID of the permission (also referred to as "role" in the dashboard). */
        permissionId: string;
        /** ID of the identity the permission is assigned to. Can be a user ID, a service account ID, or a personal access token (PAT) ID. */
        identityId: string;
        /** Whether this assignment is system-managed and cannot be modified. */
        isImmutable: boolean;
        dateCreated: string;
        dateUpdated: string;
    } & {
        pendingChangeRequest?: {
            /** ID of the change request. */
            id: string;
            /** The user who initiated the change request. */
            requester: {
                userId: string;
                tokenId?: string | undefined;
                appId?: string | undefined;
            };
            /** Current status of the change request. */
            status: "Applied" | "Failed" | "Pending" | "Rejected";
            /** ID of the entity being changed. */
            entityId: string;
            dateCreated: string;
            dateResolved?: string | undefined;
            approvalId?: string | undefined;
            kind: "Assignment";
            operationKind: "Create" | "Delete";
            body: {
                /** ID of the permission assignment. */
                id: string;
                /** ID of the permission (also referred to as "role" in the dashboard). */
                permissionId: string;
                /** ID of the identity the permission is assigned to. Can be a user ID, a service account ID, or a personal access token (PAT) ID. */
                identityId: string;
                /** Whether this assignment is system-managed and cannot be modified. */
                isImmutable: boolean;
            };
        } | undefined;
    })[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListAssignmentsRequest = ListAssignmentsParams & { query?: ListAssignmentsQuery }

export type ListPermissionsQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
};

export type ListPermissionsResponse = {
    /** Current page items. */
    items: ({
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
    } & {
        pendingChangeRequest?: {
            /** ID of the change request. */
            id: string;
            /** The user who initiated the change request. */
            requester: {
                userId: string;
                tokenId?: string | undefined;
                appId?: string | undefined;
            };
            /** Current status of the change request. */
            status: "Applied" | "Failed" | "Pending" | "Rejected";
            /** ID of the entity being changed. */
            entityId: string;
            dateCreated: string;
            dateResolved?: string | undefined;
            approvalId?: string | undefined;
            kind: "Permission";
            operationKind: "Update";
            body: {
                /** ID of the permission (also referred to as "role" in the dashboard). */
                id: string;
                /** Human-readable name of the permission (role). */
                name: string;
                /** Current status of the permission. */
                status: "Active";
                /** List of API operations this permission grants access to. See [Permissions List](https://docs.dfns.co/core-concepts/roles-and-permissions#list-of-permissions) for available operations. */
                operations: string[];
                /** Whether this permission is system-managed and cannot be modified. */
                isImmutable: boolean;
                /** Whether this permission has been archived (soft-deleted). */
                isArchived: boolean;
            };
        } | undefined;
    })[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListPermissionsRequest = { query?: ListPermissionsQuery }

export type UpdatePermissionBody = {
    /** New name for the permission (role). */
    name?: string | undefined;
    /** New list of API operations this permission grants access to. See [Permissions List](https://docs.dfns.co/core-concepts/roles-and-permissions#list-of-permissions) for available operations. */
    operations?: (("Registry:Addresses:Create" | "Registry:Addresses:Delete" | "Registry:Addresses:Read" | "Registry:Addresses:Update" | "Registry:ContractSchemas:Create" | "Registry:ContractSchemas:Delete" | "Registry:ContractSchemas:Read" | "Auth:Logs:Read" | "Auth:Users:Create" | "Auth:Users:Read" | "Auth:Users:Update" | "Auth:Users:Activate" | "Auth:Users:Deactivate" | "Auth:Users:Delete" | "Auth:ServiceAccounts:Create" | "Auth:ServiceAccounts:Read" | "Auth:ServiceAccounts:Update" | "Auth:ServiceAccounts:Deactivate" | "Auth:ServiceAccounts:Activate" | "Auth:ServiceAccounts:Delete" | "Auth:Pats:Create" | "Auth:Register:Delegated" | "Auth:Login:Delegated" | "Auth:Recover:Delegated" | "Agreements:Acceptance:Create" | "Agreements:Acceptance:Read" | "Events:Read" | "Exchanges:Create" | "Exchanges:Read" | "Exchanges:Delete" | "Exchanges:Deposits:Create" | "Exchanges:Withdrawals:Create" | "FeeSponsors:Create" | "FeeSponsors:Read" | "FeeSponsors:Update" | "FeeSponsors:Delete" | "FeeSponsors:Use" | "Orgs:Read" | "Orgs:Update" | "Orgs:Settings:Read" | "Orgs:Settings:Update" | "Permissions:Archive" | "Permissions:Create" | "Permissions:Read" | "Permissions:Update" | "Permissions:Assign" | "Permissions:Revoke" | "Permissions:Assignments:Read" | "Policies:Archive" | "Policies:Create" | "Policies:Read" | "Policies:Update" | "Policies:Approvals:Read" | "Policies:Approvals:Approve" | "Signers:ListSigners" | "Stakes:Create" | "Stakes:Read" | "Stakes:Update" | "Swaps:Create" | "Swaps:Read" | "Payouts:Create" | "Payouts:Read" | "Payouts:Write" | "Payins:Create" | "Payins:Read" | "Allocations:Create" | "Allocations:Update" | "Allocations:Read" | "Keys:Create" | "Keys:Delete" | "Keys:Read" | "Keys:Update" | "Keys:Reuse" | "Keys:Delegate" | "Keys:Import" | "Keys:Export" | "Keys:Derive" | "Keys:ChildKeys:Create" | "Keys:Signatures:Create" | "Keys:Signatures:Read" | "KeyStores:Read" | "KeyStores:Fleets:Create" | "KeyStores:Fleets:Clone" | "KeyStores:Fleets:AddMacUser" | "KeyStores:ProofOfControl:Create" | "KeyStores:OnchainSignatures:Create" | "Networks:CantonValidators:Create" | "Networks:CantonValidators:Read" | "Networks:CantonValidators:Update" | "Networks:CantonValidators:Delete" | "Wallets:Create" | "Wallets:Read" | "Wallets:Update" | "Wallets:Tags:Add" | "Wallets:Tags:Delete" | "Wallets:Transactions:Create" | "Wallets:Transactions:Read" | "Wallets:Transactions:Abort" | "Wallets:Transfers:Create" | "Wallets:Transfers:Read" | "Wallets:Transfers:Abort" | "Wallets:Offers:Read" | "Wallets:Offers:Settle" | "Vaults:Create" | "Vaults:Read" | "Vaults:Update" | "Vaults:Tags:Add" | "Vaults:Tags:Delete" | "Vaults:Addresses:Create" | "Vaults:Balances:Unquarantine" | "Vaults:Transfers:Create" | "Webhooks:Create" | "Webhooks:Read" | "Webhooks:Update" | "Webhooks:Delete" | "Webhooks:Ping" | "Webhooks:Events:Read" | "Billing:Read" | "Billing:Write" | "Analytics:Read") | ("Alias:Create" | "Alias:Delete" | "Alias:Read" | "Alias:Update" | "Wallets:GenerateSignature" | "Wallets:BroadcastTransaction" | "Auth:Action:Sign" | "Auth:Apps:Read" | "Auth:Apps:Create" | "Auth:Apps:Update" | "Auth:Creds:Create" | "Auth:Creds:Read" | "Auth:Creds:Update" | "Auth:Creds:Code:Create" | "Auth:Types:Application" | "Auth:Types:Employee" | "Auth:Types:EndUser" | "Auth:Types:Pat" | "Auth:Types:ServiceAccount" | "Internal:Auth:Types:Staff" | "Auth:Users:Delegate" | "PermissionAssignments:Create" | "PermissionAssignments:Read" | "PermissionAssignments:Revoke"))[] | undefined;
};

export type UpdatePermissionParams = {
    /** ID of the permission (also referred to as "role" in the dashboard). */
    permissionId: string;
};

export type UpdatePermissionResponse = {
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

export type UpdatePermissionRequest = UpdatePermissionParams & { body: UpdatePermissionBody }

