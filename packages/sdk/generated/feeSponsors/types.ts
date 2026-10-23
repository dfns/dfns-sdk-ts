export type ActivateFeeSponsorParams = {
    /** Which Fee Sponsor you wish to activate. */
    feeSponsorId: string;
};

export type ActivateFeeSponsorResponse = {
    /** Fee Sponsor id. */
    id: string;
    /** Nickname for the Fee Sponsor. This is displayed on the transfer modal in the dashboard. */
    name?: string | undefined;
    /** Id of the wallet that is used to sponsor the fee for other wallets */
    walletId: string;
    /** Network used for the wallet. */
    network: string;
    /** Fee sponsor status. */
    status: "Active" | "Deactivated" | "Archived";
    dateCreated: string;
    /** Defines whether EndUsers and their delegated wallets can use this Fee Sponsor. */
    allowEndUser?: boolean | undefined;
};

export type ActivateFeeSponsorRequest = ActivateFeeSponsorParams

export type CreateFeeSponsorBody = {
    /** Nickname for the Fee Sponsor. This will be displayed on the transfer modal in the dashboard. */
    name?: string | undefined;
    /** Id of the wallet that will be used to sponsor the fee for other wallets. */
    walletId: string;
    /** Defines whether EndUsers and their delegated wallets can use this Fee Sponsor. */
    allowEndUser?: boolean | undefined;
};

export type CreateFeeSponsorResponse = {
    /** Fee Sponsor id. */
    id: string;
    /** Nickname for the Fee Sponsor. This is displayed on the transfer modal in the dashboard. */
    name?: string | undefined;
    /** Id of the wallet that is used to sponsor the fee for other wallets */
    walletId: string;
    /** Network used for the wallet. */
    network: string;
    /** Fee sponsor status. */
    status: "Active" | "Deactivated" | "Archived";
    dateCreated: string;
    /** Defines whether EndUsers and their delegated wallets can use this Fee Sponsor. */
    allowEndUser?: boolean | undefined;
};

export type CreateFeeSponsorRequest = { body: CreateFeeSponsorBody }

export type DeactivateFeeSponsorParams = {
    /** Which Fee Sponsor you wish to deactivate. */
    feeSponsorId: string;
};

export type DeactivateFeeSponsorResponse = {
    /** Fee Sponsor id. */
    id: string;
    /** Nickname for the Fee Sponsor. This is displayed on the transfer modal in the dashboard. */
    name?: string | undefined;
    /** Id of the wallet that is used to sponsor the fee for other wallets */
    walletId: string;
    /** Network used for the wallet. */
    network: string;
    /** Fee sponsor status. */
    status: "Active" | "Deactivated" | "Archived";
    dateCreated: string;
    /** Defines whether EndUsers and their delegated wallets can use this Fee Sponsor. */
    allowEndUser?: boolean | undefined;
};

export type DeactivateFeeSponsorRequest = DeactivateFeeSponsorParams

export type DeleteFeeSponsorParams = {
    /** Which Fee Sponsor you wish to delete. */
    feeSponsorId: string;
};

export type DeleteFeeSponsorResponse = {
    /** Fee Sponsor id. */
    id: string;
    /** Nickname for the Fee Sponsor. This is displayed on the transfer modal in the dashboard. */
    name?: string | undefined;
    /** Id of the wallet that is used to sponsor the fee for other wallets */
    walletId: string;
    /** Network used for the wallet. */
    network: string;
    /** Fee sponsor status. */
    status: "Active" | "Deactivated" | "Archived";
    dateCreated: string;
    /** Defines whether EndUsers and their delegated wallets can use this Fee Sponsor. */
    allowEndUser?: boolean | undefined;
};

export type DeleteFeeSponsorRequest = DeleteFeeSponsorParams

export type GetFeeSponsorParams = {
    /** Which Fee Sponsor you wish to retrieve. */
    feeSponsorId: string;
};

export type GetFeeSponsorResponse = {
    /** Fee Sponsor id. */
    id: string;
    /** Nickname for the Fee Sponsor. This is displayed on the transfer modal in the dashboard. */
    name?: string | undefined;
    /** Id of the wallet that is used to sponsor the fee for other wallets */
    walletId: string;
    /** Network used for the wallet. */
    network: string;
    /** Fee sponsor status. */
    status: "Active" | "Deactivated" | "Archived";
    dateCreated: string;
    /** Defines whether EndUsers and their delegated wallets can use this Fee Sponsor. */
    allowEndUser?: boolean | undefined;
};

export type GetFeeSponsorRequest = GetFeeSponsorParams

export type ListFeeSponsorsQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
};

export type ListFeeSponsorsResponse = {
    /** Current page items. */
    items: {
        /** Fee Sponsor id. */
        id: string;
        /** Nickname for the Fee Sponsor. This is displayed on the transfer modal in the dashboard. */
        name?: string | undefined;
        /** Id of the wallet that is used to sponsor the fee for other wallets */
        walletId: string;
        /** Network used for the wallet. */
        network: string;
        /** Fee sponsor status. */
        status: "Active" | "Deactivated" | "Archived";
        dateCreated: string;
        /** Defines whether EndUsers and their delegated wallets can use this Fee Sponsor. */
        allowEndUser?: boolean | undefined;
    }[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListFeeSponsorsRequest = { query?: ListFeeSponsorsQuery }

export type ListSponsoredFeesParams = {
    /** Fee Sponsor to retrieve the fees from. */
    feeSponsorId: string;
};

export type ListSponsoredFeesQuery = {
    limit?: string | undefined;
    paginationToken?: string | undefined;
};

export type ListSponsoredFeesResponse = {
    items: {
        /** Fee Sponsor id. */
        feeSponsorId: string;
        /** Id of the entity being sponsored, e.g. a wallet id. */
        sponsoreeId: string;
        /** Id of the request that was sponsored. */
        requestId: string;
        /** Fee amount that was paid for the request */
        fee?: string | undefined;
        dateRequested: string;
        dateConfirmed: string;
    }[];
    nextPageToken?: string | undefined;
};

export type ListSponsoredFeesRequest = ListSponsoredFeesParams & { query?: ListSponsoredFeesQuery }

