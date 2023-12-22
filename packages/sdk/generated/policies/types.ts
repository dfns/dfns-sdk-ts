export type ArchivePolicyParams = {
    policyId: string;
};

export type ArchivePolicyResponse = {
    id: string;
    orgId: string;
    requester: {
        userId: string;
        tokenId: string;
        appId: string;
    };
    kind: "Policy";
    operationKind: "Create" | "Update" | "Delete";
    status: "Applied" | "Failed" | "Pending" | "Rejected";
    entityId: string;
    body: {
        [x: string]: unknown;
    };
    dateCreated: Date;
    dateResolved: Date;
};

export type ArchivePolicyRequest = ArchivePolicyParams

export type CreateApprovalDecisionBody = {
    value: "Approved" | "Denied";
    reason?: string | undefined;
};

export type CreateApprovalDecisionResponse = {
    id: string;
    orgId: string;
    initiatorId: string;
    activityId: string;
    activityKind: string;
    activity: {
        [x: string]: unknown;
    };
    status: "Pending" | "Approved" | "Denied" | "AutoApproved" | "Expired";
    expirationDate?: string | undefined;
    dateCreated?: string | undefined;
    dateUpdated: string;
    dateResolved?: string | undefined;
    evaluatedPolicies: {
        policyId: string;
        triggerStatus: "Triggered" | "Skipped";
        reason: string;
    }[];
    decisions: {
        userId: string;
        dateActioned: string;
        reason: string | null;
        value: "Approved" | "Denied";
    }[];
};

export type CreateApprovalDecisionRequest = { body: CreateApprovalDecisionBody }

export type CreatePolicyBody = {
    name: string;
    approvalGroups: {
        name?: string | undefined;
        quorum: number;
        approvers?: {
            [x: string]: {
                [x: string]: string[];
            };
        } | undefined;
    }[];
    autoRejectTimeout?: number | undefined;
    activityKind: "Permissions:Assign";
    rule: {
        kind: "AlwaysRequireApproval";
        configuration: {};
    };
    filters?: {
        [x: string]: {
            [x: string]: string[];
        };
    } | undefined;
} | {
    name: string;
    approvalGroups: {
        name?: string | undefined;
        quorum: number;
        approvers?: {
            [x: string]: {
                [x: string]: string[];
            };
        } | undefined;
    }[];
    autoRejectTimeout?: number | undefined;
    activityKind: "Permissions:Modify";
    rule: {
        kind: "AlwaysRequireApproval";
        configuration: {};
    };
    filters?: {
        [x: string]: {
            [x: string]: string[];
        };
    } | undefined;
} | {
    name: string;
    approvalGroups: {
        name?: string | undefined;
        quorum: number;
        approvers?: {
            [x: string]: {
                [x: string]: string[];
            };
        } | undefined;
    }[];
    autoRejectTimeout?: number | undefined;
    activityKind: "Policies:Modify";
    rule: {
        kind: "AlwaysRequireApproval";
        configuration: {};
    };
    filters?: {
        [x: string]: {
            [x: string]: string[];
        };
    } | undefined;
} | {
    name: string;
    approvalGroups: {
        name?: string | undefined;
        quorum: number;
        approvers?: {
            [x: string]: {
                [x: string]: string[];
            };
        } | undefined;
    }[];
    autoRejectTimeout?: number | undefined;
    activityKind: "Wallets:Sign";
    rule: {
        kind: "AlwaysRequireApproval";
        configuration: {};
    } | {
        kind: "AmountLimit";
        configuration: {
            limit: number;
            currency: "EUR" | "USD";
        };
    };
    filters?: {
        [x: string]: {
            [x: string]: string[];
        };
    } | undefined;
};

export type CreatePolicyResponse = {
    id: string;
    orgId: string;
    requester: {
        userId: string;
        tokenId: string;
        appId: string;
    };
    kind: "Policy";
    operationKind: "Create" | "Update" | "Delete";
    status: "Applied" | "Failed" | "Pending" | "Rejected";
    entityId: string;
    body: {
        [x: string]: unknown;
    };
    dateCreated: Date;
    dateResolved: Date;
};

export type CreatePolicyRequest = { body: CreatePolicyBody }

export type GetPolicyParams = {
    policyId: string;
};

