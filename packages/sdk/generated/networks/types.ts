export type GetFeesQuery = {
    network: ("Bitcoin" | "BitcoinTestnet3" | "Litecoin" | "LitecoinTestnet") | ("ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bsc" | "BscTestnet" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia") | ("Solana" | "SolanaDevnet");
};

export type GetFeesResponse = {
    kind: "Bitcoin";
    network: "Bitcoin" | "BitcoinTestnet3" | "Litecoin" | "LitecoinTestnet";
    blockNumber: number;
    slow: {
        feeRate: string;
    };
    standard: {
        feeRate: string;
    };
    fast: {
        feeRate: string;
    };
} | {
    kind: "Eip1559";
    network: "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bsc" | "BscTestnet" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia";
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
    estimatedBaseFee: number;
} | {
    kind: "Solana";
    network: "Solana" | "SolanaDevnet";
    blockNumber: number;
    slow: {
        computeUnitPrice: string;
    };
    standard: {
        computeUnitPrice: string;
    };
    fast: {
        computeUnitPrice: string;
    };
};

export type GetFeesRequest = { query?: GetFeesQuery }

export type ReadContractBody = {
    kind: "Evm";
    network: "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bsc" | "BscTestnet" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia";
    contract: string;
    data: string;
};

export type ReadContractResponse = {
    kind: "Evm";
    data: string;
};

export type ReadContractRequest = { body: ReadContractBody }

