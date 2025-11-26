export type CreateAllocationBody = {
    /** Wallet id. */
    walletId: string;
    /** Ofns protocol */
    protocol: "0fns";
    /** An optional external identifier provided by the client to ensure idempotency and prevent duplicate operations. */
    externalId?: string | undefined;
    sourceAsset: {
        kind: "Erc20";
        contract: string;
        amount: string;
    };
    targetAsset: {
        kind: "Erc20";
        contract: string;
        amount: string;
    };
    /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
    slippageBps: number;
};

export type CreateAllocationResponse = {
    /** Unique identifier for the allocation investment. */
    id: string;
    /** Wallet id. */
    walletId: string;
    /** The DeFi protocol used for allocation generation. Currently supports OFNS protocol */
    protocol: "0fns";
    /** The total amount currently invested in this allocation. */
    amount: ({
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    }) & {
        metadata: {
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "XrpLedger" | "XrpLedgerTestnet";
            name?: string | undefined;
            symbol?: string | undefined;
            decimals: number;
            tid?: string | undefined;
        };
    };
    /** The total rewards earned so far in this allocation. */
    rewards: ({
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    }) & {
        metadata: {
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "XrpLedger" | "XrpLedgerTestnet";
            name?: string | undefined;
            symbol?: string | undefined;
            decimals: number;
            tid?: string | undefined;
        };
    };
    dateCreated: string;
} & {
    actions: {
        /** Unique identifier for the allocation action. */
        id: string;
        /** Unique identifier for the allocation investment. */
        allocationId: string;
        /** An optional external identifier provided by the client to ensure idempotency and prevent duplicate operations. */
        externalId?: string | undefined;
        /** The type of action being performed on the allocation investment: Deposit to add funds or Withdraw to remove funds. */
        kind: "Deposit" | "Withdraw";
        /** Status of the allocation action. Once initiated, the status will be InProgress, after processing it will be Completed or Failed. */
        status: "PendingPolicyApproval" | "InProgress" | "Completed" | "Failed" | "Rejected";
        requester: {
            /** User (could be a service account) who requested the resource. */
            userId: string;
            /** Service Account token or Personal Access token used when requesting the resource. */
            tokenId?: string | undefined;
        };
        /** The full request used for initiating this allocation action. */
        requestBody: {
            /** The type of action being performed on the allocation investment: Deposit to add funds or Withdraw to remove funds. */
            kind: "Deposit" | "Withdraw";
            /** An optional external identifier provided by the client to ensure idempotency and prevent duplicate operations. */
            externalId?: string | undefined;
            sourceAsset: {
                kind: "Erc20";
                contract: string;
                amount: string;
            };
            targetAsset: {
                kind: "Erc20";
                contract: string;
                amount: string;
            };
            /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
            slippageBps: number;
        } | {
            /** Wallet id. */
            walletId: string;
            /** Ofns protocol */
            protocol: "0fns";
            /** An optional external identifier provided by the client to ensure idempotency and prevent duplicate operations. */
            externalId?: string | undefined;
            sourceAsset: {
                kind: "Erc20";
                contract: string;
                amount: string;
            };
            targetAsset: {
                kind: "Erc20";
                contract: string;
                amount: string;
            };
            /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
            slippageBps: number;
        };
        /** The failure reason, if any. Only present when status is Failed. */
        failureReason?: string | undefined;
        dateCreated: string;
    }[];
};

export type CreateAllocationRequest = { body: CreateAllocationBody }

export type CreateAllocationActionBody = {
    /** The type of action being performed on the allocation investment: Deposit to add funds or Withdraw to remove funds. */
    kind: "Deposit" | "Withdraw";
    /** An optional external identifier provided by the client to ensure idempotency and prevent duplicate operations. */
    externalId?: string | undefined;
    sourceAsset: {
        kind: "Erc20";
        contract: string;
        amount: string;
    };
    targetAsset: {
        kind: "Erc20";
        contract: string;
        amount: string;
    };
    /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
    slippageBps: number;
};

export type CreateAllocationActionParams = {
    /** Unique identifier for the allocation investment. */
    allocationId: string;
};

