export type ActivateApplicationParams = {
    appId: string;
};

export type ActivateApplicationResponse = {
    appId: string;
    kind: "ServerSideApplication" | "ClientSideApplication";
    orgId: string;
    expectedRpId: string;
    name: string;
    isActive: boolean;
    expectedOrigin: string;
    permissionAssignments: {
        permissionName: string;
        permissionId: string;
        assignmentId: string;
        operations?: string[] | undefined;
    }[];
    accessTokens: {
        accessToken?: string | undefined;
        dateCreated: string;
        credId: string;
        isActive: boolean;
        kind: "ServiceAccount" | "Pat" | "Application";
        linkedUserId: string;
        linkedAppId: string;
        name: string;
        orgId: string;
        permissionAssignments: {
            permissionName: string;
            permissionId: string;
            assignmentId: string;
            operations?: string[] | undefined;
        }[];
        publicKey: string;
        tokenId: string;
    }[];
};

export type ActivateApplicationRequest = ActivateApplicationParams

export type ActivateCredentialBody = {
    credentialUuid: string;
};

export type ActivateCredentialResponse = {
    message: string;
};

export type ActivateCredentialRequest = { body: ActivateCredentialBody }

export type ActivatePersonalAccessTokenParams = {
    tokenId: string;
};

export type ActivatePersonalAccessTokenResponse = {
    accessToken?: string | undefined;
    dateCreated: string;
    credId: string;
    isActive: boolean;
    kind: "ServiceAccount" | "Pat" | "Application";
    linkedUserId: string;
    linkedAppId: string;
    name: string;
    orgId: string;
    permissionAssignments: {
        permissionName: string;
        permissionId: string;
        assignmentId: string;
        operations?: string[] | undefined;
    }[];
    publicKey: string;
    tokenId: string;
};

export type ActivatePersonalAccessTokenRequest = ActivatePersonalAccessTokenParams

export type ActivateServiceAccountParams = {
    serviceAccountId: string;
};

export type ActivateServiceAccountResponse = {
    userInfo: {
        username: string;
        name: string;
        userId: string;
        kind: "EndUser" | "CustomerEmployee" | "DfnsStaff";
        credentialUuid: string;
        orgId: string;
        permissions?: string[] | undefined;
        isActive: boolean;
        isServiceAccount: boolean;
        isRegistered: boolean;
        permissionAssignments: {
            permissionName: string;
            permissionId: string;
            assignmentId: string;
            operations?: string[] | undefined;
        }[];
    };
    accessTokens: {
        accessToken?: string | undefined;
        dateCreated: string;
        credId: string;
        isActive: boolean;
        kind: "ServiceAccount" | "Pat" | "Application";
        linkedUserId: string;
        linkedAppId: string;
        name: string;
        orgId: string;
        permissionAssignments: {
            permissionName: string;
            permissionId: string;
            assignmentId: string;
            operations?: string[] | undefined;
        }[];
        publicKey: string;
        tokenId: string;
    }[];
};

export type ActivateServiceAccountRequest = ActivateServiceAccountParams

export type ActivateUserParams = {
    userId: string;
};

export type ActivateUserResponse = {
    username: string;
    name: string;
    userId: string;
    kind: "EndUser" | "CustomerEmployee" | "DfnsStaff";
    credentialUuid: string;
    orgId: string;
    permissions?: string[] | undefined;
    isActive: boolean;
    isServiceAccount: boolean;
    isRegistered: boolean;
    permissionAssignments: {
        permissionName: string;
        permissionId: string;
        assignmentId: string;
        operations?: string[] | undefined;
    }[];
};

export type ActivateUserRequest = ActivateUserParams

export type ArchiveApplicationParams = {
    appId: string;
};

export type ArchiveApplicationResponse = {
    appId: string;
    kind: "ServerSideApplication" | "ClientSideApplication";
    orgId: string;
    expectedRpId: string;
    name: string;
    isActive: boolean;
    expectedOrigin: string;
    permissionAssignments: {
        permissionName: string;
        permissionId: string;
        assignmentId: string;
        operations?: string[] | undefined;
    }[];
    accessTokens: {
        accessToken?: string | undefined;
        dateCreated: string;
        credId: string;
        isActive: boolean;
        kind: "ServiceAccount" | "Pat" | "Application";
        linkedUserId: string;
        linkedAppId: string;
        name: string;
        orgId: string;
        permissionAssignments: {
            permissionName: string;
            permissionId: string;
            assignmentId: string;
            operations?: string[] | undefined;
        }[];
        publicKey: string;
        tokenId: string;
    }[];
};

export type ArchiveApplicationRequest = ArchiveApplicationParams

export type ArchivePersonalAccessTokenParams = {
    tokenId: string;
};

export type ArchivePersonalAccessTokenResponse = {
    accessToken?: string | undefined;
    dateCreated: string;
    credId: string;
    isActive: boolean;
    kind: "ServiceAccount" | "Pat" | "Application";
    linkedUserId: string;
    linkedAppId: string;
    name: string;
    orgId: string;
    permissionAssignments: {
        permissionName: string;
        permissionId: string;
        assignmentId: string;
        operations?: string[] | undefined;
    }[];
    publicKey: string;
    tokenId: string;
};

export type ArchivePersonalAccessTokenRequest = ArchivePersonalAccessTokenParams

export type ArchiveServiceAccountParams = {
    serviceAccountId: string;
};

export type ArchiveServiceAccountResponse = {
    userInfo: {
        username: string;
        name: string;
        userId: string;
        kind: "EndUser" | "CustomerEmployee" | "DfnsStaff";
        credentialUuid: string;
        orgId: string;
        permissions?: string[] | undefined;
        isActive: boolean;
        isServiceAccount: boolean;
        isRegistered: boolean;
        permissionAssignments: {
            permissionName: string;
            permissionId: string;
            assignmentId: string;
            operations?: string[] | undefined;
        }[];
    };
    accessTokens: {
        accessToken?: string | undefined;
        dateCreated: string;
        credId: string;
        isActive: boolean;
        kind: "ServiceAccount" | "Pat" | "Application";
        linkedUserId: string;
        linkedAppId: string;
        name: string;
        orgId: string;
        permissionAssignments: {
            permissionName: string;
            permissionId: string;
            assignmentId: string;
            operations?: string[] | undefined;
        }[];
        publicKey: string;
        tokenId: string;
    }[];
};

export type ArchiveServiceAccountRequest = ArchiveServiceAccountParams

export type ArchiveUserParams = {
    userId: string;
};

export type ArchiveUserResponse = {
    username: string;
    name: string;
    userId: string;
    kind: "EndUser" | "CustomerEmployee" | "DfnsStaff";
    credentialUuid: string;
    orgId: string;
    permissions?: string[] | undefined;
    isActive: boolean;
    isServiceAccount: boolean;
    isRegistered: boolean;
    permissionAssignments: {
        permissionName: string;
        permissionId: string;
        assignmentId: string;
        operations?: string[] | undefined;
    }[];
};

