export type GetLatestUnacceptedAgreementQuery = {
    /** Type of agreement to look up. */
    agreementType: "PrivacyPolicy" | "TermsAndConditions" | "UniswapTermsOfService" | "UniswapPrivacyPolicy";
};

export type GetLatestUnacceptedAgreementResponse = {
    /** Latest unaccepted agreement, or `null` if none. */
    latestAgreement: {
        /** ID of the agreement. */
        id: string;
        /** URL where the full agreement document can be viewed. */
        agreementUrl?: string | undefined;
        /** Details of the agreement. */
        details: string;
        /** Type of the agreement. */
        agreementType: "PrivacyPolicy" | "TermsAndConditions" | "UniswapTermsOfService" | "UniswapPrivacyPolicy";
    } | null;
};

export type GetLatestUnacceptedAgreementRequest = { query?: GetLatestUnacceptedAgreementQuery }

export type RecordAgreementAcceptanceParams = {
    /** ID of the agreement to accept. */
    agreementId: string;
};

export type RecordAgreementAcceptanceResponse = {
    /** ID of the agreement that was accepted. */
    agreementId: string;
    /** User id. */
    userId: string;
    dateAccepted: string;
};

export type RecordAgreementAcceptanceRequest = RecordAgreementAcceptanceParams

