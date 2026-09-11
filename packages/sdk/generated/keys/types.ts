export type CreateKeyBody = {
    /** The cryptographic scheme for the key. */
    scheme: "DH" | "ECDSA" | "EdDSA" | "Schnorr";
    /** The elliptic curve for the key. */
    curve: "ed25519" | "secp256k1" | "stark";
    /** Nickname for the key. */
    name?: string | undefined;
    /** Whether this key can be used as a master key for HD derivation. */
    masterKey?: boolean | undefined;
    /** Options for hierarchical deterministic key derivation. */
    deriveFrom?: {
        /** The master key to derive from. */
        keyId: string;
        /** Use this to specify the derivation path of the signing key. One will be auto generated if left blank. */
        path?: string | undefined;
    } | undefined;
    /** The key store to save the key to. */
    storeId?: string | undefined;
    /** ID of the end user to delegate this key to. */
    delegateTo?: string | undefined;
    /** Whether to delay delegation until explicitly triggered. */
    delayDelegation?: boolean | undefined;
};

export type CreateKeyResponse = {
    /** Unique identifier for the key. */
    id: string;
    /** The cryptographic scheme for the key. */
    scheme: "DH" | "ECDSA" | "EdDSA" | "Schnorr";
    /** The elliptic curve for the key. */
    curve: "ed25519" | "secp256k1" | "stark";
    /** Hex-encoded public key. */
    publicKey: string;
    /** Whether this key can be used as a master key for HD derivation. */
    masterKey?: boolean | undefined;
    /** Derivation info if this key was derived from a master key. */
    derivedFrom?: {
        /** The master key this key was derived from. */
        keyId: string;
        /** The derivation path used. */
        path: string;
    } | undefined;
    /** Nickname for the key. */
    name?: string | undefined;
    /** Current status of the key. */
    status: "Active" | "Archived";
    /** Whether the key is custodial (owned by organization) or non-custodial (delegated to end user). */
    custodial: boolean;
    dateCreated: string;
    /** Whether this key was imported. */
    imported?: boolean | undefined;
    /** Whether this key has been exported. */
    exported?: boolean | undefined;
    dateExported?: string | undefined;
    dateDeleted?: string | undefined;
};

export type CreateKeyRequest = { body: CreateKeyBody }

export type DelegateKeyBody = {
    /** ID of the end user to transfer ownership of the key to. */
    delegateTo: string;
};

export type DelegateKeyParams = {
    /** The key to delegate. Must have been created with `delayDelegation: true`. */
    keyId: string;
};

export type DelegateKeyResponse = {
    /** The delegated key. */
    keyId: string;
    /** The key status after delegation. */
    status: "Delegated";
};

export type DelegateKeyRequest = DelegateKeyParams & { body: DelegateKeyBody }

export type DeleteKeyParams = {
    /** The key to delete. */
    keyId: string;
};

export type DeleteKeyResponse = {
    /** Unique identifier for the key. */
    id: string;
    /** The cryptographic scheme for the key. */
    scheme: "DH" | "ECDSA" | "EdDSA" | "Schnorr";
    /** The elliptic curve for the key. */
    curve: "ed25519" | "secp256k1" | "stark";
    /** Hex-encoded public key. */
    publicKey: string;
    /** Whether this key can be used as a master key for HD derivation. */
    masterKey?: boolean | undefined;
    /** Derivation info if this key was derived from a master key. */
    derivedFrom?: {
        /** The master key this key was derived from. */
        keyId: string;
        /** The derivation path used. */
        path: string;
    } | undefined;
    /** Nickname for the key. */
    name?: string | undefined;
    /** Current status of the key. */
    status: "Active" | "Archived";
    /** Whether the key is custodial (owned by organization) or non-custodial (delegated to end user). */
    custodial: boolean;
    dateCreated: string;
    /** Whether this key was imported. */
    imported?: boolean | undefined;
    /** Whether this key has been exported. */
    exported?: boolean | undefined;
    dateExported?: string | undefined;
    dateDeleted?: string | undefined;
};

export type DeleteKeyRequest = DeleteKeyParams

export type DeriveKeyBody = {
    /** Hex-encoded domain separation tag used as an input to the derivation. */
    domain: string;
    /** Hex-encoded seed value to derive from. The seed does not need to be secret. */
    seed: string;
};

export type DeriveKeyParams = {
    /** The Diffie-Hellman key to derive from. Must be a key created with `scheme=DH`. */
    keyId: string;
};

export type DeriveKeyResponse = {
    /** Hex-encoded derived output. Deterministic for a given key, domain and seed. */
    output: string;
};

export type DeriveKeyRequest = DeriveKeyParams & { body: DeriveKeyBody }

export type ExportKeyBody = {
    /** The public encryption key the signers should encrypt their key shares to. */
    encryptionKey: string;
    /** The protocol/curve combinations the client is able to reconstruct the key from. */
    supportedSchemes: {
        /** An MPC protocol the client supports. */
        protocol: ("CGGMP24" | "FROST" | "FROST_BITCOIN" | "GLOW20_DH" | "KU23") | "CGGMP21";
        /** An elliptic curve the client supports. */
        curve: "ed25519" | "secp256k1" | "stark";
    }[];
};

export type ExportKeyParams = {
    /** The key to export. */
    keyId: string;
};

