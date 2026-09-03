export type CreatePayinBody = {
    /** The destination wallet for the on-ramped funds. */
    walletId: string;
    /** The amount to deliver on-chain, in currency units (e.g. "100.00"). */
    amount: string;
    provider: "CircleMint";
    /** Fiat currency of the payin (for Circle Mint it determines the delivered stablecoin: USD → USDC, EUR → EURC). */
    currency: "USD" | "EUR";
} | {
    /** The destination wallet for the on-ramped funds. */
    walletId: string;
    /** The amount to deliver on-chain, in currency units (e.g. "100.00"). */
    amount: string;
    provider: "Borderless";
    /** Fiat currency of the payin (for Circle Mint it determines the delivered stablecoin: USD → USDC, EUR → EURC). */
    currency: "USD" | "EUR";
    /** ISO-3166 Alpha-2 country the fiat deposit originates from. */
    country: string;
    /** Borderless account ID; its registered asset address must match the destination wallet address. */
    borderlessAccountId: string;
    /** The fiat payment rail the payer uses to fund the deposit. */
    paymentMethod: "Wire" | "ACH" | "Sepa";
    /** The asset to deliver on-chain. Must be supported by Borderless on the wallet network. */
    asset: {
        kind: "Erc20";
        /** The ERC-20 contract address of the asset to deliver. */
        contract: string;
    } | {
        kind: "Spl" | "Spl2022";
        /** The token mint address of the asset to deliver. */
        mint: string;
    };
    /** Executable quote to redeem (from Create Payin Quote), locking its rate until it expires. */
    quoteId?: string | undefined;
};

export type CreatePayinResponse = {
    /** Payin id. */
    id: string;
    /** The destination wallet for the on-ramped funds. */
    walletId: string;
    /** The amount to deliver on-chain, in currency units (e.g. "100.00"). */
    amount: string;
    /** Fiat currency of the payin (for Circle Mint it determines the delivered stablecoin: USD → USDC, EUR → EURC). */
    currency: "USD" | "EUR";
    /** The network the funds are delivered on (the destination wallet network). */
    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
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
} | {
    /** Payin id. */
    id: string;
    /** The destination wallet for the on-ramped funds. */
    walletId: string;
    /** The amount to deliver on-chain, in currency units (e.g. "100.00"). */
    amount: string;
    /** Fiat currency of the payin (for Circle Mint it determines the delivered stablecoin: USD → USDC, EUR → EURC). */
    currency: "USD" | "EUR";
    /** The network the funds are delivered on (the destination wallet network). */
    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
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
    provider: "Borderless";
    /** Borderless provider-specific payin data. */
    data: {
        /** The Borderless execution status. */
        executionStatus: "Initializing" | "AwaitingDeposit" | "Completed" | "Failed";
        /** Reason for the current status, primarily for failure cases. */
        statusReason?: string | undefined;
        /** The Borderless account whose registered asset address receives the funds. */
        borderlessAccountId: string;
        /** ISO-3166 Alpha-2 country the fiat deposit originates from. */
        country: string;
        /** The fiat payment rail the payer uses to fund the deposit. */
        paymentMethod: "Wire" | "ACH" | "Sepa";
        /** The provider's code of the asset being delivered (e.g. USDT_POLYGON). */
        asset: string;
        /** The executable quote the payin was created with, if any. */
        quoteId?: string | undefined;
        /** The id of the Borderless deposit transaction. */
        borderlessTransactionId?: string | undefined;
        /** The Participating Financial Institution fulfilling the deposit. */
        pfiName?: string | undefined;
        /** Bank details + reference the payer must wire the fiat to. Absent until Borderless issues them. */
        depositInstruction?: {
            /** The fiat payment rail these instructions apply to. */
            paymentMethod: string;
            /** Rail-dependent bank details to send the fiat to. */
            details: {
                /** Reference the payer must include with the payment. */
                depositMessage?: (string | null) | undefined;
                bankName?: (string | null) | undefined;
                bankAccountNumber?: (string | null) | undefined;
                bankRoutingNumber?: (string | null) | undefined;
                bankBeneficiaryName?: (string | null) | undefined;
                bankBeneficiaryAddress?: (string | null) | undefined;
                bankAddress?: (string | null) | undefined;
                iban?: (string | null) | undefined;
                bic?: (string | null) | undefined;
                accountHolderName?: (string | null) | undefined;
            };
        } | undefined;
        /** The blockchain transaction hash of the stablecoin delivery. */
        transactionHash?: string | undefined;
        dateDeliveryConfirmed?: string | undefined;
    };
};

