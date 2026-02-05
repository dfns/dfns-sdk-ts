export type CreateStakeBody = ({
    protocol: "Ethereum";
    /** Id of the Dfns wallet making the deposit (`wa-...`). */
    walletId: string;
    /** Staking Provider */
    provider: "Figment";
    /** Transaction amount denominated in min units */
    amount: string;
} | {
    protocol: "Iota";
    /** Id of the Dfns wallet making the deposit (`wa-...`). */
    walletId: string;
    validator: string;
    /** Transaction amount denominated in min units */
    amount: string;
    lockedIotas?: string[] | undefined;
}) & {
    externalId?: string | undefined;
};

export type CreateStakeResponse = ({
    id: string;
    provider?: ("Figment") | undefined;
    walletId: string;
    status: "Active" | "Failed" | "Staking" | "Unbonding" | "Unbond" | "Withdrawing" | "Withdrawn";
    /** The user who initiated the request. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    requestBody: ({
        protocol: "Babylon";
        /** Id of the Dfns wallet making the deposit (`wa-...`). */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        /** Id of the Dfns wallet making the deposit (`wa-...`). */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
    } | {
        protocol: "Iota";
        /** Id of the Dfns wallet making the deposit (`wa-...`). */
        walletId: string;
        validator: string;
        /** Transaction amount denominated in min units */
        amount: string;
        lockedIotas?: string[] | undefined;
    }) & {
        externalId?: string | undefined;
    };
    dateCreated: string;
    protocol: "Babylon";
    data: {
        finalityProviders: string[];
        covenantPubkeys: string[];
        magicBytes: string;
        covenantThreshold: number;
        minUnbondingTime: number;
        lockHeight: number;
    };
} | {
    id: string;
    provider?: ("Figment") | undefined;
    walletId: string;
    status: "Active" | "Failed" | "Staking" | "Unbonding" | "Unbond" | "Withdrawing" | "Withdrawn";
    /** The user who initiated the request. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    requestBody: ({
        protocol: "Babylon";
        /** Id of the Dfns wallet making the deposit (`wa-...`). */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        /** Id of the Dfns wallet making the deposit (`wa-...`). */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
    } | {
        protocol: "Iota";
        /** Id of the Dfns wallet making the deposit (`wa-...`). */
        walletId: string;
        validator: string;
        /** Transaction amount denominated in min units */
        amount: string;
        lockedIotas?: string[] | undefined;
    }) & {
        externalId?: string | undefined;
    };
    dateCreated: string;
    protocol: "Iota";
    data: {
        kind: "Iota" | "LockedIota";
        stakedObjects?: {
            id: string;
            amount: string;
            expirationDate?: string | undefined;
        }[] | undefined;
        amount: string;
        validator: string;
    };
} | {
    id: string;
    provider?: ("Figment") | undefined;
    walletId: string;
    status: "Active" | "Failed" | "Staking" | "Unbonding" | "Unbond" | "Withdrawing" | "Withdrawn";
    /** The user who initiated the request. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    requestBody: ({
        protocol: "Babylon";
        /** Id of the Dfns wallet making the deposit (`wa-...`). */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        /** Id of the Dfns wallet making the deposit (`wa-...`). */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
    } | {
        protocol: "Iota";
        /** Id of the Dfns wallet making the deposit (`wa-...`). */
        walletId: string;
        validator: string;
        /** Transaction amount denominated in min units */
        amount: string;
        lockedIotas?: string[] | undefined;
    }) & {
        externalId?: string | undefined;
    };
    dateCreated: string;
    protocol: "Ethereum";
    data: {
        validator: {
            pubkey: string;
            withdrawalAddress: string;
        };
    } | null;
}) & {
    actions: {
        id: string;
        stakeId: string;
        status: "PendingPolicyApproval" | "InProgress" | "Completed" | "Failed" | "Rejected";
        transactionId?: string | undefined;
        signatureId?: string | undefined;
        transactionHash?: string | undefined;
        kind: "Stake" | "Unbond" | "Deposit" | "Withdraw";
        /** The user who initiated the request. */
        requester: {
            /** User id. */
            userId: string;
            /** Token id. */
            tokenId?: string | undefined;
        };
        requestBody: (({
            protocol: "Babylon";
            /** Id of the Dfns wallet making the deposit (`wa-...`). */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
            duration: number;
        } | {
            protocol: "Ethereum";
            /** Id of the Dfns wallet making the deposit (`wa-...`). */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
        } | {
            protocol: "Iota";
            /** Id of the Dfns wallet making the deposit (`wa-...`). */
            walletId: string;
            validator: string;
            /** Transaction amount denominated in min units */
            amount: string;
            lockedIotas?: string[] | undefined;
        }) & {
            externalId?: string | undefined;
        }) | ((({
            protocol: "Iota";
            kind: "Withdraw";
            amount: string;
        } | {
            protocol: "Iota";
            kind: "Deposit";
            amount: string;
            lockedIotas?: string[] | undefined;
        }) | {
            protocol: "Ethereum";
            kind: "Withdraw";
        }) & {
            externalId?: string | undefined;
        });
        /** The failure reason, if any. Only present when status is Failed. */
        failureReason?: string | undefined;
        dateCreated: string;
    }[];
};

