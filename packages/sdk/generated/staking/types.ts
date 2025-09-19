export type CreateStakeBody = ({
    protocol: "Babylon";
    walletId: string;
    provider: "Figment";
    amount: string;
    duration: number;
} | {
    protocol: "Ethereum";
    walletId: string;
    provider: "Figment";
    amount: string;
} | {
    protocol: "Iota";
    walletId: string;
    validator: string;
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
    requester: {
        userId: string;
        tokenId?: string | undefined;
    };
    requestBody: ({
        protocol: "Babylon";
        walletId: string;
        provider: "Figment";
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        walletId: string;
        provider: "Figment";
        amount: string;
    } | {
        protocol: "Iota";
        walletId: string;
        validator: string;
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
    requester: {
        userId: string;
        tokenId?: string | undefined;
    };
    requestBody: ({
        protocol: "Babylon";
        walletId: string;
        provider: "Figment";
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        walletId: string;
        provider: "Figment";
        amount: string;
    } | {
        protocol: "Iota";
        walletId: string;
        validator: string;
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
    requester: {
        userId: string;
        tokenId?: string | undefined;
    };
    requestBody: ({
        protocol: "Babylon";
        walletId: string;
        provider: "Figment";
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        walletId: string;
        provider: "Figment";
        amount: string;
    } | {
        protocol: "Iota";
        walletId: string;
        validator: string;
        amount: string;
        lockedIotas?: string[] | undefined;
    }) & {
        externalId?: string | undefined;
    };
    dateCreated: string;
    protocol: "Ethereum";
    data: {
        validators: {
            pubkey: string;
            withdrawalAddress: string;
        }[];
    };
}) & {
    actions: {
        id: string;
        stakeId: string;
        transactionId?: string | undefined;
        signatureId?: string | undefined;
        transactionHash?: string | undefined;
        kind: "Stake" | "Unbond" | "Deposit" | "Withdraw";
        requester: {
            userId: string;
            tokenId?: string | undefined;
        };
        requestBody: (({
            protocol: "Babylon";
            walletId: string;
            provider: "Figment";
            amount: string;
            duration: number;
        } | {
            protocol: "Ethereum";
            walletId: string;
            provider: "Figment";
            amount: string;
        } | {
            protocol: "Iota";
            walletId: string;
            validator: string;
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
        }) | ({
            protocol: "Babylon";
            kind: "Unbond";
        } | {
            protocol: "Babylon";
            kind: "Withdraw";
        }) | {
            protocol: "Ethereum";
            kind: "Withdraw";
        }) & {
            externalId?: string | undefined;
        });
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
}) | ({
    protocol: "Babylon";
    kind: "Unbond";
} | {
    protocol: "Babylon";
    kind: "Withdraw";
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
    requester: {
        userId: string;
        tokenId?: string | undefined;
    };
    requestBody: ({
        protocol: "Babylon";
        walletId: string;
        provider: "Figment";
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        walletId: string;
        provider: "Figment";
        amount: string;
    } | {
        protocol: "Iota";
        walletId: string;
        validator: string;
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
    requester: {
        userId: string;
        tokenId?: string | undefined;
    };
    requestBody: ({
        protocol: "Babylon";
        walletId: string;
        provider: "Figment";
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        walletId: string;
        provider: "Figment";
        amount: string;
    } | {
        protocol: "Iota";
        walletId: string;
        validator: string;
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
    requester: {
        userId: string;
        tokenId?: string | undefined;
    };
    requestBody: ({
        protocol: "Babylon";
        walletId: string;
        provider: "Figment";
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        walletId: string;
        provider: "Figment";
        amount: string;
    } | {
        protocol: "Iota";
        walletId: string;
        validator: string;
        amount: string;
        lockedIotas?: string[] | undefined;
    }) & {
        externalId?: string | undefined;
    };
    dateCreated: string;
    protocol: "Ethereum";
    data: {
        validators: {
            pubkey: string;
            withdrawalAddress: string;
        }[];
    };
}) & {
    actions: {
        id: string;
        stakeId: string;
        transactionId?: string | undefined;
        signatureId?: string | undefined;
        transactionHash?: string | undefined;
        kind: "Stake" | "Unbond" | "Deposit" | "Withdraw";
        requester: {
            userId: string;
            tokenId?: string | undefined;
        };
        requestBody: (({
            protocol: "Babylon";
            walletId: string;
            provider: "Figment";
            amount: string;
            duration: number;
        } | {
            protocol: "Ethereum";
            walletId: string;
            provider: "Figment";
            amount: string;
        } | {
            protocol: "Iota";
            walletId: string;
            validator: string;
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
        }) | ({
            protocol: "Babylon";
            kind: "Unbond";
        } | {
            protocol: "Babylon";
            kind: "Withdraw";
        }) | {
            protocol: "Ethereum";
            kind: "Withdraw";
        }) & {
            externalId?: string | undefined;
        });
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
    limit?: number | undefined;
    paginationToken?: string | undefined;
};

export type GetStakesResponse = ({
    id: string;
    provider?: ("Figment") | undefined;
    walletId: string;
    status: "Active" | "Failed" | "Staking" | "Unbonding" | "Unbond" | "Withdrawing" | "Withdrawn";
    requester: {
        userId: string;
        tokenId?: string | undefined;
    };
    requestBody: ({
        protocol: "Babylon";
        walletId: string;
        provider: "Figment";
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        walletId: string;
        provider: "Figment";
        amount: string;
    } | {
        protocol: "Iota";
        walletId: string;
        validator: string;
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
    requester: {
        userId: string;
        tokenId?: string | undefined;
    };
    requestBody: ({
        protocol: "Babylon";
        walletId: string;
        provider: "Figment";
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        walletId: string;
        provider: "Figment";
        amount: string;
    } | {
        protocol: "Iota";
        walletId: string;
        validator: string;
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
    requester: {
        userId: string;
        tokenId?: string | undefined;
    };
    requestBody: ({
        protocol: "Babylon";
        walletId: string;
        provider: "Figment";
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        walletId: string;
        provider: "Figment";
        amount: string;
    } | {
        protocol: "Iota";
        walletId: string;
        validator: string;
        amount: string;
        lockedIotas?: string[] | undefined;
    }) & {
        externalId?: string | undefined;
    };
    dateCreated: string;
    protocol: "Ethereum";
    data: {
        validators: {
            pubkey: string;
            withdrawalAddress: string;
        }[];
    };
}) & {
    actions: {
        id: string;
        stakeId: string;
        transactionId?: string | undefined;
        signatureId?: string | undefined;
        transactionHash?: string | undefined;
        kind: "Stake" | "Unbond" | "Deposit" | "Withdraw";
        requester: {
            userId: string;
            tokenId?: string | undefined;
        };
        requestBody: (({
            protocol: "Babylon";
            walletId: string;
            provider: "Figment";
            amount: string;
            duration: number;
        } | {
            protocol: "Ethereum";
            walletId: string;
            provider: "Figment";
            amount: string;
        } | {
            protocol: "Iota";
            walletId: string;
            validator: string;
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
        }) | ({
            protocol: "Babylon";
            kind: "Unbond";
        } | {
            protocol: "Babylon";
            kind: "Withdraw";
        }) | {
            protocol: "Ethereum";
            kind: "Withdraw";
        }) & {
            externalId?: string | undefined;
        });
        dateCreated: string;
    }[];
};

export type GetStakesRequest = GetStakesParams & { query?: GetStakesQuery }

export type ListStakeActionsParams = {
    stakeId: string;
};

export type ListStakeActionsQuery = {
    limit?: number | undefined;
    paginationToken?: string | undefined;
};

export type ListStakeActionsResponse = {
    items: {
        id: string;
        stakeId: string;
        transactionId?: string | undefined;
        signatureId?: string | undefined;
        transactionHash?: string | undefined;
        kind: "Stake" | "Unbond" | "Deposit" | "Withdraw";
        requester: {
            userId: string;
            tokenId?: string | undefined;
        };
        requestBody: (({
            protocol: "Babylon";
            walletId: string;
            provider: "Figment";
            amount: string;
            duration: number;
        } | {
            protocol: "Ethereum";
            walletId: string;
            provider: "Figment";
            amount: string;
        } | {
            protocol: "Iota";
            walletId: string;
            validator: string;
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
        }) | ({
            protocol: "Babylon";
            kind: "Unbond";
        } | {
            protocol: "Babylon";
            kind: "Withdraw";
        }) | {
            protocol: "Ethereum";
            kind: "Withdraw";
        }) & {
            externalId?: string | undefined;
        });
        dateCreated: string;
    }[];
    nextPageToken?: string | undefined;
};

export type ListStakeActionsRequest = ListStakeActionsParams & { query?: ListStakeActionsQuery }

export type ListStakesQuery = {
    limit?: number | undefined;
    paginationToken?: string | undefined;
};

export type ListStakesResponse = {
    items: ({
        id: string;
        provider?: ("Figment") | undefined;
        walletId: string;
        status: "Active" | "Failed" | "Staking" | "Unbonding" | "Unbond" | "Withdrawing" | "Withdrawn";
        requester: {
            userId: string;
            tokenId?: string | undefined;
        };
        requestBody: ({
            protocol: "Babylon";
            walletId: string;
            provider: "Figment";
            amount: string;
            duration: number;
        } | {
            protocol: "Ethereum";
            walletId: string;
            provider: "Figment";
            amount: string;
        } | {
            protocol: "Iota";
            walletId: string;
            validator: string;
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
        requester: {
            userId: string;
            tokenId?: string | undefined;
        };
        requestBody: ({
            protocol: "Babylon";
            walletId: string;
            provider: "Figment";
            amount: string;
            duration: number;
        } | {
            protocol: "Ethereum";
            walletId: string;
            provider: "Figment";
            amount: string;
        } | {
            protocol: "Iota";
            walletId: string;
            validator: string;
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
        requester: {
            userId: string;
            tokenId?: string | undefined;
        };
        requestBody: ({
            protocol: "Babylon";
            walletId: string;
            provider: "Figment";
            amount: string;
            duration: number;
        } | {
            protocol: "Ethereum";
            walletId: string;
            provider: "Figment";
            amount: string;
        } | {
            protocol: "Iota";
            walletId: string;
            validator: string;
            amount: string;
            lockedIotas?: string[] | undefined;
        }) & {
            externalId?: string | undefined;
        };
        dateCreated: string;
        protocol: "Ethereum";
        data: {
            validators: {
                pubkey: string;
                withdrawalAddress: string;
            }[];
        };
    })[];
    nextPageToken?: string | undefined;
};

export type ListStakesRequest = { query?: ListStakesQuery }

