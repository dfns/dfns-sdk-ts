export type GetFeesQuery = {
    network: "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bsc" | "BscTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonAmoy" | "PolygonMumbai";
};

export type GetFeesResponse = {
    kind: "Eip1559";
    network: "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bsc" | "BscTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonAmoy" | "PolygonMumbai";
    blockNumber: number;
    slow: {
        maxPriorityFee: number;
        maxFee: number;
    };
    standard: {
        maxPriorityFee: number;
        maxFee: number;
    };
    fast: {
        maxPriorityFee: number;
        maxFee: number;
    };
    estimatedBaseFee: number;
};

export type GetFeesRequest = { query?: GetFeesQuery }

export type ReadContractBody = {
    kind: "Evm";
    network: "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bsc" | "BscTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonAmoy" | "PolygonMumbai";
    contract: string;
    data: string;
};

export type ReadContractResponse = {
    kind: "Evm";
    data: string;
};

export type ReadContractRequest = { body: ReadContractBody }

