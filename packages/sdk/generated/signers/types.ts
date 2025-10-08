export type ListKeyStoresResponse = {
    items: {
        id: string;
        kind: "Hsm" | "Mpc";
        primary: boolean;
    }[];
};

export type ListSignersResponse = {
    clusters: {
        clusterId: string;
        signers: {
            signerId: string;
            encryptionKey: string;
        }[];
    }[];
};

