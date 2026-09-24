export type CancelFleetOperationBody = {
    groupId: string;
    reason?: string | undefined;
};

export type CancelFleetOperationParams = {
    storeId: string;
};

export type CancelFleetOperationResponse = {
    groupId: string;
    storeId: string;
    orgId: string;
    status: "Initialized" | "InReview" | "Rejected" | "Approved" | "Canceled";
    createdBy: string;
    submittedBy: string | null;
    dateSubmitted: string | null;
    reviewedBy: string | null;
    dateReviewed: string | null;
    canceledBy: string | null;
    dateCanceled: string | null;
    reason: string | null;
    dateCreated: string;
    operations: {
        operationId: string;
        kind: "Genesis" | "Clone" | "AddMacUser" | "KeyHarvest" | "AddProvisioner";
        status: "Initialized" | "InReview" | "Rejected" | "Approved" | "Canceled";
        dateCreated: string;
    }[];
};

export type CancelFleetOperationRequest = CancelFleetOperationParams & { body: CancelFleetOperationBody }

export type CreateAddMacUserInputBody = {
    kind: "AddMacUser";
    macTargetSerial: string;
    hsmTargetSerial: string;
};

export type CreateAddMacUserInputParams = {
    storeId: string;
};

export type CreateAddMacUserInputResponse = string;

export type CreateAddMacUserInputRequest = CreateAddMacUserInputParams & { body: CreateAddMacUserInputBody }

export type CreateAddProvisionerInputBody = {
    kind: "AddProvisioner";
    yubikeySerial: string;
    hsmTargetSerial: string;
};

export type CreateAddProvisionerInputParams = {
    storeId: string;
};

export type CreateAddProvisionerInputResponse = string;

export type CreateAddProvisionerInputRequest = CreateAddProvisionerInputParams & { body: CreateAddProvisionerInputBody }

export type CreateCloneInputBody = {
    kind: "Clone";
    hsmSourceSerial: string;
    hsmTargetSerial: string;
    macTargetSerial?: string | undefined;
};

export type CreateCloneInputParams = {
    storeId: string;
};

export type CreateCloneInputResponse = string;

export type CreateCloneInputRequest = CreateCloneInputParams & { body: CreateCloneInputBody }

export type CreateGenesisInputBody = {
    kind: "Genesis";
    numProvisioners: number;
    numOperational: number;
    numSecp256k1: number;
    numEd25519: number;
    hsmGenesisSerial: string;
    macGenesisSerial?: string | undefined;
    hsmGenesisFirmwareVersion?: ("2.4") | undefined;
    /** Development environments only (rejected with a 400 in production). Deep-merged over the generated genesis `options` block: objects merge recursively, any other value (including new fields and type changes) replaces the existing value. */
    debugOptions?: {
        [x: string]: unknown;
    } | undefined;
};

export type CreateGenesisInputParams = {
    storeId: string;
};

export type CreateGenesisInputResponse = string;

export type CreateGenesisInputRequest = CreateGenesisInputParams & { body: CreateGenesisInputBody }

export type CreateKeyHarvestInputBody = {
    kind: "KeyHarvest";
    hsmTargetSerial: string;
    macTargetSerial: string;
    macTargetUsername: string;
    numSecp256k1?: number | undefined;
    numEd25519?: number | undefined;
};

export type CreateKeyHarvestInputParams = {
    storeId: string;
};

export type CreateKeyHarvestInputResponse = string;

export type CreateKeyHarvestInputRequest = CreateKeyHarvestInputParams & { body: CreateKeyHarvestInputBody }

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

