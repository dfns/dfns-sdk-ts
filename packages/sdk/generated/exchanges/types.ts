export type CreateDepositBody = {
    kind: "Native";
    amount: string;
    priority?: ("Slow" | "Standard" | "Fast") | undefined;
    createDestinationAccount?: boolean | undefined;
    /** Optional field for Canton, if true it will create a transfer offer */
    offer?: boolean | undefined;
    /** Optional field for Canton, especially useful in the context of offers */
    expiresAt?: string | undefined;
    targetChain?: string | undefined;
    externalId?: string | undefined;
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
    /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
    feeSponsorId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Erc20";
    contract: string;
    amount: string;
    priority?: ("Slow" | "Standard" | "Fast") | undefined;
    externalId?: string | undefined;
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
    /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
    feeSponsorId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Trc10";
    tokenId: string;
    amount: string;
    externalId?: string | undefined;
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
    /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
    feeSponsorId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Trc20";
    contract: string;
    amount: string;
    externalId?: string | undefined;
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
    /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
    feeSponsorId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Asa";
    assetId: string;
    amount: string;
    externalId?: string | undefined;
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
    /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
    feeSponsorId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Sep41";
    issuer: string;
    assetCode: string;
    amount: string;
    externalId?: string | undefined;
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
    /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
    feeSponsorId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Spl" | "Spl2022";
    amount: string;
    mint: string;
    createDestinationAccount?: boolean | undefined;
    externalId?: string | undefined;
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
    /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
    feeSponsorId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Tep74";
    master: string;
    amount: string;
    externalId?: string | undefined;
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
    /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
    feeSponsorId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
};

export type CreateDepositParams = {
    exchangeId: string;
    accountId: string;
};

export type CreateDepositResponse = {
    id: string;
    exchangeId: string;
    accountId: string;
    transferId?: string | undefined;
    exchangeReference?: string | undefined;
    kind: "Withdrawal" | "Deposit";
    walletId: string;
    requester: {
        userId: string;
        tokenId?: string | undefined;
    };
    requestBody: {
        kind: "Native";
        amount: string;
        priority?: ("Slow" | "Standard" | "Fast") | undefined;
        createDestinationAccount?: boolean | undefined;
        /** Optional field for Canton, if true it will create a transfer offer */
        offer?: boolean | undefined;
        /** Optional field for Canton, especially useful in the context of offers */
        expiresAt?: string | undefined;
        targetChain?: string | undefined;
        externalId?: string | undefined;
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
        /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
        feeSponsorId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
        priority?: ("Slow" | "Standard" | "Fast") | undefined;
        externalId?: string | undefined;
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
        /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
        feeSponsorId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Trc10";
        tokenId: string;
        amount: string;
        externalId?: string | undefined;
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
        /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
        feeSponsorId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Trc20";
        contract: string;
        amount: string;
        externalId?: string | undefined;
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
        /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
        feeSponsorId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Asa";
        assetId: string;
        amount: string;
        externalId?: string | undefined;
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
        /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
        feeSponsorId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Sep41";
        issuer: string;
        assetCode: string;
        amount: string;
        externalId?: string | undefined;
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
        /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
        feeSponsorId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Spl" | "Spl2022";
        amount: string;
        mint: string;
        createDestinationAccount?: boolean | undefined;
        externalId?: string | undefined;
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
        /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
        feeSponsorId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Tep74";
        master: string;
        amount: string;
        externalId?: string | undefined;
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
        /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
        feeSponsorId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    };
    dateCreated: string;
};

export type CreateDepositRequest = CreateDepositParams & { body: CreateDepositBody }

export type CreateExchangeBody = {
    name?: string | undefined;
    kind: "Binance" | "Kraken" | "CoinbaseApp" | "CoinbasePrime";
    readConfiguration: {
        publicApiKey: string;
        privateApiKey: string;
        password?: string | undefined;
        otp?: string | undefined;
    };
    writeConfiguration: {
        publicApiKey: string;
        privateApiKey: string;
        password?: string | undefined;
        otp?: string | undefined;
    };
};

export type CreateExchangeResponse = {
    id: string;
    name?: string | undefined;
    kind: "Binance" | "Kraken" | "CoinbaseApp" | "CoinbasePrime";
    dateCreated: string;
};

export type CreateExchangeRequest = { body: CreateExchangeBody }

export type CreateWithdrawalBody = {
    kind: "Native";
    amount: string;
    priority?: ("Slow" | "Standard" | "Fast") | undefined;
    createDestinationAccount?: boolean | undefined;
    /** Optional field for Canton, if true it will create a transfer offer */
    offer?: boolean | undefined;
    /** Optional field for Canton, especially useful in the context of offers */
    expiresAt?: string | undefined;
    targetChain?: string | undefined;
    externalId?: string | undefined;
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
    /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
    feeSponsorId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Erc20";
    contract: string;
    amount: string;
    priority?: ("Slow" | "Standard" | "Fast") | undefined;
    externalId?: string | undefined;
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
    /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
    feeSponsorId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Trc10";
    tokenId: string;
    amount: string;
    externalId?: string | undefined;
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
    /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
    feeSponsorId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Trc20";
    contract: string;
    amount: string;
    externalId?: string | undefined;
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
    /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
    feeSponsorId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Asa";
    assetId: string;
    amount: string;
    externalId?: string | undefined;
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
    /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
    feeSponsorId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Sep41";
    issuer: string;
    assetCode: string;
    amount: string;
    externalId?: string | undefined;
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
    /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
    feeSponsorId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Spl" | "Spl2022";
    amount: string;
    mint: string;
    createDestinationAccount?: boolean | undefined;
    externalId?: string | undefined;
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
    /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
    feeSponsorId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Tep74";
    master: string;
    amount: string;
    externalId?: string | undefined;
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
    /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
    feeSponsorId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
};

