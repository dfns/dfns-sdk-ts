export type CreateVaultBody = {
    name?: string | undefined;
    tags?: string[];
    externalId?: string | undefined;
};

export type CreateVaultResponse = {
    /** Vault id. */
    id: string;
    orgId: string;
    name?: string | undefined;
    tags: string[];
    externalId?: string | undefined;
    dateCreated: string;
    dateUpdated: string;
    /** The vault's addresses. */
    addresses?: {
        walletId: string;
        network: string;
        address: string;
    }[] | undefined;
};

export type CreateVaultRequest = { body: CreateVaultBody }

export type CreateVaultAddressBody = {
    network: "Adi" | "AdiTestnet" | "AdiTestnetAb" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "BesuTestnet" | "BesuTestnet2" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Ink" | "InkSepolia" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiPacific1" | "SeiAtlantic2" | "Sonic" | "SonicTestnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia";
};

export type CreateVaultAddressParams = {
    /** Vault id. */
    vaultId: string;
};

export type CreateVaultAddressResponse = {
    walletId: string;
    network: string;
    address: string;
};

export type CreateVaultAddressRequest = CreateVaultAddressParams & { body: CreateVaultAddressBody }

export type CreateVaultTransferBody = {
    /** The EVM network the transfer is on. */
    network: "Adi" | "AdiTestnet" | "AdiTestnetAb" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "BesuTestnet" | "BesuTestnet2" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Ink" | "InkSepolia" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiPacific1" | "SeiAtlantic2" | "Sonic" | "SonicTestnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia";
    /** The token identifier of the asset to transfer (e.g. `native:eth` or `erc20:0x...`). */
    tid: string;
    /** The destination address. */
    to: string;
    /** The amount to transfer, in minimum denomination. */
    amount: string;
    /** A unique id from your system. */
    externalId?: string | undefined;
};

export type CreateVaultTransferParams = {
    /** Vault id. */
    vaultId: string;
};

