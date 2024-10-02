export type BroadcastTransactionBody = {
    kind: "Transaction";
    transaction: string;
    externalId?: string | undefined;
} | {
    kind: "Evm";
    to?: string | undefined;
    value?: (string | string) | undefined;
    data?: string | undefined;
    nonce?: (number | string | string) | undefined;
    gasLimit?: (string | string) | undefined;
    externalId?: string | undefined;
} | {
    kind: "Eip1559";
    to?: string | undefined;
    value?: (string | string) | undefined;
    data?: string | undefined;
    nonce?: (number | string | string) | undefined;
    gasLimit?: (string | string) | undefined;
    maxFeePerGas?: (string | string) | undefined;
    maxPriorityFeePerGas?: (string | string) | undefined;
    externalId?: string | undefined;
} | {
    kind: "EvmLegacy";
    to?: string | undefined;
    value?: (string | string) | undefined;
    data?: string | undefined;
    nonce?: (number | string | string) | undefined;
    gasLimit?: (string | string) | undefined;
    gasPrice?: (string | string) | undefined;
    externalId?: string | undefined;
} | {
    kind: "Psbt";
    psbt: string;
    externalId?: string | undefined;
};

export type BroadcastTransactionParams = {
    walletId: string;
};

export type BroadcastTransactionResponse = {
    id: string;
    walletId: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    requester: {
        userId: string;
        tokenId?: string | undefined;
        appId?: string | undefined;
    };
    requestBody: {
        kind: "Transaction";
        transaction: string;
        externalId?: string | undefined;
    } | {
        kind: "Evm";
        to?: string | undefined;
        value?: (string | string) | undefined;
        data?: string | undefined;
        nonce?: (number | string | string) | undefined;
        gasLimit?: (string | string) | undefined;
        externalId?: string | undefined;
    } | {
        kind: "Eip1559";
        to?: string | undefined;
        value?: (string | string) | undefined;
        data?: string | undefined;
        nonce?: (number | string | string) | undefined;
        gasLimit?: (string | string) | undefined;
        maxFeePerGas?: (string | string) | undefined;
        maxPriorityFeePerGas?: (string | string) | undefined;
        externalId?: string | undefined;
    } | {
        kind: "EvmLegacy";
        to?: string | undefined;
        value?: (string | string) | undefined;
        data?: string | undefined;
        nonce?: (number | string | string) | undefined;
        gasLimit?: (string | string) | undefined;
        gasPrice?: (string | string) | undefined;
        externalId?: string | undefined;
    } | {
        kind: "Psbt";
        psbt: string;
        externalId?: string | undefined;
    };
    status: "Pending" | "Executing" | "Broadcasted" | "Confirmed" | "Failed" | "Rejected";
    reason?: string | undefined;
    txHash?: string | undefined;
    fee?: string | undefined;
    approvalId?: string | undefined;
    dateRequested: string;
    datePolicyResolved?: string | undefined;
    dateBroadcasted?: string | undefined;
    dateConfirmed?: string | undefined;
    externalId?: string | undefined;
};

export type BroadcastTransactionRequest = BroadcastTransactionParams & { body: BroadcastTransactionBody }

export type CreateWalletBody = {
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismSepolia" | "Origyn" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "ArbitrumGoerli" | "BaseGoerli" | "Cardano" | "CardanoPreprod" | "Kusama" | "OptimismGoerli" | "Polkadot" | "Westend" | "Tezos" | "TezosGhostnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
    name?: string | undefined;
    delegateTo?: string | undefined;
    delayDelegation?: boolean | undefined;
    externalId?: string | undefined;
    tags?: string[] | undefined;
};

export type CreateWalletResponse = {
    id: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    address?: string | undefined;
    signingKey: {
        scheme: "ECDSA" | "EdDSA";
        curve: "ed25519" | "secp256k1" | "stark";
        publicKey: string;
    };
    status: "Active" | "Archived";
    dateCreated: string;
    name?: string | undefined;
    custodial: boolean;
    imported?: boolean | undefined;
    exported?: boolean | undefined;
    dateExported?: string | undefined;
    externalId?: string | undefined;
    tags: string[];
};