export type ExportKeyResponse = {
    /** Hex-encoded public key of the exported key. */
    publicKey: string;
    /** The MPC protocol the key shares are for. */
    protocol: ("CGGMP24" | "FROST" | "FROST_BITCOIN" | "GLOW20_DH" | "KU23") | "CGGMP21";
    /** The elliptic curve of the exported key. */
    curve: "ed25519" | "secp256k1" | "stark";
    /** The TSS threshold of the wallet private signing key shares */
    minSigners: number;
    /** Keyshares of the exported wallet. They are encrypted with the provided encryption key. The exported private key is re-constructed from these keyshares. */
    encryptedKeyShares: {
        /** Base64-encoded ID of the signer exported the encrypted keyshare */
        signerId: string;
        /** Base64-encoded keyshare */
        encryptedKeyShare: string;
    }[];
};

export type ExportKeyRequest = ExportKeyParams & { body: ExportKeyBody }

export type GenerateSignatureBody = {
    kind: "Hash";
    /** 32-byte hash in hex encoded format. */
    hash: string;
    /** Required when signing with a Schnorr key. Specify the merkle root for tweaking the signing key, or the empty string "" to tweak with the default merkle root. */
    taprootMerkleRoot?: string | undefined;
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
    externalId?: string | undefined;
} | {
    kind: "Message";
    /** An arbitrary hex encoded message. */
    message: string;
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
    externalId?: string | undefined;
} | {
    kind: "Transaction";
    /** The unsigned hex-encoded transaction or JSON object for compatible networks */
    transaction: string | {};
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
    externalId?: string | undefined;
} | {
    kind: "Eip191";
    /** Hex-encoded message. */
    message: string;
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
    externalId?: string | undefined;
} | {
    kind: "Eip712";
    /** Type definitions. */
    types: {
        [x: string]: {
            name: string;
            type: string;
        }[];
    };
    /** Domain separator. */
    domain: {
        /** Name of the signing domain. */
        name?: string | undefined;
        /** Current major version of the signing domain. */
        version?: string | undefined;
        /** Chain ID. */
        chainId?: (number | string) | undefined;
        /** The address of the contract that will verify the signature. */
        verifyingContract?: string | undefined;
        /** 32-byte value as a last-resort domain separator. */
        salt?: string | undefined;
    };
    /** Structured message to sign. */
    message: {
        [x: string]: unknown;
    };
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
    externalId?: string | undefined;
} | {
    kind: "Eip7702";
    /** The address of the contract the signer's EOA will be delegated to. */
    address: string;
    /** The current nonce of the signer EOA. */
    nonce: number;
    /** Chain ID. */
    chainId: number;
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
    externalId?: string | undefined;
} | {
    kind: "Snip12";
    /** The primary type of the message. */
    primaryType: string;
    /** Type definitions. */
    types: {
        [x: string]: {
            name: string;
            type: string;
        }[];
    };
    /** Domain separator. */
    domain: {
        /** Name of the signing domain. */
        name?: string | undefined;
        /** Current major version of the signing domain. */
        version?: string | undefined;
        /** Chain ID. */
        chainId?: (number | string) | undefined;
        /** Revision of the domain. */
        revision?: (number | string) | undefined;
    };
    /** Structured message to sign. */
    message: {
        [x: string]: unknown;
    };
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
    externalId?: string | undefined;
} | {
    kind: "Psbt";
    /** The hex encoded PSBT. */
    psbt: string;
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
    externalId?: string | undefined;
} | {
    kind: "Bip322";
    /** The generic message hex encoded. */
    message: string;
    /** Defaults to Simple if not present. The formatted signature is returned in the `signedData` field in the response. */
    format?: ("Simple" | "Full") | undefined;
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
    externalId?: string | undefined;
} | {
    kind: "SignDocDirect";
    /** The hex encoded `SignDoc` Protobuf. */
    signDoc: string;
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
    externalId?: string | undefined;
} | {
    kind: "SignerPayload";
    /** The unsigned Signer Payload formatted as JSON, or as a serialized hex-encoded buffer.
    
    Please refer to the original Polkadot definition for more details: [SignerPayloadJson](https://github.com/polkadot-js/api/blob/v16.2.2/packages/types/src/types/extrinsic.ts#L32). Note that additional fields will be rejected.
    
    | Field                | Description                                                                              | Type - Optional      |
    | -------------------- | ---------------------------------------------------------------------------------------- | -------------------- |
    | `address`            | ss58-encoded address of the sending account.                                             | String               |
    | `blockHash`          | The hash of the checkpoint block, hex encoded.                                           | String               |
    | `blockNumber`        | The checkpoint block number, hex encoded.                                                | String               |
    | `era`                | The number of blocks after the checkpoint for which a transaction is valid, hex encoded. | String               |
    | `genesisHash`        | The genesis hash of the chain, hex encoded.                                              | String               |
    | `metadataHash`       | The metadataHash for the CheckMetadataHash SignedExtension, hex encoded.                 | String *(optional)*  |
    | `mode`               | flag indicating whether to verify the metadata hash or not.                              | Integer *(optional)* |
    | `method`             | The encoded method with arguments, hex encoded.                                          | String               |
    | `nonce`              | The nonce for the transaction, hex encoded.                                              | String               |
    | `tip`                | The tip to increase transaction priority, hex encoded.                                   | String               |
    | `version`            | The version of the extrinsic.                                                            | Integer              |
    | `specVersion`        | The current spec version for the runtime, hex encoded.                                   | String               |
    | `transactionVersion` | The current transaction version for the runtime, hex encoded.                            | String               |
    | `signedExtensions`   | The applicable signed extensions for this runtime.                                       | Array<String>       |
    
    ```json
    {
      "network": "Polymesh",
      "kind": "SignerPayload",
      "payload": {
        "address": "5H5tTnmLUqRgvTZvTwCdBKYjKLBm2gkp7u38Q9UUdJa8m6rX",
        "blockHash": "0x2ace05e703aa50b48c0ccccfc8b424f7aab9a1e2c424ed12e45d20b1e8ffd0d6",
        "blockNumber": "0x00000000",
        "era": "0x00",
        "genesisHash": "0x2ace05e703aa50b48c0ccccfc8b424f7aab9a1e2c424ed12e45d20b1e8ffd0d6",
        "method": "0x07141f3da32e72ac6eb6cb40d9e757594363a617b2c3964a2b6ec6895c6648f48d500000",
        "nonce": "0x00000000",
        "tip": "0x00000000000000000000000000000000",
        "version": 4,
        "specVersion": "0x006adb7a",
        "transactionVersion": "0x00000007",
        "signedExtensions": []
      }
    }
    ```
     */
    payload: string | {};
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
    externalId?: string | undefined;
} | {
    kind: "Cip8";
    /** The generic message hex encoded. */
    payload?: string | undefined;
    /** Allows an application to ask the user to sign some extra data but NOT put it inside the COSE structure (only as part of the data to sign). */
    externalAad?: string | undefined;
    context: "Signature1";
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
    externalId?: string | undefined;
} | {
    kind: "DfnsSmartAccountTransaction";
    structured: {
        address: string;
        userOperations: {
            to: string;
            value?: string | undefined;
            data?: string | undefined;
        }[];
        message: {
            kind: "Eip712";
            domain: {
                name?: string | undefined;
                version?: string | undefined;
                chainId?: (number | string) | undefined;
                verifyingContract?: string | undefined;
                salt?: string | undefined;
            };
            types: {
                [x: string]: {
                    name: string;
                    type: string;
                }[];
            };
            message: {
                [x: string]: any;
            };
        };
        authorization?: {
            kind: "Eip7702";
            address: string;
            nonce: number;
            chainId: number;
        } | undefined;
    };
    signatures: {
        [x: string]: {
            r: string;
            s: string;
            recid?: number | undefined;
            encoded?: string | undefined;
        };
    };
    transactionReference: string;
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
    externalId?: string | undefined;
} | {
    kind: "StellarFeeBumpTransaction";
    innerTransaction: string;
    transactionReference: string;
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
    externalId?: string | undefined;
};

