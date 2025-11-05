export type AcceptOfferParams = {
    /** Wallet id. */
    walletId: string;
    /** Offer id. */
    offerId: string;
};

export type AcceptOfferResponse = {
    /** Offer id. */
    id: string;
    /** Organization id. */
    orgId: string;
    /** Wallet id. */
    walletId: string;
    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
    kind: "Native" | "Aip21" | "Asa" | "Coin" | "Erc20" | "Erc721" | "Asset" | "Hip17" | "Hts" | "Sep41" | "Spl" | "Spl2022" | "Snip2" | "Snip3" | "Tep74" | "Trc10" | "Trc20" | "Trc721";
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
    txHash: string;
    status: "Pending" | "Accepted" | "Rejected" | "Expired";
    from: string;
    to: string;
    value: string;
    timestamp: string;
    expiresAt?: string | undefined;
};

export type AcceptOfferRequest = AcceptOfferParams

export type ActivateWalletBody = {};

export type ActivateWalletParams = {
    /** Wallet id. */
    walletId: string;
};

export type ActivateWalletResponse = {
    id: string;
    walletId: string;
    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
        request: {};
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
};

export type ActivateWalletRequest = ActivateWalletParams & { body: ActivateWalletBody }

export type BroadcastTransactionBody = {
    kind: "Transaction";
    /** The unsigned hex encoded transaction. EVM transactions also accept JSON objects. */
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
};

export type BroadcastTransactionParams = {
    walletId: string;
};

export type BroadcastTransactionResponse = {
    id: string;
    walletId: string;
    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
        request: {};
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
};

export type BroadcastTransactionRequest = BroadcastTransactionParams & { body: BroadcastTransactionBody }

export type CreateWalletBody = {
    /** Network used for the wallet. */
    network: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | ("KeyECDSA" | "KeyEdDSA" | "KeyECDSAStark");
    /** Wallet nickname. */
    name?: string | undefined;
    /** Options for the wallet's underlying key */
    signingKey?: {
        /** Use this parameter to create a wallet from an existing key. This enables one key to be used across multiple networks and have the same address if networks share the same address format, ex. `Ethereum` and `Polygon`. If specified, requires the `Keys:Reuse` permission. If the key is delegated to an end user, then the new wallet will be automatically delegated to the same end user. */
        id?: string | undefined;
        /** Use this to specify the new key scheme for networks that support multiple key formats. ex. use `Schnorr` to create a `Bitcoin Taproot` wallet. */
        scheme?: ("DH" | "ECDSA" | "EdDSA" | "Schnorr") | undefined;
        /** Use this to specify the new key curve for networks that support multiple key formats. */
        curve?: ("ed25519" | "secp256k1" | "stark") | undefined;
        /** Use this to specify the key store the key material is saved to. */
        storeId?: string | undefined;
        /** Use this for hierarchical deterministic key derivation. */
        deriveFrom?: {
            /** Key id. */
            keyId: string;
            /** Use this to specify the derivation path of the signing key. One will be auto generated if left blank. */
            path?: string | undefined;
        } | undefined;
    } | undefined;
    /** ID of the end user to delegate this wallet to. The wallet will only be usable by the end user. More info [here](https://docs.dfns.co/advanced/delegated-signing). */
    delegateTo?: string | undefined;
    /** Specify if you want to create the wallet from a service account and later [delegate it](/api-reference/keys/delegate-key) to an end user. */
    delayDelegation?: boolean | undefined;
    /** User-defined value that can be used to correlate the entity with an external system */
    externalId?: string | undefined;
    /** List of tags to be created for this wallet. If specified, requires the `Wallets:Tags:Add` permission, like the [Tag Wallet](https://docs.dfns.co/api-reference/wallets/tag-wallet) endpoint. */
    tags?: string[] | undefined;
    /** Id of the validator on which the wallet is created for Canton networks */
    validatorId?: string | undefined;
};