export type CreateWalletRequest = { body: CreateWalletBody }

export type DelegateWalletBody = {
    userId: string;
};

export type DelegateWalletParams = {
    walletId: string;
};

export type DelegateWalletResponse = {
    walletId: string;
    status: "Delegated";
};

export type DelegateWalletRequest = DelegateWalletParams & { body: DelegateWalletBody }

export type ExportWalletBody = {
    encryptionKey: string;
    supportedSchemes: {
        protocol: "CGGMP21" | "FROST" | "FROST_BITCOIN";
        curve: "ed25519" | "secp256k1" | "stark";
    }[];
};

export type ExportWalletParams = {
    walletId: string;
};

export type ExportWalletResponse = {
    publicKey: string;
    /** The TSS threshold of the wallet private signing key shares */
    minSigners: number;
    protocol: "CGGMP21" | "FROST" | "FROST_BITCOIN";
    curve: "ed25519" | "secp256k1" | "stark";
    /** Keyshares of the exported wallet. They are encrypted with the provided encryption key. The exported private key is re-constructed from these keyshares. */
    encryptedKeyShares: {
        /** Base64-encoded ID of the signer exported the encrypted keyshare */
        signerId: string;
        /** Base64-encoded keyshare */
        encryptedKeyShare: string;
    }[];
};

export type ExportWalletRequest = ExportWalletParams & { body: ExportWalletBody }

export type GenerateSignatureBody = {
    kind: "Hash";
    hash: string;
    externalId?: string | undefined;
} | {
    kind: "Message";
    message: string;
    externalId?: string | undefined;
} | {
    kind: "Transaction";
    transaction: string;
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
        chainId?: number | undefined;
        verifyingContract?: string | undefined;
        salt?: string | undefined;
    };
    message: {
        [x: string]: unknown;
    };
    externalId?: string | undefined;
} | {
    kind: "Psbt";
    psbt: string;
    externalId?: string | undefined;
};

export type GenerateSignatureParams = {
    walletId: string;
};