export type GenerateSignatureParams = {
    /** The key to sign with. */
    keyId: string;
};

export type GenerateSignatureResponse = {
    /** Signature id. */
    id: string;
    /** Key id. */
    keyId: string;
    /** The user who initiated the request. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    requestBody: {
        kind: "Hash";
        /** 32-byte hash in hex encoded format. */
        hash: string;
        /** Required when signing with a Schnorr key. Specify the merkle root for tweaking the signing key, or the empty string "" to tweak with the default merkle root. */
        taprootMerkleRoot?: string | undefined;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "Message";
        /** An arbitrary hex encoded message. */
        message: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "Transaction";
        /** The unsigned hex-encoded transaction or JSON object for compatible networks */
        transaction: string | {};
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "Eip191";
        /** Hex-encoded message. */
        message: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "Eip712";
        /** Type definitions. */
        types: {
            [x: string]: {
                name: string;
                type: string;
            }[];
        };
        /** Domain separator. */
        domain: {
            /** Name of the signing domain. */
            name?: string | undefined;
            /** Current major version of the signing domain. */
            version?: string | undefined;
            /** Chain ID. */
            chainId?: (number | string) | undefined;
            /** The address of the contract that will verify the signature. */
            verifyingContract?: string | undefined;
            /** 32-byte value as a last-resort domain separator. */
            salt?: string | undefined;
        };
        /** Structured message to sign. */
        message: {
            [x: string]: unknown;
        };
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "Eip7702";
        /** The address of the contract the signer's EOA will be delegated to. */
        address: string;
        /** The current nonce of the signer EOA. */
        nonce: number;
        /** Chain ID. */
        chainId: number;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "Snip12";
        /** The primary type of the message. */
        primaryType: string;
        /** Type definitions. */
        types: {
            [x: string]: {
                name: string;
                type: string;
            }[];
        };
        /** Domain separator. */
        domain: {
            /** Name of the signing domain. */
            name?: string | undefined;
            /** Current major version of the signing domain. */
            version?: string | undefined;
            /** Chain ID. */
            chainId?: (number | string) | undefined;
            /** Revision of the domain. */
            revision?: (number | string) | undefined;
        };
        /** Structured message to sign. */
        message: {
            [x: string]: unknown;
        };
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "Psbt";
        /** The hex encoded PSBT. */
        psbt: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "Bip322";
        /** The generic message hex encoded. */
        message: string;
        /** Defaults to Simple if not present. The formatted signature is returned in the `signedData` field in the response. */
        format?: ("Simple" | "Full") | undefined;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "SignDocDirect";
        /** The hex encoded `SignDoc` Protobuf. */
        signDoc: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "SignerPayload";
        /** The unsigned Signer Payload formatted as JSON, or as a serialized hex-encoded buffer.
        
        Please refer to the original Polkadot definition for more details: [SignerPayloadJson](https://github.com/polkadot-js/api/blob/v16.2.2/packages/types/src/types/extrinsic.ts#L32). Note that additional fields will be rejected.
        
        | Field                | Description                                                                              | Type - Optional      |
        | -------------------- | ---------------------------------------------------------------------------------------- | -------------------- |
        | `address`            | ss58-encoded address of the sending account.                                             | String               |
        | `blockHash`          | The hash of the checkpoint block, hex encoded.                                           | String               |
        | `blockNumber`        | The checkpoint block number, hex encoded.                                                | String               |
        | `era`                | The number of blocks after the checkpoint for which a transaction is valid, hex encoded. | String               |
        | `genesisHash`        | The genesis hash of the chain, hex encoded.                                              | String               |
        | `metadataHash`       | The metadataHash for the CheckMetadataHash SignedExtension, hex encoded.                 | String *(optional)*  |
        | `mode`               | flag indicating whether to verify the metadata hash or not.                              | Integer *(optional)* |
        | `method`             | The encoded method with arguments, hex encoded.                                          | String               |
        | `nonce`              | The nonce for the transaction, hex encoded.                                              | String               |
        | `tip`                | The tip to increase transaction priority, hex encoded.                                   | String               |
        | `version`            | The version of the extrinsic.                                                            | Integer              |
        | `specVersion`        | The current spec version for the runtime, hex encoded.                                   | String               |
        | `transactionVersion` | The current transaction version for the runtime, hex encoded.                            | String               |
        | `signedExtensions`   | The applicable signed extensions for this runtime.                                       | Array<String>       |
        
        ```json
        {
          "network": "Polymesh",
          "kind": "SignerPayload",
          "payload": {
            "address": "5H5tTnmLUqRgvTZvTwCdBKYjKLBm2gkp7u38Q9UUdJa8m6rX",
            "blockHash": "0x2ace05e703aa50b48c0ccccfc8b424f7aab9a1e2c424ed12e45d20b1e8ffd0d6",
            "blockNumber": "0x00000000",
            "era": "0x00",
            "genesisHash": "0x2ace05e703aa50b48c0ccccfc8b424f7aab9a1e2c424ed12e45d20b1e8ffd0d6",
            "method": "0x07141f3da32e72ac6eb6cb40d9e757594363a617b2c3964a2b6ec6895c6648f48d500000",
            "nonce": "0x00000000",
            "tip": "0x00000000000000000000000000000000",
            "version": 4,
            "specVersion": "0x006adb7a",
            "transactionVersion": "0x00000007",
            "signedExtensions": []
          }
        }
        ```
         */
        payload: string | {};
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "Cip8";
        /** The generic message hex encoded. */
        payload?: string | undefined;
        /** Allows an application to ask the user to sign some extra data but NOT put it inside the COSE structure (only as part of the data to sign). */
        externalAad?: string | undefined;
        context: "Signature1";
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "DfnsSmartAccountTransaction";
        structured: {
            address: string;
            userOperations: {
                to: string;
                value?: string | undefined;
                data?: string | undefined;
            }[];
            message: {
                kind: "Eip712";
                domain: {
                    name?: string | undefined;
                    version?: string | undefined;
                    chainId?: (number | string) | undefined;
                    verifyingContract?: string | undefined;
                    salt?: string | undefined;
                };
                types: {
                    [x: string]: {
                        name: string;
                        type: string;
                    }[];
                };
                message: {
                    [x: string]: any;
                };
            };
            authorization?: {
                kind: "Eip7702";
                address: string;
                nonce: number;
                chainId: number;
            } | undefined;
        };
        signatures: {
            [x: string]: {
                r: string;
                s: string;
                recid?: number | undefined;
                encoded?: string | undefined;
            };
        };
        transactionReference: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "StellarFeeBumpTransaction";
        innerTransaction: string;
        transactionReference: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    };
    status: "Pending" | "Executing" | "Signed" | "Confirmed" | "Failed" | "Rejected";
    reason?: string | undefined;
    signature?: {
        r: string;
        s: string;
        recid?: number | undefined;
        encoded?: string | undefined;
    } | undefined;
    signatures?: {
        r: string;
        s: string;
        recid?: number | undefined;
        encoded?: string | undefined;
    }[] | undefined;
    signedData?: string | undefined;
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    txHash?: string | undefined;
    fee?: string | undefined;
    approvalId?: string | undefined;
    dateRequested: string;
    datePolicyResolved?: string | undefined;
    dateSigned?: string | undefined;
    dateConfirmed?: string | undefined;
    externalId?: string | undefined;
    /** Structured representation of the data used to construct the signature (e.g. nonce, gas parameters). Shape is blockchain specific. */
    details?: {
        [x: string]: unknown;
    } | undefined;
};