export type CreateWalletResponse = {
    /** ID of the wallet. */
    id: string;
    /** Network this wallet is bound to. */
    network: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | ("KeyECDSA" | "KeyEdDSA" | "KeyECDSAStark");
    /** Wallet address on its corresponding network. */
    address?: string | undefined;
    /** Details about the key underlying the wallet. */
    signingKey: {
        /** Key id. */
        id: string;
        /** Key scheme. */
        scheme: "DH" | "ECDSA" | "EdDSA" | "Schnorr";
        curve: "ed25519" | "secp256k1" | "stark";
        /** Hex-encoded value of the public key. */
        publicKey: string;
        /** The end user ID the key (and wallet) is delegated to. */
        delegatedTo?: string | undefined;
    };
    /** Wallet status. */
    status: "Active" | "Archived";
    /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date string when wallet was created. */
    dateCreated: string;
    /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date string when wallet was deleted. */
    dateDeleted?: string | undefined;
    /** Wallet nickname. */
    name?: string | undefined;
    /** Whether the wallet is owned by an end user (non-custodial), or by your organization (custodial). */
    custodial: boolean;
    /** User-defined value that can be used to correlate the entity with an external system. */
    externalId?: string | undefined;
    /** List of tags. */
    tags: string[];
    /** Id of the validator on which the wallet is created for Canton networks */
    validatorId?: string | undefined;
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
        protocol: ("CGGMP24" | "FROST" | "FROST_BITCOIN" | "GLOW20_DH" | "KU23") | "CGGMP21";
        curve: "ed25519" | "secp256k1" | "stark";
    }[];
};

export type ExportWalletParams = {
    walletId: string;
};

export type ExportWalletResponse = {
    publicKey: string;
    protocol: ("CGGMP24" | "FROST" | "FROST_BITCOIN" | "GLOW20_DH" | "KU23") | "CGGMP21";
    curve: "ed25519" | "secp256k1" | "stark";
    /** The TSS threshold of the wallet private signing key shares */
    minSigners: number;
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
    /** 32-byte hash in hex encoded format. */
    hash: string;
    /** Required when signing with a Schnorr key. Specify the merkle root for tweaking the signing key, or the empty string "" to tweak with the default merkle root. */
    taprootMerkleRoot?: string | undefined;
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
    externalId?: string | undefined;
} | {
    kind: "Message";
    /** An arbitrary hex encoded message. */
    message: string;
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
    externalId?: string | undefined;
} | {
    kind: "Transaction";
    /** The unsigned hex-encoded transaction. */
    transaction: string;
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
        /** The address of the contract that will verify the signature. */
        verifyingContract?: string | undefined;
        /** 32-byte value as a last-resort domain separator. */
        salt?: string | undefined;
    };
    /** Structured message to sign. */
    message: {
        [x: string]: unknown;
    };
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
    externalId?: string | undefined;
} | {
    kind: "Psbt";
    /** The hex encoded PSBT. */
    psbt: string;
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
    externalId?: string | undefined;
} | {
    kind: "Bip322";
    /** The generic message hex encoded. */
    message: string;
    /** Defaults to Simple if not present. The formatted signature is returned in the `signedData` field in the response. */
    format?: ("Simple" | "Full") | undefined;
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
    externalId?: string | undefined;
} | {
    kind: "PactCommand";
    /** The Pact command JSON, serialized into a string. */
    command: string;
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
    externalId?: string | undefined;
} | {
    kind: "SignDocDirect";
    /** The hex encoded `SignDoc` Protobuf. */
    signDoc: string;
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
    externalId?: string | undefined;
} | {
    kind: "Cip8";
    /** The generic message hex encoded. */
    payload?: string | undefined;
    /** Allows an application to ask the user to sign some extra data but NOT put it inside the COSE structure (only as part of the data to sign). */
    externalAad?: string | undefined;
    context: "Signature1";
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
    blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
    /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
    externalId?: string | undefined;
};

export type GenerateSignatureParams = {
    walletId: string;
};

