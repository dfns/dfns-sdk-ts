export type CreateStakeBody = {
    kind: "Native";
    amount: string;
    walletId: string;
    provider: "Figment";
    protocol: "Babylon" | "Ethereum";
    duration?: number | undefined;
};

export type CreateStakeResponse = {
    stake: {
        id: string;
        provider: "Figment";
        providerStakeId: string;
        walletId: string;
        protocol: "Babylon" | "Ethereum";
        status: "Creating" | "Active" | "Withdrawing" | "Withdrawn";
        requester: {
            userId: string;
            tokenId?: string | undefined;
            appId?: string | undefined;
        };
        requestBody: {
            kind: "Native";
            amount: string;
            walletId: string;
            provider: "Figment";
            protocol: "Babylon" | "Ethereum";
            duration?: number | undefined;
        };
        dateCreated: string;
    };
    stakeAction: {
        id: string;
        stakeId: string;
        transactionId?: string | undefined;
        kind: "Stake" | "Unbond" | "UnbondWithdrawal" | "StakeWithdrawal";
        requester: {
            userId: string;
            tokenId?: string | undefined;
            appId?: string | undefined;
        };
        requestBody: ({
            kind: "Native";
            amount: string;
            walletId: string;
            provider: "Figment";
            protocol: "Babylon" | "Ethereum";
            duration?: number | undefined;
        }) | ({
            protocol: "Babylon";
            kind: "StakeWithdrawal";
        } | {
            protocol: "Ethereum";
            kind: "StakeWithdrawal";
        });
        dateCreated: string;
    };
};

export type CreateStakeRequest = { body: CreateStakeBody }

export type CreateStakeActionBody = {
    protocol: "Babylon";
    kind: "StakeWithdrawal";
} | {
    protocol: "Ethereum";
    kind: "StakeWithdrawal";
};

export type CreateStakeActionParams = {
    stakeId: string;
};

export type CreateStakeActionResponse = {
    stake: {
        id: string;
        provider: "Figment";
        providerStakeId: string;
        walletId: string;
        protocol: "Babylon" | "Ethereum";
        status: "Creating" | "Active" | "Withdrawing" | "Withdrawn";
        requester: {
            userId: string;
            tokenId?: string | undefined;
            appId?: string | undefined;
        };
        requestBody: {
            kind: "Native";
            amount: string;
            walletId: string;
            provider: "Figment";
            protocol: "Babylon" | "Ethereum";
            duration?: number | undefined;
        };
        dateCreated: string;
    };
    stakeAction: {
        id: string;
        stakeId: string;
        transactionId?: string | undefined;
        kind: "Stake" | "Unbond" | "UnbondWithdrawal" | "StakeWithdrawal";
        requester: {
            userId: string;
            tokenId?: string | undefined;
            appId?: string | undefined;
        };
        requestBody: ({
            kind: "Native";
            amount: string;
            walletId: string;
            provider: "Figment";
            protocol: "Babylon" | "Ethereum";
            duration?: number | undefined;
        }) | ({
            protocol: "Babylon";
            kind: "StakeWithdrawal";
        } | {
            protocol: "Ethereum";
            kind: "StakeWithdrawal";
        });
        dateCreated: string;
    };
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

export type ListStakeActionsQuery = {
    limit?: number | undefined;
    paginationToken?: string | undefined;
};

export type ListStakeActionsResponse = {
    items: {
        id: string;
        stakeId: string;
        transactionId?: string | undefined;
        kind: "Stake" | "Unbond" | "UnbondWithdrawal" | "StakeWithdrawal";
        requester: {
            userId: string;
            tokenId?: string | undefined;
            appId?: string | undefined;
        };
        requestBody: ({
            kind: "Native";
            amount: string;
            walletId: string;
            provider: "Figment";
            protocol: "Babylon" | "Ethereum";
            duration?: number | undefined;
        }) | ({
            protocol: "Babylon";
            kind: "StakeWithdrawal";
        } | {
            protocol: "Ethereum";
            kind: "StakeWithdrawal";
        });
        dateCreated: string;
    }[];
    nextPageToken?: string | undefined;
};

export type ListStakeActionsRequest = { query?: ListStakeActionsQuery }

export type ListStakesQuery = {
    limit?: number | undefined;
    paginationToken?: string | undefined;
};

export type ListStakesResponse = {
    items: {
        id: string;
        provider: "Figment";
        providerStakeId: string;
        walletId: string;
        protocol: "Babylon" | "Ethereum";
        status: "Creating" | "Active" | "Withdrawing" | "Withdrawn";
        requester: {
            userId: string;
            tokenId?: string | undefined;
            appId?: string | undefined;
        };
        requestBody: {
            kind: "Native";
            amount: string;
            walletId: string;
            provider: "Figment";
            protocol: "Babylon" | "Ethereum";
            duration?: number | undefined;
        };
        dateCreated: string;
    }[];
    nextPageToken?: string | undefined;
};

export type ListStakesRequest = { query?: ListStakesQuery }

