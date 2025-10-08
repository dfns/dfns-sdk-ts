export type CreateCantonValidatorBody = {
    /** Nickname for this validator. */
    name?: string | undefined;
    kind: "Shared";
} | {
    /** Nickname for this validator. */
    name?: string | undefined;
    kind: "Custom";
    /** Configuration to reach your validator Signing API. We will call the validator External Signing API at the url (and using the credentials) defined below ; for instance `$URL/api/validator/v0/admin/external-party/topology/generate`. See the underlying calls details [here](https://docs.dev.sync.global/app_dev/validator_api/index.html#validator-api-external-signing). */
    validator: {
        /** URL to reach the API at this address. The calls will be originating from our IP addresses (see [Dfns Environments](https://docs.dfns.co/api-reference/environments)) */
        url: string;
        /** How Dfns will authenticate into your validator/ledger. You should have setup authentication already (see details [here](https://docs.dev.sync.global/validator_operator/validator_helm.html#helm-validator-auth)), you can reuse the same Application details. See examples in this endpoint payload examples above. */
        oauth2: {
            /** your OAuth2 tenant domain. Provided by your auth provider.  */
            domain: string;
            /** token endpoint from your authorization provider. We will call this endpoint on your tenant domain (i.e.: `<domain>/<token path>`) */
            tokenPath?: string | undefined;
            /** the audience your configured on your auth provider. It is suggested to start with `https://canton.network.global`. */
            audience: string;
            /** The client id from your auth provider for this application. */
            clientId: string;
            /** The client secret from your auth provider for this application. */
            clientSecret: string;
        };
    };
    /** Configuration to reach your validator Ledger JSON API. We will call endpoints such as `/v2/state/ledger-end`, `/v2/state/active-contracts`, `/v2/parties/participant-id`, `/v2/interactive-submission/prepare`, `/v2/interactive-submission/execute`, `/v2/commands/completions`. See the underlying details [here](https://docs.dev.sync.global/app_dev/ledger_api/index.html). */
    ledger: {
        /** URL to reach the API at this address. The calls will be originating from our IP addresses (see [Dfns Environments](https://docs.dfns.co/api-reference/environments)) */
        url: string;
        /** How Dfns will authenticate into your validator/ledger. You should have setup authentication already (see details [here](https://docs.dev.sync.global/validator_operator/validator_helm.html#helm-validator-auth)), you can reuse the same Application details. See examples in this endpoint payload examples above. */
        oauth2: {
            /** your OAuth2 tenant domain. Provided by your auth provider.  */
            domain: string;
            /** token endpoint from your authorization provider. We will call this endpoint on your tenant domain (i.e.: `<domain>/<token path>`) */
            tokenPath?: string | undefined;
            /** the audience your configured on your auth provider. It is suggested to start with `https://canton.network.global`. */
            audience: string;
            /** The client id from your auth provider for this application. */
            clientId: string;
            /** The client secret from your auth provider for this application. */
            clientSecret: string;
        };
    };
};

export type CreateCantonValidatorParams = {
    network: "canton" | "canton-devnet" | "canton-testnet";
};

export type CreateCantonValidatorResponse = {
    id: string;
    /** Organization id. */
    orgId: string;
    network: "Canton" | "CantonDevnet" | "CantonTestnet";
    name?: string | undefined;
    kind: "Shared" | "Custom";
    dateCreated: string;
    partyHint: string;
};

export type CreateCantonValidatorRequest = CreateCantonValidatorParams & { body: CreateCantonValidatorBody }

export type DeleteCantonValidatorParams = {
    network: "canton" | "canton-devnet" | "canton-testnet";
    validatorId: string;
};

export type DeleteCantonValidatorResponse = {
    id: string;
    /** Organization id. */
    orgId: string;
    network: "Canton" | "CantonDevnet" | "CantonTestnet";
    name?: string | undefined;
    kind: "Shared" | "Custom";
    dateCreated: string;
    partyHint: string;
};

export type DeleteCantonValidatorRequest = DeleteCantonValidatorParams

export type GetCantonValidatorParams = {
    network: "canton" | "canton-devnet" | "canton-testnet";
    validatorId: string;
};

export type GetCantonValidatorResponse = {
    id: string;
    /** Organization id. */
    orgId: string;
    network: "Canton" | "CantonDevnet" | "CantonTestnet";
    name?: string | undefined;
    kind: "Shared" | "Custom";
    dateCreated: string;
    partyHint: string;
};

export type GetCantonValidatorRequest = GetCantonValidatorParams

export type GetFeesQuery = {
    network: "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "Adi" | "AdiTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Ink" | "InkSepolia" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Plume" | "PlumeSepolia" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Sonic" | "SonicTestnet" | "Tsc" | "TscTestnet1";
};