export type GenerateSignatureResponse = {
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
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "Message";
        /** An arbitrary hex encoded message. */
        message: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "Transaction";
        /** The unsigned hex-encoded transaction. */
        transaction: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
            /** The address of the contract that will verify the signature. */
            verifyingContract?: string | undefined;
            /** 32-byte value as a last-resort domain separator. */
            salt?: string | undefined;
        };
        /** Structured message to sign. */
        message: {
            [x: string]: unknown;
        };
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "Psbt";
        /** The hex encoded PSBT. */
        psbt: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "Bip322";
        /** The generic message hex encoded. */
        message: string;
        /** Defaults to Simple if not present. The formatted signature is returned in the `signedData` field in the response. */
        format?: ("Simple" | "Full") | undefined;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "PactCommand";
        /** The Pact command JSON, serialized into a string. */
        command: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "SignDocDirect";
        /** The hex encoded `SignDoc` Protobuf. */
        signDoc: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "Cip8";
        /** The generic message hex encoded. */
        payload?: string | undefined;
        /** Allows an application to ask the user to sign some extra data but NOT put it inside the COSE structure (only as part of the data to sign). */
        externalAad?: string | undefined;
        context: "Signature1";
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
    network: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | ("KeyECDSA" | "KeyEdDSA" | "KeyECDSAStark");
    txHash?: string | undefined;
    fee?: string | undefined;
    approvalId?: string | undefined;
    dateRequested: string;
    datePolicyResolved?: string | undefined;
    dateSigned?: string | undefined;
    dateConfirmed?: string | undefined;
    externalId?: string | undefined;
    walletId: string;
};

export type GenerateSignatureRequest = GenerateSignatureParams & { body: GenerateSignatureBody }

export type GetOfferParams = {
    /** Wallet id. */
    walletId: string;
    /** Offer id. */
    offerId: string;
};

export type GetOfferResponse = {
    /** Offer id. */
    id: string;
    /** Organization id. */
    orgId: string;
    /** Wallet id. */
    walletId: string;
    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
    kind: "Native" | "Aip21" | "Asa" | "Coin" | "Erc20" | "Erc721" | "Asset" | "Hip17" | "Hts" | "Sep41" | "Spl" | "Spl2022" | "Snip2" | "Snip3" | "Tep74" | "Trc10" | "Trc20" | "Trc721";
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
    txHash: string;
    status: "Pending" | "Accepted" | "Rejected" | "Expired";
    from: string;
    to: string;
    value: string;
    timestamp: string;
    expiresAt?: string | undefined;
};

export type GetOfferRequest = GetOfferParams

export type GetSignatureParams = {
    walletId: string;
    signatureId: string;
};

export type GetSignatureResponse = {
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
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "Message";
        /** An arbitrary hex encoded message. */
        message: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "Transaction";
        /** The unsigned hex-encoded transaction. */
        transaction: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
            /** The address of the contract that will verify the signature. */
            verifyingContract?: string | undefined;
            /** 32-byte value as a last-resort domain separator. */
            salt?: string | undefined;
        };
        /** Structured message to sign. */
        message: {
            [x: string]: unknown;
        };
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "Psbt";
        /** The hex encoded PSBT. */
        psbt: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "Bip322";
        /** The generic message hex encoded. */
        message: string;
        /** Defaults to Simple if not present. The formatted signature is returned in the `signedData` field in the response. */
        format?: ("Simple" | "Full") | undefined;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "PactCommand";
        /** The Pact command JSON, serialized into a string. */
        command: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "SignDocDirect";
        /** The hex encoded `SignDoc` Protobuf. */
        signDoc: string;
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
        /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
        externalId?: string | undefined;
    } | {
        kind: "Cip8";
        /** The generic message hex encoded. */
        payload?: string | undefined;
        /** Allows an application to ask the user to sign some extra data but NOT put it inside the COSE structure (only as part of the data to sign). */
        externalAad?: string | undefined;
        context: "Signature1";
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
        blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
    network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
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
    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
        request: {};
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
};

export type GetTransactionRequest = GetTransactionParams

export type GetTransferParams = {
    walletId: string;
    transferId: string;
};

export type GetTransferResponse = {
    id: string;
    walletId: string;
    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
        kind: "Snip2";
        /** The Snip2 (ERC-20-like) contract address. */
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
        /** The Snip3 (ERC-721) contract address. */
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
};

export type GetTransferRequest = GetTransferParams

export type GetWalletParams = {
    walletId: string;
};