export type CreatePayinRequest = { body: CreatePayinBody }

export type CreatePayinQuoteBody = {
    /** The destination wallet — determines the network the funds are delivered on. */
    walletId: string;
    /** The amount to deliver on-chain, in currency units (e.g. "100.00"). */
    amount: string;
    /** Fiat currency of the payin (for Circle Mint it determines the delivered stablecoin: USD → USDC, EUR → EURC). */
    currency: "USD" | "EUR";
    provider: "Borderless";
    /** ISO-3166 Alpha-2 country the fiat deposit originates from. */
    country: string;
    /** Borderless account ID the deposit would be made to. */
    borderlessAccountId: string;
    /** The fiat payment rail the payer uses to fund the deposit. */
    paymentMethod: "Wire" | "ACH" | "Sepa";
    /** The asset to deliver on-chain. Must be supported by Borderless on the wallet network. */
    asset: {
        kind: "Erc20";
        /** The ERC-20 contract address of the asset to deliver. */
        contract: string;
    } | {
        kind: "Spl" | "Spl2022";
        /** The token mint address of the asset to deliver. */
        mint: string;
    };
};

export type CreatePayinQuoteResponse = {
    /** Payin provider. */
    provider: "CircleMint" | "Borderless";
    /** Fiat currency of the payin (for Circle Mint it determines the delivered stablecoin: USD → USDC, EUR → EURC). */
    currency: "USD" | "EUR";
    /** The network the stablecoin would be delivered on. */
    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
    /** The asset (token id) that would be delivered. */
    tid: string;
    /** ISO 8601 timestamp when the quote was generated. */
    timestamp: string;
    /** Array of quotes from the provider(s). */
    quotes: {
        /** Executable quote id — pass it to Create Payin to lock this rate until it expires. */
        quoteId?: string | undefined;
        dateExpires?: string | undefined;
        /** The offer from the provider. */
        offer: {
            /** Amount of the stablecoin to be delivered on-chain, net of fees. */
            amount: number;
            /** Total fees, in the fiat currency. */
            fees: number;
        };
    }[];
};

export type CreatePayinQuoteRequest = { body: CreatePayinQuoteBody }

export type CreatePayinRecipientBody = {
    provider: "CircleMint";
    /** The wallet to register as a Circle Mint recipient. */
    walletId: string;
    /** Fiat currency of the payin (for Circle Mint it determines the delivered stablecoin: USD → USDC, EUR → EURC). */
    currency: "USD" | "EUR";
};

export type CreatePayinRecipientResponse = {
    /** Payin provider. */
    provider: "CircleMint" | "Borderless";
    /** The wallet whose address is (to be) registered as a recipient. */
    walletId: string;
    /** Fiat currency of the payin (for Circle Mint it determines the delivered stablecoin: USD → USDC, EUR → EURC). */
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
    /** Fiat currency of the payin (for Circle Mint it determines the delivered stablecoin: USD → USDC, EUR → EURC). */
    currency: "USD" | "EUR";
    /** The network the funds are delivered on (the destination wallet network). */
    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
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
} | {
    /** Payin id. */
    id: string;
    /** The destination wallet for the on-ramped funds. */
    walletId: string;
    /** The amount to deliver on-chain, in currency units (e.g. "100.00"). */
    amount: string;
    /** Fiat currency of the payin (for Circle Mint it determines the delivered stablecoin: USD → USDC, EUR → EURC). */
    currency: "USD" | "EUR";
    /** The network the funds are delivered on (the destination wallet network). */
    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
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
    provider: "Borderless";
    /** Borderless provider-specific payin data. */
    data: {
        /** The Borderless execution status. */
        executionStatus: "Initializing" | "AwaitingDeposit" | "Completed" | "Failed";
        /** Reason for the current status, primarily for failure cases. */
        statusReason?: string | undefined;
        /** The Borderless account whose registered asset address receives the funds. */
        borderlessAccountId: string;
        /** ISO-3166 Alpha-2 country the fiat deposit originates from. */
        country: string;
        /** The fiat payment rail the payer uses to fund the deposit. */
        paymentMethod: "Wire" | "ACH" | "Sepa";
        /** The provider's code of the asset being delivered (e.g. USDT_POLYGON). */
        asset: string;
        /** The executable quote the payin was created with, if any. */
        quoteId?: string | undefined;
        /** The id of the Borderless deposit transaction. */
        borderlessTransactionId?: string | undefined;
        /** The Participating Financial Institution fulfilling the deposit. */
        pfiName?: string | undefined;
        /** Bank details + reference the payer must wire the fiat to. Absent until Borderless issues them. */
        depositInstruction?: {
            /** The fiat payment rail these instructions apply to. */
            paymentMethod: string;
            /** Rail-dependent bank details to send the fiat to. */
            details: {
                /** Reference the payer must include with the payment. */
                depositMessage?: (string | null) | undefined;
                bankName?: (string | null) | undefined;
                bankAccountNumber?: (string | null) | undefined;
                bankRoutingNumber?: (string | null) | undefined;
                bankBeneficiaryName?: (string | null) | undefined;
                bankBeneficiaryAddress?: (string | null) | undefined;
                bankAddress?: (string | null) | undefined;
                iban?: (string | null) | undefined;
                bic?: (string | null) | undefined;
                accountHolderName?: (string | null) | undefined;
            };
        } | undefined;
        /** The blockchain transaction hash of the stablecoin delivery. */
        transactionHash?: string | undefined;
        dateDeliveryConfirmed?: string | undefined;
    };
};

