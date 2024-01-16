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
    network: "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonMumbai" | "Ripple" | "RippleTestnet" | "Solana" | "SolanaDevnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
    dateRequested: string;
    datePolicyResolved?: string | undefined;
    dateBroadcasted?: string | undefined;
    dateConfirmed?: string | undefined;
};

export type BroadcastTransactionRequest = BroadcastTransactionParams & { body: BroadcastTransactionBody }

export type CreateWalletBody = {
    network: "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismSepolia" | "Polygon" | "PolygonMumbai" | "ArbitrumGoerli" | "BaseGoerli" | "OptimismGoerli" | "Ripple" | "RippleTestnet" | "Solana" | "SolanaDevnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
    name?: string | undefined;
    externalId?: string | undefined;
    tags?: string[] | undefined;
    delayDelegation?: boolean | undefined;
};

export type CreateWalletResponse = {
    id: string;
    network: "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonMumbai" | "Ripple" | "RippleTestnet" | "Solana" | "SolanaDevnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    address?: string | undefined;
    signingKey: {
        scheme: "ECDSA" | "EdDSA";
        curve: "ed25519" | "secp256k1" | "stark";
        publicKey: string;
    };
    status: "Active" | "Archived";
    dateCreated: string;
    name?: string | undefined;
    imported?: boolean | undefined;
    exported?: boolean | undefined;
    dateExported?: string | undefined;
    externalId?: string | undefined;
    tags?: string[] | undefined;
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
    network: "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonMumbai" | "Ripple" | "RippleTestnet" | "Solana" | "SolanaDevnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
    network: "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonMumbai" | "Ripple" | "RippleTestnet" | "Solana" | "SolanaDevnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
    network: "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonMumbai" | "Ripple" | "RippleTestnet" | "Solana" | "SolanaDevnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
    network: "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonMumbai" | "Ripple" | "RippleTestnet" | "Solana" | "SolanaDevnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    requester: {
        userId: string;
        tokenId?: string | undefined;
        appId?: string | undefined;
    };
    requestBody: {
        kind: "Native";
        to: string | string | string | string | string | string;
        amount: string;
        memo?: string | undefined;
    } | {
        kind: "Erc20";
        contract: string;
        to: string;
        amount: string;
    } | {
        kind: "Erc721";
        contract: string;
        to: string;
        tokenId: string;
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
};

export type GetTransferRequest = GetTransferParams

export type GetWalletParams = {
    walletId: string;
};

export type GetWalletResponse = {
    id: string;
    network: "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonMumbai" | "Ripple" | "RippleTestnet" | "Solana" | "SolanaDevnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    address?: string | undefined;
    signingKey: {
        scheme: "ECDSA" | "EdDSA";
        curve: "ed25519" | "secp256k1" | "stark";
        publicKey: string;
    };
    status: "Active" | "Archived";
    dateCreated: string;
    name?: string | undefined;
    imported?: boolean | undefined;
    exported?: boolean | undefined;
    dateExported?: string | undefined;
    externalId?: string | undefined;
    tags?: string[] | undefined;
};

export type GetWalletRequest = GetWalletParams

export type GetWalletAssetsParams = {
    walletId: string;
};

export type GetWalletAssetsResponse = {
    walletId: string;
    network: "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonMumbai" | "Ripple" | "RippleTestnet" | "Solana" | "SolanaDevnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    assets: {
        kind: "Native" | "Erc20" | "Erc721" | "Trc10" | "Trc20" | "Trc721";
        contract?: string | undefined;
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
    kind?: ("NativeTransfer" | "Erc20Transfer" | "Erc721Transfer" | "UtxoTransfer") | undefined;
    contract?: string | undefined;
};

export type GetWalletHistoryResponse = {
    walletId: string;
    network: "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonMumbai" | "Ripple" | "RippleTestnet" | "Solana" | "SolanaDevnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    items: ({
        walletId: string;
        direction: "In" | "Out";
        network: "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonMumbai" | "Ripple" | "RippleTestnet" | "Solana" | "SolanaDevnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
        /** @deprecated use metadata.asset.symbol instead */
        symbol: string;
        /** @deprecated use metadata.asset.decimals instead */
        decimals: number;
        /** @deprecated use metadata.asset.verified instead */
        verified?: boolean | undefined;
    } | {
        walletId: string;
        direction: "In" | "Out";
        network: "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonMumbai" | "Ripple" | "RippleTestnet" | "Solana" | "SolanaDevnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
        network: "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonMumbai" | "Ripple" | "RippleTestnet" | "Solana" | "SolanaDevnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
        network: "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonMumbai" | "Ripple" | "RippleTestnet" | "Solana" | "SolanaDevnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
    network: "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonMumbai" | "Ripple" | "RippleTestnet" | "Solana" | "SolanaDevnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    nfts: {
        kind: "Native" | "Erc20" | "Erc721" | "Trc10" | "Trc20" | "Trc721";
        contract?: string | undefined;
        symbol?: string | undefined;
        verified?: boolean | undefined;
        tokenIds: string[];
        count: number;
    }[];
};

