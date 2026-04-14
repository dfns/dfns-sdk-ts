export type CreatePayoutBody = {
    /** The wallet ID to remit funds from. */
    walletId: string;
    /** Optional idempotency key to ensure only one payout is created. */
    externalId?: string | undefined;
    /** The asset to be paid out. */
    asset: {
        kind: "Erc20";
        /** The amount of the asset to be paid out in minimum denomination. */
        amount: string;
        /** The ERC-20 contract address. */
        contract: string;
    } | {
        kind: "Spl" | "Spl2022";
        /** The amount of the asset to be paid out in minimum denomination. */
        amount: string;
        /** The token mint address. */
        mint: string;
    };
    /** ISO-4217 fiat currency code for the payout. */
    fiatCurrency: string;
    provider: "Borderless";
    /** ISO-3166 Alpha-2 country code for the payout destination. */
    country: string;
    /** Borderless account ID specifying who is paying out funds. */
    borderlessAccountId: string;
    /** Borderless payment instructions ID specifying fiat settlement instructions. */
    paymentInstructionsId: string;
    /** Borderless reason/purpose for the payment. */
    paymentPurpose: "salary payment" | "personal remittance" | "rent payment" | "property purchase" | "owned account abroad" | "advertising expenses" | "advisory fees" | "business insurance" | "construction" | "delivery fees" | "education" | "exports" | "donation" | "hotel" | "loan payment" | "maintenance expenses" | "medical expense" | "office expenses" | "royalty fees" | "service charge" | "shares investment" | "tax payment" | "transportation fees" | "travel" | "utility bills" | "other";
};

export type CreatePayoutResponse = {
    /** Payout id. */
    id: string;
    /** The wallet ID used for the payout. */
    walletId: string;
    /** ISO-4217 fiat currency code for the payout. */
    fiatCurrency: string;
    /** The asset being paid out, including token descriptor and metadata. */
    asset: {
        kind: "Erc20";
        /** The amount of the asset to be paid out in minimum denomination. */
        amount: string;
        /** The ERC-20 contract address. */
        contract: string;
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
        metadata?: {
            /** The display name of the token. */
            name?: string | undefined;
            /** The ticker symbol of the token. */
            symbol?: string | undefined;
            /** Number of decimals used by the token. */
            decimals: number;
            /** Whether the token is verified by DFNS as legitimate. */
            verified?: boolean | undefined;
        } | undefined;
    } | {
        kind: "Spl" | "Spl2022";
        /** The amount of the asset to be paid out in minimum denomination. */
        amount: string;
        /** The token mint address. */
        mint: string;
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
        metadata?: {
            /** The display name of the token. */
            name?: string | undefined;
            /** The ticker symbol of the token. */
            symbol?: string | undefined;
            /** Number of decimals used by the token. */
            decimals: number;
            /** Whether the token is verified by DFNS as legitimate. */
            verified?: boolean | undefined;
        } | undefined;
    };
    /** Optional external identifier for idempotency. */
    externalId?: string | undefined;
    /** The current status of the payout. */
    status: "Processing" | "Completed" | "Failed" | "Rejected" | "Expired" | "Canceled";
    /** The user/token that initiated the payout. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    dateCreated: string;
    dateFinalized?: string | undefined;
    provider: "Borderless";
    /** Borderless provider-specific payout data. */
    data: {
        /** The Borderless account ID associated with the payout. */
        borderlessAccountId: string;
        /** The Borderless payment instructions ID linked to the destination bank account. */
        paymentInstructionsId: string;
        /** The purpose of the withdrawal payment. */
        paymentPurpose: "salary payment" | "personal remittance" | "rent payment" | "property purchase" | "owned account abroad" | "advertising expenses" | "advisory fees" | "business insurance" | "construction" | "delivery fees" | "education" | "exports" | "donation" | "hotel" | "loan payment" | "maintenance expenses" | "medical expense" | "office expenses" | "royalty fees" | "service charge" | "shares investment" | "tax payment" | "transportation fees" | "travel" | "utility bills" | "other";
        dateConfirmed?: string | undefined;
        dateCanceled?: string | undefined;
        /** The Borderless execution status. */
        executionStatus: "Initializing" | "AwaitingPayoutInstructions" | "AwaitingPayoutConfirmation" | "SubmittingPayoutTransfer" | "PendingPolicyApproval" | "DepositProcessing" | "DisbursementPending" | "Completed" | "Rejected" | "Failed" | "Expired" | "Canceled";
        /** Reason for the current status, primarily for failure cases. */
        statusReason?: string | undefined;
        /** ISO-3166 Alpha-2 country code for the payout destination. */
        country: string;
        /** The ID assigned by Borderless when the payout is created. */
        borderlessPayoutId?: string | undefined;
        /** The on-chain address to remit funds to. */
        depositAddress?: string | undefined;
        /** The Dfns transfer ID used to settle the payout. */
        transferId?: string | undefined;
        /** The blockchain transaction hash once the transfer is confirmed. */
        transactionHash?: string | undefined;
        dateDepositConfirmed?: string | undefined;
        datePayoutConfirmed?: string | undefined;
    };
};

