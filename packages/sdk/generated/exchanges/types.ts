export type CreateDepositBody = {
    kind: "Native";
    amount: string;
    priority?: ("Slow" | "Standard" | "Fast") | undefined;
    from: string | string | string | string | string | string | string | string | string | string | string | string | string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismSepolia" | "Origyn" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "ArbitrumGoerli" | "BaseGoerli" | "Cardano" | "CardanoPreprod" | "Kusama" | "OptimismGoerli" | "Polkadot" | "Westend" | "Tezos" | "TezosGhostnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
    otp?: string | undefined;
} | {
    kind: "Erc20";
    contract: string;
    amount: string;
    priority?: ("Slow" | "Standard" | "Fast") | undefined;
    from: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismSepolia" | "Origyn" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "ArbitrumGoerli" | "BaseGoerli" | "Cardano" | "CardanoPreprod" | "Kusama" | "OptimismGoerli" | "Polkadot" | "Westend" | "Tezos" | "TezosGhostnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
    otp?: string | undefined;
} | {
    kind: "Erc721";
    contract: string;
    tokenId: string;
    priority?: ("Slow" | "Standard" | "Fast") | undefined;
    from: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismSepolia" | "Origyn" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "ArbitrumGoerli" | "BaseGoerli" | "Cardano" | "CardanoPreprod" | "Kusama" | "OptimismGoerli" | "Polkadot" | "Westend" | "Tezos" | "TezosGhostnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
    otp?: string | undefined;
} | {
    kind: "Trc10";
    tokenId: string;
    amount: string;
    from: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismSepolia" | "Origyn" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "ArbitrumGoerli" | "BaseGoerli" | "Cardano" | "CardanoPreprod" | "Kusama" | "OptimismGoerli" | "Polkadot" | "Westend" | "Tezos" | "TezosGhostnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
    otp?: string | undefined;
} | {
    kind: "Trc20";
    contract: string;
    amount: string;
    from: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismSepolia" | "Origyn" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "ArbitrumGoerli" | "BaseGoerli" | "Cardano" | "CardanoPreprod" | "Kusama" | "OptimismGoerli" | "Polkadot" | "Westend" | "Tezos" | "TezosGhostnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
    otp?: string | undefined;
} | {
    kind: "Trc721";
    contract: string;
    tokenId: string;
    from: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismSepolia" | "Origyn" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "ArbitrumGoerli" | "BaseGoerli" | "Cardano" | "CardanoPreprod" | "Kusama" | "OptimismGoerli" | "Polkadot" | "Westend" | "Tezos" | "TezosGhostnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
    otp?: string | undefined;
} | {
    kind: "Asa";
    assetId: string;
    amount: string;
    from: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismSepolia" | "Origyn" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "ArbitrumGoerli" | "BaseGoerli" | "Cardano" | "CardanoPreprod" | "Kusama" | "OptimismGoerli" | "Polkadot" | "Westend" | "Tezos" | "TezosGhostnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
    otp?: string | undefined;
} | {
    kind: "Sep41";
    issuer: string;
    assetCode: string;
    amount: string;
    from: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismSepolia" | "Origyn" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "ArbitrumGoerli" | "BaseGoerli" | "Cardano" | "CardanoPreprod" | "Kusama" | "OptimismGoerli" | "Polkadot" | "Westend" | "Tezos" | "TezosGhostnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
    otp?: string | undefined;
} | {
    kind: "Spl" | "Spl2022";
    amount: string;
    mint: string;
    createDestinationAccount?: boolean | undefined;
    from: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismSepolia" | "Origyn" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "ArbitrumGoerli" | "BaseGoerli" | "Cardano" | "CardanoPreprod" | "Kusama" | "OptimismGoerli" | "Polkadot" | "Westend" | "Tezos" | "TezosGhostnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
    otp?: string | undefined;
} | {
    kind: "Tep74";
    master: string;
    amount: string;
    from: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismSepolia" | "Origyn" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "ArbitrumGoerli" | "BaseGoerli" | "Cardano" | "CardanoPreprod" | "Kusama" | "OptimismGoerli" | "Polkadot" | "Westend" | "Tezos" | "TezosGhostnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
    otp?: string | undefined;
};