export type CreateStakeRequest = { body: CreateStakeBody }

export type CreateStakeActionBody = (({
    protocol: "Iota";
    kind: "Withdraw";
    amount: string;
} | {
    protocol: "Iota";
    kind: "Deposit";
    amount: string;
    lockedIotas?: string[] | undefined;
}) | {
    protocol: "Ethereum";
    kind: "Withdraw";
}) & {
    externalId?: string | undefined;
};

export type CreateStakeActionParams = {
    stakeId: string;
};

export type CreateStakeActionResponse = ({
    id: string;
    provider?: ("Figment") | undefined;
    walletId: string;
    status: "Active" | "Failed" | "Staking" | "Unbonding" | "Unbond" | "Withdrawing" | "Withdrawn";
    /** The user who initiated the request. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    requestBody: ({
        protocol: "Babylon";
        /** Id of the Dfns wallet making the deposit (`wa-...`). */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        /** Id of the Dfns wallet making the deposit (`wa-...`). */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
    } | {
        protocol: "Iota";
        /** Id of the Dfns wallet making the deposit (`wa-...`). */
        walletId: string;
        validator: string;
        /** Transaction amount denominated in min units */
        amount: string;
        lockedIotas?: string[] | undefined;
    }) & {
        externalId?: string | undefined;
    };
    dateCreated: string;
    protocol: "Babylon";
    data: {
        finalityProviders: string[];
        covenantPubkeys: string[];
        magicBytes: string;
        covenantThreshold: number;
        minUnbondingTime: number;
        lockHeight: number;
    };
} | {
    id: string;
    provider?: ("Figment") | undefined;
    walletId: string;
    status: "Active" | "Failed" | "Staking" | "Unbonding" | "Unbond" | "Withdrawing" | "Withdrawn";
    /** The user who initiated the request. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    requestBody: ({
        protocol: "Babylon";
        /** Id of the Dfns wallet making the deposit (`wa-...`). */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        /** Id of the Dfns wallet making the deposit (`wa-...`). */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
    } | {
        protocol: "Iota";
        /** Id of the Dfns wallet making the deposit (`wa-...`). */
        walletId: string;
        validator: string;
        /** Transaction amount denominated in min units */
        amount: string;
        lockedIotas?: string[] | undefined;
    }) & {
        externalId?: string | undefined;
    };
    dateCreated: string;
    protocol: "Iota";
    data: {
        kind: "Iota" | "LockedIota";
        stakedObjects?: {
            id: string;
            amount: string;
            expirationDate?: string | undefined;
        }[] | undefined;
        amount: string;
        validator: string;
    };
} | {
    id: string;
    provider?: ("Figment") | undefined;
    walletId: string;
    status: "Active" | "Failed" | "Staking" | "Unbonding" | "Unbond" | "Withdrawing" | "Withdrawn";
    /** The user who initiated the request. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    requestBody: ({
        protocol: "Babylon";
        /** Id of the Dfns wallet making the deposit (`wa-...`). */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        /** Id of the Dfns wallet making the deposit (`wa-...`). */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
    } | {
        protocol: "Iota";
        /** Id of the Dfns wallet making the deposit (`wa-...`). */
        walletId: string;
        validator: string;
        /** Transaction amount denominated in min units */
        amount: string;
        lockedIotas?: string[] | undefined;
    }) & {
        externalId?: string | undefined;
    };
    dateCreated: string;
    protocol: "Ethereum";
    data: {
        validator: {
            pubkey: string;
            withdrawalAddress: string;
        };
    } | null;
}) & {
    actions: {
        id: string;
        stakeId: string;
        status: "PendingPolicyApproval" | "InProgress" | "Completed" | "Failed" | "Rejected";
        transactionId?: string | undefined;
        signatureId?: string | undefined;
        transactionHash?: string | undefined;
        kind: "Stake" | "Unbond" | "Deposit" | "Withdraw";
        /** The user who initiated the request. */
        requester: {
            /** User id. */
            userId: string;
            /** Token id. */
            tokenId?: string | undefined;
        };
        requestBody: (({
            protocol: "Babylon";
            /** Id of the Dfns wallet making the deposit (`wa-...`). */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
            duration: number;
        } | {
            protocol: "Ethereum";
            /** Id of the Dfns wallet making the deposit (`wa-...`). */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
        } | {
            protocol: "Iota";
            /** Id of the Dfns wallet making the deposit (`wa-...`). */
            walletId: string;
            validator: string;
            /** Transaction amount denominated in min units */
            amount: string;
            lockedIotas?: string[] | undefined;
        }) & {
            externalId?: string | undefined;
        }) | ((({
            protocol: "Iota";
            kind: "Withdraw";
            amount: string;
        } | {
            protocol: "Iota";
            kind: "Deposit";
            amount: string;
            lockedIotas?: string[] | undefined;
        }) | {
            protocol: "Ethereum";
            kind: "Withdraw";
        }) & {
            externalId?: string | undefined;
        });
        /** The failure reason, if any. Only present when status is Failed. */
        failureReason?: string | undefined;
        dateCreated: string;
    }[];
};