export type GenerateSignatureRequest = GenerateSignatureParams & { body: GenerateSignatureBody }

export type GetKeyParams = {
    /** The key to retrieve. */
    keyId: string;
};

export type GetKeyResponse = {
    /** Unique identifier for the key. */
    id: string;
    /** The cryptographic scheme for the key. */
    scheme: "DH" | "ECDSA" | "EdDSA" | "Schnorr";
    /** The elliptic curve for the key. */
    curve: "ed25519" | "secp256k1" | "stark";
    /** Hex-encoded public key. */
    publicKey: string;
    /** Whether this key can be used as a master key for HD derivation. */
    masterKey?: boolean | undefined;
    /** Derivation info if this key was derived from a master key. */
    derivedFrom?: {
        /** The master key this key was derived from. */
        keyId: string;
        /** The derivation path used. */
        path: string;
    } | undefined;
    /** Nickname for the key. */
    name?: string | undefined;
    /** Current status of the key. */
    status: "Active" | "Archived";
    /** Whether the key is custodial (owned by organization) or non-custodial (delegated to end user). */
    custodial: boolean;
    dateCreated: string;
    /** Whether this key was imported. */
    imported?: boolean | undefined;
    /** Whether this key has been exported. */
    exported?: boolean | undefined;
    dateExported?: string | undefined;
    dateDeleted?: string | undefined;
    /** Wallets associated with this key. */
    wallets: {
        /** The wallet id. */
        id: string;
        /** The network of the wallet. */
        network: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | ("KeyECDSA" | "KeyEdDSA" | "KeyECDSAStark");
    }[];
    /** Key store details. */
    store: {
        /** The key store id. */
        id: string;
        /** The type of key store. */
        kind: "Hsm" | "Mpc" | "OfflineSigner";
        /** The key id within the store. */
        keyId: string;
        /** The HD derivation path if applicable. */
        derivationPath?: string | undefined;
    };
};