export type __WireSubmitAddMacUserOutputBody = {
    fileChecksum: string;
    outputJson: {
        type: "fleet-output";
        version: 1;
        status: "success";
        org_id: string;
        fleet_id: string;
        fleet_label: string;
        keystore_id: string;
        group_id: string;
        online_domain: string;
        governance?: {
            [x: string]: unknown;
        } | undefined;
        outputs: {
            [x: string]: {
                success: {
                    type: "genesis-registration";
                    ceremony_mode?: string | undefined;
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
                    ceremony_mode?: string | undefined;
                    hsm_target_serial: string;
                    hsm_identity_key: string;
                    mac_target_serial: string;
                    mac_se_wrap_key_pub_key: string;
                    hsm_sealed?: unknown | null;
                } | {
                    type: "add-mac-user";
                    ceremony_mode?: string | undefined;
                    hsm_target_serial: string;
                    hsm_identity_key: string;
                    mac_target_serial: string;
                    mac_username?: string | undefined;
                    mac_se_wrap_key_pub_key: string;
                    hsm_sealed?: unknown | null;
                } | {
                    type: "add-provisioner";
                    ceremony_mode?: string | undefined;
                    provisioner_label: string;
                    provisioner_public_key_hex: string;
                    yubikey_serial: string;
                } | {
                    type: "key-harvest";
                    hsm_target_serial: string;
                    mac_target_serial: string;
                    mac_target_username: string;
                    key_harvest: {
                        secp256k1?: number | undefined;
                        secp256k1_end?: number | undefined;
                        ed25519?: number | undefined;
                        ed25519_end?: number | undefined;
                    };
                };
            };
        };
    };
};

export type SubmitAddMacUserOutputBody = Omit<__WireSubmitAddMacUserOutputBody, 'fileChecksum'>

export type SubmitAddMacUserOutputParams = {
    storeId: string;
};

export type SubmitAddMacUserOutputResponse = {
    message: string;
};

export type SubmitAddMacUserOutputRequest = SubmitAddMacUserOutputParams & { body: SubmitAddMacUserOutputBody }

export type __WireSubmitAddProvisionerOutputBody = {
    fileChecksum: string;
    outputJson: {
        type: "fleet-output";
        version: 1;
        status: "success";
        org_id: string;
        fleet_id: string;
        fleet_label: string;
        keystore_id: string;
        group_id: string;
        online_domain: string;
        governance?: {
            [x: string]: unknown;
        } | undefined;
        outputs: {
            [x: string]: {
                success: {
                    type: "genesis-registration";
                    ceremony_mode?: string | undefined;
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
                    ceremony_mode?: string | undefined;
                    hsm_target_serial: string;
                    hsm_identity_key: string;
                    mac_target_serial: string;
                    mac_se_wrap_key_pub_key: string;
                    hsm_sealed?: unknown | null;
                } | {
                    type: "add-mac-user";
                    ceremony_mode?: string | undefined;
                    hsm_target_serial: string;
                    hsm_identity_key: string;
                    mac_target_serial: string;
                    mac_username?: string | undefined;
                    mac_se_wrap_key_pub_key: string;
                    hsm_sealed?: unknown | null;
                } | {
                    type: "add-provisioner";
                    ceremony_mode?: string | undefined;
                    provisioner_label: string;
                    provisioner_public_key_hex: string;
                    yubikey_serial: string;
                } | {
                    type: "key-harvest";
                    hsm_target_serial: string;
                    mac_target_serial: string;
                    mac_target_username: string;
                    key_harvest: {
                        secp256k1?: number | undefined;
                        secp256k1_end?: number | undefined;
                        ed25519?: number | undefined;
                        ed25519_end?: number | undefined;
                    };
                };
            };
        };
    };
};

export type SubmitAddProvisionerOutputBody = Omit<__WireSubmitAddProvisionerOutputBody, 'fileChecksum'>

export type SubmitAddProvisionerOutputParams = {
    storeId: string;
};

export type SubmitAddProvisionerOutputResponse = {
    message: string;
};

