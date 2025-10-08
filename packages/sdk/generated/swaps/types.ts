export type CreateSwapBody = {
    /** Quote to use for this swap. */
    quoteId: string;
    /** An optional reference for this Swap. */
    reference?: string | undefined;
    /** Provided for this swap. Used for attesting that the swap is being created with the same parameters as the quote. */
    provider: "UniswapX" | "UniswapClassic";
    /** Id of the Dfns wallet spending the sourceAsset. Used for attesting that the swap is being created with the same parameters as the quote. */
    walletId: string;
    /** Id of the Dfns wallet receiving the target asset. Currently this value must be the same as the `walletId`. Used for attesting that the swap is being created with the same parameters as the quote. */
    targetWalletId?: string | undefined;
    /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you are willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. Used for attesting that the swap is being created with the same parameters as the quote.  */
    slippageBps: number;
    /** The source asset that will be spent on the Swap transaction. Used for attesting that the swap is being created with the same parameters as the quote. */
    sourceAsset: {
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    };
    /** The target asset that will be received with the Swap transaction. Used for attesting that the swap is being created with the same parameters as the quote. */
    targetAsset: {
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    };
};

export type CreateSwapResponse = {
    /** Swap id. */
    id: string;
    /** Id of the quote this swap is based on. */
    quoteId: string;
    /** Optional user-defined reference for this Swap. */
    reference: string | null;
    /** Id of the Dfns wallet spending the sourceAsset. */
    walletId: string;
    /** Id of the Dfns wallet receiving the target asset. Currently this value must be the same as the `walletId`. */
    targetWalletId: string;
    /** Swap status. */
    status: "PendingPolicyApproval" | "InProgress" | "Completed" | "Failed" | "Rejected";
    /** Swap provider. */
    provider: "UniswapX" | "UniswapClassic";
    /** The source asset for this swap transaction. */
    quotedSourceAsset: ({
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    }) & {
        metadata: {
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
            name?: string | undefined;
            symbol?: string | undefined;
            decimals: number;
            tid?: string | undefined;
        };
    };
    /** The target asset for this swap transaction. */
    quotedTargetAsset: ({
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    }) & {
        metadata: {
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
            name?: string | undefined;
            symbol?: string | undefined;
            decimals: number;
            tid?: string | undefined;
        };
    };
    /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you are willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
    slippageBps: number;
    /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date (must be UTC). When the swap was initiated. */
    dateCreated: string;
    /** The full request used for initiating this swap. */
    requestBody: {
        /** Quote to use for this swap. */
        quoteId: string;
        /** An optional reference for this Swap. */
        reference?: string | undefined;
        /** Provided for this swap. Used for attesting that the swap is being created with the same parameters as the quote. */
        provider: "UniswapX" | "UniswapClassic";
        /** Id of the Dfns wallet spending the sourceAsset. Used for attesting that the swap is being created with the same parameters as the quote. */
        walletId: string;
        /** Id of the Dfns wallet receiving the target asset. Currently this value must be the same as the `walletId`. Used for attesting that the swap is being created with the same parameters as the quote. */
        targetWalletId?: string | undefined;
        /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you are willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. Used for attesting that the swap is being created with the same parameters as the quote.  */
        slippageBps: number;
        /** The source asset that will be spent on the Swap transaction. Used for attesting that the swap is being created with the same parameters as the quote. */
        sourceAsset: {
            kind: "Native";
            amount: string;
        } | {
            kind: "Erc20";
            contract: string;
            amount: string;
        };
        /** The target asset that will be received with the Swap transaction. Used for attesting that the swap is being created with the same parameters as the quote. */
        targetAsset: {
            kind: "Native";
            amount: string;
        } | {
            kind: "Erc20";
            contract: string;
            amount: string;
        };
    } | {};
    requester: {
        /** User (could be a service account) who requested the quote. */
        userId: string;
        /** Service Account token or Personal Access token used when requesting the quote. */
        tokenId?: string | undefined;
    };
};