export type CreateWithdrawalParams = {
    exchangeId: string;
    accountId: string;
};

export type CreateWithdrawalResponse = {
    id: string;
    exchangeId: string;
    accountId: string;
    transferId?: string | undefined;
    exchangeReference?: string | undefined;
    kind: "Withdrawal" | "Deposit";
    walletId: string;
    requester: {
        userId: string;
        tokenId?: string | undefined;
    };
    requestBody: {
        kind: "Native";
        amount: string;
        priority?: ("Slow" | "Standard" | "Fast") | undefined;
        createDestinationAccount?: boolean | undefined;
        /** Optional field for Canton, if true it will create a transfer offer */
        offer?: boolean | undefined;
        /** Optional field for Canton, especially useful in the context of offers */
        expiresAt?: string | undefined;
        targetChain?: string | undefined;
        externalId?: string | undefined;
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
        /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
        feeSponsorId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
        priority?: ("Slow" | "Standard" | "Fast") | undefined;
        externalId?: string | undefined;
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
        /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
        feeSponsorId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Trc10";
        tokenId: string;
        amount: string;
        externalId?: string | undefined;
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
        /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
        feeSponsorId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Trc20";
        contract: string;
        amount: string;
        externalId?: string | undefined;
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
        /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
        feeSponsorId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Asa";
        assetId: string;
        amount: string;
        externalId?: string | undefined;
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
        /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
        feeSponsorId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Sep41";
        issuer: string;
        assetCode: string;
        amount: string;
        externalId?: string | undefined;
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
        /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
        feeSponsorId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Spl" | "Spl2022";
        amount: string;
        mint: string;
        createDestinationAccount?: boolean | undefined;
        externalId?: string | undefined;
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
        /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
        feeSponsorId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Tep74";
        master: string;
        amount: string;
        externalId?: string | undefined;
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
        /** Id of the fee sponsor that will be used to pay for your transfer fee, it might not be available for all blockchains */
        feeSponsorId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    };
    dateCreated: string;
};

export type CreateWithdrawalRequest = CreateWithdrawalParams & { body: CreateWithdrawalBody }

export type DeleteExchangeParams = {
    exchangeId: string;
};

export type DeleteExchangeResponse = {
    deleted: true;
};

export type DeleteExchangeRequest = DeleteExchangeParams

export type GetExchangeParams = {
    exchangeId: string;
};

export type GetExchangeResponse = {
    id: string;
    name?: string | undefined;
    kind: "Binance" | "Kraken" | "CoinbaseApp" | "CoinbasePrime";
    dateCreated: string;
};

export type GetExchangeRequest = GetExchangeParams

export type ListAccountAssetsParams = {
    exchangeId: string;
    accountId: string;
};

export type ListAccountAssetsQuery = {
    limit?: number | undefined;
    paginationToken?: string | undefined;
};

export type ListAccountAssetsResponse = {
    items: {
        symbol: string;
        balance: string;
    }[];
    nextPageToken?: string | undefined;
};

export type ListAccountAssetsRequest = ListAccountAssetsParams & { query?: ListAccountAssetsQuery }

export type ListAccountsParams = {
    exchangeId: string;
};

export type ListAccountsQuery = {
    limit?: number | undefined;
    paginationToken?: string | undefined;
};

export type ListAccountsResponse = {
    items: {
        id: string;
        name?: string | undefined;
        exchangeId: string;
        exchangeName?: string | undefined;
    }[];
    nextPageToken?: string | undefined;
};

export type ListAccountsRequest = ListAccountsParams & { query?: ListAccountsQuery }

export type ListAssetWithdrawalNetworksParams = {
    exchangeId: string;
    accountId: string;
    asset: string;
};

export type ListAssetWithdrawalNetworksResponse = (({
    kind: "Native";
} | {
    kind: "Aip21";
    metadata: string;
} | {
    kind: "Asa";
    assetId: string;
} | {
    kind: "Erc20" | "Trc20";
    contract: string;
} | {
    kind: "Hts";
    tokenId: string;
} | {
    kind: "Coin" | "LockedCoin";
    coin: string;
} | {
    kind: "Asset";
    assetId: string;
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
    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
    decimals: number;
})[];

export type ListAssetWithdrawalNetworksRequest = ListAssetWithdrawalNetworksParams

export type ListExchangesQuery = {
    limit?: number | undefined;
    paginationToken?: string | undefined;
};

export type ListExchangesResponse = {
    items: {
        id: string;
        name?: string | undefined;
        kind: "Binance" | "Kraken" | "CoinbaseApp" | "CoinbasePrime";
        dateCreated: string;
    }[];
    nextPageToken?: string | undefined;
};

export type ListExchangesRequest = { query?: ListExchangesQuery }

