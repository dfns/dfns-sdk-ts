export type CreateDepositBody = {
    kind: "Native";
    amount: string;
    priority?: ("Slow" | "Standard" | "Fast") | undefined;
    externalId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Erc20";
    contract: string;
    amount: string;
    priority?: ("Slow" | "Standard" | "Fast") | undefined;
    externalId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Trc10";
    tokenId: string;
    amount: string;
    externalId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Trc20";
    contract: string;
    amount: string;
    externalId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Asa";
    assetId: string;
    amount: string;
    externalId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Sep41";
    issuer: string;
    assetCode: string;
    amount: string;
    externalId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Spl" | "Spl2022";
    amount: string;
    mint: string;
    createDestinationAccount?: boolean | undefined;
    externalId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Tep74";
    master: string;
    amount: string;
    externalId?: string | undefined;
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
        appId?: string | undefined;
    };
    requestBody: {
        kind: "Native";
        amount: string;
        priority?: ("Slow" | "Standard" | "Fast") | undefined;
        externalId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
        priority?: ("Slow" | "Standard" | "Fast") | undefined;
        externalId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Trc10";
        tokenId: string;
        amount: string;
        externalId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Trc20";
        contract: string;
        amount: string;
        externalId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Asa";
        assetId: string;
        amount: string;
        externalId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Sep41";
        issuer: string;
        assetCode: string;
        amount: string;
        externalId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Spl" | "Spl2022";
        amount: string;
        mint: string;
        createDestinationAccount?: boolean | undefined;
        externalId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Tep74";
        master: string;
        amount: string;
        externalId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    };
    dateCreated: string;
};

export type CreateDepositRequest = CreateDepositParams & { body: CreateDepositBody }

export type CreateExchangeBody = {
    name?: string | undefined;
    kind: "Binance" | "Kraken" | "CoinbaseApp";
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
    kind: "Binance" | "Kraken" | "CoinbaseApp";
    dateCreated: string;
};

export type CreateExchangeRequest = { body: CreateExchangeBody }

export type CreateWithdrawalBody = {
    kind: "Native";
    amount: string;
    priority?: ("Slow" | "Standard" | "Fast") | undefined;
    externalId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Erc20";
    contract: string;
    amount: string;
    priority?: ("Slow" | "Standard" | "Fast") | undefined;
    externalId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Trc10";
    tokenId: string;
    amount: string;
    externalId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Trc20";
    contract: string;
    amount: string;
    externalId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Asa";
    assetId: string;
    amount: string;
    externalId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Sep41";
    issuer: string;
    assetCode: string;
    amount: string;
    externalId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Spl" | "Spl2022";
    amount: string;
    mint: string;
    createDestinationAccount?: boolean | undefined;
    externalId?: string | undefined;
    walletId: string;
    otp?: string | undefined;
} | {
    kind: "Tep74";
    master: string;
    amount: string;
    externalId?: string | undefined;
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
        appId?: string | undefined;
    };
    requestBody: {
        kind: "Native";
        amount: string;
        priority?: ("Slow" | "Standard" | "Fast") | undefined;
        externalId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
        priority?: ("Slow" | "Standard" | "Fast") | undefined;
        externalId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Trc10";
        tokenId: string;
        amount: string;
        externalId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Trc20";
        contract: string;
        amount: string;
        externalId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Asa";
        assetId: string;
        amount: string;
        externalId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Sep41";
        issuer: string;
        assetCode: string;
        amount: string;
        externalId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Spl" | "Spl2022";
        amount: string;
        mint: string;
        createDestinationAccount?: boolean | undefined;
        externalId?: string | undefined;
        walletId: string;
        otp?: string | undefined;
    } | {
        kind: "Tep74";
        master: string;
        amount: string;
        externalId?: string | undefined;
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
    kind: "Binance" | "Kraken" | "CoinbaseApp";
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
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kaspa" | "KaspaTestnet11" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismSepolia" | "Origyn" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Race" | "RaceSepolia" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "ArbitrumGoerli" | "BaseGoerli" | "Cardano" | "CardanoPreprod" | "Kusama" | "OptimismGoerli" | "Polkadot" | "Westend" | "Tezos" | "TezosGhostnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
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
        kind: "Binance" | "Kraken" | "CoinbaseApp";
        dateCreated: string;
    }[];
    nextPageToken?: string | undefined;
};

export type ListExchangesRequest = { query?: ListExchangesQuery }

