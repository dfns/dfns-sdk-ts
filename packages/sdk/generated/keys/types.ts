export type CreateKeyBody = {
    scheme: "DH" | "ECDSA" | "EdDSA" | "Schnorr";
    curve: "ed25519" | "secp256k1" | "stark";
    name?: string | undefined;
    delegateTo?: string | undefined;
    delayDelegation?: boolean | undefined;
};

export type CreateKeyResponse = {
    id: string;
    scheme: "DH" | "ECDSA" | "EdDSA" | "Schnorr";
    curve: "ed25519" | "secp256k1" | "stark";
    publicKey: string;
    name?: string | undefined;
    status: "Active" | "Archived";
    custodial: boolean;
    dateCreated: string;
    imported?: boolean | undefined;
    exported?: boolean | undefined;
    dateExported?: string | undefined;
};

export type CreateKeyRequest = { body: CreateKeyBody }

export type DelegateKeyBody = {
    delegateTo: string;
};

export type DelegateKeyParams = {
    keyId: string;
};

export type DelegateKeyResponse = {
    keyId: string;
    status: "Delegated";
};

export type DelegateKeyRequest = DelegateKeyParams & { body: DelegateKeyBody }

export type DeleteKeyParams = {
    keyId: string;
};

export type DeleteKeyResponse = {
    id: string;
    scheme: "DH" | "ECDSA" | "EdDSA" | "Schnorr";
    curve: "ed25519" | "secp256k1" | "stark";
    publicKey: string;
    name?: string | undefined;
    status: "Active" | "Archived";
    custodial: boolean;
    dateCreated: string;
    imported?: boolean | undefined;
    exported?: boolean | undefined;
    dateExported?: string | undefined;
};

export type DeleteKeyRequest = DeleteKeyParams

export type DeriveKeyBody = {
    domain: string;
    seed: string;
};

export type DeriveKeyParams = {
    keyId: string;
};

export type DeriveKeyResponse = {
    output: string;
};

export type DeriveKeyRequest = DeriveKeyParams & { body: DeriveKeyBody }

export type ExportKeyBody = {
    encryptionKey: string;
    supportedSchemes: {
        protocol: "CGGMP21" | "FROST" | "FROST_BITCOIN" | "GLOW20_DH" | "KU23";
        curve: "ed25519" | "secp256k1" | "stark";
    }[];
};

export type ExportKeyParams = {
    keyId: string;
};

export type ExportKeyResponse = {
    publicKey: string;
    protocol: "CGGMP21" | "FROST" | "FROST_BITCOIN" | "GLOW20_DH" | "KU23";
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
    hash: string;
    taprootMerkleRoot?: string | undefined;
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    externalId?: string | undefined;
} | {
    kind: "Message";
    message: string;
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    externalId?: string | undefined;
} | {
    kind: "Eip7702";
    address: string;
    nonce: number;
    chainId: number;
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    externalId?: string | undefined;
} | {
    kind: "Transaction";
    transaction: string;
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    externalId?: string | undefined;
} | {
    kind: "Eip712";
    types: {
        [x: string]: {
            name: string;
            type: string;
        }[];
    };
    domain: {
        name?: string | undefined;
        version?: string | undefined;
        chainId?: (number | string) | undefined;
        verifyingContract?: string | undefined;
        salt?: string | undefined;
    };
    message: {
        [x: string]: unknown;
    };
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    externalId?: string | undefined;
} | {
    kind: "Psbt";
    psbt: string;
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    externalId?: string | undefined;
} | {
    kind: "Bip322";
    message: string;
    format?: ("Simple" | "Full") | undefined;
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    externalId?: string | undefined;
} | {
    kind: "PactCommand";
    command: string;
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    externalId?: string | undefined;
} | {
    kind: "SignDocDirect";
    signDoc: string;
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    externalId?: string | undefined;
} | {
    kind: "SignerPayload";
    payload: string | {};
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    externalId?: string | undefined;
} | {
    kind: "Cip8";
    payload?: string | undefined;
    externalAad?: string | undefined;
    context: "Signature1";
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    externalId?: string | undefined;
};

export type GenerateSignatureParams = {
    keyId: string;
};

