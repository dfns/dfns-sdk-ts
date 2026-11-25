export type CreateCustodianBody = {
    name?: string | undefined;
    kind: "RippleCustody";
    configuration: {
        /** Base URL of the Ripple Custody API. */
        apiUrl: string;
        /** Base URL of the Ripple Custody OpenID provider. */
        openIdUrl: string;
        /** OpenID client id given by the Ripple Custody administrator. */
        clientId: string;
        /** Ripple Custody domain of the API users. */
        domainId: string;
    };
    /** API user used for reads. */
    readConfiguration: {
        /** Ripple Custody API user. */
        userId: string;
        /** PEM private key registered for that user in Ripple Custody (P-256 or secp256k1), encrypted. It must not be sent in cleartext, but be sealed first (cf secrets ingestion). */
        privateKey: string;
    };
    /** API user used to create addresses and transfers. */
    writeConfiguration: {
        /** Ripple Custody API user. */
        userId: string;
        /** PEM private key registered for that user in Ripple Custody (P-256 or secp256k1), encrypted. It must not be sent in cleartext, but be sealed first (cf secrets ingestion). */
        privateKey: string;
    };
};

export type CreateCustodianResponse = {
    id: string;
    name?: string | undefined;
    kind: "RippleCustody";
    configuration: {
        /** Base URL of the Ripple Custody API. */
        apiUrl: string;
        /** Base URL of the Ripple Custody OpenID provider. */
        openIdUrl: string;
        /** OpenID client id given by the Ripple Custody administrator. */
        clientId: string;
        /** Ripple Custody domain of the API users. */
        domainId: string;
    };
    dateCreated: string;
};

export type CreateCustodianRequest = { body: CreateCustodianBody }

export type CreateCustodianTransferBody = {
    network: string;
    kind: "Native";
    /** The destination address. */
    to: string;
    /** The amount of native tokens to transfer in minimum denomination. */
    amount: string;
    /** The memo or destination tag (supported networks only). */
    memo?: (string | "") | undefined;
    /** A unique ID from your system, used as an idempotency key. */
    externalId?: string | undefined;
};

export type CreateCustodianTransferParams = {
    custodianId: string;
    /** Custodian wallet id. */
    walletId: string;
};

export type CreateCustodianTransferResponse = {
    id: string;
    custodianId: string;
    /** Custodian wallet id. */
    walletId: string;
    network: string;
    /** The user who initiated the request. */
    requester: {
        /** User id. */
        userId: string;
        /** Token id. */
        tokenId?: string | undefined;
    };
    requestBody: {
        network: string;
        kind: "Native";
        /** The destination address. */
        to: string;
        /** The amount of native tokens to transfer in minimum denomination. */
        amount: string;
        /** The memo or destination tag (supported networks only). */
        memo?: (string | "") | undefined;
        /** A unique ID from your system, used as an idempotency key. */
        externalId?: string | undefined;
    };
    status: "Pending" | "InProgress" | "Completed" | "Failed" | "Rejected";
    reason?: string | undefined;
    dateRequested: string;
    dateFinalized?: string | undefined;
};

export type CreateCustodianTransferRequest = CreateCustodianTransferParams & { body: CreateCustodianTransferBody }

export type CreateCustodianWalletAddressBody = {
    network: string;
};

export type CreateCustodianWalletAddressParams = {
    custodianId: string;
    /** Custodian wallet id. */
    walletId: string;
};

export type CreateCustodianWalletAddressResponse = {
    id?: string | undefined;
    network?: string | undefined;
    address: string;
    dateCreated?: string | undefined;
};

export type CreateCustodianWalletAddressRequest = CreateCustodianWalletAddressParams & { body: CreateCustodianWalletAddressBody }

export type DeleteCustodianParams = {
    custodianId: string;
};

export type DeleteCustodianResponse = {
    deleted: true;
};

export type DeleteCustodianRequest = DeleteCustodianParams

export type GetCustodianParams = {
    custodianId: string;
};

export type GetCustodianResponse = {
    id: string;
    name?: string | undefined;
    kind: "RippleCustody";
    configuration: {
        /** Base URL of the Ripple Custody API. */
        apiUrl: string;
        /** Base URL of the Ripple Custody OpenID provider. */
        openIdUrl: string;
        /** OpenID client id given by the Ripple Custody administrator. */
        clientId: string;
        /** Ripple Custody domain of the API users. */
        domainId: string;
    };
    dateCreated: string;
};

export type GetCustodianRequest = GetCustodianParams

export type ListCustodiansQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
};

export type ListCustodiansResponse = {
    /** Current page items. */
    items: {
        id: string;
        name?: string | undefined;
        kind: "RippleCustody";
        configuration: {
            /** Base URL of the Ripple Custody API. */
            apiUrl: string;
            /** Base URL of the Ripple Custody OpenID provider. */
            openIdUrl: string;
            /** OpenID client id given by the Ripple Custody administrator. */
            clientId: string;
            /** Ripple Custody domain of the API users. */
            domainId: string;
        };
        dateCreated: string;
    }[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListCustodiansRequest = { query?: ListCustodiansQuery }

export type ListCustodianWalletAddressesParams = {
    custodianId: string;
    /** Custodian wallet id. */
    walletId: string;
};

export type ListCustodianWalletAddressesQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
    network?: string | undefined;
};

export type ListCustodianWalletAddressesResponse = {
    /** Current page items. */
    items: {
        id?: string | undefined;
        network?: string | undefined;
        address: string;
        dateCreated?: string | undefined;
    }[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListCustodianWalletAddressesRequest = ListCustodianWalletAddressesParams & { query?: ListCustodianWalletAddressesQuery }

export type ListCustodianWalletAssetsParams = {
    custodianId: string;
    /** Custodian wallet id. */
    walletId: string;
};

export type ListCustodianWalletAssetsQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
};

export type ListCustodianWalletAssetsResponse = {
    /** Current page items. */
    items: {
        network?: string | undefined;
        symbol?: string | undefined;
        decimals?: number | undefined;
        /** Total balance, in the smallest unit of the asset. */
        balance: string;
        /** Spendable balance, in the smallest unit of the asset. */
        available: string;
    }[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListCustodianWalletAssetsRequest = ListCustodianWalletAssetsParams & { query?: ListCustodianWalletAssetsQuery }

export type ListCustodianWalletsParams = {
    custodianId: string;
};

export type ListCustodianWalletsQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
};

export type ListCustodianWalletsResponse = {
    /** Current page items. */
    items: {
        /** Custodian wallet id. */
        id: string;
        name: string;
        /** Networks of the wallet that Dfns can map. */
        networks: string[];
    }[];
    /** token to use as `paginationToken` to request the next page. */
    nextPageToken?: string | undefined;
};

export type ListCustodianWalletsRequest = ListCustodianWalletsParams & { query?: ListCustodianWalletsQuery }