export type GetPayinRequest = GetPayinParams

export type GetPayinRecipientQuery = {
    /** The payin provider to check the recipient with. */
    provider: "CircleMint" | "Borderless";
    /** The wallet whose recipient status to check. */
    walletId: string;
    /** Fiat currency of the payin (for Circle Mint it determines the delivered stablecoin: USD → USDC, EUR → EURC). */
    currency: "USD" | "EUR";
};

export type GetPayinRecipientResponse = {
    /** Payin provider. */
    provider: "CircleMint" | "Borderless";
    /** The wallet whose address is (to be) registered as a recipient. */
    walletId: string;
    /** Fiat currency of the payin (for Circle Mint it determines the delivered stablecoin: USD → USDC, EUR → EURC). */
    currency: "USD" | "EUR";
    /** Recipient status. */
    status: "NotRegistered" | "PendingVerification" | "Active";
    /** The provider's recipient-registry id, once registered. */
    recipientAddressId?: string | undefined;
};

export type GetPayinRecipientRequest = { query?: GetPayinRecipientQuery }

export type ListPayinAccountsQuery = {
    /** The provider to list accounts from. Only Borderless has payin accounts. */
    provider: "CircleMint" | "Borderless";
};

export type ListPayinAccountsResponse = {
    /** The provider accounts available for payins. */
    items: {
        /** The provider's account id. */
        accountId: string;
        /** The account name, when the provider has one. */
        name?: string | undefined;
        /** The assets registered on the account, with their destination addresses. */
        assets: {
            /** The provider's asset code (e.g. USDC_ETHEREUM). */
            asset: string;
            /** The registered destination address for the asset. */
            address: string;
        }[];
    }[];
};

export type ListPayinAccountsRequest = { query?: ListPayinAccountsQuery }

export type ListPayinBalancesQuery = {
    /** The payin provider to fetch balances from. */
    provider: "CircleMint" | "Borderless";
};

export type ListPayinBalancesResponse = {
    items: {
        /** Payin provider. */
        provider: "CircleMint" | "Borderless";
        /** Fiat currency of the balance (e.g. USD, EUR). */
        currency: string;
        /** Available amount in currency units (e.g. "408.82"). */
        amount: string;
    }[];
};

export type ListPayinBalancesRequest = { query?: ListPayinBalancesQuery }

export type ListPayinOptionsQuery = {
    /** The provider to list options from. Only Borderless has coverage-dependent options. */
    provider: "CircleMint" | "Borderless";
};

export type ListPayinOptionsResponse = {
    /** The provider's asset codes deliverable by the active PFIs. */
    assets: string[];
    /** The fiat currencies payins can be funded with, per payment method and country. */
    currencies: {
        /** Fiat currency of the payin (for Circle Mint it determines the delivered stablecoin: USD → USDC, EUR → EURC). */
        currency: "USD" | "EUR";
        /** The payment methods available for this currency, with their eligible countries. */
        paymentMethods: {
            /** The fiat payment rail the payer uses to fund the deposit. */
            paymentMethod: "Wire" | "ACH" | "Sepa";
            /** ISO-3166 Alpha-2 countries the fiat can be paid from with this payment method. */
            countries: string[];
        }[];
    }[];
};

