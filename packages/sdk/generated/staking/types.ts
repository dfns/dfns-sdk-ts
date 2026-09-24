export type CreateStakeBody = ({
    protocol: "Ethereum";
    /** Id of the Dfns wallet making the deposit. */
    walletId: string;
    /** Staking Provider */
    provider: "Figment";
    /** Transaction amount denominated in min units */
    amount: string;
} | {
    protocol: "Iota";
    /** Id of the Dfns wallet making the deposit. */
    walletId: string;
    validator: string;
    /** Transaction amount denominated in min units */
    amount: string;
    lockedIotas?: string[] | undefined;
} | {
    protocol: "Xdc";
    /** Id of the Dfns wallet making the deposit. */
    walletId: string;
    /** Coinbase address of the XDC masternode to register */
    candidate: string;
    /** Transaction amount denominated in wei (min 10,000,000 XDC) */
    amount: string;
}) & {
    externalId?: string | undefined;
};

export type CreateStakeResponse = ({
    id: string;
    /** The staking infrastructure provider used to manage the stake. */
    provider?: ("Figment") | undefined;
    /** Wallet id. */
    walletId: string;
    /** Status of the stake position.
    
    | Status | Definition |
    | --- | --- |
    | `Staking` | The stake is being created and funds are being delegated to the validator. |
    | `Active` | The stake is active and earning rewards. |
    | `Unbonding` | The stake is in the process of being unbonded (cooldown period). |
    | `Unbond` | The stake has been unbonded and is ready for withdrawal. |
    | `Withdrawing` | The staked funds are in the process of being withdrawn. |
    | `Withdrawn` | The staked funds have been fully withdrawn. |
    | `Failed` | The staking operation failed. | */
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
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
    } | {
        protocol: "Iota";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        validator: string;
        /** Transaction amount denominated in min units */
        amount: string;
        lockedIotas?: string[] | undefined;
    } | {
        protocol: "Xdc";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Coinbase address of the XDC masternode to register */
        candidate: string;
        /** Transaction amount denominated in wei (min 10,000,000 XDC) */
        amount: string;
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
    /** The staking infrastructure provider used to manage the stake. */
    provider?: ("Figment") | undefined;
    /** Wallet id. */
    walletId: string;
    /** Status of the stake position.
    
    | Status | Definition |
    | --- | --- |
    | `Staking` | The stake is being created and funds are being delegated to the validator. |
    | `Active` | The stake is active and earning rewards. |
    | `Unbonding` | The stake is in the process of being unbonded (cooldown period). |
    | `Unbond` | The stake has been unbonded and is ready for withdrawal. |
    | `Withdrawing` | The staked funds are in the process of being withdrawn. |
    | `Withdrawn` | The staked funds have been fully withdrawn. |
    | `Failed` | The staking operation failed. | */
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
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
    } | {
        protocol: "Iota";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        validator: string;
        /** Transaction amount denominated in min units */
        amount: string;
        lockedIotas?: string[] | undefined;
    } | {
        protocol: "Xdc";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Coinbase address of the XDC masternode to register */
        candidate: string;
        /** Transaction amount denominated in wei (min 10,000,000 XDC) */
        amount: string;
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
    /** The staking infrastructure provider used to manage the stake. */
    provider?: ("Figment") | undefined;
    /** Wallet id. */
    walletId: string;
    /** Status of the stake position.
    
    | Status | Definition |
    | --- | --- |
    | `Staking` | The stake is being created and funds are being delegated to the validator. |
    | `Active` | The stake is active and earning rewards. |
    | `Unbonding` | The stake is in the process of being unbonded (cooldown period). |
    | `Unbond` | The stake has been unbonded and is ready for withdrawal. |
    | `Withdrawing` | The staked funds are in the process of being withdrawn. |
    | `Withdrawn` | The staked funds have been fully withdrawn. |
    | `Failed` | The staking operation failed. | */
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
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
    } | {
        protocol: "Iota";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        validator: string;
        /** Transaction amount denominated in min units */
        amount: string;
        lockedIotas?: string[] | undefined;
    } | {
        protocol: "Xdc";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Coinbase address of the XDC masternode to register */
        candidate: string;
        /** Transaction amount denominated in wei (min 10,000,000 XDC) */
        amount: string;
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
} | {
    id: string;
    /** The staking infrastructure provider used to manage the stake. */
    provider?: ("Figment") | undefined;
    /** Wallet id. */
    walletId: string;
    /** Status of the stake position.
    
    | Status | Definition |
    | --- | --- |
    | `Staking` | The stake is being created and funds are being delegated to the validator. |
    | `Active` | The stake is active and earning rewards. |
    | `Unbonding` | The stake is in the process of being unbonded (cooldown period). |
    | `Unbond` | The stake has been unbonded and is ready for withdrawal. |
    | `Withdrawing` | The staked funds are in the process of being withdrawn. |
    | `Withdrawn` | The staked funds have been fully withdrawn. |
    | `Failed` | The staking operation failed. | */
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
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
    } | {
        protocol: "Iota";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        validator: string;
        /** Transaction amount denominated in min units */
        amount: string;
        lockedIotas?: string[] | undefined;
    } | {
        protocol: "Xdc";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Coinbase address of the XDC masternode to register */
        candidate: string;
        /** Transaction amount denominated in wei (min 10,000,000 XDC) */
        amount: string;
    }) & {
        externalId?: string | undefined;
    };
    dateCreated: string;
    protocol: "Xdc";
    data: {
        candidate: string;
        amount: string;
        proposeBlockNumber?: string | undefined;
        withdrawBlockNumber?: string | undefined;
        withdrawIndex?: string | undefined;
    };
}) & {
    actions: {
        id: string;
        stakeId: string;
        /** Status of the stake action.
        
        | Status | Definition |
        | --- | --- |
        | `PendingPolicyApproval` | The action is pending approval due to a policy applied to the wallet. |
        | `InProgress` | The action has been initiated and is being processed. |
        | `Completed` | The action has been successfully completed. |
        | `Failed` | The action has failed. Check failureReason for details. |
        | `Rejected` | The action has been rejected by a policy approval action. | */
        status: "PendingPolicyApproval" | "InProgress" | "Completed" | "Failed" | "Rejected";
        /** Deprecated. */
        transactionId?: string | undefined;
        /** Deprecated. */
        signatureId?: string | undefined;
        /** Deprecated. */
        transactionHash?: string | undefined;
        /** The type of staking action being performed.
        
        | Kind | Definition |
        | --- | --- |
        | `Stake` | Delegate funds to a validator to begin earning rewards. |
        | `Unbond` | Initiate the unbonding process to release staked funds (subject to cooldown). |
        | `Deposit` | Add additional funds to an existing stake position. |
        | `Withdraw` | Withdraw unbonded funds from the stake position. | */
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
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
            duration: number;
        } | {
            protocol: "Ethereum";
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
        } | {
            protocol: "Iota";
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            validator: string;
            /** Transaction amount denominated in min units */
            amount: string;
            lockedIotas?: string[] | undefined;
        } | {
            protocol: "Xdc";
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            /** Coinbase address of the XDC masternode to register */
            candidate: string;
            /** Transaction amount denominated in wei (min 10,000,000 XDC) */
            amount: string;
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
        } | ({
            protocol: "Xdc";
            kind: "Withdraw";
        } | {
            protocol: "Xdc";
            kind: "Unbond";
        })) & {
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
} | ({
    protocol: "Xdc";
    kind: "Withdraw";
} | {
    protocol: "Xdc";
    kind: "Unbond";
})) & {
    externalId?: string | undefined;
};

