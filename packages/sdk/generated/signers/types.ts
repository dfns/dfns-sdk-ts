export type CreateCloneInputBody = {
    kind: "Clone";
    hsmSourceSerial: string;
    hsmTargetSerial: string;
};

export type CreateCloneInputParams = {
    storeId: string;
};

export type CreateCloneInputResponse = {
    inputJson: {
        version: 1;
        type: "fleet-input";
        org_id: string;
        fleet_id: string;
        keystore_id: string;
        operations: {
            id: string;
            type: "clone-registration";
            ceremony_challenge: string;
            hsm_source_serial: string;
            hsm_target_serial: string;
        }[];
    };
};

export type CreateCloneInputRequest = CreateCloneInputParams & { body: CreateCloneInputBody }

export type CreateGenesisInputBody = {
    kind: "Genesis";
    numProvisioners: number;
    numSecp256k1?: number;
    numEd25519?: number;
    hsmGenesisSerial: string;
};

export type CreateGenesisInputParams = {
    storeId: string;
};

export type CreateGenesisInputResponse = {
    inputJson: {
        version: 1;
        type: "fleet-input";
        org_id: string;
        fleet_id: string;
        keystore_id: string;
        operations: {
            id: string;
            type: "genesis-registration";
            options: {
                create_test_keys: boolean;
                seal_factory_key: boolean;
                key_harvest: {
                    "ed25519-start": number;
                    ed25519: number;
                    "secp256k1-start": number;
                    secp256k1: number;
                };
            };
            hsm_genesis_serial: string;
            num_provisioners: number;
            ceremony_challenge: string;
            provisioner_labels: string[];
            transport_key: {
                crypto_system: string;
                public_key_hex: string;
            };
            policy_key: {
                crypto_system: string;
                public_key_hex: string;
            };
        }[];
    };
};

export type CreateGenesisInputRequest = CreateGenesisInputParams & { body: CreateGenesisInputBody }

export type ListKeyStoresResponse = {
    items: {
        id: string;
        kind: "Hsm" | "Mpc" | "Nemo";
        name?: string | undefined;
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

export type __WireSubmitCloneOutputBody = {
    fileChecksum: string;
    outputJson: {
        type: "fleet-output";
        version: 1;
        org_id: string;
        fleet_id: string;
        fleet_label: string;
        keystore_id: string;
        outputs: ({
            id: string;
            type: "genesis-registration";
            ceremony_mode: string;
            hsm_serial: string;
            hsm_identity_key: string;
            mac_serial: string;
            mac_se_wrap_key_pub_key: string;
            provisioners: {
                [x: string]: string;
            };
            hsm_sealed?: unknown | null;
            key_harvest: {
                "ed25519-start": number;
                ed25519: number;
                error: string | null;
                "secp256k1-start": number;
                secp256k1: number;
            };
        } | {
            id: string;
            type: "clone-registration";
            ceremony_mode: string;
            hsm_target_serial: string;
            hsm_identity_key: string;
            mac_target_serial: string;
            mac_se_wrap_key_pub_key: string;
            hsm_sealed?: unknown | null;
        })[];
    };
};

export type SubmitCloneOutputBody = Omit<__WireSubmitCloneOutputBody, 'fileChecksum'>

export type SubmitCloneOutputParams = {
    storeId: string;
};

export type SubmitCloneOutputResponse = {};

export type SubmitCloneOutputRequest = SubmitCloneOutputParams & { body: SubmitCloneOutputBody }

export type __WireSubmitGenesisOutputBody = {
    fileChecksum: string;
    outputJson: {
        type: "fleet-output";
        version: 1;
        org_id: string;
        fleet_id: string;
        fleet_label: string;
        keystore_id: string;
        outputs: ({
            id: string;
            type: "genesis-registration";
            ceremony_mode: string;
            hsm_serial: string;
            hsm_identity_key: string;
            mac_serial: string;
            mac_se_wrap_key_pub_key: string;
            provisioners: {
                [x: string]: string;
            };
            hsm_sealed?: unknown | null;
            key_harvest: {
                "ed25519-start": number;
                ed25519: number;
                error: string | null;
                "secp256k1-start": number;
                secp256k1: number;
            };
        } | {
            id: string;
            type: "clone-registration";
            ceremony_mode: string;
            hsm_target_serial: string;
            hsm_identity_key: string;
            mac_target_serial: string;
            mac_se_wrap_key_pub_key: string;
            hsm_sealed?: unknown | null;
        })[];
    };
};

export type SubmitGenesisOutputBody = Omit<__WireSubmitGenesisOutputBody, 'fileChecksum'>

export type SubmitGenesisOutputParams = {
    storeId: string;
};

export type SubmitGenesisOutputResponse = {};

export type SubmitGenesisOutputRequest = SubmitGenesisOutputParams & { body: SubmitGenesisOutputBody }