export type ArchiveUserRequest = ArchiveUserParams

export type CreateApplicationBody = {
    name: string;
    relyingPartyId: string;
    origin: string;
    permissionId?: string | undefined;
    externalId?: string | undefined;
    kind: "ClientSideApplication";
} | {
    name: string;
    relyingPartyId: string;
    origin: string;
    permissionId?: string | undefined;
    externalId?: string | undefined;
    kind: "ServerSideApplication";
    publicKey: string;
    daysValid?: number | undefined;
};

export type CreateApplicationResponse = {
    appId: string;
    kind: "ServerSideApplication" | "ClientSideApplication";
    orgId: string;
    expectedRpId: string;
    name: string;
    isActive: boolean;
    expectedOrigin: string;
    permissionAssignments: {
        permissionName: string;
        permissionId: string;
        assignmentId: string;
        operations?: string[] | undefined;
    }[];
    accessTokens: {
        accessToken?: string | undefined;
        dateCreated: string;
        credId: string;
        isActive: boolean;
        kind: "ServiceAccount" | "Pat" | "Application";
        linkedUserId: string;
        linkedAppId: string;
        name: string;
        orgId: string;
        permissionAssignments: {
            permissionName: string;
            permissionId: string;
            assignmentId: string;
            operations?: string[] | undefined;
        }[];
        publicKey: string;
        tokenId: string;
    }[];
};

export type CreateApplicationRequest = { body: CreateApplicationBody }

export type CreateCredentialBody = {
    credentialKind: "Fido2";
    credentialInfo: {
        credId: string;
        clientData: string;
        attestationData: string;
    };
    credentialName: string;
    challengeIdentifier: string;
} | {
    credentialKind: "Key";
    credentialInfo: {
        credId: string;
        clientData: string;
        attestationData: string;
    };
    credentialName: string;
    challengeIdentifier: string;
} | {
    credentialKind: "PasswordProtectedKey";
    credentialInfo: {
        credId: string;
        clientData: string;
        attestationData: string;
    };
    encryptedPrivateKey: string;
    credentialName: string;
    challengeIdentifier: string;
} | {
    credentialKind: "Password";
    credentialInfo: {
        password: string;
    };
    credentialName: string;
    challengeIdentifier: string;
} | {
    credentialKind: "Totp";
    credentialInfo: {
        otpCode: string;
    };
    credentialName: string;
    challengeIdentifier: string;
} | {
    credentialKind: "RecoveryKey";
    credentialInfo: {
        credId: string;
        clientData: string;
        attestationData: string;
    };
    encryptedPrivateKey?: string | undefined;
    credentialName: string;
    challengeIdentifier: string;
};

export type CreateCredentialResponse = {
    kind: "Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey";
    credentialId: string;
    credentialUuid: string;
    dateCreated: string;
    isActive: boolean;
    name: string;
    publicKey: string;
    relyingPartyId: string;
    origin: string;
};

export type CreateCredentialRequest = { body: CreateCredentialBody }

export type CreateCredentialChallengeBody = {
    kind: "Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey";
};

export type CreateCredentialChallengeResponse = {
    kind: "Password";
    user: {
        id: string;
        displayName: string;
        name: string;
    };
    challengeIdentifier: string;
    rp: {
        id: string;
        name: string;
    };
    /** @deprecated use challengeIdentifier instead */
    temporaryAuthenticationToken: string;
} | {
    kind: "Totp";
    user: {
        id: string;
        displayName: string;
        name: string;
    };
    challengeIdentifier: string;
    rp: {
        id: string;
        name: string;
    };
    otpUrl: string;
    /** @deprecated use challengeIdentifier instead */
    temporaryAuthenticationToken: string;
} | {
    kind: "Fido2";
    user: {
        id: string;
        displayName: string;
        name: string;
    };
    challengeIdentifier: string;
    challenge: string;
    rp: {
        id: string;
        name: string;
    };
    authenticatorSelection: {
        authenticatorAttachment?: ("platform" | "cross-platform") | undefined;
        residentKey: "required" | "preferred" | "discouraged";
        requireResidentKey: boolean;
        userVerification: "required" | "preferred" | "discouraged";
    };
    attestation: "none" | "indirect" | "direct" | "enterprise";
    pubKeyCredParams: {
        type: "public-key";
        alg: number;
    }[];
    excludeCredentials: {
        type: "public-key";
        id: string;
        transports?: ("usb" | "nfc" | "ble" | "smart-card" | "hybrid" | "internal") | undefined;
    }[];
    /** @deprecated use challengeIdentifier instead */
    temporaryAuthenticationToken: string;
} | {
    kind: "Key";
    user: {
        id: string;
        displayName: string;
        name: string;
    };
    challengeIdentifier: string;
    challenge: string;
    rp: {
        id: string;
        name: string;
    };
    attestation: "none" | "indirect" | "direct" | "enterprise";
    pubKeyCredParams: {
        type: "public-key";
        alg: number;
    }[];
    /** @deprecated use challengeIdentifier instead */
    temporaryAuthenticationToken: string;
} | {
    kind: "PasswordProtectedKey";
    user: {
        id: string;
        displayName: string;
        name: string;
    };
    challengeIdentifier: string;
    challenge: string;
    rp: {
        id: string;
        name: string;
    };
    attestation: "none" | "indirect" | "direct" | "enterprise";
    pubKeyCredParams: {
        type: "public-key";
        alg: number;
    }[];
    /** @deprecated use challengeIdentifier instead */
    temporaryAuthenticationToken: string;
} | {
    kind: "RecoveryKey";
    user: {
        id: string;
        displayName: string;
        name: string;
    };
    challengeIdentifier: string;
    challenge: string;
    rp: {
        id: string;
        name: string;
    };
    attestation: "none" | "indirect" | "direct" | "enterprise";
    pubKeyCredParams: {
        type: "public-key";
        alg: number;
    }[];
    /** @deprecated use challengeIdentifier instead */
    temporaryAuthenticationToken: string;
};

export type CreateCredentialChallengeRequest = { body: CreateCredentialChallengeBody }

export type CreateCredentialChallengeWithCodeBody = {
    credentialKind: "Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey";
    code: string;
};