export type SubmitAddProvisionerOutputRequest = SubmitAddProvisionerOutputParams & { body: SubmitAddProvisionerOutputBody }

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
        group_id: string;
        online_domain: string;
        governance?: {
            [x: string]: unknown;
        } | undefined;
        outputs: {
            [x: string]: {
                success: {
                    type: "genesis-registration";
                    ceremony_mode?: string | undefined;
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
                    ceremony_mode?: string | undefined;
                    hsm_target_serial: string;
                    hsm_identity_key: string;
                    mac_target_serial: string;
                    mac_se_wrap_key_pub_key: string;
                    hsm_sealed?: unknown | null;
                } | {
                    type: "add-mac-user";
                    ceremony_mode?: string | undefined;
                    hsm_target_serial: string;
                    hsm_identity_key: string;
                    mac_target_serial: string;
                    mac_username?: string | undefined;
                    mac_se_wrap_key_pub_key: string;
                    hsm_sealed?: unknown | null;
                } | {
                    type: "add-provisioner";
                    ceremony_mode?: string | undefined;
                    provisioner_label: string;
                    provisioner_public_key_hex: string;
                    yubikey_serial: string;
                } | {
                    type: "key-harvest";
                    hsm_target_serial: string;
                    mac_target_serial: string;
                    mac_target_username: string;
                    key_harvest: {
                        secp256k1?: number | undefined;
                        secp256k1_end?: number | undefined;
                        ed25519?: number | undefined;
                        ed25519_end?: number | undefined;
                    };
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
        group_id: string;
        online_domain: string;
        governance?: {
            [x: string]: unknown;
        } | undefined;
        outputs: {
            [x: string]: {
                success: {
                    type: "genesis-registration";
                    ceremony_mode?: string | undefined;
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
                    ceremony_mode?: string | undefined;
                    hsm_target_serial: string;
                    hsm_identity_key: string;
                    mac_target_serial: string;
                    mac_se_wrap_key_pub_key: string;
                    hsm_sealed?: unknown | null;
                } | {
                    type: "add-mac-user";
                    ceremony_mode?: string | undefined;
                    hsm_target_serial: string;
                    hsm_identity_key: string;
                    mac_target_serial: string;
                    mac_username?: string | undefined;
                    mac_se_wrap_key_pub_key: string;
                    hsm_sealed?: unknown | null;
                } | {
                    type: "add-provisioner";
                    ceremony_mode?: string | undefined;
                    provisioner_label: string;
                    provisioner_public_key_hex: string;
                    yubikey_serial: string;
                } | {
                    type: "key-harvest";
                    hsm_target_serial: string;
                    mac_target_serial: string;
                    mac_target_username: string;
                    key_harvest: {
                        secp256k1?: number | undefined;
                        secp256k1_end?: number | undefined;
                        ed25519?: number | undefined;
                        ed25519_end?: number | undefined;
                    };
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

export type __WireSubmitKeyHarvestOutputBody = {
    fileChecksum: string;
    outputJson: {
        type: "fleet-output";
        version: 1;
        status: "success";
        org_id: string;
        fleet_id: string;
        fleet_label: string;
        keystore_id: string;
        group_id: string;
        online_domain: string;
        governance?: {
            [x: string]: unknown;
        } | undefined;
        outputs: {
            [x: string]: {
                success: {
                    type: "genesis-registration";
                    ceremony_mode?: string | undefined;
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
                    ceremony_mode?: string | undefined;
                    hsm_target_serial: string;
                    hsm_identity_key: string;
                    mac_target_serial: string;
                    mac_se_wrap_key_pub_key: string;
                    hsm_sealed?: unknown | null;
                } | {
                    type: "add-mac-user";
                    ceremony_mode?: string | undefined;
                    hsm_target_serial: string;
                    hsm_identity_key: string;
                    mac_target_serial: string;
                    mac_username?: string | undefined;
                    mac_se_wrap_key_pub_key: string;
                    hsm_sealed?: unknown | null;
                } | {
                    type: "add-provisioner";
                    ceremony_mode?: string | undefined;
                    provisioner_label: string;
                    provisioner_public_key_hex: string;
                    yubikey_serial: string;
                } | {
                    type: "key-harvest";
                    hsm_target_serial: string;
                    mac_target_serial: string;
                    mac_target_username: string;
                    key_harvest: {
                        secp256k1?: number | undefined;
                        secp256k1_end?: number | undefined;
                        ed25519?: number | undefined;
                        ed25519_end?: number | undefined;
                    };
                };
            };
        };
    };
};

export type SubmitKeyHarvestOutputBody = Omit<__WireSubmitKeyHarvestOutputBody, 'fileChecksum'>

export type SubmitKeyHarvestOutputParams = {
    storeId: string;
};

export type SubmitKeyHarvestOutputResponse = {
    message: string;
};

export type SubmitKeyHarvestOutputRequest = SubmitKeyHarvestOutputParams & { body: SubmitKeyHarvestOutputBody }

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

