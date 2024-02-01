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
    resourceId?: (string | undefined) | null;
    status: "Active";
    predicateIds?: string[] | undefined;
    isImmutable: boolean;
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    isArchived: boolean;
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
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
};

export type CreateAssignmentRequest = CreateAssignmentParams & { body: CreateAssignmentBody }

export type CreatePermissionBody = {
    name: string;
    operations: ("ApiKeys:Create" | "ApiKeys:Read" | "ApiKeys:Revoke" | "AssetAccounts:Archive" | "AssetAccounts:Create" | "AssetAccounts:Read" | "Auth:Action:Sign" | "Auth:Apps:Create" | "Auth:Apps:Read" | "Auth:Apps:Update" | "Auth:Creds:Create" | "Auth:Creds:Read" | "Auth:Creds:Update" | "Auth:Types:Application" | "Auth:Types:Employee" | "Auth:Types:EndUser" | "Auth:Types:Pat" | "Auth:Types:ServiceAccount" | "Auth:Users:Create" | "Auth:Users:Delegate" | "Auth:Users:Read" | "Auth:Users:Update" | "Balances:Read" | "CallbackEvents:Read" | "CallbackSubscriptions:Archive" | "CallbackSubscriptions:Create" | "CallbackSubscriptions:Read" | "Employees:Read" | "Payments:Create" | "Payments:Read" | "PermissionAssignments" | "PermissionAssignments:Create" | "PermissionAssignments:Read" | "PermissionAssignments:Revoke" | "PermissionPredicates" | "PermissionPredicates:Archive" | "PermissionPredicates:Create" | "PermissionPredicates:Read" | "PermissionPredicates:Update" | "Permissions:Archive" | "Permissions:Create" | "Permissions:Read" | "Permissions:Update" | "Policies:Archive" | "Policies:Create" | "Policies:Read" | "Policies:Update" | "Policies:Approvals:Read" | "Policies:Approvals:Approve" | "PolicyControlExecutions:Read" | "PolicyControlExecutions:Update" | "PolicyControls:Archive" | "PolicyControls:Create" | "PolicyControls:Read" | "PolicyControls:Update" | "PolicyRules:Archive" | "PolicyRules:Create" | "PolicyRules:Read" | "PolicyRules:Update" | "PublicKeyAddresses:Read" | "PublicKeys:Create" | "PublicKeys:Read" | "Signatures:Create" | "Signatures:Read" | "Signers:ListSigners" | "Transactions:Create" | "Transactions:Read" | "Wallets:BroadcastTransaction" | "Wallets:Create" | "Wallets:Delegate" | "Wallets:Export" | "Wallets:GenerateSignature" | "Wallets:Import" | "Wallets:Read" | "Wallets:ReadSignature" | "Wallets:ReadTransaction" | "Wallets:ReadTransfer" | "Wallets:TransferAsset" | "Wallets:Update" | "Webhooks:Create" | "Webhooks:Read" | "Webhooks:Update" | "Webhooks:Delete" | "Webhooks:Ping" | "Webhooks:Events:Read")[];
};

export type CreatePermissionResponse = {
    id: string;
    name: string;
    operations: string[];
    resourceId?: (string | undefined) | null;
    status: "Active";
    predicateIds?: string[] | undefined;
    isImmutable: boolean;
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    isArchived: boolean;
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
    resourceId?: (string | undefined) | null;
    status: "Active";
    predicateIds?: string[] | undefined;
    isImmutable: boolean;
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    isArchived: boolean;
};

export type GetPermissionRequest = GetPermissionParams

export type ListAssignmentsParams = {
    permissionId: string;
};

export type ListAssignmentsResponse = {
    items: {
        id: string;
        permissionId: string;
        identityId: string;
        isImmutable: boolean;
        dateCreated?: string | undefined;
        dateUpdated?: string | undefined;
    }[];
    nextPageToken?: string | undefined;
};

