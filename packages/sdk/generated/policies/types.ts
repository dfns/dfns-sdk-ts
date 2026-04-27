export type ArchivePolicyParams = {
    policyId: string;
};

export type ArchivePolicyResponse = {
    id: string;
    name: string;
    status: "Active" | "Archived";
    dateCreated?: string | undefined;
    dateUpdated?: string | undefined;
    activityKind: "Registry:Addresses:Modify";
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
    activityKind: "Registry:ContractSchemas:Modify";
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
            /** Value sent to Chainalysis as the "user ID". Used by Chainalysis for grouping transaction screenings.
              
            This template can include variables, included in brackets. The following variables are currently supported:  `{wallet.id}` and `{wallet.externalId}`.
            As an example, if you set `userIdTemplate: "dfns:{wallet.id}_{wallet.externalId}"`, when your wallet receives a transaction that gets screened by a Chainalysis policy, the "user ID" sent to Chainalysis will be `dfns:wa-xxx_yyy` (`wa-xxx` being the wallet ID, and `yyy` being the wallet external ID). */
            userIdTemplate?: string | undefined;
            fallbackBehaviours: {
                skipUnscreenableTransaction: boolean;
                skipUnsupportedNetwork: boolean;
                skipUnsupportedAsset: boolean;
                skipChainalysisFailure: boolean;
            };
        };
    } | {
        kind: "GlobalLedgerTransactionPrescreening";
        configuration: {
            /** Risk score threshold (0-100). Policy triggers if address/transaction risk score >= threshold */
            riskScoreThreshold: number;
            fallbackBehaviours: {
                /** skip all wallet requests that cannot be screened (eg. raw signatures) */
                skipUnscreenableTransaction: boolean;
                /** skip transfer requests to a network not supported yet in our GlobalLedger integration */
                skipUnsupportedNetwork: boolean;
                /** skip transfer requests of an asset not supported by our GlobalLedger integration */
                skipUnsupportedAsset: boolean;
                /** skips any errors from GlobalLedger API request */
                skipGlobalLedgerFailure: boolean;
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
            /** Value sent to Chainalysis as the "user ID". Used by Chainalysis for grouping transaction screenings.
              
            This template can include variables, included in brackets. The following variables are currently supported:  `{wallet.id}` and `{wallet.externalId}`.
            As an example, if you set `userIdTemplate: "dfns:{wallet.id}_{wallet.externalId}"`, when your wallet receives a transaction that gets screened by a Chainalysis policy, the "user ID" sent to Chainalysis will be `dfns:wa-xxx_yyy` (`wa-xxx` being the wallet ID, and `yyy` being the wallet external ID). */
            userIdTemplate?: string | undefined;
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
            /** Transfer id. */
            id: string;
            /** The source wallet for this tranfer. */
            walletId: string;
            /** The blockchain network this transfer is on. */
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
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
        } | undefined;
        transactionRequest?: {
            /** Transaction id. */
            id: string;
            /** Wallet id. */
            walletId: string;
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            /** The user who initiated the request. */
            requester: {
                /** User id. */
                userId: string;
                /** Token id. */
                tokenId?: string | undefined;
            };
            requestBody: {
                kind: "Transaction";
                /** The unsigned hex encoded transaction or JSON transactions for compatible networks. */
                transaction: string | {};
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "Psbt";
                /** The hex encoded PSBT. */
                psbt: string;
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
                kind: "FunctionCall";
                /** Function call arguments */
                call: {};
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "TransferPreapproval";
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
                kind: "SettleOffer";
                txHash: string;
                decision: "Accept" | "Reject";
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "ActivateAccount";
                args?: {} | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "CancelTransaction";
                txHash?: string | undefined;
                signedTx: string;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "SpeedUpTransaction";
                txHash: string;
                signedTx: string;
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
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "Message";
                /** An arbitrary hex encoded message. */
                message: string;
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "Transaction";
                /** The unsigned hex encoded transaction or JSON object for compatible networks */
                transaction: string | {};
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "Eip191";
                /** Hex-encoded message. */
                message: string;
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
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
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
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
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
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
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "Psbt";
                /** The hex encoded PSBT. */
                psbt: string;
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "Bip322";
                /** The generic message hex encoded. */
                message: string;
                /** Defaults to Simple if not present. The formatted signature is returned in the `signedData` field in the response. */
                format?: ("Simple" | "Full") | undefined;
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "SignDocDirect";
                /** The hex encoded `SignDoc` Protobuf. */
                signDoc: string;
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
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
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
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
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
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
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "StellarFeeBumpTransaction";
                innerTransaction: string;
                transactionReference: string;
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
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
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
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
                    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
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
                    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
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
            /** The user who initiated the request. */
            requester: {
                /** User id. */
                userId: string;
                /** Token id. */
                tokenId?: string | undefined;
            };
            /** The failure reason, if any. Only present when status is Failed. */
            failureReason?: string | undefined;
        } | undefined;
    } | {
        kind: "Wallets:IncomingTransaction";
        blockchainEvent: {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
                    quotes?: {
                        [x: string]: number;
                    } | undefined;
                } | undefined;
            };
            kind: "Cip56Transfer";
            instrumentId: string;
            instrumentAdmin: string;
            from: string;
            to: string;
            value: string;
            fee?: string | undefined;
            memo?: string | undefined;
        } | {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
                    quotes?: {
                        [x: string]: number;
                    } | undefined;
                } | undefined;
            };
            kind: "Cis2Transfer";
            from?: string | undefined;
            to?: string | undefined;
            value: string;
            tokenAddress: string;
            fee?: string | undefined;
        } | {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
                    quotes?: {
                        [x: string]: number;
                    } | undefined;
                } | undefined;
            };
            kind: "Cis7Transfer";
            from?: string | undefined;
            to?: string | undefined;
            value: string;
            fee?: string | undefined;
            tokenId: string;
            memo?: string | undefined;
        } | {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
                    quotes?: {
                        [x: string]: number;
                    } | undefined;
                } | undefined;
            };
            kind: "Erc7984Transfer";
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
                    quotes?: {
                        [x: string]: number;
                    } | undefined;
                } | undefined;
            };
            kind: "IouTransfer";
            currency: string;
            issuer: string;
            from?: string | undefined;
            to?: string | undefined;
            value: string;
            fee?: string | undefined;
            memo?: string | undefined;
        } | {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
                    quotes?: {
                        [x: string]: number;
                    } | undefined;
                } | undefined;
            };
            kind: "Xls33Transfer";
            issuanceId: string;
            from?: string | undefined;
            to?: string | undefined;
            value: string;
            fee?: string | undefined;
            memo?: string | undefined;
        } | {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
                    quotes?: {
                        [x: string]: number;
                    } | undefined;
                } | undefined;
            };
            kind: "Snip2Transfer";
            contract: string;
            from: string;
            to: string;
            value: string;
            fee?: string | undefined;
        } | {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
                    quotes?: {
                        [x: string]: number;
                    } | undefined;
                } | undefined;
            };
            kind: "Snip3Transfer";
            contract: string;
            from: string;
            to: string;
            tokenId: string;
            fee?: string | undefined;
        } | {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            /** The user who initiated the change request. */
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
                activityKind: "Registry:Addresses:Modify";
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
                        /** Whether service accounts can participate in the approval for this group. */
                        serviceAccountsCanApprove?: boolean | undefined;
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
                        /** Whether service accounts can participate in the approval for this group. */
                        serviceAccountsCanApprove?: boolean | undefined;
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
                        /** Whether service accounts can participate in the approval for this group. */
                        serviceAccountsCanApprove?: boolean | undefined;
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
                        /** Whether service accounts can participate in the approval for this group. */
                        serviceAccountsCanApprove?: boolean | undefined;
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
                activityKind: "Registry:ContractSchemas:Modify";
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
                        /** Whether service accounts can participate in the approval for this group. */
                        serviceAccountsCanApprove?: boolean | undefined;
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
                        /** Value sent to Chainalysis as the "user ID". Used by Chainalysis for grouping transaction screenings.
                          
                        This template can include variables, included in brackets. The following variables are currently supported:  `{wallet.id}` and `{wallet.externalId}`.
                        As an example, if you set `userIdTemplate: "dfns:{wallet.id}_{wallet.externalId}"`, when your wallet receives a transaction that gets screened by a Chainalysis policy, the "user ID" sent to Chainalysis will be `dfns:wa-xxx_yyy` (`wa-xxx` being the wallet ID, and `yyy` being the wallet external ID). */
                        userIdTemplate?: string | undefined;
                        fallbackBehaviours: {
                            skipUnscreenableTransaction: boolean;
                            skipUnsupportedNetwork: boolean;
                            skipUnsupportedAsset: boolean;
                            skipChainalysisFailure: boolean;
                        };
                    };
                } | {
                    kind: "GlobalLedgerTransactionPrescreening";
                    configuration: {
                        /** Risk score threshold (0-100). Policy triggers if address/transaction risk score >= threshold */
                        riskScoreThreshold: number;
                        fallbackBehaviours: {
                            /** skip all wallet requests that cannot be screened (eg. raw signatures) */
                            skipUnscreenableTransaction: boolean;
                            /** skip transfer requests to a network not supported yet in our GlobalLedger integration */
                            skipUnsupportedNetwork: boolean;
                            /** skip transfer requests of an asset not supported by our GlobalLedger integration */
                            skipUnsupportedAsset: boolean;
                            /** skips any errors from GlobalLedger API request */
                            skipGlobalLedgerFailure: boolean;
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
                        /** Whether service accounts can participate in the approval for this group. */
                        serviceAccountsCanApprove?: boolean | undefined;
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
                        /** Value sent to Chainalysis as the "user ID". Used by Chainalysis for grouping transaction screenings.
                          
                        This template can include variables, included in brackets. The following variables are currently supported:  `{wallet.id}` and `{wallet.externalId}`.
                        As an example, if you set `userIdTemplate: "dfns:{wallet.id}_{wallet.externalId}"`, when your wallet receives a transaction that gets screened by a Chainalysis policy, the "user ID" sent to Chainalysis will be `dfns:wa-xxx_yyy` (`wa-xxx` being the wallet ID, and `yyy` being the wallet external ID). */
                        userIdTemplate?: string | undefined;
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
            /** ID of the change request. */
            id: string;
            /** The user who initiated the change request. */
            requester: {
                userId: string;
                tokenId?: string | undefined;
                appId?: string | undefined;
            };
            /** Current status of the change request. */
            status: "Applied" | "Failed" | "Pending" | "Rejected";
            /** ID of the entity being changed. */
            entityId: string;
            dateCreated: string;
            dateResolved?: string | undefined;
            approvalId?: string | undefined;
            kind: "Permission";
            operationKind: "Update";
            body: {
                /** ID of the permission (also referred to as "role" in the dashboard). */
                id: string;
                /** Human-readable name of the permission (role). */
                name: string;
                /** Current status of the permission. */
                status: "Active";
                /** List of API operations this permission grants access to. See [Permissions List](https://docs.dfns.co/core-concepts/roles-and-permissions#list-of-permissions) for available operations. */
                operations: string[];
                /** Whether this permission is system-managed and cannot be modified. */
                isImmutable: boolean;
                /** Whether this permission has been archived (soft-deleted). */
                isArchived: boolean;
            };
        };
    } | {
        kind: "Permissions:Assign";
        changeRequest: {
            /** ID of the change request. */
            id: string;
            /** The user who initiated the change request. */
            requester: {
                userId: string;
                tokenId?: string | undefined;
                appId?: string | undefined;
            };
            /** Current status of the change request. */
            status: "Applied" | "Failed" | "Pending" | "Rejected";
            /** ID of the entity being changed. */
            entityId: string;
            dateCreated: string;
            dateResolved?: string | undefined;
            approvalId?: string | undefined;
            kind: "Assignment";
            operationKind: "Create" | "Delete";
            body: {
                /** ID of the permission assignment. */
                id: string;
                /** ID of the permission (also referred to as "role" in the dashboard). */
                permissionId: string;
                /** ID of the identity the permission is assigned to. Can be a user ID, a service account ID, or a personal access token (PAT) ID. */
                identityId: string;
                /** Whether this assignment is system-managed and cannot be modified. */
                isImmutable: boolean;
            };
        };
    } | {
        kind: "Registry:Addresses:Modify";
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
                        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                        memo?: string | undefined;
                        value: string;
                    }[];
                };
            } | {
                entityId: string;
                alias: string;
                operationKind: "Update";
                description?: ((string | undefined) | null) | undefined;
                values: {
                    add: {
                        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                        memo?: string | undefined;
                        value: string;
                    }[];
                    remove: {
                        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                        memo?: string | undefined;
                        value: string;
                    }[];
                };
            } | {
                entityId: string;
                alias: string;
                operationKind: "Delete";
            };
        };
    } | {
        kind: "Registry:ContractSchemas:Modify";
        changeRequest: {
            id: string;
            kind: "SmartContract";
            operationKind: "Create" | "Delete";
            body: {
                id: string;
                name: string;
                description?: string | undefined;
                network: "Adi" | "AdiTestnet" | "AdiTestnetAb" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Ink" | "InkSepolia" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Sonic" | "SonicTestnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Xdc" | "XdcApothem";
                address: string;
                schema?: any;
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
        context?: any | undefined;
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
    activityKind: "Registry:Addresses:Modify";
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
    activityKind: "Registry:ContractSchemas:Modify";
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    } | {
        kind: "Block";
    };
    filters?: {} | undefined;
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
            /** Value sent to Chainalysis as the "user ID". Used by Chainalysis for grouping transaction screenings.
              
            This template can include variables, included in brackets. The following variables are currently supported:  `{wallet.id}` and `{wallet.externalId}`.
            As an example, if you set `userIdTemplate: "dfns:{wallet.id}_{wallet.externalId}"`, when your wallet receives a transaction that gets screened by a Chainalysis policy, the "user ID" sent to Chainalysis will be `dfns:wa-xxx_yyy` (`wa-xxx` being the wallet ID, and `yyy` being the wallet external ID). */
            userIdTemplate?: string | undefined;
            fallbackBehaviours: {
                skipUnscreenableTransaction: boolean;
                skipUnsupportedNetwork: boolean;
                skipUnsupportedAsset: boolean;
                skipChainalysisFailure: boolean;
            };
        };
    } | {
        kind: "GlobalLedgerTransactionPrescreening";
        configuration: {
            /** Risk score threshold (0-100). Policy triggers if address/transaction risk score >= threshold */
            riskScoreThreshold: number;
            fallbackBehaviours: {
                /** skip all wallet requests that cannot be screened (eg. raw signatures) */
                skipUnscreenableTransaction: boolean;
                /** skip transfer requests to a network not supported yet in our GlobalLedger integration */
                skipUnsupportedNetwork: boolean;
                /** skip transfer requests of an asset not supported by our GlobalLedger integration */
                skipUnsupportedAsset: boolean;
                /** skips any errors from GlobalLedger API request */
                skipGlobalLedgerFailure: boolean;
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
            /** Value sent to Chainalysis as the "user ID". Used by Chainalysis for grouping transaction screenings.
              
            This template can include variables, included in brackets. The following variables are currently supported:  `{wallet.id}` and `{wallet.externalId}`.
            As an example, if you set `userIdTemplate: "dfns:{wallet.id}_{wallet.externalId}"`, when your wallet receives a transaction that gets screened by a Chainalysis policy, the "user ID" sent to Chainalysis will be `dfns:wa-xxx_yyy` (`wa-xxx` being the wallet ID, and `yyy` being the wallet external ID). */
            userIdTemplate?: string | undefined;
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
    activityKind: "Registry:Addresses:Modify";
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
    activityKind: "Registry:ContractSchemas:Modify";
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
            /** Value sent to Chainalysis as the "user ID". Used by Chainalysis for grouping transaction screenings.
              
            This template can include variables, included in brackets. The following variables are currently supported:  `{wallet.id}` and `{wallet.externalId}`.
            As an example, if you set `userIdTemplate: "dfns:{wallet.id}_{wallet.externalId}"`, when your wallet receives a transaction that gets screened by a Chainalysis policy, the "user ID" sent to Chainalysis will be `dfns:wa-xxx_yyy` (`wa-xxx` being the wallet ID, and `yyy` being the wallet external ID). */
            userIdTemplate?: string | undefined;
            fallbackBehaviours: {
                skipUnscreenableTransaction: boolean;
                skipUnsupportedNetwork: boolean;
                skipUnsupportedAsset: boolean;
                skipChainalysisFailure: boolean;
            };
        };
    } | {
        kind: "GlobalLedgerTransactionPrescreening";
        configuration: {
            /** Risk score threshold (0-100). Policy triggers if address/transaction risk score >= threshold */
            riskScoreThreshold: number;
            fallbackBehaviours: {
                /** skip all wallet requests that cannot be screened (eg. raw signatures) */
                skipUnscreenableTransaction: boolean;
                /** skip transfer requests to a network not supported yet in our GlobalLedger integration */
                skipUnsupportedNetwork: boolean;
                /** skip transfer requests of an asset not supported by our GlobalLedger integration */
                skipUnsupportedAsset: boolean;
                /** skips any errors from GlobalLedger API request */
                skipGlobalLedgerFailure: boolean;
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
            /** Value sent to Chainalysis as the "user ID". Used by Chainalysis for grouping transaction screenings.
              
            This template can include variables, included in brackets. The following variables are currently supported:  `{wallet.id}` and `{wallet.externalId}`.
            As an example, if you set `userIdTemplate: "dfns:{wallet.id}_{wallet.externalId}"`, when your wallet receives a transaction that gets screened by a Chainalysis policy, the "user ID" sent to Chainalysis will be `dfns:wa-xxx_yyy` (`wa-xxx` being the wallet ID, and `yyy` being the wallet external ID). */
            userIdTemplate?: string | undefined;
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
            /** Transfer id. */
            id: string;
            /** The source wallet for this tranfer. */
            walletId: string;
            /** The blockchain network this transfer is on. */
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
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
        } | undefined;
        transactionRequest?: {
            /** Transaction id. */
            id: string;
            /** Wallet id. */
            walletId: string;
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            /** The user who initiated the request. */
            requester: {
                /** User id. */
                userId: string;
                /** Token id. */
                tokenId?: string | undefined;
            };
            requestBody: {
                kind: "Transaction";
                /** The unsigned hex encoded transaction or JSON transactions for compatible networks. */
                transaction: string | {};
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "Psbt";
                /** The hex encoded PSBT. */
                psbt: string;
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
                kind: "FunctionCall";
                /** Function call arguments */
                call: {};
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "TransferPreapproval";
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
                kind: "SettleOffer";
                txHash: string;
                decision: "Accept" | "Reject";
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "ActivateAccount";
                args?: {} | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "CancelTransaction";
                txHash?: string | undefined;
                signedTx: string;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "SpeedUpTransaction";
                txHash: string;
                signedTx: string;
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
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "Message";
                /** An arbitrary hex encoded message. */
                message: string;
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "Transaction";
                /** The unsigned hex encoded transaction or JSON object for compatible networks */
                transaction: string | {};
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "Eip191";
                /** Hex-encoded message. */
                message: string;
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
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
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
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
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
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
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "Psbt";
                /** The hex encoded PSBT. */
                psbt: string;
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "Bip322";
                /** The generic message hex encoded. */
                message: string;
                /** Defaults to Simple if not present. The formatted signature is returned in the `signedData` field in the response. */
                format?: ("Simple" | "Full") | undefined;
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "SignDocDirect";
                /** The hex encoded `SignDoc` Protobuf. */
                signDoc: string;
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
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
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
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
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
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
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                externalId?: string | undefined;
            } | {
                kind: "StellarFeeBumpTransaction";
                innerTransaction: string;
                transactionReference: string;
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
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
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
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
                    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
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
                    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
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
            /** The user who initiated the request. */
            requester: {
                /** User id. */
                userId: string;
                /** Token id. */
                tokenId?: string | undefined;
            };
            /** The failure reason, if any. Only present when status is Failed. */
            failureReason?: string | undefined;
        } | undefined;
    } | {
        kind: "Wallets:IncomingTransaction";
        blockchainEvent: {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
                    quotes?: {
                        [x: string]: number;
                    } | undefined;
                } | undefined;
            };
            kind: "Cip56Transfer";
            instrumentId: string;
            instrumentAdmin: string;
            from: string;
            to: string;
            value: string;
            fee?: string | undefined;
            memo?: string | undefined;
        } | {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
                    quotes?: {
                        [x: string]: number;
                    } | undefined;
                } | undefined;
            };
            kind: "Cis2Transfer";
            from?: string | undefined;
            to?: string | undefined;
            value: string;
            tokenAddress: string;
            fee?: string | undefined;
        } | {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
                    quotes?: {
                        [x: string]: number;
                    } | undefined;
                } | undefined;
            };
            kind: "Cis7Transfer";
            from?: string | undefined;
            to?: string | undefined;
            value: string;
            fee?: string | undefined;
            tokenId: string;
            memo?: string | undefined;
        } | {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
                    quotes?: {
                        [x: string]: number;
                    } | undefined;
                } | undefined;
            };
            kind: "Erc7984Transfer";
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
                    quotes?: {
                        [x: string]: number;
                    } | undefined;
                } | undefined;
            };
            kind: "IouTransfer";
            currency: string;
            issuer: string;
            from?: string | undefined;
            to?: string | undefined;
            value: string;
            fee?: string | undefined;
            memo?: string | undefined;
        } | {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
                    quotes?: {
                        [x: string]: number;
                    } | undefined;
                } | undefined;
            };
            kind: "Xls33Transfer";
            issuanceId: string;
            from?: string | undefined;
            to?: string | undefined;
            value: string;
            fee?: string | undefined;
            memo?: string | undefined;
        } | {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
                    quotes?: {
                        [x: string]: number;
                    } | undefined;
                } | undefined;
            };
            kind: "Snip2Transfer";
            contract: string;
            from: string;
            to: string;
            value: string;
            fee?: string | undefined;
        } | {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
                    quotes?: {
                        [x: string]: number;
                    } | undefined;
                } | undefined;
            };
            kind: "Snip3Transfer";
            contract: string;
            from: string;
            to: string;
            tokenId: string;
            fee?: string | undefined;
        } | {
            walletId: string;
            direction: "In" | "Out";
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
            blockNumber: number;
            txHash: string;
            index?: string | undefined;
            timestamp: string;
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
                fee?: {
                    symbol?: string | undefined;
                    /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                    decimals?: number | undefined;
                    /** Whether the asset is verified by DFNS as legitimate. */
                    verified?: boolean | undefined;
                    /** Corresponding asset price in USD at the time of transfer. */
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
            /** The user who initiated the change request. */
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
                activityKind: "Registry:Addresses:Modify";
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
                        /** Whether service accounts can participate in the approval for this group. */
                        serviceAccountsCanApprove?: boolean | undefined;
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
                        /** Whether service accounts can participate in the approval for this group. */
                        serviceAccountsCanApprove?: boolean | undefined;
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
                        /** Whether service accounts can participate in the approval for this group. */
                        serviceAccountsCanApprove?: boolean | undefined;
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
                        /** Whether service accounts can participate in the approval for this group. */
                        serviceAccountsCanApprove?: boolean | undefined;
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
                activityKind: "Registry:ContractSchemas:Modify";
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
                        /** Whether service accounts can participate in the approval for this group. */
                        serviceAccountsCanApprove?: boolean | undefined;
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
                        /** Value sent to Chainalysis as the "user ID". Used by Chainalysis for grouping transaction screenings.
                          
                        This template can include variables, included in brackets. The following variables are currently supported:  `{wallet.id}` and `{wallet.externalId}`.
                        As an example, if you set `userIdTemplate: "dfns:{wallet.id}_{wallet.externalId}"`, when your wallet receives a transaction that gets screened by a Chainalysis policy, the "user ID" sent to Chainalysis will be `dfns:wa-xxx_yyy` (`wa-xxx` being the wallet ID, and `yyy` being the wallet external ID). */
                        userIdTemplate?: string | undefined;
                        fallbackBehaviours: {
                            skipUnscreenableTransaction: boolean;
                            skipUnsupportedNetwork: boolean;
                            skipUnsupportedAsset: boolean;
                            skipChainalysisFailure: boolean;
                        };
                    };
                } | {
                    kind: "GlobalLedgerTransactionPrescreening";
                    configuration: {
                        /** Risk score threshold (0-100). Policy triggers if address/transaction risk score >= threshold */
                        riskScoreThreshold: number;
                        fallbackBehaviours: {
                            /** skip all wallet requests that cannot be screened (eg. raw signatures) */
                            skipUnscreenableTransaction: boolean;
                            /** skip transfer requests to a network not supported yet in our GlobalLedger integration */
                            skipUnsupportedNetwork: boolean;
                            /** skip transfer requests of an asset not supported by our GlobalLedger integration */
                            skipUnsupportedAsset: boolean;
                            /** skips any errors from GlobalLedger API request */
                            skipGlobalLedgerFailure: boolean;
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
                        /** Whether service accounts can participate in the approval for this group. */
                        serviceAccountsCanApprove?: boolean | undefined;
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
                        /** Value sent to Chainalysis as the "user ID". Used by Chainalysis for grouping transaction screenings.
                          
                        This template can include variables, included in brackets. The following variables are currently supported:  `{wallet.id}` and `{wallet.externalId}`.
                        As an example, if you set `userIdTemplate: "dfns:{wallet.id}_{wallet.externalId}"`, when your wallet receives a transaction that gets screened by a Chainalysis policy, the "user ID" sent to Chainalysis will be `dfns:wa-xxx_yyy` (`wa-xxx` being the wallet ID, and `yyy` being the wallet external ID). */
                        userIdTemplate?: string | undefined;
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
            /** ID of the change request. */
            id: string;
            /** The user who initiated the change request. */
            requester: {
                userId: string;
                tokenId?: string | undefined;
                appId?: string | undefined;
            };
            /** Current status of the change request. */
            status: "Applied" | "Failed" | "Pending" | "Rejected";
            /** ID of the entity being changed. */
            entityId: string;
            dateCreated: string;
            dateResolved?: string | undefined;
            approvalId?: string | undefined;
            kind: "Permission";
            operationKind: "Update";
            body: {
                /** ID of the permission (also referred to as "role" in the dashboard). */
                id: string;
                /** Human-readable name of the permission (role). */
                name: string;
                /** Current status of the permission. */
                status: "Active";
                /** List of API operations this permission grants access to. See [Permissions List](https://docs.dfns.co/core-concepts/roles-and-permissions#list-of-permissions) for available operations. */
                operations: string[];
                /** Whether this permission is system-managed and cannot be modified. */
                isImmutable: boolean;
                /** Whether this permission has been archived (soft-deleted). */
                isArchived: boolean;
            };
        };
    } | {
        kind: "Permissions:Assign";
        changeRequest: {
            /** ID of the change request. */
            id: string;
            /** The user who initiated the change request. */
            requester: {
                userId: string;
                tokenId?: string | undefined;
                appId?: string | undefined;
            };
            /** Current status of the change request. */
            status: "Applied" | "Failed" | "Pending" | "Rejected";
            /** ID of the entity being changed. */
            entityId: string;
            dateCreated: string;
            dateResolved?: string | undefined;
            approvalId?: string | undefined;
            kind: "Assignment";
            operationKind: "Create" | "Delete";
            body: {
                /** ID of the permission assignment. */
                id: string;
                /** ID of the permission (also referred to as "role" in the dashboard). */
                permissionId: string;
                /** ID of the identity the permission is assigned to. Can be a user ID, a service account ID, or a personal access token (PAT) ID. */
                identityId: string;
                /** Whether this assignment is system-managed and cannot be modified. */
                isImmutable: boolean;
            };
        };
    } | {
        kind: "Registry:Addresses:Modify";
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
                        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                        memo?: string | undefined;
                        value: string;
                    }[];
                };
            } | {
                entityId: string;
                alias: string;
                operationKind: "Update";
                description?: ((string | undefined) | null) | undefined;
                values: {
                    add: {
                        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                        memo?: string | undefined;
                        value: string;
                    }[];
                    remove: {
                        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                        memo?: string | undefined;
                        value: string;
                    }[];
                };
            } | {
                entityId: string;
                alias: string;
                operationKind: "Delete";
            };
        };
    } | {
        kind: "Registry:ContractSchemas:Modify";
        changeRequest: {
            id: string;
            kind: "SmartContract";
            operationKind: "Create" | "Delete";
            body: {
                id: string;
                name: string;
                description?: string | undefined;
                network: "Adi" | "AdiTestnet" | "AdiTestnetAb" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Ink" | "InkSepolia" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Sonic" | "SonicTestnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Xdc" | "XdcApothem";
                address: string;
                schema?: any;
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
        context?: any | undefined;
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
    activityKind: "Registry:Addresses:Modify";
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
    activityKind: "Registry:ContractSchemas:Modify";
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
            /** Value sent to Chainalysis as the "user ID". Used by Chainalysis for grouping transaction screenings.
              
            This template can include variables, included in brackets. The following variables are currently supported:  `{wallet.id}` and `{wallet.externalId}`.
            As an example, if you set `userIdTemplate: "dfns:{wallet.id}_{wallet.externalId}"`, when your wallet receives a transaction that gets screened by a Chainalysis policy, the "user ID" sent to Chainalysis will be `dfns:wa-xxx_yyy` (`wa-xxx` being the wallet ID, and `yyy` being the wallet external ID). */
            userIdTemplate?: string | undefined;
            fallbackBehaviours: {
                skipUnscreenableTransaction: boolean;
                skipUnsupportedNetwork: boolean;
                skipUnsupportedAsset: boolean;
                skipChainalysisFailure: boolean;
            };
        };
    } | {
        kind: "GlobalLedgerTransactionPrescreening";
        configuration: {
            /** Risk score threshold (0-100). Policy triggers if address/transaction risk score >= threshold */
            riskScoreThreshold: number;
            fallbackBehaviours: {
                /** skip all wallet requests that cannot be screened (eg. raw signatures) */
                skipUnscreenableTransaction: boolean;
                /** skip transfer requests to a network not supported yet in our GlobalLedger integration */
                skipUnsupportedNetwork: boolean;
                /** skip transfer requests of an asset not supported by our GlobalLedger integration */
                skipUnsupportedAsset: boolean;
                /** skips any errors from GlobalLedger API request */
                skipGlobalLedgerFailure: boolean;
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
            /** Value sent to Chainalysis as the "user ID". Used by Chainalysis for grouping transaction screenings.
              
            This template can include variables, included in brackets. The following variables are currently supported:  `{wallet.id}` and `{wallet.externalId}`.
            As an example, if you set `userIdTemplate: "dfns:{wallet.id}_{wallet.externalId}"`, when your wallet receives a transaction that gets screened by a Chainalysis policy, the "user ID" sent to Chainalysis will be `dfns:wa-xxx_yyy` (`wa-xxx` being the wallet ID, and `yyy` being the wallet external ID). */
            userIdTemplate?: string | undefined;
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
        /** The user who initiated the change request. */
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
            activityKind: "Registry:Addresses:Modify";
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
                    /** Whether service accounts can participate in the approval for this group. */
                    serviceAccountsCanApprove?: boolean | undefined;
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
                    /** Whether service accounts can participate in the approval for this group. */
                    serviceAccountsCanApprove?: boolean | undefined;
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
                    /** Whether service accounts can participate in the approval for this group. */
                    serviceAccountsCanApprove?: boolean | undefined;
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
                    /** Whether service accounts can participate in the approval for this group. */
                    serviceAccountsCanApprove?: boolean | undefined;
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
            activityKind: "Registry:ContractSchemas:Modify";
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
                    /** Whether service accounts can participate in the approval for this group. */
                    serviceAccountsCanApprove?: boolean | undefined;
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
                    /** Value sent to Chainalysis as the "user ID". Used by Chainalysis for grouping transaction screenings.
                      
                    This template can include variables, included in brackets. The following variables are currently supported:  `{wallet.id}` and `{wallet.externalId}`.
                    As an example, if you set `userIdTemplate: "dfns:{wallet.id}_{wallet.externalId}"`, when your wallet receives a transaction that gets screened by a Chainalysis policy, the "user ID" sent to Chainalysis will be `dfns:wa-xxx_yyy` (`wa-xxx` being the wallet ID, and `yyy` being the wallet external ID). */
                    userIdTemplate?: string | undefined;
                    fallbackBehaviours: {
                        skipUnscreenableTransaction: boolean;
                        skipUnsupportedNetwork: boolean;
                        skipUnsupportedAsset: boolean;
                        skipChainalysisFailure: boolean;
                    };
                };
            } | {
                kind: "GlobalLedgerTransactionPrescreening";
                configuration: {
                    /** Risk score threshold (0-100). Policy triggers if address/transaction risk score >= threshold */
                    riskScoreThreshold: number;
                    fallbackBehaviours: {
                        /** skip all wallet requests that cannot be screened (eg. raw signatures) */
                        skipUnscreenableTransaction: boolean;
                        /** skip transfer requests to a network not supported yet in our GlobalLedger integration */
                        skipUnsupportedNetwork: boolean;
                        /** skip transfer requests of an asset not supported by our GlobalLedger integration */
                        skipUnsupportedAsset: boolean;
                        /** skips any errors from GlobalLedger API request */
                        skipGlobalLedgerFailure: boolean;
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
                    /** Whether service accounts can participate in the approval for this group. */
                    serviceAccountsCanApprove?: boolean | undefined;
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
                    /** Value sent to Chainalysis as the "user ID". Used by Chainalysis for grouping transaction screenings.
                      
                    This template can include variables, included in brackets. The following variables are currently supported:  `{wallet.id}` and `{wallet.externalId}`.
                    As an example, if you set `userIdTemplate: "dfns:{wallet.id}_{wallet.externalId}"`, when your wallet receives a transaction that gets screened by a Chainalysis policy, the "user ID" sent to Chainalysis will be `dfns:wa-xxx_yyy` (`wa-xxx` being the wallet ID, and `yyy` being the wallet external ID). */
                    userIdTemplate?: string | undefined;
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
                /** Transfer id. */
                id: string;
                /** The source wallet for this tranfer. */
                walletId: string;
                /** The blockchain network this transfer is on. */
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
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
            } | undefined;
            transactionRequest?: {
                /** Transaction id. */
                id: string;
                /** Wallet id. */
                walletId: string;
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                /** The user who initiated the request. */
                requester: {
                    /** User id. */
                    userId: string;
                    /** Token id. */
                    tokenId?: string | undefined;
                };
                requestBody: {
                    kind: "Transaction";
                    /** The unsigned hex encoded transaction or JSON transactions for compatible networks. */
                    transaction: string | {};
                    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                    externalId?: string | undefined;
                } | {
                    kind: "Psbt";
                    /** The hex encoded PSBT. */
                    psbt: string;
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
                    kind: "FunctionCall";
                    /** Function call arguments */
                    call: {};
                    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                    externalId?: string | undefined;
                } | {
                    kind: "TransferPreapproval";
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
                    kind: "SettleOffer";
                    txHash: string;
                    decision: "Accept" | "Reject";
                    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                    externalId?: string | undefined;
                } | {
                    kind: "ActivateAccount";
                    args?: {} | undefined;
                    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                    externalId?: string | undefined;
                } | {
                    kind: "CancelTransaction";
                    txHash?: string | undefined;
                    signedTx: string;
                    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                    externalId?: string | undefined;
                } | {
                    kind: "SpeedUpTransaction";
                    txHash: string;
                    signedTx: string;
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
                    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                    externalId?: string | undefined;
                } | {
                    kind: "Message";
                    /** An arbitrary hex encoded message. */
                    message: string;
                    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                    externalId?: string | undefined;
                } | {
                    kind: "Transaction";
                    /** The unsigned hex encoded transaction or JSON object for compatible networks */
                    transaction: string | {};
                    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                    externalId?: string | undefined;
                } | {
                    kind: "Eip191";
                    /** Hex-encoded message. */
                    message: string;
                    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
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
                    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
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
                    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
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
                    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                    externalId?: string | undefined;
                } | {
                    kind: "Psbt";
                    /** The hex encoded PSBT. */
                    psbt: string;
                    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                    externalId?: string | undefined;
                } | {
                    kind: "Bip322";
                    /** The generic message hex encoded. */
                    message: string;
                    /** Defaults to Simple if not present. The formatted signature is returned in the `signedData` field in the response. */
                    format?: ("Simple" | "Full") | undefined;
                    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                    externalId?: string | undefined;
                } | {
                    kind: "SignDocDirect";
                    /** The hex encoded `SignDoc` Protobuf. */
                    signDoc: string;
                    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
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
                    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
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
                    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
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
                    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
                    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Concordium" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
                    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
                    externalId?: string | undefined;
                } | {
                    kind: "StellarFeeBumpTransaction";
                    innerTransaction: string;
                    transactionReference: string;
                    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
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
                network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
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
                        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
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
                        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
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
                /** The user who initiated the request. */
                requester: {
                    /** User id. */
                    userId: string;
                    /** Token id. */
                    tokenId?: string | undefined;
                };
                /** The failure reason, if any. Only present when status is Failed. */
                failureReason?: string | undefined;
            } | undefined;
        } | {
            kind: "Wallets:IncomingTransaction";
            blockchainEvent: {
                walletId: string;
                direction: "In" | "Out";
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                blockNumber: number;
                txHash: string;
                index?: string | undefined;
                timestamp: string;
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
                    fee?: {
                        symbol?: string | undefined;
                        /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                        decimals?: number | undefined;
                        /** Whether the asset is verified by DFNS as legitimate. */
                        verified?: boolean | undefined;
                        /** Corresponding asset price in USD at the time of transfer. */
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
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                blockNumber: number;
                txHash: string;
                index?: string | undefined;
                timestamp: string;
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
                    fee?: {
                        symbol?: string | undefined;
                        /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                        decimals?: number | undefined;
                        /** Whether the asset is verified by DFNS as legitimate. */
                        verified?: boolean | undefined;
                        /** Corresponding asset price in USD at the time of transfer. */
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
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                blockNumber: number;
                txHash: string;
                index?: string | undefined;
                timestamp: string;
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
                    fee?: {
                        symbol?: string | undefined;
                        /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                        decimals?: number | undefined;
                        /** Whether the asset is verified by DFNS as legitimate. */
                        verified?: boolean | undefined;
                        /** Corresponding asset price in USD at the time of transfer. */
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
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                blockNumber: number;
                txHash: string;
                index?: string | undefined;
                timestamp: string;
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
                    fee?: {
                        symbol?: string | undefined;
                        /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                        decimals?: number | undefined;
                        /** Whether the asset is verified by DFNS as legitimate. */
                        verified?: boolean | undefined;
                        /** Corresponding asset price in USD at the time of transfer. */
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
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                blockNumber: number;
                txHash: string;
                index?: string | undefined;
                timestamp: string;
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
                    fee?: {
                        symbol?: string | undefined;
                        /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                        decimals?: number | undefined;
                        /** Whether the asset is verified by DFNS as legitimate. */
                        verified?: boolean | undefined;
                        /** Corresponding asset price in USD at the time of transfer. */
                        quotes?: {
                            [x: string]: number;
                        } | undefined;
                    } | undefined;
                };
                kind: "Cip56Transfer";
                instrumentId: string;
                instrumentAdmin: string;
                from: string;
                to: string;
                value: string;
                fee?: string | undefined;
                memo?: string | undefined;
            } | {
                walletId: string;
                direction: "In" | "Out";
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                blockNumber: number;
                txHash: string;
                index?: string | undefined;
                timestamp: string;
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
                    fee?: {
                        symbol?: string | undefined;
                        /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                        decimals?: number | undefined;
                        /** Whether the asset is verified by DFNS as legitimate. */
                        verified?: boolean | undefined;
                        /** Corresponding asset price in USD at the time of transfer. */
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
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                blockNumber: number;
                txHash: string;
                index?: string | undefined;
                timestamp: string;
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
                    fee?: {
                        symbol?: string | undefined;
                        /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                        decimals?: number | undefined;
                        /** Whether the asset is verified by DFNS as legitimate. */
                        verified?: boolean | undefined;
                        /** Corresponding asset price in USD at the time of transfer. */
                        quotes?: {
                            [x: string]: number;
                        } | undefined;
                    } | undefined;
                };
                kind: "Cis2Transfer";
                from?: string | undefined;
                to?: string | undefined;
                value: string;
                tokenAddress: string;
                fee?: string | undefined;
            } | {
                walletId: string;
                direction: "In" | "Out";
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                blockNumber: number;
                txHash: string;
                index?: string | undefined;
                timestamp: string;
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
                    fee?: {
                        symbol?: string | undefined;
                        /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                        decimals?: number | undefined;
                        /** Whether the asset is verified by DFNS as legitimate. */
                        verified?: boolean | undefined;
                        /** Corresponding asset price in USD at the time of transfer. */
                        quotes?: {
                            [x: string]: number;
                        } | undefined;
                    } | undefined;
                };
                kind: "Cis7Transfer";
                from?: string | undefined;
                to?: string | undefined;
                value: string;
                fee?: string | undefined;
                tokenId: string;
                memo?: string | undefined;
            } | {
                walletId: string;
                direction: "In" | "Out";
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                blockNumber: number;
                txHash: string;
                index?: string | undefined;
                timestamp: string;
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
                    fee?: {
                        symbol?: string | undefined;
                        /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                        decimals?: number | undefined;
                        /** Whether the asset is verified by DFNS as legitimate. */
                        verified?: boolean | undefined;
                        /** Corresponding asset price in USD at the time of transfer. */
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
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                blockNumber: number;
                txHash: string;
                index?: string | undefined;
                timestamp: string;
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
                    fee?: {
                        symbol?: string | undefined;
                        /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                        decimals?: number | undefined;
                        /** Whether the asset is verified by DFNS as legitimate. */
                        verified?: boolean | undefined;
                        /** Corresponding asset price in USD at the time of transfer. */
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
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                blockNumber: number;
                txHash: string;
                index?: string | undefined;
                timestamp: string;
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
                    fee?: {
                        symbol?: string | undefined;
                        /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                        decimals?: number | undefined;
                        /** Whether the asset is verified by DFNS as legitimate. */
                        verified?: boolean | undefined;
                        /** Corresponding asset price in USD at the time of transfer. */
                        quotes?: {
                            [x: string]: number;
                        } | undefined;
                    } | undefined;
                };
                kind: "Erc7984Transfer";
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
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                blockNumber: number;
                txHash: string;
                index?: string | undefined;
                timestamp: string;
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
                    fee?: {
                        symbol?: string | undefined;
                        /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                        decimals?: number | undefined;
                        /** Whether the asset is verified by DFNS as legitimate. */
                        verified?: boolean | undefined;
                        /** Corresponding asset price in USD at the time of transfer. */
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
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                blockNumber: number;
                txHash: string;
                index?: string | undefined;
                timestamp: string;
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
                    fee?: {
                        symbol?: string | undefined;
                        /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                        decimals?: number | undefined;
                        /** Whether the asset is verified by DFNS as legitimate. */
                        verified?: boolean | undefined;
                        /** Corresponding asset price in USD at the time of transfer. */
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
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                blockNumber: number;
                txHash: string;
                index?: string | undefined;
                timestamp: string;
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
                    fee?: {
                        symbol?: string | undefined;
                        /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                        decimals?: number | undefined;
                        /** Whether the asset is verified by DFNS as legitimate. */
                        verified?: boolean | undefined;
                        /** Corresponding asset price in USD at the time of transfer. */
                        quotes?: {
                            [x: string]: number;
                        } | undefined;
                    } | undefined;
                };
                kind: "IouTransfer";
                currency: string;
                issuer: string;
                from?: string | undefined;
                to?: string | undefined;
                value: string;
                fee?: string | undefined;
                memo?: string | undefined;
            } | {
                walletId: string;
                direction: "In" | "Out";
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                blockNumber: number;
                txHash: string;
                index?: string | undefined;
                timestamp: string;
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
                    fee?: {
                        symbol?: string | undefined;
                        /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                        decimals?: number | undefined;
                        /** Whether the asset is verified by DFNS as legitimate. */
                        verified?: boolean | undefined;
                        /** Corresponding asset price in USD at the time of transfer. */
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
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                blockNumber: number;
                txHash: string;
                index?: string | undefined;
                timestamp: string;
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
                    fee?: {
                        symbol?: string | undefined;
                        /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                        decimals?: number | undefined;
                        /** Whether the asset is verified by DFNS as legitimate. */
                        verified?: boolean | undefined;
                        /** Corresponding asset price in USD at the time of transfer. */
                        quotes?: {
                            [x: string]: number;
                        } | undefined;
                    } | undefined;
                };
                kind: "Xls33Transfer";
                issuanceId: string;
                from?: string | undefined;
                to?: string | undefined;
                value: string;
                fee?: string | undefined;
                memo?: string | undefined;
            } | {
                walletId: string;
                direction: "In" | "Out";
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                blockNumber: number;
                txHash: string;
                index?: string | undefined;
                timestamp: string;
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
                    fee?: {
                        symbol?: string | undefined;
                        /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                        decimals?: number | undefined;
                        /** Whether the asset is verified by DFNS as legitimate. */
                        verified?: boolean | undefined;
                        /** Corresponding asset price in USD at the time of transfer. */
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
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                blockNumber: number;
                txHash: string;
                index?: string | undefined;
                timestamp: string;
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
                    fee?: {
                        symbol?: string | undefined;
                        /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                        decimals?: number | undefined;
                        /** Whether the asset is verified by DFNS as legitimate. */
                        verified?: boolean | undefined;
                        /** Corresponding asset price in USD at the time of transfer. */
                        quotes?: {
                            [x: string]: number;
                        } | undefined;
                    } | undefined;
                };
                kind: "Snip2Transfer";
                contract: string;
                from: string;
                to: string;
                value: string;
                fee?: string | undefined;
            } | {
                walletId: string;
                direction: "In" | "Out";
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                blockNumber: number;
                txHash: string;
                index?: string | undefined;
                timestamp: string;
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
                    fee?: {
                        symbol?: string | undefined;
                        /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                        decimals?: number | undefined;
                        /** Whether the asset is verified by DFNS as legitimate. */
                        verified?: boolean | undefined;
                        /** Corresponding asset price in USD at the time of transfer. */
                        quotes?: {
                            [x: string]: number;
                        } | undefined;
                    } | undefined;
                };
                kind: "Snip3Transfer";
                contract: string;
                from: string;
                to: string;
                tokenId: string;
                fee?: string | undefined;
            } | {
                walletId: string;
                direction: "In" | "Out";
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                blockNumber: number;
                txHash: string;
                index?: string | undefined;
                timestamp: string;
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
                    fee?: {
                        symbol?: string | undefined;
                        /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                        decimals?: number | undefined;
                        /** Whether the asset is verified by DFNS as legitimate. */
                        verified?: boolean | undefined;
                        /** Corresponding asset price in USD at the time of transfer. */
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
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                blockNumber: number;
                txHash: string;
                index?: string | undefined;
                timestamp: string;
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
                    fee?: {
                        symbol?: string | undefined;
                        /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                        decimals?: number | undefined;
                        /** Whether the asset is verified by DFNS as legitimate. */
                        verified?: boolean | undefined;
                        /** Corresponding asset price in USD at the time of transfer. */
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
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                blockNumber: number;
                txHash: string;
                index?: string | undefined;
                timestamp: string;
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
                    fee?: {
                        symbol?: string | undefined;
                        /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                        decimals?: number | undefined;
                        /** Whether the asset is verified by DFNS as legitimate. */
                        verified?: boolean | undefined;
                        /** Corresponding asset price in USD at the time of transfer. */
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
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                blockNumber: number;
                txHash: string;
                index?: string | undefined;
                timestamp: string;
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
                    fee?: {
                        symbol?: string | undefined;
                        /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                        decimals?: number | undefined;
                        /** Whether the asset is verified by DFNS as legitimate. */
                        verified?: boolean | undefined;
                        /** Corresponding asset price in USD at the time of transfer. */
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
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                blockNumber: number;
                txHash: string;
                index?: string | undefined;
                timestamp: string;
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
                    fee?: {
                        symbol?: string | undefined;
                        /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                        decimals?: number | undefined;
                        /** Whether the asset is verified by DFNS as legitimate. */
                        verified?: boolean | undefined;
                        /** Corresponding asset price in USD at the time of transfer. */
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
                network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                blockNumber: number;
                txHash: string;
                index?: string | undefined;
                timestamp: string;
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
                    fee?: {
                        symbol?: string | undefined;
                        /** Number of decimals used by the asset, see [this guide](https://docs.dfns.co/guides/developers/displaying-balances) for more details. */
                        decimals?: number | undefined;
                        /** Whether the asset is verified by DFNS as legitimate. */
                        verified?: boolean | undefined;
                        /** Corresponding asset price in USD at the time of transfer. */
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
                /** The user who initiated the change request. */
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
                    activityKind: "Registry:Addresses:Modify";
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
                            /** Whether service accounts can participate in the approval for this group. */
                            serviceAccountsCanApprove?: boolean | undefined;
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
                            /** Whether service accounts can participate in the approval for this group. */
                            serviceAccountsCanApprove?: boolean | undefined;
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
                            /** Whether service accounts can participate in the approval for this group. */
                            serviceAccountsCanApprove?: boolean | undefined;
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
                            /** Whether service accounts can participate in the approval for this group. */
                            serviceAccountsCanApprove?: boolean | undefined;
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
                    activityKind: "Registry:ContractSchemas:Modify";
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
                            /** Whether service accounts can participate in the approval for this group. */
                            serviceAccountsCanApprove?: boolean | undefined;
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
                            /** Value sent to Chainalysis as the "user ID". Used by Chainalysis for grouping transaction screenings.
                              
                            This template can include variables, included in brackets. The following variables are currently supported:  `{wallet.id}` and `{wallet.externalId}`.
                            As an example, if you set `userIdTemplate: "dfns:{wallet.id}_{wallet.externalId}"`, when your wallet receives a transaction that gets screened by a Chainalysis policy, the "user ID" sent to Chainalysis will be `dfns:wa-xxx_yyy` (`wa-xxx` being the wallet ID, and `yyy` being the wallet external ID). */
                            userIdTemplate?: string | undefined;
                            fallbackBehaviours: {
                                skipUnscreenableTransaction: boolean;
                                skipUnsupportedNetwork: boolean;
                                skipUnsupportedAsset: boolean;
                                skipChainalysisFailure: boolean;
                            };
                        };
                    } | {
                        kind: "GlobalLedgerTransactionPrescreening";
                        configuration: {
                            /** Risk score threshold (0-100). Policy triggers if address/transaction risk score >= threshold */
                            riskScoreThreshold: number;
                            fallbackBehaviours: {
                                /** skip all wallet requests that cannot be screened (eg. raw signatures) */
                                skipUnscreenableTransaction: boolean;
                                /** skip transfer requests to a network not supported yet in our GlobalLedger integration */
                                skipUnsupportedNetwork: boolean;
                                /** skip transfer requests of an asset not supported by our GlobalLedger integration */
                                skipUnsupportedAsset: boolean;
                                /** skips any errors from GlobalLedger API request */
                                skipGlobalLedgerFailure: boolean;
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
                            /** Whether service accounts can participate in the approval for this group. */
                            serviceAccountsCanApprove?: boolean | undefined;
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
                            /** Value sent to Chainalysis as the "user ID". Used by Chainalysis for grouping transaction screenings.
                              
                            This template can include variables, included in brackets. The following variables are currently supported:  `{wallet.id}` and `{wallet.externalId}`.
                            As an example, if you set `userIdTemplate: "dfns:{wallet.id}_{wallet.externalId}"`, when your wallet receives a transaction that gets screened by a Chainalysis policy, the "user ID" sent to Chainalysis will be `dfns:wa-xxx_yyy` (`wa-xxx` being the wallet ID, and `yyy` being the wallet external ID). */
                            userIdTemplate?: string | undefined;
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
                /** ID of the change request. */
                id: string;
                /** The user who initiated the change request. */
                requester: {
                    userId: string;
                    tokenId?: string | undefined;
                    appId?: string | undefined;
                };
                /** Current status of the change request. */
                status: "Applied" | "Failed" | "Pending" | "Rejected";
                /** ID of the entity being changed. */
                entityId: string;
                dateCreated: string;
                dateResolved?: string | undefined;
                approvalId?: string | undefined;
                kind: "Permission";
                operationKind: "Update";
                body: {
                    /** ID of the permission (also referred to as "role" in the dashboard). */
                    id: string;
                    /** Human-readable name of the permission (role). */
                    name: string;
                    /** Current status of the permission. */
                    status: "Active";
                    /** List of API operations this permission grants access to. See [Permissions List](https://docs.dfns.co/core-concepts/roles-and-permissions#list-of-permissions) for available operations. */
                    operations: string[];
                    /** Whether this permission is system-managed and cannot be modified. */
                    isImmutable: boolean;
                    /** Whether this permission has been archived (soft-deleted). */
                    isArchived: boolean;
                };
            };
        } | {
            kind: "Permissions:Assign";
            changeRequest: {
                /** ID of the change request. */
                id: string;
                /** The user who initiated the change request. */
                requester: {
                    userId: string;
                    tokenId?: string | undefined;
                    appId?: string | undefined;
                };
                /** Current status of the change request. */
                status: "Applied" | "Failed" | "Pending" | "Rejected";
                /** ID of the entity being changed. */
                entityId: string;
                dateCreated: string;
                dateResolved?: string | undefined;
                approvalId?: string | undefined;
                kind: "Assignment";
                operationKind: "Create" | "Delete";
                body: {
                    /** ID of the permission assignment. */
                    id: string;
                    /** ID of the permission (also referred to as "role" in the dashboard). */
                    permissionId: string;
                    /** ID of the identity the permission is assigned to. Can be a user ID, a service account ID, or a personal access token (PAT) ID. */
                    identityId: string;
                    /** Whether this assignment is system-managed and cannot be modified. */
                    isImmutable: boolean;
                };
            };
        } | {
            kind: "Registry:Addresses:Modify";
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
                            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                            memo?: string | undefined;
                            value: string;
                        }[];
                    };
                } | {
                    entityId: string;
                    alias: string;
                    operationKind: "Update";
                    description?: ((string | undefined) | null) | undefined;
                    values: {
                        add: {
                            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                            memo?: string | undefined;
                            value: string;
                        }[];
                        remove: {
                            network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XrpLedger" | "XrpLedgerTestnet";
                            memo?: string | undefined;
                            value: string;
                        }[];
                    };
                } | {
                    entityId: string;
                    alias: string;
                    operationKind: "Delete";
                };
            };
        } | {
            kind: "Registry:ContractSchemas:Modify";
            changeRequest: {
                id: string;
                kind: "SmartContract";
                operationKind: "Create" | "Delete";
                body: {
                    id: string;
                    name: string;
                    description?: string | undefined;
                    network: "Adi" | "AdiTestnet" | "AdiTestnetAb" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Ink" | "InkSepolia" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Sonic" | "SonicTestnet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Xdc" | "XdcApothem";
                    address: string;
                    schema?: any;
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
            context?: any | undefined;
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
        activityKind: "Registry:Addresses:Modify";
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
                /** Whether service accounts can participate in the approval for this group. */
                serviceAccountsCanApprove?: boolean | undefined;
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
                /** Whether service accounts can participate in the approval for this group. */
                serviceAccountsCanApprove?: boolean | undefined;
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
                /** Whether service accounts can participate in the approval for this group. */
                serviceAccountsCanApprove?: boolean | undefined;
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
                /** Whether service accounts can participate in the approval for this group. */
                serviceAccountsCanApprove?: boolean | undefined;
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
        activityKind: "Registry:ContractSchemas:Modify";
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
                /** Whether service accounts can participate in the approval for this group. */
                serviceAccountsCanApprove?: boolean | undefined;
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
                /** Value sent to Chainalysis as the "user ID". Used by Chainalysis for grouping transaction screenings.
                  
                This template can include variables, included in brackets. The following variables are currently supported:  `{wallet.id}` and `{wallet.externalId}`.
                As an example, if you set `userIdTemplate: "dfns:{wallet.id}_{wallet.externalId}"`, when your wallet receives a transaction that gets screened by a Chainalysis policy, the "user ID" sent to Chainalysis will be `dfns:wa-xxx_yyy` (`wa-xxx` being the wallet ID, and `yyy` being the wallet external ID). */
                userIdTemplate?: string | undefined;
                fallbackBehaviours: {
                    skipUnscreenableTransaction: boolean;
                    skipUnsupportedNetwork: boolean;
                    skipUnsupportedAsset: boolean;
                    skipChainalysisFailure: boolean;
                };
            };
        } | {
            kind: "GlobalLedgerTransactionPrescreening";
            configuration: {
                /** Risk score threshold (0-100). Policy triggers if address/transaction risk score >= threshold */
                riskScoreThreshold: number;
                fallbackBehaviours: {
                    /** skip all wallet requests that cannot be screened (eg. raw signatures) */
                    skipUnscreenableTransaction: boolean;
                    /** skip transfer requests to a network not supported yet in our GlobalLedger integration */
                    skipUnsupportedNetwork: boolean;
                    /** skip transfer requests of an asset not supported by our GlobalLedger integration */
                    skipUnsupportedAsset: boolean;
                    /** skips any errors from GlobalLedger API request */
                    skipGlobalLedgerFailure: boolean;
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
                /** Whether service accounts can participate in the approval for this group. */
                serviceAccountsCanApprove?: boolean | undefined;
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
                /** Value sent to Chainalysis as the "user ID". Used by Chainalysis for grouping transaction screenings.
                  
                This template can include variables, included in brackets. The following variables are currently supported:  `{wallet.id}` and `{wallet.externalId}`.
                As an example, if you set `userIdTemplate: "dfns:{wallet.id}_{wallet.externalId}"`, when your wallet receives a transaction that gets screened by a Chainalysis policy, the "user ID" sent to Chainalysis will be `dfns:wa-xxx_yyy` (`wa-xxx` being the wallet ID, and `yyy` being the wallet external ID). */
                userIdTemplate?: string | undefined;
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
            /** The user who initiated the change request. */
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
                activityKind: "Registry:Addresses:Modify";
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
                        /** Whether service accounts can participate in the approval for this group. */
                        serviceAccountsCanApprove?: boolean | undefined;
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
                        /** Whether service accounts can participate in the approval for this group. */
                        serviceAccountsCanApprove?: boolean | undefined;
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
                        /** Whether service accounts can participate in the approval for this group. */
                        serviceAccountsCanApprove?: boolean | undefined;
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
                        /** Whether service accounts can participate in the approval for this group. */
                        serviceAccountsCanApprove?: boolean | undefined;
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
                activityKind: "Registry:ContractSchemas:Modify";
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
                        /** Whether service accounts can participate in the approval for this group. */
                        serviceAccountsCanApprove?: boolean | undefined;
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
                        /** Value sent to Chainalysis as the "user ID". Used by Chainalysis for grouping transaction screenings.
                          
                        This template can include variables, included in brackets. The following variables are currently supported:  `{wallet.id}` and `{wallet.externalId}`.
                        As an example, if you set `userIdTemplate: "dfns:{wallet.id}_{wallet.externalId}"`, when your wallet receives a transaction that gets screened by a Chainalysis policy, the "user ID" sent to Chainalysis will be `dfns:wa-xxx_yyy` (`wa-xxx` being the wallet ID, and `yyy` being the wallet external ID). */
                        userIdTemplate?: string | undefined;
                        fallbackBehaviours: {
                            skipUnscreenableTransaction: boolean;
                            skipUnsupportedNetwork: boolean;
                            skipUnsupportedAsset: boolean;
                            skipChainalysisFailure: boolean;
                        };
                    };
                } | {
                    kind: "GlobalLedgerTransactionPrescreening";
                    configuration: {
                        /** Risk score threshold (0-100). Policy triggers if address/transaction risk score >= threshold */
                        riskScoreThreshold: number;
                        fallbackBehaviours: {
                            /** skip all wallet requests that cannot be screened (eg. raw signatures) */
                            skipUnscreenableTransaction: boolean;
                            /** skip transfer requests to a network not supported yet in our GlobalLedger integration */
                            skipUnsupportedNetwork: boolean;
                            /** skip transfer requests of an asset not supported by our GlobalLedger integration */
                            skipUnsupportedAsset: boolean;
                            /** skips any errors from GlobalLedger API request */
                            skipGlobalLedgerFailure: boolean;
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
                        /** Whether service accounts can participate in the approval for this group. */
                        serviceAccountsCanApprove?: boolean | undefined;
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
                        /** Value sent to Chainalysis as the "user ID". Used by Chainalysis for grouping transaction screenings.
                          
                        This template can include variables, included in brackets. The following variables are currently supported:  `{wallet.id}` and `{wallet.externalId}`.
                        As an example, if you set `userIdTemplate: "dfns:{wallet.id}_{wallet.externalId}"`, when your wallet receives a transaction that gets screened by a Chainalysis policy, the "user ID" sent to Chainalysis will be `dfns:wa-xxx_yyy` (`wa-xxx` being the wallet ID, and `yyy` being the wallet external ID). */
                        userIdTemplate?: string | undefined;
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
    activityKind: "Registry:Addresses:Modify";
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
    activityKind: "Registry:ContractSchemas:Modify";
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
        }[];
        autoRejectTimeout?: (number | undefined) | null;
    } | {
        kind: "Block";
    };
    filters?: {} | undefined;
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
            /** Value sent to Chainalysis as the "user ID". Used by Chainalysis for grouping transaction screenings.
              
            This template can include variables, included in brackets. The following variables are currently supported:  `{wallet.id}` and `{wallet.externalId}`.
            As an example, if you set `userIdTemplate: "dfns:{wallet.id}_{wallet.externalId}"`, when your wallet receives a transaction that gets screened by a Chainalysis policy, the "user ID" sent to Chainalysis will be `dfns:wa-xxx_yyy` (`wa-xxx` being the wallet ID, and `yyy` being the wallet external ID). */
            userIdTemplate?: string | undefined;
            fallbackBehaviours: {
                skipUnscreenableTransaction: boolean;
                skipUnsupportedNetwork: boolean;
                skipUnsupportedAsset: boolean;
                skipChainalysisFailure: boolean;
            };
        };
    } | {
        kind: "GlobalLedgerTransactionPrescreening";
        configuration: {
            /** Risk score threshold (0-100). Policy triggers if address/transaction risk score >= threshold */
            riskScoreThreshold: number;
            fallbackBehaviours: {
                /** skip all wallet requests that cannot be screened (eg. raw signatures) */
                skipUnscreenableTransaction: boolean;
                /** skip transfer requests to a network not supported yet in our GlobalLedger integration */
                skipUnsupportedNetwork: boolean;
                /** skip transfer requests of an asset not supported by our GlobalLedger integration */
                skipUnsupportedAsset: boolean;
                /** skips any errors from GlobalLedger API request */
                skipGlobalLedgerFailure: boolean;
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
            /** Value sent to Chainalysis as the "user ID". Used by Chainalysis for grouping transaction screenings.
              
            This template can include variables, included in brackets. The following variables are currently supported:  `{wallet.id}` and `{wallet.externalId}`.
            As an example, if you set `userIdTemplate: "dfns:{wallet.id}_{wallet.externalId}"`, when your wallet receives a transaction that gets screened by a Chainalysis policy, the "user ID" sent to Chainalysis will be `dfns:wa-xxx_yyy` (`wa-xxx` being the wallet ID, and `yyy` being the wallet external ID). */
            userIdTemplate?: string | undefined;
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
    activityKind: "Registry:Addresses:Modify";
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
    activityKind: "Registry:ContractSchemas:Modify";
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
            /** Value sent to Chainalysis as the "user ID". Used by Chainalysis for grouping transaction screenings.
              
            This template can include variables, included in brackets. The following variables are currently supported:  `{wallet.id}` and `{wallet.externalId}`.
            As an example, if you set `userIdTemplate: "dfns:{wallet.id}_{wallet.externalId}"`, when your wallet receives a transaction that gets screened by a Chainalysis policy, the "user ID" sent to Chainalysis will be `dfns:wa-xxx_yyy` (`wa-xxx` being the wallet ID, and `yyy` being the wallet external ID). */
            userIdTemplate?: string | undefined;
            fallbackBehaviours: {
                skipUnscreenableTransaction: boolean;
                skipUnsupportedNetwork: boolean;
                skipUnsupportedAsset: boolean;
                skipChainalysisFailure: boolean;
            };
        };
    } | {
        kind: "GlobalLedgerTransactionPrescreening";
        configuration: {
            /** Risk score threshold (0-100). Policy triggers if address/transaction risk score >= threshold */
            riskScoreThreshold: number;
            fallbackBehaviours: {
                /** skip all wallet requests that cannot be screened (eg. raw signatures) */
                skipUnscreenableTransaction: boolean;
                /** skip transfer requests to a network not supported yet in our GlobalLedger integration */
                skipUnsupportedNetwork: boolean;
                /** skip transfer requests of an asset not supported by our GlobalLedger integration */
                skipUnsupportedAsset: boolean;
                /** skips any errors from GlobalLedger API request */
                skipGlobalLedgerFailure: boolean;
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
            /** Whether service accounts can participate in the approval for this group. */
            serviceAccountsCanApprove?: boolean | undefined;
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
            /** Value sent to Chainalysis as the "user ID". Used by Chainalysis for grouping transaction screenings.
              
            This template can include variables, included in brackets. The following variables are currently supported:  `{wallet.id}` and `{wallet.externalId}`.
            As an example, if you set `userIdTemplate: "dfns:{wallet.id}_{wallet.externalId}"`, when your wallet receives a transaction that gets screened by a Chainalysis policy, the "user ID" sent to Chainalysis will be `dfns:wa-xxx_yyy` (`wa-xxx` being the wallet ID, and `yyy` being the wallet external ID). */
            userIdTemplate?: string | undefined;
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

