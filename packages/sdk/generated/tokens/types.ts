export type AddTokenAgentBody = {
    /** The Dfns wallet in your organization that signs the action and pays gas. It must be the current owner of the token. */
    owner: string;
    kind: "Erc3643";
    /** The address made an agent on both the Token and the IdentityRegistry contracts. Any EVM address, not only Dfns wallets. */
    agent: string;
};

export type AddTokenAgentParams = {
    /** Token id. */
    tokenId: string;
};

export type AddTokenAgentResponse = {
    /** Token action id. */
    id: string;
    /** Organization id. */
    orgId: string;
    /** The token the action was run on. */
    tokenId: string;
    /** The token action. */
    action: "Mint" | "Burn" | "Pause" | "Unpause" | "FreezeAccount" | "UnfreezeAccount" | "ForceTransfer" | "AddAgent" | "RemoveAgent";
    /** Dfns managed token action status. */
    status: "Pending" | "Completed" | "Failed" | "Rejected";
    /** Human-readable reason for a `Failed` or `Rejected` status. Null otherwise. Display it; do not branch on it. */
    statusReason: string | null;
    /** The Dfns wallet that signed the action: an agent, or the owner for agent changes. */
    wallet: string;
    /** The user who initiated the request. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    /** The wallets transaction that ran the action. Null until it is broadcast. */
    transactionId: string | null;
    dateCreated: string;
    kind: "Erc3643";
};

export type AddTokenAgentRequest = AddTokenAgentParams & { body: AddTokenAgentBody }

export type BurnTokenBody = {
    /** The Dfns wallet in your organization that signs the action and pays gas. It must be an agent of the token. */
    agent: string;
    kind: "Erc3643";
    /** The address whose tokens are burned. */
    from: string;
    /** The amount of tokens in minimum denomination. */
    amount: string;
};

export type BurnTokenParams = {
    /** Token id. */
    tokenId: string;
};

export type BurnTokenResponse = {
    /** Token action id. */
    id: string;
    /** Organization id. */
    orgId: string;
    /** The token the action was run on. */
    tokenId: string;
    /** The token action. */
    action: "Mint" | "Burn" | "Pause" | "Unpause" | "FreezeAccount" | "UnfreezeAccount" | "ForceTransfer" | "AddAgent" | "RemoveAgent";
    /** Dfns managed token action status. */
    status: "Pending" | "Completed" | "Failed" | "Rejected";
    /** Human-readable reason for a `Failed` or `Rejected` status. Null otherwise. Display it; do not branch on it. */
    statusReason: string | null;
    /** The Dfns wallet that signed the action: an agent, or the owner for agent changes. */
    wallet: string;
    /** The user who initiated the request. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    /** The wallets transaction that ran the action. Null until it is broadcast. */
    transactionId: string | null;
    dateCreated: string;
    kind: "Erc3643";
};

export type BurnTokenRequest = BurnTokenParams & { body: BurnTokenBody }

export type CreateTokenBody = {
    /** The deployer: a Dfns wallet in your organization. It signs the deploy and pays gas, and its network becomes the token network. It gets no rights on the token unless it is also the owner or an agent. */
    deployer: string;
    /** The token owner: a Dfns wallet in your organization on the same network. Defaults to `deployer`. */
    owner?: string | undefined;
    kind: "Erc3643";
    /** The token name, 1 to 64 characters. Unique per organization and network among live tokens. */
    name: string;
    /** The token symbol, 1 to 16 characters. */
    symbol: string;
    /** The token decimals, 0 to 18. */
    decimals: number;
    /** 1 to 5 EVM addresses made agents on both the Token and the IdentityRegistry contracts. The owner is not an agent unless listed. */
    agents: string[];
};

