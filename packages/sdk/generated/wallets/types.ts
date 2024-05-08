export type BroadcastTransactionBody = {
    kind: "Transaction";
    transaction: string;
} | {
    kind: "Evm";
    to?: string | undefined;
    value?: (string | string) | undefined;
    data?: string | undefined;
    nonce?: (number | string | string) | undefined;
    gasLimit?: (string | string) | undefined;
} | {
    kind: "Eip1559";
    to?: string | undefined;
    value?: (string | string) | undefined;
    data?: string | undefined;
    nonce?: (number | string | string) | undefined;
    gasLimit?: (string | string) | undefined;
    maxFeePerGas?: (string | string) | undefined;
    maxPriorityFeePerGas?: (string | string) | undefined;
} | {
    kind: "EvmLegacy";
    to?: string | undefined;
    value?: (string | string) | undefined;
    data?: string | undefined;
    nonce?: (number | string | string) | undefined;
    gasLimit?: (string | string) | undefined;
    gasPrice?: (string | string) | undefined;
} | {
    kind: "Psbt";
    psbt: string;
};

export type BroadcastTransactionParams = {
    walletId: string;
};

export type BroadcastTransactionResponse = {
    id: string;
    walletId: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    requester: {
        userId: string;
        tokenId?: string | undefined;
        appId?: string | undefined;
    };
    requestBody: {
        kind: "Transaction";
        transaction: string;
    } | {
        kind: "Evm";
        to?: string | undefined;
        value?: (string | string) | undefined;
        data?: string | undefined;
        nonce?: (number | string | string) | undefined;
        gasLimit?: (string | string) | undefined;
    } | {
        kind: "Eip1559";
        to?: string | undefined;
        value?: (string | string) | undefined;
        data?: string | undefined;
        nonce?: (number | string | string) | undefined;
        gasLimit?: (string | string) | undefined;
        maxFeePerGas?: (string | string) | undefined;
        maxPriorityFeePerGas?: (string | string) | undefined;
    } | {
        kind: "EvmLegacy";
        to?: string | undefined;
        value?: (string | string) | undefined;
        data?: string | undefined;
        nonce?: (number | string | string) | undefined;
        gasLimit?: (string | string) | undefined;
        gasPrice?: (string | string) | undefined;
    } | {
        kind: "Psbt";
        psbt: string;
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
};

export type BroadcastTransactionRequest = BroadcastTransactionParams & { body: BroadcastTransactionBody }

export type CreateWalletBody = {
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismSepolia" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Stellar" | "StellarTestnet" | "Tron" | "TronNile" | "ArbitrumGoerli" | "BaseGoerli" | "Cardano" | "CardanoPreprod" | "Kusama" | "OptimismGoerli" | "Polkadot" | "Westend" | "Solana" | "SolanaDevnet" | "Tezos" | "TezosGhostnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
    name?: string | undefined;
    delegateTo?: string | undefined;
    delayDelegation?: boolean | undefined;
    externalId?: string | undefined;
    tags?: string[] | undefined;
};

export type CreateWalletResponse = {
    id: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
        protocol: "CGGMP21";
        curve: "secp256k1";
    }[];
};

export type ExportWalletParams = {
    walletId: string;
};

export type ExportWalletResponse = {
    publicKey: string;
    /** The TSS threshold of the wallet private signing key shares */
    minSigners: number;
    protocol: "CGGMP21";
    curve: "secp256k1";
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
} | {
    kind: "Message";
    message: string;
} | {
    kind: "Transaction";
    transaction: string;
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
} | {
    kind: "Psbt";
    psbt: string;
};

export type GenerateSignatureParams = {
    walletId: string;
};