export type CreateStakeActionRequest = CreateStakeActionParams & { body: CreateStakeActionBody }

export type GetStakeRewardsParams = {
    stakeId: string;
};

export type GetStakeRewardsResponse = {
    symbol: string;
    balance: string;
} | undefined;

export type GetStakeRewardsRequest = GetStakeRewardsParams

export type GetStakesParams = {
    stakeId: string;
};

export type GetStakesQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
};

export type GetStakesResponse = ({
    id: string;
    provider?: ("Figment") | undefined;
    walletId: string;
    status: "Active" | "Failed" | "Staking" | "Unbonding" | "Unbond" | "Withdrawing" | "Withdrawn";
    /** The user who initiated the request. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    requestBody: ({
        protocol: "Babylon";
        /** Id of the Dfns wallet making the deposit (`wa-...`). */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        /** Id of the Dfns wallet making the deposit (`wa-...`). */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
    } | {
        protocol: "Iota";
        /** Id of the Dfns wallet making the deposit (`wa-...`). */
        walletId: string;
        validator: string;
        /** Transaction amount denominated in min units */
        amount: string;
        lockedIotas?: string[] | undefined;
    }) & {
        externalId?: string | undefined;
    };
    dateCreated: string;
    protocol: "Babylon";
    data: {
        finalityProviders: string[];
        covenantPubkeys: string[];
        magicBytes: string;
        covenantThreshold: number;
        minUnbondingTime: number;
        lockHeight: number;
    };
} | {
    id: string;
    provider?: ("Figment") | undefined;
    walletId: string;
    status: "Active" | "Failed" | "Staking" | "Unbonding" | "Unbond" | "Withdrawing" | "Withdrawn";
    /** The user who initiated the request. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    requestBody: ({
        protocol: "Babylon";
        /** Id of the Dfns wallet making the deposit (`wa-...`). */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        /** Id of the Dfns wallet making the deposit (`wa-...`). */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
    } | {
        protocol: "Iota";
        /** Id of the Dfns wallet making the deposit (`wa-...`). */
        walletId: string;
        validator: string;
        /** Transaction amount denominated in min units */
        amount: string;
        lockedIotas?: string[] | undefined;
    }) & {
        externalId?: string | undefined;
    };
    dateCreated: string;
    protocol: "Iota";
    data: {
        kind: "Iota" | "LockedIota";
        stakedObjects?: {
            id: string;
            amount: string;
            expirationDate?: string | undefined;
        }[] | undefined;
        amount: string;
        validator: string;
    };
} | {
    id: string;
    provider?: ("Figment") | undefined;
    walletId: string;
    status: "Active" | "Failed" | "Staking" | "Unbonding" | "Unbond" | "Withdrawing" | "Withdrawn";
    /** The user who initiated the request. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    requestBody: ({
        protocol: "Babylon";
        /** Id of the Dfns wallet making the deposit (`wa-...`). */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        /** Id of the Dfns wallet making the deposit (`wa-...`). */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
    } | {
        protocol: "Iota";
        /** Id of the Dfns wallet making the deposit (`wa-...`). */
        walletId: string;
        validator: string;
        /** Transaction amount denominated in min units */
        amount: string;
        lockedIotas?: string[] | undefined;
    }) & {
        externalId?: string | undefined;
    };
    dateCreated: string;
    protocol: "Ethereum";
    data: {
        validator: {
            pubkey: string;
            withdrawalAddress: string;
        };
    } | null;
}) & {
    actions: {
        id: string;
        stakeId: string;
        status: "PendingPolicyApproval" | "InProgress" | "Completed" | "Failed" | "Rejected";
        transactionId?: string | undefined;
        signatureId?: string | undefined;
        transactionHash?: string | undefined;
        kind: "Stake" | "Unbond" | "Deposit" | "Withdraw";
        /** The user who initiated the request. */
        requester: {
            /** User id. */
            userId: string;
            /** Token id. */
            tokenId?: string | undefined;
        };
        requestBody: (({
            protocol: "Babylon";
            /** Id of the Dfns wallet making the deposit (`wa-...`). */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
            duration: number;
        } | {
            protocol: "Ethereum";
            /** Id of the Dfns wallet making the deposit (`wa-...`). */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
        } | {
            protocol: "Iota";
            /** Id of the Dfns wallet making the deposit (`wa-...`). */
            walletId: string;
            validator: string;
            /** Transaction amount denominated in min units */
            amount: string;
            lockedIotas?: string[] | undefined;
        }) & {
            externalId?: string | undefined;
        }) | ((({
            protocol: "Iota";
            kind: "Withdraw";
            amount: string;
        } | {
            protocol: "Iota";
            kind: "Deposit";
            amount: string;
            lockedIotas?: string[] | undefined;
        }) | {
            protocol: "Ethereum";
            kind: "Withdraw";
        }) & {
            externalId?: string | undefined;
        });
        /** The failure reason, if any. Only present when status is Failed. */
        failureReason?: string | undefined;
        dateCreated: string;
    }[];
};