export type CreateTokenResponse = {
    /** Token id. */
    id: string;
    /** Organization id. */
    orgId: string;
    /** The network of the deployer wallet, where the token is deployed. */
    network: string;
    /** Dfns managed token status. */
    status: "Processing" | "Active" | "Failed" | "Rejected";
    /** Human-readable reason for a `Failed` or `Rejected` status. Null otherwise. Display it; do not branch on it. */
    statusReason: string | null;
    /** The token name, as deployed. */
    name: string;
    /** The token symbol, as deployed. */
    symbol: string;
    /** The token decimals, as deployed. */
    decimals: number;
    /** The Dfns wallet that signed the deploy. It has no rights on the token unless it is also the owner or an agent. */
    deployer: string;
    /** The Dfns wallet set as the token owner at create. The owner can change on-chain afterwards. */
    owner: string;
    /** The address of the `owner` wallet on the token network, as passed to the factory at create. */
    ownerAddress: string;
    /** The on-chain transactions made for this token. */
    transactions: {
        /** The wallets transaction that deployed the token. Null until the deploy is broadcast. */
        deploy: string | null;
    };
    dateCreated: string;
    kind: "Erc3643";
    /** The TREXFactory the suite was deployed through: the one your organization deployed and owns on this network, not a request field. */
    factoryAddress: string;
    /** The contracts of the suite, keyed by role. Null until the token is `Active`. */
    contracts: {
        /** The Token contract. */
        token: {
            /** The contract address. */
            address: string;
            /** The contract ABI, a JSON array of fragments, snapshotted when the deploy confirmed. */
            abi: {
                [x: string]: unknown;
            }[];
        };
        /** The IdentityRegistry contract. */
        identityRegistry: {
            /** The contract address. */
            address: string;
            /** The contract ABI, a JSON array of fragments, snapshotted when the deploy confirmed. */
            abi: {
                [x: string]: unknown;
            }[];
        };
        /** The IdentityRegistryStorage contract. */
        identityRegistryStorage: {
            /** The contract address. */
            address: string;
            /** The contract ABI, a JSON array of fragments, snapshotted when the deploy confirmed. */
            abi: {
                [x: string]: unknown;
            }[];
        };
        /** The TrustedIssuersRegistry contract. */
        trustedIssuersRegistry: {
            /** The contract address. */
            address: string;
            /** The contract ABI, a JSON array of fragments, snapshotted when the deploy confirmed. */
            abi: {
                [x: string]: unknown;
            }[];
        };
        /** The ClaimTopicsRegistry contract. */
        claimTopicsRegistry: {
            /** The contract address. */
            address: string;
            /** The contract ABI, a JSON array of fragments, snapshotted when the deploy confirmed. */
            abi: {
                [x: string]: unknown;
            }[];
        };
        /** The ModularCompliance contract. */
        modularCompliance: {
            /** The contract address. */
            address: string;
            /** The contract ABI, a JSON array of fragments, snapshotted when the deploy confirmed. */
            abi: {
                [x: string]: unknown;
            }[];
        };
    } | null;
};

export type CreateTokenRequest = { body: CreateTokenBody }

export type ForceTransferTokenBody = {
    /** The Dfns wallet in your organization that signs the action and pays gas. It must be an agent of the token. */
    agent: string;
    kind: "Erc3643";
    /** The address the tokens are taken from. */
    from: string;
    /** The address that receives the tokens. */
    to: string;
    /** The amount of tokens in minimum denomination. */
    amount: string;
};

export type ForceTransferTokenParams = {
    /** Token id. */
    tokenId: string;
};

export type ForceTransferTokenResponse = {
    /** Token action id. */
    id: string;
    /** Organization id. */
    orgId: string;
    /** The token the action was run on. */
    tokenId: string;
    /** The token action. */
    action: "Mint" | "Burn" | "Pause" | "Unpause" | "FreezeAccount" | "UnfreezeAccount" | "ForceTransfer" | "AddAgent" | "RemoveAgent";
    /** Dfns managed token action status. */
    status: "Pending" | "Completed" | "Failed" | "Rejected";
    /** Human-readable reason for a `Failed` or `Rejected` status. Null otherwise. Display it; do not branch on it. */
    statusReason: string | null;
    /** The Dfns wallet that signed the action: an agent, or the owner for agent changes. */
    wallet: string;
    /** The user who initiated the request. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    /** The wallets transaction that ran the action. Null until it is broadcast. */
    transactionId: string | null;
    dateCreated: string;
    kind: "Erc3643";
};

