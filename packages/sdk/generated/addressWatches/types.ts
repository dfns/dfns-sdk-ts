export type CreateAddressWatchBody = {
    /** Network to watch the address on. Only networks that support address watches are accepted. */
    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
    /** The on chain address to watch. */
    address: string;
    /** Address watch nickname. */
    name?: string | undefined;
    /** User-defined value that can be used to correlate the entity with an external system. */
    externalId?: string | undefined;
};

export type CreateAddressWatchResponse = {
    /** ID of the address watch. */
    id: string;
    /** Network the address is watched on. */
    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
    /** The watched on chain address. */
    address: string;
    /** Address watch nickname. */
    name?: string | undefined;
    /** User-defined value that can be used to correlate the entity with an external system. */
    externalId?: string | undefined;
    /** Address watch status. */
    status: "Active" | "Archived";
    /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date string when the address watch was created. */
    dateCreated: string;
    /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date string when the address watch was archived. */
    dateDeleted?: string | undefined;
};

export type CreateAddressWatchRequest = { body: CreateAddressWatchBody }

export type DeleteAddressWatchParams = {
    /** The address watch to delete. */
    addressWatchId: string;
};

export type DeleteAddressWatchResponse = {
    /** ID of the address watch. */
    id: string;
    /** Network the address is watched on. */
    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
    /** The watched on chain address. */
    address: string;
    /** Address watch nickname. */
    name?: string | undefined;
    /** User-defined value that can be used to correlate the entity with an external system. */
    externalId?: string | undefined;
    /** Address watch status. */
    status: "Active" | "Archived";
    /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date string when the address watch was created. */
    dateCreated: string;
    /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date string when the address watch was archived. */
    dateDeleted?: string | undefined;
};

export type DeleteAddressWatchRequest = DeleteAddressWatchParams

export type GetAddressWatchParams = {
    /** The address watch to retrieve. */
    addressWatchId: string;
};

export type GetAddressWatchResponse = {
    /** ID of the address watch. */
    id: string;
    /** Network the address is watched on. */
    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
    /** The watched on chain address. */
    address: string;
    /** Address watch nickname. */
    name?: string | undefined;
    /** User-defined value that can be used to correlate the entity with an external system. */
    externalId?: string | undefined;
    /** Address watch status. */
    status: "Active" | "Archived";
    /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date string when the address watch was created. */
    dateCreated: string;
    /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date string when the address watch was archived. */
    dateDeleted?: string | undefined;
};

export type GetAddressWatchRequest = GetAddressWatchParams

export type GetAddressWatchAssetsParams = {
    /** The address watch to retrieve the assets of. */
    addressWatchId: string;
};

export type GetAddressWatchAssetsQuery = {
    netWorth?: "true" | undefined;
};

export type GetAddressWatchAssetsResponse = {
    addressWatchId: string;
    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
    assets: (({
        kind: "Native";
    } | {
        kind: "Aip21";
        metadata: string;
    } | {
        kind: "Asa";
        assetId: string;
    } | {
        kind: "Cis2";
        tokenAddress: string;
    } | {
        kind: "Erc20" | "Snip2" | "Trc20";
        contract: string;
    } | {
        kind: "Erc7984";
        contract: string;
    } | {
        kind: "Hts";
        tokenId: string;
    } | {
        kind: "Iou";
        currency: string;
        issuer: string;
    } | {
        kind: "Cip56";
        instrumentId: string;
        instrumentAdmin: string;
    } | {
        kind: "Coin" | "LockedCoin";
        coin: string;
    } | {
        kind: "Xls33";
        issuanceId: string;
    } | {
        kind: "Asset";
        assetId: string;
    } | {
        kind: "Cis7";
        tokenId: string;
    } | {
        kind: "Sep41";
        issuer: string;
        assetCode: string;
    } | {
        kind: "Trc10";
        tokenId: string;
    } | {
        kind: "Spl" | "Spl2022";
        mint: string;
    } | {
        kind: "Tep74";
        master: string;
    }) & {
        symbol?: string | undefined;
        decimals: number;
        verified?: boolean | undefined;
        balance: string;
        quotes?: {
            [x: string]: number;
        } | undefined;
    })[];
    netWorth?: {
        [x: string]: number;
    } | undefined;
};

export type GetAddressWatchAssetsRequest = GetAddressWatchAssetsParams & { query?: GetAddressWatchAssetsQuery }

export type GetAddressWatchBlockchainEventsParams = {
    /** Address watch you want to get the blockchain events from. */
    addressWatchId: string;
};

export type GetAddressWatchBlockchainEventsQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
    name?: string | undefined;
    contract?: string | undefined;
    txHash?: string | undefined;
};

export type GetAddressWatchBlockchainEventsResponse = {
    /** Current page items. */
    items: {
        /** Deterministic event id, safe to deduplicate on. */
        id: string;
        addressWatchId: string;
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        /** Decoded event name. */
        name: string;
        blockNumber: number;
        txHash: string;
        /** Block scoped log index of the event, as a decimal string. */
        index: string;
        timestamp: string;
        /** Webhooks are emitted only once Confirmed; the list can contain Included events on networks with unfinalized indexing. */
        status: "Included" | "Confirmed";
        /** Decoded event fields, the emitting contract included. */
        data: {
            [x: string]: unknown;
        };
    }[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
    /** Address watch id. */
    addressWatchId: string;
    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
};

export type GetAddressWatchBlockchainEventsRequest = GetAddressWatchBlockchainEventsParams & { query?: GetAddressWatchBlockchainEventsQuery }

export type GetAddressWatchHistoryParams = {
    /** Address watch you want to get the history from. */
    addressWatchId: string;
};

export type GetAddressWatchHistoryQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
    /** Transfer direction. */
    direction?: ("In" | "Out") | undefined;
    /** Blockchain event kind. */
    kind?: ("NativeTransfer" | "Aip21Transfer" | "AsaTransfer" | "AssetTransfer" | "Cip56Transfer" | "Cis2Transfer" | "Cis7Transfer" | "CoinTransfer" | "Erc20Transfer" | "Erc721Transfer" | "Erc7984Transfer" | "HederaErc20Transfer" | "HederaErc721Transfer" | "Hip17Transfer" | "HtsTransfer" | "IouTransfer" | "LockedCoinTransfer" | "Sep41Transfer" | "Snip2Transfer" | "Snip3Transfer" | "SplTransfer" | "Spl2022Transfer" | "Tep74Transfer" | "Trc10Transfer" | "Trc20Transfer" | "Trc721Transfer" | "UtxoTransfer" | "Xls33Transfer") | undefined;
    contract?: string | undefined;
};