export type GetFeesResponse = {
    kind: "Bitcoin";
    network: ("Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3") | ("Dogecoin" | "DogecoinTestnet") | ("Litecoin" | "LitecoinTestnet");
    blockNumber: number;
    slow: {
        feeRate: string;
        blockHorizon: number;
    };
    standard: {
        feeRate: string;
        blockHorizon: number;
    };
    fast: {
        feeRate: string;
        blockHorizon: number;
    };
} | {
    kind: "Eip1559";
    network: "Adi" | "AdiTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Ink" | "InkSepolia" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Plume" | "PlumeSepolia" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Sonic" | "SonicTestnet" | "Tsc" | "TscTestnet1";
    blockNumber: number;
    slow: {
        maxPriorityFeePerGas: string;
        maxFeePerGas: string;
    };
    standard: {
        maxPriorityFeePerGas: string;
        maxFeePerGas: string;
    };
    fast: {
        maxPriorityFeePerGas: string;
        maxFeePerGas: string;
    };
    baseFeePerGas: string;
};

export type GetFeesRequest = { query?: GetFeesQuery }

export type ListCantonValidatorsParams = {
    network: "canton" | "canton-devnet" | "canton-testnet";
};

export type ListCantonValidatorsQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
};

export type ListCantonValidatorsResponse = {
    /** Current page items. */
    items: {
        id: string;
        /** Organization id. */
        orgId: string;
        network: "Canton" | "CantonDevnet" | "CantonTestnet";
        name?: string | undefined;
        kind: "Shared" | "Custom";
        dateCreated: string;
        partyHint: string;
    }[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListCantonValidatorsRequest = ListCantonValidatorsParams & { query?: ListCantonValidatorsQuery }

export type ReadContractBody = {
    kind: "Evm";
    /** Network used for the wallet. */
    network: "Adi" | "AdiTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Ink" | "InkSepolia" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Plume" | "PlumeSepolia" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Sonic" | "SonicTestnet" | "Tsc" | "TscTestnet1";
    /** Address of the contract to call */
    contract: string;
    /** Encoded hex string indicating which function in the smart contract to call with which parameters. For more information, see the [encodeFunctionData ethersJS documentation](https://docs.ethers.org/v6/api/abi/#Interface-encodeFunctionData) */
    data: string;
};

export type ReadContractResponse = {
    kind: "Evm";
    data: string;
};

export type ReadContractRequest = { body: ReadContractBody }

export type UpdateCantonValidatorBody = {
    /** Nickname for this validator. */
    name?: string | undefined;
    validator?: {
        /** URL to reach the API at this address. The calls will be originating from our IP addresses (see [Dfns Environments](https://docs.dfns.co/api-reference/environments)) */
        url: string;
        /** How Dfns will authenticate into your validator/ledger. You should have setup authentication already (see details [here](https://docs.dev.sync.global/validator_operator/validator_helm.html#helm-validator-auth)), you can reuse the same Application details. See examples in this endpoint payload examples above. */
        oauth2: {
            /** your OAuth2 tenant domain. Provided by your auth provider.  */
            domain: string;
            /** token endpoint from your authorization provider. We will call this endpoint on your tenant domain (i.e.: `<domain>/<token path>`) */
            tokenPath?: string | undefined;
            /** the audience your configured on your auth provider. It is suggested to start with `https://canton.network.global`. */
            audience: string;
            /** The client id from your auth provider for this application. */
            clientId: string;
            /** The client secret from your auth provider for this application. */
            clientSecret: string;
        };
    } | undefined;
    ledger?: {
        /** URL to reach the API at this address. The calls will be originating from our IP addresses (see [Dfns Environments](https://docs.dfns.co/api-reference/environments)) */
        url: string;
        /** How Dfns will authenticate into your validator/ledger. You should have setup authentication already (see details [here](https://docs.dev.sync.global/validator_operator/validator_helm.html#helm-validator-auth)), you can reuse the same Application details. See examples in this endpoint payload examples above. */
        oauth2: {
            /** your OAuth2 tenant domain. Provided by your auth provider.  */
            domain: string;
            /** token endpoint from your authorization provider. We will call this endpoint on your tenant domain (i.e.: `<domain>/<token path>`) */
            tokenPath?: string | undefined;
            /** the audience your configured on your auth provider. It is suggested to start with `https://canton.network.global`. */
            audience: string;
            /** The client id from your auth provider for this application. */
            clientId: string;
            /** The client secret from your auth provider for this application. */
            clientSecret: string;
        };
    } | undefined;
};

export type UpdateCantonValidatorParams = {
    network: "canton" | "canton-devnet" | "canton-testnet";
    validatorId: string;
};

export type UpdateCantonValidatorResponse = {
    id: string;
    /** Organization id. */
    orgId: string;
    network: "Canton" | "CantonDevnet" | "CantonTestnet";
    name?: string | undefined;
    kind: "Shared" | "Custom";
    dateCreated: string;
    partyHint: string;
};

export type UpdateCantonValidatorRequest = UpdateCantonValidatorParams & { body: UpdateCantonValidatorBody }