export type ForceTransferTokenRequest = ForceTransferTokenParams & { body: ForceTransferTokenBody }

export type FreezeTokenAccountBody = {
    /** The Dfns wallet in your organization that signs the action and pays gas. It must be an agent of the token. */
    agent: string;
    kind: "Erc3643";
    /** The address to freeze: it can no longer send or receive. */
    account: string;
};

export type FreezeTokenAccountParams = {
    /** Token id. */
    tokenId: string;
};

export type FreezeTokenAccountResponse = {
    /** Token action id. */
    id: string;
    /** Organization id. */
    orgId: string;
    /** The token the action was run on. */
    tokenId: string;
    /** The token action. */
    action: "Mint" | "Burn" | "Pause" | "Unpause" | "FreezeAccount" | "UnfreezeAccount" | "ForceTransfer" | "AddAgent" | "RemoveAgent";
    /** Dfns managed token action status. */
    status: "Pending" | "Completed" | "Failed" | "Rejected";
    /** Human-readable reason for a `Failed` or `Rejected` status. Null otherwise. Display it; do not branch on it. */
    statusReason: string | null;
    /** The Dfns wallet that signed the action: an agent, or the owner for agent changes. */
    wallet: string;
    /** The user who initiated the request. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    /** The wallets transaction that ran the action. Null until it is broadcast. */
    transactionId: string | null;
    dateCreated: string;
    kind: "Erc3643";
};

export type FreezeTokenAccountRequest = FreezeTokenAccountParams & { body: FreezeTokenAccountBody }

export type GetTokenParams = {
    /** Token id. */
    tokenId: string;
};

export type GetTokenResponse = {
    /** Token id. */
    id: string;
    /** Organization id. */
    orgId: string;
    /** The network of the deployer wallet, where the token is deployed. */
    network: string;
    /** Dfns managed token status. */
    status: "Processing" | "Active" | "Failed" | "Rejected";
    /** Human-readable reason for a `Failed` or `Rejected` status. Null otherwise. Display it; do not branch on it. */
    statusReason: string | null;
    /** The token name, as deployed. */
    name: string;
    /** The token symbol, as deployed. */
    symbol: string;
    /** The token decimals, as deployed. */
    decimals: number;
    /** The Dfns wallet that signed the deploy. It has no rights on the token unless it is also the owner or an agent. */
    deployer: string;
    /** The Dfns wallet set as the token owner at create. The owner can change on-chain afterwards. */
    owner: string;
    /** The address of the `owner` wallet on the token network, as passed to the factory at create. */
    ownerAddress: string;
    /** The on-chain transactions made for this token. */
    transactions: {
        /** The wallets transaction that deployed the token. Null until the deploy is broadcast. */
        deploy: string | null;
    };
    dateCreated: string;
    kind: "Erc3643";
    /** The TREXFactory the suite was deployed through: the one your organization deployed and owns on this network, not a request field. */
    factoryAddress: string;
    /** The contracts of the suite, keyed by role. Null until the token is `Active`. */
    contracts: {
        /** The Token contract. */
        token: {
            /** The contract address. */
            address: string;
            /** The contract ABI, a JSON array of fragments, snapshotted when the deploy confirmed. */
            abi: {
                [x: string]: unknown;
            }[];
        };
        /** The IdentityRegistry contract. */
        identityRegistry: {
            /** The contract address. */
            address: string;
            /** The contract ABI, a JSON array of fragments, snapshotted when the deploy confirmed. */
            abi: {
                [x: string]: unknown;
            }[];
        };
        /** The IdentityRegistryStorage contract. */
        identityRegistryStorage: {
            /** The contract address. */
            address: string;
            /** The contract ABI, a JSON array of fragments, snapshotted when the deploy confirmed. */
            abi: {
                [x: string]: unknown;
            }[];
        };
        /** The TrustedIssuersRegistry contract. */
        trustedIssuersRegistry: {
            /** The contract address. */
            address: string;
            /** The contract ABI, a JSON array of fragments, snapshotted when the deploy confirmed. */
            abi: {
                [x: string]: unknown;
            }[];
        };
        /** The ClaimTopicsRegistry contract. */
        claimTopicsRegistry: {
            /** The contract address. */
            address: string;
            /** The contract ABI, a JSON array of fragments, snapshotted when the deploy confirmed. */
            abi: {
                [x: string]: unknown;
            }[];
        };
        /** The ModularCompliance contract. */
        modularCompliance: {
            /** The contract address. */
            address: string;
            /** The contract ABI, a JSON array of fragments, snapshotted when the deploy confirmed. */
            abi: {
                [x: string]: unknown;
            }[];
        };
    } | null;
};

