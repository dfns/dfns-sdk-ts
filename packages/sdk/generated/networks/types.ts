export type CallFunctionBody = {
    /** Address of the contract to call */
    contract: string;
    /** ABI of the read-only function to invoke */
    abi: {
        type: string;
        name: string;
        stateMutability: string;
        inputs: {
            name: string;
            type: string;
            components?: CallFunctionBody | undefined;
        }[];
        outputs: {
            name: string;
            type: string;
            components?: CallFunctionBody | undefined;
        }[];
    };
    /** Function call arguments */
    calldata?: {} | undefined;
};

export type CallFunctionParams = {
    /** Network name formatted in kebab case */
    network: string;
};

export type CallFunctionResponse = any;

export type CallFunctionRequest = CallFunctionParams & { body: CallFunctionBody }

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
    /** The Canton network this validator is configured for. */
    network: "Canton" | "CantonDevnet" | "CantonTestnet";
    /** Nickname for this validator. */
    name?: string | undefined;
    /** `Shared` if using the Dfns-hosted shared validator, `Custom` if connecting your own validator. */
    kind: "Shared" | "Custom";
    dateCreated: string;
    /** Party hint used to derive the Canton party id for wallets created under this validator. */
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
    /** The Canton network this validator is configured for. */
    network: "Canton" | "CantonDevnet" | "CantonTestnet";
    /** Nickname for this validator. */
    name?: string | undefined;
    /** `Shared` if using the Dfns-hosted shared validator, `Custom` if connecting your own validator. */
    kind: "Shared" | "Custom";
    dateCreated: string;
    /** Party hint used to derive the Canton party id for wallets created under this validator. */
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
    /** The Canton network this validator is configured for. */
    network: "Canton" | "CantonDevnet" | "CantonTestnet";
    /** Nickname for this validator. */
    name?: string | undefined;
    /** `Shared` if using the Dfns-hosted shared validator, `Custom` if connecting your own validator. */
    kind: "Shared" | "Custom";
    dateCreated: string;
    /** Party hint used to derive the Canton party id for wallets created under this validator. */
    partyHint: string;
};

export type GetCantonValidatorRequest = GetCantonValidatorParams

export type GetFeesQuery = {
    network: "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "Litecoin" | "LitecoinTestnet" | "Dogecoin" | "DogecoinTestnet" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "BesuTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Ink" | "InkSepolia" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Sonic" | "SonicTestnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "Solana" | "SolanaDevnet";
};

export type GetFeesResponse = {
    kind: "Bitcoin";
    network: "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "Litecoin" | "LitecoinTestnet" | "Dogecoin" | "DogecoinTestnet";
    blockNumber: number;
    slow: {
        /** Fee rate denominated in satoshis (the lowest denomination) per virtual byte. */
        feeRate: string;
        /** Target number of blocks within which a transaction at this fee rate is expected to confirm. */
        blockHorizon: number;
    };
    standard: {
        /** Fee rate denominated in satoshis (the lowest denomination) per virtual byte. */
        feeRate: string;
        /** Target number of blocks within which a transaction at this fee rate is expected to confirm. */
        blockHorizon: number;
    };
    fast: {
        /** Fee rate denominated in satoshis (the lowest denomination) per virtual byte. */
        feeRate: string;
        /** Target number of blocks within which a transaction at this fee rate is expected to confirm. */
        blockHorizon: number;
    };
} | {
    kind: "Eip1559";
    network: "Adi" | "AdiTestnet" | "AdiTestnetAb" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "BesuTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Ink" | "InkSepolia" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Sonic" | "SonicTestnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia";
    blockNumber: number;
    slow: {
        /** Maximum priority fee (tip) per unit of gas, denominated in wei (the lowest denomination). */
        maxPriorityFeePerGas: string;
        /** Maximum total fee per unit of gas, denominated in wei (the lowest denomination). */
        maxFeePerGas: string;
    };
    standard: {
        /** Maximum priority fee (tip) per unit of gas, denominated in wei (the lowest denomination). */
        maxPriorityFeePerGas: string;
        /** Maximum total fee per unit of gas, denominated in wei (the lowest denomination). */
        maxFeePerGas: string;
    };
    fast: {
        /** Maximum priority fee (tip) per unit of gas, denominated in wei (the lowest denomination). */
        maxPriorityFeePerGas: string;
        /** Maximum total fee per unit of gas, denominated in wei (the lowest denomination). */
        maxFeePerGas: string;
    };
    /** Base fee per unit of gas of the latest block, denominated in wei (the lowest denomination). */
    baseFeePerGas: string;
} | {
    kind: "Solana";
    network: "Solana" | "SolanaDevnet";
    blockNumber: number;
    slow: {
        /** Price per compute unit, denominated in micro-lamports (the lowest denomination). */
        computeUnitPrice: string;
    };
    standard: {
        /** Price per compute unit, denominated in micro-lamports (the lowest denomination). */
        computeUnitPrice: string;
    };
    fast: {
        /** Price per compute unit, denominated in micro-lamports (the lowest denomination). */
        computeUnitPrice: string;
    };
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
        /** The Canton network this validator is configured for. */
        network: "Canton" | "CantonDevnet" | "CantonTestnet";
        /** Nickname for this validator. */
        name?: string | undefined;
        /** `Shared` if using the Dfns-hosted shared validator, `Custom` if connecting your own validator. */
        kind: "Shared" | "Custom";
        dateCreated: string;
        /** Party hint used to derive the Canton party id for wallets created under this validator. */
        partyHint: string;
    }[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListCantonValidatorsRequest = ListCantonValidatorsParams & { query?: ListCantonValidatorsQuery }

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
    /** The Canton network this validator is configured for. */
    network: "Canton" | "CantonDevnet" | "CantonTestnet";
    /** Nickname for this validator. */
    name?: string | undefined;
    /** `Shared` if using the Dfns-hosted shared validator, `Custom` if connecting your own validator. */
    kind: "Shared" | "Custom";
    dateCreated: string;
    /** Party hint used to derive the Canton party id for wallets created under this validator. */
    partyHint: string;
};

export type UpdateCantonValidatorRequest = UpdateCantonValidatorParams & { body: UpdateCantonValidatorBody }