export type GetPolicyResponse = ({
    name: string;
    approvalGroups: {
        name?: string | undefined;
        quorum: number;
        approvers?: {
            [x: string]: {
                [x: string]: string[];
            };
        } | undefined;
    }[];
    autoRejectTimeout?: number | undefined;
    activityKind: "Permissions:Assign";
    rule: {
        kind: "AlwaysRequireApproval";
        configuration: {};
    };
    filters?: {
        [x: string]: {
            [x: string]: string[];
        };
    } | undefined;
} | {
    name: string;
    approvalGroups: {
        name?: string | undefined;
        quorum: number;
        approvers?: {
            [x: string]: {
                [x: string]: string[];
            };
        } | undefined;
    }[];
    autoRejectTimeout?: number | undefined;
    activityKind: "Permissions:Modify";
    rule: {
        kind: "AlwaysRequireApproval";
        configuration: {};
    };
    filters?: {
        [x: string]: {
            [x: string]: string[];
        };
    } | undefined;
} | {
    name: string;
    approvalGroups: {
        name?: string | undefined;
        quorum: number;
        approvers?: {
            [x: string]: {
                [x: string]: string[];
            };
        } | undefined;
    }[];
    autoRejectTimeout?: number | undefined;
    activityKind: "Policies:Modify";
    rule: {
        kind: "AlwaysRequireApproval";
        configuration: {};
    };
    filters?: {
        [x: string]: {
            [x: string]: string[];
        };
    } | undefined;
} | {
    name: string;
    approvalGroups: {
        name?: string | undefined;
        quorum: number;
        approvers?: {
            [x: string]: {
                [x: string]: string[];
            };
        } | undefined;
    }[];
    autoRejectTimeout?: number | undefined;
    activityKind: "Wallets:Sign";
    rule: {
        kind: "AlwaysRequireApproval";
        configuration: {};
    } | {
        kind: "AmountLimit";
        configuration: {
            limit: number;
            currency: "EUR" | "USD";
        };
    };
    filters?: {
        [x: string]: {
            [x: string]: string[];
        };
    } | undefined;
}) & {
    id: string;
    status: "Active" | "Archived";
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
};

export type GetPolicyRequest = GetPolicyParams

export type ListApprovalsQuery = {
    limit?: string | undefined;
    paginationToken?: string | undefined;
    status?: ("Pending" | "Approved" | "Denied" | "AutoApproved" | "Expired") | undefined;
    triggerStatus?: ("Triggered" | "Skipped") | undefined;
    initiatorId?: string | undefined;
    approverId?: string | undefined;
};

export type ListApprovalsResponse = {
    items: {
        id: string;
        orgId: string;
        initiatorId: string;
        activityId: string;
        activityKind: string;
        activity: {
            [x: string]: unknown;
        };
        status: "Pending" | "Approved" | "Denied" | "AutoApproved" | "Expired";
        expirationDate?: string | undefined;
        dateCreated?: string | undefined;
        dateUpdated: string;
        dateResolved?: string | undefined;
        evaluatedPolicies: {
            policyId: string;
            triggerStatus: "Triggered" | "Skipped";
            reason: string;
        }[];
        decisions: {
            userId: string;
            dateActioned: string;
            reason: string | null;
            value: "Approved" | "Denied";
        }[];
    }[];
    nextPageToken?: string | undefined;
};

export type ListApprovalsRequest = { query?: ListApprovalsQuery }

export type ListPoliciesQuery = {
    limit?: string | undefined;
    paginationToken?: string | undefined;
};