export type CreateSwapRequest = { body: CreateSwapBody }

export type CreateSwapQuoteBody = {
    /** Swap provider. */
    provider: "UniswapX" | "UniswapClassic";
    /** Id of the Dfns wallet spending the sourceAsset. */
    walletId: string;
    /** Id of the Dfns wallet receiving the target asset. Currently this value must be the same as the `walletId`. */
    targetWalletId?: string | undefined;
    /** The source asset that will be spent on the Swap transaction, following the same stucture as the [transfer API](https://docs.dfns.co/api-reference/wallets/transfer-asset). */
    sourceAsset: {
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    };
    /** The target asset that will be received with the Swap transaction, follows the same structure as sourceAsset, but doesn't include the amount. */
    targetAsset: {
        kind: "Native";
    } | {
        kind: "Erc20";
        contract: string;
    };
    /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
    slippageBps: number;
};

export type CreateSwapQuoteResponse = {
    /** ID of the Swap Quote. */
    id: string;
    /** Id of the Dfns wallet spending the sourceAsset. */
    walletId: string;
    /** If not provided, the walletId is used as the target wallet. If provided, this field is currently required to be the same as walletId */
    targetWalletId?: string | undefined;
    /** Swap provider. */
    provider: "UniswapX" | "UniswapClassic";
    /** The source asset that will be spent on the swap transaction. */
    sourceAsset: ({
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    }) & {
        metadata: {
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
            name?: string | undefined;
            symbol?: string | undefined;
            decimals: number;
            tid?: string | undefined;
        };
    };
    /** The target asset that will be received with the swap transaction. */
    targetAsset: ({
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    }) & {
        metadata: {
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
            name?: string | undefined;
            symbol?: string | undefined;
            decimals: number;
            tid?: string | undefined;
        };
    };
    /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
    slippageBps: number;
    /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date (must be UTC). When the quote was created. */
    dateCreated: string;
    /** The full request used for obtaining this quote. */
    requestBody: {
        /** Swap provider. */
        provider: "UniswapX" | "UniswapClassic";
        /** Id of the Dfns wallet spending the sourceAsset. */
        walletId: string;
        /** Id of the Dfns wallet receiving the target asset. Currently this value must be the same as the `walletId`. */
        targetWalletId?: string | undefined;
        /** The source asset that will be spent on the Swap transaction, following the same stucture as the [transfer API](https://docs.dfns.co/api-reference/wallets/transfer-asset). */
        sourceAsset: {
            kind: "Native";
            amount: string;
        } | {
            kind: "Erc20";
            contract: string;
            amount: string;
        };
        /** The target asset that will be received with the Swap transaction, follows the same structure as sourceAsset, but doesn't include the amount. */
        targetAsset: {
            kind: "Native";
        } | {
            kind: "Erc20";
            contract: string;
        };
        /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
        slippageBps: number;
    } | {};
    requester: {
        /** User (could be a service account) who requested the quote. */
        userId: string;
        /** Service Account token or Personal Access token used when requesting the quote. */
        tokenId?: string | undefined;
    };
};

export type CreateSwapQuoteRequest = { body: CreateSwapQuoteBody }

export type GetSwapParams = {
    /** Id of the swap for which we want to get details. */
    swapId: string;
};