export type CreateVaultTransferResponse = {
    /** Transfer id. */
    id: string;
    /** The source wallet for this tranfer. */
    walletId: string;
    /** The blockchain network this transfer is on. */
    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "BesuTestnet" | "BesuTestnet2" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet";
    /** The user who initiated the request. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    requestBody: {
        kind: "Native";
        /** The destination address. */
        to: string;
        /** The amount of native tokens to transfer in minimum denomination. */
        amount: string;
        /** The memo or destination tag (supported networks only). */
        memo?: (string | "") | undefined;
        /** The priority that determines the fees paid for the transfer. All EVM compatible networks and Bitcoin support `priority`. Not supported for other networks. It uses the [estimate fees](https://docs.dfns.co/api-reference/networks/estimate-fees) API to calculate the transfer fees. When not specified, defaults to `Standard` priority. */
        priority?: ("Slow" | "Standard" | "Fast") | undefined;
        /** Whether to create the destination account on chains that require account creation (e.g., Stellar). Only valid for chains that require the receiver account to exist before transfer. */
        createDestinationAccount?: boolean | undefined;
        /** Optional field for Canton, if true it will create a transfer offer. */
        offer?: boolean | undefined;
        /** Optional field for Canton, especially useful in the context of offers */
        expiresAt?: string | undefined;
        /** Optional Solana-only flag. When `true` the SOL transfer is built as a durable-nonce transaction using one of the wallet's nonce accounts (picked server-side). Use this for offline-signing flows where the construct → broadcast gap may exceed 90 seconds. The wallet's nonce account pool must be pre-populated via `POST /wallets/{id}/transactions` with `kind: CreateSolanaNonceAccounts`. */
        useDurableNonce?: boolean | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key. (read more [here](https://docs.dfns.co/api-reference/idempotency)) */
        externalId?: string | undefined;
        /** A travel rule payload to associate with the transfer. (read more [here](https://docs.dfns.co/features/travel-rule)) */
        travelRule?: ({
            kind: "Notabene";
            beneficiaryVASPdid?: string | undefined;
            beneficiaryProof?: {
                [x: string]: any;
            } | undefined;
            originator: {
                [x: string]: any;
            };
            beneficiary: {
                [x: string]: any;
            };
        }) | undefined;
        /** Id of the fee sponsor that will be used to pay for your transfer fees, it might not be available for all blockchains. (read more [here](https://docs.dfns.co/features/fee-sponsors)) */
        feeSponsorId?: string | undefined;
        gasLimit?: string | undefined;
        gasPrice?: string | undefined;
        maxFeePerGas?: string | undefined;
        maxPriorityFeePerGas?: string | undefined;
    } | {
        kind: "Erc20";
        /** The ERC-20 contract address. */
        contract: string;
        /** The destination address. */
        to: string;
        /** The amount of tokens to transfer in minimum denomination. */
        amount: string;
        /** The priority that determines the fees paid for the transfer. */
        priority?: ("Slow" | "Standard" | "Fast") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key. (read more [here](https://docs.dfns.co/api-reference/idempotency)) */
        externalId?: string | undefined;
        /** A travel rule payload to associate with the transfer. (read more [here](https://docs.dfns.co/features/travel-rule)) */
        travelRule?: ({
            kind: "Notabene";
            beneficiaryVASPdid?: string | undefined;
            beneficiaryProof?: {
                [x: string]: any;
            } | undefined;
            originator: {
                [x: string]: any;
            };
            beneficiary: {
                [x: string]: any;
            };
        }) | undefined;
        /** Id of the fee sponsor that will be used to pay for your transfer fees, it might not be available for all blockchains. (read more [here](https://docs.dfns.co/features/fee-sponsors)) */
        feeSponsorId?: string | undefined;
        gasLimit?: string | undefined;
        gasPrice?: string | undefined;
        maxFeePerGas?: string | undefined;
        maxPriorityFeePerGas?: string | undefined;
    } | {
        kind: "Aip21";
        /** The asset metadata address.  */
        metadata: string;
        /** The destination address. */
        to: string;
        /** The amount of tokens to transfer in minimum denomination. */
        amount: string;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key. (read more [here](https://docs.dfns.co/api-reference/idempotency)) */
        externalId?: string | undefined;
        /** A travel rule payload to associate with the transfer. (read more [here](https://docs.dfns.co/features/travel-rule)) */
        travelRule?: ({
            kind: "Notabene";
            beneficiaryVASPdid?: string | undefined;
            beneficiaryProof?: {
                [x: string]: any;
            } | undefined;
            originator: {
                [x: string]: any;
            };
            beneficiary: {
                [x: string]: any;
            };
        }) | undefined;
        /** Id of the fee sponsor that will be used to pay for your transfer fees, it might not be available for all blockchains. (read more [here](https://docs.dfns.co/features/fee-sponsors)) */
        feeSponsorId?: string | undefined;
    } | {
        kind: "Asa";
        /** The token asset id.  */
        assetId: string;
        /** The destination address. */
        to: string;
        /** The amount of tokens to transfer in minimum denomination. */
        amount: string;
        /** The memo or destination tag. */
        memo?: (string | "") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key. (read more [here](https://docs.dfns.co/api-reference/idempotency)) */
        externalId?: string | undefined;
        /** A travel rule payload to associate with the transfer. (read more [here](https://docs.dfns.co/features/travel-rule)) */
        travelRule?: ({
            kind: "Notabene";
            beneficiaryVASPdid?: string | undefined;
            beneficiaryProof?: {
                [x: string]: any;
            } | undefined;
            originator: {
                [x: string]: any;
            };
            beneficiary: {
                [x: string]: any;
            };
        }) | undefined;
        /** Id of the fee sponsor that will be used to pay for your transfer fees, it might not be available for all blockchains. (read more [here](https://docs.dfns.co/features/fee-sponsors)) */
        feeSponsorId?: string | undefined;
    } | {
        kind: "Asset";
        /** The token asset id.  */
        assetId: string;
        /** The destination address. */
        to: string;
        /** The amount of tokens to transfer in minimum denomination. */
        amount: string;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key. (read more [here](https://docs.dfns.co/api-reference/idempotency)) */
        externalId?: string | undefined;
        /** A travel rule payload to associate with the transfer. (read more [here](https://docs.dfns.co/features/travel-rule)) */
        travelRule?: ({
            kind: "Notabene";
            beneficiaryVASPdid?: string | undefined;
            beneficiaryProof?: {
                [x: string]: any;
            } | undefined;
            originator: {
                [x: string]: any;
            };
            beneficiary: {
                [x: string]: any;
            };
        }) | undefined;
        /** Id of the fee sponsor that will be used to pay for your transfer fees, it might not be available for all blockchains. (read more [here](https://docs.dfns.co/features/fee-sponsors)) */
        feeSponsorId?: string | undefined;
    } | {
        kind: "Cip56";
        /** The instrument admin address. */
        instrumentAdmin: string;
        /** The instrument id. */
        instrumentId: string;
        /** The destination address. */
        to: string;
        /** The amount of tokens to transfer in minimum denomination. */
        amount: string;
        /** If true it will create a transfer offer. */
        offer?: boolean | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key. (read more [here](https://docs.dfns.co/api-reference/idempotency)) */
        externalId?: string | undefined;
        /** A travel rule payload to associate with the transfer. (read more [here](https://docs.dfns.co/features/travel-rule)) */
        travelRule?: ({
            kind: "Notabene";
            beneficiaryVASPdid?: string | undefined;
            beneficiaryProof?: {
                [x: string]: any;
            } | undefined;
            originator: {
                [x: string]: any;
            };
            beneficiary: {
                [x: string]: any;
            };
        }) | undefined;
        /** Id of the fee sponsor that will be used to pay for your transfer fees, it might not be available for all blockchains. (read more [here](https://docs.dfns.co/features/fee-sponsors)) */
        feeSponsorId?: string | undefined;
    } | {
        kind: "Cis2";
        /** The destination address. */
        to: string;
        /** The amount of tokens to transfer in minimum denomination. */
        amount: string;
        /** The token address following (https://proposals.concordium.com/CIS/cis-2.html#token-address). */
        tokenAddress: string;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key. (read more [here](https://docs.dfns.co/api-reference/idempotency)) */
        externalId?: string | undefined;
        /** A travel rule payload to associate with the transfer. (read more [here](https://docs.dfns.co/features/travel-rule)) */
        travelRule?: ({
            kind: "Notabene";
            beneficiaryVASPdid?: string | undefined;
            beneficiaryProof?: {
                [x: string]: any;
            } | undefined;
            originator: {
                [x: string]: any;
            };
            beneficiary: {
                [x: string]: any;
            };
        }) | undefined;
        /** Id of the fee sponsor that will be used to pay for your transfer fees, it might not be available for all blockchains. (read more [here](https://docs.dfns.co/features/fee-sponsors)) */
        feeSponsorId?: string | undefined;
    } | {
        kind: "Cis7";
        /** The destination address. */
        to: string;
        /** The amount of tokens to transfer in minimum denomination. */
        amount: string;
        /** The Cis7 token identifier. */
        tokenId: string;
        /** The memo or destination tag. */
        memo?: (string | "") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key. (read more [here](https://docs.dfns.co/api-reference/idempotency)) */
        externalId?: string | undefined;
        /** A travel rule payload to associate with the transfer. (read more [here](https://docs.dfns.co/features/travel-rule)) */
        travelRule?: ({
            kind: "Notabene";
            beneficiaryVASPdid?: string | undefined;
            beneficiaryProof?: {
                [x: string]: any;
            } | undefined;
            originator: {
                [x: string]: any;
            };
            beneficiary: {
                [x: string]: any;
            };
        }) | undefined;
        /** Id of the fee sponsor that will be used to pay for your transfer fees, it might not be available for all blockchains. (read more [here](https://docs.dfns.co/features/fee-sponsors)) */
        feeSponsorId?: string | undefined;
    } | {
        kind: "Coin";
        /** The coin identifier. */
        coin: string;
        /** The destination address. */
        to: string;
        /** The amount of tokens to transfer in minimum denomination. */
        amount: string;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key. (read more [here](https://docs.dfns.co/api-reference/idempotency)) */
        externalId?: string | undefined;
        /** A travel rule payload to associate with the transfer. (read more [here](https://docs.dfns.co/features/travel-rule)) */
        travelRule?: ({
            kind: "Notabene";
            beneficiaryVASPdid?: string | undefined;
            beneficiaryProof?: {
                [x: string]: any;
            } | undefined;
            originator: {
                [x: string]: any;
            };
            beneficiary: {
                [x: string]: any;
            };
        }) | undefined;
        /** Id of the fee sponsor that will be used to pay for your transfer fees, it might not be available for all blockchains. (read more [here](https://docs.dfns.co/features/fee-sponsors)) */
        feeSponsorId?: string | undefined;
    } | {
        kind: "Erc721";
        /** The ERC-721 contract address. */
        contract: string;
        /** The destination address. */
        to: string;
        /** The token to transfer. */
        tokenId: string;
        /** The priority that determines the fees paid for the transfer. */
        priority?: ("Slow" | "Standard" | "Fast") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key. (read more [here](https://docs.dfns.co/api-reference/idempotency)) */
        externalId?: string | undefined;
        /** A travel rule payload to associate with the transfer. (read more [here](https://docs.dfns.co/features/travel-rule)) */
        travelRule?: ({
            kind: "Notabene";
            beneficiaryVASPdid?: string | undefined;
            beneficiaryProof?: {
                [x: string]: any;
            } | undefined;
            originator: {
                [x: string]: any;
            };
            beneficiary: {
                [x: string]: any;
            };
        }) | undefined;
        /** Id of the fee sponsor that will be used to pay for your transfer fees, it might not be available for all blockchains. (read more [here](https://docs.dfns.co/features/fee-sponsors)) */
        feeSponsorId?: string | undefined;
    } | {
        kind: "Erc7984";
        /** The ERC-7984 confidential token contract address. */
        contract: string;
        /** The destination address. */
        to: string;
        /** The amount of tokens to transfer in minimum denomination. */
        amount: string;
        /** The priority that determines the fees paid for the transfer. */
        priority?: ("Slow" | "Standard" | "Fast") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key. (read more [here](https://docs.dfns.co/api-reference/idempotency)) */
        externalId?: string | undefined;
        /** A travel rule payload to associate with the transfer. (read more [here](https://docs.dfns.co/features/travel-rule)) */
        travelRule?: ({
            kind: "Notabene";
            beneficiaryVASPdid?: string | undefined;
            beneficiaryProof?: {
                [x: string]: any;
            } | undefined;
            originator: {
                [x: string]: any;
            };
            beneficiary: {
                [x: string]: any;
            };
        }) | undefined;
        /** Id of the fee sponsor that will be used to pay for your transfer fees, it might not be available for all blockchains. (read more [here](https://docs.dfns.co/features/fee-sponsors)) */
        feeSponsorId?: string | undefined;
    } | {
        kind: "Hip17";
        /** The token to transfer. */
        tokenId: string;
        serialNumber: string;
        /** The destination address. */
        to: string;
        /** The memo or destination tag. */
        memo?: (string | "") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key. (read more [here](https://docs.dfns.co/api-reference/idempotency)) */
        externalId?: string | undefined;
        /** A travel rule payload to associate with the transfer. (read more [here](https://docs.dfns.co/features/travel-rule)) */
        travelRule?: ({
            kind: "Notabene";
            beneficiaryVASPdid?: string | undefined;
            beneficiaryProof?: {
                [x: string]: any;
            } | undefined;
            originator: {
                [x: string]: any;
            };
            beneficiary: {
                [x: string]: any;
            };
        }) | undefined;
        /** Id of the fee sponsor that will be used to pay for your transfer fees, it might not be available for all blockchains. (read more [here](https://docs.dfns.co/features/fee-sponsors)) */
        feeSponsorId?: string | undefined;
    } | {
        kind: "Hts";
        /** The token to transfer. */
        tokenId: string;
        /** The destination address. */
        to: string;
        /** The amount of tokens to transfer in minimum denomination. */
        amount: string;
        /** The memo. */
        memo?: (string | "") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key. (read more [here](https://docs.dfns.co/api-reference/idempotency)) */
        externalId?: string | undefined;
        /** A travel rule payload to associate with the transfer. (read more [here](https://docs.dfns.co/features/travel-rule)) */
        travelRule?: ({
            kind: "Notabene";
            beneficiaryVASPdid?: string | undefined;
            beneficiaryProof?: {
                [x: string]: any;
            } | undefined;
            originator: {
                [x: string]: any;
            };
            beneficiary: {
                [x: string]: any;
            };
        }) | undefined;
        /** Id of the fee sponsor that will be used to pay for your transfer fees, it might not be available for all blockchains. (read more [here](https://docs.dfns.co/features/fee-sponsors)) */
        feeSponsorId?: string | undefined;
    } | {
        kind: "Iou";
        /** The IOU currency code. */
        currency: string;
        /** The IOU issuer address. */
        issuer: string;
        /** The destination address. */
        to: string;
        /** The amount of tokens to transfer in minimum denomination. */
        amount: string;
        /** The memo or destination tag. */
        memo?: (string | "") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key. (read more [here](https://docs.dfns.co/api-reference/idempotency)) */
        externalId?: string | undefined;
        /** A travel rule payload to associate with the transfer. (read more [here](https://docs.dfns.co/features/travel-rule)) */
        travelRule?: ({
            kind: "Notabene";
            beneficiaryVASPdid?: string | undefined;
            beneficiaryProof?: {
                [x: string]: any;
            } | undefined;
            originator: {
                [x: string]: any;
            };
            beneficiary: {
                [x: string]: any;
            };
        }) | undefined;
        /** Id of the fee sponsor that will be used to pay for your transfer fees, it might not be available for all blockchains. (read more [here](https://docs.dfns.co/features/fee-sponsors)) */
        feeSponsorId?: string | undefined;
    } | {
        kind: "Sep41";
        /** The asset issuer address. */
        issuer: string;
        /** The asset code. */
        assetCode: string;
        /** The destination address. */
        to: string;
        /** The amount of tokens to transfer in minimum denomination. */
        amount: string;
        /** The memo or destination tag. */
        memo?: (string | "") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key. (read more [here](https://docs.dfns.co/api-reference/idempotency)) */
        externalId?: string | undefined;
        /** A travel rule payload to associate with the transfer. (read more [here](https://docs.dfns.co/features/travel-rule)) */
        travelRule?: ({
            kind: "Notabene";
            beneficiaryVASPdid?: string | undefined;
            beneficiaryProof?: {
                [x: string]: any;
            } | undefined;
            originator: {
                [x: string]: any;
            };
            beneficiary: {
                [x: string]: any;
            };
        }) | undefined;
        /** Id of the fee sponsor that will be used to pay for your transfer fees, it might not be available for all blockchains. (read more [here](https://docs.dfns.co/features/fee-sponsors)) */
        feeSponsorId?: string | undefined;
    } | {
        kind: "Snip2";
        /** The SNIP-2 (ERC-20-like) contract address. */
        contract: string;
        /** The destination address. */
        to: string;
        /** The amount of tokens to transfer in minimum denomination. */
        amount: string;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key. (read more [here](https://docs.dfns.co/api-reference/idempotency)) */
        externalId?: string | undefined;
        /** A travel rule payload to associate with the transfer. (read more [here](https://docs.dfns.co/features/travel-rule)) */
        travelRule?: ({
            kind: "Notabene";
            beneficiaryVASPdid?: string | undefined;
            beneficiaryProof?: {
                [x: string]: any;
            } | undefined;
            originator: {
                [x: string]: any;
            };
            beneficiary: {
                [x: string]: any;
            };
        }) | undefined;
        /** Id of the fee sponsor that will be used to pay for your transfer fees, it might not be available for all blockchains. (read more [here](https://docs.dfns.co/features/fee-sponsors)) */
        feeSponsorId?: string | undefined;
    } | {
        kind: "Snip3";
        /** The SNIP-3 (ERC-721) contract address. */
        contract: string;
        /** The destination address. */
        to: string;
        /** The token to transfer. */
        tokenId: string;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key. (read more [here](https://docs.dfns.co/api-reference/idempotency)) */
        externalId?: string | undefined;
        /** A travel rule payload to associate with the transfer. (read more [here](https://docs.dfns.co/features/travel-rule)) */
        travelRule?: ({
            kind: "Notabene";
            beneficiaryVASPdid?: string | undefined;
            beneficiaryProof?: {
                [x: string]: any;
            } | undefined;
            originator: {
                [x: string]: any;
            };
            beneficiary: {
                [x: string]: any;
            };
        }) | undefined;
        /** Id of the fee sponsor that will be used to pay for your transfer fees, it might not be available for all blockchains. (read more [here](https://docs.dfns.co/features/fee-sponsors)) */
        feeSponsorId?: string | undefined;
    } | {
        kind: "Spl" | "Spl2022";
        /** The destination address. */
        to: string;
        /** The amount of tokens to transfer in minimum denomination. */
        amount: string;
        /** The mint account address. */
        mint: string;
        /** The memo or destination tag. */
        memo?: (string | "") | undefined;
        /** If `true`, pay to create the associated token account for the recipient if it doesn't exist. Defaults to `false`. */
        createDestinationAccount?: boolean | undefined;
        /** Optional. When `true` the SPL transfer is built as a durable-nonce transaction using one of the wallet's nonce accounts (picked server-side). The wallet's nonce account pool must be pre-populated via `POST /wallets/{id}/transactions` with `kind: CreateSolanaNonceAccounts`. */
        useDurableNonce?: boolean | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key. (read more [here](https://docs.dfns.co/api-reference/idempotency)) */
        externalId?: string | undefined;
        /** A travel rule payload to associate with the transfer. (read more [here](https://docs.dfns.co/features/travel-rule)) */
        travelRule?: ({
            kind: "Notabene";
            beneficiaryVASPdid?: string | undefined;
            beneficiaryProof?: {
                [x: string]: any;
            } | undefined;
            originator: {
                [x: string]: any;
            };
            beneficiary: {
                [x: string]: any;
            };
        }) | undefined;
        /** Id of the fee sponsor that will be used to pay for your transfer fees, it might not be available for all blockchains. (read more [here](https://docs.dfns.co/features/fee-sponsors)) */
        feeSponsorId?: string | undefined;
    } | {
        kind: "Tep74";
        /** The destination address. */
        to: string;
        /** The Jetton master contract address. */
        master: string;
        /** The amount of tokens to transfer in minimum denomination. */
        amount: string;
        /** The memo or destination tag. */
        memo?: (string | "") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key. (read more [here](https://docs.dfns.co/api-reference/idempotency)) */
        externalId?: string | undefined;
        /** A travel rule payload to associate with the transfer. (read more [here](https://docs.dfns.co/features/travel-rule)) */
        travelRule?: ({
            kind: "Notabene";
            beneficiaryVASPdid?: string | undefined;
            beneficiaryProof?: {
                [x: string]: any;
            } | undefined;
            originator: {
                [x: string]: any;
            };
            beneficiary: {
                [x: string]: any;
            };
        }) | undefined;
        /** Id of the fee sponsor that will be used to pay for your transfer fees, it might not be available for all blockchains. (read more [here](https://docs.dfns.co/features/fee-sponsors)) */
        feeSponsorId?: string | undefined;
    } | {
        kind: "Trc10";
        /** The token ID. */
        tokenId: string;
        /** The destination address. */
        to: string;
        /** The amount of tokens to transfer in minimum denomination. */
        amount: string;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key. (read more [here](https://docs.dfns.co/api-reference/idempotency)) */
        externalId?: string | undefined;
        /** A travel rule payload to associate with the transfer. (read more [here](https://docs.dfns.co/features/travel-rule)) */
        travelRule?: ({
            kind: "Notabene";
            beneficiaryVASPdid?: string | undefined;
            beneficiaryProof?: {
                [x: string]: any;
            } | undefined;
            originator: {
                [x: string]: any;
            };
            beneficiary: {
                [x: string]: any;
            };
        }) | undefined;
        /** Id of the fee sponsor that will be used to pay for your transfer fees, it might not be available for all blockchains. (read more [here](https://docs.dfns.co/features/fee-sponsors)) */
        feeSponsorId?: string | undefined;
    } | {
        kind: "Trc20";
        /** The smart contract address. */
        contract: string;
        /** The destination address. */
        to: string;
        /** The amount of tokens to transfer in minimum denomination. */
        amount: string;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key. (read more [here](https://docs.dfns.co/api-reference/idempotency)) */
        externalId?: string | undefined;
        /** A travel rule payload to associate with the transfer. (read more [here](https://docs.dfns.co/features/travel-rule)) */
        travelRule?: ({
            kind: "Notabene";
            beneficiaryVASPdid?: string | undefined;
            beneficiaryProof?: {
                [x: string]: any;
            } | undefined;
            originator: {
                [x: string]: any;
            };
            beneficiary: {
                [x: string]: any;
            };
        }) | undefined;
        /** Id of the fee sponsor that will be used to pay for your transfer fees, it might not be available for all blockchains. (read more [here](https://docs.dfns.co/features/fee-sponsors)) */
        feeSponsorId?: string | undefined;
    } | {
        kind: "Trc721";
        /** The smart contract address. */
        contract: string;
        /** The destination address. */
        to: string;
        /** The token to transfer. */
        tokenId: string;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key. (read more [here](https://docs.dfns.co/api-reference/idempotency)) */
        externalId?: string | undefined;
        /** A travel rule payload to associate with the transfer. (read more [here](https://docs.dfns.co/features/travel-rule)) */
        travelRule?: ({
            kind: "Notabene";
            beneficiaryVASPdid?: string | undefined;
            beneficiaryProof?: {
                [x: string]: any;
            } | undefined;
            originator: {
                [x: string]: any;
            };
            beneficiary: {
                [x: string]: any;
            };
        }) | undefined;
        /** Id of the fee sponsor that will be used to pay for your transfer fees, it might not be available for all blockchains. (read more [here](https://docs.dfns.co/features/fee-sponsors)) */
        feeSponsorId?: string | undefined;
    } | {
        kind: "Xls33";
        /** The XLS-33 issuance identifier. */
        issuanceId: string;
        /** The destination address. */
        to: string;
        /** The amount of tokens to transfer in minimum denomination. */
        amount: string;
        /** The memo or destination tag. */
        memo?: (string | "") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key. (read more [here](https://docs.dfns.co/api-reference/idempotency)) */
        externalId?: string | undefined;
        /** A travel rule payload to associate with the transfer. (read more [here](https://docs.dfns.co/features/travel-rule)) */
        travelRule?: ({
            kind: "Notabene";
            beneficiaryVASPdid?: string | undefined;
            beneficiaryProof?: {
                [x: string]: any;
            } | undefined;
            originator: {
                [x: string]: any;
            };
            beneficiary: {
                [x: string]: any;
            };
        }) | undefined;
        /** Id of the fee sponsor that will be used to pay for your transfer fees, it might not be available for all blockchains. (read more [here](https://docs.dfns.co/features/fee-sponsors)) */
        feeSponsorId?: string | undefined;
    };
    /** Additional metadata about the transfered asset. */
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
    };
    /** Transfer status.
    
    | Status | Definition |
    | --- | --- |
    | `Pending` | The request is pending approval due to a policy applied to the wallet. |
    | `Executing` | The request is approved and is in the process of being executed. note this status is only set for a short time between pending and broadcasted. |
    | `Broadcasted` | The transaction has been successfully written to the mempool. |
    | `Confirmed` | The transaction has been confirmed on-chain by our indexing pipeline. |
    | `Failed` | Indicates either system failure to complete the request or the transaction failed on chain. |
    | `Rejected` | The request has been rejected by a policy approval action. | */
    status: "Pending" | "Executing" | "Broadcasted" | "Confirmed" | "Failed" | "Rejected";
    /** The reason for a failed transfer. */
    reason?: string | undefined;
    /** The blockchain transaction hash for this transfer. */
    txHash?: string | undefined;
    /** The fee paid for this transfer in minimum denomination. */
    fee?: string | undefined;
    dateRequested: string;
    datePolicyResolved?: string | undefined;
    dateBroadcasted?: string | undefined;
    dateConfirmed?: string | undefined;
    /** The id of the approval request if this transfer triggered a policy. */
    approvalId?: string | undefined;
    /** The external id provided at transfer creation time. */
    externalId?: string | undefined;
    /** The fee sponsor id used to pay for the transfer fees. */
    feeSponsorId?: string | undefined;
    /** The id of the replacement transaction (cancel or speed-up) issued for this transfer. */
    replacementId?: string | undefined;
    /** Structured representation of the data used to construct the signature (e.g. nonce, gas parameters). Shape is blockchain specific. */
    details?: {
        [x: string]: unknown;
    } | undefined;
};

export type CreateVaultTransferRequest = CreateVaultTransferParams & { body: CreateVaultTransferBody }

export type GetVaultParams = {
    /** The vault to retrieve. */
    vaultId: string;
};

export type GetVaultResponse = {
    /** Vault id. */
    id: string;
    orgId: string;
    name?: string | undefined;
    tags: string[];
    externalId?: string | undefined;
    dateCreated: string;
    dateUpdated: string;
    /** The vault's addresses. */
    addresses?: {
        walletId: string;
        network: string;
        address: string;
    }[] | undefined;
};

export type GetVaultRequest = GetVaultParams

export type ListVaultAssetsParams = {
    /** Vault id. */
    vaultId: string;
};

export type ListVaultAssetsQuery = {
    showUnverified?: boolean | undefined;
    network?: string | undefined;
};

export type ListVaultAssetsResponse = {
    items: {
        kind: string;
        network: string;
        tid: string;
        decimals: number;
        symbol?: string | undefined;
        verified?: boolean | undefined;
        availableBalance: string;
        quarantinedBalance: string;
        lockedBalance: string;
        quotes?: {
            [x: string]: number;
        } | undefined;
    }[];
    /** Vault net worth in fiat, broken down by balance kind plus a total. */
    netWorth: {
        available: {
            [x: string]: number;
        };
        quarantined: {
            [x: string]: number;
        };
        locked: {
            [x: string]: number;
        };
        total: {
            [x: string]: number;
        };
    };
};

export type ListVaultAssetsRequest = ListVaultAssetsParams & { query?: ListVaultAssetsQuery }

export type ListVaultBalancesParams = {
    /** Vault id. */
    vaultId: string;
};

export type ListVaultBalancesQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
    /** Vault balance kind. */
    kind?: ("Available" | "Outgoing" | "Fee" | "Incoming" | "Locked" | "Quarantined") | undefined;
    network?: string | undefined;
    tid?: string | undefined;
};

export type ListVaultBalancesResponse = {
    items: {
        id: string;
        /** Vault balance kind. */
        kind: "Available" | "Outgoing" | "Fee" | "Incoming" | "Locked" | "Quarantined";
        network: string;
        tid: string;
        amount: string;
        transferId?: string | undefined;
        quarantineId?: string | undefined;
    }[];
    nextPageToken?: string | undefined;
};

export type ListVaultBalancesRequest = ListVaultBalancesParams & { query?: ListVaultBalancesQuery }

export type ListVaultsQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
};

export type ListVaultsResponse = {
    /** Current page items. */
    items: {
        /** Vault id. */
        id: string;
        orgId: string;
        name?: string | undefined;
        tags: string[];
        externalId?: string | undefined;
        dateCreated: string;
        dateUpdated: string;
        /** The vault's addresses. */
        addresses?: {
            walletId: string;
            network: string;
            address: string;
        }[] | undefined;
    }[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListVaultsRequest = { query?: ListVaultsQuery }

export type TagVaultBody = {
    tags: string[];
};

export type TagVaultParams = {
    /** Vault id. */
    vaultId: string;
};

export type TagVaultResponse = {};

export type TagVaultRequest = TagVaultParams & { body: TagVaultBody }

export type UnquarantineBody = {
    reason?: string | undefined;
};

export type UnquarantineParams = {
    /** Vault id. */
    vaultId: string;
    /** Vault quarantine id. */
    quarantineId: string;
};

export type UnquarantineResponse = {
    status: "OK";
};

export type UnquarantineRequest = UnquarantineParams & { body: UnquarantineBody }

export type UntagVaultBody = {
    tags: string[];
};

export type UntagVaultParams = {
    /** Vault id. */
    vaultId: string;
};

export type UntagVaultResponse = {};

export type UntagVaultRequest = UntagVaultParams & { body: UntagVaultBody }

export type UpdateVaultBody = {
    name?: string | undefined;
    externalId?: string | undefined;
};

export type UpdateVaultParams = {
    /** Vault id. */
    vaultId: string;
};

export type UpdateVaultResponse = {
    /** Vault id. */
    id: string;
    orgId: string;
    name?: string | undefined;
    tags: string[];
    externalId?: string | undefined;
    dateCreated: string;
    dateUpdated: string;
    /** The vault's addresses. */
    addresses?: {
        walletId: string;
        network: string;
        address: string;
    }[] | undefined;
};

export type UpdateVaultRequest = UpdateVaultParams & { body: UpdateVaultBody }