export type GetWalletResponse = {
    /** ID of the wallet. */
    id: string;
    /** Network this wallet is bound to. */
    network: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | ("KeyECDSA" | "KeyEdDSA" | "KeyECDSAStark");
    /** Wallet address on its corresponding network. */
    address?: string | undefined;
    /** Details about the key underlying the wallet. */
    signingKey: {
        /** Key id. */
        id: string;
        /** Key scheme. */
        scheme: "DH" | "ECDSA" | "EdDSA" | "Schnorr";
        curve: "ed25519" | "secp256k1" | "stark";
        /** Hex-encoded value of the public key. */
        publicKey: string;
        /** The end user ID the key (and wallet) is delegated to. */
        delegatedTo?: string | undefined;
    };
    /** Wallet status. */
    status: "Active" | "Archived";
    /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date string when wallet was created. */
    dateCreated: string;
    /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date string when wallet was deleted. */
    dateDeleted?: string | undefined;
    /** Wallet nickname. */
    name?: string | undefined;
    /** Whether the wallet is owned by an end user (non-custodial), or by your organization (custodial). */
    custodial: boolean;
    /** User-defined value that can be used to correlate the entity with an external system. */
    externalId?: string | undefined;
    /** List of tags. */
    tags: string[];
    /** Id of the validator on which the wallet is created for Canton networks */
    validatorId?: string | undefined;
};

export type GetWalletRequest = GetWalletParams

export type GetWalletAssetsParams = {
    walletId: string;
};

export type GetWalletAssetsQuery = {
    netWorth?: "true" | undefined;
};

