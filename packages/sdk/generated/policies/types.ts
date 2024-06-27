export type ArchivePolicyParams = {
    policyId: string;
};

export type ArchivePolicyResponse = {
    id: string;
    name: string;
    status: "Active" | "Archived";
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    activityKind: "Permissions:Assign";
    rule: {
        kind: "AlwaysTrigger";
        configuration?: {} | undefined;
    };
    action: {
        kind: "RequestApproval";
        approvalGroups: {
            name?: string | undefined;
            quorum: number;
            approvers: {
                userId?: {
                    in: string[];
                } | undefined;
            };
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    } | {
        kind: "Block";
    };
    filters?: {
        permissionId: {
            in: string[];
        };
    } | undefined;
} | {
    id: string;
    name: string;
    status: "Active" | "Archived";
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    activityKind: "Permissions:Modify";
    rule: {
        kind: "AlwaysTrigger";
        configuration?: {} | undefined;
    };
    action: {
        kind: "RequestApproval";
        approvalGroups: {
            name?: string | undefined;
            quorum: number;
            approvers: {
                userId?: {
                    in: string[];
                } | undefined;
            };
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    } | {
        kind: "Block";
    };
    filters?: {
        permissionId: {
            in: string[];
        };
    } | undefined;
} | {
    id: string;
    name: string;
    status: "Active" | "Archived";
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    activityKind: "Policies:Modify";
    rule: {
        kind: "AlwaysTrigger";
        configuration?: {} | undefined;
    };
    action: {
        kind: "RequestApproval";
        approvalGroups: {
            name?: string | undefined;
            quorum: number;
            approvers: {
                userId?: {
                    in: string[];
                } | undefined;
            };
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    };
    filters?: {
        policyId: {
            in: string[];
        };
    } | undefined;
} | {
    id: string;
    name: string;
    status: "Active" | "Archived";
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    activityKind: "Wallets:Sign";
    rule: {
        kind: "AlwaysTrigger";
        configuration?: {} | undefined;
    } | {
        kind: "TransactionRecipientWhitelist";
        configuration: {
            addresses: string[];
        };
    } | {
        kind: "TransactionAmountLimit";
        configuration: {
            limit: number;
            currency: "EUR" | "USD";
        };
    } | {
        kind: "TransactionAmountVelocity";
        configuration: {
            limit: number;
            currency: "EUR" | "USD";
            timeframe: number;
        };
    } | {
        kind: "TransactionCountVelocity";
        configuration: {
            limit: number;
            timeframe: number;
        };
    } | {
        kind: "ChainalysisTransactionPrescreening";
        configuration: {
            alerts: {
                alertLevel: "LOW" | "MEDIUM" | "HIGH" | "SEVERE";
                categoryIds: number[];
            };
            exposures: {
                direct: {
                    categoryIds: number[];
                };
            };
            addresses: {
                categoryIds: number[];
            };
            fallbackBehaviours: {
                skipUnscreenableTransaction: boolean;
                skipUnsupportedNetwork: boolean;
                skipUnsupportedAsset: boolean;
                skipChainalysisFailure: boolean;
            };
        };
    };
    action: {
        kind: "RequestApproval";
        approvalGroups: {
            name?: string | undefined;
            quorum: number;
            approvers: {
                userId?: {
                    in: string[];
                } | undefined;
            };
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    } | {
        kind: "Block";
    } | {
        kind: "NoAction";
    };
    filters?: {
        walletId?: {
            in: string[];
        } | undefined;
        walletTags?: {
            hasAny?: string[] | undefined;
            hasAll?: string[] | undefined;
        } | undefined;
    } | undefined;
} | {
    id: string;
    name: string;
    status: "Active" | "Archived";
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    activityKind: "Wallets:IncomingTransaction";
    rule: {
        kind: "ChainalysisTransactionScreening";
        configuration: {
            alerts: {
                alertLevel: "LOW" | "MEDIUM" | "HIGH" | "SEVERE";
                categoryIds: number[];
            };
            exposures: {
                direct: {
                    categoryIds: number[];
                };
            };
            fallbackBehaviours: {
                skipUnscreenableTransaction: boolean;
                skipUnsupportedNetwork: boolean;
                skipUnsupportedAsset: boolean;
                skipChainalysisFailure: boolean;
            };
        };
    };
    action: {
        kind: "NoAction";
    };
    filters?: {
        walletId?: {
            in: string[];
        } | undefined;
        walletTags?: {
            hasAny?: string[] | undefined;
            hasAll?: string[] | undefined;
        } | undefined;
    } | undefined;
};

export type ArchivePolicyRequest = ArchivePolicyParams

export type CreateApprovalDecisionBody = {
    value: "Approved" | "Denied";
    reason?: string | undefined;
};

export type CreateApprovalDecisionParams = {
    approvalId: string;
};

export type CreateApprovalDecisionResponse = {
    id: string;
    initiatorId: string;
    activity: {
        kind: "Wallets:Sign";
        transferRequest?: {
            id: string;
            walletId: string;
            network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
            } | {
                kind: "Spl" | "Spl2022";
                to: string;
                amount: string;
                mint: string;
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
        } | undefined;
        transactionRequest?: {
            id: string;
            walletId: string;
            network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
        } | undefined;
        signatureRequest?: {
            id: string;
            walletId: string;
            network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
        } | undefined;
    } | {
        kind: "Wallets:IncomingTransaction";
        blockchainEvent: {
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
            kind: "SplTransfer" | "Spl2022Transfer";
            from?: string | undefined;
            to?: string | undefined;
            mint: string;
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
        };
    } | {
        kind: "Policies:Modify";
        changeRequest: {
            id: string;
            requester: {
                userId: string;
                tokenId?: string | undefined;
                appId?: string | undefined;
            };
            kind: "Policy";
            operationKind: "Update";
            status: "Applied" | "Failed" | "Pending" | "Rejected";
            entityId: string;
            dateCreated: string;
            dateResolved?: string | undefined;
            approvalId?: string | undefined;
            body: {
                id: string;
                name: string;
                status: "Active" | "Archived";
                dateCreated?: string | undefined;
                dateUpdated?: string | undefined;
                activityKind: "Permissions:Assign";
                rule: {
                    kind: "AlwaysTrigger";
                    configuration?: {} | undefined;
                };
                action: {
                    kind: "RequestApproval";
                    approvalGroups: {
                        name?: string | undefined;
                        quorum: number;
                        approvers: {
                            userId?: {
                                in: string[];
                            } | undefined;
                        };
                    }[];
                    autoRejectTimeout?: (number | undefined) | null;
                } | {
                    kind: "Block";
                };
                filters?: {
                    permissionId: {
                        in: string[];
                    };
                } | undefined;
            } | {
                id: string;
                name: string;
                status: "Active" | "Archived";
                dateCreated?: string | undefined;
                dateUpdated?: string | undefined;
                activityKind: "Permissions:Modify";
                rule: {
                    kind: "AlwaysTrigger";
                    configuration?: {} | undefined;
                };
                action: {
                    kind: "RequestApproval";
                    approvalGroups: {
                        name?: string | undefined;
                        quorum: number;
                        approvers: {
                            userId?: {
                                in: string[];
                            } | undefined;
                        };
                    }[];
                    autoRejectTimeout?: (number | undefined) | null;
                } | {
                    kind: "Block";
                };
                filters?: {
                    permissionId: {
                        in: string[];
                    };
                } | undefined;
            } | {
                id: string;
                name: string;
                status: "Active" | "Archived";
                dateCreated?: string | undefined;
                dateUpdated?: string | undefined;
                activityKind: "Policies:Modify";
                rule: {
                    kind: "AlwaysTrigger";
                    configuration?: {} | undefined;
                };
                action: {
                    kind: "RequestApproval";
                    approvalGroups: {
                        name?: string | undefined;
                        quorum: number;
                        approvers: {
                            userId?: {
                                in: string[];
                            } | undefined;
                        };
                    }[];
                    autoRejectTimeout?: (number | undefined) | null;
                };
                filters?: {
                    policyId: {
                        in: string[];
                    };
                } | undefined;
            } | {
                id: string;
                name: string;
                status: "Active" | "Archived";
                dateCreated?: string | undefined;
                dateUpdated?: string | undefined;
                activityKind: "Wallets:Sign";
                rule: {
                    kind: "AlwaysTrigger";
                    configuration?: {} | undefined;
                } | {
                    kind: "TransactionRecipientWhitelist";
                    configuration: {
                        addresses: string[];
                    };
                } | {
                    kind: "TransactionAmountLimit";
                    configuration: {
                        limit: number;
                        currency: "EUR" | "USD";
                    };
                } | {
                    kind: "TransactionAmountVelocity";
                    configuration: {
                        limit: number;
                        currency: "EUR" | "USD";
                        timeframe: number;
                    };
                } | {
                    kind: "TransactionCountVelocity";
                    configuration: {
                        limit: number;
                        timeframe: number;
                    };
                } | {
                    kind: "ChainalysisTransactionPrescreening";
                    configuration: {
                        alerts: {
                            alertLevel: "LOW" | "MEDIUM" | "HIGH" | "SEVERE";
                            categoryIds: number[];
                        };
                        exposures: {
                            direct: {
                                categoryIds: number[];
                            };
                        };
                        addresses: {
                            categoryIds: number[];
                        };
                        fallbackBehaviours: {
                            skipUnscreenableTransaction: boolean;
                            skipUnsupportedNetwork: boolean;
                            skipUnsupportedAsset: boolean;
                            skipChainalysisFailure: boolean;
                        };
                    };
                };
                action: {
                    kind: "RequestApproval";
                    approvalGroups: {
                        name?: string | undefined;
                        quorum: number;
                        approvers: {
                            userId?: {
                                in: string[];
                            } | undefined;
                        };
                    }[];
                    autoRejectTimeout?: (number | undefined) | null;
                } | {
                    kind: "Block";
                } | {
                    kind: "NoAction";
                };
                filters?: {
                    walletId?: {
                        in: string[];
                    } | undefined;
                    walletTags?: {
                        hasAny?: string[] | undefined;
                        hasAll?: string[] | undefined;
                    } | undefined;
                } | undefined;
            } | {
                id: string;
                name: string;
                status: "Active" | "Archived";
                dateCreated?: string | undefined;
                dateUpdated?: string | undefined;
                activityKind: "Wallets:IncomingTransaction";
                rule: {
                    kind: "ChainalysisTransactionScreening";
                    configuration: {
                        alerts: {
                            alertLevel: "LOW" | "MEDIUM" | "HIGH" | "SEVERE";
                            categoryIds: number[];
                        };
                        exposures: {
                            direct: {
                                categoryIds: number[];
                            };
                        };
                        fallbackBehaviours: {
                            skipUnscreenableTransaction: boolean;
                            skipUnsupportedNetwork: boolean;
                            skipUnsupportedAsset: boolean;
                            skipChainalysisFailure: boolean;
                        };
                    };
                };
                action: {
                    kind: "NoAction";
                };
                filters?: {
                    walletId?: {
                        in: string[];
                    } | undefined;
                    walletTags?: {
                        hasAny?: string[] | undefined;
                        hasAll?: string[] | undefined;
                    } | undefined;
                } | undefined;
            };
        };
    } | {
        kind: "Permissions:Modify";
        changeRequest: {
            id: string;
            requester: {
                userId: string;
                tokenId?: string | undefined;
                appId?: string | undefined;
            };
            status: "Applied" | "Failed" | "Pending" | "Rejected";
            entityId: string;
            dateCreated: string;
            dateResolved?: string | undefined;
            approvalId?: string | undefined;
            kind: "Permission";
            operationKind: "Update";
            body: {
                id: string;
                name: string;
                status: "Active";
                operations: string[];
                isImmutable: boolean;
                isArchived: boolean;
            };
        };
    } | {
        kind: "Permissions:Assign";
        changeRequest: {
            id: string;
            requester: {
                userId: string;
                tokenId?: string | undefined;
                appId?: string | undefined;
            };
            status: "Applied" | "Failed" | "Pending" | "Rejected";
            entityId: string;
            dateCreated: string;
            dateResolved?: string | undefined;
            approvalId?: string | undefined;
            kind: "Assignment";
            operationKind: "Create" | "Delete";
            body: {
                id: string;
                permissionId: string;
                identityId: string;
                isImmutable: boolean;
            };
        };
    };
    status: "Pending" | "Approved" | "Denied" | "Expired";
    expirationDate?: string | undefined;
    dateCreated?: string | undefined;
    dateUpdated: string;
    dateResolved?: string | undefined;
    policyEvaluations: {
        policyId: string;
        triggered: boolean;
        reason: string;
    }[];
    decisions: {
        userId: string;
        date: string;
        reason: string | null;
        value: "Approved" | "Denied";
    }[];
};

export type CreateApprovalDecisionRequest = CreateApprovalDecisionParams & { body: CreateApprovalDecisionBody }

export type CreatePolicyBody = {
    name: string;
    activityKind: "Permissions:Assign";
    rule: {
        kind: "AlwaysTrigger";
        configuration?: {} | undefined;
    };
    action: {
        kind: "RequestApproval";
        approvalGroups: {
            name?: string | undefined;
            quorum: number;
            approvers: {
                userId?: {
                    in: string[];
                } | undefined;
            };
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    } | {
        kind: "Block";
    };
    filters?: {
        permissionId: {
            in: string[];
        };
    } | undefined;
} | {
    name: string;
    activityKind: "Permissions:Modify";
    rule: {
        kind: "AlwaysTrigger";
        configuration?: {} | undefined;
    };
    action: {
        kind: "RequestApproval";
        approvalGroups: {
            name?: string | undefined;
            quorum: number;
            approvers: {
                userId?: {
                    in: string[];
                } | undefined;
            };
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    } | {
        kind: "Block";
    };
    filters?: {
        permissionId: {
            in: string[];
        };
    } | undefined;
} | {
    name: string;
    activityKind: "Policies:Modify";
    rule: {
        kind: "AlwaysTrigger";
        configuration?: {} | undefined;
    };
    action: {
        kind: "RequestApproval";
        approvalGroups: {
            name?: string | undefined;
            quorum: number;
            approvers: {
                userId?: {
                    in: string[];
                } | undefined;
            };
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    };
    filters?: {
        policyId: {
            in: string[];
        };
    } | undefined;
} | {
    name: string;
    activityKind: "Wallets:Sign";
    rule: {
        kind: "AlwaysTrigger";
        configuration?: {} | undefined;
    } | {
        kind: "TransactionRecipientWhitelist";
        configuration: {
            addresses: string[];
        };
    } | {
        kind: "TransactionAmountLimit";
        configuration: {
            limit: number;
            currency: "EUR" | "USD";
        };
    } | {
        kind: "TransactionAmountVelocity";
        configuration: {
            limit: number;
            currency: "EUR" | "USD";
            timeframe: number;
        };
    } | {
        kind: "TransactionCountVelocity";
        configuration: {
            limit: number;
            timeframe: number;
        };
    } | {
        kind: "ChainalysisTransactionPrescreening";
        configuration: {
            alerts: {
                alertLevel: "LOW" | "MEDIUM" | "HIGH" | "SEVERE";
                categoryIds: number[];
            };
            exposures: {
                direct: {
                    categoryIds: number[];
                };
            };
            addresses: {
                categoryIds: number[];
            };
            fallbackBehaviours: {
                skipUnscreenableTransaction: boolean;
                skipUnsupportedNetwork: boolean;
                skipUnsupportedAsset: boolean;
                skipChainalysisFailure: boolean;
            };
        };
    };
    action: {
        kind: "RequestApproval";
        approvalGroups: {
            name?: string | undefined;
            quorum: number;
            approvers: {
                userId?: {
                    in: string[];
                } | undefined;
            };
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    } | {
        kind: "Block";
    } | {
        kind: "NoAction";
    };
    filters?: {
        walletId?: {
            in: string[];
        } | undefined;
        walletTags?: {
            hasAny?: string[] | undefined;
            hasAll?: string[] | undefined;
        } | undefined;
    } | undefined;
} | {
    name: string;
    activityKind: "Wallets:IncomingTransaction";
    rule: {
        kind: "ChainalysisTransactionScreening";
        configuration: {
            alerts: {
                alertLevel: "LOW" | "MEDIUM" | "HIGH" | "SEVERE";
                categoryIds: number[];
            };
            exposures: {
                direct: {
                    categoryIds: number[];
                };
            };
            fallbackBehaviours: {
                skipUnscreenableTransaction: boolean;
                skipUnsupportedNetwork: boolean;
                skipUnsupportedAsset: boolean;
                skipChainalysisFailure: boolean;
            };
        };
    };
    action: {
        kind: "NoAction";
    };
    filters?: {
        walletId?: {
            in: string[];
        } | undefined;
        walletTags?: {
            hasAny?: string[] | undefined;
            hasAll?: string[] | undefined;
        } | undefined;
    } | undefined;
};

export type CreatePolicyResponse = {
    id: string;
    name: string;
    status: "Active" | "Archived";
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    activityKind: "Permissions:Assign";
    rule: {
        kind: "AlwaysTrigger";
        configuration?: {} | undefined;
    };
    action: {
        kind: "RequestApproval";
        approvalGroups: {
            name?: string | undefined;
            quorum: number;
            approvers: {
                userId?: {
                    in: string[];
                } | undefined;
            };
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    } | {
        kind: "Block";
    };
    filters?: {
        permissionId: {
            in: string[];
        };
    } | undefined;
} | {
    id: string;
    name: string;
    status: "Active" | "Archived";
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    activityKind: "Permissions:Modify";
    rule: {
        kind: "AlwaysTrigger";
        configuration?: {} | undefined;
    };
    action: {
        kind: "RequestApproval";
        approvalGroups: {
            name?: string | undefined;
            quorum: number;
            approvers: {
                userId?: {
                    in: string[];
                } | undefined;
            };
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    } | {
        kind: "Block";
    };
    filters?: {
        permissionId: {
            in: string[];
        };
    } | undefined;
} | {
    id: string;
    name: string;
    status: "Active" | "Archived";
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    activityKind: "Policies:Modify";
    rule: {
        kind: "AlwaysTrigger";
        configuration?: {} | undefined;
    };
    action: {
        kind: "RequestApproval";
        approvalGroups: {
            name?: string | undefined;
            quorum: number;
            approvers: {
                userId?: {
                    in: string[];
                } | undefined;
            };
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    };
    filters?: {
        policyId: {
            in: string[];
        };
    } | undefined;
} | {
    id: string;
    name: string;
    status: "Active" | "Archived";
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    activityKind: "Wallets:Sign";
    rule: {
        kind: "AlwaysTrigger";
        configuration?: {} | undefined;
    } | {
        kind: "TransactionRecipientWhitelist";
        configuration: {
            addresses: string[];
        };
    } | {
        kind: "TransactionAmountLimit";
        configuration: {
            limit: number;
            currency: "EUR" | "USD";
        };
    } | {
        kind: "TransactionAmountVelocity";
        configuration: {
            limit: number;
            currency: "EUR" | "USD";
            timeframe: number;
        };
    } | {
        kind: "TransactionCountVelocity";
        configuration: {
            limit: number;
            timeframe: number;
        };
    } | {
        kind: "ChainalysisTransactionPrescreening";
        configuration: {
            alerts: {
                alertLevel: "LOW" | "MEDIUM" | "HIGH" | "SEVERE";
                categoryIds: number[];
            };
            exposures: {
                direct: {
                    categoryIds: number[];
                };
            };
            addresses: {
                categoryIds: number[];
            };
            fallbackBehaviours: {
                skipUnscreenableTransaction: boolean;
                skipUnsupportedNetwork: boolean;
                skipUnsupportedAsset: boolean;
                skipChainalysisFailure: boolean;
            };
        };
    };
    action: {
        kind: "RequestApproval";
        approvalGroups: {
            name?: string | undefined;
            quorum: number;
            approvers: {
                userId?: {
                    in: string[];
                } | undefined;
            };
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    } | {
        kind: "Block";
    } | {
        kind: "NoAction";
    };
    filters?: {
        walletId?: {
            in: string[];
        } | undefined;
        walletTags?: {
            hasAny?: string[] | undefined;
            hasAll?: string[] | undefined;
        } | undefined;
    } | undefined;
} | {
    id: string;
    name: string;
    status: "Active" | "Archived";
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    activityKind: "Wallets:IncomingTransaction";
    rule: {
        kind: "ChainalysisTransactionScreening";
        configuration: {
            alerts: {
                alertLevel: "LOW" | "MEDIUM" | "HIGH" | "SEVERE";
                categoryIds: number[];
            };
            exposures: {
                direct: {
                    categoryIds: number[];
                };
            };
            fallbackBehaviours: {
                skipUnscreenableTransaction: boolean;
                skipUnsupportedNetwork: boolean;
                skipUnsupportedAsset: boolean;
                skipChainalysisFailure: boolean;
            };
        };
    };
    action: {
        kind: "NoAction";
    };
    filters?: {
        walletId?: {
            in: string[];
        } | undefined;
        walletTags?: {
            hasAny?: string[] | undefined;
            hasAll?: string[] | undefined;
        } | undefined;
    } | undefined;
};

export type CreatePolicyRequest = { body: CreatePolicyBody }

export type GetApprovalParams = {
    approvalId: string;
};

export type GetApprovalResponse = {
    id: string;
    initiatorId: string;
    activity: {
        kind: "Wallets:Sign";
        transferRequest?: {
            id: string;
            walletId: string;
            network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
            } | {
                kind: "Spl" | "Spl2022";
                to: string;
                amount: string;
                mint: string;
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
        } | undefined;
        transactionRequest?: {
            id: string;
            walletId: string;
            network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
        } | undefined;
        signatureRequest?: {
            id: string;
            walletId: string;
            network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
        } | undefined;
    } | {
        kind: "Wallets:IncomingTransaction";
        blockchainEvent: {
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
            kind: "SplTransfer" | "Spl2022Transfer";
            from?: string | undefined;
            to?: string | undefined;
            mint: string;
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
        };
    } | {
        kind: "Policies:Modify";
        changeRequest: {
            id: string;
            requester: {
                userId: string;
                tokenId?: string | undefined;
                appId?: string | undefined;
            };
            kind: "Policy";
            operationKind: "Update";
            status: "Applied" | "Failed" | "Pending" | "Rejected";
            entityId: string;
            dateCreated: string;
            dateResolved?: string | undefined;
            approvalId?: string | undefined;
            body: {
                id: string;
                name: string;
                status: "Active" | "Archived";
                dateCreated?: string | undefined;
                dateUpdated?: string | undefined;
                activityKind: "Permissions:Assign";
                rule: {
                    kind: "AlwaysTrigger";
                    configuration?: {} | undefined;
                };
                action: {
                    kind: "RequestApproval";
                    approvalGroups: {
                        name?: string | undefined;
                        quorum: number;
                        approvers: {
                            userId?: {
                                in: string[];
                            } | undefined;
                        };
                    }[];
                    autoRejectTimeout?: (number | undefined) | null;
                } | {
                    kind: "Block";
                };
                filters?: {
                    permissionId: {
                        in: string[];
                    };
                } | undefined;
            } | {
                id: string;
                name: string;
                status: "Active" | "Archived";
                dateCreated?: string | undefined;
                dateUpdated?: string | undefined;
                activityKind: "Permissions:Modify";
                rule: {
                    kind: "AlwaysTrigger";
                    configuration?: {} | undefined;
                };
                action: {
                    kind: "RequestApproval";
                    approvalGroups: {
                        name?: string | undefined;
                        quorum: number;
                        approvers: {
                            userId?: {
                                in: string[];
                            } | undefined;
                        };
                    }[];
                    autoRejectTimeout?: (number | undefined) | null;
                } | {
                    kind: "Block";
                };
                filters?: {
                    permissionId: {
                        in: string[];
                    };
                } | undefined;
            } | {
                id: string;
                name: string;
                status: "Active" | "Archived";
                dateCreated?: string | undefined;
                dateUpdated?: string | undefined;
                activityKind: "Policies:Modify";
                rule: {
                    kind: "AlwaysTrigger";
                    configuration?: {} | undefined;
                };
                action: {
                    kind: "RequestApproval";
                    approvalGroups: {
                        name?: string | undefined;
                        quorum: number;
                        approvers: {
                            userId?: {
                                in: string[];
                            } | undefined;
                        };
                    }[];
                    autoRejectTimeout?: (number | undefined) | null;
                };
                filters?: {
                    policyId: {
                        in: string[];
                    };
                } | undefined;
            } | {
                id: string;
                name: string;
                status: "Active" | "Archived";
                dateCreated?: string | undefined;
                dateUpdated?: string | undefined;
                activityKind: "Wallets:Sign";
                rule: {
                    kind: "AlwaysTrigger";
                    configuration?: {} | undefined;
                } | {
                    kind: "TransactionRecipientWhitelist";
                    configuration: {
                        addresses: string[];
                    };
                } | {
                    kind: "TransactionAmountLimit";
                    configuration: {
                        limit: number;
                        currency: "EUR" | "USD";
                    };
                } | {
                    kind: "TransactionAmountVelocity";
                    configuration: {
                        limit: number;
                        currency: "EUR" | "USD";
                        timeframe: number;
                    };
                } | {
                    kind: "TransactionCountVelocity";
                    configuration: {
                        limit: number;
                        timeframe: number;
                    };
                } | {
                    kind: "ChainalysisTransactionPrescreening";
                    configuration: {
                        alerts: {
                            alertLevel: "LOW" | "MEDIUM" | "HIGH" | "SEVERE";
                            categoryIds: number[];
                        };
                        exposures: {
                            direct: {
                                categoryIds: number[];
                            };
                        };
                        addresses: {
                            categoryIds: number[];
                        };
                        fallbackBehaviours: {
                            skipUnscreenableTransaction: boolean;
                            skipUnsupportedNetwork: boolean;
                            skipUnsupportedAsset: boolean;
                            skipChainalysisFailure: boolean;
                        };
                    };
                };
                action: {
                    kind: "RequestApproval";
                    approvalGroups: {
                        name?: string | undefined;
                        quorum: number;
                        approvers: {
                            userId?: {
                                in: string[];
                            } | undefined;
                        };
                    }[];
                    autoRejectTimeout?: (number | undefined) | null;
                } | {
                    kind: "Block";
                } | {
                    kind: "NoAction";
                };
                filters?: {
                    walletId?: {
                        in: string[];
                    } | undefined;
                    walletTags?: {
                        hasAny?: string[] | undefined;
                        hasAll?: string[] | undefined;
                    } | undefined;
                } | undefined;
            } | {
                id: string;
                name: string;
                status: "Active" | "Archived";
                dateCreated?: string | undefined;
                dateUpdated?: string | undefined;
                activityKind: "Wallets:IncomingTransaction";
                rule: {
                    kind: "ChainalysisTransactionScreening";
                    configuration: {
                        alerts: {
                            alertLevel: "LOW" | "MEDIUM" | "HIGH" | "SEVERE";
                            categoryIds: number[];
                        };
                        exposures: {
                            direct: {
                                categoryIds: number[];
                            };
                        };
                        fallbackBehaviours: {
                            skipUnscreenableTransaction: boolean;
                            skipUnsupportedNetwork: boolean;
                            skipUnsupportedAsset: boolean;
                            skipChainalysisFailure: boolean;
                        };
                    };
                };
                action: {
                    kind: "NoAction";
                };
                filters?: {
                    walletId?: {
                        in: string[];
                    } | undefined;
                    walletTags?: {
                        hasAny?: string[] | undefined;
                        hasAll?: string[] | undefined;
                    } | undefined;
                } | undefined;
            };
        };
    } | {
        kind: "Permissions:Modify";
        changeRequest: {
            id: string;
            requester: {
                userId: string;
                tokenId?: string | undefined;
                appId?: string | undefined;
            };
            status: "Applied" | "Failed" | "Pending" | "Rejected";
            entityId: string;
            dateCreated: string;
            dateResolved?: string | undefined;
            approvalId?: string | undefined;
            kind: "Permission";
            operationKind: "Update";
            body: {
                id: string;
                name: string;
                status: "Active";
                operations: string[];
                isImmutable: boolean;
                isArchived: boolean;
            };
        };
    } | {
        kind: "Permissions:Assign";
        changeRequest: {
            id: string;
            requester: {
                userId: string;
                tokenId?: string | undefined;
                appId?: string | undefined;
            };
            status: "Applied" | "Failed" | "Pending" | "Rejected";
            entityId: string;
            dateCreated: string;
            dateResolved?: string | undefined;
            approvalId?: string | undefined;
            kind: "Assignment";
            operationKind: "Create" | "Delete";
            body: {
                id: string;
                permissionId: string;
                identityId: string;
                isImmutable: boolean;
            };
        };
    };
    status: "Pending" | "Approved" | "Denied" | "Expired";
    expirationDate?: string | undefined;
    dateCreated?: string | undefined;
    dateUpdated: string;
    dateResolved?: string | undefined;
    policyEvaluations: {
        policyId: string;
        triggered: boolean;
        reason: string;
    }[];
    decisions: {
        userId: string;
        date: string;
        reason: string | null;
        value: "Approved" | "Denied";
    }[];
};

export type GetApprovalRequest = GetApprovalParams

export type GetPolicyParams = {
    policyId: string;
};

export type GetPolicyResponse = ({
    id: string;
    name: string;
    status: "Active" | "Archived";
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    activityKind: "Permissions:Assign";
    rule: {
        kind: "AlwaysTrigger";
        configuration?: {} | undefined;
    };
    action: {
        kind: "RequestApproval";
        approvalGroups: {
            name?: string | undefined;
            quorum: number;
            approvers: {
                userId?: {
                    in: string[];
                } | undefined;
            };
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    } | {
        kind: "Block";
    };
    filters?: {
        permissionId: {
            in: string[];
        };
    } | undefined;
} | {
    id: string;
    name: string;
    status: "Active" | "Archived";
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    activityKind: "Permissions:Modify";
    rule: {
        kind: "AlwaysTrigger";
        configuration?: {} | undefined;
    };
    action: {
        kind: "RequestApproval";
        approvalGroups: {
            name?: string | undefined;
            quorum: number;
            approvers: {
                userId?: {
                    in: string[];
                } | undefined;
            };
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    } | {
        kind: "Block";
    };
    filters?: {
        permissionId: {
            in: string[];
        };
    } | undefined;
} | {
    id: string;
    name: string;
    status: "Active" | "Archived";
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    activityKind: "Policies:Modify";
    rule: {
        kind: "AlwaysTrigger";
        configuration?: {} | undefined;
    };
    action: {
        kind: "RequestApproval";
        approvalGroups: {
            name?: string | undefined;
            quorum: number;
            approvers: {
                userId?: {
                    in: string[];
                } | undefined;
            };
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    };
    filters?: {
        policyId: {
            in: string[];
        };
    } | undefined;
} | {
    id: string;
    name: string;
    status: "Active" | "Archived";
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    activityKind: "Wallets:Sign";
    rule: {
        kind: "AlwaysTrigger";
        configuration?: {} | undefined;
    } | {
        kind: "TransactionRecipientWhitelist";
        configuration: {
            addresses: string[];
        };
    } | {
        kind: "TransactionAmountLimit";
        configuration: {
            limit: number;
            currency: "EUR" | "USD";
        };
    } | {
        kind: "TransactionAmountVelocity";
        configuration: {
            limit: number;
            currency: "EUR" | "USD";
            timeframe: number;
        };
    } | {
        kind: "TransactionCountVelocity";
        configuration: {
            limit: number;
            timeframe: number;
        };
    } | {
        kind: "ChainalysisTransactionPrescreening";
        configuration: {
            alerts: {
                alertLevel: "LOW" | "MEDIUM" | "HIGH" | "SEVERE";
                categoryIds: number[];
            };
            exposures: {
                direct: {
                    categoryIds: number[];
                };
            };
            addresses: {
                categoryIds: number[];
            };
            fallbackBehaviours: {
                skipUnscreenableTransaction: boolean;
                skipUnsupportedNetwork: boolean;
                skipUnsupportedAsset: boolean;
                skipChainalysisFailure: boolean;
            };
        };
    };
    action: {
        kind: "RequestApproval";
        approvalGroups: {
            name?: string | undefined;
            quorum: number;
            approvers: {
                userId?: {
                    in: string[];
                } | undefined;
            };
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    } | {
        kind: "Block";
    } | {
        kind: "NoAction";
    };
    filters?: {
        walletId?: {
            in: string[];
        } | undefined;
        walletTags?: {
            hasAny?: string[] | undefined;
            hasAll?: string[] | undefined;
        } | undefined;
    } | undefined;
} | {
    id: string;
    name: string;
    status: "Active" | "Archived";
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    activityKind: "Wallets:IncomingTransaction";
    rule: {
        kind: "ChainalysisTransactionScreening";
        configuration: {
            alerts: {
                alertLevel: "LOW" | "MEDIUM" | "HIGH" | "SEVERE";
                categoryIds: number[];
            };
            exposures: {
                direct: {
                    categoryIds: number[];
                };
            };
            fallbackBehaviours: {
                skipUnscreenableTransaction: boolean;
                skipUnsupportedNetwork: boolean;
                skipUnsupportedAsset: boolean;
                skipChainalysisFailure: boolean;
            };
        };
    };
    action: {
        kind: "NoAction";
    };
    filters?: {
        walletId?: {
            in: string[];
        } | undefined;
        walletTags?: {
            hasAny?: string[] | undefined;
            hasAll?: string[] | undefined;
        } | undefined;
    } | undefined;
}) & {
    pendingChangeRequest?: {
        id: string;
        requester: {
            userId: string;
            tokenId?: string | undefined;
            appId?: string | undefined;
        };
        kind: "Policy";
        operationKind: "Update";
        status: "Applied" | "Failed" | "Pending" | "Rejected";
        entityId: string;
        dateCreated: string;
        dateResolved?: string | undefined;
        approvalId?: string | undefined;
        body: {
            id: string;
            name: string;
            status: "Active" | "Archived";
            dateCreated?: string | undefined;
            dateUpdated?: string | undefined;
            activityKind: "Permissions:Assign";
            rule: {
                kind: "AlwaysTrigger";
                configuration?: {} | undefined;
            };
            action: {
                kind: "RequestApproval";
                approvalGroups: {
                    name?: string | undefined;
                    quorum: number;
                    approvers: {
                        userId?: {
                            in: string[];
                        } | undefined;
                    };
                }[];
                autoRejectTimeout?: (number | undefined) | null;
            } | {
                kind: "Block";
            };
            filters?: {
                permissionId: {
                    in: string[];
                };
            } | undefined;
        } | {
            id: string;
            name: string;
            status: "Active" | "Archived";
            dateCreated?: string | undefined;
            dateUpdated?: string | undefined;
            activityKind: "Permissions:Modify";
            rule: {
                kind: "AlwaysTrigger";
                configuration?: {} | undefined;
            };
            action: {
                kind: "RequestApproval";
                approvalGroups: {
                    name?: string | undefined;
                    quorum: number;
                    approvers: {
                        userId?: {
                            in: string[];
                        } | undefined;
                    };
                }[];
                autoRejectTimeout?: (number | undefined) | null;
            } | {
                kind: "Block";
            };
            filters?: {
                permissionId: {
                    in: string[];
                };
            } | undefined;
        } | {
            id: string;
            name: string;
            status: "Active" | "Archived";
            dateCreated?: string | undefined;
            dateUpdated?: string | undefined;
            activityKind: "Policies:Modify";
            rule: {
                kind: "AlwaysTrigger";
                configuration?: {} | undefined;
            };
            action: {
                kind: "RequestApproval";
                approvalGroups: {
                    name?: string | undefined;
                    quorum: number;
                    approvers: {
                        userId?: {
                            in: string[];
                        } | undefined;
                    };
                }[];
                autoRejectTimeout?: (number | undefined) | null;
            };
            filters?: {
                policyId: {
                    in: string[];
                };
            } | undefined;
        } | {
            id: string;
            name: string;
            status: "Active" | "Archived";
            dateCreated?: string | undefined;
            dateUpdated?: string | undefined;
            activityKind: "Wallets:Sign";
            rule: {
                kind: "AlwaysTrigger";
                configuration?: {} | undefined;
            } | {
                kind: "TransactionRecipientWhitelist";
                configuration: {
                    addresses: string[];
                };
            } | {
                kind: "TransactionAmountLimit";
                configuration: {
                    limit: number;
                    currency: "EUR" | "USD";
                };
            } | {
                kind: "TransactionAmountVelocity";
                configuration: {
                    limit: number;
                    currency: "EUR" | "USD";
                    timeframe: number;
                };
            } | {
                kind: "TransactionCountVelocity";
                configuration: {
                    limit: number;
                    timeframe: number;
                };
            } | {
                kind: "ChainalysisTransactionPrescreening";
                configuration: {
                    alerts: {
                        alertLevel: "LOW" | "MEDIUM" | "HIGH" | "SEVERE";
                        categoryIds: number[];
                    };
                    exposures: {
                        direct: {
                            categoryIds: number[];
                        };
                    };
                    addresses: {
                        categoryIds: number[];
                    };
                    fallbackBehaviours: {
                        skipUnscreenableTransaction: boolean;
                        skipUnsupportedNetwork: boolean;
                        skipUnsupportedAsset: boolean;
                        skipChainalysisFailure: boolean;
                    };
                };
            };
            action: {
                kind: "RequestApproval";
                approvalGroups: {
                    name?: string | undefined;
                    quorum: number;
                    approvers: {
                        userId?: {
                            in: string[];
                        } | undefined;
                    };
                }[];
                autoRejectTimeout?: (number | undefined) | null;
            } | {
                kind: "Block";
            } | {
                kind: "NoAction";
            };
            filters?: {
                walletId?: {
                    in: string[];
                } | undefined;
                walletTags?: {
                    hasAny?: string[] | undefined;
                    hasAll?: string[] | undefined;
                } | undefined;
            } | undefined;
        } | {
            id: string;
            name: string;
            status: "Active" | "Archived";
            dateCreated?: string | undefined;
            dateUpdated?: string | undefined;
            activityKind: "Wallets:IncomingTransaction";
            rule: {
                kind: "ChainalysisTransactionScreening";
                configuration: {
                    alerts: {
                        alertLevel: "LOW" | "MEDIUM" | "HIGH" | "SEVERE";
                        categoryIds: number[];
                    };
                    exposures: {
                        direct: {
                            categoryIds: number[];
                        };
                    };
                    fallbackBehaviours: {
                        skipUnscreenableTransaction: boolean;
                        skipUnsupportedNetwork: boolean;
                        skipUnsupportedAsset: boolean;
                        skipChainalysisFailure: boolean;
                    };
                };
            };
            action: {
                kind: "NoAction";
            };
            filters?: {
                walletId?: {
                    in: string[];
                } | undefined;
                walletTags?: {
                    hasAny?: string[] | undefined;
                    hasAll?: string[] | undefined;
                } | undefined;
            } | undefined;
        };
    } | undefined;
};

export type GetPolicyRequest = GetPolicyParams

export type ListApprovalsQuery = {
    limit?: string | undefined;
    paginationToken?: string | undefined;
    status?: ("Pending" | "Approved" | "Denied" | "Expired") | undefined;
    initiatorId?: string | undefined;
    approverId?: string | undefined;
};

export type ListApprovalsResponse = {
    items: {
        id: string;
        initiatorId: string;
        activity: {
            kind: "Wallets:Sign";
            transferRequest?: {
                id: string;
                walletId: string;
                network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
                } | {
                    kind: "Spl" | "Spl2022";
                    to: string;
                    amount: string;
                    mint: string;
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
            } | undefined;
            transactionRequest?: {
                id: string;
                walletId: string;
                network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
            } | undefined;
            signatureRequest?: {
                id: string;
                walletId: string;
                network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
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
            } | undefined;
        } | {
            kind: "Wallets:IncomingTransaction";
            blockchainEvent: {
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
                kind: "SplTransfer" | "Spl2022Transfer";
                from?: string | undefined;
                to?: string | undefined;
                mint: string;
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
            };
        } | {
            kind: "Policies:Modify";
            changeRequest: {
                id: string;
                requester: {
                    userId: string;
                    tokenId?: string | undefined;
                    appId?: string | undefined;
                };
                kind: "Policy";
                operationKind: "Update";
                status: "Applied" | "Failed" | "Pending" | "Rejected";
                entityId: string;
                dateCreated: string;
                dateResolved?: string | undefined;
                approvalId?: string | undefined;
                body: {
                    id: string;
                    name: string;
                    status: "Active" | "Archived";
                    dateCreated?: string | undefined;
                    dateUpdated?: string | undefined;
                    activityKind: "Permissions:Assign";
                    rule: {
                        kind: "AlwaysTrigger";
                        configuration?: {} | undefined;
                    };
                    action: {
                        kind: "RequestApproval";
                        approvalGroups: {
                            name?: string | undefined;
                            quorum: number;
                            approvers: {
                                userId?: {
                                    in: string[];
                                } | undefined;
                            };
                        }[];
                        autoRejectTimeout?: (number | undefined) | null;
                    } | {
                        kind: "Block";
                    };
                    filters?: {
                        permissionId: {
                            in: string[];
                        };
                    } | undefined;
                } | {
                    id: string;
                    name: string;
                    status: "Active" | "Archived";
                    dateCreated?: string | undefined;
                    dateUpdated?: string | undefined;
                    activityKind: "Permissions:Modify";
                    rule: {
                        kind: "AlwaysTrigger";
                        configuration?: {} | undefined;
                    };
                    action: {
                        kind: "RequestApproval";
                        approvalGroups: {
                            name?: string | undefined;
                            quorum: number;
                            approvers: {
                                userId?: {
                                    in: string[];
                                } | undefined;
                            };
                        }[];
                        autoRejectTimeout?: (number | undefined) | null;
                    } | {
                        kind: "Block";
                    };
                    filters?: {
                        permissionId: {
                            in: string[];
                        };
                    } | undefined;
                } | {
                    id: string;
                    name: string;
                    status: "Active" | "Archived";
                    dateCreated?: string | undefined;
                    dateUpdated?: string | undefined;
                    activityKind: "Policies:Modify";
                    rule: {
                        kind: "AlwaysTrigger";
                        configuration?: {} | undefined;
                    };
                    action: {
                        kind: "RequestApproval";
                        approvalGroups: {
                            name?: string | undefined;
                            quorum: number;
                            approvers: {
                                userId?: {
                                    in: string[];
                                } | undefined;
                            };
                        }[];
                        autoRejectTimeout?: (number | undefined) | null;
                    };
                    filters?: {
                        policyId: {
                            in: string[];
                        };
                    } | undefined;
                } | {
                    id: string;
                    name: string;
                    status: "Active" | "Archived";
                    dateCreated?: string | undefined;
                    dateUpdated?: string | undefined;
                    activityKind: "Wallets:Sign";
                    rule: {
                        kind: "AlwaysTrigger";
                        configuration?: {} | undefined;
                    } | {
                        kind: "TransactionRecipientWhitelist";
                        configuration: {
                            addresses: string[];
                        };
                    } | {
                        kind: "TransactionAmountLimit";
                        configuration: {
                            limit: number;
                            currency: "EUR" | "USD";
                        };
                    } | {
                        kind: "TransactionAmountVelocity";
                        configuration: {
                            limit: number;
                            currency: "EUR" | "USD";
                            timeframe: number;
                        };
                    } | {
                        kind: "TransactionCountVelocity";
                        configuration: {
                            limit: number;
                            timeframe: number;
                        };
                    } | {
                        kind: "ChainalysisTransactionPrescreening";
                        configuration: {
                            alerts: {
                                alertLevel: "LOW" | "MEDIUM" | "HIGH" | "SEVERE";
                                categoryIds: number[];
                            };
                            exposures: {
                                direct: {
                                    categoryIds: number[];
                                };
                            };
                            addresses: {
                                categoryIds: number[];
                            };
                            fallbackBehaviours: {
                                skipUnscreenableTransaction: boolean;
                                skipUnsupportedNetwork: boolean;
                                skipUnsupportedAsset: boolean;
                                skipChainalysisFailure: boolean;
                            };
                        };
                    };
                    action: {
                        kind: "RequestApproval";
                        approvalGroups: {
                            name?: string | undefined;
                            quorum: number;
                            approvers: {
                                userId?: {
                                    in: string[];
                                } | undefined;
                            };
                        }[];
                        autoRejectTimeout?: (number | undefined) | null;
                    } | {
                        kind: "Block";
                    } | {
                        kind: "NoAction";
                    };
                    filters?: {
                        walletId?: {
                            in: string[];
                        } | undefined;
                        walletTags?: {
                            hasAny?: string[] | undefined;
                            hasAll?: string[] | undefined;
                        } | undefined;
                    } | undefined;
                } | {
                    id: string;
                    name: string;
                    status: "Active" | "Archived";
                    dateCreated?: string | undefined;
                    dateUpdated?: string | undefined;
                    activityKind: "Wallets:IncomingTransaction";
                    rule: {
                        kind: "ChainalysisTransactionScreening";
                        configuration: {
                            alerts: {
                                alertLevel: "LOW" | "MEDIUM" | "HIGH" | "SEVERE";
                                categoryIds: number[];
                            };
                            exposures: {
                                direct: {
                                    categoryIds: number[];
                                };
                            };
                            fallbackBehaviours: {
                                skipUnscreenableTransaction: boolean;
                                skipUnsupportedNetwork: boolean;
                                skipUnsupportedAsset: boolean;
                                skipChainalysisFailure: boolean;
                            };
                        };
                    };
                    action: {
                        kind: "NoAction";
                    };
                    filters?: {
                        walletId?: {
                            in: string[];
                        } | undefined;
                        walletTags?: {
                            hasAny?: string[] | undefined;
                            hasAll?: string[] | undefined;
                        } | undefined;
                    } | undefined;
                };
            };
        } | {
            kind: "Permissions:Modify";
            changeRequest: {
                id: string;
                requester: {
                    userId: string;
                    tokenId?: string | undefined;
                    appId?: string | undefined;
                };
                status: "Applied" | "Failed" | "Pending" | "Rejected";
                entityId: string;
                dateCreated: string;
                dateResolved?: string | undefined;
                approvalId?: string | undefined;
                kind: "Permission";
                operationKind: "Update";
                body: {
                    id: string;
                    name: string;
                    status: "Active";
                    operations: string[];
                    isImmutable: boolean;
                    isArchived: boolean;
                };
            };
        } | {
            kind: "Permissions:Assign";
            changeRequest: {
                id: string;
                requester: {
                    userId: string;
                    tokenId?: string | undefined;
                    appId?: string | undefined;
                };
                status: "Applied" | "Failed" | "Pending" | "Rejected";
                entityId: string;
                dateCreated: string;
                dateResolved?: string | undefined;
                approvalId?: string | undefined;
                kind: "Assignment";
                operationKind: "Create" | "Delete";
                body: {
                    id: string;
                    permissionId: string;
                    identityId: string;
                    isImmutable: boolean;
                };
            };
        };
        status: "Pending" | "Approved" | "Denied" | "Expired";
        expirationDate?: string | undefined;
        dateCreated?: string | undefined;
        dateUpdated: string;
        dateResolved?: string | undefined;
        policyEvaluations: {
            policyId: string;
            triggered: boolean;
            reason: string;
        }[];
        decisions: {
            userId: string;
            date: string;
            reason: string | null;
            value: "Approved" | "Denied";
        }[];
    }[];
    nextPageToken?: string | undefined;
};

export type ListApprovalsRequest = { query?: ListApprovalsQuery }

export type ListPoliciesQuery = {
    limit?: string | undefined;
    paginationToken?: string | undefined;
    status?: ("Active" | "Archived") | undefined;
};

export type ListPoliciesResponse = {
    items: (({
        id: string;
        name: string;
        status: "Active" | "Archived";
        dateCreated?: string | undefined;
        dateUpdated?: string | undefined;
        activityKind: "Permissions:Assign";
        rule: {
            kind: "AlwaysTrigger";
            configuration?: {} | undefined;
        };
        action: {
            kind: "RequestApproval";
            approvalGroups: {
                name?: string | undefined;
                quorum: number;
                approvers: {
                    userId?: {
                        in: string[];
                    } | undefined;
                };
            }[];
            autoRejectTimeout?: (number | undefined) | null;
        } | {
            kind: "Block";
        };
        filters?: {
            permissionId: {
                in: string[];
            };
        } | undefined;
    } | {
        id: string;
        name: string;
        status: "Active" | "Archived";
        dateCreated?: string | undefined;
        dateUpdated?: string | undefined;
        activityKind: "Permissions:Modify";
        rule: {
            kind: "AlwaysTrigger";
            configuration?: {} | undefined;
        };
        action: {
            kind: "RequestApproval";
            approvalGroups: {
                name?: string | undefined;
                quorum: number;
                approvers: {
                    userId?: {
                        in: string[];
                    } | undefined;
                };
            }[];
            autoRejectTimeout?: (number | undefined) | null;
        } | {
            kind: "Block";
        };
        filters?: {
            permissionId: {
                in: string[];
            };
        } | undefined;
    } | {
        id: string;
        name: string;
        status: "Active" | "Archived";
        dateCreated?: string | undefined;
        dateUpdated?: string | undefined;
        activityKind: "Policies:Modify";
        rule: {
            kind: "AlwaysTrigger";
            configuration?: {} | undefined;
        };
        action: {
            kind: "RequestApproval";
            approvalGroups: {
                name?: string | undefined;
                quorum: number;
                approvers: {
                    userId?: {
                        in: string[];
                    } | undefined;
                };
            }[];
            autoRejectTimeout?: (number | undefined) | null;
        };
        filters?: {
            policyId: {
                in: string[];
            };
        } | undefined;
    } | {
        id: string;
        name: string;
        status: "Active" | "Archived";
        dateCreated?: string | undefined;
        dateUpdated?: string | undefined;
        activityKind: "Wallets:Sign";
        rule: {
            kind: "AlwaysTrigger";
            configuration?: {} | undefined;
        } | {
            kind: "TransactionRecipientWhitelist";
            configuration: {
                addresses: string[];
            };
        } | {
            kind: "TransactionAmountLimit";
            configuration: {
                limit: number;
                currency: "EUR" | "USD";
            };
        } | {
            kind: "TransactionAmountVelocity";
            configuration: {
                limit: number;
                currency: "EUR" | "USD";
                timeframe: number;
            };
        } | {
            kind: "TransactionCountVelocity";
            configuration: {
                limit: number;
                timeframe: number;
            };
        } | {
            kind: "ChainalysisTransactionPrescreening";
            configuration: {
                alerts: {
                    alertLevel: "LOW" | "MEDIUM" | "HIGH" | "SEVERE";
                    categoryIds: number[];
                };
                exposures: {
                    direct: {
                        categoryIds: number[];
                    };
                };
                addresses: {
                    categoryIds: number[];
                };
                fallbackBehaviours: {
                    skipUnscreenableTransaction: boolean;
                    skipUnsupportedNetwork: boolean;
                    skipUnsupportedAsset: boolean;
                    skipChainalysisFailure: boolean;
                };
            };
        };
        action: {
            kind: "RequestApproval";
            approvalGroups: {
                name?: string | undefined;
                quorum: number;
                approvers: {
                    userId?: {
                        in: string[];
                    } | undefined;
                };
            }[];
            autoRejectTimeout?: (number | undefined) | null;
        } | {
            kind: "Block";
        } | {
            kind: "NoAction";
        };
        filters?: {
            walletId?: {
                in: string[];
            } | undefined;
            walletTags?: {
                hasAny?: string[] | undefined;
                hasAll?: string[] | undefined;
            } | undefined;
        } | undefined;
    } | {
        id: string;
        name: string;
        status: "Active" | "Archived";
        dateCreated?: string | undefined;
        dateUpdated?: string | undefined;
        activityKind: "Wallets:IncomingTransaction";
        rule: {
            kind: "ChainalysisTransactionScreening";
            configuration: {
                alerts: {
                    alertLevel: "LOW" | "MEDIUM" | "HIGH" | "SEVERE";
                    categoryIds: number[];
                };
                exposures: {
                    direct: {
                        categoryIds: number[];
                    };
                };
                fallbackBehaviours: {
                    skipUnscreenableTransaction: boolean;
                    skipUnsupportedNetwork: boolean;
                    skipUnsupportedAsset: boolean;
                    skipChainalysisFailure: boolean;
                };
            };
        };
        action: {
            kind: "NoAction";
        };
        filters?: {
            walletId?: {
                in: string[];
            } | undefined;
            walletTags?: {
                hasAny?: string[] | undefined;
                hasAll?: string[] | undefined;
            } | undefined;
        } | undefined;
    }) & {
        pendingChangeRequest?: {
            id: string;
            requester: {
                userId: string;
                tokenId?: string | undefined;
                appId?: string | undefined;
            };
            kind: "Policy";
            operationKind: "Update";
            status: "Applied" | "Failed" | "Pending" | "Rejected";
            entityId: string;
            dateCreated: string;
            dateResolved?: string | undefined;
            approvalId?: string | undefined;
            body: {
                id: string;
                name: string;
                status: "Active" | "Archived";
                dateCreated?: string | undefined;
                dateUpdated?: string | undefined;
                activityKind: "Permissions:Assign";
                rule: {
                    kind: "AlwaysTrigger";
                    configuration?: {} | undefined;
                };
                action: {
                    kind: "RequestApproval";
                    approvalGroups: {
                        name?: string | undefined;
                        quorum: number;
                        approvers: {
                            userId?: {
                                in: string[];
                            } | undefined;
                        };
                    }[];
                    autoRejectTimeout?: (number | undefined) | null;
                } | {
                    kind: "Block";
                };
                filters?: {
                    permissionId: {
                        in: string[];
                    };
                } | undefined;
            } | {
                id: string;
                name: string;
                status: "Active" | "Archived";
                dateCreated?: string | undefined;
                dateUpdated?: string | undefined;
                activityKind: "Permissions:Modify";
                rule: {
                    kind: "AlwaysTrigger";
                    configuration?: {} | undefined;
                };
                action: {
                    kind: "RequestApproval";
                    approvalGroups: {
                        name?: string | undefined;
                        quorum: number;
                        approvers: {
                            userId?: {
                                in: string[];
                            } | undefined;
                        };
                    }[];
                    autoRejectTimeout?: (number | undefined) | null;
                } | {
                    kind: "Block";
                };
                filters?: {
                    permissionId: {
                        in: string[];
                    };
                } | undefined;
            } | {
                id: string;
                name: string;
                status: "Active" | "Archived";
                dateCreated?: string | undefined;
                dateUpdated?: string | undefined;
                activityKind: "Policies:Modify";
                rule: {
                    kind: "AlwaysTrigger";
                    configuration?: {} | undefined;
                };
                action: {
                    kind: "RequestApproval";
                    approvalGroups: {
                        name?: string | undefined;
                        quorum: number;
                        approvers: {
                            userId?: {
                                in: string[];
                            } | undefined;
                        };
                    }[];
                    autoRejectTimeout?: (number | undefined) | null;
                };
                filters?: {
                    policyId: {
                        in: string[];
                    };
                } | undefined;
            } | {
                id: string;
                name: string;
                status: "Active" | "Archived";
                dateCreated?: string | undefined;
                dateUpdated?: string | undefined;
                activityKind: "Wallets:Sign";
                rule: {
                    kind: "AlwaysTrigger";
                    configuration?: {} | undefined;
                } | {
                    kind: "TransactionRecipientWhitelist";
                    configuration: {
                        addresses: string[];
                    };
                } | {
                    kind: "TransactionAmountLimit";
                    configuration: {
                        limit: number;
                        currency: "EUR" | "USD";
                    };
                } | {
                    kind: "TransactionAmountVelocity";
                    configuration: {
                        limit: number;
                        currency: "EUR" | "USD";
                        timeframe: number;
                    };
                } | {
                    kind: "TransactionCountVelocity";
                    configuration: {
                        limit: number;
                        timeframe: number;
                    };
                } | {
                    kind: "ChainalysisTransactionPrescreening";
                    configuration: {
                        alerts: {
                            alertLevel: "LOW" | "MEDIUM" | "HIGH" | "SEVERE";
                            categoryIds: number[];
                        };
                        exposures: {
                            direct: {
                                categoryIds: number[];
                            };
                        };
                        addresses: {
                            categoryIds: number[];
                        };
                        fallbackBehaviours: {
                            skipUnscreenableTransaction: boolean;
                            skipUnsupportedNetwork: boolean;
                            skipUnsupportedAsset: boolean;
                            skipChainalysisFailure: boolean;
                        };
                    };
                };
                action: {
                    kind: "RequestApproval";
                    approvalGroups: {
                        name?: string | undefined;
                        quorum: number;
                        approvers: {
                            userId?: {
                                in: string[];
                            } | undefined;
                        };
                    }[];
                    autoRejectTimeout?: (number | undefined) | null;
                } | {
                    kind: "Block";
                } | {
                    kind: "NoAction";
                };
                filters?: {
                    walletId?: {
                        in: string[];
                    } | undefined;
                    walletTags?: {
                        hasAny?: string[] | undefined;
                        hasAll?: string[] | undefined;
                    } | undefined;
                } | undefined;
            } | {
                id: string;
                name: string;
                status: "Active" | "Archived";
                dateCreated?: string | undefined;
                dateUpdated?: string | undefined;
                activityKind: "Wallets:IncomingTransaction";
                rule: {
                    kind: "ChainalysisTransactionScreening";
                    configuration: {
                        alerts: {
                            alertLevel: "LOW" | "MEDIUM" | "HIGH" | "SEVERE";
                            categoryIds: number[];
                        };
                        exposures: {
                            direct: {
                                categoryIds: number[];
                            };
                        };
                        fallbackBehaviours: {
                            skipUnscreenableTransaction: boolean;
                            skipUnsupportedNetwork: boolean;
                            skipUnsupportedAsset: boolean;
                            skipChainalysisFailure: boolean;
                        };
                    };
                };
                action: {
                    kind: "NoAction";
                };
                filters?: {
                    walletId?: {
                        in: string[];
                    } | undefined;
                    walletTags?: {
                        hasAny?: string[] | undefined;
                        hasAll?: string[] | undefined;
                    } | undefined;
                } | undefined;
            };
        } | undefined;
    })[];
    nextPageToken?: string | undefined;
};

export type ListPoliciesRequest = { query?: ListPoliciesQuery }

export type UpdatePolicyBody = {
    name: string;
    activityKind: "Permissions:Assign";
    rule: {
        kind: "AlwaysTrigger";
        configuration?: {} | undefined;
    };
    action: {
        kind: "RequestApproval";
        approvalGroups: {
            name?: string | undefined;
            quorum: number;
            approvers: {
                userId?: {
                    in: string[];
                } | undefined;
            };
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    } | {
        kind: "Block";
    };
    filters?: {
        permissionId: {
            in: string[];
        };
    } | undefined;
} | {
    name: string;
    activityKind: "Permissions:Modify";
    rule: {
        kind: "AlwaysTrigger";
        configuration?: {} | undefined;
    };
    action: {
        kind: "RequestApproval";
        approvalGroups: {
            name?: string | undefined;
            quorum: number;
            approvers: {
                userId?: {
                    in: string[];
                } | undefined;
            };
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    } | {
        kind: "Block";
    };
    filters?: {
        permissionId: {
            in: string[];
        };
    } | undefined;
} | {
    name: string;
    activityKind: "Policies:Modify";
    rule: {
        kind: "AlwaysTrigger";
        configuration?: {} | undefined;
    };
    action: {
        kind: "RequestApproval";
        approvalGroups: {
            name?: string | undefined;
            quorum: number;
            approvers: {
                userId?: {
                    in: string[];
                } | undefined;
            };
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    };
    filters?: {
        policyId: {
            in: string[];
        };
    } | undefined;
} | {
    name: string;
    activityKind: "Wallets:Sign";
    rule: {
        kind: "AlwaysTrigger";
        configuration?: {} | undefined;
    } | {
        kind: "TransactionRecipientWhitelist";
        configuration: {
            addresses: string[];
        };
    } | {
        kind: "TransactionAmountLimit";
        configuration: {
            limit: number;
            currency: "EUR" | "USD";
        };
    } | {
        kind: "TransactionAmountVelocity";
        configuration: {
            limit: number;
            currency: "EUR" | "USD";
            timeframe: number;
        };
    } | {
        kind: "TransactionCountVelocity";
        configuration: {
            limit: number;
            timeframe: number;
        };
    } | {
        kind: "ChainalysisTransactionPrescreening";
        configuration: {
            alerts: {
                alertLevel: "LOW" | "MEDIUM" | "HIGH" | "SEVERE";
                categoryIds: number[];
            };
            exposures: {
                direct: {
                    categoryIds: number[];
                };
            };
            addresses: {
                categoryIds: number[];
            };
            fallbackBehaviours: {
                skipUnscreenableTransaction: boolean;
                skipUnsupportedNetwork: boolean;
                skipUnsupportedAsset: boolean;
                skipChainalysisFailure: boolean;
            };
        };
    };
    action: {
        kind: "RequestApproval";
        approvalGroups: {
            name?: string | undefined;
            quorum: number;
            approvers: {
                userId?: {
                    in: string[];
                } | undefined;
            };
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    } | {
        kind: "Block";
    } | {
        kind: "NoAction";
    };
    filters?: {
        walletId?: {
            in: string[];
        } | undefined;
        walletTags?: {
            hasAny?: string[] | undefined;
            hasAll?: string[] | undefined;
        } | undefined;
    } | undefined;
} | {
    name: string;
    activityKind: "Wallets:IncomingTransaction";
    rule: {
        kind: "ChainalysisTransactionScreening";
        configuration: {
            alerts: {
                alertLevel: "LOW" | "MEDIUM" | "HIGH" | "SEVERE";
                categoryIds: number[];
            };
            exposures: {
                direct: {
                    categoryIds: number[];
                };
            };
            fallbackBehaviours: {
                skipUnscreenableTransaction: boolean;
                skipUnsupportedNetwork: boolean;
                skipUnsupportedAsset: boolean;
                skipChainalysisFailure: boolean;
            };
        };
    };
    action: {
        kind: "NoAction";
    };
    filters?: {
        walletId?: {
            in: string[];
        } | undefined;
        walletTags?: {
            hasAny?: string[] | undefined;
            hasAll?: string[] | undefined;
        } | undefined;
    } | undefined;
};

export type UpdatePolicyParams = {
    policyId: string;
};

export type UpdatePolicyResponse = {
    id: string;
    name: string;
    status: "Active" | "Archived";
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    activityKind: "Permissions:Assign";
    rule: {
        kind: "AlwaysTrigger";
        configuration?: {} | undefined;
    };
    action: {
        kind: "RequestApproval";
        approvalGroups: {
            name?: string | undefined;
            quorum: number;
            approvers: {
                userId?: {
                    in: string[];
                } | undefined;
            };
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    } | {
        kind: "Block";
    };
    filters?: {
        permissionId: {
            in: string[];
        };
    } | undefined;
} | {
    id: string;
    name: string;
    status: "Active" | "Archived";
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    activityKind: "Permissions:Modify";
    rule: {
        kind: "AlwaysTrigger";
        configuration?: {} | undefined;
    };
    action: {
        kind: "RequestApproval";
        approvalGroups: {
            name?: string | undefined;
            quorum: number;
            approvers: {
                userId?: {
                    in: string[];
                } | undefined;
            };
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    } | {
        kind: "Block";
    };
    filters?: {
        permissionId: {
            in: string[];
        };
    } | undefined;
} | {
    id: string;
    name: string;
    status: "Active" | "Archived";
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    activityKind: "Policies:Modify";
    rule: {
        kind: "AlwaysTrigger";
        configuration?: {} | undefined;
    };
    action: {
        kind: "RequestApproval";
        approvalGroups: {
            name?: string | undefined;
            quorum: number;
            approvers: {
                userId?: {
                    in: string[];
                } | undefined;
            };
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    };
    filters?: {
        policyId: {
            in: string[];
        };
    } | undefined;
} | {
    id: string;
    name: string;
    status: "Active" | "Archived";
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    activityKind: "Wallets:Sign";
    rule: {
        kind: "AlwaysTrigger";
        configuration?: {} | undefined;
    } | {
        kind: "TransactionRecipientWhitelist";
        configuration: {
            addresses: string[];
        };
    } | {
        kind: "TransactionAmountLimit";
        configuration: {
            limit: number;
            currency: "EUR" | "USD";
        };
    } | {
        kind: "TransactionAmountVelocity";
        configuration: {
            limit: number;
            currency: "EUR" | "USD";
            timeframe: number;
        };
    } | {
        kind: "TransactionCountVelocity";
        configuration: {
            limit: number;
            timeframe: number;
        };
    } | {
        kind: "ChainalysisTransactionPrescreening";
        configuration: {
            alerts: {
                alertLevel: "LOW" | "MEDIUM" | "HIGH" | "SEVERE";
                categoryIds: number[];
            };
            exposures: {
                direct: {
                    categoryIds: number[];
                };
            };
            addresses: {
                categoryIds: number[];
            };
            fallbackBehaviours: {
                skipUnscreenableTransaction: boolean;
                skipUnsupportedNetwork: boolean;
                skipUnsupportedAsset: boolean;
                skipChainalysisFailure: boolean;
            };
        };
    };
    action: {
        kind: "RequestApproval";
        approvalGroups: {
            name?: string | undefined;
            quorum: number;
            approvers: {
                userId?: {
                    in: string[];
                } | undefined;
            };
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    } | {
        kind: "Block";
    } | {
        kind: "NoAction";
    };
    filters?: {
        walletId?: {
            in: string[];
        } | undefined;
        walletTags?: {
            hasAny?: string[] | undefined;
            hasAll?: string[] | undefined;
        } | undefined;
    } | undefined;
} | {
    id: string;
    name: string;
    status: "Active" | "Archived";
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    activityKind: "Wallets:IncomingTransaction";
    rule: {
        kind: "ChainalysisTransactionScreening";
        configuration: {
            alerts: {
                alertLevel: "LOW" | "MEDIUM" | "HIGH" | "SEVERE";
                categoryIds: number[];
            };
            exposures: {
                direct: {
                    categoryIds: number[];
                };
            };
            fallbackBehaviours: {
                skipUnscreenableTransaction: boolean;
                skipUnsupportedNetwork: boolean;
                skipUnsupportedAsset: boolean;
                skipChainalysisFailure: boolean;
            };
        };
    };
    action: {
        kind: "NoAction";
    };
    filters?: {
        walletId?: {
            in: string[];
        } | undefined;
        walletTags?: {
            hasAny?: string[] | undefined;
            hasAll?: string[] | undefined;
        } | undefined;
    } | undefined;
};

export type UpdatePolicyRequest = UpdatePolicyParams & { body: UpdatePolicyBody }

