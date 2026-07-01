export type CreateSwapBody = {
    provider: "UniswapClassic";
    /** Quote to use for this swap. */
    quoteId: string;
    /** An optional reference for this Swap. */
    reference?: string | undefined;
    /** Id of the Dfns wallet spending the sourceAsset. Used for attesting that the swap is being created with the same parameters as the quote. */
    walletId: string;
    /** Id of the Dfns wallet receiving the target asset. Currently this value must be the same as the `walletId`. Used for attesting that the swap is being created with the same parameters as the quote. */
    targetWalletId?: string | undefined;
    /** The source asset that will be spent on the Swap transaction. Used for attesting that the swap is being created with the same parameters as the quote. */
    sourceAsset: {
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    } | {
        kind: "Spl";
        mint: string;
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
    } | {
        kind: "Spl";
        mint: string;
        amount: string;
    };
    /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
    slippageBps: number;
} | {
    provider: "UniswapX";
    /** Quote to use for this swap. */
    quoteId: string;
    /** An optional reference for this Swap. */
    reference?: string | undefined;
    /** Id of the Dfns wallet spending the sourceAsset. Used for attesting that the swap is being created with the same parameters as the quote. */
    walletId: string;
    /** Id of the Dfns wallet receiving the target asset. Currently this value must be the same as the `walletId`. Used for attesting that the swap is being created with the same parameters as the quote. */
    targetWalletId?: string | undefined;
    /** The source asset that will be spent on the Swap transaction. Used for attesting that the swap is being created with the same parameters as the quote. */
    sourceAsset: {
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    } | {
        kind: "Spl";
        mint: string;
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
    } | {
        kind: "Spl";
        mint: string;
        amount: string;
    };
    /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
    slippageBps: number;
} | {
    provider: "CircleCctp";
    /** Quote to use for this swap. */
    quoteId: string;
    /** An optional reference for this Swap. */
    reference?: string | undefined;
    /** Id of the Dfns wallet spending the sourceAsset. Used for attesting that the swap is being created with the same parameters as the quote. */
    walletId: string;
    /** Id of the Dfns wallet receiving the target asset. Currently this value must be the same as the `walletId`. Used for attesting that the swap is being created with the same parameters as the quote. */
    targetWalletId?: string | undefined;
    /** The source asset that will be spent on the Swap transaction. Used for attesting that the swap is being created with the same parameters as the quote. */
    sourceAsset: {
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    } | {
        kind: "Spl";
        mint: string;
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
    } | {
        kind: "Spl";
        mint: string;
        amount: string;
    };
    /** The maximum fee you will accept for this CCTP transfer, in [basis points](https://en.wikipedia.org/wiki/Basis_point) (BPS) of the amount. CCTP is burn-and-mint with no price slippage; this caps the bridge/forwarding fee — which varies with chain congestion and Fast vs Standard speed — so the burn does not revert if the fee rises. One basis point equals 0.01%. */
    feeToleranceBps: number;
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
    provider: "UniswapX" | "UniswapClassic" | "CircleCctp";
    /** The source asset for this swap transaction. */
    quotedSourceAsset: ({
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    } | {
        kind: "Spl";
        mint: string;
        amount: string;
    }) & {
        metadata: {
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "BesuTestnet" | "BesuTestnet2" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
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
    } | {
        kind: "Spl";
        mint: string;
        amount: string;
    }) & {
        metadata: {
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "BesuTestnet" | "BesuTestnet2" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
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
    requestBody: ({
        provider: "UniswapClassic";
        /** Quote to use for this swap. */
        quoteId: string;
        /** An optional reference for this Swap. */
        reference?: string | undefined;
        /** Id of the Dfns wallet spending the sourceAsset. Used for attesting that the swap is being created with the same parameters as the quote. */
        walletId: string;
        /** Id of the Dfns wallet receiving the target asset. Currently this value must be the same as the `walletId`. Used for attesting that the swap is being created with the same parameters as the quote. */
        targetWalletId?: string | undefined;
        /** The source asset that will be spent on the Swap transaction. Used for attesting that the swap is being created with the same parameters as the quote. */
        sourceAsset: {
            kind: "Native";
            amount: string;
        } | {
            kind: "Erc20";
            contract: string;
            amount: string;
        } | {
            kind: "Spl";
            mint: string;
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
        } | {
            kind: "Spl";
            mint: string;
            amount: string;
        };
        /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
        slippageBps: number;
    } | {
        provider: "UniswapX";
        /** Quote to use for this swap. */
        quoteId: string;
        /** An optional reference for this Swap. */
        reference?: string | undefined;
        /** Id of the Dfns wallet spending the sourceAsset. Used for attesting that the swap is being created with the same parameters as the quote. */
        walletId: string;
        /** Id of the Dfns wallet receiving the target asset. Currently this value must be the same as the `walletId`. Used for attesting that the swap is being created with the same parameters as the quote. */
        targetWalletId?: string | undefined;
        /** The source asset that will be spent on the Swap transaction. Used for attesting that the swap is being created with the same parameters as the quote. */
        sourceAsset: {
            kind: "Native";
            amount: string;
        } | {
            kind: "Erc20";
            contract: string;
            amount: string;
        } | {
            kind: "Spl";
            mint: string;
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
        } | {
            kind: "Spl";
            mint: string;
            amount: string;
        };
        /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
        slippageBps: number;
    } | {
        provider: "CircleCctp";
        /** Quote to use for this swap. */
        quoteId: string;
        /** An optional reference for this Swap. */
        reference?: string | undefined;
        /** Id of the Dfns wallet spending the sourceAsset. Used for attesting that the swap is being created with the same parameters as the quote. */
        walletId: string;
        /** Id of the Dfns wallet receiving the target asset. Currently this value must be the same as the `walletId`. Used for attesting that the swap is being created with the same parameters as the quote. */
        targetWalletId?: string | undefined;
        /** The source asset that will be spent on the Swap transaction. Used for attesting that the swap is being created with the same parameters as the quote. */
        sourceAsset: {
            kind: "Native";
            amount: string;
        } | {
            kind: "Erc20";
            contract: string;
            amount: string;
        } | {
            kind: "Spl";
            mint: string;
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
        } | {
            kind: "Spl";
            mint: string;
            amount: string;
        };
        /** The maximum fee you will accept for this CCTP transfer, in [basis points](https://en.wikipedia.org/wiki/Basis_point) (BPS) of the amount. CCTP is burn-and-mint with no price slippage; this caps the bridge/forwarding fee — which varies with chain congestion and Fast vs Standard speed — so the burn does not revert if the fee rises. One basis point equals 0.01%. */
        feeToleranceBps: number;
    }) | {};
    /** The user who initiated the request. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    /** The failure reason, if any. Only present when status is Failed. */
    failureReason?: string | undefined;
    /** Provider-specific intermediate state, only set while `status` is InProgress. Values are opaque strings — clients map them to progress bars, labels or icons as needed. For CCTP one of: `signing-permit`, `burning-source`, `awaiting-source-finality`, `awaiting-attestation`, `awaiting-forwarder`. Undefined for providers without intermediate sub-states. */
    protocolStatus?: string | undefined;
};

export type CreateSwapRequest = { body: CreateSwapBody }

export type CreateSwapQuoteBody = {
    provider: "UniswapClassic";
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
    } | {
        kind: "Spl";
        mint: string;
        amount: string;
    };
    /** The target asset that will be received with the Swap transaction, follows the same structure as sourceAsset, but doesn't include the amount. */
    targetAsset: {
        kind: "Native";
    } | {
        kind: "Erc20";
        contract: string;
    } | {
        kind: "Spl";
        mint: string;
    };
    /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
    slippageBps: number;
} | {
    provider: "UniswapX";
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
    } | {
        kind: "Spl";
        mint: string;
        amount: string;
    };
    /** The target asset that will be received with the Swap transaction, follows the same structure as sourceAsset, but doesn't include the amount. */
    targetAsset: {
        kind: "Native";
    } | {
        kind: "Erc20";
        contract: string;
    } | {
        kind: "Spl";
        mint: string;
    };
    /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
    slippageBps: number;
} | {
    provider: "CircleCctp";
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
    } | {
        kind: "Spl";
        mint: string;
        amount: string;
    };
    /** The target asset that will be received with the Swap transaction, follows the same structure as sourceAsset, but doesn't include the amount. */
    targetAsset: {
        kind: "Native";
    } | {
        kind: "Erc20";
        contract: string;
    } | {
        kind: "Spl";
        mint: string;
    };
    /** The maximum fee you will accept for this CCTP transfer, in [basis points](https://en.wikipedia.org/wiki/Basis_point) (BPS) of the amount. CCTP is burn-and-mint with no price slippage; this caps the bridge/forwarding fee — which varies with chain congestion and Fast vs Standard speed — so the burn does not revert if the fee rises. One basis point equals 0.01%. */
    feeToleranceBps: number;
    /** Selects Fast (~8–20s, small fast-burn fee) or Standard (~13–19min, no fast-burn fee). */
    speed?: ("Fast" | "Standard") | undefined;
    /** Solana-source only. Bind the burn to a durable nonce so it survives signing delays. */
    useDurableNonce?: boolean | undefined;
};

