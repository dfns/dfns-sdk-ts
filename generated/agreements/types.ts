export type GetLatestUnacceptedAgreementQuery = {
    agreementType: "PrivacyPolicy" | "TermsAndConditions" | "UniswapTermsOfService" | "UniswapPrivacyPolicy";
};

export type GetLatestUnacceptedAgreementResponse = {
    latestAgreement: {
        id: string;
        agreementUrl?: string | undefined;
        details: string;
        agreementType: "PrivacyPolicy" | "TermsAndConditions" | "UniswapTermsOfService" | "UniswapPrivacyPolicy";
    } | null;
};

export type GetLatestUnacceptedAgreementRequest = { query?: GetLatestUnacceptedAgreementQuery }

export type RecordAgreementAcceptanceParams = {
    agreementId: string;
};

export type RecordAgreementAcceptanceResponse = {
    agreementId: string;
    userId: string;
    dateAccepted: string;
};

export type RecordAgreementAcceptanceRequest = RecordAgreementAcceptanceParams