export type CreateCredentialChallengeWithCodeResponse = {
    kind: "Password";
    user: {
        id: string;
        displayName: string;
        name: string;
    };
    challengeIdentifier: string;
    rp: {
        id: string;
        name: string;
    };
    /** @deprecated use challengeIdentifier instead */
    temporaryAuthenticationToken: string;
} | {
    kind: "Totp";
    user: {
        id: string;
        displayName: string;
        name: string;
    };
    challengeIdentifier: string;
    rp: {
        id: string;
        name: string;
    };
    otpUrl: string;
    /** @deprecated use challengeIdentifier instead */
    temporaryAuthenticationToken: string;
} | {
    kind: "Fido2";
    user: {
        id: string;
        displayName: string;
        name: string;
    };
    challengeIdentifier: string;
    challenge: string;
    rp: {
        id: string;
        name: string;
    };
    authenticatorSelection: {
        authenticatorAttachment?: ("platform" | "cross-platform") | undefined;
        residentKey: "required" | "preferred" | "discouraged";
        requireResidentKey: boolean;
        userVerification: "required" | "preferred" | "discouraged";
    };
    attestation: "none" | "indirect" | "direct" | "enterprise";
    pubKeyCredParams: {
        type: "public-key";
        alg: number;
    }[];
    excludeCredentials: {
        type: "public-key";
        id: string;
        transports?: ("usb" | "nfc" | "ble" | "smart-card" | "hybrid" | "internal") | undefined;
    }[];
    /** @deprecated use challengeIdentifier instead */
    temporaryAuthenticationToken: string;
} | {
    kind: "Key";
    user: {
        id: string;
        displayName: string;
        name: string;
    };
    challengeIdentifier: string;
    challenge: string;
    rp: {
        id: string;
        name: string;
    };
    attestation: "none" | "indirect" | "direct" | "enterprise";
    pubKeyCredParams: {
        type: "public-key";
        alg: number;
    }[];
    /** @deprecated use challengeIdentifier instead */
    temporaryAuthenticationToken: string;
} | {
    kind: "PasswordProtectedKey";
    user: {
        id: string;
        displayName: string;
        name: string;
    };
    challengeIdentifier: string;
    challenge: string;
    rp: {
        id: string;
        name: string;
    };
    attestation: "none" | "indirect" | "direct" | "enterprise";
    pubKeyCredParams: {
        type: "public-key";
        alg: number;
    }[];
    /** @deprecated use challengeIdentifier instead */
    temporaryAuthenticationToken: string;
} | {
    kind: "RecoveryKey";
    user: {
        id: string;
        displayName: string;
        name: string;
    };
    challengeIdentifier: string;
    challenge: string;
    rp: {
        id: string;
        name: string;
    };
    attestation: "none" | "indirect" | "direct" | "enterprise";
    pubKeyCredParams: {
        type: "public-key";
        alg: number;
    }[];
    /** @deprecated use challengeIdentifier instead */
    temporaryAuthenticationToken: string;
};

export type CreateCredentialChallengeWithCodeRequest = { body: CreateCredentialChallengeWithCodeBody }

export type CreateCredentialCodeBody = {
    /** Code expiration, as an ISO-8601 datetime string or a unix timestamp */
    expiration: string | number;
};

export type CreateCredentialCodeResponse = {
    code: string;
    expiration: string;
};

export type CreateCredentialCodeRequest = { body: CreateCredentialCodeBody }

export type CreateCredentialWithCodeBody = {
    credentialKind: "Fido2";
    credentialInfo: {
        credId: string;
        clientData: string;
        attestationData: string;
    };
    credentialName: string;
    challengeIdentifier: string;
} | {
    credentialKind: "Key";
    credentialInfo: {
        credId: string;
        clientData: string;
        attestationData: string;
    };
    credentialName: string;
    challengeIdentifier: string;
} | {
    credentialKind: "PasswordProtectedKey";
    credentialInfo: {
        credId: string;
        clientData: string;
        attestationData: string;
    };
    encryptedPrivateKey: string;
    credentialName: string;
    challengeIdentifier: string;
} | {
    credentialKind: "Password";
    credentialInfo: {
        password: string;
    };
    credentialName: string;
    challengeIdentifier: string;
} | {
    credentialKind: "Totp";
    credentialInfo: {
        otpCode: string;
    };
    credentialName: string;
    challengeIdentifier: string;
} | {
    credentialKind: "RecoveryKey";
    credentialInfo: {
        credId: string;
        clientData: string;
        attestationData: string;
    };
    encryptedPrivateKey?: string | undefined;
    credentialName: string;
    challengeIdentifier: string;
};

export type CreateCredentialWithCodeResponse = {
    kind: "Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey";
    credentialId: string;
    credentialUuid: string;
    dateCreated: string;
    isActive: boolean;
    name: string;
    publicKey: string;
    relyingPartyId: string;
    origin: string;
};

export type CreateCredentialWithCodeRequest = { body: CreateCredentialWithCodeBody }

export type CreateDelegatedRecoveryChallengeBody = {
    username: string;
    credentialId: string;
};

export type CreateDelegatedRecoveryChallengeResponse = {
    user: {
        id: string;
        displayName: string;
        name: string;
    };
    temporaryAuthenticationToken: string;
    challenge: string;
    rp: {
        id: string;
        name: string;
    };
    supportedCredentialKinds: {
        firstFactor: ("Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey")[];
        secondFactor: ("Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey")[];
    };
    authenticatorSelection: {
        authenticatorAttachment?: ("platform" | "cross-platform") | undefined;
        residentKey: "required" | "preferred" | "discouraged";
        requireResidentKey: boolean;
        userVerification: "required" | "preferred" | "discouraged";
    };
    attestation: "none" | "indirect" | "direct" | "enterprise";
    pubKeyCredParams: {
        type: "public-key";
        alg: number;
    }[];
    excludeCredentials: {
        type: "public-key";
        id: string;
        transports?: ("usb" | "nfc" | "ble" | "smart-card" | "hybrid" | "internal") | undefined;
    }[];
    otpUrl: string;
    allowedRecoveryCredentials: {
        id: string;
        encryptedRecoveryKey: string;
    }[];
};

export type CreateDelegatedRecoveryChallengeRequest = { body: CreateDelegatedRecoveryChallengeBody }

export type CreateDelegatedRegistrationChallengeBody = {
    email: string;
    kind: "EndUser" | "CustomerEmployee" | "DfnsStaff";
    externalId?: string | undefined;
};

export type CreateDelegatedRegistrationChallengeResponse = {
    user: {
        id: string;
        displayName: string;
        name: string;
    };
    temporaryAuthenticationToken: string;
    challenge: string;
    rp: {
        id: string;
        name: string;
    };
    supportedCredentialKinds: {
        firstFactor: ("Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey")[];
        secondFactor: ("Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey")[];
    };
    authenticatorSelection: {
        authenticatorAttachment?: ("platform" | "cross-platform") | undefined;
        residentKey: "required" | "preferred" | "discouraged";
        requireResidentKey: boolean;
        userVerification: "required" | "preferred" | "discouraged";
    };
    attestation: "none" | "indirect" | "direct" | "enterprise";
    pubKeyCredParams: {
        type: "public-key";
        alg: number;
    }[];
    excludeCredentials: {
        type: "public-key";
        id: string;
        transports?: ("usb" | "nfc" | "ble" | "smart-card" | "hybrid" | "internal") | undefined;
    }[];
    otpUrl: string;
};

export type CreateDelegatedRegistrationChallengeRequest = { body: CreateDelegatedRegistrationChallengeBody }

export type CreateLoginChallengeBody = {
    username: string;
    orgId: string;
    loginCode?: string | undefined;
};