export type GenerateSignatureResponse = {
    id: string;
    walletId: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    requester: {
        userId: string;
        tokenId?: string | undefined;
        appId?: string | undefined;
    };
    requestBody: {
        kind: "Hash";
        hash: string;
        externalId?: string | undefined;
    } | {
        kind: "Message";
        message: string;
        externalId?: string | undefined;
    } | {
        kind: "Transaction";
        transaction: string;
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
            chainId?: number | undefined;
            verifyingContract?: string | undefined;
            salt?: string | undefined;
        };
        message: {
            [x: string]: unknown;
        };
        externalId?: string | undefined;
    } | {
        kind: "Psbt";
        psbt: string;
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

export type GetSignatureParams = {
    walletId: string;
    signatureId: string;
};

export type GetSignatureResponse = {
    id: string;
    walletId: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    requester: {
        userId: string;
        tokenId?: string | undefined;
        appId?: string | undefined;
    };
    requestBody: {
        kind: "Hash";
        hash: string;
        externalId?: string | undefined;
    } | {
        kind: "Message";
        message: string;
        externalId?: string | undefined;
    } | {
        kind: "Transaction";
        transaction: string;
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
            chainId?: number | undefined;
            verifyingContract?: string | undefined;
            salt?: string | undefined;
        };
        message: {
            [x: string]: unknown;
        };
        externalId?: string | undefined;
    } | {
        kind: "Psbt";
        psbt: string;
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

export type GetTransactionParams = {
    walletId: string;
    transactionId: string;
};

export type GetTransactionResponse = {
    id: string;
    walletId: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    requester: {
        userId: string;
        tokenId?: string | undefined;
        appId?: string | undefined;
    };
    requestBody: {
        kind: "Transaction";
        transaction: string;
        externalId?: string | undefined;
    } | {
        kind: "Evm";
        to?: string | undefined;
        value?: (string | string) | undefined;
        data?: string | undefined;
        nonce?: (number | string | string) | undefined;
        gasLimit?: (string | string) | undefined;
        externalId?: string | undefined;
    } | {
        kind: "Eip1559";
        to?: string | undefined;
        value?: (string | string) | undefined;
        data?: string | undefined;
        nonce?: (number | string | string) | undefined;
        gasLimit?: (string | string) | undefined;
        maxFeePerGas?: (string | string) | undefined;
        maxPriorityFeePerGas?: (string | string) | undefined;
        externalId?: string | undefined;
    } | {
        kind: "EvmLegacy";
        to?: string | undefined;
        value?: (string | string) | undefined;
        data?: string | undefined;
        nonce?: (number | string | string) | undefined;
        gasLimit?: (string | string) | undefined;
        gasPrice?: (string | string) | undefined;
        externalId?: string | undefined;
    } | {
        kind: "Psbt";
        psbt: string;
        externalId?: string | undefined;
    };
    status: "Pending" | "Executing" | "Broadcasted" | "Confirmed" | "Failed" | "Rejected";
    reason?: string | undefined;
    txHash?: string | undefined;
    fee?: string | undefined;
    approvalId?: string | undefined;
    dateRequested: string;
    datePolicyResolved?: string | undefined;
    dateBroadcasted?: string | undefined;
    dateConfirmed?: string | undefined;
    externalId?: string | undefined;
};

export type GetTransactionRequest = GetTransactionParams

export type GetTransferParams = {
    walletId: string;
    transferId: string;
};

export type GetTransferResponse = {
    id: string;
    walletId: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    requester: {
        userId: string;
        tokenId?: string | undefined;
        appId?: string | undefined;
    };
    requestBody: {
        kind: "Native";
        to: string | string | string | string | string | string | string | string | string | string | string | string | string | string;
        amount: string;
        memo?: string | undefined;
        priority?: ("Slow" | "Standard" | "Fast") | undefined;
        externalId?: string | undefined;
    } | {
        kind: "Erc20";
        contract: string;
        to: string;
        amount: string;
        priority?: ("Slow" | "Standard" | "Fast") | undefined;
        externalId?: string | undefined;
    } | {
        kind: "Erc721";
        contract: string;
        to: string;
        tokenId: string;
        priority?: ("Slow" | "Standard" | "Fast") | undefined;
        externalId?: string | undefined;
    } | {
        kind: "Trc10";
        tokenId: string;
        to: string;
        amount: string;
        externalId?: string | undefined;
    } | {
        kind: "Trc20";
        contract: string;
        to: string;
        amount: string;
        externalId?: string | undefined;
    } | {
        kind: "Trc721";
        contract: string;
        to: string;
        tokenId: string;
        externalId?: string | undefined;
    } | {
        kind: "Asa";
        assetId: string;
        to: string;
        amount: string;
        externalId?: string | undefined;
    } | {
        kind: "Sep41";
        issuer: string;
        assetCode: string;
        to: string;
        amount: string;
        memo?: string | undefined;
        externalId?: string | undefined;
    } | {
        kind: "Spl" | "Spl2022";
        to: string;
        amount: string;
        mint: string;
        createDestinationAccount?: boolean | undefined;
        externalId?: string | undefined;
    } | {
        kind: "Tep74";
        to: string;
        master: string;
        amount: string;
        memo?: string | undefined;
        externalId?: string | undefined;
    };
    metadata: {
        asset: {
            symbol?: string | undefined;
            decimals?: number | undefined;
            verified?: boolean | undefined;
            quotes?: {
                [x: string]: number;
            } | undefined;
        };
    };
    status: "Pending" | "Executing" | "Broadcasted" | "Confirmed" | "Failed" | "Rejected";
    reason?: string | undefined;
    txHash?: string | undefined;
    fee?: string | undefined;
    dateRequested: string;
    datePolicyResolved?: string | undefined;
    dateBroadcasted?: string | undefined;
    dateConfirmed?: string | undefined;
    approvalId?: string | undefined;
    externalId?: string | undefined;
};

export type GetTransferRequest = GetTransferParams

export type GetWalletParams = {
    walletId: string;
};

export type GetWalletResponse = {
    id: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    address?: string | undefined;
    signingKey: {
        scheme: "ECDSA" | "EdDSA";
        curve: "ed25519" | "secp256k1" | "stark";
        publicKey: string;
    };
    status: "Active" | "Archived";
    dateCreated: string;
    name?: string | undefined;
    custodial: boolean;
    imported?: boolean | undefined;
    exported?: boolean | undefined;
    dateExported?: string | undefined;
    externalId?: string | undefined;
    tags: string[];
};

export type GetWalletRequest = GetWalletParams

export type GetWalletAssetsParams = {
    walletId: string;
};

export type GetWalletAssetsResponse = {
    walletId: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    assets: (({
        kind: "Native";
    } | {
        kind: "Asa";
        assetId: string;
    } | {
        kind: "Erc20" | "Trc20";
        contract: string;
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
    })[];
};

export type GetWalletAssetsRequest = GetWalletAssetsParams

export type GetWalletHistoryParams = {
    walletId: string;
};

export type GetWalletHistoryQuery = {
    limit?: string | undefined;
    paginationToken?: string | undefined;
    direction?: ("In" | "Out") | undefined;
    kind?: ("NativeTransfer" | "AsaTransfer" | "Erc20Transfer" | "Erc721Transfer" | "Tep74Transfer" | "Trc10Transfer" | "Trc20Transfer" | "Trc721Transfer" | "Sep41Transfer" | "SplTransfer" | "Spl2022Transfer" | "UtxoTransfer") | undefined;
    contract?: string | undefined;
};

export type GetWalletHistoryResponse = {
    walletId: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    items: ({
        walletId: string;
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        metadata: {
            asset: {
                symbol?: string | undefined;
                decimals?: number | undefined;
                verified?: boolean | undefined;
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                decimals?: number | undefined;
                verified?: boolean | undefined;
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
    } | {
        walletId: string;
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        metadata: {
            asset: {
                symbol?: string | undefined;
                decimals?: number | undefined;
                verified?: boolean | undefined;
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                decimals?: number | undefined;
                verified?: boolean | undefined;
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
    } | {
        walletId: string;
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        metadata: {
            asset: {
                symbol?: string | undefined;
                decimals?: number | undefined;
                verified?: boolean | undefined;
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                decimals?: number | undefined;
                verified?: boolean | undefined;
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
    } | {
        walletId: string;
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        metadata: {
            asset: {
                symbol?: string | undefined;
                decimals?: number | undefined;
                verified?: boolean | undefined;
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                decimals?: number | undefined;
                verified?: boolean | undefined;
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
    } | {
        walletId: string;
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        metadata: {
            asset: {
                symbol?: string | undefined;
                decimals?: number | undefined;
                verified?: boolean | undefined;
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                decimals?: number | undefined;
                verified?: boolean | undefined;
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
    } | {
        walletId: string;
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        metadata: {
            asset: {
                symbol?: string | undefined;
                decimals?: number | undefined;
                verified?: boolean | undefined;
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                decimals?: number | undefined;
                verified?: boolean | undefined;
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
    } | {
        walletId: string;
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        metadata: {
            asset: {
                symbol?: string | undefined;
                decimals?: number | undefined;
                verified?: boolean | undefined;
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                decimals?: number | undefined;
                verified?: boolean | undefined;
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
    } | {
        walletId: string;
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        metadata: {
            asset: {
                symbol?: string | undefined;
                decimals?: number | undefined;
                verified?: boolean | undefined;
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                decimals?: number | undefined;
                verified?: boolean | undefined;
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
    } | {
        walletId: string;
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        metadata: {
            asset: {
                symbol?: string | undefined;
                decimals?: number | undefined;
                verified?: boolean | undefined;
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                decimals?: number | undefined;
                verified?: boolean | undefined;
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
    } | {
        walletId: string;
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        metadata: {
            asset: {
                symbol?: string | undefined;
                decimals?: number | undefined;
                verified?: boolean | undefined;
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                decimals?: number | undefined;
                verified?: boolean | undefined;
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
    } | {
        walletId: string;
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
        blockNumber: number;
        txHash: string;
        index?: string | undefined;
        timestamp: string;
        metadata: {
            asset: {
                symbol?: string | undefined;
                decimals?: number | undefined;
                verified?: boolean | undefined;
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
            fee?: {
                symbol?: string | undefined;
                decimals?: number | undefined;
                verified?: boolean | undefined;
                quotes?: {
                    [x: string]: number;
                } | undefined;
            } | undefined;
        };
        kind: "UtxoTransfer";
        froms: string[];
        tos: string[];
        value: string;
        fee?: string | undefined;
    })[];
    nextPageToken?: string | undefined;
};

export type GetWalletHistoryRequest = GetWalletHistoryParams & { query?: GetWalletHistoryQuery }

export type GetWalletNftsParams = {
    walletId: string;
};

export type GetWalletNftsResponse = {
    walletId: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    nfts: ({
        kind: "Asa";
        assetId: string;
        symbol?: string | undefined;
        tokenUri?: string | undefined;
    } | {
        kind: "Erc721" | "Trc721";
        contract: string;
        tokenId: string;
        symbol?: string | undefined;
        tokenUri?: string | undefined;
    })[];
};

export type GetWalletNftsRequest = GetWalletNftsParams

export type ImportWalletBody = {
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismSepolia" | "Origyn" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "ArbitrumGoerli" | "BaseGoerli" | "Cardano" | "CardanoPreprod" | "Kusama" | "OptimismGoerli" | "Polkadot" | "Westend" | "Tezos" | "TezosGhostnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
    name?: string | undefined;
    externalId?: string | undefined;
    curve: "ed25519" | "secp256k1" | "stark";
    protocol: "CGGMP21" | "FROST" | "FROST_BITCOIN";
    minSigners: number;
    encryptedKeyShares: {
        signerId: string;
        encryptedKeyShare: string;
    }[];
};

export type ImportWalletResponse = {
    id: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    address?: string | undefined;
    signingKey: {
        scheme: "ECDSA" | "EdDSA";
        curve: "ed25519" | "secp256k1" | "stark";
        publicKey: string;
    };
    status: "Active" | "Archived";
    dateCreated: string;
    name?: string | undefined;
    custodial: boolean;
    imported?: boolean | undefined;
    exported?: boolean | undefined;
    dateExported?: string | undefined;
    externalId?: string | undefined;
    tags: string[];
};

export type ImportWalletRequest = { body: ImportWalletBody }

export type ListSignaturesParams = {
    walletId: string;
};

export type ListSignaturesQuery = {
    limit?: string | undefined;
    paginationToken?: string | undefined;
};

export type ListSignaturesResponse = {
    walletId: string;
    items: {
        id: string;
        walletId: string;
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
        requester: {
            userId: string;
            tokenId?: string | undefined;
            appId?: string | undefined;
        };
        requestBody: {
            kind: "Hash";
            hash: string;
            externalId?: string | undefined;
        } | {
            kind: "Message";
            message: string;
            externalId?: string | undefined;
        } | {
            kind: "Transaction";
            transaction: string;
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
                chainId?: number | undefined;
                verifyingContract?: string | undefined;
                salt?: string | undefined;
            };
            message: {
                [x: string]: unknown;
            };
            externalId?: string | undefined;
        } | {
            kind: "Psbt";
            psbt: string;
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

export type ListTransactionsParams = {
    walletId: string;
};

export type ListTransactionsQuery = {
    limit?: string | undefined;
    paginationToken?: string | undefined;
};

export type ListTransactionsResponse = {
    walletId: string;
    items: {
        id: string;
        walletId: string;
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
        requester: {
            userId: string;
            tokenId?: string | undefined;
            appId?: string | undefined;
        };
        requestBody: {
            kind: "Transaction";
            transaction: string;
            externalId?: string | undefined;
        } | {
            kind: "Evm";
            to?: string | undefined;
            value?: (string | string) | undefined;
            data?: string | undefined;
            nonce?: (number | string | string) | undefined;
            gasLimit?: (string | string) | undefined;
            externalId?: string | undefined;
        } | {
            kind: "Eip1559";
            to?: string | undefined;
            value?: (string | string) | undefined;
            data?: string | undefined;
            nonce?: (number | string | string) | undefined;
            gasLimit?: (string | string) | undefined;
            maxFeePerGas?: (string | string) | undefined;
            maxPriorityFeePerGas?: (string | string) | undefined;
            externalId?: string | undefined;
        } | {
            kind: "EvmLegacy";
            to?: string | undefined;
            value?: (string | string) | undefined;
            data?: string | undefined;
            nonce?: (number | string | string) | undefined;
            gasLimit?: (string | string) | undefined;
            gasPrice?: (string | string) | undefined;
            externalId?: string | undefined;
        } | {
            kind: "Psbt";
            psbt: string;
            externalId?: string | undefined;
        };
        status: "Pending" | "Executing" | "Broadcasted" | "Confirmed" | "Failed" | "Rejected";
        reason?: string | undefined;
        txHash?: string | undefined;
        fee?: string | undefined;
        approvalId?: string | undefined;
        dateRequested: string;
        datePolicyResolved?: string | undefined;
        dateBroadcasted?: string | undefined;
        dateConfirmed?: string | undefined;
        externalId?: string | undefined;
    }[];
    nextPageToken?: string | undefined;
};

export type ListTransactionsRequest = ListTransactionsParams & { query?: ListTransactionsQuery }

export type ListTransfersParams = {
    walletId: string;
};

export type ListTransfersQuery = {
    limit?: string | undefined;
    paginationToken?: string | undefined;
};

export type ListTransfersResponse = {
    walletId: string;
    items: {
        id: string;
        walletId: string;
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
        requester: {
            userId: string;
            tokenId?: string | undefined;
            appId?: string | undefined;
        };
        requestBody: {
            kind: "Native";
            to: string | string | string | string | string | string | string | string | string | string | string | string | string | string;
            amount: string;
            memo?: string | undefined;
            priority?: ("Slow" | "Standard" | "Fast") | undefined;
            externalId?: string | undefined;
        } | {
            kind: "Erc20";
            contract: string;
            to: string;
            amount: string;
            priority?: ("Slow" | "Standard" | "Fast") | undefined;
            externalId?: string | undefined;
        } | {
            kind: "Erc721";
            contract: string;
            to: string;
            tokenId: string;
            priority?: ("Slow" | "Standard" | "Fast") | undefined;
            externalId?: string | undefined;
        } | {
            kind: "Trc10";
            tokenId: string;
            to: string;
            amount: string;
            externalId?: string | undefined;
        } | {
            kind: "Trc20";
            contract: string;
            to: string;
            amount: string;
            externalId?: string | undefined;
        } | {
            kind: "Trc721";
            contract: string;
            to: string;
            tokenId: string;
            externalId?: string | undefined;
        } | {
            kind: "Asa";
            assetId: string;
            to: string;
            amount: string;
            externalId?: string | undefined;
        } | {
            kind: "Sep41";
            issuer: string;
            assetCode: string;
            to: string;
            amount: string;
            memo?: string | undefined;
            externalId?: string | undefined;
        } | {
            kind: "Spl" | "Spl2022";
            to: string;
            amount: string;
            mint: string;
            createDestinationAccount?: boolean | undefined;
            externalId?: string | undefined;
        } | {
            kind: "Tep74";
            to: string;
            master: string;
            amount: string;
            memo?: string | undefined;
            externalId?: string | undefined;
        };
        metadata: {
            asset: {
                symbol?: string | undefined;
                decimals?: number | undefined;
                verified?: boolean | undefined;
                quotes?: {
                    [x: string]: number;
                } | undefined;
            };
        };
        status: "Pending" | "Executing" | "Broadcasted" | "Confirmed" | "Failed" | "Rejected";
        reason?: string | undefined;
        txHash?: string | undefined;
        fee?: string | undefined;
        dateRequested: string;
        datePolicyResolved?: string | undefined;
        dateBroadcasted?: string | undefined;
        dateConfirmed?: string | undefined;
        approvalId?: string | undefined;
        externalId?: string | undefined;
    }[];
    nextPageToken?: string | undefined;
};

export type ListTransfersRequest = ListTransfersParams & { query?: ListTransfersQuery }

export type ListWalletsQuery = {
    limit?: string | undefined;
    paginationToken?: string | undefined;
    ownerId?: string | undefined;
    ownerUsername?: string | undefined;
};

export type ListWalletsResponse = {
    items: {
        id: string;
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
        address?: string | undefined;
        signingKey: {
            scheme: "ECDSA" | "EdDSA";
            curve: "ed25519" | "secp256k1" | "stark";
            publicKey: string;
        };
        status: "Active" | "Archived";
        dateCreated: string;
        name?: string | undefined;
        custodial: boolean;
        imported?: boolean | undefined;
        exported?: boolean | undefined;
        dateExported?: string | undefined;
        externalId?: string | undefined;
        tags: string[];
    }[];
    nextPageToken?: string | undefined;
};

export type ListWalletsRequest = { query?: ListWalletsQuery }

export type TagWalletBody = {
    tags: string[];
};

export type TagWalletParams = {
    walletId: string;
};

export type TagWalletResponse = {};

export type TagWalletRequest = TagWalletParams & { body: TagWalletBody }

export type TransferAssetBody = {
    kind: "Native";
    to: string | string | string | string | string | string | string | string | string | string | string | string | string | string;
    amount: string;
    memo?: string | undefined;
    priority?: ("Slow" | "Standard" | "Fast") | undefined;
    externalId?: string | undefined;
} | {
    kind: "Erc20";
    contract: string;
    to: string;
    amount: string;
    priority?: ("Slow" | "Standard" | "Fast") | undefined;
    externalId?: string | undefined;
} | {
    kind: "Erc721";
    contract: string;
    to: string;
    tokenId: string;
    priority?: ("Slow" | "Standard" | "Fast") | undefined;
    externalId?: string | undefined;
} | {
    kind: "Trc10";
    tokenId: string;
    to: string;
    amount: string;
    externalId?: string | undefined;
} | {
    kind: "Trc20";
    contract: string;
    to: string;
    amount: string;
    externalId?: string | undefined;
} | {
    kind: "Trc721";
    contract: string;
    to: string;
    tokenId: string;
    externalId?: string | undefined;
} | {
    kind: "Asa";
    assetId: string;
    to: string;
    amount: string;
    externalId?: string | undefined;
} | {
    kind: "Sep41";
    issuer: string;
    assetCode: string;
    to: string;
    amount: string;
    memo?: string | undefined;
    externalId?: string | undefined;
} | {
    kind: "Spl" | "Spl2022";
    to: string;
    amount: string;
    mint: string;
    createDestinationAccount?: boolean | undefined;
    externalId?: string | undefined;
} | {
    kind: "Tep74";
    to: string;
    master: string;
    amount: string;
    memo?: string | undefined;
    externalId?: string | undefined;
};

export type TransferAssetParams = {
    walletId: string;
};

export type TransferAssetResponse = {
    id: string;
    walletId: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    requester: {
        userId: string;
        tokenId?: string | undefined;
        appId?: string | undefined;
    };
    requestBody: {
        kind: "Native";
        to: string | string | string | string | string | string | string | string | string | string | string | string | string | string;
        amount: string;
        memo?: string | undefined;
        priority?: ("Slow" | "Standard" | "Fast") | undefined;
        externalId?: string | undefined;
    } | {
        kind: "Erc20";
        contract: string;
        to: string;
        amount: string;
        priority?: ("Slow" | "Standard" | "Fast") | undefined;
        externalId?: string | undefined;
    } | {
        kind: "Erc721";
        contract: string;
        to: string;
        tokenId: string;
        priority?: ("Slow" | "Standard" | "Fast") | undefined;
        externalId?: string | undefined;
    } | {
        kind: "Trc10";
        tokenId: string;
        to: string;
        amount: string;
        externalId?: string | undefined;
    } | {
        kind: "Trc20";
        contract: string;
        to: string;
        amount: string;
        externalId?: string | undefined;
    } | {
        kind: "Trc721";
        contract: string;
        to: string;
        tokenId: string;
        externalId?: string | undefined;
    } | {
        kind: "Asa";
        assetId: string;
        to: string;
        amount: string;
        externalId?: string | undefined;
    } | {
        kind: "Sep41";
        issuer: string;
        assetCode: string;
        to: string;
        amount: string;
        memo?: string | undefined;
        externalId?: string | undefined;
    } | {
        kind: "Spl" | "Spl2022";
        to: string;
        amount: string;
        mint: string;
        createDestinationAccount?: boolean | undefined;
        externalId?: string | undefined;
    } | {
        kind: "Tep74";
        to: string;
        master: string;
        amount: string;
        memo?: string | undefined;
        externalId?: string | undefined;
    };
    metadata: {
        asset: {
            symbol?: string | undefined;
            decimals?: number | undefined;
            verified?: boolean | undefined;
            quotes?: {
                [x: string]: number;
            } | undefined;
        };
    };
    status: "Pending" | "Executing" | "Broadcasted" | "Confirmed" | "Failed" | "Rejected";
    reason?: string | undefined;
    txHash?: string | undefined;
    fee?: string | undefined;
    dateRequested: string;
    datePolicyResolved?: string | undefined;
    dateBroadcasted?: string | undefined;
    dateConfirmed?: string | undefined;
    approvalId?: string | undefined;
    externalId?: string | undefined;
};

export type TransferAssetRequest = TransferAssetParams & { body: TransferAssetBody }

export type UntagWalletBody = {
    tags: string[];
};

export type UntagWalletParams = {
    walletId: string;
};

export type UntagWalletResponse = {};

export type UntagWalletRequest = UntagWalletParams & { body: UntagWalletBody }

export type UpdateWalletBody = {
    name?: (string | null) | undefined;
    externalId?: (string | null) | undefined;
};

export type UpdateWalletParams = {
    walletId: string;
};

export type UpdateWalletResponse = {
    id: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    address?: string | undefined;
    signingKey: {
        scheme: "ECDSA" | "EdDSA";
        curve: "ed25519" | "secp256k1" | "stark";
        publicKey: string;
    };
    status: "Active" | "Archived";
    dateCreated: string;
    name?: string | undefined;
    custodial: boolean;
    imported?: boolean | undefined;
    exported?: boolean | undefined;
    dateExported?: string | undefined;
    externalId?: string | undefined;
    tags: string[];
};

export type UpdateWalletRequest = UpdateWalletParams & { body: UpdateWalletBody }

