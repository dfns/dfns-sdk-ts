export type CreateSwapBody = {
    sourceWalletId: string;
    quoteId: string;
};

export type CreateSwapResponse = {
    id: string;
    quoteId: string;
    sourceWalletId: string;
    targetWalletId: string;
    status: "PendingPolicyApproval" | "InProgress" | "Completed" | "Failed" | "Rejected";
    quotedSourceAsset: {
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    };
    quotedTargetAsset: {
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    };
    slippageToleranceInBps: number;
    dateCreated: string;
    requestBody: {
        sourceWalletId: string;
        quoteId: string;
    };
    requester: {
        userId: string;
        tokenId?: string | undefined;
    };
};

export type CreateSwapRequest = { body: CreateSwapBody }

export type CreateSwapQuoteBody = {
    provider: "UniswapX" | "UniswapClassic";
    sourceWalletId: string;
    targetWalletId: string;
    sourceAsset: {
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    };
    targetAsset: {
        kind: "Native";
    } | {
        kind: "Erc20";
        contract: string;
    };
    slippageToleranceInBps: number;
};

export type CreateSwapQuoteResponse = {
    id: string;
    sourceWalletId: string;
    targetWalletId: string;
    provider: "UniswapX" | "UniswapClassic";
    sourceAsset: {
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    };
    targetAsset: {
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    };
    slippageToleranceInBps: number;
    dateCreated: string;
    requestBody: {
        provider: "UniswapX" | "UniswapClassic";
        sourceWalletId: string;
        targetWalletId: string;
        sourceAsset: {
            kind: "Native";
            amount: string;
        } | {
            kind: "Erc20";
            contract: string;
            amount: string;
        };
        targetAsset: {
            kind: "Native";
        } | {
            kind: "Erc20";
            contract: string;
        };
        slippageToleranceInBps: number;
    };
    requester: {
        userId: string;
        tokenId?: string | undefined;
    };
};

export type CreateSwapQuoteRequest = { body: CreateSwapQuoteBody }

export type GetSwapParams = {
    swapId: string;
};

export type GetSwapResponse = {
    id: string;
    quoteId: string;
    sourceWalletId: string;
    targetWalletId: string;
    status: "PendingPolicyApproval" | "InProgress" | "Completed" | "Failed" | "Rejected";
    quotedSourceAsset: {
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    };
    quotedTargetAsset: {
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    };
    slippageToleranceInBps: number;
    dateCreated: string;
    requestBody: {
        sourceWalletId: string;
        quoteId: string;
    };
    requester: {
        userId: string;
        tokenId?: string | undefined;
    };
};

export type GetSwapRequest = GetSwapParams

export type GetSwapQuoteParams = {
    quoteId: string;
};

export type GetSwapQuoteResponse = {
    id: string;
    sourceWalletId: string;
    targetWalletId: string;
    provider: "UniswapX" | "UniswapClassic";
    sourceAsset: {
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    };
    targetAsset: {
        kind: "Native";
        amount: string;
    } | {
        kind: "Erc20";
        contract: string;
        amount: string;
    };
    slippageToleranceInBps: number;
    dateCreated: string;
    requestBody: {
        provider: "UniswapX" | "UniswapClassic";
        sourceWalletId: string;
        targetWalletId: string;
        sourceAsset: {
            kind: "Native";
            amount: string;
        } | {
            kind: "Erc20";
            contract: string;
            amount: string;
        };
        targetAsset: {
            kind: "Native";
        } | {
            kind: "Erc20";
            contract: string;
        };
        slippageToleranceInBps: number;
    };
    requester: {
        userId: string;
        tokenId?: string | undefined;
    };
};

export type GetSwapQuoteRequest = GetSwapQuoteParams