export type GetSwapResponse = {
    /** Swap id. */
    id: string;
    /** Id of the quote this swap is based on. */
    quoteId: string;
    /** Optional user-defined reference for this Swap. */
    reference: string | null;
    /** Id of the Dfns wallet spending the sourceAsset. */
    walletId: string;
    /** Id of the Dfns wallet receiving the target asset. Currently this value must be the same as the `walletId`. */
    targetWalletId: string;
    /** Swap status. */
    status: "PendingPolicyApproval" | "InProgress" | "Completed" | "Failed" | "Rejected";
    /** Swap provider. */
    provider: "UniswapX" | "UniswapClassic";
    /** The source asset for this swap transaction. */
    quotedSourceAsset: ({
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    }) & {
        metadata: {
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
            name?: string | undefined;
            symbol?: string | undefined;
            decimals: number;
            tid?: string | undefined;
        };
    };
    /** The target asset for this swap transaction. */
    quotedTargetAsset: ({
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    }) & {
        metadata: {
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
            name?: string | undefined;
            symbol?: string | undefined;
            decimals: number;
            tid?: string | undefined;
        };
    };
    /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you are willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
    slippageBps: number;
    /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date (must be UTC). When the swap was initiated. */
    dateCreated: string;
    /** The full request used for initiating this swap. */
    requestBody: {
        /** Quote to use for this swap. */
        quoteId: string;
        /** An optional reference for this Swap. */
        reference?: string | undefined;
        /** Provided for this swap. Used for attesting that the swap is being created with the same parameters as the quote. */
        provider: "UniswapX" | "UniswapClassic";
        /** Id of the Dfns wallet spending the sourceAsset. Used for attesting that the swap is being created with the same parameters as the quote. */
        walletId: string;
        /** Id of the Dfns wallet receiving the target asset. Currently this value must be the same as the `walletId`. Used for attesting that the swap is being created with the same parameters as the quote. */
        targetWalletId?: string | undefined;
        /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you are willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. Used for attesting that the swap is being created with the same parameters as the quote.  */
        slippageBps: number;
        /** The source asset that will be spent on the Swap transaction. Used for attesting that the swap is being created with the same parameters as the quote. */
        sourceAsset: {
            kind: "Native";
            amount: string;
        } | {
            kind: "Erc20";
            contract: string;
            amount: string;
        };
        /** The target asset that will be received with the Swap transaction. Used for attesting that the swap is being created with the same parameters as the quote. */
        targetAsset: {
            kind: "Native";
            amount: string;
        } | {
            kind: "Erc20";
            contract: string;
            amount: string;
        };
    } | {};
    requester: {
        /** User (could be a service account) who requested the quote. */
        userId: string;
        /** Service Account token or Personal Access token used when requesting the quote. */
        tokenId?: string | undefined;
    };
};

export type GetSwapRequest = GetSwapParams

export type GetSwapQuoteParams = {
    /** The ID of the Swap Quote. */
    quoteId: string;
};

export type GetSwapQuoteResponse = {
    /** ID of the Swap Quote. */
    id: string;
    /** Id of the Dfns wallet spending the sourceAsset. */
    walletId: string;
    /** If not provided, the walletId is used as the target wallet. If provided, this field is currently required to be the same as walletId */
    targetWalletId?: string | undefined;
    /** Swap provider. */
    provider: "UniswapX" | "UniswapClassic";
    /** The source asset that will be spent on the swap transaction. */
    sourceAsset: ({
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    }) & {
        metadata: {
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
            name?: string | undefined;
            symbol?: string | undefined;
            decimals: number;
            tid?: string | undefined;
        };
    };
    /** The target asset that will be received with the swap transaction. */
    targetAsset: ({
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    }) & {
        metadata: {
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
            name?: string | undefined;
            symbol?: string | undefined;
            decimals: number;
            tid?: string | undefined;
        };
    };
    /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
    slippageBps: number;
    /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date (must be UTC). When the quote was created. */
    dateCreated: string;
    /** The full request used for obtaining this quote. */
    requestBody: {
        /** Swap provider. */
        provider: "UniswapX" | "UniswapClassic";
        /** Id of the Dfns wallet spending the sourceAsset. */
        walletId: string;
        /** Id of the Dfns wallet receiving the target asset. Currently this value must be the same as the `walletId`. */
        targetWalletId?: string | undefined;
        /** The source asset that will be spent on the Swap transaction, following the same stucture as the [transfer API](https://docs.dfns.co/api-reference/wallets/transfer-asset). */
        sourceAsset: {
            kind: "Native";
            amount: string;
        } | {
            kind: "Erc20";
            contract: string;
            amount: string;
        };
        /** The target asset that will be received with the Swap transaction, follows the same structure as sourceAsset, but doesn't include the amount. */
        targetAsset: {
            kind: "Native";
        } | {
            kind: "Erc20";
            contract: string;
        };
        /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
        slippageBps: number;
    } | {};
    requester: {
        /** User (could be a service account) who requested the quote. */
        userId: string;
        /** Service Account token or Personal Access token used when requesting the quote. */
        tokenId?: string | undefined;
    };
};