export type GetKeyRequest = GetKeyParams

export type GetSignatureParams = {
    /** The key that was used for signing. */
    keyId: string;
    /** The signature request to retrieve. */
    signatureId: string;
};

export type GetSignatureResponse = {
    /** Signature id. */
    id: string;
    /** Key id. */
    keyId: string;
    /** The user who initiated the request. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    requestBody: {
        kind: "Hash";
        /** 32-byte hash in hex encoded format. */
        hash: string;
        /** Required when signing with a Schnorr key. Specify the merkle root for tweaking the signing key, or the empty string "" to tweak with the default merkle root. */
        taprootMerkleRoot?: string | undefined;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "Message";
        /** An arbitrary hex encoded message. */
        message: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "Transaction";
        /** The unsigned hex-encoded transaction or JSON object for compatible networks */
        transaction: string | {};
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "Eip191";
        /** Hex-encoded message. */
        message: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "Eip712";
        /** Type definitions. */
        types: {
            [x: string]: {
                name: string;
                type: string;
            }[];
        };
        /** Domain separator. */
        domain: {
            /** Name of the signing domain. */
            name?: string | undefined;
            /** Current major version of the signing domain. */
            version?: string | undefined;
            /** Chain ID. */
            chainId?: (number | string) | undefined;
            /** The address of the contract that will verify the signature. */
            verifyingContract?: string | undefined;
            /** 32-byte value as a last-resort domain separator. */
            salt?: string | undefined;
        };
        /** Structured message to sign. */
        message: {
            [x: string]: unknown;
        };
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "Eip7702";
        /** The address of the contract the signer's EOA will be delegated to. */
        address: string;
        /** The current nonce of the signer EOA. */
        nonce: number;
        /** Chain ID. */
        chainId: number;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "Snip12";
        /** The primary type of the message. */
        primaryType: string;
        /** Type definitions. */
        types: {
            [x: string]: {
                name: string;
                type: string;
            }[];
        };
        /** Domain separator. */
        domain: {
            /** Name of the signing domain. */
            name?: string | undefined;
            /** Current major version of the signing domain. */
            version?: string | undefined;
            /** Chain ID. */
            chainId?: (number | string) | undefined;
            /** Revision of the domain. */
            revision?: (number | string) | undefined;
        };
        /** Structured message to sign. */
        message: {
            [x: string]: unknown;
        };
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "Psbt";
        /** The hex encoded PSBT. */
        psbt: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "Bip322";
        /** The generic message hex encoded. */
        message: string;
        /** Defaults to Simple if not present. The formatted signature is returned in the `signedData` field in the response. */
        format?: ("Simple" | "Full") | undefined;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "SignDocDirect";
        /** The hex encoded `SignDoc` Protobuf. */
        signDoc: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "SignerPayload";
        /** The unsigned Signer Payload formatted as JSON, or as a serialized hex-encoded buffer.
        
        Please refer to the original Polkadot definition for more details: [SignerPayloadJson](https://github.com/polkadot-js/api/blob/v16.2.2/packages/types/src/types/extrinsic.ts#L32). Note that additional fields will be rejected.
        
        | Field                | Description                                                                              | Type - Optional      |
        | -------------------- | ---------------------------------------------------------------------------------------- | -------------------- |
        | `address`            | ss58-encoded address of the sending account.                                             | String               |
        | `blockHash`          | The hash of the checkpoint block, hex encoded.                                           | String               |
        | `blockNumber`        | The checkpoint block number, hex encoded.                                                | String               |
        | `era`                | The number of blocks after the checkpoint for which a transaction is valid, hex encoded. | String               |
        | `genesisHash`        | The genesis hash of the chain, hex encoded.                                              | String               |
        | `metadataHash`       | The metadataHash for the CheckMetadataHash SignedExtension, hex encoded.                 | String *(optional)*  |
        | `mode`               | flag indicating whether to verify the metadata hash or not.                              | Integer *(optional)* |
        | `method`             | The encoded method with arguments, hex encoded.                                          | String               |
        | `nonce`              | The nonce for the transaction, hex encoded.                                              | String               |
        | `tip`                | The tip to increase transaction priority, hex encoded.                                   | String               |
        | `version`            | The version of the extrinsic.                                                            | Integer              |
        | `specVersion`        | The current spec version for the runtime, hex encoded.                                   | String               |
        | `transactionVersion` | The current transaction version for the runtime, hex encoded.                            | String               |
        | `signedExtensions`   | The applicable signed extensions for this runtime.                                       | Array<String>       |
        
        ```json
        {
          "network": "Polymesh",
          "kind": "SignerPayload",
          "payload": {
            "address": "5H5tTnmLUqRgvTZvTwCdBKYjKLBm2gkp7u38Q9UUdJa8m6rX",
            "blockHash": "0x2ace05e703aa50b48c0ccccfc8b424f7aab9a1e2c424ed12e45d20b1e8ffd0d6",
            "blockNumber": "0x00000000",
            "era": "0x00",
            "genesisHash": "0x2ace05e703aa50b48c0ccccfc8b424f7aab9a1e2c424ed12e45d20b1e8ffd0d6",
            "method": "0x07141f3da32e72ac6eb6cb40d9e757594363a617b2c3964a2b6ec6895c6648f48d500000",
            "nonce": "0x00000000",
            "tip": "0x00000000000000000000000000000000",
            "version": 4,
            "specVersion": "0x006adb7a",
            "transactionVersion": "0x00000007",
            "signedExtensions": []
          }
        }
        ```
         */
        payload: string | {};
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "Cip8";
        /** The generic message hex encoded. */
        payload?: string | undefined;
        /** Allows an application to ask the user to sign some extra data but NOT put it inside the COSE structure (only as part of the data to sign). */
        externalAad?: string | undefined;
        context: "Signature1";
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "DfnsSmartAccountTransaction";
        structured: {
            address: string;
            userOperations: {
                to: string;
                value?: string | undefined;
                data?: string | undefined;
            }[];
            message: {
                kind: "Eip712";
                domain: {
                    name?: string | undefined;
                    version?: string | undefined;
                    chainId?: (number | string) | undefined;
                    verifyingContract?: string | undefined;
                    salt?: string | undefined;
                };
                types: {
                    [x: string]: {
                        name: string;
                        type: string;
                    }[];
                };
                message: {
                    [x: string]: any;
                };
            };
            authorization?: {
                kind: "Eip7702";
                address: string;
                nonce: number;
                chainId: number;
            } | undefined;
        };
        signatures: {
            [x: string]: {
                r: string;
                s: string;
                recid?: number | undefined;
                encoded?: string | undefined;
            };
        };
        transactionReference: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "StellarFeeBumpTransaction";
        innerTransaction: string;
        transactionReference: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    };
    status: "Pending" | "Executing" | "Signed" | "Confirmed" | "Failed" | "Rejected";
    reason?: string | undefined;
    signature?: {
        r: string;
        s: string;
        recid?: number | undefined;
        encoded?: string | undefined;
    } | undefined;
    signatures?: {
        r: string;
        s: string;
        recid?: number | undefined;
        encoded?: string | undefined;
    }[] | undefined;
    signedData?: string | undefined;
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    txHash?: string | undefined;
    fee?: string | undefined;
    approvalId?: string | undefined;
    dateRequested: string;
    datePolicyResolved?: string | undefined;
    dateSigned?: string | undefined;
    dateConfirmed?: string | undefined;
    externalId?: string | undefined;
    /** Structured representation of the data used to construct the signature (e.g. nonce, gas parameters). Shape is blockchain specific. */
    details?: {
        [x: string]: unknown;
    } | undefined;
};

