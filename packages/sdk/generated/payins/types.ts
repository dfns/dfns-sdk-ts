export type CreatePayinBody = {
    /** The destination wallet for the on-ramped funds. */
    walletId: string;
    /** The amount to deliver on-chain, in currency units (e.g. "100.00"). */
    amount: string;
    provider: "CircleMint";
    /** Fiat currency of the payin (determines the delivered stablecoin, e.g. USD → USDC, EUR → EURC). */
    currency: "USD" | "EUR";
};

export type CreatePayinResponse = {
    /** Payin id. */
    id: string;
    /** The destination wallet for the on-ramped funds. */
    walletId: string;
    /** The amount to deliver on-chain, in currency units (e.g. "100.00"). */
    amount: string;
    /** Fiat currency of the payin (determines the delivered stablecoin, e.g. USD → USDC, EUR → EURC). */
    currency: "USD" | "EUR";
    /** The network the funds are delivered on (the destination wallet network). */
    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
    /** The current status of the payin. */
    status: "Processing" | "Completed" | "Failed";
    /** The user/token that initiated the payin. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    dateCreated: string;
    dateFinalized?: string | undefined;
    provider: "CircleMint";
    /** Circle Mint provider-specific payin data. */
    data: {
        /** The Circle Mint execution status. */
        executionStatus: "Initializing" | "AwaitingTransfer" | "Completed" | "Failed";
        /** Reason for the current status, primarily for failure cases. */
        statusReason?: string | undefined;
        /** Circle recipient-registry id for the destination address (approved once in Circle's console). */
        recipientAddressId?: string | undefined;
        /** The id of the Circle transfer delivering the funds on-chain. */
        circleTransferId?: string | undefined;
        /** The blockchain transaction hash of the delivery transfer. */
        transactionHash?: string | undefined;
        dateTransferConfirmed?: string | undefined;
    };
};

export type CreatePayinRequest = { body: CreatePayinBody }

export type CreatePayinRecipientBody = {
    provider: "CircleMint";
    /** The wallet to register as a Circle Mint recipient. */
    walletId: string;
    /** Fiat currency of the payin (determines the delivered stablecoin, e.g. USD → USDC, EUR → EURC). */
    currency: "USD" | "EUR";
};

export type CreatePayinRecipientResponse = {
    /** Payin provider. */
    provider: "CircleMint";
    /** The wallet whose address is (to be) registered as a recipient. */
    walletId: string;
    /** Fiat currency of the payin (determines the delivered stablecoin, e.g. USD → USDC, EUR → EURC). */
    currency: "USD" | "EUR";
    /** Recipient status. */
    status: "NotRegistered" | "PendingVerification" | "Active";
    /** The provider's recipient-registry id, once registered. */
    recipientAddressId?: string | undefined;
};

export type CreatePayinRecipientRequest = { body: CreatePayinRecipientBody }

export type GetPayinParams = {
    /** Payin id. */
    payinId: string;
};

export type GetPayinResponse = {
    /** Payin id. */
    id: string;
    /** The destination wallet for the on-ramped funds. */
    walletId: string;
    /** The amount to deliver on-chain, in currency units (e.g. "100.00"). */
    amount: string;
    /** Fiat currency of the payin (determines the delivered stablecoin, e.g. USD → USDC, EUR → EURC). */
    currency: "USD" | "EUR";
    /** The network the funds are delivered on (the destination wallet network). */
    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
    /** The current status of the payin. */
    status: "Processing" | "Completed" | "Failed";
    /** The user/token that initiated the payin. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    dateCreated: string;
    dateFinalized?: string | undefined;
    provider: "CircleMint";
    /** Circle Mint provider-specific payin data. */
    data: {
        /** The Circle Mint execution status. */
        executionStatus: "Initializing" | "AwaitingTransfer" | "Completed" | "Failed";
        /** Reason for the current status, primarily for failure cases. */
        statusReason?: string | undefined;
        /** Circle recipient-registry id for the destination address (approved once in Circle's console). */
        recipientAddressId?: string | undefined;
        /** The id of the Circle transfer delivering the funds on-chain. */
        circleTransferId?: string | undefined;
        /** The blockchain transaction hash of the delivery transfer. */
        transactionHash?: string | undefined;
        dateTransferConfirmed?: string | undefined;
    };
};