export type GetWalletAssetsResponse = {
    walletId: string;
    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
    assets: (({
        kind: "Native";
    } | {
        kind: "Aip21";
        metadata: string;
    } | {
        kind: "Asa";
        assetId: string;
    } | {
        kind: "Erc20" | "Snip2" | "Trc20";
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
        symbol?: string | undefined;
        decimals: number;
        verified?: boolean | undefined;
        balance: string;
        quotes?: {
            [x: string]: number;
        } | undefined;
    })[];
    netWorth?: {
        [x: string]: number;
    } | undefined;
};

export type GetWalletAssetsRequest = GetWalletAssetsParams & { query?: GetWalletAssetsQuery }

export type GetWalletHistoryParams = {
    walletId: string;
};

export type GetWalletHistoryQuery = {
    limit?: string | undefined;
    paginationToken?: string | undefined;
    direction?: ("In" | "Out") | undefined;
    kind?: ("NativeTransfer" | "Aip21Transfer" | "AsaTransfer" | "AssetTransfer" | "CoinTransfer" | "Erc20Transfer" | "Erc721Transfer" | "Hip17Transfer" | "HtsTransfer" | "Kip5Transfer" | "LockedCoinTransfer" | "Snip2Transfer" | "Snip3Transfer" | "Tep74Transfer" | "Trc10Transfer" | "Trc20Transfer" | "Trc721Transfer" | "Sep41Transfer" | "SplTransfer" | "Spl2022Transfer" | "UtxoTransfer") | undefined;
    contract?: string | undefined;
};

export type GetWalletHistoryResponse = {
    walletId: string;
    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
    items: ({
        walletId: string;
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
        kind: "Snip2Transfer";
        contract: string;
        from: string;
        to: string;
        value: string;
        fee?: string | undefined;
    } | {
        walletId: string;
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
        kind: "Snip3Transfer";
        contract: string;
        from: string;
        to: string;
        tokenId: string;
        fee?: string | undefined;
    } | {
        walletId: string;
        direction: "In" | "Out";
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
} | string;

export type GetWalletHistoryRequest = GetWalletHistoryParams & { query?: GetWalletHistoryQuery }

export type GetWalletNftsParams = {
    walletId: string;
};

export type GetWalletNftsResponse = {
    walletId: string;
    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
    nfts: ({
        kind: "Asa";
        /** The NFT id. */
        assetId: string;
        /** The NFT symbol. */
        symbol?: string | undefined;
        /** The NFT metadata URI. */
        tokenUri?: string | undefined;
    } | {
        kind: "Erc721" | "Snip3" | "Trc721";
        /** contract address. */
        contract: string;
        /** The NFT id. */
        tokenId: string;
        /** The NFT symbol. */
        symbol?: string | undefined;
        /** The NFT metadata URI. */
        tokenUri?: string | undefined;
    } | {
        kind: "Hip17";
        /** The NFT id. */
        tokenId: string;
        /** The NFT serial number. */
        serialNumber: string;
        /** The NFT symbol. */
        symbol?: string | undefined;
        /** The NFT metadata URI. */
        tokenUri?: string | undefined;
    })[];
};

export type GetWalletNftsRequest = GetWalletNftsParams

export type ImportWalletBody = {
    name?: string | undefined;
    curve: "ed25519" | "secp256k1" | "stark";
    protocol: ("CGGMP24" | "FROST" | "FROST_BITCOIN" | "GLOW20_DH" | "KU23") | "CGGMP21";
    minSigners: number;
    encryptedKeyShares: {
        signerId: string;
        encryptedKeyShare: string;
    }[];
    masterKey?: boolean | undefined;
    network: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | ("KeyECDSA" | "KeyEdDSA" | "KeyECDSAStark");
    externalId?: string | undefined;
    /** Id of the validator on which the wallet is created */
    validatorId?: string | undefined;
};

export type ImportWalletResponse = {
    /** ID of the wallet. */
    id: string;
    /** Network this wallet is bound to. */
    network: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | ("KeyECDSA" | "KeyEdDSA" | "KeyECDSAStark");
    /** Wallet address on its corresponding network. */
    address?: string | undefined;
    /** Details about the key underlying the wallet. */
    signingKey: {
        /** Key id. */
        id: string;
        /** Key scheme. */
        scheme: "DH" | "ECDSA" | "EdDSA" | "Schnorr";
        curve: "ed25519" | "secp256k1" | "stark";
        /** Hex-encoded value of the public key. */
        publicKey: string;
        /** The end user ID the key (and wallet) is delegated to. */
        delegatedTo?: string | undefined;
    };
    /** Wallet status. */
    status: "Active" | "Archived";
    /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date string when wallet was created. */
    dateCreated: string;
    /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date string when wallet was deleted. */
    dateDeleted?: string | undefined;
    /** Wallet nickname. */
    name?: string | undefined;
    /** Whether the wallet is owned by an end user (non-custodial), or by your organization (custodial). */
    custodial: boolean;
    /** User-defined value that can be used to correlate the entity with an external system. */
    externalId?: string | undefined;
    /** List of tags. */
    tags: string[];
    /** Id of the validator on which the wallet is created for Canton networks */
    validatorId?: string | undefined;
};

export type ImportWalletRequest = { body: ImportWalletBody }

export type ListOffersParams = {
    /** Wallet id. */
    walletId: string;
};

export type ListOffersQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
};

export type ListOffersResponse = {
    /** Current page items. */
    items: {
        /** Offer id. */
        id: string;
        /** Organization id. */
        orgId: string;
        /** Wallet id. */
        walletId: string;
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
        kind: "Native" | "Aip21" | "Asa" | "Coin" | "Erc20" | "Erc721" | "Asset" | "Hip17" | "Hts" | "Sep41" | "Spl" | "Spl2022" | "Snip2" | "Snip3" | "Tep74" | "Trc10" | "Trc20" | "Trc721";
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
        txHash: string;
        status: "Pending" | "Accepted" | "Rejected" | "Expired";
        from: string;
        to: string;
        value: string;
        timestamp: string;
        expiresAt?: string | undefined;
    }[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListOffersRequest = ListOffersParams & { query?: ListOffersQuery }

export type ListOrgWalletHistoryQuery = {
    startTime: string;
    endTime: string;
    limit?: string | undefined;
    paginationToken?: string | undefined;
};

export type ListOrgWalletHistoryResponse = {
    orgId: string;
    items: {
        timestamp: string;
        walletId: string;
        network: string;
        direction: string;
        from?: string | undefined;
        to?: string | undefined;
        amount?: string | undefined;
        tokenId?: string | undefined;
        asset?: string | undefined;
        symbol?: string | undefined;
        decimals?: string | undefined;
        fee?: string | undefined;
        feeSymbol?: string | undefined;
        feeDecimals?: string | undefined;
        txHash: string;
    }[];
    nextPageToken?: string | undefined;
} | string;

export type ListOrgWalletHistoryRequest = { query?: ListOrgWalletHistoryQuery }

export type ListSignaturesParams = {
    walletId: string;
};

export type ListSignaturesQuery = {
    limit?: string | undefined;
    paginationToken?: string | undefined;
};

export type ListSignaturesResponse = {
    keyId: string;
    items: {
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
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
            externalId?: string | undefined;
        } | {
            kind: "Message";
            /** An arbitrary hex encoded message. */
            message: string;
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
            externalId?: string | undefined;
        } | {
            kind: "Transaction";
            /** The unsigned hex-encoded transaction. */
            transaction: string;
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
                /** The address of the contract that will verify the signature. */
                verifyingContract?: string | undefined;
                /** 32-byte value as a last-resort domain separator. */
                salt?: string | undefined;
            };
            /** Structured message to sign. */
            message: {
                [x: string]: unknown;
            };
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
            externalId?: string | undefined;
        } | {
            kind: "Psbt";
            /** The hex encoded PSBT. */
            psbt: string;
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
            externalId?: string | undefined;
        } | {
            kind: "Bip322";
            /** The generic message hex encoded. */
            message: string;
            /** Defaults to Simple if not present. The formatted signature is returned in the `signedData` field in the response. */
            format?: ("Simple" | "Full") | undefined;
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
            externalId?: string | undefined;
        } | {
            kind: "PactCommand";
            /** The Pact command JSON, serialized into a string. */
            command: string;
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
            externalId?: string | undefined;
        } | {
            kind: "SignDocDirect";
            /** The hex encoded `SignDoc` Protobuf. */
            signDoc: string;
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
            /** A unique ID from your system. It can be leveraged to be used as an idempotency key (read more [here](https://docs.dfns.co/api-reference/idempotency)). */
            externalId?: string | undefined;
        } | {
            kind: "Cip8";
            /** The generic message hex encoded. */
            payload?: string | undefined;
            /** Allows an application to ask the user to sign some extra data but NOT put it inside the COSE structure (only as part of the data to sign). */
            externalAad?: string | undefined;
            context: "Signature1";
            network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
            blockchainKind?: ("Algorand" | "Aptos" | "Bitcoin" | "BitcoinCash" | "Canton" | "Cardano" | "Cosmos" | "Evm" | "Hedera" | "Icp" | "Iota" | "Kadena" | "Kaspa" | "Near" | "Polymesh" | "Solana" | "Starknet" | "Stellar" | "Substrate" | "Sui" | "Tezos" | "Ton" | "Tron" | "Xrpl") | undefined;
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
        network?: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | undefined;
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
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            request: {};
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
        network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
            kind: "Snip2";
            /** The Snip2 (ERC-20-like) contract address. */
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
            /** The Snip3 (ERC-721) contract address. */
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
    }[];
    nextPageToken?: string | undefined;
};

export type ListTransfersRequest = ListTransfersParams & { query?: ListTransfersQuery }

export type ListWalletsQuery = {
    limit?: string | undefined;
    paginationToken?: string | undefined;
    owner?: string | undefined;
    /** @deprecated use owner instead */
    ownerId?: string | undefined;
    /** @deprecated use owner instead */
    ownerUsername?: string | undefined;
};

export type ListWalletsResponse = {
    items: {
        /** ID of the wallet. */
        id: string;
        /** Network this wallet is bound to. */
        network: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | ("KeyECDSA" | "KeyEdDSA" | "KeyECDSAStark");
        /** Wallet address on its corresponding network. */
        address?: string | undefined;
        /** Details about the key underlying the wallet. */
        signingKey: {
            /** Key id. */
            id: string;
            /** Key scheme. */
            scheme: "DH" | "ECDSA" | "EdDSA" | "Schnorr";
            curve: "ed25519" | "secp256k1" | "stark";
            /** Hex-encoded value of the public key. */
            publicKey: string;
            /** The end user ID the key (and wallet) is delegated to. */
            delegatedTo?: string | undefined;
        };
        /** Wallet status. */
        status: "Active" | "Archived";
        /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date string when wallet was created. */
        dateCreated: string;
        /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date string when wallet was deleted. */
        dateDeleted?: string | undefined;
        /** Wallet nickname. */
        name?: string | undefined;
        /** Whether the wallet is owned by an end user (non-custodial), or by your organization (custodial). */
        custodial: boolean;
        /** User-defined value that can be used to correlate the entity with an external system. */
        externalId?: string | undefined;
        /** List of tags. */
        tags: string[];
        /** Id of the validator on which the wallet is created for Canton networks */
        validatorId?: string | undefined;
    }[];
    nextPageToken?: string | undefined;
};

export type ListWalletsRequest = { query?: ListWalletsQuery }

export type RejectOfferParams = {
    /** Wallet id. */
    walletId: string;
    /** Offer id. */
    offerId: string;
};

export type RejectOfferResponse = {
    /** Offer id. */
    id: string;
    /** Organization id. */
    orgId: string;
    /** Wallet id. */
    walletId: string;
    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
    kind: "Native" | "Aip21" | "Asa" | "Coin" | "Erc20" | "Erc721" | "Asset" | "Hip17" | "Hts" | "Sep41" | "Spl" | "Spl2022" | "Snip2" | "Snip3" | "Tep74" | "Trc10" | "Trc20" | "Trc721";
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
    txHash: string;
    status: "Pending" | "Accepted" | "Rejected" | "Expired";
    from: string;
    to: string;
    value: string;
    timestamp: string;
    expiresAt?: string | undefined;
};

export type RejectOfferRequest = RejectOfferParams

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
    kind: "Snip2";
    /** The Snip2 (ERC-20-like) contract address. */
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
    /** The Snip3 (ERC-721) contract address. */
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

export type TransferAssetParams = {
    /** The source wallet id (`wa-...`). */
    walletId: string;
};

export type TransferAssetResponse = {
    id: string;
    walletId: string;
    network: "Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet";
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
        kind: "Snip2";
        /** The Snip2 (ERC-20-like) contract address. */
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
        /** The Snip3 (ERC-721) contract address. */
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
};

export type TransferAssetRequest = TransferAssetParams & { body: TransferAssetBody }

export type UntagWalletBody = {
    /** List of tags. */
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
    /** ID of the wallet. */
    id: string;
    /** Network this wallet is bound to. */
    network: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "KadenaTestnet4" | "KadenaTestnet4:1" | "KadenaTestnet4:2" | "KadenaTestnet4:3" | "KadenaTestnet4:4" | "KadenaTestnet4:5" | "KadenaTestnet4:6" | "KadenaTestnet4:7" | "KadenaTestnet4:8" | "KadenaTestnet4:9" | "KadenaTestnet4:10" | "KadenaTestnet4:11" | "KadenaTestnet4:12" | "KadenaTestnet4:13" | "KadenaTestnet4:14" | "KadenaTestnet4:15" | "KadenaTestnet4:16" | "KadenaTestnet4:17" | "KadenaTestnet4:18" | "KadenaTestnet4:19" | "Kadena" | "Kadena:1" | "Kadena:2" | "Kadena:3" | "Kadena:4" | "Kadena:5" | "Kadena:6" | "Kadena:7" | "Kadena:8" | "Kadena:9" | "Kadena:10" | "Kadena:11" | "Kadena:12" | "Kadena:13" | "Kadena:14" | "Kadena:15" | "Kadena:16" | "Kadena:17" | "Kadena:18" | "Kadena:19" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tsc" | "TscTestnet1" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | ("KeyECDSA" | "KeyEdDSA" | "KeyECDSAStark");
    /** Wallet address on its corresponding network. */
    address?: string | undefined;
    /** Details about the key underlying the wallet. */
    signingKey: {
        /** Key id. */
        id: string;
        /** Key scheme. */
        scheme: "DH" | "ECDSA" | "EdDSA" | "Schnorr";
        curve: "ed25519" | "secp256k1" | "stark";
        /** Hex-encoded value of the public key. */
        publicKey: string;
        /** The end user ID the key (and wallet) is delegated to. */
        delegatedTo?: string | undefined;
    };
    /** Wallet status. */
    status: "Active" | "Archived";
    /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date string when wallet was created. */
    dateCreated: string;
    /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date string when wallet was deleted. */
    dateDeleted?: string | undefined;
    /** Wallet nickname. */
    name?: string | undefined;
    /** Whether the wallet is owned by an end user (non-custodial), or by your organization (custodial). */
    custodial: boolean;
    /** User-defined value that can be used to correlate the entity with an external system. */
    externalId?: string | undefined;
    /** List of tags. */
    tags: string[];
    /** Id of the validator on which the wallet is created for Canton networks */
    validatorId?: string | undefined;
};

export type UpdateWalletRequest = UpdateWalletParams & { body: UpdateWalletBody }