export type GetStakesRequest = GetStakesParams & { query?: GetStakesQuery }

export type ListStakeActionsParams = {
    stakeId: string;
};

export type ListStakeActionsQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
};

export type ListStakeActionsResponse = {
    items: {
        id: string;
        stakeId: string;
        status: "PendingPolicyApproval" | "InProgress" | "Completed" | "Failed" | "Rejected";
        transactionId?: string | undefined;
        signatureId?: string | undefined;
        transactionHash?: string | undefined;
        kind: "Stake" | "Unbond" | "Deposit" | "Withdraw";
        /** The user who initiated the request. */
        requester: {
            /** User id. */
            userId: string;
            /** Token id. */
            tokenId?: string | undefined;
        };
        requestBody: (({
            protocol: "Babylon";
            /** Id of the Dfns wallet making the deposit (`wa-...`). */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
            duration: number;
        } | {
            protocol: "Ethereum";
            /** Id of the Dfns wallet making the deposit (`wa-...`). */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
        } | {
            protocol: "Iota";
            /** Id of the Dfns wallet making the deposit (`wa-...`). */
            walletId: string;
            validator: string;
            /** Transaction amount denominated in min units */
            amount: string;
            lockedIotas?: string[] | undefined;
        }) & {
            externalId?: string | undefined;
        }) | ((({
            protocol: "Iota";
            kind: "Withdraw";
            amount: string;
        } | {
            protocol: "Iota";
            kind: "Deposit";
            amount: string;
            lockedIotas?: string[] | undefined;
        }) | {
            protocol: "Ethereum";
            kind: "Withdraw";
        }) & {
            externalId?: string | undefined;
        });
        /** The failure reason, if any. Only present when status is Failed. */
        failureReason?: string | undefined;
        dateCreated: string;
    }[];
    nextPageToken?: string | undefined;
};