export type GenerateSignatureResponse = {
    id: string;
    walletId: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    requester: {
        userId: string;
        tokenId?: string | undefined;
        appId?: string | undefined;
    };
    requestBody: {
        kind: "Hash";
        hash: string;
    } | {
        kind: "Message";
        message: string;
    } | {
        kind: "Transaction";
        transaction: string;
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
    } | {
        kind: "Psbt";
        psbt: string;
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
};

export type GenerateSignatureRequest = GenerateSignatureParams & { body: GenerateSignatureBody }

export type GetSignatureParams = {
    walletId: string;
    signatureId: string;
};

export type GetSignatureResponse = {
    id: string;
    walletId: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    requester: {
        userId: string;
        tokenId?: string | undefined;
        appId?: string | undefined;
    };
    requestBody: {
        kind: "Hash";
        hash: string;
    } | {
        kind: "Message";
        message: string;
    } | {
        kind: "Transaction";
        transaction: string;
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
    } | {
        kind: "Psbt";
        psbt: string;
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
};

export type GetSignatureRequest = GetSignatureParams

export type GetTransactionParams = {
    walletId: string;
    transactionId: string;
};

export type GetTransactionResponse = {
    id: string;
    walletId: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    requester: {
        userId: string;
        tokenId?: string | undefined;
        appId?: string | undefined;
    };
    requestBody: {
        kind: "Transaction";
        transaction: string;
    } | {
        kind: "Evm";
        to?: string | undefined;
        value?: (string | string) | undefined;
        data?: string | undefined;
        nonce?: (number | string | string) | undefined;
        gasLimit?: (string | string) | undefined;
    } | {
        kind: "Eip1559";
        to?: string | undefined;
        value?: (string | string) | undefined;
        data?: string | undefined;
        nonce?: (number | string | string) | undefined;
        gasLimit?: (string | string) | undefined;
        maxFeePerGas?: (string | string) | undefined;
        maxPriorityFeePerGas?: (string | string) | undefined;
    } | {
        kind: "EvmLegacy";
        to?: string | undefined;
        value?: (string | string) | undefined;
        data?: string | undefined;
        nonce?: (number | string | string) | undefined;
        gasLimit?: (string | string) | undefined;
        gasPrice?: (string | string) | undefined;
    } | {
        kind: "Psbt";
        psbt: string;
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
};

export type GetTransactionRequest = GetTransactionParams

export type GetTransferParams = {
    walletId: string;
    transferId: string;
};

export type GetTransferResponse = {
    id: string;
    walletId: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    requester: {
        userId: string;
        tokenId?: string | undefined;
        appId?: string | undefined;
    };
    requestBody: {
        kind: "Native";
        to: string | string | string | string | string | string | string | string | string | string | string;
        amount: string;
        memo?: string | undefined;
        priority?: ("Slow" | "Standard" | "Fast") | undefined;
    } | {
        kind: "Erc20";
        contract: string;
        to: string;
        amount: string;
        priority?: ("Slow" | "Standard" | "Fast") | undefined;
    } | {
        kind: "Erc721";
        contract: string;
        to: string;
        tokenId: string;
        priority?: ("Slow" | "Standard" | "Fast") | undefined;
    } | {
        kind: "Trc10";
        tokenId: string;
        to: string;
        amount: string;
    } | {
        kind: "Trc20";
        contract: string;
        to: string;
        amount: string;
    } | {
        kind: "Trc721";
        contract: string;
        to: string;
        tokenId: string;
    } | {
        kind: "Asa";
        assetId: string;
        to: string;
        amount: string;
    } | {
        kind: "Sep41";
        issuer: string;
        assetCode: string;
        to: string;
        amount: string;
        memo?: string | undefined;
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
};

export type GetTransferRequest = GetTransferParams

export type GetWalletParams = {
    walletId: string;
};

export type GetWalletResponse = {
    id: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    assets: {
        kind: "Native" | "Asa" | "Erc20" | "Erc721" | "Sep41" | "Trc10" | "Trc20" | "Trc721";
        assetId?: string | undefined;
        contract?: string | undefined;
        tokenId?: string | undefined;
        issuer?: string | undefined;
        assetCode?: string | undefined;
        symbol?: string | undefined;
        decimals: number;
        verified?: boolean | undefined;
        balance: string;
    }[];
};

export type GetWalletAssetsRequest = GetWalletAssetsParams

export type GetWalletHistoryParams = {
    walletId: string;
};

export type GetWalletHistoryQuery = {
    limit?: string | undefined;
    paginationToken?: string | undefined;
    direction?: ("In" | "Out") | undefined;
    kind?: ("NativeTransfer" | "AsaTransfer" | "Erc20Transfer" | "Erc721Transfer" | "Trc10Transfer" | "Trc20Transfer" | "Trc721Transfer" | "Sep41Transfer" | "UtxoTransfer") | undefined;
    contract?: string | undefined;
};

export type GetWalletHistoryResponse = {
    walletId: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    items: ({
        walletId: string;
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
        from: string;
        to: string;
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
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    nfts: {
        kind: "Native" | "Asa" | "Erc20" | "Erc721" | "Sep41" | "Trc10" | "Trc20" | "Trc721";
        contract?: string | undefined;
        symbol?: string | undefined;
        verified?: boolean | undefined;
        tokenIds: string[];
        count: number;
    }[];
};

export type GetWalletNftsRequest = GetWalletNftsParams

export type ImportWalletBody = {
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismSepolia" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Stellar" | "StellarTestnet" | "Tron" | "TronNile" | "ArbitrumGoerli" | "BaseGoerli" | "Cardano" | "CardanoPreprod" | "Kusama" | "OptimismGoerli" | "Polkadot" | "Westend" | "Solana" | "SolanaDevnet" | "Tezos" | "TezosGhostnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
    name?: string | undefined;
    externalId?: string | undefined;
    curve: "secp256k1";
    protocol: "CGGMP21";
    minSigners: number;
    encryptedKeyShares: {
        signerId: string;
        encryptedKeyShare: string;
    }[];
};

export type ImportWalletResponse = {
    id: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
        requester: {
            userId: string;
            tokenId?: string | undefined;
            appId?: string | undefined;
        };
        requestBody: {
            kind: "Hash";
            hash: string;
        } | {
            kind: "Message";
            message: string;
        } | {
            kind: "Transaction";
            transaction: string;
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
        } | {
            kind: "Psbt";
            psbt: string;
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
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
        requester: {
            userId: string;
            tokenId?: string | undefined;
            appId?: string | undefined;
        };
        requestBody: {
            kind: "Transaction";
            transaction: string;
        } | {
            kind: "Evm";
            to?: string | undefined;
            value?: (string | string) | undefined;
            data?: string | undefined;
            nonce?: (number | string | string) | undefined;
            gasLimit?: (string | string) | undefined;
        } | {
            kind: "Eip1559";
            to?: string | undefined;
            value?: (string | string) | undefined;
            data?: string | undefined;
            nonce?: (number | string | string) | undefined;
            gasLimit?: (string | string) | undefined;
            maxFeePerGas?: (string | string) | undefined;
            maxPriorityFeePerGas?: (string | string) | undefined;
        } | {
            kind: "EvmLegacy";
            to?: string | undefined;
            value?: (string | string) | undefined;
            data?: string | undefined;
            nonce?: (number | string | string) | undefined;
            gasLimit?: (string | string) | undefined;
            gasPrice?: (string | string) | undefined;
        } | {
            kind: "Psbt";
            psbt: string;
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
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
        requester: {
            userId: string;
            tokenId?: string | undefined;
            appId?: string | undefined;
        };
        requestBody: {
            kind: "Native";
            to: string | string | string | string | string | string | string | string | string | string | string;
            amount: string;
            memo?: string | undefined;
            priority?: ("Slow" | "Standard" | "Fast") | undefined;
        } | {
            kind: "Erc20";
            contract: string;
            to: string;
            amount: string;
            priority?: ("Slow" | "Standard" | "Fast") | undefined;
        } | {
            kind: "Erc721";
            contract: string;
            to: string;
            tokenId: string;
            priority?: ("Slow" | "Standard" | "Fast") | undefined;
        } | {
            kind: "Trc10";
            tokenId: string;
            to: string;
            amount: string;
        } | {
            kind: "Trc20";
            contract: string;
            to: string;
            amount: string;
        } | {
            kind: "Trc721";
            contract: string;
            to: string;
            tokenId: string;
        } | {
            kind: "Asa";
            assetId: string;
            to: string;
            amount: string;
        } | {
            kind: "Sep41";
            issuer: string;
            assetCode: string;
            to: string;
            amount: string;
            memo?: string | undefined;
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
    }[];
    nextPageToken?: string | undefined;
};

export type ListTransfersRequest = ListTransfersParams & { query?: ListTransfersQuery }

export type ListWalletsQuery = {
    limit?: string | undefined;
    paginationToken?: string | undefined;
};

export type ListWalletsResponse = {
    items: {
        id: string;
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
    to: string | string | string | string | string | string | string | string | string | string | string;
    amount: string;
    memo?: string | undefined;
    priority?: ("Slow" | "Standard" | "Fast") | undefined;
} | {
    kind: "Erc20";
    contract: string;
    to: string;
    amount: string;
    priority?: ("Slow" | "Standard" | "Fast") | undefined;
} | {
    kind: "Erc721";
    contract: string;
    to: string;
    tokenId: string;
    priority?: ("Slow" | "Standard" | "Fast") | undefined;
} | {
    kind: "Trc10";
    tokenId: string;
    to: string;
    amount: string;
} | {
    kind: "Trc20";
    contract: string;
    to: string;
    amount: string;
} | {
    kind: "Trc721";
    contract: string;
    to: string;
    tokenId: string;
} | {
    kind: "Asa";
    assetId: string;
    to: string;
    amount: string;
} | {
    kind: "Sep41";
    issuer: string;
    assetCode: string;
    to: string;
    amount: string;
    memo?: string | undefined;
};

export type TransferAssetParams = {
    walletId: string;
};

export type TransferAssetResponse = {
    id: string;
    walletId: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    requester: {
        userId: string;
        tokenId?: string | undefined;
        appId?: string | undefined;
    };
    requestBody: {
        kind: "Native";
        to: string | string | string | string | string | string | string | string | string | string | string;
        amount: string;
        memo?: string | undefined;
        priority?: ("Slow" | "Standard" | "Fast") | undefined;
    } | {
        kind: "Erc20";
        contract: string;
        to: string;
        amount: string;
        priority?: ("Slow" | "Standard" | "Fast") | undefined;
    } | {
        kind: "Erc721";
        contract: string;
        to: string;
        tokenId: string;
        priority?: ("Slow" | "Standard" | "Fast") | undefined;
    } | {
        kind: "Trc10";
        tokenId: string;
        to: string;
        amount: string;
    } | {
        kind: "Trc20";
        contract: string;
        to: string;
        amount: string;
    } | {
        kind: "Trc721";
        contract: string;
        to: string;
        tokenId: string;
    } | {
        kind: "Asa";
        assetId: string;
        to: string;
        amount: string;
    } | {
        kind: "Sep41";
        issuer: string;
        assetCode: string;
        to: string;
        amount: string;
        memo?: string | undefined;
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
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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