export type GenerateSignatureResponse = {
    id: string;
    keyId: string;
    requester: {
        userId: string;
        tokenId?: string | undefined;
    };
    requestBody: {
        kind: "Hash";
        hash: string;
        taprootMerkleRoot?: string | undefined;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        externalId?: string | undefined;
    } | {
        kind: "Message";
        message: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        externalId?: string | undefined;
    } | {
        kind: "Eip7702";
        address: string;
        nonce: number;
        chainId: number;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        externalId?: string | undefined;
    } | {
        kind: "Transaction";
        transaction: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        externalId?: string | undefined;
    } | {
        kind: "Eip712";
        types: {
            [x: string]: {
                name: string;
                type: string;
            }[];
        };
        domain: {
            name?: string | undefined;
            version?: string | undefined;
            chainId?: (number | string) | undefined;
            verifyingContract?: string | undefined;
            salt?: string | undefined;
        };
        message: {
            [x: string]: unknown;
        };
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        externalId?: string | undefined;
    } | {
        kind: "Psbt";
        psbt: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        externalId?: string | undefined;
    } | {
        kind: "Bip322";
        message: string;
        format?: ("Simple" | "Full") | undefined;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        externalId?: string | undefined;
    } | {
        kind: "PactCommand";
        command: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        externalId?: string | undefined;
    } | {
        kind: "SignDocDirect";
        signDoc: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        externalId?: string | undefined;
    } | {
        kind: "SignerPayload";
        payload: string | {};
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        externalId?: string | undefined;
    } | {
        kind: "Cip8";
        payload?: string | undefined;
        externalAad?: string | undefined;
        context: "Signature1";
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    txHash?: string | undefined;
    fee?: string | undefined;
    approvalId?: string | undefined;
    dateRequested: string;
    datePolicyResolved?: string | undefined;
    dateSigned?: string | undefined;
    dateConfirmed?: string | undefined;
    externalId?: string | undefined;
};

export type GenerateSignatureRequest = GenerateSignatureParams & { body: GenerateSignatureBody }

export type GetKeyParams = {
    keyId: string;
};

export type GetKeyResponse = {
    id: string;
    scheme: "DH" | "ECDSA" | "EdDSA" | "Schnorr";
    curve: "ed25519" | "secp256k1" | "stark";
    publicKey: string;
    name?: string | undefined;
    status: "Active" | "Archived";
    custodial: boolean;
    dateCreated: string;
    imported?: boolean | undefined;
    exported?: boolean | undefined;
    dateExported?: string | undefined;
    wallets: {
        id: string;
        network: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | ("KeyECDSA" | "KeyEdDSA" | "KeyECDSAStark");
    }[];
    store: {
        kind: "Hsm" | "Mpc";
        keyId: string;
    };
};

export type GetKeyRequest = GetKeyParams

export type GetSignatureParams = {
    keyId: string;
    signatureId: string;
};

export type GetSignatureResponse = {
    id: string;
    keyId: string;
    requester: {
        userId: string;
        tokenId?: string | undefined;
    };
    requestBody: {
        kind: "Hash";
        hash: string;
        taprootMerkleRoot?: string | undefined;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        externalId?: string | undefined;
    } | {
        kind: "Message";
        message: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        externalId?: string | undefined;
    } | {
        kind: "Eip7702";
        address: string;
        nonce: number;
        chainId: number;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        externalId?: string | undefined;
    } | {
        kind: "Transaction";
        transaction: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        externalId?: string | undefined;
    } | {
        kind: "Eip712";
        types: {
            [x: string]: {
                name: string;
                type: string;
            }[];
        };
        domain: {
            name?: string | undefined;
            version?: string | undefined;
            chainId?: (number | string) | undefined;
            verifyingContract?: string | undefined;
            salt?: string | undefined;
        };
        message: {
            [x: string]: unknown;
        };
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        externalId?: string | undefined;
    } | {
        kind: "Psbt";
        psbt: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        externalId?: string | undefined;
    } | {
        kind: "Bip322";
        message: string;
        format?: ("Simple" | "Full") | undefined;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        externalId?: string | undefined;
    } | {
        kind: "PactCommand";
        command: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        externalId?: string | undefined;
    } | {
        kind: "SignDocDirect";
        signDoc: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        externalId?: string | undefined;
    } | {
        kind: "SignerPayload";
        payload: string | {};
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        externalId?: string | undefined;
    } | {
        kind: "Cip8";
        payload?: string | undefined;
        externalAad?: string | undefined;
        context: "Signature1";
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    txHash?: string | undefined;
    fee?: string | undefined;
    approvalId?: string | undefined;
    dateRequested: string;
    datePolicyResolved?: string | undefined;
    dateSigned?: string | undefined;
    dateConfirmed?: string | undefined;
    externalId?: string | undefined;
};

export type GetSignatureRequest = GetSignatureParams

export type ImportKeyBody = {
    name?: string | undefined;
    curve: "ed25519" | "secp256k1" | "stark";
    protocol: "CGGMP21" | "FROST" | "FROST_BITCOIN" | "GLOW20_DH" | "KU23";
    minSigners: number;
    encryptedKeyShares: {
        signerId: string;
        encryptedKeyShare: string;
    }[];
};

export type ImportKeyResponse = {
    id: string;
    scheme: "DH" | "ECDSA" | "EdDSA" | "Schnorr";
    curve: "ed25519" | "secp256k1" | "stark";
    publicKey: string;
    name?: string | undefined;
    status: "Active" | "Archived";
    custodial: boolean;
    dateCreated: string;
    imported?: boolean | undefined;
    exported?: boolean | undefined;
    dateExported?: string | undefined;
};

export type ImportKeyRequest = { body: ImportKeyBody }

export type ListKeysQuery = {
    limit?: string | undefined;
    paginationToken?: string | undefined;
    owner?: string | undefined;
};

export type ListKeysResponse = {
    items: {
        id: string;
        scheme: "DH" | "ECDSA" | "EdDSA" | "Schnorr";
        curve: "ed25519" | "secp256k1" | "stark";
        publicKey: string;
        name?: string | undefined;
        status: "Active" | "Archived";
        custodial: boolean;
        dateCreated: string;
        imported?: boolean | undefined;
        exported?: boolean | undefined;
        dateExported?: string | undefined;
    }[];
    nextPageToken?: string | undefined;
};

export type ListKeysRequest = { query?: ListKeysQuery }

export type ListSignaturesParams = {
    keyId: string;
};

export type ListSignaturesQuery = {
    limit?: string | undefined;
    paginationToken?: string | undefined;
};

export type ListSignaturesResponse = {
    keyId: string;
    items: {
        id: string;
        keyId: string;
        requester: {
            userId: string;
            tokenId?: string | undefined;
        };
        requestBody: {
            kind: "Hash";
            hash: string;
            taprootMerkleRoot?: string | undefined;
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            externalId?: string | undefined;
        } | {
            kind: "Message";
            message: string;
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            externalId?: string | undefined;
        } | {
            kind: "Eip7702";
            address: string;
            nonce: number;
            chainId: number;
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            externalId?: string | undefined;
        } | {
            kind: "Transaction";
            transaction: string;
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            externalId?: string | undefined;
        } | {
            kind: "Eip712";
            types: {
                [x: string]: {
                    name: string;
                    type: string;
                }[];
            };
            domain: {
                name?: string | undefined;
                version?: string | undefined;
                chainId?: (number | string) | undefined;
                verifyingContract?: string | undefined;
                salt?: string | undefined;
            };
            message: {
                [x: string]: unknown;
            };
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            externalId?: string | undefined;
        } | {
            kind: "Psbt";
            psbt: string;
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            externalId?: string | undefined;
        } | {
            kind: "Bip322";
            message: string;
            format?: ("Simple" | "Full") | undefined;
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            externalId?: string | undefined;
        } | {
            kind: "PactCommand";
            command: string;
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            externalId?: string | undefined;
        } | {
            kind: "SignDocDirect";
            signDoc: string;
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            externalId?: string | undefined;
        } | {
            kind: "SignerPayload";
            payload: string | {};
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            externalId?: string | undefined;
        } | {
            kind: "Cip8";
            payload?: string | undefined;
            externalAad?: string | undefined;
            context: "Signature1";
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        txHash?: string | undefined;
        fee?: string | undefined;
        approvalId?: string | undefined;
        dateRequested: string;
        datePolicyResolved?: string | undefined;
        dateSigned?: string | undefined;
        dateConfirmed?: string | undefined;
        externalId?: string | undefined;
    }[];
    nextPageToken?: string | undefined;
};

export type ListSignaturesRequest = ListSignaturesParams & { query?: ListSignaturesQuery }

export type UpdateKeyBody = {
    name: string | null;
};

export type UpdateKeyParams = {
    keyId: string;
};

export type UpdateKeyResponse = {
    id: string;
    scheme: "DH" | "ECDSA" | "EdDSA" | "Schnorr";
    curve: "ed25519" | "secp256k1" | "stark";
    publicKey: string;
    name?: string | undefined;
    status: "Active" | "Archived";
    custodial: boolean;
    dateCreated: string;
    imported?: boolean | undefined;
    exported?: boolean | undefined;
    dateExported?: string | undefined;
};

export type UpdateKeyRequest = UpdateKeyParams & { body: UpdateKeyBody }

