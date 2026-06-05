export type CreateCloneInputBody = {
    kind: "Clone";
    hsmSourceSerial: string;
    hsmTargetSerial: string;
};

export type CreateCloneInputParams = {
    storeId: string;
};

export type CreateCloneInputResponse = string;

export type CreateCloneInputRequest = CreateCloneInputParams & { body: CreateCloneInputBody }

export type CreateGenesisInputBody = {
    kind: "Genesis";
    numProvisioners: number;
    numSecp256k1: number;
    numEd25519: number;
    hsmGenesisSerial: string;
    hsmGenesisFirmwareVersion?: ("2.2" | "2.4") | undefined;
};

export type CreateGenesisInputParams = {
    storeId: string;
};

export type CreateGenesisInputResponse = string;

export type CreateGenesisInputRequest = CreateGenesisInputParams & { body: CreateGenesisInputBody }

export type CreateOnchainSignInputBody = {};

export type CreateOnchainSignInputParams = {
    storeId: string;
};

export type CreateOnchainSignInputResponse = string;

export type CreateOnchainSignInputRequest = CreateOnchainSignInputParams & { body: CreateOnchainSignInputBody }

export type CreateProofOfControlInputBody = {
    walletIds: string[];
};

export type CreateProofOfControlInputParams = {
    storeId: string;
};

export type CreateProofOfControlInputResponse = string;

export type CreateProofOfControlInputRequest = CreateProofOfControlInputParams & { body: CreateProofOfControlInputBody }

export type ListKeyStoresResponse = {
    items: {
        id: string;
        kind: "Hsm" | "Mpc" | "OfflineSigner";
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
        status: "success";
        org_id: string;
        fleet_id: string;
        fleet_label: string;
        keystore_id: string;
        governance?: {
            [x: string]: unknown;
        } | undefined;
        outputs: {
            [x: string]: {
                success: {
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
                    type: "clone-registration";
                    ceremony_mode: string;
                    hsm_target_serial: string;
                    hsm_identity_key: string;
                    mac_target_serial: string;
                    mac_se_wrap_key_pub_key: string;
                    hsm_sealed?: unknown | null;
                };
            };
        };
    };
};

export type SubmitCloneOutputBody = Omit<__WireSubmitCloneOutputBody, 'fileChecksum'>

export type SubmitCloneOutputParams = {
    storeId: string;
};

export type SubmitCloneOutputResponse = {
    message: string;
};

export type SubmitCloneOutputRequest = SubmitCloneOutputParams & { body: SubmitCloneOutputBody }

export type __WireSubmitGenesisOutputBody = {
    fileChecksum: string;
    outputJson: {
        type: "fleet-output";
        version: 1;
        status: "success";
        org_id: string;
        fleet_id: string;
        fleet_label: string;
        keystore_id: string;
        governance?: {
            [x: string]: unknown;
        } | undefined;
        outputs: {
            [x: string]: {
                success: {
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
                    type: "clone-registration";
                    ceremony_mode: string;
                    hsm_target_serial: string;
                    hsm_identity_key: string;
                    mac_target_serial: string;
                    mac_se_wrap_key_pub_key: string;
                    hsm_sealed?: unknown | null;
                };
            };
        };
    };
};

export type SubmitGenesisOutputBody = Omit<__WireSubmitGenesisOutputBody, 'fileChecksum'>

export type SubmitGenesisOutputParams = {
    storeId: string;
};

export type SubmitGenesisOutputResponse = {
    message: string;
};

export type SubmitGenesisOutputRequest = SubmitGenesisOutputParams & { body: SubmitGenesisOutputBody }

export type __WireSubmitOnchainSignOutputBody = {
    fileChecksum: string;
    outputJson: {
        type: "keystore-output";
        version: 1;
        org_id: string;
        fleet_id: string;
        keystore_id: string;
        group_id: string;
        status: "success" | "partial" | "fail";
        outputs: {
            [x: string]: {
                type: "proof-of-control-v1";
                result: {
                    success: {
                        signer_public_key: string;
                        prefix: string;
                        message: string;
                        exact_bytes_signed: string;
                        signature: string;
                    };
                } | {
                    fail: {
                        message: string;
                        code: string;
                    };
                };
            } | {
                type: "onchain-sign-v1";
                result: {
                    success: {
                        [x: string]: {
                            signer_public_key: string;
                            exact_bytes_signed: string;
                            signature: string;
                        };
                    };
                } | {
                    fail: {
                        message: string;
                        code: string;
                    };
                };
            };
        };
    };
};

export type SubmitOnchainSignOutputBody = Omit<__WireSubmitOnchainSignOutputBody, 'fileChecksum'>

export type SubmitOnchainSignOutputParams = {
    storeId: string;
};

export type SubmitOnchainSignOutputResponse = {
    status: "success" | "partial";
};

export type SubmitOnchainSignOutputRequest = SubmitOnchainSignOutputParams & { body: SubmitOnchainSignOutputBody }

export type __WireSubmitProofOfControlOutputBody = {
    fileChecksum: string;
    outputJson: {
        type: "keystore-output";
        version: 1;
        org_id: string;
        fleet_id: string;
        keystore_id: string;
        group_id: string;
        status: "success" | "partial" | "fail";
        outputs: {
            [x: string]: {
                type: "proof-of-control-v1";
                result: {
                    success: {
                        signer_public_key: string;
                        prefix: string;
                        message: string;
                        exact_bytes_signed: string;
                        signature: string;
                    };
                } | {
                    fail: {
                        message: string;
                        code: string;
                    };
                };
            } | {
                type: "onchain-sign-v1";
                result: {
                    success: {
                        [x: string]: {
                            signer_public_key: string;
                            exact_bytes_signed: string;
                            signature: string;
                        };
                    };
                } | {
                    fail: {
                        message: string;
                        code: string;
                    };
                };
            };
        };
    };
};

export type SubmitProofOfControlOutputBody = Omit<__WireSubmitProofOfControlOutputBody, 'fileChecksum'>

export type SubmitProofOfControlOutputParams = {
    storeId: string;
};

export type SubmitProofOfControlOutputResponse = {
    status: "success" | "partial";
};

export type SubmitProofOfControlOutputRequest = SubmitProofOfControlOutputParams & { body: SubmitProofOfControlOutputBody }

