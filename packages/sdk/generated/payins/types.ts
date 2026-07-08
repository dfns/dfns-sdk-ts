export type CreatePayinRecipientBody = {
    provider: "CircleMint";
    /** The wallet to register as a Circle Mint recipient. */
    walletId: string;
    /** Fiat currency of the payin (determines the delivered stablecoin, e.g. USD → USDC, EUR → EURC). */
    currency: "USD" | "EUR";
};

export type CreatePayinRecipientResponse = {
    /** Payin provider. */
    provider: "CircleMint";
    /** The wallet whose address is (to be) registered as a recipient. */
    walletId: string;
    /** Fiat currency of the payin (determines the delivered stablecoin, e.g. USD → USDC, EUR → EURC). */
    currency: "USD" | "EUR";
    /** Recipient status. */
    status: "NotRegistered" | "PendingVerification" | "Active";
    /** The provider's recipient-registry id, once registered. */
    recipientAddressId?: string | undefined;
};

export type CreatePayinRecipientRequest = { body: CreatePayinRecipientBody }

export type GetPayinRecipientQuery = {
    /** The payin provider to check the recipient with. */
    provider: "CircleMint";
    /** The wallet whose recipient status to check. */
    walletId: string;
    /** Fiat currency of the payin (determines the delivered stablecoin, e.g. USD → USDC, EUR → EURC). */
    currency: "USD" | "EUR";
};

export type GetPayinRecipientResponse = {
    /** Payin provider. */
    provider: "CircleMint";
    /** The wallet whose address is (to be) registered as a recipient. */
    walletId: string;
    /** Fiat currency of the payin (determines the delivered stablecoin, e.g. USD → USDC, EUR → EURC). */
    currency: "USD" | "EUR";
    /** Recipient status. */
    status: "NotRegistered" | "PendingVerification" | "Active";
    /** The provider's recipient-registry id, once registered. */
    recipientAddressId?: string | undefined;
};

export type GetPayinRecipientRequest = { query?: GetPayinRecipientQuery }