export type ListPoliciesResponse = {
    items: (({
        name: string;
        approvalGroups: {
            name?: string | undefined;
            quorum: number;
            approvers?: {
                [x: string]: {
                    [x: string]: string[];
                };
            } | undefined;
        }[];
        autoRejectTimeout?: number | undefined;
        activityKind: "Permissions:Assign";
        rule: {
            kind: "AlwaysRequireApproval";
            configuration: {};
        };
        filters?: {
            [x: string]: {
                [x: string]: string[];
            };
        } | undefined;
    } | {
        name: string;
        approvalGroups: {
            name?: string | undefined;
            quorum: number;
            approvers?: {
                [x: string]: {
                    [x: string]: string[];
                };
            } | undefined;
        }[];
        autoRejectTimeout?: number | undefined;
        activityKind: "Permissions:Modify";
        rule: {
            kind: "AlwaysRequireApproval";
            configuration: {};
        };
        filters?: {
            [x: string]: {
                [x: string]: string[];
            };
        } | undefined;
    } | {
        name: string;
        approvalGroups: {
            name?: string | undefined;
            quorum: number;
            approvers?: {
                [x: string]: {
                    [x: string]: string[];
                };
            } | undefined;
        }[];
        autoRejectTimeout?: number | undefined;
        activityKind: "Policies:Modify";
        rule: {
            kind: "AlwaysRequireApproval";
            configuration: {};
        };
        filters?: {
            [x: string]: {
                [x: string]: string[];
            };
        } | undefined;
    } | {
        name: string;
        approvalGroups: {
            name?: string | undefined;
            quorum: number;
            approvers?: {
                [x: string]: {
                    [x: string]: string[];
                };
            } | undefined;
        }[];
        autoRejectTimeout?: number | undefined;
        activityKind: "Wallets:Sign";
        rule: {
            kind: "AlwaysRequireApproval";
            configuration: {};
        } | {
            kind: "AmountLimit";
            configuration: {
                limit: number;
                currency: "EUR" | "USD";
            };
        };
        filters?: {
            [x: string]: {
                [x: string]: string[];
            };
        } | undefined;
    }) & {
        id: string;
        status: "Active" | "Archived";
        dateCreated?: string | undefined;
        dateUpdated?: string | undefined;
    })[];
    nextPageToken?: string | undefined;
};

export type ListPoliciesRequest = { query?: ListPoliciesQuery }

export type UpdatePolicyBody = {
    name: string;
    approvalGroups: {
        name?: string | undefined;
        quorum: number;
        approvers?: {
            [x: string]: {
                [x: string]: string[];
            };
        } | undefined;
    }[];
    autoRejectTimeout?: number | undefined;
    activityKind: "Permissions:Assign";
    rule: {
        kind: "AlwaysRequireApproval";
        configuration: {};
    };
    filters?: {
        [x: string]: {
            [x: string]: string[];
        };
    } | undefined;
} | {
    name: string;
    approvalGroups: {
        name?: string | undefined;
        quorum: number;
        approvers?: {
            [x: string]: {
                [x: string]: string[];
            };
        } | undefined;
    }[];
    autoRejectTimeout?: number | undefined;
    activityKind: "Permissions:Modify";
    rule: {
        kind: "AlwaysRequireApproval";
        configuration: {};
    };
    filters?: {
        [x: string]: {
            [x: string]: string[];
        };
    } | undefined;
} | {
    name: string;
    approvalGroups: {
        name?: string | undefined;
        quorum: number;
        approvers?: {
            [x: string]: {
                [x: string]: string[];
            };
        } | undefined;
    }[];
    autoRejectTimeout?: number | undefined;
    activityKind: "Policies:Modify";
    rule: {
        kind: "AlwaysRequireApproval";
        configuration: {};
    };
    filters?: {
        [x: string]: {
            [x: string]: string[];
        };
    } | undefined;
} | {
    name: string;
    approvalGroups: {
        name?: string | undefined;
        quorum: number;
        approvers?: {
            [x: string]: {
                [x: string]: string[];
            };
        } | undefined;
    }[];
    autoRejectTimeout?: number | undefined;
    activityKind: "Wallets:Sign";
    rule: {
        kind: "AlwaysRequireApproval";
        configuration: {};
    } | {
        kind: "AmountLimit";
        configuration: {
            limit: number;
            currency: "EUR" | "USD";
        };
    };
    filters?: {
        [x: string]: {
            [x: string]: string[];
        };
    } | undefined;
};

export type UpdatePolicyParams = {
    policyId: string;
};

export type UpdatePolicyResponse = {
    id: string;
    orgId: string;
    requester: {
        userId: string;
        tokenId: string;
        appId: string;
    };
    kind: "Policy";
    operationKind: "Create" | "Update" | "Delete";
    status: "Applied" | "Failed" | "Pending" | "Rejected";
    entityId: string;
    body: {
        [x: string]: unknown;
    };
    dateCreated: Date;
    dateResolved: Date;
};

export type UpdatePolicyRequest = UpdatePolicyParams & { body: UpdatePolicyBody }