export type GetSignatureRequest = GetSignatureParams

export type ImportKeyBody = {
    /** Nickname for the imported key. */
    name?: string | undefined;
    /** The elliptic curve of the private key being imported. */
    curve: "ed25519" | "secp256k1" | "stark";
    /** The MPC protocol the key shares are formatted for. */
    protocol: ("CGGMP24" | "FROST" | "FROST_BITCOIN" | "GLOW20_DH" | "KU23") | "CGGMP21";
    /** The TSS threshold: the minimum number of key shares required to sign. */
    minSigners: number;
    /** One key share per signer, each encrypted to that signer. */
    encryptedKeyShares: {
        /** ID of the signer this key share is for. */
        signerId: string;
        /** The key share encrypted to the target signer. */
        encryptedKeyShare: string;
    }[];
    /** Specify to create an extended master key for HD derivation. */
    masterKey?: boolean | undefined;
};

export type ImportKeyResponse = {
    /** Unique identifier for the key. */
    id: string;
    /** The cryptographic scheme for the key. */
    scheme: "DH" | "ECDSA" | "EdDSA" | "Schnorr";
    /** The elliptic curve for the key. */
    curve: "ed25519" | "secp256k1" | "stark";
    /** Hex-encoded public key. */
    publicKey: string;
    /** Whether this key can be used as a master key for HD derivation. */
    masterKey?: boolean | undefined;
    /** Derivation info if this key was derived from a master key. */
    derivedFrom?: {
        /** The master key this key was derived from. */
        keyId: string;
        /** The derivation path used. */
        path: string;
    } | undefined;
    /** Nickname for the key. */
    name?: string | undefined;
    /** Current status of the key. */
    status: "Active" | "Archived";
    /** Whether the key is custodial (owned by organization) or non-custodial (delegated to end user). */
    custodial: boolean;
    dateCreated: string;
    /** Whether this key was imported. */
    imported?: boolean | undefined;
    /** Whether this key has been exported. */
    exported?: boolean | undefined;
    dateExported?: string | undefined;
    dateDeleted?: string | undefined;
};

export type ImportKeyRequest = { body: ImportKeyBody }

export type ListKeysQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
    /** Filter by owner id or username. */
    owner?: string | undefined;
};