export type GetSwapQuoteRequest = GetSwapQuoteParams

export type ListSwapsQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
};

export type ListSwapsResponse = {
    /** Current page items. */
    items: {
        /** Swap id. */
        id: string;
        /** Id of the quote this swap is based on. */
        quoteId: string;
        /** Optional user-defined reference for this Swap. */
        reference: string | null;
        /** Id of the Dfns wallet spending the sourceAsset. */
        walletId: string;
        /** Id of the Dfns wallet receiving the target asset. Currently this value must be the same as the `walletId`. */
        targetWalletId: string;
        /** Swap status. */
        status: "PendingPolicyApproval" | "InProgress" | "Completed" | "Failed" | "Rejected";
        /** Swap provider. */
        provider: "UniswapX" | "UniswapClassic";
        /** The source asset for this swap transaction. */
        quotedSourceAsset: ({
            kind: "Native";
            amount: string;
        } | {
            kind: "Erc20";
            contract: string;
            amount: string;
        }) & {
            metadata: {
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
                name?: string | undefined;
                symbol?: string | undefined;
                decimals: number;
                tid?: string | undefined;
            };
        };
        /** The target asset for this swap transaction. */
        quotedTargetAsset: ({
            kind: "Native";
            amount: string;
        } | {
            kind: "Erc20";
            contract: string;
            amount: string;
        }) & {
            metadata: {
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
                name?: string | undefined;
                symbol?: string | undefined;
                decimals: number;
                tid?: string | undefined;
            };
        };
        /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you are willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
        slippageBps: number;
        /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date (must be UTC). When the swap was initiated. */
        dateCreated: string;
        /** The full request used for initiating this swap. */
        requestBody: {
            /** Quote to use for this swap. */
            quoteId: string;
            /** An optional reference for this Swap. */
            reference?: string | undefined;
            /** Provided for this swap. Used for attesting that the swap is being created with the same parameters as the quote. */
            provider: "UniswapX" | "UniswapClassic";
            /** Id of the Dfns wallet spending the sourceAsset. Used for attesting that the swap is being created with the same parameters as the quote. */
            walletId: string;
            /** Id of the Dfns wallet receiving the target asset. Currently this value must be the same as the `walletId`. Used for attesting that the swap is being created with the same parameters as the quote. */
            targetWalletId?: string | undefined;
            /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you are willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. Used for attesting that the swap is being created with the same parameters as the quote.  */
            slippageBps: number;
            /** The source asset that will be spent on the Swap transaction. Used for attesting that the swap is being created with the same parameters as the quote. */
            sourceAsset: {
                kind: "Native";
                amount: string;
            } | {
                kind: "Erc20";
                contract: string;
                amount: string;
            };
            /** The target asset that will be received with the Swap transaction. Used for attesting that the swap is being created with the same parameters as the quote. */
            targetAsset: {
                kind: "Native";
                amount: string;
            } | {
                kind: "Erc20";
                contract: string;
                amount: string;
            };
        } | {};
        requester: {
            /** User (could be a service account) who requested the quote. */
            userId: string;
            /** Service Account token or Personal Access token used when requesting the quote. */
            tokenId?: string | undefined;
        };
    }[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListSwapsRequest = { query?: ListSwapsQuery }