export type GetPayinRequest = GetPayinParams

export type GetPayinRecipientQuery = {
    /** The payin provider to check the recipient with. */
    provider: "CircleMint";
    /** The wallet whose recipient status to check. */
    walletId: string;
    /** Fiat currency of the payin (determines the delivered stablecoin, e.g. USD → USDC, EUR → EURC). */
    currency: "USD" | "EUR";
};

export type GetPayinRecipientResponse = {
    /** Payin provider. */
    provider: "CircleMint";
    /** The wallet whose address is (to be) registered as a recipient. */
    walletId: string;
    /** Fiat currency of the payin (determines the delivered stablecoin, e.g. USD → USDC, EUR → EURC). */
    currency: "USD" | "EUR";
    /** Recipient status. */
    status: "NotRegistered" | "PendingVerification" | "Active";
    /** The provider's recipient-registry id, once registered. */
    recipientAddressId?: string | undefined;
};

export type GetPayinRecipientRequest = { query?: GetPayinRecipientQuery }

export type ListPayinBalancesQuery = {
    /** The payin provider to fetch balances from. */
    provider: "CircleMint";
};

export type ListPayinBalancesResponse = {
    items: {
        /** Payin provider. */
        provider: "CircleMint";
        /** Fiat currency of the balance (e.g. USD, EUR). */
        currency: string;
        /** Available amount in currency units (e.g. "408.82"). */
        amount: string;
    }[];
};

export type ListPayinBalancesRequest = { query?: ListPayinBalancesQuery }

export type ListPayinsQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
    /** Filter payins by wallet ID. */
    walletId?: string | undefined;
    /** Filter payins by status (comma-separated). */
    status?: ("Processing" | "Completed" | "Failed")[] | undefined;
    /** Filter payins by provider (comma-separated). */
    provider?: ("CircleMint")[] | undefined;
};

export type ListPayinsResponse = {
    /** Current page items. */
    items: ({
        /** Payin id. */
        id: string;
        /** The destination wallet for the on-ramped funds. */
        walletId: string;
        /** The amount to deliver on-chain, in currency units (e.g. "100.00"). */
        amount: string;
        /** Fiat currency of the payin (determines the delivered stablecoin, e.g. USD → USDC, EUR → EURC). */
        currency: "USD" | "EUR";
        /** The network the funds are delivered on (the destination wallet network). */
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        /** The current status of the payin. */
        status: "Processing" | "Completed" | "Failed";
        /** The user/token that initiated the payin. */
        requester: {
            /** User id. */
            userId: string;
            /** Token id. */
            tokenId?: string | undefined;
        };
        dateCreated: string;
        dateFinalized?: string | undefined;
        provider: "CircleMint";
        /** Circle Mint provider-specific payin data. */
        data: {
            /** The Circle Mint execution status. */
            executionStatus: "Initializing" | "AwaitingTransfer" | "Completed" | "Failed";
            /** Reason for the current status, primarily for failure cases. */
            statusReason?: string | undefined;
            /** Circle recipient-registry id for the destination address (approved once in Circle's console). */
            recipientAddressId?: string | undefined;
            /** The id of the Circle transfer delivering the funds on-chain. */
            circleTransferId?: string | undefined;
            /** The blockchain transaction hash of the delivery transfer. */
            transactionHash?: string | undefined;
            dateTransferConfirmed?: string | undefined;
        };
    })[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListPayinsRequest = { query?: ListPayinsQuery }