export type ListAssignmentsRequest = ListAssignmentsParams

export type ListPermissionsQuery = {
    limit?: string | undefined;
    paginationToken?: string | undefined;
};

export type ListPermissionsResponse = {
    items: {
        id: string;
        name: string;
        operations: string[];
        resourceId?: (string | undefined) | null;
        status: "Active";
        predicateIds?: string[] | undefined;
        isImmutable: boolean;
        dateCreated?: string | undefined;
        dateUpdated?: string | undefined;
        isArchived: boolean;
    }[];
    nextPageToken?: string | undefined;
};

export type ListPermissionsRequest = { query?: ListPermissionsQuery }

export type UpdatePermissionBody = {
    name?: string | undefined;
    operations?: ("ApiKeys:Create" | "ApiKeys:Read" | "ApiKeys:Revoke" | "AssetAccounts:Archive" | "AssetAccounts:Create" | "AssetAccounts:Read" | "Auth:Action:Sign" | "Auth:Apps:Create" | "Auth:Apps:Read" | "Auth:Apps:Update" | "Auth:Creds:Create" | "Auth:Creds:Read" | "Auth:Creds:Update" | "Auth:Types:Application" | "Auth:Types:Employee" | "Auth:Types:EndUser" | "Auth:Types:Pat" | "Auth:Types:ServiceAccount" | "Auth:Users:Create" | "Auth:Users:Delegate" | "Auth:Users:Read" | "Auth:Users:Update" | "Balances:Read" | "CallbackEvents:Read" | "CallbackSubscriptions:Archive" | "CallbackSubscriptions:Create" | "CallbackSubscriptions:Read" | "Employees:Read" | "Payments:Create" | "Payments:Read" | "PermissionAssignments" | "PermissionAssignments:Create" | "PermissionAssignments:Read" | "PermissionAssignments:Revoke" | "PermissionPredicates" | "PermissionPredicates:Archive" | "PermissionPredicates:Create" | "PermissionPredicates:Read" | "PermissionPredicates:Update" | "Permissions:Archive" | "Permissions:Create" | "Permissions:Read" | "Permissions:Update" | "Policies:Archive" | "Policies:Create" | "Policies:Read" | "Policies:Update" | "Policies:Approvals:Read" | "Policies:Approvals:Approve" | "PolicyControlExecutions:Read" | "PolicyControlExecutions:Update" | "PolicyControls:Archive" | "PolicyControls:Create" | "PolicyControls:Read" | "PolicyControls:Update" | "PolicyRules:Archive" | "PolicyRules:Create" | "PolicyRules:Read" | "PolicyRules:Update" | "PublicKeyAddresses:Read" | "PublicKeys:Create" | "PublicKeys:Read" | "Signatures:Create" | "Signatures:Read" | "Signers:ListSigners" | "Transactions:Create" | "Transactions:Read" | "Wallets:BroadcastTransaction" | "Wallets:Create" | "Wallets:Delegate" | "Wallets:Export" | "Wallets:GenerateSignature" | "Wallets:Import" | "Wallets:Read" | "Wallets:ReadSignature" | "Wallets:ReadTransaction" | "Wallets:ReadTransfer" | "Wallets:TransferAsset" | "Wallets:Update" | "Webhooks:Create" | "Webhooks:Read" | "Webhooks:Update" | "Webhooks:Delete" | "Webhooks:Ping" | "Webhooks:Events:Read")[] | undefined;
};

export type UpdatePermissionParams = {
    permissionId: string;
};

export type UpdatePermissionResponse = {
    id: string;
    name: string;
    operations: string[];
    resourceId?: (string | undefined) | null;
    status: "Active";
    predicateIds?: string[] | undefined;
    isImmutable: boolean;
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    isArchived: boolean;
};

export type UpdatePermissionRequest = UpdatePermissionParams & { body: UpdatePermissionBody }