export type GetTokenRequest = GetTokenParams

export type GetTokenActionParams = {
    /** Token id. */
    tokenId: string;
    /** Token action id. */
    tokenActionId: string;
};

export type GetTokenActionResponse = {
    /** Token action id. */
    id: string;
    /** Organization id. */
    orgId: string;
    /** The token the action was run on. */
    tokenId: string;
    /** The token action. */
    action: "Mint" | "Burn" | "Pause" | "Unpause" | "FreezeAccount" | "UnfreezeAccount" | "ForceTransfer" | "AddAgent" | "RemoveAgent";
    /** Dfns managed token action status. */
    status: "Pending" | "Completed" | "Failed" | "Rejected";
    /** Human-readable reason for a `Failed` or `Rejected` status. Null otherwise. Display it; do not branch on it. */
    statusReason: string | null;
    /** The Dfns wallet that signed the action: an agent, or the owner for agent changes. */
    wallet: string;
    /** The user who initiated the request. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    /** The wallets transaction that ran the action. Null until it is broadcast. */
    transactionId: string | null;
    dateCreated: string;
    kind: "Erc3643";
};

export type GetTokenActionRequest = GetTokenActionParams

export type ListTokenActionsParams = {
    /** Token id. */
    tokenId: string;
};

export type ListTokenActionsQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
    /** Filter by action (comma-separated). */
    action?: ("Mint" | "Burn" | "Pause" | "Unpause" | "FreezeAccount" | "UnfreezeAccount" | "ForceTransfer" | "AddAgent" | "RemoveAgent")[] | undefined;
    /** Filter by status (comma-separated). */
    status?: ("Pending" | "Completed" | "Failed" | "Rejected")[] | undefined;
    /** Filter by the user who initiated the action (`requester.userId`). */
    requester?: string | undefined;
};