export type CreateDepositParams = {
    exchangeId: string;
    accountId: string;
};

export type CreateDepositResponse = {
    id: string;
    walletId: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "Ton" | "TonTestnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    requester: {
        userId: string;
        tokenId?: string | undefined;
        appId?: string | undefined;
    };
    requestBody: {
        kind: "Native";
        to: string | string | string | string | string | string | string | string | string | string | string | string | string;
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
        createDestinationAccount?: boolean | undefined;
    } | {
        kind: "Tep74";
        to: string;
        master: string;
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

export type CreateDepositRequest = CreateDepositParams & { body: CreateDepositBody }

export type CreateExchangeBody = {
    name?: string | undefined;
    kind: "Binance" | "Kraken" | "Coinbase" | "OKX" | "Bitstamp";
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
    kind: "Binance" | "Kraken" | "Coinbase" | "OKX" | "Bitstamp";
    dateCreated: string;
};

export type CreateExchangeRequest = { body: CreateExchangeBody }

export type CreateWithdrawalBody = {
    kind: "Native";
    to: string | string | string | string | string | string | string | string | string | string | string | string | string;
    amount: string;
    priority?: ("Slow" | "Standard" | "Fast") | undefined;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismSepolia" | "Origyn" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "ArbitrumGoerli" | "BaseGoerli" | "Cardano" | "CardanoPreprod" | "Kusama" | "OptimismGoerli" | "Polkadot" | "Westend" | "Tezos" | "TezosGhostnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
    otp?: string | undefined;
} | {
    kind: "Erc20";
    contract: string;
    to: string;
    amount: string;
    priority?: ("Slow" | "Standard" | "Fast") | undefined;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismSepolia" | "Origyn" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "ArbitrumGoerli" | "BaseGoerli" | "Cardano" | "CardanoPreprod" | "Kusama" | "OptimismGoerli" | "Polkadot" | "Westend" | "Tezos" | "TezosGhostnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
    otp?: string | undefined;
} | {
    kind: "Erc721";
    contract: string;
    to: string;
    tokenId: string;
    priority?: ("Slow" | "Standard" | "Fast") | undefined;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismSepolia" | "Origyn" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "ArbitrumGoerli" | "BaseGoerli" | "Cardano" | "CardanoPreprod" | "Kusama" | "OptimismGoerli" | "Polkadot" | "Westend" | "Tezos" | "TezosGhostnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
    otp?: string | undefined;
} | {
    kind: "Trc10";
    tokenId: string;
    to: string;
    amount: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismSepolia" | "Origyn" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "ArbitrumGoerli" | "BaseGoerli" | "Cardano" | "CardanoPreprod" | "Kusama" | "OptimismGoerli" | "Polkadot" | "Westend" | "Tezos" | "TezosGhostnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
    otp?: string | undefined;
} | {
    kind: "Trc20";
    contract: string;
    to: string;
    amount: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismSepolia" | "Origyn" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "ArbitrumGoerli" | "BaseGoerli" | "Cardano" | "CardanoPreprod" | "Kusama" | "OptimismGoerli" | "Polkadot" | "Westend" | "Tezos" | "TezosGhostnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
    otp?: string | undefined;
} | {
    kind: "Trc721";
    contract: string;
    to: string;
    tokenId: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismSepolia" | "Origyn" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "ArbitrumGoerli" | "BaseGoerli" | "Cardano" | "CardanoPreprod" | "Kusama" | "OptimismGoerli" | "Polkadot" | "Westend" | "Tezos" | "TezosGhostnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
    otp?: string | undefined;
} | {
    kind: "Asa";
    assetId: string;
    to: string;
    amount: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismSepolia" | "Origyn" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "ArbitrumGoerli" | "BaseGoerli" | "Cardano" | "CardanoPreprod" | "Kusama" | "OptimismGoerli" | "Polkadot" | "Westend" | "Tezos" | "TezosGhostnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
    otp?: string | undefined;
} | {
    kind: "Sep41";
    issuer: string;
    assetCode: string;
    to: string;
    amount: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismSepolia" | "Origyn" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "ArbitrumGoerli" | "BaseGoerli" | "Cardano" | "CardanoPreprod" | "Kusama" | "OptimismGoerli" | "Polkadot" | "Westend" | "Tezos" | "TezosGhostnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
    otp?: string | undefined;
} | {
    kind: "Spl" | "Spl2022";
    to: string;
    amount: string;
    mint: string;
    createDestinationAccount?: boolean | undefined;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismSepolia" | "Origyn" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "ArbitrumGoerli" | "BaseGoerli" | "Cardano" | "CardanoPreprod" | "Kusama" | "OptimismGoerli" | "Polkadot" | "Westend" | "Tezos" | "TezosGhostnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
    otp?: string | undefined;
} | {
    kind: "Tep74";
    to: string;
    master: string;
    amount: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismSepolia" | "Origyn" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "ArbitrumGoerli" | "BaseGoerli" | "Cardano" | "CardanoPreprod" | "Kusama" | "OptimismGoerli" | "Polkadot" | "Westend" | "Tezos" | "TezosGhostnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
    otp?: string | undefined;
};

export type CreateWithdrawalParams = {
    exchangeId: string;
    accountId: string;
};

export type CreateWithdrawalResponse = {
    id: string;
    walletId: string;
    network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "Ton" | "TonTestnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
    requester: {
        userId: string;
        tokenId?: string | undefined;
        appId?: string | undefined;
    };
    requestBody: {
        kind: "Native";
        to: string | string | string | string | string | string | string | string | string | string | string | string | string;
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
        createDestinationAccount?: boolean | undefined;
    } | {
        kind: "Tep74";
        to: string;
        master: string;
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
    kind: "Binance" | "Kraken" | "Coinbase" | "OKX" | "Bitstamp";
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
        decimals: number;
        networks: (({
            kind: "Native";
            symbol?: string | undefined;
            decimals: number;
            verified?: boolean | undefined;
            balance: string;
        } | {
            kind: "Asa";
            assetId: string;
            symbol?: string | undefined;
            decimals: number;
            verified?: boolean | undefined;
            balance: string;
        } | {
            kind: "Erc20" | "Trc20";
            contract: string;
            symbol?: string | undefined;
            decimals: number;
            verified?: boolean | undefined;
            balance: string;
        } | {
            kind: "Sep41";
            issuer: string;
            assetCode: string;
            symbol?: string | undefined;
            decimals: number;
            verified?: boolean | undefined;
            balance: string;
        } | {
            kind: "Trc10";
            tokenId: string;
            symbol?: string | undefined;
            decimals: number;
            verified?: boolean | undefined;
            balance: string;
        } | {
            kind: "Spl" | "Spl2022";
            mint: string;
            symbol?: string | undefined;
            decimals: number;
            verified?: boolean | undefined;
            balance: string;
        } | {
            kind: "Tep74";
            master: string;
            symbol?: string | undefined;
            decimals: number;
            verified?: boolean | undefined;
            balance: string;
        }) & {
            network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismSepolia" | "Origyn" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "ArbitrumGoerli" | "BaseGoerli" | "Cardano" | "CardanoPreprod" | "Kusama" | "OptimismGoerli" | "Polkadot" | "Westend" | "Tezos" | "TezosGhostnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
        })[];
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
    symbol?: string | undefined;
    network?: ("Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "Ton" | "TonTestnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA") | undefined;
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

export type ListExchangesQuery = {
    limit?: number | undefined;
    paginationToken?: string | undefined;
};

export type ListExchangesResponse = {
    items: {
        id: string;
        name?: string | undefined;
        kind: "Binance" | "Kraken" | "Coinbase" | "OKX" | "Bitstamp";
        dateCreated: string;
    }[];
    nextPageToken?: string | undefined;
};

export type ListExchangesRequest = { query?: ListExchangesQuery }