export type CreateLoginChallengeResponse = {
    challenge: string;
    challengeIdentifier: string;
    rp: {
        id: string;
        name: string;
    };
    supportedCredentialKinds: {
        kind: "Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey";
        factor: "first" | "second" | "either";
        requiresSecondFactor: boolean;
    }[];
    userVerification: "required" | "preferred" | "discouraged";
    attestation: "none" | "indirect" | "direct" | "enterprise";
    allowCredentials: {
        key: {
            type: "public-key";
            id: string;
            transports?: ("usb" | "nfc" | "ble" | "smart-card" | "hybrid" | "internal") | undefined;
        }[];
        passwordProtectedKey?: {
            type: "public-key";
            id: string;
            encryptedPrivateKey: string;
        }[] | undefined;
        webauthn: {
            type: "public-key";
            id: string;
            transports?: ("usb" | "nfc" | "ble" | "smart-card" | "hybrid" | "internal") | undefined;
        }[];
    };
    externalAuthenticationUrl: string;
};

export type CreateLoginChallengeRequest = { body: CreateLoginChallengeBody }

export type CreatePersonalAccessTokenBody = {
    name: string;
    publicKey: string;
    permissionId?: string | undefined;
    externalId?: string | undefined;
    daysValid?: number | undefined;
    secondsValid?: number | undefined;
};

export type CreatePersonalAccessTokenResponse = {
    accessToken: string;
    dateCreated: string;
    credId: string;
    isActive: boolean;
    kind: "ServiceAccount" | "Pat" | "Application";
    linkedUserId: string;
    linkedAppId: string;
    name: string;
    orgId: string;
    publicKey: string;
    tokenId: string;
    permissionAssignments: {
        permissionName: string;
        permissionId: string;
        assignmentId: string;
        operations?: string[] | undefined;
    }[];
};

export type CreatePersonalAccessTokenRequest = { body: CreatePersonalAccessTokenBody }

export type CreateRecoveryChallengeBody = {
    username: string;
    verificationCode: string;
    orgId: string;
    credentialId: string;
};

export type CreateRecoveryChallengeResponse = {
    user: {
        id: string;
        displayName: string;
        name: string;
    };
    temporaryAuthenticationToken: string;
    challenge: string;
    rp: {
        id: string;
        name: string;
    };
    supportedCredentialKinds: {
        firstFactor: ("Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey")[];
        secondFactor: ("Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey")[];
    };
    authenticatorSelection: {
        authenticatorAttachment?: ("platform" | "cross-platform") | undefined;
        residentKey: "required" | "preferred" | "discouraged";
        requireResidentKey: boolean;
        userVerification: "required" | "preferred" | "discouraged";
    };
    attestation: "none" | "indirect" | "direct" | "enterprise";
    pubKeyCredParams: {
        type: "public-key";
        alg: number;
    }[];
    excludeCredentials: {
        type: "public-key";
        id: string;
        transports?: ("usb" | "nfc" | "ble" | "smart-card" | "hybrid" | "internal") | undefined;
    }[];
    otpUrl: string;
    allowedRecoveryCredentials: {
        id: string;
        encryptedRecoveryKey: string;
    }[];
};

export type CreateRecoveryChallengeRequest = { body: CreateRecoveryChallengeBody }

export type CreateRegistrationChallengeBody = {
    orgId: string;
    username: string;
    registrationCode: string;
};

export type CreateRegistrationChallengeResponse = {
    user: {
        id: string;
        displayName: string;
        name: string;
    };
    temporaryAuthenticationToken: string;
    challenge: string;
    rp: {
        id: string;
        name: string;
    };
    supportedCredentialKinds: {
        firstFactor: ("Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey")[];
        secondFactor: ("Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey")[];
    };
    authenticatorSelection: {
        authenticatorAttachment?: ("platform" | "cross-platform") | undefined;
        residentKey: "required" | "preferred" | "discouraged";
        requireResidentKey: boolean;
        userVerification: "required" | "preferred" | "discouraged";
    };
    attestation: "none" | "indirect" | "direct" | "enterprise";
    pubKeyCredParams: {
        type: "public-key";
        alg: number;
    }[];
    excludeCredentials: {
        type: "public-key";
        id: string;
        transports?: ("usb" | "nfc" | "ble" | "smart-card" | "hybrid" | "internal") | undefined;
    }[];
    otpUrl: string;
};

export type CreateRegistrationChallengeRequest = { body: CreateRegistrationChallengeBody }

export type CreateServiceAccountBody = {
    name: string;
    publicKey: string;
    permissionId?: string | undefined;
    externalId?: string | undefined;
    daysValid?: number | undefined;
};

export type CreateServiceAccountResponse = {
    userInfo: {
        username: string;
        name: string;
        userId: string;
        kind: "EndUser" | "CustomerEmployee" | "DfnsStaff";
        credentialUuid: string;
        orgId: string;
        permissions?: string[] | undefined;
        isActive: boolean;
        isServiceAccount: boolean;
        isRegistered: boolean;
        permissionAssignments: {
            permissionName: string;
            permissionId: string;
            assignmentId: string;
            operations?: string[] | undefined;
        }[];
    };
    accessTokens: {
        accessToken?: string | undefined;
        dateCreated: string;
        credId: string;
        isActive: boolean;
        kind: "ServiceAccount" | "Pat" | "Application";
        linkedUserId: string;
        linkedAppId: string;
        name: string;
        orgId: string;
        permissionAssignments: {
            permissionName: string;
            permissionId: string;
            assignmentId: string;
            operations?: string[] | undefined;
        }[];
        publicKey: string;
        tokenId: string;
    }[];
};

export type CreateServiceAccountRequest = { body: CreateServiceAccountBody }

export type CreateSocialRegistrationChallengeBody = {
    socialLoginProviderKind: "Oidc";
    idToken: string;
};

export type CreateSocialRegistrationChallengeResponse = {
    user: {
        id: string;
        displayName: string;
        name: string;
    };
    temporaryAuthenticationToken: string;
    challenge: string;
    rp: {
        id: string;
        name: string;
    };
    supportedCredentialKinds: {
        firstFactor: ("Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey")[];
        secondFactor: ("Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey")[];
    };
    authenticatorSelection: {
        authenticatorAttachment?: ("platform" | "cross-platform") | undefined;
        residentKey: "required" | "preferred" | "discouraged";
        requireResidentKey: boolean;
        userVerification: "required" | "preferred" | "discouraged";
    };
    attestation: "none" | "indirect" | "direct" | "enterprise";
    pubKeyCredParams: {
        type: "public-key";
        alg: number;
    }[];
    excludeCredentials: {
        type: "public-key";
        id: string;
        transports?: ("usb" | "nfc" | "ble" | "smart-card" | "hybrid" | "internal") | undefined;
    }[];
    otpUrl: string;
};

export type CreateSocialRegistrationChallengeRequest = { body: CreateSocialRegistrationChallengeBody }

export type CreateUserBody = {
    email: string;
    kind: "CustomerEmployee" | "DfnsStaff";
    publicKey?: string | undefined;
    externalId?: string | undefined;
};