export type ListPayinOptionsRequest = { query?: ListPayinOptionsQuery }

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
    provider?: ("CircleMint" | "Borderless")[] | undefined;
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
        /** Fiat currency of the payin (for Circle Mint it determines the delivered stablecoin: USD → USDC, EUR → EURC). */
        currency: "USD" | "EUR";
        /** The network the funds are delivered on (the destination wallet network). */
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
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
    } | {
        /** Payin id. */
        id: string;
        /** The destination wallet for the on-ramped funds. */
        walletId: string;
        /** The amount to deliver on-chain, in currency units (e.g. "100.00"). */
        amount: string;
        /** Fiat currency of the payin (for Circle Mint it determines the delivered stablecoin: USD → USDC, EUR → EURC). */
        currency: "USD" | "EUR";
        /** The network the funds are delivered on (the destination wallet network). */
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
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
        provider: "Borderless";
        /** Borderless provider-specific payin data. */
        data: {
            /** The Borderless execution status. */
            executionStatus: "Initializing" | "AwaitingDeposit" | "Completed" | "Failed";
            /** Reason for the current status, primarily for failure cases. */
            statusReason?: string | undefined;
            /** The Borderless account whose registered asset address receives the funds. */
            borderlessAccountId: string;
            /** ISO-3166 Alpha-2 country the fiat deposit originates from. */
            country: string;
            /** The fiat payment rail the payer uses to fund the deposit. */
            paymentMethod: "Wire" | "ACH" | "Sepa";
            /** The provider's code of the asset being delivered (e.g. USDT_POLYGON). */
            asset: string;
            /** The executable quote the payin was created with, if any. */
            quoteId?: string | undefined;
            /** The id of the Borderless deposit transaction. */
            borderlessTransactionId?: string | undefined;
            /** The Participating Financial Institution fulfilling the deposit. */
            pfiName?: string | undefined;
            /** Bank details + reference the payer must wire the fiat to. Absent until Borderless issues them. */
            depositInstruction?: {
                /** The fiat payment rail these instructions apply to. */
                paymentMethod: string;
                /** Rail-dependent bank details to send the fiat to. */
                details: {
                    /** Reference the payer must include with the payment. */
                    depositMessage?: (string | null) | undefined;
                    bankName?: (string | null) | undefined;
                    bankAccountNumber?: (string | null) | undefined;
                    bankRoutingNumber?: (string | null) | undefined;
                    bankBeneficiaryName?: (string | null) | undefined;
                    bankBeneficiaryAddress?: (string | null) | undefined;
                    bankAddress?: (string | null) | undefined;
                    iban?: (string | null) | undefined;
                    bic?: (string | null) | undefined;
                    accountHolderName?: (string | null) | undefined;
                };
            } | undefined;
            /** The blockchain transaction hash of the stablecoin delivery. */
            transactionHash?: string | undefined;
            dateDeliveryConfirmed?: string | undefined;
        };
    })[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListPayinsRequest = { query?: ListPayinsQuery }

export type RegisterPayinAccountAssetBody = {
    provider: "Borderless";
    /** The Borderless account to register the asset on. */
    borderlessAccountId: string;
    /** The wallet whose address becomes the delivery destination for the asset. */
    walletId: string;
    /** The asset to deliver on-chain. Must be supported by Borderless on the wallet network. */
    asset: {
        kind: "Erc20";
        /** The ERC-20 contract address of the asset to deliver. */
        contract: string;
    } | {
        kind: "Spl" | "Spl2022";
        /** The token mint address of the asset to deliver. */
        mint: string;
    };
};

export type RegisterPayinAccountAssetResponse = {
    /** The provider's account id. */
    accountId: string;
    /** The account name, when the provider has one. */
    name?: string | undefined;
    /** The assets registered on the account, with their destination addresses. */
    assets: {
        /** The provider's asset code (e.g. USDC_ETHEREUM). */
        asset: string;
        /** The registered destination address for the asset. */
        address: string;
    }[];
};

export type RegisterPayinAccountAssetRequest = { body: RegisterPayinAccountAssetBody }

