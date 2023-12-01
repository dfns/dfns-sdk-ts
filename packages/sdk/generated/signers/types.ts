export type ListSignersResponse = {
    clusters: {
        clusterId: string;
        signers: {
            signerId: string;
            encryptionKey: string;
        }[];
    }[];
};

