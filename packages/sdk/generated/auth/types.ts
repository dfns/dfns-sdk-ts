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
    kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
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
        kind: "CustomerEmployee" | "DfnsStaff" | "EndUser";
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
        kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
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
    kind: "CustomerEmployee" | "DfnsStaff" | "EndUser";
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

export type ArchivePersonalAccessTokenParams = {
    tokenId: string;
};

export type ArchivePersonalAccessTokenResponse = {
    accessToken?: string | undefined;
    dateCreated: string;
    credId: string;
    isActive: boolean;
    kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
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
        kind: "CustomerEmployee" | "DfnsStaff" | "EndUser";
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
        kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
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
    kind: "CustomerEmployee" | "DfnsStaff" | "EndUser";
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
    rp?: {
        id: string;
        name: string;
    } | undefined;
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
    rp?: {
        id: string;
        name: string;
    } | undefined;
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
    rp?: {
        id: string;
        name: string;
    } | undefined;
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
    rp?: {
        id: string;
        name: string;
    } | undefined;
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
    rp?: {
        id: string;
        name: string;
    } | undefined;
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
    rp?: {
        id: string;
        name: string;
    } | undefined;
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
    rp?: {
        id: string;
        name: string;
    } | undefined;
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
    rp?: {
        id: string;
        name: string;
    } | undefined;
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
    rp?: {
        id: string;
        name: string;
    } | undefined;
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
    rp?: {
        id: string;
        name: string;
    } | undefined;
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
    rp?: {
        id: string;
        name: string;
    } | undefined;
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
    rp?: {
        id: string;
        name: string;
    } | undefined;
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
    rp?: {
        id: string;
        name: string;
    } | undefined;
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
    kind: "EndUser";
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
    rp?: {
        id: string;
        name: string;
    } | undefined;
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
    }[];
    otpUrl: string;
};

export type CreateDelegatedRegistrationChallengeRequest = { body: CreateDelegatedRegistrationChallengeBody }

export type CreateLoginChallengeBody = {
    username?: string | undefined;
    orgId: string;
    loginCode?: string | undefined;
};

