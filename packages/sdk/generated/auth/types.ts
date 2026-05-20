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
    /** Access token kind. */
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
        /** User id. */
        userId: string;
        /** User kind. */
        kind: "DfnsStaff" | "AccountUser" | "CustomerEmployee" | "EndUser";
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
        /** Access token kind. */
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
    /** User id. */
    userId: string;
    /** User kind. */
    kind: "DfnsStaff" | "AccountUser" | "CustomerEmployee" | "EndUser";
    credentialUuid: string;
    orgId: string;
    permissions?: string[] | undefined;
    isActive: boolean;
    isServiceAccount: boolean;
    isRegistered: boolean;
    isSSORequired: boolean;
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
    /** Access token kind. */
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

export type ArchiveServiceAccountQuery = {
    /** If true, bypasses the policy approver check and deletes immediately. */
    force?: boolean;
};

export type ArchiveServiceAccountResponse = {
    userInfo: {
        username: string;
        name: string;
        /** User id. */
        userId: string;
        /** User kind. */
        kind: "DfnsStaff" | "AccountUser" | "CustomerEmployee" | "EndUser";
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
        /** Access token kind. */
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

export type ArchiveServiceAccountRequest = ArchiveServiceAccountParams & { query?: ArchiveServiceAccountQuery }

export type ArchiveUserParams = {
    userId: string;
};

export type ArchiveUserResponse = {
    username: string;
    name: string;
    /** User id. */
    userId: string;
    /** User kind. */
    kind: "DfnsStaff" | "AccountUser" | "CustomerEmployee" | "EndUser";
    credentialUuid: string;
    orgId: string;
    permissions?: string[] | undefined;
    isActive: boolean;
    isServiceAccount: boolean;
    isRegistered: boolean;
    isSSORequired: boolean;
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
    credentialKind: "RecoveryKey";
    credentialInfo: {
        credId: string;
        clientData: string;
        attestationData: string;
    };
    encryptedPrivateKey?: string | undefined;
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
        /** Value indicating if the user should be prompted for a second factor. Can be one of the following values:
        * required to indicate the user must be prompted for their pin, biometrics, or another second factor option
        * preferred to indicate the user should be prompted for a second factor if it is supported
        * discouraged to indicate the user should not be prompted for their second factor unless the device requires it
         */
        userVerification: "required" | "preferred" | "discouraged";
    };
    /** Identifies the information needed to verify the user's signing certificate; can be one of the following:
    * none: indicates no attestation data is required
    * indirect: indicates the attestation data should be given, but that it can be generated using an Anonymization CA
    * direct: indicates the attestation data must be given and should be generated by the authenticator
    * enterprise: indicates the attestation data should include information to uniquely identify the user's device
     */
    attestation: "none" | "indirect" | "direct" | "enterprise";
    pubKeyCredParams: {
        type: "public-key";
        alg: number;
    }[];
    excludeCredentials: {
        /** Is always `public-key`. */
        type: "public-key";
        /** ID that identifies the credential. */
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
    /** Identifies the information needed to verify the user's signing certificate; can be one of the following:
    * none: indicates no attestation data is required
    * indirect: indicates the attestation data should be given, but that it can be generated using an Anonymization CA
    * direct: indicates the attestation data must be given and should be generated by the authenticator
    * enterprise: indicates the attestation data should include information to uniquely identify the user's device
     */
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
    /** Identifies the information needed to verify the user's signing certificate; can be one of the following:
    * none: indicates no attestation data is required
    * indirect: indicates the attestation data should be given, but that it can be generated using an Anonymization CA
    * direct: indicates the attestation data must be given and should be generated by the authenticator
    * enterprise: indicates the attestation data should include information to uniquely identify the user's device
     */
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
    /** Identifies the information needed to verify the user's signing certificate; can be one of the following:
    * none: indicates no attestation data is required
    * indirect: indicates the attestation data should be given, but that it can be generated using an Anonymization CA
    * direct: indicates the attestation data must be given and should be generated by the authenticator
    * enterprise: indicates the attestation data should include information to uniquely identify the user's device
     */
    attestation: "none" | "indirect" | "direct" | "enterprise";
    pubKeyCredParams: {
        type: "public-key";
        alg: number;
    }[];
    /** @deprecated use challengeIdentifier instead */
    temporaryAuthenticationToken: string;
} | {
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
};

export type CreateCredentialChallengeRequest = { body: CreateCredentialChallengeBody }

export type CreateCredentialChallengeWithCodeBody = {
    credentialKind: "Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey";
    code: string;
};

export type CreateCredentialChallengeWithCodeResponse = {
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
        /** Value indicating if the user should be prompted for a second factor. Can be one of the following values:
        * required to indicate the user must be prompted for their pin, biometrics, or another second factor option
        * preferred to indicate the user should be prompted for a second factor if it is supported
        * discouraged to indicate the user should not be prompted for their second factor unless the device requires it
         */
        userVerification: "required" | "preferred" | "discouraged";
    };
    /** Identifies the information needed to verify the user's signing certificate; can be one of the following:
    * none: indicates no attestation data is required
    * indirect: indicates the attestation data should be given, but that it can be generated using an Anonymization CA
    * direct: indicates the attestation data must be given and should be generated by the authenticator
    * enterprise: indicates the attestation data should include information to uniquely identify the user's device
     */
    attestation: "none" | "indirect" | "direct" | "enterprise";
    pubKeyCredParams: {
        type: "public-key";
        alg: number;
    }[];
    excludeCredentials: {
        /** Is always `public-key`. */
        type: "public-key";
        /** ID that identifies the credential. */
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
    /** Identifies the information needed to verify the user's signing certificate; can be one of the following:
    * none: indicates no attestation data is required
    * indirect: indicates the attestation data should be given, but that it can be generated using an Anonymization CA
    * direct: indicates the attestation data must be given and should be generated by the authenticator
    * enterprise: indicates the attestation data should include information to uniquely identify the user's device
     */
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
    /** Identifies the information needed to verify the user's signing certificate; can be one of the following:
    * none: indicates no attestation data is required
    * indirect: indicates the attestation data should be given, but that it can be generated using an Anonymization CA
    * direct: indicates the attestation data must be given and should be generated by the authenticator
    * enterprise: indicates the attestation data should include information to uniquely identify the user's device
     */
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
    /** Identifies the information needed to verify the user's signing certificate; can be one of the following:
    * none: indicates no attestation data is required
    * indirect: indicates the attestation data should be given, but that it can be generated using an Anonymization CA
    * direct: indicates the attestation data must be given and should be generated by the authenticator
    * enterprise: indicates the attestation data should include information to uniquely identify the user's device
     */
    attestation: "none" | "indirect" | "direct" | "enterprise";
    pubKeyCredParams: {
        type: "public-key";
        alg: number;
    }[];
    /** @deprecated use challengeIdentifier instead */
    temporaryAuthenticationToken: string;
} | {
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
    credentialKind: "RecoveryKey";
    credentialInfo: {
        credId: string;
        clientData: string;
        attestationData: string;
    };
    encryptedPrivateKey?: string | undefined;
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
        /** Value indicating if the user should be prompted for a second factor. Can be one of the following values:
        * required to indicate the user must be prompted for their pin, biometrics, or another second factor option
        * preferred to indicate the user should be prompted for a second factor if it is supported
        * discouraged to indicate the user should not be prompted for their second factor unless the device requires it
         */
        userVerification: "required" | "preferred" | "discouraged";
    };
    /** Identifies the information needed to verify the user's signing certificate; can be one of the following:
    * none: indicates no attestation data is required
    * indirect: indicates the attestation data should be given, but that it can be generated using an Anonymization CA
    * direct: indicates the attestation data must be given and should be generated by the authenticator
    * enterprise: indicates the attestation data should include information to uniquely identify the user's device
     */
    attestation: "none" | "indirect" | "direct" | "enterprise";
    pubKeyCredParams: {
        type: "public-key";
        alg: number;
    }[];
    excludeCredentials: {
        /** Is always `public-key`. */
        type: "public-key";
        /** ID that identifies the credential. */
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
        /** Value indicating if the user should be prompted for a second factor. Can be one of the following values:
        * required to indicate the user must be prompted for their pin, biometrics, or another second factor option
        * preferred to indicate the user should be prompted for a second factor if it is supported
        * discouraged to indicate the user should not be prompted for their second factor unless the device requires it
         */
        userVerification: "required" | "preferred" | "discouraged";
    };
    /** Identifies the information needed to verify the user's signing certificate; can be one of the following:
    * none: indicates no attestation data is required
    * indirect: indicates the attestation data should be given, but that it can be generated using an Anonymization CA
    * direct: indicates the attestation data must be given and should be generated by the authenticator
    * enterprise: indicates the attestation data should include information to uniquely identify the user's device
     */
    attestation: "none" | "indirect" | "direct" | "enterprise";
    pubKeyCredParams: {
        type: "public-key";
        alg: number;
    }[];
    excludeCredentials: {
        /** Is always `public-key`. */
        type: "public-key";
        /** ID that identifies the credential. */
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
    /** Challenge (string) to be signed by the requester with his private key. */
    challenge: string;
    /** A JWT that identifies the signing session. */
    challengeIdentifier: string;
    /** Deprecated. Should not be used. */
    rp?: {
        id: string;
        name: string;
    } | undefined;
    /** Identifies the kind of credentials that can be used to sign the user action. */
    supportedCredentialKinds: {
        /** The kind of credential. */
        kind: "Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey";
        /** Indicates if the credential can be used as a first factor, second factor, or either; can be `first`, `second`, or `either`. */
        factor: "first" | "second" | "either";
        /** When true indicates a second factor credential is required if the credential is used as a first factor. */
        requiresSecondFactor: boolean;
    }[];
    /** Value indicating if the user should be prompted for a second factor. Can be one of the following values:
    * required to indicate the user must be prompted for their pin, biometrics, or another second factor option
    * preferred to indicate the user should be prompted for a second factor if it is supported
    * discouraged to indicate the user should not be prompted for their second factor unless the device requires it
     */
    userVerification: "required" | "preferred" | "discouraged";
    /** Identifies the information needed to verify the user's signing certificate; can be one of the following:
    * none: indicates no attestation data is required
    * indirect: indicates the attestation data should be given, but that it can be generated using an Anonymization CA
    * direct: indicates the attestation data must be given and should be generated by the authenticator
    * enterprise: indicates the attestation data should include information to uniquely identify the user's device
     */
    attestation: "none" | "indirect" | "direct" | "enterprise";
    /** List of credentials that the user can use to sign the user action. */
    allowCredentials: {
        /** List of keys that the user can use to sign the user action. */
        key: {
            /** Is always `public-key`. */
            type: "public-key";
            /** ID that identifies the credential. */
            id: string;
        }[];
        /** List of password protected keys that the user can use to sign the login challenge. */
        passwordProtectedKey?: {
            /** Is always `public-key`. */
            type: "public-key";
            /** ID that identifies the credential. */
            id: string;
            /** Encrypted Private Key. Only the user knows the password to decrypt it and have access to the private key. */
            encryptedPrivateKey: string;
        }[] | undefined;
        /** List of WebAuthn credentials that the user can use to sign the user action. */
        webauthn: {
            /** Is always `public-key`. */
            type: "public-key";
            /** ID that identifies the credential. */
            id: string;
        }[];
    };
    /** Optional url containing a secret value that can be used to enable cross device/origin signing. */
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
        /** Value indicating if the user should be prompted for a second factor. Can be one of the following values:
        * required to indicate the user must be prompted for their pin, biometrics, or another second factor option
        * preferred to indicate the user should be prompted for a second factor if it is supported
        * discouraged to indicate the user should not be prompted for their second factor unless the device requires it
         */
        userVerification: "required" | "preferred" | "discouraged";
    };
    /** Identifies the information needed to verify the user's signing certificate; can be one of the following:
    * none: indicates no attestation data is required
    * indirect: indicates the attestation data should be given, but that it can be generated using an Anonymization CA
    * direct: indicates the attestation data must be given and should be generated by the authenticator
    * enterprise: indicates the attestation data should include information to uniquely identify the user's device
     */
    attestation: "none" | "indirect" | "direct" | "enterprise";
    pubKeyCredParams: {
        type: "public-key";
        alg: number;
    }[];
    excludeCredentials: {
        /** Is always `public-key`. */
        type: "public-key";
        /** ID that identifies the credential. */
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
        /** Value indicating if the user should be prompted for a second factor. Can be one of the following values:
        * required to indicate the user must be prompted for their pin, biometrics, or another second factor option
        * preferred to indicate the user should be prompted for a second factor if it is supported
        * discouraged to indicate the user should not be prompted for their second factor unless the device requires it
         */
        userVerification: "required" | "preferred" | "discouraged";
    };
    /** Identifies the information needed to verify the user's signing certificate; can be one of the following:
    * none: indicates no attestation data is required
    * indirect: indicates the attestation data should be given, but that it can be generated using an Anonymization CA
    * direct: indicates the attestation data must be given and should be generated by the authenticator
    * enterprise: indicates the attestation data should include information to uniquely identify the user's device
     */
    attestation: "none" | "indirect" | "direct" | "enterprise";
    pubKeyCredParams: {
        type: "public-key";
        alg: number;
    }[];
    excludeCredentials: {
        /** Is always `public-key`. */
        type: "public-key";
        /** ID that identifies the credential. */
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
        /** User id. */
        userId: string;
        /** User kind. */
        kind: "DfnsStaff" | "AccountUser" | "CustomerEmployee" | "EndUser";
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
        /** Access token kind. */
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
        /** Value indicating if the user should be prompted for a second factor. Can be one of the following values:
        * required to indicate the user must be prompted for their pin, biometrics, or another second factor option
        * preferred to indicate the user should be prompted for a second factor if it is supported
        * discouraged to indicate the user should not be prompted for their second factor unless the device requires it
         */
        userVerification: "required" | "preferred" | "discouraged";
    };
    /** Identifies the information needed to verify the user's signing certificate; can be one of the following:
    * none: indicates no attestation data is required
    * indirect: indicates the attestation data should be given, but that it can be generated using an Anonymization CA
    * direct: indicates the attestation data must be given and should be generated by the authenticator
    * enterprise: indicates the attestation data should include information to uniquely identify the user's device
     */
    attestation: "none" | "indirect" | "direct" | "enterprise";
    pubKeyCredParams: {
        type: "public-key";
        alg: number;
    }[];
    excludeCredentials: {
        /** Is always `public-key`. */
        type: "public-key";
        /** ID that identifies the credential. */
        id: string;
    }[];
    otpUrl: string;
};

export type CreateSocialRegistrationChallengeRequest = { body: CreateSocialRegistrationChallengeBody }

export type CreateUserBody = {
    /** The email address of the new user. */
    email: string;
    /** The kind of user being created.
          In this endpoint it can only be "`CustomerEmployee`" (creating an "`EndUser`" is done through the [Delegated Registration](https://docs.dfns.co/api-reference/auth/registration-flows#delegated-users-registration-flow) endpoint) */
    kind: "CustomerEmployee" | "DfnsStaff";
    publicKey?: string | undefined;
    /** Value that can be used to correlate the entity with an external system. */
    externalId?: string | undefined;
    /** If set to true, the user will have to authenticate via SSO */
    isSSORequired?: boolean | undefined;
};

export type CreateUserResponse = {
    username: string;
    name: string;
    /** User id. */
    userId: string;
    /** User kind. */
    kind: "DfnsStaff" | "AccountUser" | "CustomerEmployee" | "EndUser";
    credentialUuid: string;
    orgId: string;
    permissions?: string[] | undefined;
    isActive: boolean;
    isServiceAccount: boolean;
    isRegistered: boolean;
    isSSORequired: boolean;
    permissionAssignments: {
        permissionName: string;
        permissionId: string;
        assignmentId: string;
        operations?: string[] | undefined;
    }[];
};

export type CreateUserRequest = { body: CreateUserBody }

export type CreateUserActionChallengeBody = {
    /** Optional indicator of which Dfns service being called. */
    userActionServerKind?: ("Api" | "Staff") | undefined;
    /** The HTTP method that will be used to make the request that is being signed. */
    userActionHttpMethod: "POST" | "PUT" | "DELETE" | "GET";
    /** The path of the request that is being signed. */
    userActionHttpPath: string;
    /** The JSON-encoded body of the request that is being signed. */
    userActionPayload: string;
};

export type CreateUserActionChallengeResponse = {
    /** Challenge (string) to be signed by the requester with his private key. */
    challenge: string;
    /** A JWT that identifies the signing session. */
    challengeIdentifier: string;
    /** Deprecated. Should not be used. */
    rp?: {
        id: string;
        name: string;
    } | undefined;
    /** Identifies the kind of credentials that can be used to sign the user action. */
    supportedCredentialKinds: {
        /** The kind of credential. */
        kind: "Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey";
        /** Indicates if the credential can be used as a first factor, second factor, or either; can be `first`, `second`, or `either`. */
        factor: "first" | "second" | "either";
        /** When true indicates a second factor credential is required if the credential is used as a first factor. */
        requiresSecondFactor: boolean;
    }[];
    /** Value indicating if the user should be prompted for a second factor. Can be one of the following values:
    * required to indicate the user must be prompted for their pin, biometrics, or another second factor option
    * preferred to indicate the user should be prompted for a second factor if it is supported
    * discouraged to indicate the user should not be prompted for their second factor unless the device requires it
     */
    userVerification: "required" | "preferred" | "discouraged";
    /** Identifies the information needed to verify the user's signing certificate; can be one of the following:
    * none: indicates no attestation data is required
    * indirect: indicates the attestation data should be given, but that it can be generated using an Anonymization CA
    * direct: indicates the attestation data must be given and should be generated by the authenticator
    * enterprise: indicates the attestation data should include information to uniquely identify the user's device
     */
    attestation: "none" | "indirect" | "direct" | "enterprise";
    /** List of credentials that the user can use to sign the user action. */
    allowCredentials: {
        /** List of keys that the user can use to sign the user action. */
        key: {
            /** Is always `public-key`. */
            type: "public-key";
            /** ID that identifies the credential. */
            id: string;
        }[];
        /** List of password protected keys that the user can use to sign the login challenge. */
        passwordProtectedKey?: {
            /** Is always `public-key`. */
            type: "public-key";
            /** ID that identifies the credential. */
            id: string;
            /** Encrypted Private Key. Only the user knows the password to decrypt it and have access to the private key. */
            encryptedPrivateKey: string;
        }[] | undefined;
        /** List of WebAuthn credentials that the user can use to sign the user action. */
        webauthn: {
            /** Is always `public-key`. */
            type: "public-key";
            /** ID that identifies the credential. */
            id: string;
        }[];
    };
    /** Optional url containing a secret value that can be used to enable cross device/origin signing. */
    externalAuthenticationUrl: string;
};

export type CreateUserActionChallengeRequest = { body: CreateUserActionChallengeBody }

export type CreateUserActionSignatureBody = {
    /** Temporary authentication token returned by the Create Challenge endpoint. */
    challengeIdentifier: string;
    /** First factor credential used to sign the challenge. */
    firstFactor: {
        kind: "Fido2";
        credentialAssertion: {
            /** Base64url-encoded id of the credential returned by the user's WebAuthn client. */
            credId: string;
            /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object returned by the user's WebAuthn client. */
            clientData: string;
            /** Base64url-encoded signature returned by the user's WebAuthn client. */
            signature: string;
            /** The algorithm/digest that the credential will use to sign data. If the algoritm is not specified then the algorithm will be determined by the key. */
            algorithm?: string | undefined;
            /** Base64url encoded authenticator data object returned by the user's WebAuthn client. */
            authenticatorData: string;
            /** Base64url encoded userHandle returned by the user's WebAuthn client. */
            userHandle?: string | undefined;
        };
    } | {
        kind: "Key";
        credentialAssertion: {
            /** Base64url-encoded id of the credential returned by the user's WebAuthn client. */
            credId: string;
            /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object returned by the user's WebAuthn client. */
            clientData: string;
            /** Base64url-encoded signature returned by the user's WebAuthn client. */
            signature: string;
            /** The algorithm/digest that the credential will use to sign data. If the algoritm is not specified then the algorithm will be determined by the key. */
            algorithm?: string | undefined;
        };
    } | {
        kind: "PasswordProtectedKey";
        credentialAssertion: {
            /** Base64url-encoded id of the credential returned by the user's WebAuthn client. */
            credId: string;
            /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object returned by the user's WebAuthn client. */
            clientData: string;
            /** Base64url-encoded signature returned by the user's WebAuthn client. */
            signature: string;
            /** The algorithm/digest that the credential will use to sign data. If the algoritm is not specified then the algorithm will be determined by the key. */
            algorithm?: string | undefined;
        };
    } | {
        kind: "Password";
        password: string;
    };
    /** Second factor credential used to authenticate a user. */
    secondFactor?: ({
        kind: "Fido2";
        credentialAssertion: {
            /** Base64url-encoded id of the credential returned by the user's WebAuthn client. */
            credId: string;
            /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object returned by the user's WebAuthn client. */
            clientData: string;
            /** Base64url-encoded signature returned by the user's WebAuthn client. */
            signature: string;
            /** The algorithm/digest that the credential will use to sign data. If the algoritm is not specified then the algorithm will be determined by the key. */
            algorithm?: string | undefined;
            /** Base64url encoded authenticator data object returned by the user's WebAuthn client. */
            authenticatorData: string;
            /** Base64url encoded userHandle returned by the user's WebAuthn client. */
            userHandle?: string | undefined;
        };
    } | {
        kind: "Key";
        credentialAssertion: {
            /** Base64url-encoded id of the credential returned by the user's WebAuthn client. */
            credId: string;
            /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object returned by the user's WebAuthn client. */
            clientData: string;
            /** Base64url-encoded signature returned by the user's WebAuthn client. */
            signature: string;
            /** The algorithm/digest that the credential will use to sign data. If the algoritm is not specified then the algorithm will be determined by the key. */
            algorithm?: string | undefined;
        };
    } | {
        kind: "PasswordProtectedKey";
        credentialAssertion: {
            /** Base64url-encoded id of the credential returned by the user's WebAuthn client. */
            credId: string;
            /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object returned by the user's WebAuthn client. */
            clientData: string;
            /** Base64url-encoded signature returned by the user's WebAuthn client. */
            signature: string;
            /** The algorithm/digest that the credential will use to sign data. If the algoritm is not specified then the algorithm will be determined by the key. */
            algorithm?: string | undefined;
        };
    } | {
        kind: "Totp";
        otpCode: string;
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
    /** Access token kind. */
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

export type DeactivateServiceAccountBody = {
    /** If true, bypasses the policy approver check and deactivates immediately. */
    force?: boolean;
};

export type DeactivateServiceAccountParams = {
    serviceAccountId: string;
};

export type DeactivateServiceAccountResponse = {
    userInfo: {
        username: string;
        name: string;
        /** User id. */
        userId: string;
        /** User kind. */
        kind: "DfnsStaff" | "AccountUser" | "CustomerEmployee" | "EndUser";
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
        /** Access token kind. */
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

export type DeactivateServiceAccountRequest = DeactivateServiceAccountParams & { body: DeactivateServiceAccountBody }

export type DeactivateUserParams = {
    userId: string;
};

export type DeactivateUserResponse = {
    username: string;
    name: string;
    /** User id. */
    userId: string;
    /** User kind. */
    kind: "DfnsStaff" | "AccountUser" | "CustomerEmployee" | "EndUser";
    credentialUuid: string;
    orgId: string;
    permissions?: string[] | undefined;
    isActive: boolean;
    isServiceAccount: boolean;
    isRegistered: boolean;
    isSSORequired: boolean;
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
        /** Access token kind. */
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

export type GetAuditLogParams = {
    /** Log id you need information about. */
    id: string | string;
};

export type GetAuditLogResponse = {
    /** Log id. */
    id: string | string;
    /** Action performed. */
    action: string;
    /** User Action Signature used as token for permorming this action. */
    actionToken: string;
    /** User who performed the action. */
    userId: string | null;
    /** Username who performed the action. */
    username: string | null;
    datePerformed: string | null;
    /** Cryptographic Signature details. Use these parameters if you want to validate the signature. */
    firstFactorCredential: {
        /** Id of the credential used to sign this action. */
        id: string;
        /** Kind of credential used to sign this action. */
        kind: ("Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey") | null;
        /** Public Key which can be used to verify signature. */
        publicKey: string;
        /** Cryptographic signature evidence. Null when the action was recorded without a WebAuthn assertion (e.g. system-initiated actions or staff-flow org-owner creations). */
        assertion: {
            /** Used to verify the signature for Fido2 credentials. Null for Key credentials, which sign clientData directly. */
            authenticatorData: string | null;
            /** Information, including challenge, which you can use to verify the signature. */
            clientData: string;
            /** Signature of the clientData (and authenticatorData for Fido2). */
            signature: string;
        } | null;
    };
};

export type GetAuditLogRequest = GetAuditLogParams

export type GetPersonalAccessTokenParams = {
    tokenId: string;
};

export type GetPersonalAccessTokenResponse = {
    accessToken?: string | undefined;
    dateCreated: string;
    credId: string;
    isActive: boolean;
    /** Access token kind. */
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
        /** User id. */
        userId: string;
        /** User kind. */
        kind: "DfnsStaff" | "AccountUser" | "CustomerEmployee" | "EndUser";
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
        /** Access token kind. */
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
    /** User id. */
    userId: string;
    /** User kind. */
    kind: "DfnsStaff" | "AccountUser" | "CustomerEmployee" | "EndUser";
    credentialUuid: string;
    orgId: string;
    permissions?: string[] | undefined;
    isActive: boolean;
    isServiceAccount: boolean;
    isRegistered: boolean;
    isSSORequired: boolean;
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
            /** Access token kind. */
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

export type ListAuditLogsQuery = {
    startTime: string;
    endTime: string;
    /** Provide a user id to list events from that particular user only. */
    userId?: string | undefined;
};

export type ListAuditLogsResponse = string;

export type ListAuditLogsRequest = { query?: ListAuditLogsQuery }

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
        /** Access token kind. */
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
            /** User id. */
            userId: string;
            /** User kind. */
            kind: "DfnsStaff" | "AccountUser" | "CustomerEmployee" | "EndUser";
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
            /** Access token kind. */
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
        /** User id. */
        userId: string;
        /** User kind. */
        kind: "DfnsStaff" | "AccountUser" | "CustomerEmployee" | "EndUser";
        credentialUuid: string;
        orgId: string;
        permissions?: string[] | undefined;
        isActive: boolean;
        isServiceAccount: boolean;
        isRegistered: boolean;
        isSSORequired: boolean;
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
    /** Temporary authentication token returned by the Create Challenge endpoint. */
    challengeIdentifier: string;
    /** First factor credential used to sign the challenge. */
    firstFactor: {
        kind: "Fido2";
        credentialAssertion: {
            /** Base64url-encoded id of the credential returned by the user's WebAuthn client. */
            credId: string;
            /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object returned by the user's WebAuthn client. */
            clientData: string;
            /** Base64url-encoded signature returned by the user's WebAuthn client. */
            signature: string;
            /** The algorithm/digest that the credential will use to sign data. If the algoritm is not specified then the algorithm will be determined by the key. */
            algorithm?: string | undefined;
            /** Base64url encoded authenticator data object returned by the user's WebAuthn client. */
            authenticatorData: string;
            /** Base64url encoded userHandle returned by the user's WebAuthn client. */
            userHandle?: string | undefined;
        };
    } | {
        kind: "Key";
        credentialAssertion: {
            /** Base64url-encoded id of the credential returned by the user's WebAuthn client. */
            credId: string;
            /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object returned by the user's WebAuthn client. */
            clientData: string;
            /** Base64url-encoded signature returned by the user's WebAuthn client. */
            signature: string;
            /** The algorithm/digest that the credential will use to sign data. If the algoritm is not specified then the algorithm will be determined by the key. */
            algorithm?: string | undefined;
        };
    } | {
        kind: "PasswordProtectedKey";
        credentialAssertion: {
            /** Base64url-encoded id of the credential returned by the user's WebAuthn client. */
            credId: string;
            /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object returned by the user's WebAuthn client. */
            clientData: string;
            /** Base64url-encoded signature returned by the user's WebAuthn client. */
            signature: string;
            /** The algorithm/digest that the credential will use to sign data. If the algoritm is not specified then the algorithm will be determined by the key. */
            algorithm?: string | undefined;
        };
    } | {
        kind: "Password";
        password: string;
    };
    /** Second factor credential used to authenticate a user. */
    secondFactor?: ({
        kind: "Fido2";
        credentialAssertion: {
            /** Base64url-encoded id of the credential returned by the user's WebAuthn client. */
            credId: string;
            /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object returned by the user's WebAuthn client. */
            clientData: string;
            /** Base64url-encoded signature returned by the user's WebAuthn client. */
            signature: string;
            /** The algorithm/digest that the credential will use to sign data. If the algoritm is not specified then the algorithm will be determined by the key. */
            algorithm?: string | undefined;
            /** Base64url encoded authenticator data object returned by the user's WebAuthn client. */
            authenticatorData: string;
            /** Base64url encoded userHandle returned by the user's WebAuthn client. */
            userHandle?: string | undefined;
        };
    } | {
        kind: "Key";
        credentialAssertion: {
            /** Base64url-encoded id of the credential returned by the user's WebAuthn client. */
            credId: string;
            /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object returned by the user's WebAuthn client. */
            clientData: string;
            /** Base64url-encoded signature returned by the user's WebAuthn client. */
            signature: string;
            /** The algorithm/digest that the credential will use to sign data. If the algoritm is not specified then the algorithm will be determined by the key. */
            algorithm?: string | undefined;
        };
    } | {
        kind: "PasswordProtectedKey";
        credentialAssertion: {
            /** Base64url-encoded id of the credential returned by the user's WebAuthn client. */
            credId: string;
            /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object returned by the user's WebAuthn client. */
            clientData: string;
            /** Base64url-encoded signature returned by the user's WebAuthn client. */
            signature: string;
            /** The algorithm/digest that the credential will use to sign data. If the algoritm is not specified then the algorithm will be determined by the key. */
            algorithm?: string | undefined;
        };
    } | {
        kind: "Totp";
        otpCode: string;
    }) | undefined;
};

export type LoginResponse = {
    token: string;
} | {
    ssoClientId: string;
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
            /** Base64url-encoded id of the credential returned by the user's WebAuthn client. */
            credId: string;
            /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object returned by the user's WebAuthn client. */
            clientData: string;
            /** Base64url-encoded signature returned by the user's WebAuthn client. */
            signature: string;
            /** The algorithm/digest that the credential will use to sign data. If the algoritm is not specified then the algorithm will be determined by the key. */
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
        /** Register a recovery key. See [Account Recovery](https://docs.dfns.co/api-reference/auth/account-recovery) for more details. */
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
    /** Register a recovery key. See [Account Recovery](https://docs.dfns.co/api-reference/auth/account-recovery) for more details. */
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
    /** Register a recovery key. See [Account Recovery](https://docs.dfns.co/api-reference/auth/account-recovery) for more details. */
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
        network: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "BesuTestnet" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | ("KeyECDSA" | "KeyEdDSA" | "KeyECDSAStark");
        /** Wallet nickname. */
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
        /** ID of the wallet. */
        id: string;
        /** Network this wallet is bound to. */
        network: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "BesuTestnet" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | ("KeyECDSA" | "KeyEdDSA" | "KeyECDSAStark");
        /** Wallet address on its corresponding network. */
        address?: string | undefined;
        /** Details about the key underlying the wallet. */
        signingKey: {
            /** Key id. */
            id: string;
            /** The cryptographic scheme for the key. */
            scheme: "DH" | "ECDSA" | "EdDSA" | "Schnorr";
            /** The elliptic curve for the key. */
            curve: "ed25519" | "secp256k1" | "stark";
            /** Hex-encoded value of the public key. */
            publicKey: string;
            /** The end user ID the key (and wallet) is delegated to. */
            delegatedTo?: string | undefined;
        };
        /** Wallet status. */
        status: "Active" | "Inactive" | "Archived";
        /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date string when wallet was created. */
        dateCreated: string;
        /** [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date string when wallet was deleted. */
        dateDeleted?: string | undefined;
        /** Wallet nickname. */
        name?: string | undefined;
        /** Whether the wallet is owned by an end user (non-custodial), or by your organization (custodial). */
        custodial: boolean;
        /** User-defined value that can be used to correlate the entity with an external system. */
        externalId?: string | undefined;
        /** List of tags. */
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

export type SsoLoginBody = {
    /** Authorization code obtained from the IdP */
    code: string;
    /** State forwarded by the IdP */
    state: string;
};

export type SsoLoginResponse = {
    token: string;
};

export type SsoLoginRequest = { body: SsoLoginBody }

export type SsoLoginInitBody = {
    /** Organization id. */
    orgId: string;
    /** Client Id obtained from the IdP */
    clientId: string;
    /** Redirect URI used for the authentication flow */
    redirectUri: string;
};

export type SsoLoginInitResponse = {
    /** The URL to redirect the user to authenticate with the IdP */
    ssoRedirectUrl: string;
};

export type SsoLoginInitRequest = { body: SsoLoginInitBody }

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
    /** Access token kind. */
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
        /** User id. */
        userId: string;
        /** User kind. */
        kind: "DfnsStaff" | "AccountUser" | "CustomerEmployee" | "EndUser";
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
        /** Access token kind. */
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

export type UpdateUserBody = {
    isSSORequired: boolean;
};

export type UpdateUserParams = {
    userId: string;
};

export type UpdateUserResponse = {
    username: string;
    name: string;
    /** User id. */
    userId: string;
    /** User kind. */
    kind: "DfnsStaff" | "AccountUser" | "CustomerEmployee" | "EndUser";
    credentialUuid: string;
    orgId: string;
    permissions?: string[] | undefined;
    isActive: boolean;
    isServiceAccount: boolean;
    isRegistered: boolean;
    isSSORequired: boolean;
    permissionAssignments: {
        permissionName: string;
        permissionId: string;
        assignmentId: string;
        operations?: string[] | undefined;
    }[];
};

export type UpdateUserRequest = UpdateUserParams & { body: UpdateUserBody }