export type CreateStakeActionParams = {
    stakeId: string;
};

export type CreateStakeActionResponse = ({
    id: string;
    /** The staking infrastructure provider used to manage the stake. */
    provider?: ("Figment") | undefined;
    /** Wallet id. */
    walletId: string;
    /** Status of the stake position.
    
    | Status | Definition |
    | --- | --- |
    | `Staking` | The stake is being created and funds are being delegated to the validator. |
    | `Active` | The stake is active and earning rewards. |
    | `Unbonding` | The stake is in the process of being unbonded (cooldown period). |
    | `Unbond` | The stake has been unbonded and is ready for withdrawal. |
    | `Withdrawing` | The staked funds are in the process of being withdrawn. |
    | `Withdrawn` | The staked funds have been fully withdrawn. |
    | `Failed` | The staking operation failed. | */
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
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
    } | {
        protocol: "Iota";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        validator: string;
        /** Transaction amount denominated in min units */
        amount: string;
        lockedIotas?: string[] | undefined;
    } | {
        protocol: "Xdc";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Coinbase address of the XDC masternode to register */
        candidate: string;
        /** Transaction amount denominated in wei (min 10,000,000 XDC) */
        amount: string;
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
    /** The staking infrastructure provider used to manage the stake. */
    provider?: ("Figment") | undefined;
    /** Wallet id. */
    walletId: string;
    /** Status of the stake position.
    
    | Status | Definition |
    | --- | --- |
    | `Staking` | The stake is being created and funds are being delegated to the validator. |
    | `Active` | The stake is active and earning rewards. |
    | `Unbonding` | The stake is in the process of being unbonded (cooldown period). |
    | `Unbond` | The stake has been unbonded and is ready for withdrawal. |
    | `Withdrawing` | The staked funds are in the process of being withdrawn. |
    | `Withdrawn` | The staked funds have been fully withdrawn. |
    | `Failed` | The staking operation failed. | */
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
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
    } | {
        protocol: "Iota";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        validator: string;
        /** Transaction amount denominated in min units */
        amount: string;
        lockedIotas?: string[] | undefined;
    } | {
        protocol: "Xdc";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Coinbase address of the XDC masternode to register */
        candidate: string;
        /** Transaction amount denominated in wei (min 10,000,000 XDC) */
        amount: string;
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
    /** The staking infrastructure provider used to manage the stake. */
    provider?: ("Figment") | undefined;
    /** Wallet id. */
    walletId: string;
    /** Status of the stake position.
    
    | Status | Definition |
    | --- | --- |
    | `Staking` | The stake is being created and funds are being delegated to the validator. |
    | `Active` | The stake is active and earning rewards. |
    | `Unbonding` | The stake is in the process of being unbonded (cooldown period). |
    | `Unbond` | The stake has been unbonded and is ready for withdrawal. |
    | `Withdrawing` | The staked funds are in the process of being withdrawn. |
    | `Withdrawn` | The staked funds have been fully withdrawn. |
    | `Failed` | The staking operation failed. | */
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
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
    } | {
        protocol: "Iota";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        validator: string;
        /** Transaction amount denominated in min units */
        amount: string;
        lockedIotas?: string[] | undefined;
    } | {
        protocol: "Xdc";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Coinbase address of the XDC masternode to register */
        candidate: string;
        /** Transaction amount denominated in wei (min 10,000,000 XDC) */
        amount: string;
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
} | {
    id: string;
    /** The staking infrastructure provider used to manage the stake. */
    provider?: ("Figment") | undefined;
    /** Wallet id. */
    walletId: string;
    /** Status of the stake position.
    
    | Status | Definition |
    | --- | --- |
    | `Staking` | The stake is being created and funds are being delegated to the validator. |
    | `Active` | The stake is active and earning rewards. |
    | `Unbonding` | The stake is in the process of being unbonded (cooldown period). |
    | `Unbond` | The stake has been unbonded and is ready for withdrawal. |
    | `Withdrawing` | The staked funds are in the process of being withdrawn. |
    | `Withdrawn` | The staked funds have been fully withdrawn. |
    | `Failed` | The staking operation failed. | */
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
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
    } | {
        protocol: "Iota";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        validator: string;
        /** Transaction amount denominated in min units */
        amount: string;
        lockedIotas?: string[] | undefined;
    } | {
        protocol: "Xdc";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Coinbase address of the XDC masternode to register */
        candidate: string;
        /** Transaction amount denominated in wei (min 10,000,000 XDC) */
        amount: string;
    }) & {
        externalId?: string | undefined;
    };
    dateCreated: string;
    protocol: "Xdc";
    data: {
        candidate: string;
        amount: string;
        proposeBlockNumber?: string | undefined;
        withdrawBlockNumber?: string | undefined;
        withdrawIndex?: string | undefined;
    };
}) & {
    actions: {
        id: string;
        stakeId: string;
        /** Status of the stake action.
        
        | Status | Definition |
        | --- | --- |
        | `PendingPolicyApproval` | The action is pending approval due to a policy applied to the wallet. |
        | `InProgress` | The action has been initiated and is being processed. |
        | `Completed` | The action has been successfully completed. |
        | `Failed` | The action has failed. Check failureReason for details. |
        | `Rejected` | The action has been rejected by a policy approval action. | */
        status: "PendingPolicyApproval" | "InProgress" | "Completed" | "Failed" | "Rejected";
        /** Deprecated. */
        transactionId?: string | undefined;
        /** Deprecated. */
        signatureId?: string | undefined;
        /** Deprecated. */
        transactionHash?: string | undefined;
        /** The type of staking action being performed.
        
        | Kind | Definition |
        | --- | --- |
        | `Stake` | Delegate funds to a validator to begin earning rewards. |
        | `Unbond` | Initiate the unbonding process to release staked funds (subject to cooldown). |
        | `Deposit` | Add additional funds to an existing stake position. |
        | `Withdraw` | Withdraw unbonded funds from the stake position. | */
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
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
            duration: number;
        } | {
            protocol: "Ethereum";
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
        } | {
            protocol: "Iota";
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            validator: string;
            /** Transaction amount denominated in min units */
            amount: string;
            lockedIotas?: string[] | undefined;
        } | {
            protocol: "Xdc";
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            /** Coinbase address of the XDC masternode to register */
            candidate: string;
            /** Transaction amount denominated in wei (min 10,000,000 XDC) */
            amount: string;
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
        } | ({
            protocol: "Xdc";
            kind: "Withdraw";
        } | {
            protocol: "Xdc";
            kind: "Unbond";
        })) & {
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
    /** The staking infrastructure provider used to manage the stake. */
    provider?: ("Figment") | undefined;
    /** Wallet id. */
    walletId: string;
    /** Status of the stake position.
    
    | Status | Definition |
    | --- | --- |
    | `Staking` | The stake is being created and funds are being delegated to the validator. |
    | `Active` | The stake is active and earning rewards. |
    | `Unbonding` | The stake is in the process of being unbonded (cooldown period). |
    | `Unbond` | The stake has been unbonded and is ready for withdrawal. |
    | `Withdrawing` | The staked funds are in the process of being withdrawn. |
    | `Withdrawn` | The staked funds have been fully withdrawn. |
    | `Failed` | The staking operation failed. | */
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
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
    } | {
        protocol: "Iota";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        validator: string;
        /** Transaction amount denominated in min units */
        amount: string;
        lockedIotas?: string[] | undefined;
    } | {
        protocol: "Xdc";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Coinbase address of the XDC masternode to register */
        candidate: string;
        /** Transaction amount denominated in wei (min 10,000,000 XDC) */
        amount: string;
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
    /** The staking infrastructure provider used to manage the stake. */
    provider?: ("Figment") | undefined;
    /** Wallet id. */
    walletId: string;
    /** Status of the stake position.
    
    | Status | Definition |
    | --- | --- |
    | `Staking` | The stake is being created and funds are being delegated to the validator. |
    | `Active` | The stake is active and earning rewards. |
    | `Unbonding` | The stake is in the process of being unbonded (cooldown period). |
    | `Unbond` | The stake has been unbonded and is ready for withdrawal. |
    | `Withdrawing` | The staked funds are in the process of being withdrawn. |
    | `Withdrawn` | The staked funds have been fully withdrawn. |
    | `Failed` | The staking operation failed. | */
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
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
    } | {
        protocol: "Iota";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        validator: string;
        /** Transaction amount denominated in min units */
        amount: string;
        lockedIotas?: string[] | undefined;
    } | {
        protocol: "Xdc";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Coinbase address of the XDC masternode to register */
        candidate: string;
        /** Transaction amount denominated in wei (min 10,000,000 XDC) */
        amount: string;
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
    /** The staking infrastructure provider used to manage the stake. */
    provider?: ("Figment") | undefined;
    /** Wallet id. */
    walletId: string;
    /** Status of the stake position.
    
    | Status | Definition |
    | --- | --- |
    | `Staking` | The stake is being created and funds are being delegated to the validator. |
    | `Active` | The stake is active and earning rewards. |
    | `Unbonding` | The stake is in the process of being unbonded (cooldown period). |
    | `Unbond` | The stake has been unbonded and is ready for withdrawal. |
    | `Withdrawing` | The staked funds are in the process of being withdrawn. |
    | `Withdrawn` | The staked funds have been fully withdrawn. |
    | `Failed` | The staking operation failed. | */
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
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
    } | {
        protocol: "Iota";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        validator: string;
        /** Transaction amount denominated in min units */
        amount: string;
        lockedIotas?: string[] | undefined;
    } | {
        protocol: "Xdc";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Coinbase address of the XDC masternode to register */
        candidate: string;
        /** Transaction amount denominated in wei (min 10,000,000 XDC) */
        amount: string;
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
} | {
    id: string;
    /** The staking infrastructure provider used to manage the stake. */
    provider?: ("Figment") | undefined;
    /** Wallet id. */
    walletId: string;
    /** Status of the stake position.
    
    | Status | Definition |
    | --- | --- |
    | `Staking` | The stake is being created and funds are being delegated to the validator. |
    | `Active` | The stake is active and earning rewards. |
    | `Unbonding` | The stake is in the process of being unbonded (cooldown period). |
    | `Unbond` | The stake has been unbonded and is ready for withdrawal. |
    | `Withdrawing` | The staked funds are in the process of being withdrawn. |
    | `Withdrawn` | The staked funds have been fully withdrawn. |
    | `Failed` | The staking operation failed. | */
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
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
        duration: number;
    } | {
        protocol: "Ethereum";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Staking Provider */
        provider: "Figment";
        /** Transaction amount denominated in min units */
        amount: string;
    } | {
        protocol: "Iota";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        validator: string;
        /** Transaction amount denominated in min units */
        amount: string;
        lockedIotas?: string[] | undefined;
    } | {
        protocol: "Xdc";
        /** Id of the Dfns wallet making the deposit. */
        walletId: string;
        /** Coinbase address of the XDC masternode to register */
        candidate: string;
        /** Transaction amount denominated in wei (min 10,000,000 XDC) */
        amount: string;
    }) & {
        externalId?: string | undefined;
    };
    dateCreated: string;
    protocol: "Xdc";
    data: {
        candidate: string;
        amount: string;
        proposeBlockNumber?: string | undefined;
        withdrawBlockNumber?: string | undefined;
        withdrawIndex?: string | undefined;
    };
}) & {
    actions: {
        id: string;
        stakeId: string;
        /** Status of the stake action.
        
        | Status | Definition |
        | --- | --- |
        | `PendingPolicyApproval` | The action is pending approval due to a policy applied to the wallet. |
        | `InProgress` | The action has been initiated and is being processed. |
        | `Completed` | The action has been successfully completed. |
        | `Failed` | The action has failed. Check failureReason for details. |
        | `Rejected` | The action has been rejected by a policy approval action. | */
        status: "PendingPolicyApproval" | "InProgress" | "Completed" | "Failed" | "Rejected";
        /** Deprecated. */
        transactionId?: string | undefined;
        /** Deprecated. */
        signatureId?: string | undefined;
        /** Deprecated. */
        transactionHash?: string | undefined;
        /** The type of staking action being performed.
        
        | Kind | Definition |
        | --- | --- |
        | `Stake` | Delegate funds to a validator to begin earning rewards. |
        | `Unbond` | Initiate the unbonding process to release staked funds (subject to cooldown). |
        | `Deposit` | Add additional funds to an existing stake position. |
        | `Withdraw` | Withdraw unbonded funds from the stake position. | */
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
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
            duration: number;
        } | {
            protocol: "Ethereum";
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
        } | {
            protocol: "Iota";
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            validator: string;
            /** Transaction amount denominated in min units */
            amount: string;
            lockedIotas?: string[] | undefined;
        } | {
            protocol: "Xdc";
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            /** Coinbase address of the XDC masternode to register */
            candidate: string;
            /** Transaction amount denominated in wei (min 10,000,000 XDC) */
            amount: string;
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
        } | ({
            protocol: "Xdc";
            kind: "Withdraw";
        } | {
            protocol: "Xdc";
            kind: "Unbond";
        })) & {
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
    /** Current page items. */
    items: {
        id: string;
        stakeId: string;
        /** Status of the stake action.
        
        | Status | Definition |
        | --- | --- |
        | `PendingPolicyApproval` | The action is pending approval due to a policy applied to the wallet. |
        | `InProgress` | The action has been initiated and is being processed. |
        | `Completed` | The action has been successfully completed. |
        | `Failed` | The action has failed. Check failureReason for details. |
        | `Rejected` | The action has been rejected by a policy approval action. | */
        status: "PendingPolicyApproval" | "InProgress" | "Completed" | "Failed" | "Rejected";
        /** Deprecated. */
        transactionId?: string | undefined;
        /** Deprecated. */
        signatureId?: string | undefined;
        /** Deprecated. */
        transactionHash?: string | undefined;
        /** The type of staking action being performed.
        
        | Kind | Definition |
        | --- | --- |
        | `Stake` | Delegate funds to a validator to begin earning rewards. |
        | `Unbond` | Initiate the unbonding process to release staked funds (subject to cooldown). |
        | `Deposit` | Add additional funds to an existing stake position. |
        | `Withdraw` | Withdraw unbonded funds from the stake position. | */
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
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
            duration: number;
        } | {
            protocol: "Ethereum";
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
        } | {
            protocol: "Iota";
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            validator: string;
            /** Transaction amount denominated in min units */
            amount: string;
            lockedIotas?: string[] | undefined;
        } | {
            protocol: "Xdc";
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            /** Coinbase address of the XDC masternode to register */
            candidate: string;
            /** Transaction amount denominated in wei (min 10,000,000 XDC) */
            amount: string;
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
        } | ({
            protocol: "Xdc";
            kind: "Withdraw";
        } | {
            protocol: "Xdc";
            kind: "Unbond";
        })) & {
            externalId?: string | undefined;
        });
        /** The failure reason, if any. Only present when status is Failed. */
        failureReason?: string | undefined;
        dateCreated: string;
    }[];
    /** token to use as `paginationToken` to request the next page. */
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
    /** Current page items. */
    items: ({
        id: string;
        /** The staking infrastructure provider used to manage the stake. */
        provider?: ("Figment") | undefined;
        /** Wallet id. */
        walletId: string;
        /** Status of the stake position.
        
        | Status | Definition |
        | --- | --- |
        | `Staking` | The stake is being created and funds are being delegated to the validator. |
        | `Active` | The stake is active and earning rewards. |
        | `Unbonding` | The stake is in the process of being unbonded (cooldown period). |
        | `Unbond` | The stake has been unbonded and is ready for withdrawal. |
        | `Withdrawing` | The staked funds are in the process of being withdrawn. |
        | `Withdrawn` | The staked funds have been fully withdrawn. |
        | `Failed` | The staking operation failed. | */
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
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
            duration: number;
        } | {
            protocol: "Ethereum";
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
        } | {
            protocol: "Iota";
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            validator: string;
            /** Transaction amount denominated in min units */
            amount: string;
            lockedIotas?: string[] | undefined;
        } | {
            protocol: "Xdc";
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            /** Coinbase address of the XDC masternode to register */
            candidate: string;
            /** Transaction amount denominated in wei (min 10,000,000 XDC) */
            amount: string;
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
        /** The staking infrastructure provider used to manage the stake. */
        provider?: ("Figment") | undefined;
        /** Wallet id. */
        walletId: string;
        /** Status of the stake position.
        
        | Status | Definition |
        | --- | --- |
        | `Staking` | The stake is being created and funds are being delegated to the validator. |
        | `Active` | The stake is active and earning rewards. |
        | `Unbonding` | The stake is in the process of being unbonded (cooldown period). |
        | `Unbond` | The stake has been unbonded and is ready for withdrawal. |
        | `Withdrawing` | The staked funds are in the process of being withdrawn. |
        | `Withdrawn` | The staked funds have been fully withdrawn. |
        | `Failed` | The staking operation failed. | */
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
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
            duration: number;
        } | {
            protocol: "Ethereum";
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
        } | {
            protocol: "Iota";
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            validator: string;
            /** Transaction amount denominated in min units */
            amount: string;
            lockedIotas?: string[] | undefined;
        } | {
            protocol: "Xdc";
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            /** Coinbase address of the XDC masternode to register */
            candidate: string;
            /** Transaction amount denominated in wei (min 10,000,000 XDC) */
            amount: string;
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
        /** The staking infrastructure provider used to manage the stake. */
        provider?: ("Figment") | undefined;
        /** Wallet id. */
        walletId: string;
        /** Status of the stake position.
        
        | Status | Definition |
        | --- | --- |
        | `Staking` | The stake is being created and funds are being delegated to the validator. |
        | `Active` | The stake is active and earning rewards. |
        | `Unbonding` | The stake is in the process of being unbonded (cooldown period). |
        | `Unbond` | The stake has been unbonded and is ready for withdrawal. |
        | `Withdrawing` | The staked funds are in the process of being withdrawn. |
        | `Withdrawn` | The staked funds have been fully withdrawn. |
        | `Failed` | The staking operation failed. | */
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
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
            duration: number;
        } | {
            protocol: "Ethereum";
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
        } | {
            protocol: "Iota";
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            validator: string;
            /** Transaction amount denominated in min units */
            amount: string;
            lockedIotas?: string[] | undefined;
        } | {
            protocol: "Xdc";
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            /** Coinbase address of the XDC masternode to register */
            candidate: string;
            /** Transaction amount denominated in wei (min 10,000,000 XDC) */
            amount: string;
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
    } | {
        id: string;
        /** The staking infrastructure provider used to manage the stake. */
        provider?: ("Figment") | undefined;
        /** Wallet id. */
        walletId: string;
        /** Status of the stake position.
        
        | Status | Definition |
        | --- | --- |
        | `Staking` | The stake is being created and funds are being delegated to the validator. |
        | `Active` | The stake is active and earning rewards. |
        | `Unbonding` | The stake is in the process of being unbonded (cooldown period). |
        | `Unbond` | The stake has been unbonded and is ready for withdrawal. |
        | `Withdrawing` | The staked funds are in the process of being withdrawn. |
        | `Withdrawn` | The staked funds have been fully withdrawn. |
        | `Failed` | The staking operation failed. | */
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
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
            duration: number;
        } | {
            protocol: "Ethereum";
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            /** Staking Provider */
            provider: "Figment";
            /** Transaction amount denominated in min units */
            amount: string;
        } | {
            protocol: "Iota";
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            validator: string;
            /** Transaction amount denominated in min units */
            amount: string;
            lockedIotas?: string[] | undefined;
        } | {
            protocol: "Xdc";
            /** Id of the Dfns wallet making the deposit. */
            walletId: string;
            /** Coinbase address of the XDC masternode to register */
            candidate: string;
            /** Transaction amount denominated in wei (min 10,000,000 XDC) */
            amount: string;
        }) & {
            externalId?: string | undefined;
        };
        dateCreated: string;
        protocol: "Xdc";
        data: {
            candidate: string;
            amount: string;
            proposeBlockNumber?: string | undefined;
            withdrawBlockNumber?: string | undefined;
            withdrawIndex?: string | undefined;
        };
    })[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListStakesRequest = { query?: ListStakesQuery }