export type CreateLoginChallengeResponse = {
    challenge: string;
    challengeIdentifier: string;
    rp?: {
        id: string;
        name: string;
    } | undefined;
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
        }[];
        passwordProtectedKey?: {
            type: "public-key";
            id: string;
            encryptedPrivateKey: string;
        }[] | undefined;
        webauthn: {
            type: "public-key";
            id: string;
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
    kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
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
    rp?: {
        id: string;
        name: string;
    } | undefined;
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
    rp?: {
        id: string;
        name: string;
    } | undefined;
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
        kind: "CustomerEmployee" | "DfnsStaff" | "EndUser";
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
        kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
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
    orgId?: string | undefined;
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
    rp?: {
        id: string;
        name: string;
    } | undefined;
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
    kind: "CustomerEmployee" | "DfnsStaff" | "EndUser";
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
    rp?: {
        id: string;
        name: string;
    } | undefined;
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
        }[];
        passwordProtectedKey?: {
            type: "public-key";
            id: string;
            encryptedPrivateKey: string;
        }[] | undefined;
        webauthn: {
            type: "public-key";
            id: string;
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
    kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
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
        kind: "CustomerEmployee" | "DfnsStaff" | "EndUser";
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
        kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
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
    kind: "CustomerEmployee" | "DfnsStaff" | "EndUser";
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
    expectedRpId?: string | undefined;
    name: string;
    isActive: boolean;
    expectedOrigin?: string | undefined;
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
        kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
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
    kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
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
        kind: "CustomerEmployee" | "DfnsStaff" | "EndUser";
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
        kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
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
    kind: "CustomerEmployee" | "DfnsStaff" | "EndUser";
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
        expectedRpId?: string | undefined;
        name: string;
        isActive: boolean;
        expectedOrigin?: string | undefined;
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
            kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
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
        kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
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
            kind: "CustomerEmployee" | "DfnsStaff" | "EndUser";
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
            kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
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
        kind: "CustomerEmployee" | "DfnsStaff" | "EndUser";
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

export type LogoutBody = {
    allSessions?: boolean | undefined;
} | undefined;

export type LogoutResponse = {
    message: string;
};

export type LogoutRequest = { body: LogoutBody }

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
            credentialName?: string | undefined;
        } | {
            credentialKind: "Key";
            credentialInfo: {
                credId: string;
                clientData: string;
                attestationData: string;
            };
            credentialName?: string | undefined;
        } | {
            credentialKind: "Password";
            credentialInfo: {
                password: string;
            };
            credentialName?: string | undefined;
        } | {
            credentialKind: "PasswordProtectedKey";
            credentialInfo: {
                credId: string;
                clientData: string;
                attestationData: string;
            };
            encryptedPrivateKey: string;
            credentialName?: string | undefined;
        };
        secondFactorCredential?: ({
            credentialKind: "Fido2";
            credentialInfo: {
                credId: string;
                clientData: string;
                attestationData: string;
            };
            credentialName?: string | undefined;
        } | {
            credentialKind: "Key";
            credentialInfo: {
                credId: string;
                clientData: string;
                attestationData: string;
            };
            credentialName?: string | undefined;
        } | {
            credentialKind: "Totp";
            credentialInfo: {
                otpCode: string;
            };
            credentialName?: string | undefined;
        } | {
            credentialKind: "PasswordProtectedKey";
            credentialInfo: {
                credId: string;
                clientData: string;
                attestationData: string;
            };
            encryptedPrivateKey: string;
            credentialName?: string | undefined;
        }) | undefined;
        recoveryCredential?: {
            credentialKind: "RecoveryKey";
            credentialInfo: {
                credId: string;
                clientData: string;
                attestationData: string;
            };
            encryptedPrivateKey?: string | undefined;
            credentialName?: string | undefined;
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

export type RegisterBody = {
    firstFactorCredential: {
        credentialKind: "Fido2";
        credentialInfo: {
            credId: string;
            clientData: string;
            attestationData: string;
        };
        credentialName?: string | undefined;
    } | {
        credentialKind: "Key";
        credentialInfo: {
            credId: string;
            clientData: string;
            attestationData: string;
        };
        credentialName?: string | undefined;
    } | {
        credentialKind: "Password";
        credentialInfo: {
            password: string;
        };
        credentialName?: string | undefined;
    } | {
        credentialKind: "PasswordProtectedKey";
        credentialInfo: {
            credId: string;
            clientData: string;
            attestationData: string;
        };
        encryptedPrivateKey: string;
        credentialName?: string | undefined;
    };
    secondFactorCredential?: ({
        credentialKind: "Fido2";
        credentialInfo: {
            credId: string;
            clientData: string;
            attestationData: string;
        };
        credentialName?: string | undefined;
    } | {
        credentialKind: "Key";
        credentialInfo: {
            credId: string;
            clientData: string;
            attestationData: string;
        };
        credentialName?: string | undefined;
    } | {
        credentialKind: "Totp";
        credentialInfo: {
            otpCode: string;
        };
        credentialName?: string | undefined;
    } | {
        credentialKind: "PasswordProtectedKey";
        credentialInfo: {
            credId: string;
            clientData: string;
            attestationData: string;
        };
        encryptedPrivateKey: string;
        credentialName?: string | undefined;
    }) | undefined;
    recoveryCredential?: {
        credentialKind: "RecoveryKey";
        credentialInfo: {
            credId: string;
            clientData: string;
            attestationData: string;
        };
        encryptedPrivateKey?: string | undefined;
        credentialName?: string | undefined;
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
        credentialName?: string | undefined;
    } | {
        credentialKind: "Key";
        credentialInfo: {
            credId: string;
            clientData: string;
            attestationData: string;
        };
        credentialName?: string | undefined;
    } | {
        credentialKind: "Password";
        credentialInfo: {
            password: string;
        };
        credentialName?: string | undefined;
    } | {
        credentialKind: "PasswordProtectedKey";
        credentialInfo: {
            credId: string;
            clientData: string;
            attestationData: string;
        };
        encryptedPrivateKey: string;
        credentialName?: string | undefined;
    };
    secondFactorCredential?: ({
        credentialKind: "Fido2";
        credentialInfo: {
            credId: string;
            clientData: string;
            attestationData: string;
        };
        credentialName?: string | undefined;
    } | {
        credentialKind: "Key";
        credentialInfo: {
            credId: string;
            clientData: string;
            attestationData: string;
        };
        credentialName?: string | undefined;
    } | {
        credentialKind: "Totp";
        credentialInfo: {
            otpCode: string;
        };
        credentialName?: string | undefined;
    } | {
        credentialKind: "PasswordProtectedKey";
        credentialInfo: {
            credId: string;
            clientData: string;
            attestationData: string;
        };
        encryptedPrivateKey: string;
        credentialName?: string | undefined;
    }) | undefined;
    recoveryCredential?: {
        credentialKind: "RecoveryKey";
        credentialInfo: {
            credId: string;
            clientData: string;
            attestationData: string;
        };
        encryptedPrivateKey?: string | undefined;
        credentialName?: string | undefined;
    } | undefined;
    wallets: {
        network: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | ("KeyECDSA" | "KeyEdDSA" | "KeyECDSAStark");
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
        network: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "Hedera" | "HederaTestnet" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plume" | "PlumeSepolia" | "Polkadot" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "XrpLedger" | "XrpLedgerTestnet") | ("KeyECDSA" | "KeyEdDSA" | "KeyECDSAStark");
        address?: string | undefined;
        signingKey: {
            id: string;
            scheme: "DH" | "ECDSA" | "EdDSA" | "Schnorr";
            curve: "ed25519" | "secp256k1" | "stark";
            publicKey: string;
            delegatedTo?: string | undefined;
        };
        status: "Active" | "Archived";
        dateCreated: string;
        name?: string | undefined;
        custodial: boolean;
        externalId?: string | undefined;
        tags: string[];
        /** Id of the validator on which the wallet is created for Canton networks */
        validatorId?: string | undefined;
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
    orgId?: string | undefined;
    socialLoginProviderKind: "Oidc";
    idToken: string;
};

export type SocialLoginResponse = {
    token: string;
};

export type SocialLoginRequest = { body: SocialLoginBody }

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
    kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
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
        kind: "CustomerEmployee" | "DfnsStaff" | "EndUser";
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
        kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
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