export type CreatePayoutRequest = { body: CreatePayoutBody }

export type CreatePayoutActionBody = {
    action: "Confirm";
    /** The wallet ID to use for the transfer. */
    walletId: string;
    /** The transfer details for the payout settlement. */
    transfer: {
        kind: "Erc20";
        /** The amount of the asset to be paid out in minimum denomination. */
        amount: string;
        /** The ERC-20 contract address. */
        contract: string;
        /** The counterparty address for the payout. */
        to: string;
    } | {
        kind: "Spl" | "Spl2022";
        /** The amount of the asset to be paid out in minimum denomination. */
        amount: string;
        /** The token mint address. */
        mint: string;
        /** The counterparty address for the payout. */
        to: string;
    };
} | {
    action: "Cancel";
};

export type CreatePayoutActionParams = {
    /** Payout id. */
    payoutId: string;
};

export type CreatePayoutActionResponse = {};

export type CreatePayoutActionRequest = CreatePayoutActionParams & { body: CreatePayoutActionBody }

export type CreatePayoutQuoteBody = {
    /** The wallet ID to use for determining the network. */
    walletId: string;
    /** The asset to be paid out. */
    asset: {
        kind: "Erc20";
        /** The amount of the asset to be paid out in minimum denomination. */
        amount: string;
        /** The ERC-20 contract address. */
        contract: string;
    } | {
        kind: "Spl" | "Spl2022";
        /** The amount of the asset to be paid out in minimum denomination. */
        amount: string;
        /** The token mint address. */
        mint: string;
    };
    /** ISO-4217 fiat currency code for the payout quote. */
    fiatCurrency: string;
    provider: "Borderless";
    /** ISO-3166 Alpha-2 country code for the payout destination. */
    country: string;
};

export type CreatePayoutQuoteResponse = {
    /** Payout provider. */
    provider: "Borderless";
    /** The asset being quoted, enriched with network and metadata. */
    asset: {
        kind: "Erc20";
        /** The amount of the asset to be paid out in minimum denomination. */
        amount: string;
        /** The ERC-20 contract address. */
        contract: string;
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
        metadata?: {
            /** The display name of the token. */
            name?: string | undefined;
            /** The ticker symbol of the token. */
            symbol?: string | undefined;
            /** Number of decimals used by the token. */
            decimals: number;
            /** Whether the token is verified by DFNS as legitimate. */
            verified?: boolean | undefined;
        } | undefined;
    } | {
        kind: "Spl" | "Spl2022";
        /** The amount of the asset to be paid out in minimum denomination. */
        amount: string;
        /** The token mint address. */
        mint: string;
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
        metadata?: {
            /** The display name of the token. */
            name?: string | undefined;
            /** The ticker symbol of the token. */
            symbol?: string | undefined;
            /** Number of decimals used by the token. */
            decimals: number;
            /** Whether the token is verified by DFNS as legitimate. */
            verified?: boolean | undefined;
        } | undefined;
    };
    /** ISO 8601 timestamp when the quote was generated. */
    timestamp: string;
    /** Array of quotes from the provider(s). */
    quotes: {
        /** Quote ID from the provider, if applicable. */
        quoteId?: string | undefined;
        /** The offer from the provider. */
        offer: {
            /** ISO-4217 fiat currency code. */
            fiatCurrency: string;
            /** Amount of fiat currency to be received net of fees. */
            amount: number;
            /** Total fees associated with the transfer. */
            fees: number;
        };
    }[];
};