export type ListStakeActionsRequest = ListStakeActionsParams & { query?: ListStakeActionsQuery }

export type ListStakesQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
};

export type ListStakesResponse = {
    items: ({
        id: string;
        provider?: ("Figment") | undefined;
        walletId: string;
        status: "Active" | "Failed" | "Staking" | "Unbonding" | "Unbond" | "Withdrawing" | "Withdrawn";
        /** The user who initiated the request. */
        requester: {
            /** User id. */
            userId: string;
            /** Token id. */
            tokenId?: string | undefined;
        };
        requestBody: ({
            protocol: "Babylon";
            /** Id of the Dfns wallet making the deposit (`wa-...`). */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
            duration: number;
        } | {
            protocol: "Ethereum";
            /** Id of the Dfns wallet making the deposit (`wa-...`). */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
        } | {
            protocol: "Iota";
            /** Id of the Dfns wallet making the deposit (`wa-...`). */
            walletId: string;
            validator: string;
            /** Transaction amount denominated in min units */
            amount: string;
            lockedIotas?: string[] | undefined;
        }) & {
            externalId?: string | undefined;
        };
        dateCreated: string;
        protocol: "Babylon";
        data: {
            finalityProviders: string[];
            covenantPubkeys: string[];
            magicBytes: string;
            covenantThreshold: number;
            minUnbondingTime: number;
            lockHeight: number;
        };
    } | {
        id: string;
        provider?: ("Figment") | undefined;
        walletId: string;
        status: "Active" | "Failed" | "Staking" | "Unbonding" | "Unbond" | "Withdrawing" | "Withdrawn";
        /** The user who initiated the request. */
        requester: {
            /** User id. */
            userId: string;
            /** Token id. */
            tokenId?: string | undefined;
        };
        requestBody: ({
            protocol: "Babylon";
            /** Id of the Dfns wallet making the deposit (`wa-...`). */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
            duration: number;
        } | {
            protocol: "Ethereum";
            /** Id of the Dfns wallet making the deposit (`wa-...`). */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
        } | {
            protocol: "Iota";
            /** Id of the Dfns wallet making the deposit (`wa-...`). */
            walletId: string;
            validator: string;
            /** Transaction amount denominated in min units */
            amount: string;
            lockedIotas?: string[] | undefined;
        }) & {
            externalId?: string | undefined;
        };
        dateCreated: string;
        protocol: "Iota";
        data: {
            kind: "Iota" | "LockedIota";
            stakedObjects?: {
                id: string;
                amount: string;
                expirationDate?: string | undefined;
            }[] | undefined;
            amount: string;
            validator: string;
        };
    } | {
        id: string;
        provider?: ("Figment") | undefined;
        walletId: string;
        status: "Active" | "Failed" | "Staking" | "Unbonding" | "Unbond" | "Withdrawing" | "Withdrawn";
        /** The user who initiated the request. */
        requester: {
            /** User id. */
            userId: string;
            /** Token id. */
            tokenId?: string | undefined;
        };
        requestBody: ({
            protocol: "Babylon";
            /** Id of the Dfns wallet making the deposit (`wa-...`). */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
            duration: number;
        } | {
            protocol: "Ethereum";
            /** Id of the Dfns wallet making the deposit (`wa-...`). */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
        } | {
            protocol: "Iota";
            /** Id of the Dfns wallet making the deposit (`wa-...`). */
            walletId: string;
            validator: string;
            /** Transaction amount denominated in min units */
            amount: string;
            lockedIotas?: string[] | undefined;
        }) & {
            externalId?: string | undefined;
        };
        dateCreated: string;
        protocol: "Ethereum";
        data: {
            validator: {
                pubkey: string;
                withdrawalAddress: string;
            };
        } | null;
    })[];
    nextPageToken?: string | undefined;
};

export type ListStakesRequest = { query?: ListStakesQuery }