export type CreateSwapQuoteResponse = {
    /** ID of the Swap Quote. */
    id: string;
    /** Id of the Dfns wallet spending the sourceAsset. */
    walletId: string;
    /** If not provided, the walletId is used as the target wallet. If provided, this field is currently required to be the same as walletId */
    targetWalletId?: string | undefined;
    /** Swap provider. */
    provider: "UniswapX" | "UniswapClassic" | "CircleCctp";
    /** The source asset that will be spent on the swap transaction. */
    sourceAsset: ({
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    } | {
        kind: "Spl";
        mint: string;
        amount: string;
    }) & {
        metadata: {
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "BesuTestnet" | "BesuTestnet2" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
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
    } | {
        kind: "Spl";
        mint: string;
        amount: string;
    }) & {
        metadata: {
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "BesuTestnet" | "BesuTestnet2" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
            name?: string | undefined;
            symbol?: string | undefined;
            decimals: number;
            tid?: string | undefined;
        };
    };
    /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
    slippageBps: number;
    /** Total fee deducted from the source amount to reach the target amount, in the source asset base units. Set for CCTP (the quoted maxFee Circle may deduct); omitted for providers that do not surface a single fee figure. */
    fee?: string | undefined;
    /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date (must be UTC). When the quote was created. */
    dateCreated: string;
    /** The full request used for obtaining this quote. */
    requestBody: ({
        provider: "UniswapClassic";
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
        } | {
            kind: "Spl";
            mint: string;
            amount: string;
        };
        /** The target asset that will be received with the Swap transaction, follows the same structure as sourceAsset, but doesn't include the amount. */
        targetAsset: {
            kind: "Native";
        } | {
            kind: "Erc20";
            contract: string;
        } | {
            kind: "Spl";
            mint: string;
        };
        /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
        slippageBps: number;
    } | {
        provider: "UniswapX";
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
        } | {
            kind: "Spl";
            mint: string;
            amount: string;
        };
        /** The target asset that will be received with the Swap transaction, follows the same structure as sourceAsset, but doesn't include the amount. */
        targetAsset: {
            kind: "Native";
        } | {
            kind: "Erc20";
            contract: string;
        } | {
            kind: "Spl";
            mint: string;
        };
        /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
        slippageBps: number;
    } | {
        provider: "CircleCctp";
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
        } | {
            kind: "Spl";
            mint: string;
            amount: string;
        };
        /** The target asset that will be received with the Swap transaction, follows the same structure as sourceAsset, but doesn't include the amount. */
        targetAsset: {
            kind: "Native";
        } | {
            kind: "Erc20";
            contract: string;
        } | {
            kind: "Spl";
            mint: string;
        };
        /** The maximum fee you will accept for this CCTP transfer, in [basis points](https://en.wikipedia.org/wiki/Basis_point) (BPS) of the amount. CCTP is burn-and-mint with no price slippage; this caps the bridge/forwarding fee — which varies with chain congestion and Fast vs Standard speed — so the burn does not revert if the fee rises. One basis point equals 0.01%. */
        feeToleranceBps: number;
        /** Selects Fast (~8–20s, small fast-burn fee) or Standard (~13–19min, no fast-burn fee). */
        speed?: ("Fast" | "Standard") | undefined;
        /** Solana-source only. Bind the burn to a durable nonce so it survives signing delays. */
        useDurableNonce?: boolean | undefined;
    }) | {};
    /** The user who initiated the request. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
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
    provider: "UniswapX" | "UniswapClassic" | "CircleCctp";
    /** The source asset for this swap transaction. */
    quotedSourceAsset: ({
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    } | {
        kind: "Spl";
        mint: string;
        amount: string;
    }) & {
        metadata: {
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "BesuTestnet" | "BesuTestnet2" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
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
    } | {
        kind: "Spl";
        mint: string;
        amount: string;
    }) & {
        metadata: {
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "BesuTestnet" | "BesuTestnet2" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
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
    requestBody: ({
        provider: "UniswapClassic";
        /** Quote to use for this swap. */
        quoteId: string;
        /** An optional reference for this Swap. */
        reference?: string | undefined;
        /** Id of the Dfns wallet spending the sourceAsset. Used for attesting that the swap is being created with the same parameters as the quote. */
        walletId: string;
        /** Id of the Dfns wallet receiving the target asset. Currently this value must be the same as the `walletId`. Used for attesting that the swap is being created with the same parameters as the quote. */
        targetWalletId?: string | undefined;
        /** The source asset that will be spent on the Swap transaction. Used for attesting that the swap is being created with the same parameters as the quote. */
        sourceAsset: {
            kind: "Native";
            amount: string;
        } | {
            kind: "Erc20";
            contract: string;
            amount: string;
        } | {
            kind: "Spl";
            mint: string;
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
        } | {
            kind: "Spl";
            mint: string;
            amount: string;
        };
        /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
        slippageBps: number;
    } | {
        provider: "UniswapX";
        /** Quote to use for this swap. */
        quoteId: string;
        /** An optional reference for this Swap. */
        reference?: string | undefined;
        /** Id of the Dfns wallet spending the sourceAsset. Used for attesting that the swap is being created with the same parameters as the quote. */
        walletId: string;
        /** Id of the Dfns wallet receiving the target asset. Currently this value must be the same as the `walletId`. Used for attesting that the swap is being created with the same parameters as the quote. */
        targetWalletId?: string | undefined;
        /** The source asset that will be spent on the Swap transaction. Used for attesting that the swap is being created with the same parameters as the quote. */
        sourceAsset: {
            kind: "Native";
            amount: string;
        } | {
            kind: "Erc20";
            contract: string;
            amount: string;
        } | {
            kind: "Spl";
            mint: string;
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
        } | {
            kind: "Spl";
            mint: string;
            amount: string;
        };
        /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
        slippageBps: number;
    } | {
        provider: "CircleCctp";
        /** Quote to use for this swap. */
        quoteId: string;
        /** An optional reference for this Swap. */
        reference?: string | undefined;
        /** Id of the Dfns wallet spending the sourceAsset. Used for attesting that the swap is being created with the same parameters as the quote. */
        walletId: string;
        /** Id of the Dfns wallet receiving the target asset. Currently this value must be the same as the `walletId`. Used for attesting that the swap is being created with the same parameters as the quote. */
        targetWalletId?: string | undefined;
        /** The source asset that will be spent on the Swap transaction. Used for attesting that the swap is being created with the same parameters as the quote. */
        sourceAsset: {
            kind: "Native";
            amount: string;
        } | {
            kind: "Erc20";
            contract: string;
            amount: string;
        } | {
            kind: "Spl";
            mint: string;
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
        } | {
            kind: "Spl";
            mint: string;
            amount: string;
        };
        /** The maximum fee you will accept for this CCTP transfer, in [basis points](https://en.wikipedia.org/wiki/Basis_point) (BPS) of the amount. CCTP is burn-and-mint with no price slippage; this caps the bridge/forwarding fee — which varies with chain congestion and Fast vs Standard speed — so the burn does not revert if the fee rises. One basis point equals 0.01%. */
        feeToleranceBps: number;
    }) | {};
    /** The user who initiated the request. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    /** The failure reason, if any. Only present when status is Failed. */
    failureReason?: string | undefined;
    /** Provider-specific intermediate state, only set while `status` is InProgress. Values are opaque strings — clients map them to progress bars, labels or icons as needed. For CCTP one of: `signing-permit`, `burning-source`, `awaiting-source-finality`, `awaiting-attestation`, `awaiting-forwarder`. Undefined for providers without intermediate sub-states. */
    protocolStatus?: string | undefined;
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
    provider: "UniswapX" | "UniswapClassic" | "CircleCctp";
    /** The source asset that will be spent on the swap transaction. */
    sourceAsset: ({
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    } | {
        kind: "Spl";
        mint: string;
        amount: string;
    }) & {
        metadata: {
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "BesuTestnet" | "BesuTestnet2" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
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
    } | {
        kind: "Spl";
        mint: string;
        amount: string;
    }) & {
        metadata: {
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "BesuTestnet" | "BesuTestnet2" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
            name?: string | undefined;
            symbol?: string | undefined;
            decimals: number;
            tid?: string | undefined;
        };
    };
    /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
    slippageBps: number;
    /** Total fee deducted from the source amount to reach the target amount, in the source asset base units. Set for CCTP (the quoted maxFee Circle may deduct); omitted for providers that do not surface a single fee figure. */
    fee?: string | undefined;
    /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date (must be UTC). When the quote was created. */
    dateCreated: string;
    /** The full request used for obtaining this quote. */
    requestBody: ({
        provider: "UniswapClassic";
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
        } | {
            kind: "Spl";
            mint: string;
            amount: string;
        };
        /** The target asset that will be received with the Swap transaction, follows the same structure as sourceAsset, but doesn't include the amount. */
        targetAsset: {
            kind: "Native";
        } | {
            kind: "Erc20";
            contract: string;
        } | {
            kind: "Spl";
            mint: string;
        };
        /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
        slippageBps: number;
    } | {
        provider: "UniswapX";
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
        } | {
            kind: "Spl";
            mint: string;
            amount: string;
        };
        /** The target asset that will be received with the Swap transaction, follows the same structure as sourceAsset, but doesn't include the amount. */
        targetAsset: {
            kind: "Native";
        } | {
            kind: "Erc20";
            contract: string;
        } | {
            kind: "Spl";
            mint: string;
        };
        /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
        slippageBps: number;
    } | {
        provider: "CircleCctp";
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
        } | {
            kind: "Spl";
            mint: string;
            amount: string;
        };
        /** The target asset that will be received with the Swap transaction, follows the same structure as sourceAsset, but doesn't include the amount. */
        targetAsset: {
            kind: "Native";
        } | {
            kind: "Erc20";
            contract: string;
        } | {
            kind: "Spl";
            mint: string;
        };
        /** The maximum fee you will accept for this CCTP transfer, in [basis points](https://en.wikipedia.org/wiki/Basis_point) (BPS) of the amount. CCTP is burn-and-mint with no price slippage; this caps the bridge/forwarding fee — which varies with chain congestion and Fast vs Standard speed — so the burn does not revert if the fee rises. One basis point equals 0.01%. */
        feeToleranceBps: number;
        /** Selects Fast (~8–20s, small fast-burn fee) or Standard (~13–19min, no fast-burn fee). */
        speed?: ("Fast" | "Standard") | undefined;
        /** Solana-source only. Bind the burn to a durable nonce so it survives signing delays. */
        useDurableNonce?: boolean | undefined;
    }) | {};
    /** The user who initiated the request. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
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
        provider: "UniswapX" | "UniswapClassic" | "CircleCctp";
        /** The source asset for this swap transaction. */
        quotedSourceAsset: ({
            kind: "Native";
            amount: string;
        } | {
            kind: "Erc20";
            contract: string;
            amount: string;
        } | {
            kind: "Spl";
            mint: string;
            amount: string;
        }) & {
            metadata: {
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "BesuTestnet" | "BesuTestnet2" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
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
        } | {
            kind: "Spl";
            mint: string;
            amount: string;
        }) & {
            metadata: {
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "BesuTestnet" | "BesuTestnet2" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
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
        requestBody: ({
            provider: "UniswapClassic";
            /** Quote to use for this swap. */
            quoteId: string;
            /** An optional reference for this Swap. */
            reference?: string | undefined;
            /** Id of the Dfns wallet spending the sourceAsset. Used for attesting that the swap is being created with the same parameters as the quote. */
            walletId: string;
            /** Id of the Dfns wallet receiving the target asset. Currently this value must be the same as the `walletId`. Used for attesting that the swap is being created with the same parameters as the quote. */
            targetWalletId?: string | undefined;
            /** The source asset that will be spent on the Swap transaction. Used for attesting that the swap is being created with the same parameters as the quote. */
            sourceAsset: {
                kind: "Native";
                amount: string;
            } | {
                kind: "Erc20";
                contract: string;
                amount: string;
            } | {
                kind: "Spl";
                mint: string;
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
            } | {
                kind: "Spl";
                mint: string;
                amount: string;
            };
            /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
            slippageBps: number;
        } | {
            provider: "UniswapX";
            /** Quote to use for this swap. */
            quoteId: string;
            /** An optional reference for this Swap. */
            reference?: string | undefined;
            /** Id of the Dfns wallet spending the sourceAsset. Used for attesting that the swap is being created with the same parameters as the quote. */
            walletId: string;
            /** Id of the Dfns wallet receiving the target asset. Currently this value must be the same as the `walletId`. Used for attesting that the swap is being created with the same parameters as the quote. */
            targetWalletId?: string | undefined;
            /** The source asset that will be spent on the Swap transaction. Used for attesting that the swap is being created with the same parameters as the quote. */
            sourceAsset: {
                kind: "Native";
                amount: string;
            } | {
                kind: "Erc20";
                contract: string;
                amount: string;
            } | {
                kind: "Spl";
                mint: string;
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
            } | {
                kind: "Spl";
                mint: string;
                amount: string;
            };
            /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you're willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
            slippageBps: number;
        } | {
            provider: "CircleCctp";
            /** Quote to use for this swap. */
            quoteId: string;
            /** An optional reference for this Swap. */
            reference?: string | undefined;
            /** Id of the Dfns wallet spending the sourceAsset. Used for attesting that the swap is being created with the same parameters as the quote. */
            walletId: string;
            /** Id of the Dfns wallet receiving the target asset. Currently this value must be the same as the `walletId`. Used for attesting that the swap is being created with the same parameters as the quote. */
            targetWalletId?: string | undefined;
            /** The source asset that will be spent on the Swap transaction. Used for attesting that the swap is being created with the same parameters as the quote. */
            sourceAsset: {
                kind: "Native";
                amount: string;
            } | {
                kind: "Erc20";
                contract: string;
                amount: string;
            } | {
                kind: "Spl";
                mint: string;
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
            } | {
                kind: "Spl";
                mint: string;
                amount: string;
            };
            /** The maximum fee you will accept for this CCTP transfer, in [basis points](https://en.wikipedia.org/wiki/Basis_point) (BPS) of the amount. CCTP is burn-and-mint with no price slippage; this caps the bridge/forwarding fee — which varies with chain congestion and Fast vs Standard speed — so the burn does not revert if the fee rises. One basis point equals 0.01%. */
            feeToleranceBps: number;
        }) | {};
        /** The user who initiated the request. */
        requester: {
            /** User id. */
            userId: string;
            /** Token id. */
            tokenId?: string | undefined;
        };
        /** The failure reason, if any. Only present when status is Failed. */
        failureReason?: string | undefined;
        /** Provider-specific intermediate state, only set while `status` is InProgress. Values are opaque strings — clients map them to progress bars, labels or icons as needed. For CCTP one of: `signing-permit`, `burning-source`, `awaiting-source-finality`, `awaiting-attestation`, `awaiting-forwarder`. Undefined for providers without intermediate sub-states. */
        protocolStatus?: string | undefined;
    }[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListSwapsRequest = { query?: ListSwapsQuery }