export type CreateUserResponse = {
    username: string;
    name: string;
    userId: string;
    kind: "EndUser" | "CustomerEmployee" | "DfnsStaff";
    credentialUuid: string;
    orgId: string;
    permissions?: string[] | undefined;
    isActive: boolean;
    isServiceAccount: boolean;
    isRegistered: boolean;
    permissionAssignments: {
        permissionName: string;
        permissionId: string;
        assignmentId: string;
        operations?: string[] | undefined;
    }[];
};

export type CreateUserRequest = { body: CreateUserBody }

export type CreateUserActionChallengeBody = {
    userActionServerKind?: ("Api" | "Staff") | undefined;
    userActionHttpMethod: string;
    userActionHttpPath: string;
    userActionPayload: string;
};

export type CreateUserActionChallengeResponse = {
    challenge: string;
    challengeIdentifier: string;
    rp: {
        id: string;
        name: string;
    };
    supportedCredentialKinds: {
        kind: "Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey";
        factor: "first" | "second" | "either";
        requiresSecondFactor: boolean;
    }[];
    userVerification: "required" | "preferred" | "discouraged";
    attestation: "none" | "indirect" | "direct" | "enterprise";
    allowCredentials: {
        key: {
            type: "public-key";
            id: string;
            transports?: ("usb" | "nfc" | "ble" | "smart-card" | "hybrid" | "internal") | undefined;
        }[];
        passwordProtectedKey?: {
            type: "public-key";
            id: string;
            encryptedPrivateKey: string;
        }[] | undefined;
        webauthn: {
            type: "public-key";
            id: string;
            transports?: ("usb" | "nfc" | "ble" | "smart-card" | "hybrid" | "internal") | undefined;
        }[];
    };
    externalAuthenticationUrl: string;
};

export type CreateUserActionChallengeRequest = { body: CreateUserActionChallengeBody }

export type CreateUserActionSignatureBody = {
    challengeIdentifier: string;
    firstFactor: {
        kind: "Fido2";
        credentialAssertion: {
            credId: string;
            clientData: string;
            signature: string;
            algorithm?: string | undefined;
            authenticatorData: string;
            userHandle?: string | undefined;
        };
    } | {
        kind: "Key";
        credentialAssertion: {
            credId: string;
            clientData: string;
            signature: string;
            algorithm?: string | undefined;
        };
    } | {
        kind: "Password";
        password: string;
    } | {
        kind: "PasswordProtectedKey";
        credentialAssertion: {
            credId: string;
            clientData: string;
            signature: string;
            algorithm?: string | undefined;
        };
    };
    secondFactor?: ({
        kind: "Fido2";
        credentialAssertion: {
            credId: string;
            clientData: string;
            signature: string;
            algorithm?: string | undefined;
            authenticatorData: string;
            userHandle?: string | undefined;
        };
    } | {
        kind: "Key";
        credentialAssertion: {
            credId: string;
            clientData: string;
            signature: string;
            algorithm?: string | undefined;
        };
    } | {
        kind: "Totp";
        otpCode: string;
    } | {
        kind: "PasswordProtectedKey";
        credentialAssertion: {
            credId: string;
            clientData: string;
            signature: string;
            algorithm?: string | undefined;
        };
    }) | undefined;
};

export type CreateUserActionSignatureResponse = {
    userAction: string;
};

export type CreateUserActionSignatureRequest = { body: CreateUserActionSignatureBody }

export type DeactivateApplicationParams = {
    appId: string;
};

export type DeactivateApplicationResponse = {
    appId: string;
    kind: "ServerSideApplication" | "ClientSideApplication";
    orgId: string;
    expectedRpId: string;
    name: string;
    isActive: boolean;
    expectedOrigin: string;
    permissionAssignments: {
        permissionName: string;
        permissionId: string;
        assignmentId: string;
        operations?: string[] | undefined;
    }[];
    accessTokens: {
        accessToken?: string | undefined;
        dateCreated: string;
        credId: string;
        isActive: boolean;
        kind: "ServiceAccount" | "Pat" | "Application";
        linkedUserId: string;
        linkedAppId: string;
        name: string;
        orgId: string;
        permissionAssignments: {
            permissionName: string;
            permissionId: string;
            assignmentId: string;
            operations?: string[] | undefined;
        }[];
        publicKey: string;
        tokenId: string;
    }[];
};

export type DeactivateApplicationRequest = DeactivateApplicationParams

export type DeactivateCredentialBody = {
    credentialUuid: string;
};

export type DeactivateCredentialResponse = {
    message: string;
};

export type DeactivateCredentialRequest = { body: DeactivateCredentialBody }

export type DeactivatePersonalAccessTokenParams = {
    tokenId: string;
};

export type DeactivatePersonalAccessTokenResponse = {
    accessToken?: string | undefined;
    dateCreated: string;
    credId: string;
    isActive: boolean;
    kind: "ServiceAccount" | "Pat" | "Application";
    linkedUserId: string;
    linkedAppId: string;
    name: string;
    orgId: string;
    permissionAssignments: {
        permissionName: string;
        permissionId: string;
        assignmentId: string;
        operations?: string[] | undefined;
    }[];
    publicKey: string;
    tokenId: string;
};

export type DeactivatePersonalAccessTokenRequest = DeactivatePersonalAccessTokenParams

export type DeactivateServiceAccountParams = {
    serviceAccountId: string;
};

export type DeactivateServiceAccountResponse = {
    userInfo: {
        username: string;
        name: string;
        userId: string;
        kind: "EndUser" | "CustomerEmployee" | "DfnsStaff";
        credentialUuid: string;
        orgId: string;
        permissions?: string[] | undefined;
        isActive: boolean;
        isServiceAccount: boolean;
        isRegistered: boolean;
        permissionAssignments: {
            permissionName: string;
            permissionId: string;
            assignmentId: string;
            operations?: string[] | undefined;
        }[];
    };
    accessTokens: {
        accessToken?: string | undefined;
        dateCreated: string;
        credId: string;
        isActive: boolean;
        kind: "ServiceAccount" | "Pat" | "Application";
        linkedUserId: string;
        linkedAppId: string;
        name: string;
        orgId: string;
        permissionAssignments: {
            permissionName: string;
            permissionId: string;
            assignmentId: string;
            operations?: string[] | undefined;
        }[];
        publicKey: string;
        tokenId: string;
    }[];
};

export type DeactivateServiceAccountRequest = DeactivateServiceAccountParams

export type DeactivateUserParams = {
    userId: string;
};

export type DeactivateUserResponse = {
    username: string;
    name: string;
    userId: string;
    kind: "EndUser" | "CustomerEmployee" | "DfnsStaff";
    credentialUuid: string;
    orgId: string;
    permissions?: string[] | undefined;
    isActive: boolean;
    isServiceAccount: boolean;
    isRegistered: boolean;
    permissionAssignments: {
        permissionName: string;
        permissionId: string;
        assignmentId: string;
        operations?: string[] | undefined;
    }[];
};

