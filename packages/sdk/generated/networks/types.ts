export type GetFeesQuery = {
    network: "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bsc" | "BscTestnet" | "Berachain" | "BerachainBArtio" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia";
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
    network: "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bsc" | "BscTestnet" | "Berachain" | "BerachainBArtio" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia";
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
};

export type GetFeesRequest = { query?: GetFeesQuery }

export type ReadContractBody = {
    kind: "Evm";
    network: "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bsc" | "BscTestnet" | "Berachain" | "BerachainBArtio" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia";
    contract: string;
    data: string;
};

export type ReadContractResponse = {
    kind: "Evm";
    data: string;
};

export type ReadContractRequest = { body: ReadContractBody }