export type ListTokenActionsResponse = {
    /** Current page items. */
    items: ({
        /** Token action id. */
        id: string;
        /** Organization id. */
        orgId: string;
        /** The token the action was run on. */
        tokenId: string;
        /** The token action. */
        action: "Mint" | "Burn" | "Pause" | "Unpause" | "FreezeAccount" | "UnfreezeAccount" | "ForceTransfer" | "AddAgent" | "RemoveAgent";
        /** Dfns managed token action status. */
        status: "Pending" | "Completed" | "Failed" | "Rejected";
        /** Human-readable reason for a `Failed` or `Rejected` status. Null otherwise. Display it; do not branch on it. */
        statusReason: string | null;
        /** The Dfns wallet that signed the action: an agent, or the owner for agent changes. */
        wallet: string;
        /** The user who initiated the request. */
        requester: {
            /** User id. */
            userId: string;
            /** Token id. */
            tokenId?: string | undefined;
        };
        /** The wallets transaction that ran the action. Null until it is broadcast. */
        transactionId: string | null;
        dateCreated: string;
        kind: "Erc3643";
    })[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListTokenActionsRequest = ListTokenActionsParams & { query?: ListTokenActionsQuery }

export type ListTokensQuery = {
    /** Maximum number of items to return. */
    limit?: number;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
    /** Filter tokens by network. */
    network?: string | undefined;
    /** Filter tokens by status (comma-separated). */
    status?: ("Processing" | "Active" | "Failed" | "Rejected")[] | undefined;
    /** Filter tokens by the wallet that deployed them. */
    deployer?: string | undefined;
    /** Filter tokens by the wallet set as their owner at create. */
    owner?: string | undefined;
};

export type ListTokensResponse = {
    /** Current page items. */
    items: ({
        /** Token id. */
        id: string;
        /** Organization id. */
        orgId: string;
        /** The network of the deployer wallet, where the token is deployed. */
        network: string;
        /** Dfns managed token status. */
        status: "Processing" | "Active" | "Failed" | "Rejected";
        /** Human-readable reason for a `Failed` or `Rejected` status. Null otherwise. Display it; do not branch on it. */
        statusReason: string | null;
        /** The token name, as deployed. */
        name: string;
        /** The token symbol, as deployed. */
        symbol: string;
        /** The token decimals, as deployed. */
        decimals: number;
        /** The Dfns wallet that signed the deploy. It has no rights on the token unless it is also the owner or an agent. */
        deployer: string;
        /** The Dfns wallet set as the token owner at create. The owner can change on-chain afterwards. */
        owner: string;
        /** The address of the `owner` wallet on the token network, as passed to the factory at create. */
        ownerAddress: string;
        /** The on-chain transactions made for this token. */
        transactions: {
            /** The wallets transaction that deployed the token. Null until the deploy is broadcast. */
            deploy: string | null;
        };
        dateCreated: string;
        kind: "Erc3643";
        /** The TREXFactory the suite was deployed through: the one your organization deployed and owns on this network, not a request field. */
        factoryAddress: string;
    })[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListTokensRequest = { query?: ListTokensQuery }

export type MintTokenBody = {
    /** The Dfns wallet in your organization that signs the action and pays gas. It must be an agent of the token. */
    agent: string;
    kind: "Erc3643";
    /** The address that receives the minted tokens. */
    to: string;
    /** The amount of tokens in minimum denomination. */
    amount: string;
};

export type MintTokenParams = {
    /** Token id. */
    tokenId: string;
};

export type MintTokenResponse = {
    /** Token action id. */
    id: string;
    /** Organization id. */
    orgId: string;
    /** The token the action was run on. */
    tokenId: string;
    /** The token action. */
    action: "Mint" | "Burn" | "Pause" | "Unpause" | "FreezeAccount" | "UnfreezeAccount" | "ForceTransfer" | "AddAgent" | "RemoveAgent";
    /** Dfns managed token action status. */
    status: "Pending" | "Completed" | "Failed" | "Rejected";
    /** Human-readable reason for a `Failed` or `Rejected` status. Null otherwise. Display it; do not branch on it. */
    statusReason: string | null;
    /** The Dfns wallet that signed the action: an agent, or the owner for agent changes. */
    wallet: string;
    /** The user who initiated the request. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    /** The wallets transaction that ran the action. Null until it is broadcast. */
    transactionId: string | null;
    dateCreated: string;
    kind: "Erc3643";
};

export type MintTokenRequest = MintTokenParams & { body: MintTokenBody }

export type PauseTokenBody = {
    /** The Dfns wallet in your organization that signs the action and pays gas. It must be an agent of the token. */
    agent: string;
    kind: "Erc3643";
};

export type PauseTokenParams = {
    /** Token id. */
    tokenId: string;
};

export type PauseTokenResponse = {
    /** Token action id. */
    id: string;
    /** Organization id. */
    orgId: string;
    /** The token the action was run on. */
    tokenId: string;
    /** The token action. */
    action: "Mint" | "Burn" | "Pause" | "Unpause" | "FreezeAccount" | "UnfreezeAccount" | "ForceTransfer" | "AddAgent" | "RemoveAgent";
    /** Dfns managed token action status. */
    status: "Pending" | "Completed" | "Failed" | "Rejected";
    /** Human-readable reason for a `Failed` or `Rejected` status. Null otherwise. Display it; do not branch on it. */
    statusReason: string | null;
    /** The Dfns wallet that signed the action: an agent, or the owner for agent changes. */
    wallet: string;
    /** The user who initiated the request. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    /** The wallets transaction that ran the action. Null until it is broadcast. */
    transactionId: string | null;
    dateCreated: string;
    kind: "Erc3643";
};

export type PauseTokenRequest = PauseTokenParams & { body: PauseTokenBody }

export type RemoveTokenAgentBody = {
    /** The Dfns wallet in your organization that signs the action and pays gas. It must be the current owner of the token. */
    owner: string;
    kind: "Erc3643";
    /** The address removed as agent from both the Token and the IdentityRegistry contracts. */
    agent: string;
};

export type RemoveTokenAgentParams = {
    /** Token id. */
    tokenId: string;
};

export type RemoveTokenAgentResponse = {
    /** Token action id. */
    id: string;
    /** Organization id. */
    orgId: string;
    /** The token the action was run on. */
    tokenId: string;
    /** The token action. */
    action: "Mint" | "Burn" | "Pause" | "Unpause" | "FreezeAccount" | "UnfreezeAccount" | "ForceTransfer" | "AddAgent" | "RemoveAgent";
    /** Dfns managed token action status. */
    status: "Pending" | "Completed" | "Failed" | "Rejected";
    /** Human-readable reason for a `Failed` or `Rejected` status. Null otherwise. Display it; do not branch on it. */
    statusReason: string | null;
    /** The Dfns wallet that signed the action: an agent, or the owner for agent changes. */
    wallet: string;
    /** The user who initiated the request. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    /** The wallets transaction that ran the action. Null until it is broadcast. */
    transactionId: string | null;
    dateCreated: string;
    kind: "Erc3643";
};

export type RemoveTokenAgentRequest = RemoveTokenAgentParams & { body: RemoveTokenAgentBody }

export type UnfreezeTokenAccountBody = {
    /** The Dfns wallet in your organization that signs the action and pays gas. It must be an agent of the token. */
    agent: string;
    kind: "Erc3643";
    /** The address to unfreeze. */
    account: string;
};

export type UnfreezeTokenAccountParams = {
    /** Token id. */
    tokenId: string;
};

export type UnfreezeTokenAccountResponse = {
    /** Token action id. */
    id: string;
    /** Organization id. */
    orgId: string;
    /** The token the action was run on. */
    tokenId: string;
    /** The token action. */
    action: "Mint" | "Burn" | "Pause" | "Unpause" | "FreezeAccount" | "UnfreezeAccount" | "ForceTransfer" | "AddAgent" | "RemoveAgent";
    /** Dfns managed token action status. */
    status: "Pending" | "Completed" | "Failed" | "Rejected";
    /** Human-readable reason for a `Failed` or `Rejected` status. Null otherwise. Display it; do not branch on it. */
    statusReason: string | null;
    /** The Dfns wallet that signed the action: an agent, or the owner for agent changes. */
    wallet: string;
    /** The user who initiated the request. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    /** The wallets transaction that ran the action. Null until it is broadcast. */
    transactionId: string | null;
    dateCreated: string;
    kind: "Erc3643";
};

export type UnfreezeTokenAccountRequest = UnfreezeTokenAccountParams & { body: UnfreezeTokenAccountBody }

export type UnpauseTokenBody = {
    /** The Dfns wallet in your organization that signs the action and pays gas. It must be an agent of the token. */
    agent: string;
    kind: "Erc3643";
};

export type UnpauseTokenParams = {
    /** Token id. */
    tokenId: string;
};

export type UnpauseTokenResponse = {
    /** Token action id. */
    id: string;
    /** Organization id. */
    orgId: string;
    /** The token the action was run on. */
    tokenId: string;
    /** The token action. */
    action: "Mint" | "Burn" | "Pause" | "Unpause" | "FreezeAccount" | "UnfreezeAccount" | "ForceTransfer" | "AddAgent" | "RemoveAgent";
    /** Dfns managed token action status. */
    status: "Pending" | "Completed" | "Failed" | "Rejected";
    /** Human-readable reason for a `Failed` or `Rejected` status. Null otherwise. Display it; do not branch on it. */
    statusReason: string | null;
    /** The Dfns wallet that signed the action: an agent, or the owner for agent changes. */
    wallet: string;
    /** The user who initiated the request. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    /** The wallets transaction that ran the action. Null until it is broadcast. */
    transactionId: string | null;
    dateCreated: string;
    kind: "Erc3643";
};

export type UnpauseTokenRequest = UnpauseTokenParams & { body: UnpauseTokenBody }