export type DeactivateUserRequest = DeactivateUserParams

export type DelegatedLoginBody = {
    username: string;
};

export type DelegatedLoginResponse = {
    token: string;
};

export type DelegatedLoginRequest = { body: DelegatedLoginBody }

export type GetApplicationParams = {
    appId: string;
};

export type GetApplicationResponse = {
    appId: string;
    kind: "ServerSideApplication" | "ClientSideApplication";
    orgId: string;
    expectedRpId: string;
    name: string;
    isActive: boolean;
    expectedOrigin: string;
    permissionAssignments: {
        permissionName: string;
        permissionId: string;
        assignmentId: string;
        operations?: string[] | undefined;
    }[];
    accessTokens: {
        accessToken?: string | undefined;
        dateCreated: string;
        credId: string;
        isActive: boolean;
        kind: "ServiceAccount" | "Pat" | "Application";
        linkedUserId: string;
        linkedAppId: string;
        name: string;
        orgId: string;
        permissionAssignments: {
            permissionName: string;
            permissionId: string;
            assignmentId: string;
            operations?: string[] | undefined;
        }[];
        publicKey: string;
        tokenId: string;
    }[];
};

export type GetApplicationRequest = GetApplicationParams

export type GetPersonalAccessTokenParams = {
    tokenId: string;
};

export type GetPersonalAccessTokenResponse = {
    accessToken?: string | undefined;
    dateCreated: string;
    credId: string;
    isActive: boolean;
    kind: "ServiceAccount" | "Pat" | "Application";
    linkedUserId: string;
    linkedAppId: string;
    name: string;
    orgId: string;
    permissionAssignments: {
        permissionName: string;
        permissionId: string;
        assignmentId: string;
        operations?: string[] | undefined;
    }[];
    publicKey: string;
    tokenId: string;
};

export type GetPersonalAccessTokenRequest = GetPersonalAccessTokenParams

export type GetServiceAccountParams = {
    serviceAccountId: string;
};

export type GetServiceAccountResponse = {
    userInfo: {
        username: string;
        name: string;
        userId: string;
        kind: "EndUser" | "CustomerEmployee" | "DfnsStaff";
        credentialUuid: string;
        orgId: string;
        permissions?: string[] | undefined;
        isActive: boolean;
        isServiceAccount: boolean;
        isRegistered: boolean;
        permissionAssignments: {
            permissionName: string;
            permissionId: string;
            assignmentId: string;
            operations?: string[] | undefined;
        }[];
    };
    accessTokens: {
        accessToken?: string | undefined;
        dateCreated: string;
        credId: string;
        isActive: boolean;
        kind: "ServiceAccount" | "Pat" | "Application";
        linkedUserId: string;
        linkedAppId: string;
        name: string;
        orgId: string;
        permissionAssignments: {
            permissionName: string;
            permissionId: string;
            assignmentId: string;
            operations?: string[] | undefined;
        }[];
        publicKey: string;
        tokenId: string;
    }[];
};

export type GetServiceAccountRequest = GetServiceAccountParams

export type GetUserParams = {
    userId: string;
};

export type GetUserResponse = {
    username: string;
    name: string;
    userId: string;
    kind: "EndUser" | "CustomerEmployee" | "DfnsStaff";
    credentialUuid: string;
    orgId: string;
    permissions?: string[] | undefined;
    isActive: boolean;
    isServiceAccount: boolean;
    isRegistered: boolean;
    permissionAssignments: {
        permissionName: string;
        permissionId: string;
        assignmentId: string;
        operations?: string[] | undefined;
    }[];
};

export type GetUserRequest = GetUserParams

export type ListApplicationsResponse = {
    items: {
        appId: string;
        kind: "ServerSideApplication" | "ClientSideApplication";
        orgId: string;
        expectedRpId: string;
        name: string;
        isActive: boolean;
        expectedOrigin: string;
        permissionAssignments: {
            permissionName: string;
            permissionId: string;
            assignmentId: string;
            operations?: string[] | undefined;
        }[];
        accessTokens: {
            accessToken?: string | undefined;
            dateCreated: string;
            credId: string;
            isActive: boolean;
            kind: "ServiceAccount" | "Pat" | "Application";
            linkedUserId: string;
            linkedAppId: string;
            name: string;
            orgId: string;
            permissionAssignments: {
                permissionName: string;
                permissionId: string;
                assignmentId: string;
                operations?: string[] | undefined;
            }[];
            publicKey: string;
            tokenId: string;
        }[];
    }[];
};

export type ListCredentialsResponse = {
    items: {
        kind: "Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey";
        credentialId: string;
        credentialUuid: string;
        dateCreated: string;
        isActive: boolean;
        name: string;
        publicKey: string;
        relyingPartyId: string;
        origin: string;
    }[];
};

export type ListPersonalAccessTokensResponse = {
    items: {
        accessToken?: string | undefined;
        dateCreated: string;
        credId: string;
        isActive: boolean;
        kind: "ServiceAccount" | "Pat" | "Application";
        linkedUserId: string;
        linkedAppId: string;
        name: string;
        orgId: string;
        permissionAssignments: {
            permissionName: string;
            permissionId: string;
            assignmentId: string;
            operations?: string[] | undefined;
        }[];
        publicKey: string;
        tokenId: string;
    }[];
};

export type ListServiceAccountsResponse = {
    items: {
        userInfo: {
            username: string;
            name: string;
            userId: string;
            kind: "EndUser" | "CustomerEmployee" | "DfnsStaff";
            credentialUuid: string;
            orgId: string;
            permissions?: string[] | undefined;
            isActive: boolean;
            isServiceAccount: boolean;
            isRegistered: boolean;
            permissionAssignments: {
                permissionName: string;
                permissionId: string;
                assignmentId: string;
                operations?: string[] | undefined;
            }[];
        };
        accessTokens: {
            accessToken?: string | undefined;
            dateCreated: string;
            credId: string;
            isActive: boolean;
            kind: "ServiceAccount" | "Pat" | "Application";
            linkedUserId: string;
            linkedAppId: string;
            name: string;
            orgId: string;
            permissionAssignments: {
                permissionName: string;
                permissionId: string;
                assignmentId: string;
                operations?: string[] | undefined;
            }[];
            publicKey: string;
            tokenId: string;
        }[];
    }[];
};

export type ListUsersQuery = {
    limit?: number | undefined;
    paginationToken?: string | undefined;
    kind?: ("CustomerEmployee" | "EndUser") | undefined;
};

export type ListUsersResponse = {
    items: {
        username: string;
        name: string;
        userId: string;
        kind: "EndUser" | "CustomerEmployee" | "DfnsStaff";
        credentialUuid: string;
        orgId: string;
        permissions?: string[] | undefined;
        isActive: boolean;
        isServiceAccount: boolean;
        isRegistered: boolean;
        permissionAssignments: {
            permissionName: string;
            permissionId: string;
            assignmentId: string;
            operations?: string[] | undefined;
        }[];
    }[];
    nextPageToken?: string | undefined;
};

