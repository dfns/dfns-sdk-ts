export type CreateCantonValidatorBody = {
    name?: string | undefined;
    kind: "Shared";
} | {
    name?: string | undefined;
    kind: "Custom";
    validator: {
        url: string;
        oauth2: {
            domain: string;
            clientId: string;
            clientSecret: string;
            audience: string;
            tokenPath?: string | undefined;
        };
    };
    ledger: {
        url: string;
        oauth2: {
            domain: string;
            clientId: string;
            clientSecret: string;
            audience: string;
            tokenPath?: string | undefined;
        };
    };
};

export type CreateCantonValidatorParams = {
    network: "canton" | "canton-devnet" | "canton-testnet";
};

export type CreateCantonValidatorResponse = {
    id: string;
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
    network: "Canton" | "CantonDevnet" | "CantonTestnet";
    name?: string | undefined;
    kind: "Shared" | "Custom";
    dateCreated: string;
    partyHint: string;
};

export type DeleteCantonValidatorRequest = DeleteCantonValidatorParams

export type GetFeesQuery = {
    network: "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "Adi" | "AdiTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Plume" | "PlumeSepolia" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia";
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
    network: "Adi" | "AdiTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Plume" | "PlumeSepolia" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia";
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
    limit?: number | undefined;
    paginationToken?: string | undefined;
};

export type ListCantonValidatorsResponse = {
    items: {
        id: string;
        network: "Canton" | "CantonDevnet" | "CantonTestnet";
        name?: string | undefined;
        kind: "Shared" | "Custom";
        dateCreated: string;
        partyHint: string;
    }[];
    nextPageToken?: string | undefined;
};

export type ListCantonValidatorsRequest = ListCantonValidatorsParams & { query?: ListCantonValidatorsQuery }

export type ReadContractBody = {
    kind: "Evm";
    network: "Adi" | "AdiTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Plume" | "PlumeSepolia" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia";
    contract: string;
    data: string;
};

export type ReadContractResponse = {
    kind: "Evm";
    data: string;
};

export type ReadContractRequest = { body: ReadContractBody }

export type UpdateCantonValidatorBody = {
    name?: string | undefined;
    validator?: {
        url: string;
        oauth2: {
            domain: string;
            clientId: string;
            clientSecret: string;
            audience: string;
            tokenPath?: string | undefined;
        };
    } | undefined;
    ledger?: {
        url: string;
        oauth2: {
            domain: string;
            clientId: string;
            clientSecret: string;
            audience: string;
            tokenPath?: string | undefined;
        };
    } | undefined;
};

export type UpdateCantonValidatorParams = {
    network: "canton" | "canton-devnet" | "canton-testnet";
    validatorId: string;
};

export type UpdateCantonValidatorResponse = {
    id: string;
    network: "Canton" | "CantonDevnet" | "CantonTestnet";
    name?: string | undefined;
    kind: "Shared" | "Custom";
    dateCreated: string;
    partyHint: string;
};

export type UpdateCantonValidatorRequest = UpdateCantonValidatorParams & { body: UpdateCantonValidatorBody }