export type CreateAllocationActionResponse = {
    /** Unique identifier for the allocation investment. */
    id: string;
    /** Wallet id. */
    walletId: string;
    /** The DeFi protocol used for allocation generation. Currently supports OFNS protocol */
    protocol: "0fns";
    /** The total amount currently invested in this allocation. */
    amount: ({
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    }) & {
        metadata: {
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "XrpLedger" | "XrpLedgerTestnet";
            name?: string | undefined;
            symbol?: string | undefined;
            decimals: number;
            tid?: string | undefined;
        };
    };
    /** The total rewards earned so far in this allocation. */
    rewards: ({
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    }) & {
        metadata: {
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "XrpLedger" | "XrpLedgerTestnet";
            name?: string | undefined;
            symbol?: string | undefined;
            decimals: number;
            tid?: string | undefined;
        };
    };
    dateCreated: string;
} & {
    actions: {
        /** Unique identifier for the allocation action. */
        id: string;
        /** Unique identifier for the allocation investment. */
        allocationId: string;
        /** An optional external identifier provided by the client to ensure idempotency and prevent duplicate operations. */
        externalId?: string | undefined;
        /** The type of action being performed on the allocation investment: Deposit to add funds or Withdraw to remove funds. */
        kind: "Deposit" | "Withdraw";
        /** Status of the allocation action. Once initiated, the status will be InProgress, after processing it will be Completed or Failed. */
        status: "PendingPolicyApproval" | "InProgress" | "Completed" | "Failed" | "Rejected";
        requester: {
            /** User (could be a service account) who requested the resource. */
            userId: string;
            /** Service Account token or Personal Access token used when requesting the resource. */
            tokenId?: string | undefined;
        };
        /** The full request used for initiating this allocation action. */
        requestBody: {
            /** The type of action being performed on the allocation investment: Deposit to add funds or Withdraw to remove funds. */
            kind: "Deposit" | "Withdraw";
            /** An optional external identifier provided by the client to ensure idempotency and prevent duplicate operations. */
            externalId?: string | undefined;
            sourceAsset: {
                kind: "Erc20";
                contract: string;
                amount: string;
            };
            targetAsset: {
                kind: "Erc20";
                contract: string;
                amount: string;
            };
            /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
            slippageBps: number;
        } | {
            /** Wallet id. */
            walletId: string;
            /** Ofns protocol */
            protocol: "0fns";
            /** An optional external identifier provided by the client to ensure idempotency and prevent duplicate operations. */
            externalId?: string | undefined;
            sourceAsset: {
                kind: "Erc20";
                contract: string;
                amount: string;
            };
            targetAsset: {
                kind: "Erc20";
                contract: string;
                amount: string;
            };
            /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
            slippageBps: number;
        };
        /** The failure reason, if any. Only present when status is Failed. */
        failureReason?: string | undefined;
        dateCreated: string;
    }[];
};

export type CreateAllocationActionRequest = CreateAllocationActionParams & { body: CreateAllocationActionBody }

export type GetAllocationParams = {
    /** Unique identifier for the allocation investment. */
    allocationId: string;
};

export type GetAllocationResponse = {
    /** Unique identifier for the allocation investment. */
    id: string;
    /** Wallet id. */
    walletId: string;
    /** The DeFi protocol used for allocation generation. Currently supports OFNS protocol */
    protocol: "0fns";
    /** The total amount currently invested in this allocation. */
    amount: ({
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    }) & {
        metadata: {
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "XrpLedger" | "XrpLedgerTestnet";
            name?: string | undefined;
            symbol?: string | undefined;
            decimals: number;
            tid?: string | undefined;
        };
    };
    /** The total rewards earned so far in this allocation. */
    rewards: ({
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    }) & {
        metadata: {
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "XrpLedger" | "XrpLedgerTestnet";
            name?: string | undefined;
            symbol?: string | undefined;
            decimals: number;
            tid?: string | undefined;
        };
    };
    dateCreated: string;
} & {
    actions: {
        /** Unique identifier for the allocation action. */
        id: string;
        /** Unique identifier for the allocation investment. */
        allocationId: string;
        /** An optional external identifier provided by the client to ensure idempotency and prevent duplicate operations. */
        externalId?: string | undefined;
        /** The type of action being performed on the allocation investment: Deposit to add funds or Withdraw to remove funds. */
        kind: "Deposit" | "Withdraw";
        /** Status of the allocation action. Once initiated, the status will be InProgress, after processing it will be Completed or Failed. */
        status: "PendingPolicyApproval" | "InProgress" | "Completed" | "Failed" | "Rejected";
        requester: {
            /** User (could be a service account) who requested the resource. */
            userId: string;
            /** Service Account token or Personal Access token used when requesting the resource. */
            tokenId?: string | undefined;
        };
        /** The full request used for initiating this allocation action. */
        requestBody: {
            /** The type of action being performed on the allocation investment: Deposit to add funds or Withdraw to remove funds. */
            kind: "Deposit" | "Withdraw";
            /** An optional external identifier provided by the client to ensure idempotency and prevent duplicate operations. */
            externalId?: string | undefined;
            sourceAsset: {
                kind: "Erc20";
                contract: string;
                amount: string;
            };
            targetAsset: {
                kind: "Erc20";
                contract: string;
                amount: string;
            };
            /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
            slippageBps: number;
        } | {
            /** Wallet id. */
            walletId: string;
            /** Ofns protocol */
            protocol: "0fns";
            /** An optional external identifier provided by the client to ensure idempotency and prevent duplicate operations. */
            externalId?: string | undefined;
            sourceAsset: {
                kind: "Erc20";
                contract: string;
                amount: string;
            };
            targetAsset: {
                kind: "Erc20";
                contract: string;
                amount: string;
            };
            /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
            slippageBps: number;
        };
        /** The failure reason, if any. Only present when status is Failed. */
        failureReason?: string | undefined;
        dateCreated: string;
    }[];
};