export type ListUsersRequest = { query?: ListUsersQuery }

export type LoginBody = {
    challengeIdentifier: string;
    firstFactor: {
        kind: "Fido2";
        credentialAssertion: {
            credId: string;
            clientData: string;
            signature: string;
            algorithm?: string | undefined;
            authenticatorData: string;
            userHandle?: string | undefined;
        };
    } | {
        kind: "Key";
        credentialAssertion: {
            credId: string;
            clientData: string;
            signature: string;
            algorithm?: string | undefined;
        };
    } | {
        kind: "Password";
        password: string;
    } | {
        kind: "PasswordProtectedKey";
        credentialAssertion: {
            credId: string;
            clientData: string;
            signature: string;
            algorithm?: string | undefined;
        };
    };
    secondFactor?: ({
        kind: "Fido2";
        credentialAssertion: {
            credId: string;
            clientData: string;
            signature: string;
            algorithm?: string | undefined;
            authenticatorData: string;
            userHandle?: string | undefined;
        };
    } | {
        kind: "Key";
        credentialAssertion: {
            credId: string;
            clientData: string;
            signature: string;
            algorithm?: string | undefined;
        };
    } | {
        kind: "Totp";
        otpCode: string;
    } | {
        kind: "PasswordProtectedKey";
        credentialAssertion: {
            credId: string;
            clientData: string;
            signature: string;
            algorithm?: string | undefined;
        };
    }) | undefined;
};

export type LoginResponse = {
    token: string;
};

export type LoginRequest = { body: LoginBody }

export type LogoutResponse = {
    message: string;
};

export type RecoverBody = {
    recovery: {
        kind: "RecoveryKey";
        credentialAssertion: {
            credId: string;
            clientData: string;
            signature: string;
            algorithm?: string | undefined;
        };
    };
    newCredentials: {
        firstFactorCredential: {
            credentialKind: "Fido2";
            credentialInfo: {
                credId: string;
                clientData: string;
                attestationData: string;
            };
        } | {
            credentialKind: "Key";
            credentialInfo: {
                credId: string;
                clientData: string;
                attestationData: string;
            };
        } | {
            credentialKind: "Password";
            credentialInfo: {
                password: string;
            };
        } | {
            credentialKind: "PasswordProtectedKey";
            credentialInfo: {
                credId: string;
                clientData: string;
                attestationData: string;
            };
            encryptedPrivateKey: string;
        };
        secondFactorCredential?: ({
            credentialKind: "Fido2";
            credentialInfo: {
                credId: string;
                clientData: string;
                attestationData: string;
            };
        } | {
            credentialKind: "Key";
            credentialInfo: {
                credId: string;
                clientData: string;
                attestationData: string;
            };
        } | {
            credentialKind: "Totp";
            credentialInfo: {
                otpCode: string;
            };
        } | {
            credentialKind: "PasswordProtectedKey";
            credentialInfo: {
                credId: string;
                clientData: string;
                attestationData: string;
            };
            encryptedPrivateKey: string;
        }) | undefined;
        recoveryCredential?: {
            credentialKind: "RecoveryKey";
            credentialInfo: {
                credId: string;
                clientData: string;
                attestationData: string;
            };
            encryptedPrivateKey?: string | undefined;
        } | undefined;
    };
};

export type RecoverResponse = {
    credential: {
        uuid: string;
        kind: "Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey";
        name: string;
    };
    user: {
        id: string;
        username: string;
        orgId: string;
    };
};

export type RecoverRequest = { body: RecoverBody }

export type RecreateDelegatedRegistrationChallengeBody = {
    email: string;
    kind: "EndUser" | "CustomerEmployee" | "DfnsStaff";
    externalId?: string | undefined;
};

export type RecreateDelegatedRegistrationChallengeResponse = {
    user: {
        id: string;
        displayName: string;
        name: string;
    };
    temporaryAuthenticationToken: string;
    challenge: string;
    rp: {
        id: string;
        name: string;
    };
    supportedCredentialKinds: {
        firstFactor: ("Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey")[];
        secondFactor: ("Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey")[];
    };
    authenticatorSelection: {
        authenticatorAttachment?: ("platform" | "cross-platform") | undefined;
        residentKey: "required" | "preferred" | "discouraged";
        requireResidentKey: boolean;
        userVerification: "required" | "preferred" | "discouraged";
    };
    attestation: "none" | "indirect" | "direct" | "enterprise";
    pubKeyCredParams: {
        type: "public-key";
        alg: number;
    }[];
    excludeCredentials: {
        type: "public-key";
        id: string;
        transports?: ("usb" | "nfc" | "ble" | "smart-card" | "hybrid" | "internal") | undefined;
    }[];
    otpUrl: string;
};

export type RecreateDelegatedRegistrationChallengeRequest = { body: RecreateDelegatedRegistrationChallengeBody }

export type RegisterBody = {
    firstFactorCredential: {
        credentialKind: "Fido2";
        credentialInfo: {
            credId: string;
            clientData: string;
            attestationData: string;
        };
    } | {
        credentialKind: "Key";
        credentialInfo: {
            credId: string;
            clientData: string;
            attestationData: string;
        };
    } | {
        credentialKind: "Password";
        credentialInfo: {
            password: string;
        };
    } | {
        credentialKind: "PasswordProtectedKey";
        credentialInfo: {
            credId: string;
            clientData: string;
            attestationData: string;
        };
        encryptedPrivateKey: string;
    };
    secondFactorCredential?: ({
        credentialKind: "Fido2";
        credentialInfo: {
            credId: string;
            clientData: string;
            attestationData: string;
        };
    } | {
        credentialKind: "Key";
        credentialInfo: {
            credId: string;
            clientData: string;
            attestationData: string;
        };
    } | {
        credentialKind: "Totp";
        credentialInfo: {
            otpCode: string;
        };
    } | {
        credentialKind: "PasswordProtectedKey";
        credentialInfo: {
            credId: string;
            clientData: string;
            attestationData: string;
        };
        encryptedPrivateKey: string;
    }) | undefined;
    recoveryCredential?: {
        credentialKind: "RecoveryKey";
        credentialInfo: {
            credId: string;
            clientData: string;
            attestationData: string;
        };
        encryptedPrivateKey?: string | undefined;
    } | undefined;
};

export type RegisterResponse = {
    credential: {
        uuid: string;
        kind: "Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey";
        name: string;
    };
    user: {
        id: string;
        username: string;
        orgId: string;
    };
};

export type RegisterRequest = { body: RegisterBody }

