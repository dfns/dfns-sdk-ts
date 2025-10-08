export type ArchivePolicyParams = {
    policyId: string;
};

export type ArchivePolicyResponse = {
    id: string;
    name: string;
    status: "Active" | "Archived";
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    activityKind: "Alias:Modify";
    /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    } | {
        kind: "Block";
    };
    filters?: {} | undefined;
} | {
    id: string;
    name: string;
    status: "Active" | "Archived";
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    activityKind: "Permissions:Assign";
    /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
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
    /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
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
    /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
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
            /** Whitelisted recipient addresses */
            addresses: string[];
        };
    } | {
        kind: "TransactionAmountLimit";
        configuration: {
            /** Amount limit in `currency` */
            limit: number;
            /** Fiat currency, currently only `USD` */
            currency: "USD";
        };
    } | {
        kind: "TransactionAmountVelocity";
        configuration: {
            /** Amount limit in `currency` */
            limit: number;
            /** Currency for the amount limit above */
            currency: "USD";
            /** Time period in minutes. Minimum 1, Maximum 43,200. */
            timeframe: number;
        };
    } | {
        kind: "TransactionCountVelocity";
        configuration: {
            /** Count limit */
            limit: number;
            /** Time period in minutes. Minimum 1, Maximum 43,200. */
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
    } | {
        kind: "TravelRuleTransactionPrescreening";
        configuration: {
            vendor: "Notabene";
            autoTriggerTimeoutSeconds: number;
            autoClearAfterDeliveredTimeoutSeconds?: number | undefined;
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
            requester: {
                userId: string;
                tokenId?: string | undefined;
            };
            requestBody: {
                kind: "Native";
                /** The destination address. */
                to: string;
                /** The amount of native tokens to transfer in minimum denomination. */
                amount: string;
                /** The memo or destination tag. `Stellar`, `TON` and `XrpLedger` support `memo`. Not valid for other networks. */
                memo?: string | undefined;
                /** The priority that determines the fees paid for the transfer. All EVM compatible networks and Bitcoin support `priority`. Not supported for other networks. It uses the [estimate fees](https://docs.dfns.co/api-reference/networks/estimate-fees) API to calculate the transfer fees. When not specified, defaults to `Standard` priority. */
                priority?: ("Slow" | "Standard" | "Fast") | undefined;
                /** Whether to create the destination account on chains that require account creation (e.g., Stellar, Kadena). Only valid for chains that require the receiver account to exist before transfer. */
                createDestinationAccount?: boolean | undefined;
                /** Optional field for Canton, if true it will create a transfer offer. */
                offer?: boolean | undefined;
                /** Optional field for Canton, especially useful in the context of offers */
                expiresAt?: string | undefined;
                /** For multi-chain networks (e.g., Kadena), specify the destination chain for cross-chain transfers. */
                targetChain?: string | undefined;
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
                kind: "Hip17";
                /** The token to transfer. */
                tokenId: string;
                serialNumber: string;
                /** The destination address. */
                to: string;
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
                memo?: string | undefined;
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
                /** If `true`, pay to create the associated token account for the recipient if it doesn't exist. Defaults to `false`. */
                createDestinationAccount?: boolean | undefined;
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
                memo?: string | undefined;
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
            feeSponsorId?: string | undefined;
        } | undefined;
        transactionRequest?: {
            id: string;
            walletId: string;
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
            requester: {
                userId: string;
                tokenId?: string | undefined;
            };
            requestBody: {
                kind: "Transaction";
                /** The unsigned hex encoded transaction. EVM transactions also accept JSON objects. */
                transaction: string | {};
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "Evm";
                to?: string | undefined;
                value?: (string | string) | undefined;
                data?: string | undefined;
                /** The current nonce of the signer EOA. */
                nonce?: (number | string | string) | undefined;
                gasLimit?: (string | string) | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
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
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "Psbt";
                /** The hex encoded PSBT. */
                psbt: string;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "Json";
                transaction: {};
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "SignDocDirect";
                signDoc: string;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "UserOperations";
                userOperations: {
                    /** The destination address or target contract. */
                    to: string;
                    /** The amount of native tokens to transfer in minimum denomination. */
                    value?: string | undefined;
                    /** ABI encoded function call data in hex format. */
                    data?: string | undefined;
                }[];
                /** A fee sponsor id to sponsor the transaction fee by another wallet. (read more [here](https://docs.dfns.co/features/fee-sponsors)) */
                feeSponsorId: string;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "SettleOffer";
                txHash: string;
                decision: "Accept" | "Reject";
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
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
        } | undefined;
        signatureRequest?: {
            id: string;
            keyId: string;
            requester: {
                userId: string;
                tokenId?: string | undefined;
            };
            requestBody: {
                kind: "Hash";
                /** 32-byte hash in hex encoded format. */
                hash: string;
                /** Required when signing with a Schnorr key. Specify the merkle root for tweaking the signing key, or the empty string "" to tweak with the default merkle root. */
                taprootMerkleRoot?: string | undefined;
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "Message";
                /** An arbitrary hex encoded message. */
                message: string;
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "Transaction";
                /** The unsigned hex-encoded transaction. */
                transaction: string;
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "Psbt";
                /** The hex encoded PSBT. */
                psbt: string;
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "Bip322";
                /** The generic message hex encoded. */
                message: string;
                /** Defaults to Simple if not present. The formatted signature is returned in the `signedData` field in the response. */
                format?: ("Simple" | "Full") | undefined;
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "PactCommand";
                /** The Pact command JSON, serialized into a string. */
                command: string;
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "SignDocDirect";
                /** The hex encoded `SignDoc` Protobuf. */
                signDoc: string;
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "Cip8";
                /** The generic message hex encoded. */
                payload?: string | undefined;
                /** Allows an application to ask the user to sign some extra data but NOT put it inside the COSE structure (only as part of the data to sign). */
                externalAad?: string | undefined;
                context: "Signature1";
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            txHash?: string | undefined;
            fee?: string | undefined;
            approvalId?: string | undefined;
            dateRequested: string;
            datePolicyResolved?: string | undefined;
            dateSigned?: string | undefined;
            dateConfirmed?: string | undefined;
            externalId?: string | undefined;
        } | undefined;
        swapRequest?: {
            /** Swap id. */
            id: string;
            /** Id of the quote this swap is based on. */
            quoteId: string;
            /** Optional user-defined reference for this Swap. */
            reference: string | null;
            /** Id of the Dfns wallet spending the sourceAsset. */
            walletId: string;
            /** Id of the Dfns wallet receiving the target asset. Currently this value must be the same as the `walletId`. */
            targetWalletId: string;
            /** Swap status. */
            status: "PendingPolicyApproval" | "InProgress" | "Completed" | "Failed" | "Rejected";
            /** Swap provider. */
            provider: "UniswapX" | "UniswapClassic";
            /** The source asset for this swap transaction. */
            quotedSourceAsset: ({
                kind: "Native";
                amount: string;
            } | {
                kind: "Erc20";
                contract: string;
                amount: string;
            }) & {
                metadata: {
                    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals: number;
                    tid?: string | undefined;
                };
            };
            /** The target asset for this swap transaction. */
            quotedTargetAsset: ({
                kind: "Native";
                amount: string;
            } | {
                kind: "Erc20";
                contract: string;
                amount: string;
            }) & {
                metadata: {
                    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals: number;
                    tid?: string | undefined;
                };
            };
            /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you are willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
            slippageBps: number;
            /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date (must be UTC). When the swap was initiated. */
            dateCreated: string;
            /** The full request used for initiating this swap. */
            requestBody: {
                /** Quote to use for this swap. */
                quoteId: string;
                /** An optional reference for this Swap. */
                reference?: string | undefined;
                /** Provided for this swap. Used for attesting that the swap is being created with the same parameters as the quote. */
                provider: "UniswapX" | "UniswapClassic";
                /** Id of the Dfns wallet spending the sourceAsset. Used for attesting that the swap is being created with the same parameters as the quote. */
                walletId: string;
                /** Id of the Dfns wallet receiving the target asset. Currently this value must be the same as the `walletId`. Used for attesting that the swap is being created with the same parameters as the quote. */
                targetWalletId?: string | undefined;
                /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you are willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. Used for attesting that the swap is being created with the same parameters as the quote.  */
                slippageBps: number;
                /** The source asset that will be spent on the Swap transaction. Used for attesting that the swap is being created with the same parameters as the quote. */
                sourceAsset: {
                    kind: "Native";
                    amount: string;
                } | {
                    kind: "Erc20";
                    contract: string;
                    amount: string;
                };
                /** The target asset that will be received with the Swap transaction. Used for attesting that the swap is being created with the same parameters as the quote. */
                targetAsset: {
                    kind: "Native";
                    amount: string;
                } | {
                    kind: "Erc20";
                    contract: string;
                    amount: string;
                };
            } | {};
            requester: {
                /** User (could be a service account) who requested the quote. */
                userId: string;
                /** Service Account token or Personal Access token used when requesting the quote. */
                tokenId?: string | undefined;
            };
        } | undefined;
    } | {
        kind: "Wallets:IncomingTransaction";
        blockchainEvent: {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            kind: "Aip21Transfer";
            metadataAddress: string;
            from: string;
            to: string;
            value: string;
            fee?: string | undefined;
        } | {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            kind: "AssetTransfer";
            assetId: string;
            from?: string | undefined;
            to?: string | undefined;
            value: string;
            fee?: string | undefined;
        } | {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            kind: "CoinTransfer";
            coin: string;
            from: string;
            tos?: string[] | undefined;
            value: string;
            fee?: string | undefined;
        } | {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            kind: "Hip17Transfer";
            tokenId: string;
            serialNumber: string;
            from?: string | undefined;
            to?: string | undefined;
            fee?: string | undefined;
        } | {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            kind: "HtsTransfer";
            tokenId?: string | undefined;
            froms: string[];
            tos: string[];
            value: string;
            fee?: string | undefined;
        } | {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            kind: "Kip5Transfer";
            from?: string | undefined;
            to?: string | undefined;
            value: string;
            fee?: string | undefined;
            module: string;
            sourceChain?: string | undefined;
            targetChain?: string | undefined;
        } | {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            kind: "LockedCoinTransfer";
            coin: string;
            from: string;
            tos?: string[] | undefined;
            value: string;
            fee?: string | undefined;
        } | {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
                activityKind: "Alias:Modify";
                /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
                        /** Whether the initiator of the activity can participate in the approval. */
                        initiatorCanApprove?: boolean | undefined;
                    }[];
                    autoRejectTimeout?: (number | undefined) | null;
                } | {
                    kind: "Block";
                };
                filters?: {} | undefined;
            } | {
                id: string;
                name: string;
                status: "Active" | "Archived";
                dateCreated?: string | undefined;
                dateUpdated?: string | undefined;
                activityKind: "Permissions:Assign";
                /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
                        /** Whether the initiator of the activity can participate in the approval. */
                        initiatorCanApprove?: boolean | undefined;
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
                /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
                        /** Whether the initiator of the activity can participate in the approval. */
                        initiatorCanApprove?: boolean | undefined;
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
                /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
                        /** Whether the initiator of the activity can participate in the approval. */
                        initiatorCanApprove?: boolean | undefined;
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
                        /** Whitelisted recipient addresses */
                        addresses: string[];
                    };
                } | {
                    kind: "TransactionAmountLimit";
                    configuration: {
                        /** Amount limit in `currency` */
                        limit: number;
                        /** Fiat currency, currently only `USD` */
                        currency: "USD";
                    };
                } | {
                    kind: "TransactionAmountVelocity";
                    configuration: {
                        /** Amount limit in `currency` */
                        limit: number;
                        /** Currency for the amount limit above */
                        currency: "USD";
                        /** Time period in minutes. Minimum 1, Maximum 43,200. */
                        timeframe: number;
                    };
                } | {
                    kind: "TransactionCountVelocity";
                    configuration: {
                        /** Count limit */
                        limit: number;
                        /** Time period in minutes. Minimum 1, Maximum 43,200. */
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
                } | {
                    kind: "TravelRuleTransactionPrescreening";
                    configuration: {
                        vendor: "Notabene";
                        autoTriggerTimeoutSeconds: number;
                        autoClearAfterDeliveredTimeoutSeconds?: number | undefined;
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
                        /** Whether the initiator of the activity can participate in the approval. */
                        initiatorCanApprove?: boolean | undefined;
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
    } | {
        kind: "Alias:Modify";
        changeRequest: {
            id: string;
            kind: "Alias";
            body: {
                entityId: string;
                alias: string;
                operationKind: "Create";
                description?: string | undefined;
                values: {
                    add: {
                        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
                        value: string;
                        kind: "Eoa";
                    }[];
                };
            } | {
                entityId: string;
                alias: string;
                operationKind: "Update";
                description?: ((string | undefined) | null) | undefined;
                values: {
                    add: {
                        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
                        value: string;
                        kind: "Eoa";
                    }[];
                    remove: {
                        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
                        value: string;
                        kind: "Eoa";
                    }[];
                };
            } | {
                entityId: string;
                alias: string;
                operationKind: "Delete";
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
    activityKind: "Alias:Modify";
    /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    } | {
        kind: "Block";
    };
    filters?: {} | undefined;
} | {
    name: string;
    activityKind: "Permissions:Assign";
    /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
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
    /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
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
    /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
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
            /** Whitelisted recipient addresses */
            addresses: string[];
        };
    } | {
        kind: "TransactionAmountLimit";
        configuration: {
            /** Amount limit in `currency` */
            limit: number;
            /** Fiat currency, currently only `USD` */
            currency: "USD";
        };
    } | {
        kind: "TransactionAmountVelocity";
        configuration: {
            /** Amount limit in `currency` */
            limit: number;
            /** Currency for the amount limit above */
            currency: "USD";
            /** Time period in minutes. Minimum 1, Maximum 43,200. */
            timeframe: number;
        };
    } | {
        kind: "TransactionCountVelocity";
        configuration: {
            /** Count limit */
            limit: number;
            /** Time period in minutes. Minimum 1, Maximum 43,200. */
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
    } | {
        kind: "TravelRuleTransactionPrescreening";
        configuration: {
            vendor: "Notabene";
            autoTriggerTimeoutSeconds: number;
            autoClearAfterDeliveredTimeoutSeconds?: number | undefined;
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
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
    activityKind: "Alias:Modify";
    /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    } | {
        kind: "Block";
    };
    filters?: {} | undefined;
} | {
    id: string;
    name: string;
    status: "Active" | "Archived";
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    activityKind: "Permissions:Assign";
    /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
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
    /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
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
    /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
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
            /** Whitelisted recipient addresses */
            addresses: string[];
        };
    } | {
        kind: "TransactionAmountLimit";
        configuration: {
            /** Amount limit in `currency` */
            limit: number;
            /** Fiat currency, currently only `USD` */
            currency: "USD";
        };
    } | {
        kind: "TransactionAmountVelocity";
        configuration: {
            /** Amount limit in `currency` */
            limit: number;
            /** Currency for the amount limit above */
            currency: "USD";
            /** Time period in minutes. Minimum 1, Maximum 43,200. */
            timeframe: number;
        };
    } | {
        kind: "TransactionCountVelocity";
        configuration: {
            /** Count limit */
            limit: number;
            /** Time period in minutes. Minimum 1, Maximum 43,200. */
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
    } | {
        kind: "TravelRuleTransactionPrescreening";
        configuration: {
            vendor: "Notabene";
            autoTriggerTimeoutSeconds: number;
            autoClearAfterDeliveredTimeoutSeconds?: number | undefined;
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
            requester: {
                userId: string;
                tokenId?: string | undefined;
            };
            requestBody: {
                kind: "Native";
                /** The destination address. */
                to: string;
                /** The amount of native tokens to transfer in minimum denomination. */
                amount: string;
                /** The memo or destination tag. `Stellar`, `TON` and `XrpLedger` support `memo`. Not valid for other networks. */
                memo?: string | undefined;
                /** The priority that determines the fees paid for the transfer. All EVM compatible networks and Bitcoin support `priority`. Not supported for other networks. It uses the [estimate fees](https://docs.dfns.co/api-reference/networks/estimate-fees) API to calculate the transfer fees. When not specified, defaults to `Standard` priority. */
                priority?: ("Slow" | "Standard" | "Fast") | undefined;
                /** Whether to create the destination account on chains that require account creation (e.g., Stellar, Kadena). Only valid for chains that require the receiver account to exist before transfer. */
                createDestinationAccount?: boolean | undefined;
                /** Optional field for Canton, if true it will create a transfer offer. */
                offer?: boolean | undefined;
                /** Optional field for Canton, especially useful in the context of offers */
                expiresAt?: string | undefined;
                /** For multi-chain networks (e.g., Kadena), specify the destination chain for cross-chain transfers. */
                targetChain?: string | undefined;
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
                kind: "Hip17";
                /** The token to transfer. */
                tokenId: string;
                serialNumber: string;
                /** The destination address. */
                to: string;
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
                memo?: string | undefined;
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
                /** If `true`, pay to create the associated token account for the recipient if it doesn't exist. Defaults to `false`. */
                createDestinationAccount?: boolean | undefined;
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
                memo?: string | undefined;
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
            feeSponsorId?: string | undefined;
        } | undefined;
        transactionRequest?: {
            id: string;
            walletId: string;
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
            requester: {
                userId: string;
                tokenId?: string | undefined;
            };
            requestBody: {
                kind: "Transaction";
                /** The unsigned hex encoded transaction. EVM transactions also accept JSON objects. */
                transaction: string | {};
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "Evm";
                to?: string | undefined;
                value?: (string | string) | undefined;
                data?: string | undefined;
                /** The current nonce of the signer EOA. */
                nonce?: (number | string | string) | undefined;
                gasLimit?: (string | string) | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
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
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "Psbt";
                /** The hex encoded PSBT. */
                psbt: string;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "Json";
                transaction: {};
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "SignDocDirect";
                signDoc: string;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "UserOperations";
                userOperations: {
                    /** The destination address or target contract. */
                    to: string;
                    /** The amount of native tokens to transfer in minimum denomination. */
                    value?: string | undefined;
                    /** ABI encoded function call data in hex format. */
                    data?: string | undefined;
                }[];
                /** A fee sponsor id to sponsor the transaction fee by another wallet. (read more [here](https://docs.dfns.co/features/fee-sponsors)) */
                feeSponsorId: string;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "SettleOffer";
                txHash: string;
                decision: "Accept" | "Reject";
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
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
        } | undefined;
        signatureRequest?: {
            id: string;
            keyId: string;
            requester: {
                userId: string;
                tokenId?: string | undefined;
            };
            requestBody: {
                kind: "Hash";
                /** 32-byte hash in hex encoded format. */
                hash: string;
                /** Required when signing with a Schnorr key. Specify the merkle root for tweaking the signing key, or the empty string "" to tweak with the default merkle root. */
                taprootMerkleRoot?: string | undefined;
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "Message";
                /** An arbitrary hex encoded message. */
                message: string;
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "Transaction";
                /** The unsigned hex-encoded transaction. */
                transaction: string;
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "Psbt";
                /** The hex encoded PSBT. */
                psbt: string;
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "Bip322";
                /** The generic message hex encoded. */
                message: string;
                /** Defaults to Simple if not present. The formatted signature is returned in the `signedData` field in the response. */
                format?: ("Simple" | "Full") | undefined;
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "PactCommand";
                /** The Pact command JSON, serialized into a string. */
                command: string;
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "SignDocDirect";
                /** The hex encoded `SignDoc` Protobuf. */
                signDoc: string;
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "Cip8";
                /** The generic message hex encoded. */
                payload?: string | undefined;
                /** Allows an application to ask the user to sign some extra data but NOT put it inside the COSE structure (only as part of the data to sign). */
                externalAad?: string | undefined;
                context: "Signature1";
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            txHash?: string | undefined;
            fee?: string | undefined;
            approvalId?: string | undefined;
            dateRequested: string;
            datePolicyResolved?: string | undefined;
            dateSigned?: string | undefined;
            dateConfirmed?: string | undefined;
            externalId?: string | undefined;
        } | undefined;
        swapRequest?: {
            /** Swap id. */
            id: string;
            /** Id of the quote this swap is based on. */
            quoteId: string;
            /** Optional user-defined reference for this Swap. */
            reference: string | null;
            /** Id of the Dfns wallet spending the sourceAsset. */
            walletId: string;
            /** Id of the Dfns wallet receiving the target asset. Currently this value must be the same as the `walletId`. */
            targetWalletId: string;
            /** Swap status. */
            status: "PendingPolicyApproval" | "InProgress" | "Completed" | "Failed" | "Rejected";
            /** Swap provider. */
            provider: "UniswapX" | "UniswapClassic";
            /** The source asset for this swap transaction. */
            quotedSourceAsset: ({
                kind: "Native";
                amount: string;
            } | {
                kind: "Erc20";
                contract: string;
                amount: string;
            }) & {
                metadata: {
                    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals: number;
                    tid?: string | undefined;
                };
            };
            /** The target asset for this swap transaction. */
            quotedTargetAsset: ({
                kind: "Native";
                amount: string;
            } | {
                kind: "Erc20";
                contract: string;
                amount: string;
            }) & {
                metadata: {
                    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
                    name?: string | undefined;
                    symbol?: string | undefined;
                    decimals: number;
                    tid?: string | undefined;
                };
            };
            /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you are willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
            slippageBps: number;
            /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date (must be UTC). When the swap was initiated. */
            dateCreated: string;
            /** The full request used for initiating this swap. */
            requestBody: {
                /** Quote to use for this swap. */
                quoteId: string;
                /** An optional reference for this Swap. */
                reference?: string | undefined;
                /** Provided for this swap. Used for attesting that the swap is being created with the same parameters as the quote. */
                provider: "UniswapX" | "UniswapClassic";
                /** Id of the Dfns wallet spending the sourceAsset. Used for attesting that the swap is being created with the same parameters as the quote. */
                walletId: string;
                /** Id of the Dfns wallet receiving the target asset. Currently this value must be the same as the `walletId`. Used for attesting that the swap is being created with the same parameters as the quote. */
                targetWalletId?: string | undefined;
                /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you are willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. Used for attesting that the swap is being created with the same parameters as the quote.  */
                slippageBps: number;
                /** The source asset that will be spent on the Swap transaction. Used for attesting that the swap is being created with the same parameters as the quote. */
                sourceAsset: {
                    kind: "Native";
                    amount: string;
                } | {
                    kind: "Erc20";
                    contract: string;
                    amount: string;
                };
                /** The target asset that will be received with the Swap transaction. Used for attesting that the swap is being created with the same parameters as the quote. */
                targetAsset: {
                    kind: "Native";
                    amount: string;
                } | {
                    kind: "Erc20";
                    contract: string;
                    amount: string;
                };
            } | {};
            requester: {
                /** User (could be a service account) who requested the quote. */
                userId: string;
                /** Service Account token or Personal Access token used when requesting the quote. */
                tokenId?: string | undefined;
            };
        } | undefined;
    } | {
        kind: "Wallets:IncomingTransaction";
        blockchainEvent: {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            kind: "Aip21Transfer";
            metadataAddress: string;
            from: string;
            to: string;
            value: string;
            fee?: string | undefined;
        } | {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            kind: "AssetTransfer";
            assetId: string;
            from?: string | undefined;
            to?: string | undefined;
            value: string;
            fee?: string | undefined;
        } | {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            kind: "CoinTransfer";
            coin: string;
            from: string;
            tos?: string[] | undefined;
            value: string;
            fee?: string | undefined;
        } | {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            kind: "Hip17Transfer";
            tokenId: string;
            serialNumber: string;
            from?: string | undefined;
            to?: string | undefined;
            fee?: string | undefined;
        } | {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            kind: "HtsTransfer";
            tokenId?: string | undefined;
            froms: string[];
            tos: string[];
            value: string;
            fee?: string | undefined;
        } | {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            kind: "Kip5Transfer";
            from?: string | undefined;
            to?: string | undefined;
            value: string;
            fee?: string | undefined;
            module: string;
            sourceChain?: string | undefined;
            targetChain?: string | undefined;
        } | {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            kind: "LockedCoinTransfer";
            coin: string;
            from: string;
            tos?: string[] | undefined;
            value: string;
            fee?: string | undefined;
        } | {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
                activityKind: "Alias:Modify";
                /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
                        /** Whether the initiator of the activity can participate in the approval. */
                        initiatorCanApprove?: boolean | undefined;
                    }[];
                    autoRejectTimeout?: (number | undefined) | null;
                } | {
                    kind: "Block";
                };
                filters?: {} | undefined;
            } | {
                id: string;
                name: string;
                status: "Active" | "Archived";
                dateCreated?: string | undefined;
                dateUpdated?: string | undefined;
                activityKind: "Permissions:Assign";
                /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
                        /** Whether the initiator of the activity can participate in the approval. */
                        initiatorCanApprove?: boolean | undefined;
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
                /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
                        /** Whether the initiator of the activity can participate in the approval. */
                        initiatorCanApprove?: boolean | undefined;
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
                /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
                        /** Whether the initiator of the activity can participate in the approval. */
                        initiatorCanApprove?: boolean | undefined;
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
                        /** Whitelisted recipient addresses */
                        addresses: string[];
                    };
                } | {
                    kind: "TransactionAmountLimit";
                    configuration: {
                        /** Amount limit in `currency` */
                        limit: number;
                        /** Fiat currency, currently only `USD` */
                        currency: "USD";
                    };
                } | {
                    kind: "TransactionAmountVelocity";
                    configuration: {
                        /** Amount limit in `currency` */
                        limit: number;
                        /** Currency for the amount limit above */
                        currency: "USD";
                        /** Time period in minutes. Minimum 1, Maximum 43,200. */
                        timeframe: number;
                    };
                } | {
                    kind: "TransactionCountVelocity";
                    configuration: {
                        /** Count limit */
                        limit: number;
                        /** Time period in minutes. Minimum 1, Maximum 43,200. */
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
                } | {
                    kind: "TravelRuleTransactionPrescreening";
                    configuration: {
                        vendor: "Notabene";
                        autoTriggerTimeoutSeconds: number;
                        autoClearAfterDeliveredTimeoutSeconds?: number | undefined;
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
                        /** Whether the initiator of the activity can participate in the approval. */
                        initiatorCanApprove?: boolean | undefined;
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
    } | {
        kind: "Alias:Modify";
        changeRequest: {
            id: string;
            kind: "Alias";
            body: {
                entityId: string;
                alias: string;
                operationKind: "Create";
                description?: string | undefined;
                values: {
                    add: {
                        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
                        value: string;
                        kind: "Eoa";
                    }[];
                };
            } | {
                entityId: string;
                alias: string;
                operationKind: "Update";
                description?: ((string | undefined) | null) | undefined;
                values: {
                    add: {
                        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
                        value: string;
                        kind: "Eoa";
                    }[];
                    remove: {
                        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
                        value: string;
                        kind: "Eoa";
                    }[];
                };
            } | {
                entityId: string;
                alias: string;
                operationKind: "Delete";
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
    activityKind: "Alias:Modify";
    /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    } | {
        kind: "Block";
    };
    filters?: {} | undefined;
} | {
    id: string;
    name: string;
    status: "Active" | "Archived";
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    activityKind: "Permissions:Assign";
    /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
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
    /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
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
    /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
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
            /** Whitelisted recipient addresses */
            addresses: string[];
        };
    } | {
        kind: "TransactionAmountLimit";
        configuration: {
            /** Amount limit in `currency` */
            limit: number;
            /** Fiat currency, currently only `USD` */
            currency: "USD";
        };
    } | {
        kind: "TransactionAmountVelocity";
        configuration: {
            /** Amount limit in `currency` */
            limit: number;
            /** Currency for the amount limit above */
            currency: "USD";
            /** Time period in minutes. Minimum 1, Maximum 43,200. */
            timeframe: number;
        };
    } | {
        kind: "TransactionCountVelocity";
        configuration: {
            /** Count limit */
            limit: number;
            /** Time period in minutes. Minimum 1, Maximum 43,200. */
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
    } | {
        kind: "TravelRuleTransactionPrescreening";
        configuration: {
            vendor: "Notabene";
            autoTriggerTimeoutSeconds: number;
            autoClearAfterDeliveredTimeoutSeconds?: number | undefined;
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
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
            activityKind: "Alias:Modify";
            /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
                    /** Whether the initiator of the activity can participate in the approval. */
                    initiatorCanApprove?: boolean | undefined;
                }[];
                autoRejectTimeout?: (number | undefined) | null;
            } | {
                kind: "Block";
            };
            filters?: {} | undefined;
        } | {
            id: string;
            name: string;
            status: "Active" | "Archived";
            dateCreated?: string | undefined;
            dateUpdated?: string | undefined;
            activityKind: "Permissions:Assign";
            /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
                    /** Whether the initiator of the activity can participate in the approval. */
                    initiatorCanApprove?: boolean | undefined;
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
            /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
                    /** Whether the initiator of the activity can participate in the approval. */
                    initiatorCanApprove?: boolean | undefined;
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
            /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
                    /** Whether the initiator of the activity can participate in the approval. */
                    initiatorCanApprove?: boolean | undefined;
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
                    /** Whitelisted recipient addresses */
                    addresses: string[];
                };
            } | {
                kind: "TransactionAmountLimit";
                configuration: {
                    /** Amount limit in `currency` */
                    limit: number;
                    /** Fiat currency, currently only `USD` */
                    currency: "USD";
                };
            } | {
                kind: "TransactionAmountVelocity";
                configuration: {
                    /** Amount limit in `currency` */
                    limit: number;
                    /** Currency for the amount limit above */
                    currency: "USD";
                    /** Time period in minutes. Minimum 1, Maximum 43,200. */
                    timeframe: number;
                };
            } | {
                kind: "TransactionCountVelocity";
                configuration: {
                    /** Count limit */
                    limit: number;
                    /** Time period in minutes. Minimum 1, Maximum 43,200. */
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
            } | {
                kind: "TravelRuleTransactionPrescreening";
                configuration: {
                    vendor: "Notabene";
                    autoTriggerTimeoutSeconds: number;
                    autoClearAfterDeliveredTimeoutSeconds?: number | undefined;
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
                    /** Whether the initiator of the activity can participate in the approval. */
                    initiatorCanApprove?: boolean | undefined;
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
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
                requester: {
                    userId: string;
                    tokenId?: string | undefined;
                };
                requestBody: {
                    kind: "Native";
                    /** The destination address. */
                    to: string;
                    /** The amount of native tokens to transfer in minimum denomination. */
                    amount: string;
                    /** The memo or destination tag. `Stellar`, `TON` and `XrpLedger` support `memo`. Not valid for other networks. */
                    memo?: string | undefined;
                    /** The priority that determines the fees paid for the transfer. All EVM compatible networks and Bitcoin support `priority`. Not supported for other networks. It uses the [estimate fees](https://docs.dfns.co/api-reference/networks/estimate-fees) API to calculate the transfer fees. When not specified, defaults to `Standard` priority. */
                    priority?: ("Slow" | "Standard" | "Fast") | undefined;
                    /** Whether to create the destination account on chains that require account creation (e.g., Stellar, Kadena). Only valid for chains that require the receiver account to exist before transfer. */
                    createDestinationAccount?: boolean | undefined;
                    /** Optional field for Canton, if true it will create a transfer offer. */
                    offer?: boolean | undefined;
                    /** Optional field for Canton, especially useful in the context of offers */
                    expiresAt?: string | undefined;
                    /** For multi-chain networks (e.g., Kadena), specify the destination chain for cross-chain transfers. */
                    targetChain?: string | undefined;
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
                    kind: "Hip17";
                    /** The token to transfer. */
                    tokenId: string;
                    serialNumber: string;
                    /** The destination address. */
                    to: string;
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
                    memo?: string | undefined;
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
                    /** If `true`, pay to create the associated token account for the recipient if it doesn't exist. Defaults to `false`. */
                    createDestinationAccount?: boolean | undefined;
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
                    memo?: string | undefined;
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
                feeSponsorId?: string | undefined;
            } | undefined;
            transactionRequest?: {
                id: string;
                walletId: string;
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
                requester: {
                    userId: string;
                    tokenId?: string | undefined;
                };
                requestBody: {
                    kind: "Transaction";
                    /** The unsigned hex encoded transaction. EVM transactions also accept JSON objects. */
                    transaction: string | {};
                    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                    externalId?: string | undefined;
                } | {
                    kind: "Evm";
                    to?: string | undefined;
                    value?: (string | string) | undefined;
                    data?: string | undefined;
                    /** The current nonce of the signer EOA. */
                    nonce?: (number | string | string) | undefined;
                    gasLimit?: (string | string) | undefined;
                    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
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
                    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                    externalId?: string | undefined;
                } | {
                    kind: "Psbt";
                    /** The hex encoded PSBT. */
                    psbt: string;
                    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                    externalId?: string | undefined;
                } | {
                    kind: "Json";
                    transaction: {};
                    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                    externalId?: string | undefined;
                } | {
                    kind: "SignDocDirect";
                    signDoc: string;
                    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                    externalId?: string | undefined;
                } | {
                    kind: "UserOperations";
                    userOperations: {
                        /** The destination address or target contract. */
                        to: string;
                        /** The amount of native tokens to transfer in minimum denomination. */
                        value?: string | undefined;
                        /** ABI encoded function call data in hex format. */
                        data?: string | undefined;
                    }[];
                    /** A fee sponsor id to sponsor the transaction fee by another wallet. (read more [here](https://docs.dfns.co/features/fee-sponsors)) */
                    feeSponsorId: string;
                    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                    externalId?: string | undefined;
                } | {
                    kind: "SettleOffer";
                    txHash: string;
                    decision: "Accept" | "Reject";
                    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
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
            } | undefined;
            signatureRequest?: {
                id: string;
                keyId: string;
                requester: {
                    userId: string;
                    tokenId?: string | undefined;
                };
                requestBody: {
                    kind: "Hash";
                    /** 32-byte hash in hex encoded format. */
                    hash: string;
                    /** Required when signing with a Schnorr key. Specify the merkle root for tweaking the signing key, or the empty string "" to tweak with the default merkle root. */
                    taprootMerkleRoot?: string | undefined;
                    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                    externalId?: string | undefined;
                } | {
                    kind: "Message";
                    /** An arbitrary hex encoded message. */
                    message: string;
                    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
                    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                    externalId?: string | undefined;
                } | {
                    kind: "Transaction";
                    /** The unsigned hex-encoded transaction. */
                    transaction: string;
                    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
                    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                    externalId?: string | undefined;
                } | {
                    kind: "Psbt";
                    /** The hex encoded PSBT. */
                    psbt: string;
                    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                    externalId?: string | undefined;
                } | {
                    kind: "Bip322";
                    /** The generic message hex encoded. */
                    message: string;
                    /** Defaults to Simple if not present. The formatted signature is returned in the `signedData` field in the response. */
                    format?: ("Simple" | "Full") | undefined;
                    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                    externalId?: string | undefined;
                } | {
                    kind: "PactCommand";
                    /** The Pact command JSON, serialized into a string. */
                    command: string;
                    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                    externalId?: string | undefined;
                } | {
                    kind: "SignDocDirect";
                    /** The hex encoded `SignDoc` Protobuf. */
                    signDoc: string;
                    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
                    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                    externalId?: string | undefined;
                } | {
                    kind: "Cip8";
                    /** The generic message hex encoded. */
                    payload?: string | undefined;
                    /** Allows an application to ask the user to sign some extra data but NOT put it inside the COSE structure (only as part of the data to sign). */
                    externalAad?: string | undefined;
                    context: "Signature1";
                    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                txHash?: string | undefined;
                fee?: string | undefined;
                approvalId?: string | undefined;
                dateRequested: string;
                datePolicyResolved?: string | undefined;
                dateSigned?: string | undefined;
                dateConfirmed?: string | undefined;
                externalId?: string | undefined;
            } | undefined;
            swapRequest?: {
                /** Swap id. */
                id: string;
                /** Id of the quote this swap is based on. */
                quoteId: string;
                /** Optional user-defined reference for this Swap. */
                reference: string | null;
                /** Id of the Dfns wallet spending the sourceAsset. */
                walletId: string;
                /** Id of the Dfns wallet receiving the target asset. Currently this value must be the same as the `walletId`. */
                targetWalletId: string;
                /** Swap status. */
                status: "PendingPolicyApproval" | "InProgress" | "Completed" | "Failed" | "Rejected";
                /** Swap provider. */
                provider: "UniswapX" | "UniswapClassic";
                /** The source asset for this swap transaction. */
                quotedSourceAsset: ({
                    kind: "Native";
                    amount: string;
                } | {
                    kind: "Erc20";
                    contract: string;
                    amount: string;
                }) & {
                    metadata: {
                        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals: number;
                        tid?: string | undefined;
                    };
                };
                /** The target asset for this swap transaction. */
                quotedTargetAsset: ({
                    kind: "Native";
                    amount: string;
                } | {
                    kind: "Erc20";
                    contract: string;
                    amount: string;
                }) & {
                    metadata: {
                        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
                        name?: string | undefined;
                        symbol?: string | undefined;
                        decimals: number;
                        tid?: string | undefined;
                    };
                };
                /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you are willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. */
                slippageBps: number;
                /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date (must be UTC). When the swap was initiated. */
                dateCreated: string;
                /** The full request used for initiating this swap. */
                requestBody: {
                    /** Quote to use for this swap. */
                    quoteId: string;
                    /** An optional reference for this Swap. */
                    reference?: string | undefined;
                    /** Provided for this swap. Used for attesting that the swap is being created with the same parameters as the quote. */
                    provider: "UniswapX" | "UniswapClassic";
                    /** Id of the Dfns wallet spending the sourceAsset. Used for attesting that the swap is being created with the same parameters as the quote. */
                    walletId: string;
                    /** Id of the Dfns wallet receiving the target asset. Currently this value must be the same as the `walletId`. Used for attesting that the swap is being created with the same parameters as the quote. */
                    targetWalletId?: string | undefined;
                    /** The slippage tolerance for this trade in [basis point](https://en.wikipedia.org/wiki/Basis_point) (BPS). Slippage tolerance defines the maximum price difference you are willing to accept during a trade from the estimated quote, ensuring you still receive at least a minimum number of tokens if the price shifts. One basis point equals one-hundredth of a percentage point, or 0.01%. Used for attesting that the swap is being created with the same parameters as the quote.  */
                    slippageBps: number;
                    /** The source asset that will be spent on the Swap transaction. Used for attesting that the swap is being created with the same parameters as the quote. */
                    sourceAsset: {
                        kind: "Native";
                        amount: string;
                    } | {
                        kind: "Erc20";
                        contract: string;
                        amount: string;
                    };
                    /** The target asset that will be received with the Swap transaction. Used for attesting that the swap is being created with the same parameters as the quote. */
                    targetAsset: {
                        kind: "Native";
                        amount: string;
                    } | {
                        kind: "Erc20";
                        contract: string;
                        amount: string;
                    };
                } | {};
                requester: {
                    /** User (could be a service account) who requested the quote. */
                    userId: string;
                    /** Service Account token or Personal Access token used when requesting the quote. */
                    tokenId?: string | undefined;
                };
            } | undefined;
        } | {
            kind: "Wallets:IncomingTransaction";
            blockchainEvent: {
                walletId: string;
                direction: "In" | "Out";
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
                kind: "Aip21Transfer";
                metadataAddress: string;
                from: string;
                to: string;
                value: string;
                fee?: string | undefined;
            } | {
                walletId: string;
                direction: "In" | "Out";
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
                kind: "AssetTransfer";
                assetId: string;
                from?: string | undefined;
                to?: string | undefined;
                value: string;
                fee?: string | undefined;
            } | {
                walletId: string;
                direction: "In" | "Out";
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
                kind: "CoinTransfer";
                coin: string;
                from: string;
                tos?: string[] | undefined;
                value: string;
                fee?: string | undefined;
            } | {
                walletId: string;
                direction: "In" | "Out";
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
                kind: "Hip17Transfer";
                tokenId: string;
                serialNumber: string;
                from?: string | undefined;
                to?: string | undefined;
                fee?: string | undefined;
            } | {
                walletId: string;
                direction: "In" | "Out";
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
                kind: "HtsTransfer";
                tokenId?: string | undefined;
                froms: string[];
                tos: string[];
                value: string;
                fee?: string | undefined;
            } | {
                walletId: string;
                direction: "In" | "Out";
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
                kind: "Kip5Transfer";
                from?: string | undefined;
                to?: string | undefined;
                value: string;
                fee?: string | undefined;
                module: string;
                sourceChain?: string | undefined;
                targetChain?: string | undefined;
            } | {
                walletId: string;
                direction: "In" | "Out";
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
                kind: "LockedCoinTransfer";
                coin: string;
                from: string;
                tos?: string[] | undefined;
                value: string;
                fee?: string | undefined;
            } | {
                walletId: string;
                direction: "In" | "Out";
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
                    activityKind: "Alias:Modify";
                    /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
                            /** Whether the initiator of the activity can participate in the approval. */
                            initiatorCanApprove?: boolean | undefined;
                        }[];
                        autoRejectTimeout?: (number | undefined) | null;
                    } | {
                        kind: "Block";
                    };
                    filters?: {} | undefined;
                } | {
                    id: string;
                    name: string;
                    status: "Active" | "Archived";
                    dateCreated?: string | undefined;
                    dateUpdated?: string | undefined;
                    activityKind: "Permissions:Assign";
                    /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
                            /** Whether the initiator of the activity can participate in the approval. */
                            initiatorCanApprove?: boolean | undefined;
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
                    /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
                            /** Whether the initiator of the activity can participate in the approval. */
                            initiatorCanApprove?: boolean | undefined;
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
                    /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
                            /** Whether the initiator of the activity can participate in the approval. */
                            initiatorCanApprove?: boolean | undefined;
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
                            /** Whitelisted recipient addresses */
                            addresses: string[];
                        };
                    } | {
                        kind: "TransactionAmountLimit";
                        configuration: {
                            /** Amount limit in `currency` */
                            limit: number;
                            /** Fiat currency, currently only `USD` */
                            currency: "USD";
                        };
                    } | {
                        kind: "TransactionAmountVelocity";
                        configuration: {
                            /** Amount limit in `currency` */
                            limit: number;
                            /** Currency for the amount limit above */
                            currency: "USD";
                            /** Time period in minutes. Minimum 1, Maximum 43,200. */
                            timeframe: number;
                        };
                    } | {
                        kind: "TransactionCountVelocity";
                        configuration: {
                            /** Count limit */
                            limit: number;
                            /** Time period in minutes. Minimum 1, Maximum 43,200. */
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
                    } | {
                        kind: "TravelRuleTransactionPrescreening";
                        configuration: {
                            vendor: "Notabene";
                            autoTriggerTimeoutSeconds: number;
                            autoClearAfterDeliveredTimeoutSeconds?: number | undefined;
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
                            /** Whether the initiator of the activity can participate in the approval. */
                            initiatorCanApprove?: boolean | undefined;
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
        } | {
            kind: "Alias:Modify";
            changeRequest: {
                id: string;
                kind: "Alias";
                body: {
                    entityId: string;
                    alias: string;
                    operationKind: "Create";
                    description?: string | undefined;
                    values: {
                        add: {
                            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
                            value: string;
                            kind: "Eoa";
                        }[];
                    };
                } | {
                    entityId: string;
                    alias: string;
                    operationKind: "Update";
                    description?: ((string | undefined) | null) | undefined;
                    values: {
                        add: {
                            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
                            value: string;
                            kind: "Eoa";
                        }[];
                        remove: {
                            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
                            value: string;
                            kind: "Eoa";
                        }[];
                    };
                } | {
                    entityId: string;
                    alias: string;
                    operationKind: "Delete";
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
        activityKind: "Alias:Modify";
        /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
                /** Whether the initiator of the activity can participate in the approval. */
                initiatorCanApprove?: boolean | undefined;
            }[];
            autoRejectTimeout?: (number | undefined) | null;
        } | {
            kind: "Block";
        };
        filters?: {} | undefined;
    } | {
        id: string;
        name: string;
        status: "Active" | "Archived";
        dateCreated?: string | undefined;
        dateUpdated?: string | undefined;
        activityKind: "Permissions:Assign";
        /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
                /** Whether the initiator of the activity can participate in the approval. */
                initiatorCanApprove?: boolean | undefined;
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
        /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
                /** Whether the initiator of the activity can participate in the approval. */
                initiatorCanApprove?: boolean | undefined;
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
        /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
                /** Whether the initiator of the activity can participate in the approval. */
                initiatorCanApprove?: boolean | undefined;
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
                /** Whitelisted recipient addresses */
                addresses: string[];
            };
        } | {
            kind: "TransactionAmountLimit";
            configuration: {
                /** Amount limit in `currency` */
                limit: number;
                /** Fiat currency, currently only `USD` */
                currency: "USD";
            };
        } | {
            kind: "TransactionAmountVelocity";
            configuration: {
                /** Amount limit in `currency` */
                limit: number;
                /** Currency for the amount limit above */
                currency: "USD";
                /** Time period in minutes. Minimum 1, Maximum 43,200. */
                timeframe: number;
            };
        } | {
            kind: "TransactionCountVelocity";
            configuration: {
                /** Count limit */
                limit: number;
                /** Time period in minutes. Minimum 1, Maximum 43,200. */
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
        } | {
            kind: "TravelRuleTransactionPrescreening";
            configuration: {
                vendor: "Notabene";
                autoTriggerTimeoutSeconds: number;
                autoClearAfterDeliveredTimeoutSeconds?: number | undefined;
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
                /** Whether the initiator of the activity can participate in the approval. */
                initiatorCanApprove?: boolean | undefined;
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
                activityKind: "Alias:Modify";
                /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
                        /** Whether the initiator of the activity can participate in the approval. */
                        initiatorCanApprove?: boolean | undefined;
                    }[];
                    autoRejectTimeout?: (number | undefined) | null;
                } | {
                    kind: "Block";
                };
                filters?: {} | undefined;
            } | {
                id: string;
                name: string;
                status: "Active" | "Archived";
                dateCreated?: string | undefined;
                dateUpdated?: string | undefined;
                activityKind: "Permissions:Assign";
                /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
                        /** Whether the initiator of the activity can participate in the approval. */
                        initiatorCanApprove?: boolean | undefined;
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
                /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
                        /** Whether the initiator of the activity can participate in the approval. */
                        initiatorCanApprove?: boolean | undefined;
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
                /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
                        /** Whether the initiator of the activity can participate in the approval. */
                        initiatorCanApprove?: boolean | undefined;
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
                        /** Whitelisted recipient addresses */
                        addresses: string[];
                    };
                } | {
                    kind: "TransactionAmountLimit";
                    configuration: {
                        /** Amount limit in `currency` */
                        limit: number;
                        /** Fiat currency, currently only `USD` */
                        currency: "USD";
                    };
                } | {
                    kind: "TransactionAmountVelocity";
                    configuration: {
                        /** Amount limit in `currency` */
                        limit: number;
                        /** Currency for the amount limit above */
                        currency: "USD";
                        /** Time period in minutes. Minimum 1, Maximum 43,200. */
                        timeframe: number;
                    };
                } | {
                    kind: "TransactionCountVelocity";
                    configuration: {
                        /** Count limit */
                        limit: number;
                        /** Time period in minutes. Minimum 1, Maximum 43,200. */
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
                } | {
                    kind: "TravelRuleTransactionPrescreening";
                    configuration: {
                        vendor: "Notabene";
                        autoTriggerTimeoutSeconds: number;
                        autoClearAfterDeliveredTimeoutSeconds?: number | undefined;
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
                        /** Whether the initiator of the activity can participate in the approval. */
                        initiatorCanApprove?: boolean | undefined;
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
    activityKind: "Alias:Modify";
    /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    } | {
        kind: "Block";
    };
    filters?: {} | undefined;
} | {
    name: string;
    activityKind: "Permissions:Assign";
    /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
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
    /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
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
    /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
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
            /** Whitelisted recipient addresses */
            addresses: string[];
        };
    } | {
        kind: "TransactionAmountLimit";
        configuration: {
            /** Amount limit in `currency` */
            limit: number;
            /** Fiat currency, currently only `USD` */
            currency: "USD";
        };
    } | {
        kind: "TransactionAmountVelocity";
        configuration: {
            /** Amount limit in `currency` */
            limit: number;
            /** Currency for the amount limit above */
            currency: "USD";
            /** Time period in minutes. Minimum 1, Maximum 43,200. */
            timeframe: number;
        };
    } | {
        kind: "TransactionCountVelocity";
        configuration: {
            /** Count limit */
            limit: number;
            /** Time period in minutes. Minimum 1, Maximum 43,200. */
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
    } | {
        kind: "TravelRuleTransactionPrescreening";
        configuration: {
            vendor: "Notabene";
            autoTriggerTimeoutSeconds: number;
            autoClearAfterDeliveredTimeoutSeconds?: number | undefined;
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
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
    activityKind: "Alias:Modify";
    /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    } | {
        kind: "Block";
    };
    filters?: {} | undefined;
} | {
    id: string;
    name: string;
    status: "Active" | "Archived";
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    activityKind: "Permissions:Assign";
    /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
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
    /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
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
    /** This rule will always be triggered, meaning that if this rule is defined on a policy, the policy will always trigger the policy action, regardless of the activity details. */
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
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
            /** Whitelisted recipient addresses */
            addresses: string[];
        };
    } | {
        kind: "TransactionAmountLimit";
        configuration: {
            /** Amount limit in `currency` */
            limit: number;
            /** Fiat currency, currently only `USD` */
            currency: "USD";
        };
    } | {
        kind: "TransactionAmountVelocity";
        configuration: {
            /** Amount limit in `currency` */
            limit: number;
            /** Currency for the amount limit above */
            currency: "USD";
            /** Time period in minutes. Minimum 1, Maximum 43,200. */
            timeframe: number;
        };
    } | {
        kind: "TransactionCountVelocity";
        configuration: {
            /** Count limit */
            limit: number;
            /** Time period in minutes. Minimum 1, Maximum 43,200. */
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
    } | {
        kind: "TravelRuleTransactionPrescreening";
        configuration: {
            vendor: "Notabene";
            autoTriggerTimeoutSeconds: number;
            autoClearAfterDeliveredTimeoutSeconds?: number | undefined;
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
            /** Whether the initiator of the activity can participate in the approval. */
            initiatorCanApprove?: boolean | undefined;
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