export type CreatePayoutQuoteRequest = { body: CreatePayoutQuoteBody }

export type GetPayoutParams = {
    /** Payout id. */
    payoutId: string;
};

export type GetPayoutResponse = {
    /** Payout id. */
    id: string;
    /** The wallet ID used for the payout. */
    walletId: string;
    /** ISO-4217 fiat currency code for the payout. */
    fiatCurrency: string;
    /** The asset being paid out, including token descriptor and metadata. */
    asset: {
        kind: "Erc20";
        /** The amount of the asset to be paid out in minimum denomination. */
        amount: string;
        /** The ERC-20 contract address. */
        contract: string;
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
        metadata?: {
            /** The display name of the token. */
            name?: string | undefined;
            /** The ticker symbol of the token. */
            symbol?: string | undefined;
            /** Number of decimals used by the token. */
            decimals: number;
            /** Whether the token is verified by DFNS as legitimate. */
            verified?: boolean | undefined;
        } | undefined;
    } | {
        kind: "Spl" | "Spl2022";
        /** The amount of the asset to be paid out in minimum denomination. */
        amount: string;
        /** The token mint address. */
        mint: string;
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
        metadata?: {
            /** The display name of the token. */
            name?: string | undefined;
            /** The ticker symbol of the token. */
            symbol?: string | undefined;
            /** Number of decimals used by the token. */
            decimals: number;
            /** Whether the token is verified by DFNS as legitimate. */
            verified?: boolean | undefined;
        } | undefined;
    };
    /** Optional external identifier for idempotency. */
    externalId?: string | undefined;
    /** The current status of the payout. */
    status: "Processing" | "Completed" | "Failed" | "Rejected" | "Expired" | "Canceled";
    /** The user/token that initiated the payout. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    dateCreated: string;
    dateFinalized?: string | undefined;
    provider: "Borderless";
    /** Borderless provider-specific payout data. */
    data: {
        /** The Borderless account ID associated with the payout. */
        borderlessAccountId: string;
        /** The Borderless payment instructions ID linked to the destination bank account. */
        paymentInstructionsId: string;
        /** The purpose of the withdrawal payment. */
        paymentPurpose: "salary payment" | "personal remittance" | "rent payment" | "property purchase" | "owned account abroad" | "advertising expenses" | "advisory fees" | "business insurance" | "construction" | "delivery fees" | "education" | "exports" | "donation" | "hotel" | "loan payment" | "maintenance expenses" | "medical expense" | "office expenses" | "royalty fees" | "service charge" | "shares investment" | "tax payment" | "transportation fees" | "travel" | "utility bills" | "other";
        dateConfirmed?: string | undefined;
        dateCanceled?: string | undefined;
        /** The Borderless execution status. */
        executionStatus: "Initializing" | "AwaitingPayoutInstructions" | "AwaitingPayoutConfirmation" | "SubmittingPayoutTransfer" | "PendingPolicyApproval" | "DepositProcessing" | "DisbursementPending" | "Completed" | "Rejected" | "Failed" | "Expired" | "Canceled";
        /** Reason for the current status, primarily for failure cases. */
        statusReason?: string | undefined;
        /** ISO-3166 Alpha-2 country code for the payout destination. */
        country: string;
        /** The ID assigned by Borderless when the payout is created. */
        borderlessPayoutId?: string | undefined;
        /** The on-chain address to remit funds to. */
        depositAddress?: string | undefined;
        /** The Dfns transfer ID used to settle the payout. */
        transferId?: string | undefined;
        /** The blockchain transaction hash once the transfer is confirmed. */
        transactionHash?: string | undefined;
        dateDepositConfirmed?: string | undefined;
        datePayoutConfirmed?: string | undefined;
    };
};