export type RegisterEndUserBody = {
    firstFactorCredential: {
        credentialKind: "Fido2";
        credentialInfo: {
            credId: string;
            clientData: string;
            attestationData: string;
        };
    } | {
        credentialKind: "Key";
        credentialInfo: {
            credId: string;
            clientData: string;
            attestationData: string;
        };
    } | {
        credentialKind: "Password";
        credentialInfo: {
            password: string;
        };
    } | {
        credentialKind: "PasswordProtectedKey";
        credentialInfo: {
            credId: string;
            clientData: string;
            attestationData: string;
        };
        encryptedPrivateKey: string;
    };
    secondFactorCredential?: ({
        credentialKind: "Fido2";
        credentialInfo: {
            credId: string;
            clientData: string;
            attestationData: string;
        };
    } | {
        credentialKind: "Key";
        credentialInfo: {
            credId: string;
            clientData: string;
            attestationData: string;
        };
    } | {
        credentialKind: "Totp";
        credentialInfo: {
            otpCode: string;
        };
    } | {
        credentialKind: "PasswordProtectedKey";
        credentialInfo: {
            credId: string;
            clientData: string;
            attestationData: string;
        };
        encryptedPrivateKey: string;
    }) | undefined;
    recoveryCredential?: {
        credentialKind: "RecoveryKey";
        credentialInfo: {
            credId: string;
            clientData: string;
            attestationData: string;
        };
        encryptedPrivateKey?: string | undefined;
    } | undefined;
    wallets: {
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismSepolia" | "Origyn" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "ArbitrumGoerli" | "BaseGoerli" | "Cardano" | "CardanoPreprod" | "Kusama" | "OptimismGoerli" | "Polkadot" | "Westend" | "Tezos" | "TezosGhostnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyEdDSA" | "KeyECDSA" | "KeyECDSAStark";
        name?: string | undefined;
    }[];
};

export type RegisterEndUserResponse = {
    credential: {
        uuid: string;
        kind: "Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey";
        name: string;
    };
    user: {
        id: string;
        username: string;
        orgId: string;
    };
    authentication: {
        token: string;
    };
    wallets: {
        id: string;
        network: "Algorand" | "AlgorandTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Base" | "BaseGoerli" | "BaseSepolia" | "Bitcoin" | "BitcoinTestnet3" | "Bsc" | "BscTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "FantomOpera" | "FantomTestnet" | "InternetComputer" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Polkadot" | "Westend" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Tezos" | "TezosGhostnet" | "Tron" | "TronNile" | "Ton" | "TonTestnet" | "XrpLedger" | "XrpLedgerTestnet" | "KeyECDSA" | "KeyECDSAStark" | "KeyEdDSA";
        address?: string | undefined;
        signingKey: {
            scheme: "ECDSA" | "EdDSA";
            curve: "ed25519" | "secp256k1" | "stark";
            publicKey: string;
        };
        status: "Active" | "Archived";
        dateCreated: string;
        name?: string | undefined;
        custodial: boolean;
        imported?: boolean | undefined;
        exported?: boolean | undefined;
        dateExported?: string | undefined;
        externalId?: string | undefined;
        tags: string[];
    }[];
};

export type RegisterEndUserRequest = { body: RegisterEndUserBody }

export type ResendRegistrationCodeBody = {
    username: string;
    orgId: string;
};

export type ResendRegistrationCodeResponse = {
    message: string;
};

export type ResendRegistrationCodeRequest = { body: ResendRegistrationCodeBody }

export type SendLoginCodeBody = {
    username: string;
    orgId: string;
};

export type SendLoginCodeResponse = {
    message: string;
};

export type SendLoginCodeRequest = { body: SendLoginCodeBody }

export type SendRecoveryCodeBody = {
    username: string;
    orgId: string;
};

export type SendRecoveryCodeResponse = {
    message: string;
};

export type SendRecoveryCodeRequest = { body: SendRecoveryCodeBody }

export type SocialLoginBody = {
    socialLoginProviderKind: "Oidc";
    idToken: string;
};

export type SocialLoginResponse = {
    token: string;
};

export type SocialLoginRequest = { body: SocialLoginBody }

export type UpdateApplicationBody = {
    externalId?: string | undefined;
    name?: string | undefined;
};

export type UpdateApplicationParams = {
    appId: string;
};

export type UpdateApplicationResponse = {
    appId: string;
    kind: "ServerSideApplication" | "ClientSideApplication";
    orgId: string;
    expectedRpId: string;
    name: string;
    isActive: boolean;
    expectedOrigin: string;
    permissionAssignments: {
        permissionName: string;
        permissionId: string;
        assignmentId: string;
        operations?: string[] | undefined;
    }[];
    accessTokens: {
        accessToken?: string | undefined;
        dateCreated: string;
        credId: string;
        isActive: boolean;
        kind: "ServiceAccount" | "Pat" | "Application";
        linkedUserId: string;
        linkedAppId: string;
        name: string;
        orgId: string;
        permissionAssignments: {
            permissionName: string;
            permissionId: string;
            assignmentId: string;
            operations?: string[] | undefined;
        }[];
        publicKey: string;
        tokenId: string;
    }[];
};

export type UpdateApplicationRequest = UpdateApplicationParams & { body: UpdateApplicationBody }

export type UpdatePersonalAccessTokenBody = {
    name?: string | undefined;
    externalId?: string | undefined;
};

export type UpdatePersonalAccessTokenParams = {
    tokenId: string;
};

export type UpdatePersonalAccessTokenResponse = {
    accessToken?: string | undefined;
    dateCreated: string;
    credId: string;
    isActive: boolean;
    kind: "ServiceAccount" | "Pat" | "Application";
    linkedUserId: string;
    linkedAppId: string;
    name: string;
    orgId: string;
    permissionAssignments: {
        permissionName: string;
        permissionId: string;
        assignmentId: string;
        operations?: string[] | undefined;
    }[];
    publicKey: string;
    tokenId: string;
};

export type UpdatePersonalAccessTokenRequest = UpdatePersonalAccessTokenParams & { body: UpdatePersonalAccessTokenBody }

export type UpdateServiceAccountBody = {
    name?: string | undefined;
    externalId?: string | undefined;
};

export type UpdateServiceAccountParams = {
    serviceAccountId: string;
};

export type UpdateServiceAccountResponse = {
    userInfo: {
        username: string;
        name: string;
        userId: string;
        kind: "EndUser" | "CustomerEmployee" | "DfnsStaff";
        credentialUuid: string;
        orgId: string;
        permissions?: string[] | undefined;
        isActive: boolean;
        isServiceAccount: boolean;
        isRegistered: boolean;
        permissionAssignments: {
            permissionName: string;
            permissionId: string;
            assignmentId: string;
            operations?: string[] | undefined;
        }[];
    };
    accessTokens: {
        accessToken?: string | undefined;
        dateCreated: string;
        credId: string;
        isActive: boolean;
        kind: "ServiceAccount" | "Pat" | "Application";
        linkedUserId: string;
        linkedAppId: string;
        name: string;
        orgId: string;
        permissionAssignments: {
            permissionName: string;
            permissionId: string;
            assignmentId: string;
            operations?: string[] | undefined;
        }[];
        publicKey: string;
        tokenId: string;
    }[];
};

export type UpdateServiceAccountRequest = UpdateServiceAccountParams & { body: UpdateServiceAccountBody }