export type GetAllocationRequest = GetAllocationParams

export type ListAllocationActionsParams = {
    /** Unique identifier for the allocation investment. */
    allocationId: string;
};

export type ListAllocationActionsQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
};

export type ListAllocationActionsResponse = {
    /** Current page items. */
    items: {
        /** Unique identifier for the allocation action. */
        id: string;
        /** Unique identifier for the allocation investment. */
        allocationId: string;
        /** An optional external identifier provided by the client to ensure idempotency and prevent duplicate operations. */
        externalId?: string | undefined;
        /** The type of action being performed on the allocation investment: Deposit to add funds or Withdraw to remove funds. */
        kind: "Deposit" | "Withdraw";
        /** Status of the allocation action. Once initiated, the status will be InProgress, after processing it will be Completed or Failed. */
        status: "PendingPolicyApproval" | "InProgress" | "Completed" | "Failed" | "Rejected";
        requester: {
            /** User (could be a service account) who requested the resource. */
            userId: string;
            /** Service Account token or Personal Access token used when requesting the resource. */
            tokenId?: string | undefined;
        };
        /** The full request used for initiating this allocation action. */
        requestBody: {
            /** The type of action being performed on the allocation investment: Deposit to add funds or Withdraw to remove funds. */
            kind: "Deposit" | "Withdraw";
            /** An optional external identifier provided by the client to ensure idempotency and prevent duplicate operations. */
            externalId?: string | undefined;
            sourceAsset: {
                kind: "Erc20";
                contract: string;
                amount: string;
            };
            targetAsset: {
                kind: "Erc20";
                contract: string;
                amount: string;
            };
            /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
            slippageBps: number;
        } | {
            /** Wallet id. */
            walletId: string;
            /** Ofns protocol */
            protocol: "0fns";
            /** An optional external identifier provided by the client to ensure idempotency and prevent duplicate operations. */
            externalId?: string | undefined;
            sourceAsset: {
                kind: "Erc20";
                contract: string;
                amount: string;
            };
            targetAsset: {
                kind: "Erc20";
                contract: string;
                amount: string;
            };
            /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
            slippageBps: number;
        };
        /** The failure reason, if any. Only present when status is Failed. */
        failureReason?: string | undefined;
        dateCreated: string;
    }[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListAllocationActionsRequest = ListAllocationActionsParams & { query?: ListAllocationActionsQuery }

export type ListAllocationsQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
};

export type ListAllocationsResponse = {
    /** Current page items. */
    items: {
        /** Unique identifier for the allocation investment. */
        id: string;
        /** Wallet id. */
        walletId: string;
        /** The DeFi protocol used for allocation generation. Currently supports OFNS protocol */
        protocol: "0fns";
        /** The total amount currently invested in this allocation. */
        amount: ({
            kind: "Native";
            amount: string;
        } | {
            kind: "Erc20";
            contract: string;
            amount: string;
        }) & {
            metadata: {
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "XrpLedger" | "XrpLedgerTestnet";
                name?: string | undefined;
                symbol?: string | undefined;
                decimals: number;
                tid?: string | undefined;
            };
        };
        /** The total rewards earned so far in this allocation. */
        rewards: ({
            kind: "Native";
            amount: string;
        } | {
            kind: "Erc20";
            contract: string;
            amount: string;
        }) & {
            metadata: {
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "XrpLedger" | "XrpLedgerTestnet";
                name?: string | undefined;
                symbol?: string | undefined;
                decimals: number;
                tid?: string | undefined;
            };
        };
        dateCreated: string;
    }[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListAllocationsRequest = { query?: ListAllocationsQuery }