export type GetWalletNftsRequest = GetWalletNftsParams

export type ImportWalletBody = {
    network: "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismSepolia" | "Polygon" | "PolygonMumbai" | "ArbitrumGoerli" | "BaseGoerli" | "OptimismGoerli" | "Ripple" | "RippleTestnet" | "Solana" | "SolanaDevnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
    name?: string | undefined;
    externalId?: string | undefined;
    tags?: string[] | undefined;
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
    network: "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonMumbai" | "Ripple" | "RippleTestnet" | "Solana" | "SolanaDevnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    address?: string | undefined;
    signingKey: {
        scheme: "ECDSA" | "EdDSA";
        curve: "ed25519" | "secp256k1" | "stark";
        publicKey: string;
    };
    status: "Active" | "Archived";
    dateCreated: string;
    name?: string | undefined;
    imported?: boolean | undefined;
    exported?: boolean | undefined;
    dateExported?: string | undefined;
    externalId?: string | undefined;
    tags?: string[] | undefined;
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
        network: "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonMumbai" | "Ripple" | "RippleTestnet" | "Solana" | "SolanaDevnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
        network: "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonMumbai" | "Ripple" | "RippleTestnet" | "Solana" | "SolanaDevnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
        network: "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonMumbai" | "Ripple" | "RippleTestnet" | "Solana" | "SolanaDevnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
        requester: {
            userId: string;
            tokenId?: string | undefined;
            appId?: string | undefined;
        };
        requestBody: {
            kind: "Native";
            to: string | string | string | string | string | string;
            amount: string;
            memo?: string | undefined;
        } | {
            kind: "Erc20";
            contract: string;
            to: string;
            amount: string;
        } | {
            kind: "Erc721";
            contract: string;
            to: string;
            tokenId: string;
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
        network: "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonMumbai" | "Ripple" | "RippleTestnet" | "Solana" | "SolanaDevnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
        address?: string | undefined;
        signingKey: {
            scheme: "ECDSA" | "EdDSA";
            curve: "ed25519" | "secp256k1" | "stark";
            publicKey: string;
        };
        status: "Active" | "Archived";
        dateCreated: string;
        name?: string | undefined;
        imported?: boolean | undefined;
        exported?: boolean | undefined;
        dateExported?: string | undefined;
        externalId?: string | undefined;
        tags?: string[] | undefined;
    }[];
    nextPageToken?: string | undefined;
};

export type ListWalletsRequest = { query?: ListWalletsQuery }

export type TransferAssetBody = {
    kind: "Native";
    to: string | string | string | string | string | string;
    amount: string;
    memo?: string | undefined;
} | {
    kind: "Erc20";
    contract: string;
    to: string;
    amount: string;
} | {
    kind: "Erc721";
    contract: string;
    to: string;
    tokenId: string;
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
};

export type TransferAssetParams = {
    walletId: string;
};

export type TransferAssetResponse = {
    id: string;
    walletId: string;
    network: "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonMumbai" | "Ripple" | "RippleTestnet" | "Solana" | "SolanaDevnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    requester: {
        userId: string;
        tokenId?: string | undefined;
        appId?: string | undefined;
    };
    requestBody: {
        kind: "Native";
        to: string | string | string | string | string | string;
        amount: string;
        memo?: string | undefined;
    } | {
        kind: "Erc20";
        contract: string;
        to: string;
        amount: string;
    } | {
        kind: "Erc721";
        contract: string;
        to: string;
        tokenId: string;
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
};

export type TransferAssetRequest = TransferAssetParams & { body: TransferAssetBody }

export type UpdateWalletBody = {
    name: string;
};

export type UpdateWalletParams = {
    walletId: string;
};

export type UpdateWalletResponse = {
    id: string;
    network: "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "FantomOpera" | "FantomTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polygon" | "PolygonMumbai" | "Ripple" | "RippleTestnet" | "Solana" | "SolanaDevnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    address?: string | undefined;
    signingKey: {
        scheme: "ECDSA" | "EdDSA";
        curve: "ed25519" | "secp256k1" | "stark";
        publicKey: string;
    };
    status: "Active" | "Archived";
    dateCreated: string;
    name?: string | undefined;
    imported?: boolean | undefined;
    exported?: boolean | undefined;
    dateExported?: string | undefined;
    externalId?: string | undefined;
    tags?: string[] | undefined;
};

export type UpdateWalletRequest = UpdateWalletParams & { body: UpdateWalletBody }