export type GetAddressWatchHistoryResponse = {
    /** Current page items. */
    items: ({
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        status: "Included" | "Confirmed";
        metadata: {
            asset: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            } | undefined;
        };
        kind: "NativeTransfer";
        from?: string | undefined;
        to?: string | undefined;
        value: string;
        fee?: string | undefined;
        memo?: string | undefined;
        liquidityPool?: string | undefined;
        balanceId?: string | undefined;
        /** @deprecated use metadata.asset.symbol instead */
        symbol: string;
        /** @deprecated use metadata.asset.decimals instead */
        decimals: number;
        /** @deprecated use metadata.asset.verified instead */
        verified?: boolean | undefined;
        addressWatchId: string;
    } | {
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        status: "Included" | "Confirmed";
        metadata: {
            asset: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            } | undefined;
        };
        kind: "Aip21Transfer";
        metadataAddress: string;
        from: string;
        to: string;
        value: string;
        fee?: string | undefined;
        addressWatchId: string;
    } | {
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        status: "Included" | "Confirmed";
        metadata: {
            asset: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            } | undefined;
        };
        kind: "AsaTransfer";
        assetId: string;
        from: string;
        to: string;
        value: string;
        fee?: string | undefined;
        optIn?: boolean | undefined;
        optOut?: boolean | undefined;
        clawback?: boolean | undefined;
        addressWatchId: string;
    } | {
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        status: "Included" | "Confirmed";
        metadata: {
            asset: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            } | undefined;
        };
        kind: "AssetTransfer";
        assetId: string;
        from?: string | undefined;
        to?: string | undefined;
        value: string;
        fee?: string | undefined;
        addressWatchId: string;
    } | {
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        status: "Included" | "Confirmed";
        metadata: {
            asset: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            } | undefined;
        };
        kind: "Cip56Transfer";
        instrumentId: string;
        instrumentAdmin: string;
        from: string;
        to: string;
        value: string;
        fee?: string | undefined;
        memo?: string | undefined;
        addressWatchId: string;
    } | {
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        status: "Included" | "Confirmed";
        metadata: {
            asset: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            } | undefined;
        };
        kind: "CoinTransfer";
        coin: string;
        from: string;
        tos?: string[] | undefined;
        value: string;
        fee?: string | undefined;
        addressWatchId: string;
    } | {
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        status: "Included" | "Confirmed";
        metadata: {
            asset: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            } | undefined;
        };
        kind: "Cis2Transfer";
        from?: string | undefined;
        to?: string | undefined;
        value: string;
        tokenAddress: string;
        fee?: string | undefined;
        addressWatchId: string;
    } | {
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        status: "Included" | "Confirmed";
        metadata: {
            asset: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            } | undefined;
        };
        kind: "Cis7Transfer";
        from?: string | undefined;
        to?: string | undefined;
        value: string;
        fee?: string | undefined;
        tokenId: string;
        memo?: string | undefined;
        addressWatchId: string;
    } | {
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        status: "Included" | "Confirmed";
        metadata: {
            asset: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            } | undefined;
        };
        kind: "Erc20Transfer";
        contract: string;
        from: string;
        to: string;
        value: string;
        fee?: string | undefined;
        /** @deprecated use metadata.asset.symbol instead */
        symbol?: string | undefined;
        /** @deprecated use metadata.asset.decimals instead */
        decimals: number;
        /** @deprecated use metadata.asset.verified instead */
        verified?: boolean | undefined;
        addressWatchId: string;
    } | {
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        status: "Included" | "Confirmed";
        metadata: {
            asset: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            } | undefined;
        };
        kind: "Erc721Transfer";
        contract: string;
        from: string;
        to: string;
        tokenId: string;
        fee?: string | undefined;
        /** @deprecated use metadata.asset.symbol instead */
        symbol?: string | undefined;
        /** @deprecated use metadata.asset.verified instead */
        verified?: boolean | undefined;
        addressWatchId: string;
    } | {
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        status: "Included" | "Confirmed";
        metadata: {
            asset: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            } | undefined;
        };
        kind: "Erc7984Transfer";
        contract: string;
        from: string;
        to: string;
        value: string;
        fee?: string | undefined;
        /** @deprecated use metadata.asset.symbol instead */
        symbol?: string | undefined;
        /** @deprecated use metadata.asset.decimals instead */
        decimals: number;
        /** @deprecated use metadata.asset.verified instead */
        verified?: boolean | undefined;
        addressWatchId: string;
    } | {
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        status: "Included" | "Confirmed";
        metadata: {
            asset: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            } | undefined;
        };
        kind: "HederaErc20Transfer";
        contract: string;
        from: string;
        to: string;
        value: string;
        fee?: string | undefined;
        transactionId?: string | undefined;
        /** EVM keccak256 hash of the HIP-410 inner tx. Absent on legacy-migrated rows. */
        evmTxHash?: string | undefined;
        /** @deprecated use metadata.asset.symbol instead */
        symbol?: string | undefined;
        /** @deprecated use metadata.asset.decimals instead */
        decimals: number;
        /** @deprecated use metadata.asset.verified instead */
        verified?: boolean | undefined;
        addressWatchId: string;
    } | {
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        status: "Included" | "Confirmed";
        metadata: {
            asset: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            } | undefined;
        };
        kind: "HederaErc721Transfer";
        contract: string;
        from: string;
        to: string;
        tokenId: string;
        fee?: string | undefined;
        transactionId?: string | undefined;
        /** EVM keccak256 hash of the HIP-410 inner tx. Absent on legacy-migrated rows. */
        evmTxHash?: string | undefined;
        /** @deprecated use metadata.asset.symbol instead */
        symbol?: string | undefined;
        /** @deprecated use metadata.asset.verified instead */
        verified?: boolean | undefined;
        addressWatchId: string;
    } | {
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        status: "Included" | "Confirmed";
        metadata: {
            asset: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            } | undefined;
        };
        kind: "Hip17Transfer";
        tokenId: string;
        serialNumber: string;
        from?: string | undefined;
        to?: string | undefined;
        fee?: string | undefined;
        transactionId?: string | undefined;
        addressWatchId: string;
    } | {
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        status: "Included" | "Confirmed";
        metadata: {
            asset: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            } | undefined;
        };
        kind: "HtsTransfer";
        tokenId?: string | undefined;
        froms: string[];
        tos: string[];
        value: string;
        fee?: string | undefined;
        transactionId?: string | undefined;
        evmTxHash?: string | undefined;
        addressWatchId: string;
    } | {
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        status: "Included" | "Confirmed";
        metadata: {
            asset: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            } | undefined;
        };
        kind: "IouTransfer";
        currency: string;
        issuer: string;
        from?: string | undefined;
        to?: string | undefined;
        value: string;
        fee?: string | undefined;
        memo?: string | undefined;
        addressWatchId: string;
    } | {
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        status: "Included" | "Confirmed";
        metadata: {
            asset: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            } | undefined;
        };
        kind: "LockedCoinTransfer";
        coin: string;
        from: string;
        tos?: string[] | undefined;
        value: string;
        fee?: string | undefined;
        addressWatchId: string;
    } | {
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        status: "Included" | "Confirmed";
        metadata: {
            asset: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            } | undefined;
        };
        kind: "Xls33Transfer";
        issuanceId: string;
        from?: string | undefined;
        to?: string | undefined;
        value: string;
        fee?: string | undefined;
        memo?: string | undefined;
        addressWatchId: string;
    } | {
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        status: "Included" | "Confirmed";
        metadata: {
            asset: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            } | undefined;
        };
        kind: "Sep41Transfer";
        issuer: string;
        assetCode: string;
        from: string;
        to: string;
        value: string;
        fee?: string | undefined;
        memo?: string | undefined;
        liquidityPool?: string | undefined;
        balanceId?: string | undefined;
        addressWatchId: string;
    } | {
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        status: "Included" | "Confirmed";
        metadata: {
            asset: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            } | undefined;
        };
        kind: "Snip2Transfer";
        contract: string;
        from: string;
        to: string;
        value: string;
        fee?: string | undefined;
        addressWatchId: string;
    } | {
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        status: "Included" | "Confirmed";
        metadata: {
            asset: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            } | undefined;
        };
        kind: "Snip3Transfer";
        contract: string;
        from: string;
        to: string;
        tokenId: string;
        fee?: string | undefined;
        addressWatchId: string;
    } | {
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        status: "Included" | "Confirmed";
        metadata: {
            asset: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            } | undefined;
        };
        kind: "SplTransfer" | "Spl2022Transfer";
        from?: string | undefined;
        to?: string | undefined;
        mint: string;
        value: string;
        fee?: string | undefined;
        addressWatchId: string;
    } | {
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        status: "Included" | "Confirmed";
        metadata: {
            asset: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            } | undefined;
        };
        kind: "Tep74Transfer";
        master: string;
        from: string;
        to?: string | undefined;
        value: string;
        fee?: string | undefined;
        memo?: string | undefined;
        addressWatchId: string;
    } | {
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        status: "Included" | "Confirmed";
        metadata: {
            asset: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            } | undefined;
        };
        kind: "Trc10Transfer";
        tokenId: string;
        from: string;
        to: string;
        value: string;
        fee?: string | undefined;
        addressWatchId: string;
    } | {
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        status: "Included" | "Confirmed";
        metadata: {
            asset: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            } | undefined;
        };
        kind: "Trc20Transfer";
        contract: string;
        from: string;
        to: string;
        value: string;
        fee?: string | undefined;
        addressWatchId: string;
    } | {
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        status: "Included" | "Confirmed";
        metadata: {
            asset: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            } | undefined;
        };
        kind: "Trc721Transfer";
        contract: string;
        from: string;
        to: string;
        tokenId: string;
        fee?: string | undefined;
        addressWatchId: string;
    } | {
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        status: "Included" | "Confirmed";
        metadata: {
            asset: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                decimals?: number | undefined;
                /** Whether the asset is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
                /** Corresponding asset price in USD at the time of transfer. */
                quotes?: {
                    [x: string]: number;
                } | undefined;
            } | undefined;
        };
        kind: "UtxoTransfer";
        /** Only set for Cardano asset transfers. */
        assetId?: string | undefined;
        froms: string[];
        tos: string[];
        value: string;
        fee?: string | undefined;
        /** Outbound transfers only: per-recipient outputs of the transaction, change excluded. */
        outputs?: {
            index: number;
            address: string;
            value: string;
        }[] | undefined;
        addressWatchId: string;
    })[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
    /** Address watch id. */
    addressWatchId: string;
    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
};

export type GetAddressWatchHistoryRequest = GetAddressWatchHistoryParams & { query?: GetAddressWatchHistoryQuery }

export type ListAddressWatchesQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
};

export type ListAddressWatchesResponse = {
    /** Current page items. */
    items: {
        /** ID of the address watch. */
        id: string;
        /** Network the address is watched on. */
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
        /** The watched on chain address. */
        address: string;
        /** Address watch nickname. */
        name?: string | undefined;
        /** User-defined value that can be used to correlate the entity with an external system. */
        externalId?: string | undefined;
        /** Address watch status. */
        status: "Active" | "Archived";
        /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date string when the address watch was created. */
        dateCreated: string;
        /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date string when the address watch was archived. */
        dateDeleted?: string | undefined;
    }[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListAddressWatchesRequest = { query?: ListAddressWatchesQuery }