export type ListKeysResponse = {
    /** Current page items. */
    items: {
        /** Unique identifier for the key. */
        id: string;
        /** The cryptographic scheme for the key. */
        scheme: "DH" | "ECDSA" | "EdDSA" | "Schnorr";
        /** The elliptic curve for the key. */
        curve: "ed25519" | "secp256k1" | "stark";
        /** Hex-encoded public key. */
        publicKey: string;
        /** Whether this key can be used as a master key for HD derivation. */
        masterKey?: boolean | undefined;
        /** Derivation info if this key was derived from a master key. */
        derivedFrom?: {
            /** The master key this key was derived from. */
            keyId: string;
            /** The derivation path used. */
            path: string;
        } | undefined;
        /** Nickname for the key. */
        name?: string | undefined;
        /** Current status of the key. */
        status: "Active" | "Archived";
        /** Whether the key is custodial (owned by organization) or non-custodial (delegated to end user). */
        custodial: boolean;
        dateCreated: string;
        /** Whether this key was imported. */
        imported?: boolean | undefined;
        /** Whether this key has been exported. */
        exported?: boolean | undefined;
        dateExported?: string | undefined;
        dateDeleted?: string | undefined;
    }[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListKeysRequest = { query?: ListKeysQuery }

export type ListSignaturesParams = {
    /** The key to list signatures for. */
    keyId: string;
};

export type ListSignaturesQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
};

export type ListSignaturesResponse = {
    /** Current page items. */
    items: {
        /** Signature id. */
        id: string;
        /** Key id. */
        keyId: string;
        /** The user who initiated the request. */
        requester: {
            /** User id. */
            userId: string;
            /** Token id. */
            tokenId?: string | undefined;
        };
        requestBody: {
            kind: "Hash";
            /** 32-byte hash in hex encoded format. */
            hash: string;
            /** Required when signing with a Schnorr key. Specify the merkle root for tweaking the signing key, or the empty string "" to tweak with the default merkle root. */
            taprootMerkleRoot?: string | undefined;
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
            externalId?: string | undefined;
        } | {
            kind: "Message";
            /** An arbitrary hex encoded message. */
            message: string;
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
            externalId?: string | undefined;
        } | {
            kind: "Transaction";
            /** The unsigned hex-encoded transaction or JSON object for compatible networks */
            transaction: string | {};
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
            externalId?: string | undefined;
        } | {
            kind: "Eip191";
            /** Hex-encoded message. */
            message: string;
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
            externalId?: string | undefined;
        } | {
            kind: "Eip712";
            /** Type definitions. */
            types: {
                [x: string]: {
                    name: string;
                    type: string;
                }[];
            };
            /** Domain separator. */
            domain: {
                /** Name of the signing domain. */
                name?: string | undefined;
                /** Current major version of the signing domain. */
                version?: string | undefined;
                /** Chain ID. */
                chainId?: (number | string) | undefined;
                /** The address of the contract that will verify the signature. */
                verifyingContract?: string | undefined;
                /** 32-byte value as a last-resort domain separator. */
                salt?: string | undefined;
            };
            /** Structured message to sign. */
            message: {
                [x: string]: unknown;
            };
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
            externalId?: string | undefined;
        } | {
            kind: "Eip7702";
            /** The address of the contract the signer's EOA will be delegated to. */
            address: string;
            /** The current nonce of the signer EOA. */
            nonce: number;
            /** Chain ID. */
            chainId: number;
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
            externalId?: string | undefined;
        } | {
            kind: "Snip12";
            /** The primary type of the message. */
            primaryType: string;
            /** Type definitions. */
            types: {
                [x: string]: {
                    name: string;
                    type: string;
                }[];
            };
            /** Domain separator. */
            domain: {
                /** Name of the signing domain. */
                name?: string | undefined;
                /** Current major version of the signing domain. */
                version?: string | undefined;
                /** Chain ID. */
                chainId?: (number | string) | undefined;
                /** Revision of the domain. */
                revision?: (number | string) | undefined;
            };
            /** Structured message to sign. */
            message: {
                [x: string]: unknown;
            };
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
            externalId?: string | undefined;
        } | {
            kind: "Psbt";
            /** The hex encoded PSBT. */
            psbt: string;
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
            externalId?: string | undefined;
        } | {
            kind: "Bip322";
            /** The generic message hex encoded. */
            message: string;
            /** Defaults to Simple if not present. The formatted signature is returned in the `signedData` field in the response. */
            format?: ("Simple" | "Full") | undefined;
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
            externalId?: string | undefined;
        } | {
            kind: "SignDocDirect";
            /** The hex encoded `SignDoc` Protobuf. */
            signDoc: string;
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
            externalId?: string | undefined;
        } | {
            kind: "SignerPayload";
            /** The unsigned Signer Payload formatted as JSON, or as a serialized hex-encoded buffer.
            
            Please refer to the original Polkadot definition for more details: [SignerPayloadJson](https://github.com/polkadot-js/api/blob/v16.2.2/packages/types/src/types/extrinsic.ts#L32). Note that additional fields will be rejected.
            
            | Field                | Description                                                                              | Type - Optional      |
            | -------------------- | ---------------------------------------------------------------------------------------- | -------------------- |
            | `address`            | ss58-encoded address of the sending account.                                             | String               |
            | `blockHash`          | The hash of the checkpoint block, hex encoded.                                           | String               |
            | `blockNumber`        | The checkpoint block number, hex encoded.                                                | String               |
            | `era`                | The number of blocks after the checkpoint for which a transaction is valid, hex encoded. | String               |
            | `genesisHash`        | The genesis hash of the chain, hex encoded.                                              | String               |
            | `metadataHash`       | The metadataHash for the CheckMetadataHash SignedExtension, hex encoded.                 | String *(optional)*  |
            | `mode`               | flag indicating whether to verify the metadata hash or not.                              | Integer *(optional)* |
            | `method`             | The encoded method with arguments, hex encoded.                                          | String               |
            | `nonce`              | The nonce for the transaction, hex encoded.                                              | String               |
            | `tip`                | The tip to increase transaction priority, hex encoded.                                   | String               |
            | `version`            | The version of the extrinsic.                                                            | Integer              |
            | `specVersion`        | The current spec version for the runtime, hex encoded.                                   | String               |
            | `transactionVersion` | The current transaction version for the runtime, hex encoded.                            | String               |
            | `signedExtensions`   | The applicable signed extensions for this runtime.                                       | Array<String>       |
            
            ```json
            {
              "network": "Polymesh",
              "kind": "SignerPayload",
              "payload": {
                "address": "5H5tTnmLUqRgvTZvTwCdBKYjKLBm2gkp7u38Q9UUdJa8m6rX",
                "blockHash": "0x2ace05e703aa50b48c0ccccfc8b424f7aab9a1e2c424ed12e45d20b1e8ffd0d6",
                "blockNumber": "0x00000000",
                "era": "0x00",
                "genesisHash": "0x2ace05e703aa50b48c0ccccfc8b424f7aab9a1e2c424ed12e45d20b1e8ffd0d6",
                "method": "0x07141f3da32e72ac6eb6cb40d9e757594363a617b2c3964a2b6ec6895c6648f48d500000",
                "nonce": "0x00000000",
                "tip": "0x00000000000000000000000000000000",
                "version": 4,
                "specVersion": "0x006adb7a",
                "transactionVersion": "0x00000007",
                "signedExtensions": []
              }
            }
            ```
             */
            payload: string | {};
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
            externalId?: string | undefined;
        } | {
            kind: "Cip8";
            /** The generic message hex encoded. */
            payload?: string | undefined;
            /** Allows an application to ask the user to sign some extra data but NOT put it inside the COSE structure (only as part of the data to sign). */
            externalAad?: string | undefined;
            context: "Signature1";
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
            externalId?: string | undefined;
        } | {
            kind: "DfnsSmartAccountTransaction";
            structured: {
                address: string;
                userOperations: {
                    to: string;
                    value?: string | undefined;
                    data?: string | undefined;
                }[];
                message: {
                    kind: "Eip712";
                    domain: {
                        name?: string | undefined;
                        version?: string | undefined;
                        chainId?: (number | string) | undefined;
                        verifyingContract?: string | undefined;
                        salt?: string | undefined;
                    };
                    types: {
                        [x: string]: {
                            name: string;
                            type: string;
                        }[];
                    };
                    message: {
                        [x: string]: any;
                    };
                };
                authorization?: {
                    kind: "Eip7702";
                    address: string;
                    nonce: number;
                    chainId: number;
                } | undefined;
            };
            signatures: {
                [x: string]: {
                    r: string;
                    s: string;
                    recid?: number | undefined;
                    encoded?: string | undefined;
                };
            };
            transactionReference: string;
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
            externalId?: string | undefined;
        } | {
            kind: "StellarFeeBumpTransaction";
            innerTransaction: string;
            transactionReference: string;
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
            externalId?: string | undefined;
        };
        status: "Pending" | "Executing" | "Signed" | "Confirmed" | "Failed" | "Rejected";
        reason?: string | undefined;
        signature?: {
            r: string;
            s: string;
            recid?: number | undefined;
            encoded?: string | undefined;
        } | undefined;
        signatures?: {
            r: string;
            s: string;
            recid?: number | undefined;
            encoded?: string | undefined;
        }[] | undefined;
        signedData?: string | undefined;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Besu" | "Besu2" | "Besu3" | "Besu4" | "Besu5" | "Besu6" | "BesuTestnet" | "BesuTestnet2" | "BesuTestnet3" | "BesuTestnet4" | "BesuTestnet5" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "Rayls" | "RaylsTestnet" | "Robinhood" | "RobinhoodSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        txHash?: string | undefined;
        fee?: string | undefined;
        approvalId?: string | undefined;
        dateRequested: string;
        datePolicyResolved?: string | undefined;
        dateSigned?: string | undefined;
        dateConfirmed?: string | undefined;
        externalId?: string | undefined;
        /** Structured representation of the data used to construct the signature (e.g. nonce, gas parameters). Shape is blockchain specific. */
        details?: {
            [x: string]: unknown;
        } | undefined;
    }[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
    /** The key these signatures belong to. */
    keyId: string;
};

export type ListSignaturesRequest = ListSignaturesParams & { query?: ListSignaturesQuery }

export type UpdateKeyBody = {
    /** New nickname for the key. Pass `null` to clear the existing name. */
    name: string | null;
};

export type UpdateKeyParams = {
    /** The key to update. */
    keyId: string;
};

export type UpdateKeyResponse = {
    /** Unique identifier for the key. */
    id: string;
    /** The cryptographic scheme for the key. */
    scheme: "DH" | "ECDSA" | "EdDSA" | "Schnorr";
    /** The elliptic curve for the key. */
    curve: "ed25519" | "secp256k1" | "stark";
    /** Hex-encoded public key. */
    publicKey: string;
    /** Whether this key can be used as a master key for HD derivation. */
    masterKey?: boolean | undefined;
    /** Derivation info if this key was derived from a master key. */
    derivedFrom?: {
        /** The master key this key was derived from. */
        keyId: string;
        /** The derivation path used. */
        path: string;
    } | undefined;
    /** Nickname for the key. */
    name?: string | undefined;
    /** Current status of the key. */
    status: "Active" | "Archived";
    /** Whether the key is custodial (owned by organization) or non-custodial (delegated to end user). */
    custodial: boolean;
    dateCreated: string;
    /** Whether this key was imported. */
    imported?: boolean | undefined;
    /** Whether this key has been exported. */
    exported?: boolean | undefined;
    dateExported?: string | undefined;
    dateDeleted?: string | undefined;
};

export type UpdateKeyRequest = UpdateKeyParams & { body: UpdateKeyBody }

