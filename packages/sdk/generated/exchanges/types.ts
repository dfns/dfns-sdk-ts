export type CreateDepositBody = {
    kind: "Native";
    /** The amount of native tokens to transfer in minimum denomination. */
    amount: string;
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
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Erc20";
    /** The ERC-20 contract address. */
    contract: string;
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
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Trc10";
    /** The token ID. */
    tokenId: string;
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
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Trc20";
    /** The smart contract address. */
    contract: string;
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
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Asa";
    /** The token asset id.  */
    assetId: string;
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
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Sep41";
    /** The asset issuer address. */
    issuer: string;
    /** The asset code. */
    assetCode: string;
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
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Spl" | "Spl2022";
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
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Tep74";
    /** The Jetton master contract address. */
    master: string;
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
    walletId: string;
    otp?: string | undefined;
};

export type CreateDepositParams = {
    /** The exchange id obtained from the Create Exchange endpoint. Ex: `ex-1f04s-lqc9q-xxxxxxxxxxxxxxxx` */
    exchangeId: string;
    /** Unique identifier for the account like "spot" */
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
        /** The amount of native tokens to transfer in minimum denomination. */
        amount: string;
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
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Erc20";
        /** The ERC-20 contract address. */
        contract: string;
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
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Trc10";
        /** The token ID. */
        tokenId: string;
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
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Trc20";
        /** The smart contract address. */
        contract: string;
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
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Asa";
        /** The token asset id.  */
        assetId: string;
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
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Sep41";
        /** The asset issuer address. */
        issuer: string;
        /** The asset code. */
        assetCode: string;
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
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Spl" | "Spl2022";
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
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Tep74";
        /** The Jetton master contract address. */
        master: string;
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
    /** The amount of native tokens to transfer in minimum denomination. */
    amount: string;
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
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Erc20";
    /** The ERC-20 contract address. */
    contract: string;
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
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Trc10";
    /** The token ID. */
    tokenId: string;
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
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Trc20";
    /** The smart contract address. */
    contract: string;
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
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Asa";
    /** The token asset id.  */
    assetId: string;
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
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Sep41";
    /** The asset issuer address. */
    issuer: string;
    /** The asset code. */
    assetCode: string;
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
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Spl" | "Spl2022";
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
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Tep74";
    /** The Jetton master contract address. */
    master: string;
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
    walletId: string;
    otp?: string | undefined;
};

export type CreateWithdrawalParams = {
    /** The exchange id obtained from the Create Exchange endpoint. Ex: `ex-1f04s-lqc9q-xxxxxxxxxxxxxxxx` */
    exchangeId: string;
    /** Unique identifier for the account like "spot" */
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
        /** The amount of native tokens to transfer in minimum denomination. */
        amount: string;
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
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Erc20";
        /** The ERC-20 contract address. */
        contract: string;
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
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Trc10";
        /** The token ID. */
        tokenId: string;
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
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Trc20";
        /** The smart contract address. */
        contract: string;
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
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Asa";
        /** The token asset id.  */
        assetId: string;
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
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Sep41";
        /** The asset issuer address. */
        issuer: string;
        /** The asset code. */
        assetCode: string;
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
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Spl" | "Spl2022";
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
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Tep74";
        /** The Jetton master contract address. */
        master: string;
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
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
};

export type ListAccountAssetsResponse = {
    /** Current page items. */
    items: {
        symbol: string;
        balance: string;
    }[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListAccountAssetsRequest = ListAccountAssetsParams & { query?: ListAccountAssetsQuery }

export type ListAccountsParams = {
    exchangeId: string;
};

export type ListAccountsQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
};

export type ListAccountsResponse = {
    /** Current page items. */
    items: {
        id: string;
        name?: string | undefined;
        exchangeId: string;
        exchangeName?: string | undefined;
    }[];
    /** token to use as `paginationToken` to request the next page. */
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
    kind: "Cis2";
    tokenAddress: string;
} | {
    kind: "Erc20" | "Snip2" | "Trc20";
    contract: string;
} | {
    kind: "Hts";
    tokenId: string;
} | {
    kind: "Cip56";
    instrumentId: string;
    instrumentAdmin: string;
} | {
    kind: "Coin" | "LockedCoin";
    coin: string;
} | {
    kind: "Asset";
    assetId: string;
} | {
    kind: "Cis7";
    tokenId: string;
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
    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TempoAndantino" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "XrpLedger" | "XrpLedgerTestnet";
    decimals: number;
})[];

export type ListAssetWithdrawalNetworksRequest = ListAssetWithdrawalNetworksParams

export type ListExchangesQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
};

export type ListExchangesResponse = {
    /** Current page items. */
    items: {
        id: string;
        name?: string | undefined;
        kind: "Binance" | "Kraken" | "CoinbaseApp" | "CoinbasePrime";
        dateCreated: string;
    }[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListExchangesRequest = { query?: ListExchangesQuery }