export type GetPayoutRequest = GetPayoutParams

export type ListPayoutsQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
    /** Filter payouts by wallet ID. */
    walletId?: string | undefined;
    /** Filter payouts by status (comma-separated). */
    status?: ("Processing" | "Completed" | "Failed" | "Rejected" | "Expired" | "Canceled")[] | undefined;
};

export type ListPayoutsResponse = {
    /** Current page items. */
    items: ({
        /** Payout id. */
        id: string;
        /** The wallet ID used for the payout. */
        walletId: string;
        /** ISO-4217 fiat currency code for the payout. */
        fiatCurrency: string;
        /** The asset being paid out, including token descriptor and metadata. */
        asset: {
            kind: "Erc20";
            /** The amount of the asset to be paid out in minimum denomination. */
            amount: string;
            /** The ERC-20 contract address. */
            contract: string;
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            metadata?: {
                /** The display name of the token. */
                name?: string | undefined;
                /** The ticker symbol of the token. */
                symbol?: string | undefined;
                /** Number of decimals used by the token. */
                decimals: number;
                /** Whether the token is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
            } | undefined;
        } | {
            kind: "Spl" | "Spl2022";
            /** The amount of the asset to be paid out in minimum denomination. */
            amount: string;
            /** The token mint address. */
            mint: string;
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            metadata?: {
                /** The display name of the token. */
                name?: string | undefined;
                /** The ticker symbol of the token. */
                symbol?: string | undefined;
                /** Number of decimals used by the token. */
                decimals: number;
                /** Whether the token is verified by DFNS as legitimate. */
                verified?: boolean | undefined;
            } | undefined;
        };
        /** Optional external identifier for idempotency. */
        externalId?: string | undefined;
        /** The current status of the payout. */
        status: "Processing" | "Completed" | "Failed" | "Rejected" | "Expired" | "Canceled";
        /** The user/token that initiated the payout. */
        requester: {
            /** User id. */
            userId: string;
            /** Token id. */
            tokenId?: string | undefined;
        };
        dateCreated: string;
        dateFinalized?: string | undefined;
        provider: "Borderless";
        /** Borderless provider-specific payout data. */
        data: {
            /** The Borderless account ID associated with the payout. */
            borderlessAccountId: string;
            /** The Borderless payment instructions ID linked to the destination bank account. */
            paymentInstructionsId: string;
            /** The purpose of the withdrawal payment. */
            paymentPurpose: "salary payment" | "personal remittance" | "rent payment" | "property purchase" | "owned account abroad" | "advertising expenses" | "advisory fees" | "business insurance" | "construction" | "delivery fees" | "education" | "exports" | "donation" | "hotel" | "loan payment" | "maintenance expenses" | "medical expense" | "office expenses" | "royalty fees" | "service charge" | "shares investment" | "tax payment" | "transportation fees" | "travel" | "utility bills" | "other";
            dateConfirmed?: string | undefined;
            dateCanceled?: string | undefined;
            /** The Borderless execution status. */
            executionStatus: "Initializing" | "AwaitingPayoutInstructions" | "AwaitingPayoutConfirmation" | "SubmittingPayoutTransfer" | "PendingPolicyApproval" | "DepositProcessing" | "DisbursementPending" | "Completed" | "Rejected" | "Failed" | "Expired" | "Canceled";
            /** Reason for the current status, primarily for failure cases. */
            statusReason?: string | undefined;
            /** ISO-3166 Alpha-2 country code for the payout destination. */
            country: string;
            /** The ID assigned by Borderless when the payout is created. */
            borderlessPayoutId?: string | undefined;
            /** The on-chain address to remit funds to. */
            depositAddress?: string | undefined;
            /** The Dfns transfer ID used to settle the payout. */
            transferId?: string | undefined;
            /** The blockchain transaction hash once the transfer is confirmed. */
            transactionHash?: string | undefined;
            dateDepositConfirmed?: string | undefined;
            datePayoutConfirmed?: string | undefined;
        };
    })[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListPayoutsRequest = { query?: ListPayoutsQuery }

