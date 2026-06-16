export type ActivateCredentialBody = {
    /** UUID of the credential to activate. */
    credentialUuid: string;
};

export type ActivateCredentialResponse = {
    /** Human-readable success message. */
    message: string;
};

export type ActivateCredentialRequest = { body: ActivateCredentialBody }

export type ActivatePersonalAccessTokenParams = {
    /** Token id. */
    tokenId: string;
};

export type ActivatePersonalAccessTokenResponse = {
    /** The access token. Only returned at creation time. */
    accessToken?: string | undefined;
    dateCreated: string;
    /** ID of the credential associated with the access token. */
    credId: string;
    /** Whether the access token is active. */
    isActive: boolean;
    /** Access token kind. */
    kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
    /** User id. */
    linkedUserId: string;
    /** ID of the application the access token is linked to. */
    linkedAppId: string;
    /** Human-readable name of the access token. */
    name: string;
    /** Organization id. */
    orgId: string;
    /** Permissions (roles) assigned to the access token. */
    permissionAssignments: {
        /** Human-readable name of the permission (role). */
        permissionName: string;
        /** ID of the permission (also referred to as "role" in the dashboard). */
        permissionId: string;
        /** ID of the permission assignment. */
        assignmentId: string;
        /** List of API operations granted by this permission. */
        operations?: string[] | undefined;
    }[];
    /** Public key associated with the access token. */
    publicKey: string;
    /** Token id. */
    tokenId: string;
};

export type ActivatePersonalAccessTokenRequest = ActivatePersonalAccessTokenParams

export type ActivateServiceAccountParams = {
    /** ID of the service account. */
    serviceAccountId: string;
};

export type ActivateServiceAccountResponse = {
    userInfo: {
        /** Username/identifier of the user (any unique string accepted, e.g. your internal user ID or email). */
        username: string;
        /** Display name of the user. */
        name: string;
        /** User id. */
        userId: string;
        /** User kind. */
        kind: "DfnsStaff" | "AccountUser" | "CustomerEmployee" | "EndUser";
        /** UUID of the user's primary credential. */
        credentialUuid: string;
        /** Organization id. */
        orgId?: string | undefined;
        /** Account id. */
        accountId?: string | undefined;
        /** @deprecated - Flat list of API operations the user has access to. */
        permissions?: string[] | undefined;
        /** Whether the user is active. */
        isActive: boolean;
        /** Whether the user is a service account. */
        isServiceAccount: boolean;
        /** Whether the user has completed registration. */
        isRegistered: boolean;
        /** Permissions (roles) assigned to the user. */
        permissionAssignments: {
            /** Human-readable name of the permission (role). */
            permissionName: string;
            /** ID of the permission (also referred to as "role" in the dashboard). */
            permissionId: string;
            /** ID of the permission assignment. */
            assignmentId: string;
            /** List of API operations granted by this permission. */
            operations?: string[] | undefined;
        }[];
    };
    accessTokens: {
        /** The access token. Only returned at creation time. */
        accessToken?: string | undefined;
        dateCreated: string;
        /** ID of the credential associated with the access token. */
        credId: string;
        /** Whether the access token is active. */
        isActive: boolean;
        /** Access token kind. */
        kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
        /** User id. */
        linkedUserId: string;
        /** ID of the application the access token is linked to. */
        linkedAppId: string;
        /** Human-readable name of the access token. */
        name: string;
        /** Organization id. */
        orgId: string;
        /** Permissions (roles) assigned to the access token. */
        permissionAssignments: {
            /** Human-readable name of the permission (role). */
            permissionName: string;
            /** ID of the permission (also referred to as "role" in the dashboard). */
            permissionId: string;
            /** ID of the permission assignment. */
            assignmentId: string;
            /** List of API operations granted by this permission. */
            operations?: string[] | undefined;
        }[];
        /** Public key associated with the access token. */
        publicKey: string;
        /** Token id. */
        tokenId: string;
    }[];
};

export type ActivateServiceAccountRequest = ActivateServiceAccountParams

export type ActivateUserParams = {
    /** User id. */
    userId: string;
};

export type ActivateUserResponse = {
    /** Username/identifier of the user (any unique string accepted, e.g. your internal user ID or email). */
    username: string;
    /** Display name of the user. */
    name: string;
    /** User id. */
    userId: string;
    /** User kind. */
    kind: "DfnsStaff" | "AccountUser" | "CustomerEmployee" | "EndUser";
    /** UUID of the user's primary credential. */
    credentialUuid: string;
    /** Organization id. */
    orgId?: string | undefined;
    /** Account id. */
    accountId?: string | undefined;
    /** @deprecated - Flat list of API operations the user has access to. */
    permissions?: string[] | undefined;
    /** Whether the user is active. */
    isActive: boolean;
    /** Whether the user is a service account. */
    isServiceAccount: boolean;
    /** Whether the user has completed registration. */
    isRegistered: boolean;
    /** Whether the user must authenticate via SSO. */
    isSSORequired: boolean;
    /** Permissions (roles) assigned to the user. */
    permissionAssignments: {
        /** Human-readable name of the permission (role). */
        permissionName: string;
        /** ID of the permission (also referred to as "role" in the dashboard). */
        permissionId: string;
        /** ID of the permission assignment. */
        assignmentId: string;
        /** List of API operations granted by this permission. */
        operations?: string[] | undefined;
    }[];
};

export type ActivateUserRequest = ActivateUserParams

export type ArchiveCredentialParams = {
    credentialUuid: string;
};

export type ArchiveCredentialResponse = {};

export type ArchiveCredentialRequest = ArchiveCredentialParams

export type ArchivePersonalAccessTokenParams = {
    /** Token id. */
    tokenId: string;
};

export type ArchivePersonalAccessTokenResponse = {
    /** The access token. Only returned at creation time. */
    accessToken?: string | undefined;
    dateCreated: string;
    /** ID of the credential associated with the access token. */
    credId: string;
    /** Whether the access token is active. */
    isActive: boolean;
    /** Access token kind. */
    kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
    /** User id. */
    linkedUserId: string;
    /** ID of the application the access token is linked to. */
    linkedAppId: string;
    /** Human-readable name of the access token. */
    name: string;
    /** Organization id. */
    orgId: string;
    /** Permissions (roles) assigned to the access token. */
    permissionAssignments: {
        /** Human-readable name of the permission (role). */
        permissionName: string;
        /** ID of the permission (also referred to as "role" in the dashboard). */
        permissionId: string;
        /** ID of the permission assignment. */
        assignmentId: string;
        /** List of API operations granted by this permission. */
        operations?: string[] | undefined;
    }[];
    /** Public key associated with the access token. */
    publicKey: string;
    /** Token id. */
    tokenId: string;
};

export type ArchivePersonalAccessTokenRequest = ArchivePersonalAccessTokenParams

export type ArchiveServiceAccountParams = {
    /** ID of the service account. */
    serviceAccountId: string;
};

export type ArchiveServiceAccountQuery = {
    /** If true, bypasses the policy approver check and deletes immediately. */
    force?: boolean;
};

export type ArchiveServiceAccountResponse = {
    userInfo: {
        /** Username/identifier of the user (any unique string accepted, e.g. your internal user ID or email). */
        username: string;
        /** Display name of the user. */
        name: string;
        /** User id. */
        userId: string;
        /** User kind. */
        kind: "DfnsStaff" | "AccountUser" | "CustomerEmployee" | "EndUser";
        /** UUID of the user's primary credential. */
        credentialUuid: string;
        /** Organization id. */
        orgId?: string | undefined;
        /** Account id. */
        accountId?: string | undefined;
        /** @deprecated - Flat list of API operations the user has access to. */
        permissions?: string[] | undefined;
        /** Whether the user is active. */
        isActive: boolean;
        /** Whether the user is a service account. */
        isServiceAccount: boolean;
        /** Whether the user has completed registration. */
        isRegistered: boolean;
        /** Permissions (roles) assigned to the user. */
        permissionAssignments: {
            /** Human-readable name of the permission (role). */
            permissionName: string;
            /** ID of the permission (also referred to as "role" in the dashboard). */
            permissionId: string;
            /** ID of the permission assignment. */
            assignmentId: string;
            /** List of API operations granted by this permission. */
            operations?: string[] | undefined;
        }[];
    };
    accessTokens: {
        /** The access token. Only returned at creation time. */
        accessToken?: string | undefined;
        dateCreated: string;
        /** ID of the credential associated with the access token. */
        credId: string;
        /** Whether the access token is active. */
        isActive: boolean;
        /** Access token kind. */
        kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
        /** User id. */
        linkedUserId: string;
        /** ID of the application the access token is linked to. */
        linkedAppId: string;
        /** Human-readable name of the access token. */
        name: string;
        /** Organization id. */
        orgId: string;
        /** Permissions (roles) assigned to the access token. */
        permissionAssignments: {
            /** Human-readable name of the permission (role). */
            permissionName: string;
            /** ID of the permission (also referred to as "role" in the dashboard). */
            permissionId: string;
            /** ID of the permission assignment. */
            assignmentId: string;
            /** List of API operations granted by this permission. */
            operations?: string[] | undefined;
        }[];
        /** Public key associated with the access token. */
        publicKey: string;
        /** Token id. */
        tokenId: string;
    }[];
};

export type ArchiveServiceAccountRequest = ArchiveServiceAccountParams & { query?: ArchiveServiceAccountQuery }

export type ArchiveUserParams = {
    /** User id. */
    userId: string;
};

export type ArchiveUserResponse = {
    /** Username/identifier of the user (any unique string accepted, e.g. your internal user ID or email). */
    username: string;
    /** Display name of the user. */
    name: string;
    /** User id. */
    userId: string;
    /** User kind. */
    kind: "DfnsStaff" | "AccountUser" | "CustomerEmployee" | "EndUser";
    /** UUID of the user's primary credential. */
    credentialUuid: string;
    /** Organization id. */
    orgId?: string | undefined;
    /** Account id. */
    accountId?: string | undefined;
    /** @deprecated - Flat list of API operations the user has access to. */
    permissions?: string[] | undefined;
    /** Whether the user is active. */
    isActive: boolean;
    /** Whether the user is a service account. */
    isServiceAccount: boolean;
    /** Whether the user has completed registration. */
    isRegistered: boolean;
    /** Whether the user must authenticate via SSO. */
    isSSORequired: boolean;
    /** Permissions (roles) assigned to the user. */
    permissionAssignments: {
        /** Human-readable name of the permission (role). */
        permissionName: string;
        /** ID of the permission (also referred to as "role" in the dashboard). */
        permissionId: string;
        /** ID of the permission assignment. */
        assignmentId: string;
        /** List of API operations granted by this permission. */
        operations?: string[] | undefined;
    }[];
};

export type ArchiveUserRequest = ArchiveUserParams

export type CreateCredentialBody = {
    credentialKind: "Fido2";
    credentialInfo: {
        /** Base64url-encoded id of the credential returned by the user's WebAuthn client. */
        credId: string;
        /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object returned by the user's WebAuthn client. */
        clientData: string;
        /** Base64url-encoded attestation data returned by the user's WebAuthn client. */
        attestationData: string;
    };
    /** Human-readable name of the credential. */
    credentialName: string;
    /** Challenge identifier returned by the create credential challenge endpoint. */
    challengeIdentifier: string;
} | {
    credentialKind: "Key";
    credentialInfo: {
        /** Base64url-encoded id of the credential. */
        credId: string;
        /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object. */
        clientData: string;
        /** Base64url-encoded public key. */
        attestationData: string;
    };
    /** Human-readable name of the credential. */
    credentialName: string;
    /** Challenge identifier returned by the create credential challenge endpoint. */
    challengeIdentifier: string;
} | {
    credentialKind: "PasswordProtectedKey";
    credentialInfo: {
        /** Base64url-encoded id of the credential. */
        credId: string;
        /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object. */
        clientData: string;
        /** Base64url-encoded public key. */
        attestationData: string;
    };
    /** User-encrypted private key. Dfns does not have the password to decrypt it. */
    encryptedPrivateKey: string;
    /** Human-readable name of the credential. */
    credentialName: string;
    /** Challenge identifier returned by the create credential challenge endpoint. */
    challengeIdentifier: string;
} | {
    credentialKind: "RecoveryKey";
    credentialInfo: {
        /** Base64url-encoded id of the recovery credential. */
        credId: string;
        /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object. */
        clientData: string;
        /** Base64url-encoded public key. */
        attestationData: string;
    };
    /** User-encrypted private key for the recovery credential. */
    encryptedPrivateKey?: string | undefined;
    /** Human-readable name of the credential. */
    credentialName: string;
    /** Challenge identifier returned by the create credential challenge endpoint. */
    challengeIdentifier: string;
} | {
    credentialKind: "Password";
    credentialInfo: {
        /** User password. */
        password: string;
    };
    /** Human-readable name of the credential. */
    credentialName: string;
    /** Challenge identifier returned by the create credential challenge endpoint. */
    challengeIdentifier: string;
} | {
    credentialKind: "Totp";
    credentialInfo: {
        /** TOTP one-time code. */
        otpCode: string;
    };
    /** Human-readable name of the credential. */
    credentialName: string;
    /** Challenge identifier returned by the create credential challenge endpoint. */
    challengeIdentifier: string;
};

export type CreateCredentialResponse = {
    kind: "Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey";
    /** Credential ID from the WebAuthn authenticator (base64url). */
    credentialId: string;
    /** Dfns-internal UUID of the credential. */
    credentialUuid: string;
    dateCreated: string;
    /** Whether the credential is active. */
    isActive: boolean;
    /** Human-readable name of the credential. */
    name: string;
    /** Public key of the credential. */
    publicKey: string;
    /** Relying party identifier associated with the credential. */
    relyingPartyId: string;
    /** Origin where the credential was created. */
    origin: string;
};

export type CreateCredentialRequest = { body: CreateCredentialBody }

export type CreateCredentialChallengeBody = {
    kind: "Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey";
};

export type CreateCredentialChallengeResponse = {
    kind: "Fido2";
    user: {
        /** Base64url-encoded user handle (WebAuthn user.id). */
        id: string;
        /** Display name of the user. */
        displayName: string;
        /** Username of the user. */
        name: string;
    };
    /** Challenge identifier to be used in the subsequent create credential request. */
    challengeIdentifier: string;
    /** Challenge value to be signed by the credential. */
    challenge: string;
    rp?: {
        /** ID of the WebAuthn relying party (typically a domain name). */
        id: string;
        /** Human-readable name of the relying party. */
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
        /** Base64url-encoded user handle (WebAuthn user.id). */
        id: string;
        /** Display name of the user. */
        displayName: string;
        /** Username of the user. */
        name: string;
    };
    /** Challenge identifier to be used in the subsequent create credential request. */
    challengeIdentifier: string;
    /** Challenge value to be signed by the credential. */
    challenge: string;
    rp?: {
        /** ID of the WebAuthn relying party (typically a domain name). */
        id: string;
        /** Human-readable name of the relying party. */
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
        /** Base64url-encoded user handle (WebAuthn user.id). */
        id: string;
        /** Display name of the user. */
        displayName: string;
        /** Username of the user. */
        name: string;
    };
    /** Challenge identifier to be used in the subsequent create credential request. */
    challengeIdentifier: string;
    /** Challenge value to be signed by the credential. */
    challenge: string;
    rp?: {
        /** ID of the WebAuthn relying party (typically a domain name). */
        id: string;
        /** Human-readable name of the relying party. */
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
        /** Base64url-encoded user handle (WebAuthn user.id). */
        id: string;
        /** Display name of the user. */
        displayName: string;
        /** Username of the user. */
        name: string;
    };
    /** Challenge identifier to be used in the subsequent create credential request. */
    challengeIdentifier: string;
    /** Challenge value to be signed by the credential. */
    challenge: string;
    rp?: {
        /** ID of the WebAuthn relying party (typically a domain name). */
        id: string;
        /** Human-readable name of the relying party. */
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
        /** Base64url-encoded user handle (WebAuthn user.id). */
        id: string;
        /** Display name of the user. */
        displayName: string;
        /** Username of the user. */
        name: string;
    };
    /** Challenge identifier to be used in the subsequent create credential request. */
    challengeIdentifier: string;
    rp?: {
        /** ID of the WebAuthn relying party (typically a domain name). */
        id: string;
        /** Human-readable name of the relying party. */
        name: string;
    } | undefined;
    /** @deprecated use challengeIdentifier instead */
    temporaryAuthenticationToken: string;
} | {
    kind: "Totp";
    user: {
        /** Base64url-encoded user handle (WebAuthn user.id). */
        id: string;
        /** Display name of the user. */
        displayName: string;
        /** Username of the user. */
        name: string;
    };
    /** Challenge identifier to be used in the subsequent create credential request. */
    challengeIdentifier: string;
    rp?: {
        /** ID of the WebAuthn relying party (typically a domain name). */
        id: string;
        /** Human-readable name of the relying party. */
        name: string;
    } | undefined;
    /** Provisioning URL for the TOTP authenticator. */
    otpUrl: string;
    /** @deprecated use challengeIdentifier instead */
    temporaryAuthenticationToken: string;
};

export type CreateCredentialChallengeRequest = { body: CreateCredentialChallengeBody }

export type CreateCredentialChallengeWithCodeBody = {
    credentialKind: "Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey";
    /** One-time code obtained from the create credential code endpoint. */
    code: string;
};

export type CreateCredentialChallengeWithCodeResponse = {
    kind: "Fido2";
    user: {
        /** Base64url-encoded user handle (WebAuthn user.id). */
        id: string;
        /** Display name of the user. */
        displayName: string;
        /** Username of the user. */
        name: string;
    };
    /** Challenge identifier to be used in the subsequent create credential request. */
    challengeIdentifier: string;
    /** Challenge value to be signed by the credential. */
    challenge: string;
    rp?: {
        /** ID of the WebAuthn relying party (typically a domain name). */
        id: string;
        /** Human-readable name of the relying party. */
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
        /** Base64url-encoded user handle (WebAuthn user.id). */
        id: string;
        /** Display name of the user. */
        displayName: string;
        /** Username of the user. */
        name: string;
    };
    /** Challenge identifier to be used in the subsequent create credential request. */
    challengeIdentifier: string;
    /** Challenge value to be signed by the credential. */
    challenge: string;
    rp?: {
        /** ID of the WebAuthn relying party (typically a domain name). */
        id: string;
        /** Human-readable name of the relying party. */
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
        /** Base64url-encoded user handle (WebAuthn user.id). */
        id: string;
        /** Display name of the user. */
        displayName: string;
        /** Username of the user. */
        name: string;
    };
    /** Challenge identifier to be used in the subsequent create credential request. */
    challengeIdentifier: string;
    /** Challenge value to be signed by the credential. */
    challenge: string;
    rp?: {
        /** ID of the WebAuthn relying party (typically a domain name). */
        id: string;
        /** Human-readable name of the relying party. */
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
        /** Base64url-encoded user handle (WebAuthn user.id). */
        id: string;
        /** Display name of the user. */
        displayName: string;
        /** Username of the user. */
        name: string;
    };
    /** Challenge identifier to be used in the subsequent create credential request. */
    challengeIdentifier: string;
    /** Challenge value to be signed by the credential. */
    challenge: string;
    rp?: {
        /** ID of the WebAuthn relying party (typically a domain name). */
        id: string;
        /** Human-readable name of the relying party. */
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
        /** Base64url-encoded user handle (WebAuthn user.id). */
        id: string;
        /** Display name of the user. */
        displayName: string;
        /** Username of the user. */
        name: string;
    };
    /** Challenge identifier to be used in the subsequent create credential request. */
    challengeIdentifier: string;
    rp?: {
        /** ID of the WebAuthn relying party (typically a domain name). */
        id: string;
        /** Human-readable name of the relying party. */
        name: string;
    } | undefined;
    /** @deprecated use challengeIdentifier instead */
    temporaryAuthenticationToken: string;
} | {
    kind: "Totp";
    user: {
        /** Base64url-encoded user handle (WebAuthn user.id). */
        id: string;
        /** Display name of the user. */
        displayName: string;
        /** Username of the user. */
        name: string;
    };
    /** Challenge identifier to be used in the subsequent create credential request. */
    challengeIdentifier: string;
    rp?: {
        /** ID of the WebAuthn relying party (typically a domain name). */
        id: string;
        /** Human-readable name of the relying party. */
        name: string;
    } | undefined;
    /** Provisioning URL for the TOTP authenticator. */
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
    /** One-time code that can be used to create a new credential. */
    code: string;
    /** Code expiration, as an ISO-8601 datetime string or a unix timestamp. */
    expiration: string;
};

export type CreateCredentialCodeRequest = { body: CreateCredentialCodeBody }

export type CreateCredentialWithCodeBody = {
    credentialKind: "Fido2";
    credentialInfo: {
        /** Base64url-encoded id of the credential returned by the user's WebAuthn client. */
        credId: string;
        /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object returned by the user's WebAuthn client. */
        clientData: string;
        /** Base64url-encoded attestation data returned by the user's WebAuthn client. */
        attestationData: string;
    };
    /** Human-readable name of the credential. */
    credentialName: string;
    /** Challenge identifier returned by the create credential challenge endpoint. */
    challengeIdentifier: string;
} | {
    credentialKind: "Key";
    credentialInfo: {
        /** Base64url-encoded id of the credential. */
        credId: string;
        /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object. */
        clientData: string;
        /** Base64url-encoded public key. */
        attestationData: string;
    };
    /** Human-readable name of the credential. */
    credentialName: string;
    /** Challenge identifier returned by the create credential challenge endpoint. */
    challengeIdentifier: string;
} | {
    credentialKind: "PasswordProtectedKey";
    credentialInfo: {
        /** Base64url-encoded id of the credential. */
        credId: string;
        /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object. */
        clientData: string;
        /** Base64url-encoded public key. */
        attestationData: string;
    };
    /** User-encrypted private key. Dfns does not have the password to decrypt it. */
    encryptedPrivateKey: string;
    /** Human-readable name of the credential. */
    credentialName: string;
    /** Challenge identifier returned by the create credential challenge endpoint. */
    challengeIdentifier: string;
} | {
    credentialKind: "RecoveryKey";
    credentialInfo: {
        /** Base64url-encoded id of the recovery credential. */
        credId: string;
        /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object. */
        clientData: string;
        /** Base64url-encoded public key. */
        attestationData: string;
    };
    /** User-encrypted private key for the recovery credential. */
    encryptedPrivateKey?: string | undefined;
    /** Human-readable name of the credential. */
    credentialName: string;
    /** Challenge identifier returned by the create credential challenge endpoint. */
    challengeIdentifier: string;
} | {
    credentialKind: "Password";
    credentialInfo: {
        /** User password. */
        password: string;
    };
    /** Human-readable name of the credential. */
    credentialName: string;
    /** Challenge identifier returned by the create credential challenge endpoint. */
    challengeIdentifier: string;
} | {
    credentialKind: "Totp";
    credentialInfo: {
        /** TOTP one-time code. */
        otpCode: string;
    };
    /** Human-readable name of the credential. */
    credentialName: string;
    /** Challenge identifier returned by the create credential challenge endpoint. */
    challengeIdentifier: string;
};

export type CreateCredentialWithCodeResponse = {
    kind: "Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey";
    /** Credential ID from the WebAuthn authenticator (base64url). */
    credentialId: string;
    /** Dfns-internal UUID of the credential. */
    credentialUuid: string;
    dateCreated: string;
    /** Whether the credential is active. */
    isActive: boolean;
    /** Human-readable name of the credential. */
    name: string;
    /** Public key of the credential. */
    publicKey: string;
    /** Relying party identifier associated with the credential. */
    relyingPartyId: string;
    /** Origin where the credential was created. */
    origin: string;
};

export type CreateCredentialWithCodeRequest = { body: CreateCredentialWithCodeBody }

export type CreateDelegatedRecoveryChallengeBody = {
    /** Username/identifier of the user to recover. */
    username: string;
    /** Identifier of the recovery credential to use. */
    credentialId: string;
};

export type CreateDelegatedRecoveryChallengeResponse = {
    user: {
        /** Base64url-encoded user handle (WebAuthn user.id). */
        id: string;
        /** Display name of the user. */
        displayName: string;
        /** Username of the user. */
        name: string;
    };
    /** JWT used to identify the registration session when calling Complete User Registration. */
    temporaryAuthenticationToken: string;
    /** Challenge to be signed by the credential being registered. */
    challenge: string;
    /** Deprecated. Should not be used. */
    rp?: {
        /** ID of the WebAuthn relying party (typically a domain name). */
        id: string;
        /** Human-readable name of the relying party. */
        name: string;
    } | undefined;
    /** Credential kinds that can be used to register the user. */
    supportedCredentialKinds: {
        /** Credential kinds accepted as first factor. */
        firstFactor: ("Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey")[];
        /** Credential kinds accepted as second factor. */
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
    /** Public key credential parameters supported for the registration. */
    pubKeyCredParams: {
        type: "public-key";
        alg: number;
    }[];
    /** Credentials to exclude from the registration (already registered for the user). */
    excludeCredentials: {
        /** Is always `public-key`. */
        type: "public-key";
        /** ID that identifies the credential. */
        id: string;
    }[];
    /** URL to provision a TOTP credential, when applicable. */
    otpUrl: string;
    allowedRecoveryCredentials: {
        /** Identifier of the recovery credential. */
        id: string;
        /** Encrypted recovery key associated with this credential. */
        encryptedRecoveryKey: string;
    }[];
};

export type CreateDelegatedRecoveryChallengeRequest = { body: CreateDelegatedRecoveryChallengeBody }

export type CreateDelegatedRegistrationChallengeBody = {
    /** Username/identifier (any unique string accepted, e.g. your internal user ID or email). */
    email: string;
    /** Must be `EndUser`. */
    kind: "EndUser";
    /** Optional external identifier for the user, used for cross-referencing with your own systems. */
    externalId?: string | undefined;
};

export type CreateDelegatedRegistrationChallengeResponse = {
    user: {
        /** Base64url-encoded user handle (WebAuthn user.id). */
        id: string;
        /** Display name of the user. */
        displayName: string;
        /** Username of the user. */
        name: string;
    };
    /** JWT used to identify the registration session when calling Complete User Registration. */
    temporaryAuthenticationToken: string;
    /** Challenge to be signed by the credential being registered. */
    challenge: string;
    /** Deprecated. Should not be used. */
    rp?: {
        /** ID of the WebAuthn relying party (typically a domain name). */
        id: string;
        /** Human-readable name of the relying party. */
        name: string;
    } | undefined;
    /** Credential kinds that can be used to register the user. */
    supportedCredentialKinds: {
        /** Credential kinds accepted as first factor. */
        firstFactor: ("Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey")[];
        /** Credential kinds accepted as second factor. */
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
    /** Public key credential parameters supported for the registration. */
    pubKeyCredParams: {
        type: "public-key";
        alg: number;
    }[];
    /** Credentials to exclude from the registration (already registered for the user). */
    excludeCredentials: {
        /** Is always `public-key`. */
        type: "public-key";
        /** ID that identifies the credential. */
        id: string;
    }[];
    /** URL to provision a TOTP credential, when applicable. */
    otpUrl: string;
};

export type CreateDelegatedRegistrationChallengeRequest = { body: CreateDelegatedRegistrationChallengeBody }

export type CreateLoginChallengeBody = {
    /** Username/identifier of the user. Optional when the user has at least one discoverable WebAuthn credential. */
    username?: string | undefined;
    /** Organization id. */
    orgId?: string | undefined;
    /** Account id. */
    accountId?: string | undefined;
    /** One-time login code, required when the user has a credential of kind `PasswordProtectedKey`. */
    loginCode?: string | undefined;
};

export type CreateLoginChallengeResponse = {
    /** Challenge (string) to be signed by the requester with his private key. */
    challenge: string;
    /** A JWT that identifies the signing session. */
    challengeIdentifier: string;
    /** Deprecated. Should not be used. */
    rp?: {
        /** ID of the WebAuthn relying party (typically a domain name). */
        id: string;
        /** Human-readable name of the relying party. */
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
    /** Human-readable name of the Personal Access Token. */
    name: string;
    publicKey: string;
    /** ID of the permission (also referred to as "role" in the dashboard). */
    permissionId?: string | undefined;
    /** Value that can be used to correlate the entity with an external system. */
    externalId?: string | undefined;
    /** Number of days the token will be valid for. */
    daysValid?: number | undefined;
    /** Number of seconds the token will be valid for. */
    secondsValid?: number | undefined;
};

export type CreatePersonalAccessTokenResponse = {
    /** The access token. Only returned at creation time. */
    accessToken: string;
    dateCreated: string;
    /** ID of the credential associated with the access token. */
    credId: string;
    /** Whether the access token is active. */
    isActive: boolean;
    kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
    /** User id. */
    linkedUserId: string;
    /** ID of the application the access token is linked to. */
    linkedAppId: string;
    /** Human-readable name of the access token. */
    name: string;
    /** Organization id. */
    orgId: string;
    /** Public key associated with the access token. */
    publicKey: string;
    /** Token id. */
    tokenId: string;
    /** Permissions (roles) assigned to the access token. */
    permissionAssignments: {
        /** Human-readable name of the permission (role). */
        permissionName: string;
        /** ID of the permission (also referred to as "role" in the dashboard). */
        permissionId: string;
        /** ID of the permission assignment. */
        assignmentId: string;
        /** List of API operations granted by this permission. */
        operations?: string[] | undefined;
    }[];
};

export type CreatePersonalAccessTokenRequest = { body: CreatePersonalAccessTokenBody }

export type CreateRecoveryChallengeBody = {
    /** Username/identifier of the user to recover. */
    username: string;
    /** Recovery verification code sent to the user by email. */
    verificationCode: string;
    /** Organization id. */
    orgId?: string | undefined;
    /** Account id. */
    accountId?: string | undefined;
    /** Identifier of the recovery credential to use. */
    credentialId: string;
};

export type CreateRecoveryChallengeResponse = {
    user: {
        /** Base64url-encoded user handle (WebAuthn user.id). */
        id: string;
        /** Display name of the user. */
        displayName: string;
        /** Username of the user. */
        name: string;
    };
    /** JWT used to identify the registration session when calling Complete User Registration. */
    temporaryAuthenticationToken: string;
    /** Challenge to be signed by the credential being registered. */
    challenge: string;
    /** Deprecated. Should not be used. */
    rp?: {
        /** ID of the WebAuthn relying party (typically a domain name). */
        id: string;
        /** Human-readable name of the relying party. */
        name: string;
    } | undefined;
    /** Credential kinds that can be used to register the user. */
    supportedCredentialKinds: {
        /** Credential kinds accepted as first factor. */
        firstFactor: ("Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey")[];
        /** Credential kinds accepted as second factor. */
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
    /** Public key credential parameters supported for the registration. */
    pubKeyCredParams: {
        type: "public-key";
        alg: number;
    }[];
    /** Credentials to exclude from the registration (already registered for the user). */
    excludeCredentials: {
        /** Is always `public-key`. */
        type: "public-key";
        /** ID that identifies the credential. */
        id: string;
    }[];
    /** URL to provision a TOTP credential, when applicable. */
    otpUrl: string;
    allowedRecoveryCredentials: {
        /** Identifier of the recovery credential. */
        id: string;
        /** Encrypted recovery key associated with this credential. */
        encryptedRecoveryKey: string;
    }[];
};

export type CreateRecoveryChallengeRequest = { body: CreateRecoveryChallengeBody }

export type CreateRegistrationChallengeBody = {
    /** Organization id. */
    orgId?: string | undefined;
    /** Account id. */
    accountId?: string | undefined;
    /** Username/identifier of the user being registered (any unique string accepted, e.g. email). */
    username: string;
    /** One-time registration code sent to the user by email. */
    registrationCode: string;
};

export type CreateRegistrationChallengeResponse = {
    user: {
        /** Base64url-encoded user handle (WebAuthn user.id). */
        id: string;
        /** Display name of the user. */
        displayName: string;
        /** Username of the user. */
        name: string;
    };
    /** JWT used to identify the registration session when calling Complete User Registration. */
    temporaryAuthenticationToken: string;
    /** Challenge to be signed by the credential being registered. */
    challenge: string;
    /** Deprecated. Should not be used. */
    rp?: {
        /** ID of the WebAuthn relying party (typically a domain name). */
        id: string;
        /** Human-readable name of the relying party. */
        name: string;
    } | undefined;
    /** Credential kinds that can be used to register the user. */
    supportedCredentialKinds: {
        /** Credential kinds accepted as first factor. */
        firstFactor: ("Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey")[];
        /** Credential kinds accepted as second factor. */
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
    /** Public key credential parameters supported for the registration. */
    pubKeyCredParams: {
        type: "public-key";
        alg: number;
    }[];
    /** Credentials to exclude from the registration (already registered for the user). */
    excludeCredentials: {
        /** Is always `public-key`. */
        type: "public-key";
        /** ID that identifies the credential. */
        id: string;
    }[];
    /** URL to provision a TOTP credential, when applicable. */
    otpUrl: string;
};

export type CreateRegistrationChallengeRequest = { body: CreateRegistrationChallengeBody }

export type CreateServiceAccountBody = {
    /** Human-readable name of the Service Account. */
    name: string;
    publicKey: string;
    /** ID of the permission (also referred to as "role" in the dashboard). */
    permissionId?: string | undefined;
    /** Value that can be used to correlate the entity with an external system. */
    externalId?: string | undefined;
    /** Number of days the service account will be valid for. */
    daysValid?: number | undefined;
};

export type CreateServiceAccountResponse = {
    userInfo: {
        /** Username/identifier of the user (any unique string accepted, e.g. your internal user ID or email). */
        username: string;
        /** Display name of the user. */
        name: string;
        /** User id. */
        userId: string;
        /** User kind. */
        kind: "DfnsStaff" | "AccountUser" | "CustomerEmployee" | "EndUser";
        /** UUID of the user's primary credential. */
        credentialUuid: string;
        /** Organization id. */
        orgId?: string | undefined;
        /** Account id. */
        accountId?: string | undefined;
        /** @deprecated - Flat list of API operations the user has access to. */
        permissions?: string[] | undefined;
        /** Whether the user is active. */
        isActive: boolean;
        /** Whether the user is a service account. */
        isServiceAccount: boolean;
        /** Whether the user has completed registration. */
        isRegistered: boolean;
        /** Permissions (roles) assigned to the user. */
        permissionAssignments: {
            /** Human-readable name of the permission (role). */
            permissionName: string;
            /** ID of the permission (also referred to as "role" in the dashboard). */
            permissionId: string;
            /** ID of the permission assignment. */
            assignmentId: string;
            /** List of API operations granted by this permission. */
            operations?: string[] | undefined;
        }[];
    };
    accessTokens: {
        /** The access token. Only returned at creation time. */
        accessToken?: string | undefined;
        dateCreated: string;
        /** ID of the credential associated with the access token. */
        credId: string;
        /** Whether the access token is active. */
        isActive: boolean;
        /** Access token kind. */
        kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
        /** User id. */
        linkedUserId: string;
        /** ID of the application the access token is linked to. */
        linkedAppId: string;
        /** Human-readable name of the access token. */
        name: string;
        /** Organization id. */
        orgId: string;
        /** Permissions (roles) assigned to the access token. */
        permissionAssignments: {
            /** Human-readable name of the permission (role). */
            permissionName: string;
            /** ID of the permission (also referred to as "role" in the dashboard). */
            permissionId: string;
            /** ID of the permission assignment. */
            assignmentId: string;
            /** List of API operations granted by this permission. */
            operations?: string[] | undefined;
        }[];
        /** Public key associated with the access token. */
        publicKey: string;
        /** Token id. */
        tokenId: string;
    }[];
};

export type CreateServiceAccountRequest = { body: CreateServiceAccountBody }

export type CreateSocialRegistrationChallengeBody = {
    /** Organization id. */
    orgId?: string | undefined;
    /** Social login provider used to issue the JWT. */
    socialLoginProviderKind: "Oidc";
    /** JWT id token issued by the social login provider. */
    idToken: string;
};

export type CreateSocialRegistrationChallengeResponse = {
    user: {
        /** Base64url-encoded user handle (WebAuthn user.id). */
        id: string;
        /** Display name of the user. */
        displayName: string;
        /** Username of the user. */
        name: string;
    };
    /** JWT used to identify the registration session when calling Complete User Registration. */
    temporaryAuthenticationToken: string;
    /** Challenge to be signed by the credential being registered. */
    challenge: string;
    /** Deprecated. Should not be used. */
    rp?: {
        /** ID of the WebAuthn relying party (typically a domain name). */
        id: string;
        /** Human-readable name of the relying party. */
        name: string;
    } | undefined;
    /** Credential kinds that can be used to register the user. */
    supportedCredentialKinds: {
        /** Credential kinds accepted as first factor. */
        firstFactor: ("Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey")[];
        /** Credential kinds accepted as second factor. */
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
    /** Public key credential parameters supported for the registration. */
    pubKeyCredParams: {
        type: "public-key";
        alg: number;
    }[];
    /** Credentials to exclude from the registration (already registered for the user). */
    excludeCredentials: {
        /** Is always `public-key`. */
        type: "public-key";
        /** ID that identifies the credential. */
        id: string;
    }[];
    /** URL to provision a TOTP credential, when applicable. */
    otpUrl: string;
};

export type CreateSocialRegistrationChallengeRequest = { body: CreateSocialRegistrationChallengeBody }

export type CreateUserBody = {
    /** The email address of the new user. */
    email: string;
    /** The kind of user being created.
          In this endpoint it can only be "`CustomerEmployee`" (creating an "`EndUser`" is done through the [Delegated Registration](https://docs.dfns.co/api-reference/auth/registration-flows#delegated-users-registration-flow) endpoint) */
    kind: "CustomerEmployee" | "DfnsStaff";
    /** Optional public key in PEM format associated with the user. */
    publicKey?: string | undefined;
    /** Value that can be used to correlate the entity with an external system. */
    externalId?: string | undefined;
    /** If set to true, the user will have to authenticate via SSO */
    isSSORequired?: boolean | undefined;
};

export type CreateUserResponse = {
    /** Username/identifier of the user (any unique string accepted, e.g. your internal user ID or email). */
    username: string;
    /** Display name of the user. */
    name: string;
    /** User id. */
    userId: string;
    /** User kind. */
    kind: "DfnsStaff" | "AccountUser" | "CustomerEmployee" | "EndUser";
    /** UUID of the user's primary credential. */
    credentialUuid: string;
    /** Organization id. */
    orgId?: string | undefined;
    /** Account id. */
    accountId?: string | undefined;
    /** @deprecated - Flat list of API operations the user has access to. */
    permissions?: string[] | undefined;
    /** Whether the user is active. */
    isActive: boolean;
    /** Whether the user is a service account. */
    isServiceAccount: boolean;
    /** Whether the user has completed registration. */
    isRegistered: boolean;
    /** Whether the user must authenticate via SSO. */
    isSSORequired: boolean;
    /** Permissions (roles) assigned to the user. */
    permissionAssignments: {
        /** Human-readable name of the permission (role). */
        permissionName: string;
        /** ID of the permission (also referred to as "role" in the dashboard). */
        permissionId: string;
        /** ID of the permission assignment. */
        assignmentId: string;
        /** List of API operations granted by this permission. */
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
        /** ID of the WebAuthn relying party (typically a domain name). */
        id: string;
        /** Human-readable name of the relying party. */
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
        /** User password. */
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
        /** TOTP one-time code. */
        otpCode: string;
    }) | undefined;
};

export type CreateUserActionSignatureResponse = {
    /** Signing token to use to verify the user intended to perform the action. */
    userAction: string;
};

export type CreateUserActionSignatureRequest = { body: CreateUserActionSignatureBody }

export type DeactivateCredentialBody = {
    /** UUID of the credential to deactivate. */
    credentialUuid: string;
};

export type DeactivateCredentialResponse = {
    /** Human-readable success message. */
    message: string;
};

export type DeactivateCredentialRequest = { body: DeactivateCredentialBody }

export type DeactivatePersonalAccessTokenParams = {
    /** Token id. */
    tokenId: string;
};

export type DeactivatePersonalAccessTokenResponse = {
    /** The access token. Only returned at creation time. */
    accessToken?: string | undefined;
    dateCreated: string;
    /** ID of the credential associated with the access token. */
    credId: string;
    /** Whether the access token is active. */
    isActive: boolean;
    /** Access token kind. */
    kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
    /** User id. */
    linkedUserId: string;
    /** ID of the application the access token is linked to. */
    linkedAppId: string;
    /** Human-readable name of the access token. */
    name: string;
    /** Organization id. */
    orgId: string;
    /** Permissions (roles) assigned to the access token. */
    permissionAssignments: {
        /** Human-readable name of the permission (role). */
        permissionName: string;
        /** ID of the permission (also referred to as "role" in the dashboard). */
        permissionId: string;
        /** ID of the permission assignment. */
        assignmentId: string;
        /** List of API operations granted by this permission. */
        operations?: string[] | undefined;
    }[];
    /** Public key associated with the access token. */
    publicKey: string;
    /** Token id. */
    tokenId: string;
};

export type DeactivatePersonalAccessTokenRequest = DeactivatePersonalAccessTokenParams

export type DeactivateServiceAccountBody = {
    /** If true, bypasses the policy approver check and deactivates immediately. */
    force?: boolean;
};

export type DeactivateServiceAccountParams = {
    /** ID of the service account. */
    serviceAccountId: string;
};

export type DeactivateServiceAccountResponse = {
    userInfo: {
        /** Username/identifier of the user (any unique string accepted, e.g. your internal user ID or email). */
        username: string;
        /** Display name of the user. */
        name: string;
        /** User id. */
        userId: string;
        /** User kind. */
        kind: "DfnsStaff" | "AccountUser" | "CustomerEmployee" | "EndUser";
        /** UUID of the user's primary credential. */
        credentialUuid: string;
        /** Organization id. */
        orgId?: string | undefined;
        /** Account id. */
        accountId?: string | undefined;
        /** @deprecated - Flat list of API operations the user has access to. */
        permissions?: string[] | undefined;
        /** Whether the user is active. */
        isActive: boolean;
        /** Whether the user is a service account. */
        isServiceAccount: boolean;
        /** Whether the user has completed registration. */
        isRegistered: boolean;
        /** Permissions (roles) assigned to the user. */
        permissionAssignments: {
            /** Human-readable name of the permission (role). */
            permissionName: string;
            /** ID of the permission (also referred to as "role" in the dashboard). */
            permissionId: string;
            /** ID of the permission assignment. */
            assignmentId: string;
            /** List of API operations granted by this permission. */
            operations?: string[] | undefined;
        }[];
    };
    accessTokens: {
        /** The access token. Only returned at creation time. */
        accessToken?: string | undefined;
        dateCreated: string;
        /** ID of the credential associated with the access token. */
        credId: string;
        /** Whether the access token is active. */
        isActive: boolean;
        /** Access token kind. */
        kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
        /** User id. */
        linkedUserId: string;
        /** ID of the application the access token is linked to. */
        linkedAppId: string;
        /** Human-readable name of the access token. */
        name: string;
        /** Organization id. */
        orgId: string;
        /** Permissions (roles) assigned to the access token. */
        permissionAssignments: {
            /** Human-readable name of the permission (role). */
            permissionName: string;
            /** ID of the permission (also referred to as "role" in the dashboard). */
            permissionId: string;
            /** ID of the permission assignment. */
            assignmentId: string;
            /** List of API operations granted by this permission. */
            operations?: string[] | undefined;
        }[];
        /** Public key associated with the access token. */
        publicKey: string;
        /** Token id. */
        tokenId: string;
    }[];
};

export type DeactivateServiceAccountRequest = DeactivateServiceAccountParams & { body: DeactivateServiceAccountBody }

export type DeactivateUserParams = {
    /** User id. */
    userId: string;
};

export type DeactivateUserResponse = {
    /** Username/identifier of the user (any unique string accepted, e.g. your internal user ID or email). */
    username: string;
    /** Display name of the user. */
    name: string;
    /** User id. */
    userId: string;
    /** User kind. */
    kind: "DfnsStaff" | "AccountUser" | "CustomerEmployee" | "EndUser";
    /** UUID of the user's primary credential. */
    credentialUuid: string;
    /** Organization id. */
    orgId?: string | undefined;
    /** Account id. */
    accountId?: string | undefined;
    /** @deprecated - Flat list of API operations the user has access to. */
    permissions?: string[] | undefined;
    /** Whether the user is active. */
    isActive: boolean;
    /** Whether the user is a service account. */
    isServiceAccount: boolean;
    /** Whether the user has completed registration. */
    isRegistered: boolean;
    /** Whether the user must authenticate via SSO. */
    isSSORequired: boolean;
    /** Permissions (roles) assigned to the user. */
    permissionAssignments: {
        /** Human-readable name of the permission (role). */
        permissionName: string;
        /** ID of the permission (also referred to as "role" in the dashboard). */
        permissionId: string;
        /** ID of the permission assignment. */
        assignmentId: string;
        /** List of API operations granted by this permission. */
        operations?: string[] | undefined;
    }[];
};

export type DeactivateUserRequest = DeactivateUserParams

export type DelegatedLoginBody = {
    /** Username/identifier of the user to log in. */
    username: string;
};

export type DelegatedLoginResponse = {
    /** Authentication token issued to the user. */
    token: string;
};

export type DelegatedLoginRequest = { body: DelegatedLoginBody }

export type GetApplicationParams = {
    /** ID of the application (deprecated). */
    appId: string;
};

export type GetApplicationResponse = {
    /** ID of the application (deprecated). */
    appId: string;
    kind: "ServerSideApplication" | "ClientSideApplication";
    /** Organization id. */
    orgId: string;
    /** Expected relying party ID for webauthn (deprecated). */
    expectedRpId?: string | undefined;
    /** Human-readable name of the application. */
    name: string;
    /** Whether the application is active. */
    isActive: boolean;
    /** Expected origin for webauthn (deprecated). */
    expectedOrigin?: string | undefined;
    /** Permissions (roles) assigned to the application. */
    permissionAssignments: {
        /** Human-readable name of the permission (role). */
        permissionName: string;
        /** ID of the permission (also referred to as "role" in the dashboard). */
        permissionId: string;
        /** ID of the permission assignment. */
        assignmentId: string;
        /** List of API operations granted by this permission. */
        operations?: string[] | undefined;
    }[];
    /** Access tokens associated with the application. */
    accessTokens: {
        /** The access token. Only returned at creation time. */
        accessToken?: string | undefined;
        dateCreated: string;
        /** ID of the credential associated with the access token. */
        credId: string;
        /** Whether the access token is active. */
        isActive: boolean;
        /** Access token kind. */
        kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
        /** User id. */
        linkedUserId: string;
        /** ID of the application the access token is linked to. */
        linkedAppId: string;
        /** Human-readable name of the access token. */
        name: string;
        /** Organization id. */
        orgId: string;
        /** Permissions (roles) assigned to the access token. */
        permissionAssignments: {
            /** Human-readable name of the permission (role). */
            permissionName: string;
            /** ID of the permission (also referred to as "role" in the dashboard). */
            permissionId: string;
            /** ID of the permission assignment. */
            assignmentId: string;
            /** List of API operations granted by this permission. */
            operations?: string[] | undefined;
        }[];
        /** Public key associated with the access token. */
        publicKey: string;
        /** Token id. */
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
    /** Token id. */
    tokenId: string;
};

export type GetPersonalAccessTokenResponse = {
    /** The access token. Only returned at creation time. */
    accessToken?: string | undefined;
    dateCreated: string;
    /** ID of the credential associated with the access token. */
    credId: string;
    /** Whether the access token is active. */
    isActive: boolean;
    /** Access token kind. */
    kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
    /** User id. */
    linkedUserId: string;
    /** ID of the application the access token is linked to. */
    linkedAppId: string;
    /** Human-readable name of the access token. */
    name: string;
    /** Organization id. */
    orgId: string;
    /** Permissions (roles) assigned to the access token. */
    permissionAssignments: {
        /** Human-readable name of the permission (role). */
        permissionName: string;
        /** ID of the permission (also referred to as "role" in the dashboard). */
        permissionId: string;
        /** ID of the permission assignment. */
        assignmentId: string;
        /** List of API operations granted by this permission. */
        operations?: string[] | undefined;
    }[];
    /** Public key associated with the access token. */
    publicKey: string;
    /** Token id. */
    tokenId: string;
};

export type GetPersonalAccessTokenRequest = GetPersonalAccessTokenParams

export type GetServiceAccountParams = {
    /** ID of the service account. */
    serviceAccountId: string;
};

export type GetServiceAccountResponse = {
    userInfo: {
        /** Username/identifier of the user (any unique string accepted, e.g. your internal user ID or email). */
        username: string;
        /** Display name of the user. */
        name: string;
        /** User id. */
        userId: string;
        /** User kind. */
        kind: "DfnsStaff" | "AccountUser" | "CustomerEmployee" | "EndUser";
        /** UUID of the user's primary credential. */
        credentialUuid: string;
        /** Organization id. */
        orgId?: string | undefined;
        /** Account id. */
        accountId?: string | undefined;
        /** @deprecated - Flat list of API operations the user has access to. */
        permissions?: string[] | undefined;
        /** Whether the user is active. */
        isActive: boolean;
        /** Whether the user is a service account. */
        isServiceAccount: boolean;
        /** Whether the user has completed registration. */
        isRegistered: boolean;
        /** Permissions (roles) assigned to the user. */
        permissionAssignments: {
            /** Human-readable name of the permission (role). */
            permissionName: string;
            /** ID of the permission (also referred to as "role" in the dashboard). */
            permissionId: string;
            /** ID of the permission assignment. */
            assignmentId: string;
            /** List of API operations granted by this permission. */
            operations?: string[] | undefined;
        }[];
    };
    accessTokens: {
        /** The access token. Only returned at creation time. */
        accessToken?: string | undefined;
        dateCreated: string;
        /** ID of the credential associated with the access token. */
        credId: string;
        /** Whether the access token is active. */
        isActive: boolean;
        /** Access token kind. */
        kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
        /** User id. */
        linkedUserId: string;
        /** ID of the application the access token is linked to. */
        linkedAppId: string;
        /** Human-readable name of the access token. */
        name: string;
        /** Organization id. */
        orgId: string;
        /** Permissions (roles) assigned to the access token. */
        permissionAssignments: {
            /** Human-readable name of the permission (role). */
            permissionName: string;
            /** ID of the permission (also referred to as "role" in the dashboard). */
            permissionId: string;
            /** ID of the permission assignment. */
            assignmentId: string;
            /** List of API operations granted by this permission. */
            operations?: string[] | undefined;
        }[];
        /** Public key associated with the access token. */
        publicKey: string;
        /** Token id. */
        tokenId: string;
    }[];
};

export type GetServiceAccountRequest = GetServiceAccountParams

export type GetUserParams = {
    /** User id. */
    userId: string;
};

export type GetUserResponse = {
    /** Username/identifier of the user (any unique string accepted, e.g. your internal user ID or email). */
    username: string;
    /** Display name of the user. */
    name: string;
    /** User id. */
    userId: string;
    /** User kind. */
    kind: "DfnsStaff" | "AccountUser" | "CustomerEmployee" | "EndUser";
    /** UUID of the user's primary credential. */
    credentialUuid: string;
    /** Organization id. */
    orgId?: string | undefined;
    /** Account id. */
    accountId?: string | undefined;
    /** @deprecated - Flat list of API operations the user has access to. */
    permissions?: string[] | undefined;
    /** Whether the user is active. */
    isActive: boolean;
    /** Whether the user is a service account. */
    isServiceAccount: boolean;
    /** Whether the user has completed registration. */
    isRegistered: boolean;
    /** Whether the user must authenticate via SSO. */
    isSSORequired: boolean;
    /** Permissions (roles) assigned to the user. */
    permissionAssignments: {
        /** Human-readable name of the permission (role). */
        permissionName: string;
        /** ID of the permission (also referred to as "role" in the dashboard). */
        permissionId: string;
        /** ID of the permission assignment. */
        assignmentId: string;
        /** List of API operations granted by this permission. */
        operations?: string[] | undefined;
    }[];
};

export type GetUserRequest = GetUserParams

export type InviteAccountUserBody = {
    /** Email address of the existing Account User. */
    email: string;
    /** The kind of user being invited. It can only be "`AccountUser`" */
    kind: "AccountUser";
};

export type InviteAccountUserResponse = {};

export type InviteAccountUserRequest = { body: InviteAccountUserBody }

export type ListApplicationsResponse = {
    /** Current page items. */
    items: {
        /** ID of the application (deprecated). */
        appId: string;
        kind: "ServerSideApplication" | "ClientSideApplication";
        /** Organization id. */
        orgId: string;
        /** Expected relying party ID for webauthn (deprecated). */
        expectedRpId?: string | undefined;
        /** Human-readable name of the application. */
        name: string;
        /** Whether the application is active. */
        isActive: boolean;
        /** Expected origin for webauthn (deprecated). */
        expectedOrigin?: string | undefined;
        /** Permissions (roles) assigned to the application. */
        permissionAssignments: {
            /** Human-readable name of the permission (role). */
            permissionName: string;
            /** ID of the permission (also referred to as "role" in the dashboard). */
            permissionId: string;
            /** ID of the permission assignment. */
            assignmentId: string;
            /** List of API operations granted by this permission. */
            operations?: string[] | undefined;
        }[];
        /** Access tokens associated with the application. */
        accessTokens: {
            /** The access token. Only returned at creation time. */
            accessToken?: string | undefined;
            dateCreated: string;
            /** ID of the credential associated with the access token. */
            credId: string;
            /** Whether the access token is active. */
            isActive: boolean;
            /** Access token kind. */
            kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
            /** User id. */
            linkedUserId: string;
            /** ID of the application the access token is linked to. */
            linkedAppId: string;
            /** Human-readable name of the access token. */
            name: string;
            /** Organization id. */
            orgId: string;
            /** Permissions (roles) assigned to the access token. */
            permissionAssignments: {
                /** Human-readable name of the permission (role). */
                permissionName: string;
                /** ID of the permission (also referred to as "role" in the dashboard). */
                permissionId: string;
                /** ID of the permission assignment. */
                assignmentId: string;
                /** List of API operations granted by this permission. */
                operations?: string[] | undefined;
            }[];
            /** Public key associated with the access token. */
            publicKey: string;
            /** Token id. */
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
    /** Current page items. */
    items: {
        kind: "Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey";
        /** Credential ID from the WebAuthn authenticator (base64url). */
        credentialId: string;
        /** Dfns-internal UUID of the credential. */
        credentialUuid: string;
        dateCreated: string;
        /** Whether the credential is active. */
        isActive: boolean;
        /** Human-readable name of the credential. */
        name: string;
        /** Public key of the credential. */
        publicKey: string;
        /** Relying party identifier associated with the credential. */
        relyingPartyId: string;
        /** Origin where the credential was created. */
        origin: string;
    }[];
};

export type ListPersonalAccessTokensResponse = {
    /** Current page items. */
    items: {
        /** The access token. Only returned at creation time. */
        accessToken?: string | undefined;
        dateCreated: string;
        /** ID of the credential associated with the access token. */
        credId: string;
        /** Whether the access token is active. */
        isActive: boolean;
        /** Access token kind. */
        kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
        /** User id. */
        linkedUserId: string;
        /** ID of the application the access token is linked to. */
        linkedAppId: string;
        /** Human-readable name of the access token. */
        name: string;
        /** Organization id. */
        orgId: string;
        /** Permissions (roles) assigned to the access token. */
        permissionAssignments: {
            /** Human-readable name of the permission (role). */
            permissionName: string;
            /** ID of the permission (also referred to as "role" in the dashboard). */
            permissionId: string;
            /** ID of the permission assignment. */
            assignmentId: string;
            /** List of API operations granted by this permission. */
            operations?: string[] | undefined;
        }[];
        /** Public key associated with the access token. */
        publicKey: string;
        /** Token id. */
        tokenId: string;
    }[];
};

export type ListServiceAccountsResponse = {
    /** Current page items. */
    items: {
        userInfo: {
            /** Username/identifier of the user (any unique string accepted, e.g. your internal user ID or email). */
            username: string;
            /** Display name of the user. */
            name: string;
            /** User id. */
            userId: string;
            /** User kind. */
            kind: "DfnsStaff" | "AccountUser" | "CustomerEmployee" | "EndUser";
            /** UUID of the user's primary credential. */
            credentialUuid: string;
            /** Organization id. */
            orgId?: string | undefined;
            /** Account id. */
            accountId?: string | undefined;
            /** @deprecated - Flat list of API operations the user has access to. */
            permissions?: string[] | undefined;
            /** Whether the user is active. */
            isActive: boolean;
            /** Whether the user is a service account. */
            isServiceAccount: boolean;
            /** Whether the user has completed registration. */
            isRegistered: boolean;
            /** Permissions (roles) assigned to the user. */
            permissionAssignments: {
                /** Human-readable name of the permission (role). */
                permissionName: string;
                /** ID of the permission (also referred to as "role" in the dashboard). */
                permissionId: string;
                /** ID of the permission assignment. */
                assignmentId: string;
                /** List of API operations granted by this permission. */
                operations?: string[] | undefined;
            }[];
        };
        accessTokens: {
            /** The access token. Only returned at creation time. */
            accessToken?: string | undefined;
            dateCreated: string;
            /** ID of the credential associated with the access token. */
            credId: string;
            /** Whether the access token is active. */
            isActive: boolean;
            /** Access token kind. */
            kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
            /** User id. */
            linkedUserId: string;
            /** ID of the application the access token is linked to. */
            linkedAppId: string;
            /** Human-readable name of the access token. */
            name: string;
            /** Organization id. */
            orgId: string;
            /** Permissions (roles) assigned to the access token. */
            permissionAssignments: {
                /** Human-readable name of the permission (role). */
                permissionName: string;
                /** ID of the permission (also referred to as "role" in the dashboard). */
                permissionId: string;
                /** ID of the permission assignment. */
                assignmentId: string;
                /** List of API operations granted by this permission. */
                operations?: string[] | undefined;
            }[];
            /** Public key associated with the access token. */
            publicKey: string;
            /** Token id. */
            tokenId: string;
        }[];
    }[];
};

export type ListUsersQuery = {
    /** Maximum number of items to return. */
    limit?: number | undefined;
    /** Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. */
    paginationToken?: string | undefined;
    /** Filter users by kind. */
    kind?: ("CustomerEmployee" | "EndUser") | undefined;
};

export type ListUsersResponse = {
    /** Current page items. */
    items: {
        /** Username/identifier of the user (any unique string accepted, e.g. your internal user ID or email). */
        username: string;
        /** Display name of the user. */
        name: string;
        /** User id. */
        userId: string;
        /** User kind. */
        kind: "DfnsStaff" | "AccountUser" | "CustomerEmployee" | "EndUser";
        /** UUID of the user's primary credential. */
        credentialUuid: string;
        /** Organization id. */
        orgId?: string | undefined;
        /** Account id. */
        accountId?: string | undefined;
        /** @deprecated - Flat list of API operations the user has access to. */
        permissions?: string[] | undefined;
        /** Whether the user is active. */
        isActive: boolean;
        /** Whether the user is a service account. */
        isServiceAccount: boolean;
        /** Whether the user has completed registration. */
        isRegistered: boolean;
        /** Whether the user must authenticate via SSO. */
        isSSORequired: boolean;
        /** Permissions (roles) assigned to the user. */
        permissionAssignments: {
            /** Human-readable name of the permission (role). */
            permissionName: string;
            /** ID of the permission (also referred to as "role" in the dashboard). */
            permissionId: string;
            /** ID of the permission assignment. */
            assignmentId: string;
            /** List of API operations granted by this permission. */
            operations?: string[] | undefined;
        }[];
    }[];
    /** token to use as `paginationToken` to request the next page. */
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
        /** User password. */
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
        /** TOTP one-time code. */
        otpCode: string;
    }) | undefined;
};

export type LoginResponse = {
    /** Authentication token issued to the user. */
    token: string;
} | {
    /** Identifier of the SSO client to use to complete the login flow. */
    ssoClientId: string;
};

export type LoginRequest = { body: LoginBody }

export type LogoutBody = {
    allSessions?: boolean | undefined;
} | undefined;

export type LogoutResponse = {
    /** Human-readable success message. */
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
                /** Base64url-encoded id of the credential returned by the user's WebAuthn client. */
                credId: string;
                /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object returned by the user's WebAuthn client. */
                clientData: string;
                /** Base64url-encoded attestation data returned by the user's WebAuthn client. */
                attestationData: string;
            };
            /** Human-readable name to assign to the credential. */
            credentialName?: string | undefined;
        } | {
            credentialKind: "Key";
            credentialInfo: {
                /** Base64url-encoded id of the credential. */
                credId: string;
                /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object. */
                clientData: string;
                /** Base64url-encoded public key. */
                attestationData: string;
            };
            /** Human-readable name to assign to the credential. */
            credentialName?: string | undefined;
        } | {
            credentialKind: "Password";
            credentialInfo: {
                /** User password. */
                password: string;
            };
            /** Human-readable name to assign to the credential. */
            credentialName?: string | undefined;
        } | {
            credentialKind: "PasswordProtectedKey";
            credentialInfo: {
                /** Base64url-encoded id of the credential. */
                credId: string;
                /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object. */
                clientData: string;
                /** Base64url-encoded public key. */
                attestationData: string;
            };
            /** User-encrypted private key. Dfns does not have the password to decrypt it. */
            encryptedPrivateKey: string;
            /** Human-readable name to assign to the credential. */
            credentialName?: string | undefined;
        };
        secondFactorCredential?: ({
            credentialKind: "Fido2";
            credentialInfo: {
                /** Base64url-encoded id of the credential returned by the user's WebAuthn client. */
                credId: string;
                /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object returned by the user's WebAuthn client. */
                clientData: string;
                /** Base64url-encoded attestation data returned by the user's WebAuthn client. */
                attestationData: string;
            };
            /** Human-readable name to assign to the credential. */
            credentialName?: string | undefined;
        } | {
            credentialKind: "Key";
            credentialInfo: {
                /** Base64url-encoded id of the credential. */
                credId: string;
                /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object. */
                clientData: string;
                /** Base64url-encoded public key. */
                attestationData: string;
            };
            /** Human-readable name to assign to the credential. */
            credentialName?: string | undefined;
        } | {
            credentialKind: "Totp";
            credentialInfo: {
                /** TOTP one-time code. */
                otpCode: string;
            };
            /** Human-readable name to assign to the credential. */
            credentialName?: string | undefined;
        } | {
            credentialKind: "PasswordProtectedKey";
            credentialInfo: {
                /** Base64url-encoded id of the credential. */
                credId: string;
                /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object. */
                clientData: string;
                /** Base64url-encoded public key. */
                attestationData: string;
            };
            /** User-encrypted private key. Dfns does not have the password to decrypt it. */
            encryptedPrivateKey: string;
            /** Human-readable name to assign to the credential. */
            credentialName?: string | undefined;
        }) | undefined;
        /** Register a recovery key. See [Account Recovery](https://docs.dfns.co/api-reference/auth/account-recovery) for more details. */
        recoveryCredential?: {
            credentialKind: "RecoveryKey";
            credentialInfo: {
                /** Base64url-encoded id of the recovery credential. */
                credId: string;
                /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object. */
                clientData: string;
                /** Base64url-encoded public key. */
                attestationData: string;
            };
            /** User-encrypted private key for the recovery credential. */
            encryptedPrivateKey?: string | undefined;
            /** Human-readable name to assign to the credential. */
            credentialName?: string | undefined;
        } | undefined;
    };
};

export type RecoverResponse = {
    credential: {
        /** UUID of the credential that was registered. */
        uuid: string;
        /** Kind of credential that was registered. */
        kind: "Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey";
        /** Human-readable name of the credential. */
        name: string;
    };
    user: {
        /** User id. */
        id: string;
        /** Username/identifier of the user. */
        username: string;
        /** Organization id. */
        orgId?: string | undefined;
        /** Account id. */
        accountId?: string | undefined;
    };
};

export type RecoverRequest = { body: RecoverBody }

export type RegisterBody = {
    firstFactorCredential: {
        credentialKind: "Fido2";
        credentialInfo: {
            /** Base64url-encoded id of the credential returned by the user's WebAuthn client. */
            credId: string;
            /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object returned by the user's WebAuthn client. */
            clientData: string;
            /** Base64url-encoded attestation data returned by the user's WebAuthn client. */
            attestationData: string;
        };
        /** Human-readable name to assign to the credential. */
        credentialName?: string | undefined;
    } | {
        credentialKind: "Key";
        credentialInfo: {
            /** Base64url-encoded id of the credential. */
            credId: string;
            /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object. */
            clientData: string;
            /** Base64url-encoded public key. */
            attestationData: string;
        };
        /** Human-readable name to assign to the credential. */
        credentialName?: string | undefined;
    } | {
        credentialKind: "Password";
        credentialInfo: {
            /** User password. */
            password: string;
        };
        /** Human-readable name to assign to the credential. */
        credentialName?: string | undefined;
    } | {
        credentialKind: "PasswordProtectedKey";
        credentialInfo: {
            /** Base64url-encoded id of the credential. */
            credId: string;
            /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object. */
            clientData: string;
            /** Base64url-encoded public key. */
            attestationData: string;
        };
        /** User-encrypted private key. Dfns does not have the password to decrypt it. */
        encryptedPrivateKey: string;
        /** Human-readable name to assign to the credential. */
        credentialName?: string | undefined;
    };
    secondFactorCredential?: ({
        credentialKind: "Fido2";
        credentialInfo: {
            /** Base64url-encoded id of the credential returned by the user's WebAuthn client. */
            credId: string;
            /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object returned by the user's WebAuthn client. */
            clientData: string;
            /** Base64url-encoded attestation data returned by the user's WebAuthn client. */
            attestationData: string;
        };
        /** Human-readable name to assign to the credential. */
        credentialName?: string | undefined;
    } | {
        credentialKind: "Key";
        credentialInfo: {
            /** Base64url-encoded id of the credential. */
            credId: string;
            /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object. */
            clientData: string;
            /** Base64url-encoded public key. */
            attestationData: string;
        };
        /** Human-readable name to assign to the credential. */
        credentialName?: string | undefined;
    } | {
        credentialKind: "Totp";
        credentialInfo: {
            /** TOTP one-time code. */
            otpCode: string;
        };
        /** Human-readable name to assign to the credential. */
        credentialName?: string | undefined;
    } | {
        credentialKind: "PasswordProtectedKey";
        credentialInfo: {
            /** Base64url-encoded id of the credential. */
            credId: string;
            /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object. */
            clientData: string;
            /** Base64url-encoded public key. */
            attestationData: string;
        };
        /** User-encrypted private key. Dfns does not have the password to decrypt it. */
        encryptedPrivateKey: string;
        /** Human-readable name to assign to the credential. */
        credentialName?: string | undefined;
    }) | undefined;
    /** Register a recovery key. See [Account Recovery](https://docs.dfns.co/api-reference/auth/account-recovery) for more details. */
    recoveryCredential?: {
        credentialKind: "RecoveryKey";
        credentialInfo: {
            /** Base64url-encoded id of the recovery credential. */
            credId: string;
            /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object. */
            clientData: string;
            /** Base64url-encoded public key. */
            attestationData: string;
        };
        /** User-encrypted private key for the recovery credential. */
        encryptedPrivateKey?: string | undefined;
        /** Human-readable name to assign to the credential. */
        credentialName?: string | undefined;
    } | undefined;
};

export type RegisterResponse = {
    credential: {
        /** UUID of the credential that was registered. */
        uuid: string;
        /** Kind of credential that was registered. */
        kind: "Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey";
        /** Human-readable name of the credential. */
        name: string;
    };
    user: {
        /** User id. */
        id: string;
        /** Username/identifier of the user. */
        username: string;
        /** Organization id. */
        orgId?: string | undefined;
        /** Account id. */
        accountId?: string | undefined;
    };
};

export type RegisterRequest = { body: RegisterBody }

export type RegisterEndUserBody = {
    firstFactorCredential: {
        credentialKind: "Fido2";
        credentialInfo: {
            /** Base64url-encoded id of the credential returned by the user's WebAuthn client. */
            credId: string;
            /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object returned by the user's WebAuthn client. */
            clientData: string;
            /** Base64url-encoded attestation data returned by the user's WebAuthn client. */
            attestationData: string;
        };
        /** Human-readable name to assign to the credential. */
        credentialName?: string | undefined;
    } | {
        credentialKind: "Key";
        credentialInfo: {
            /** Base64url-encoded id of the credential. */
            credId: string;
            /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object. */
            clientData: string;
            /** Base64url-encoded public key. */
            attestationData: string;
        };
        /** Human-readable name to assign to the credential. */
        credentialName?: string | undefined;
    } | {
        credentialKind: "Password";
        credentialInfo: {
            /** User password. */
            password: string;
        };
        /** Human-readable name to assign to the credential. */
        credentialName?: string | undefined;
    } | {
        credentialKind: "PasswordProtectedKey";
        credentialInfo: {
            /** Base64url-encoded id of the credential. */
            credId: string;
            /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object. */
            clientData: string;
            /** Base64url-encoded public key. */
            attestationData: string;
        };
        /** User-encrypted private key. Dfns does not have the password to decrypt it. */
        encryptedPrivateKey: string;
        /** Human-readable name to assign to the credential. */
        credentialName?: string | undefined;
    };
    secondFactorCredential?: ({
        credentialKind: "Fido2";
        credentialInfo: {
            /** Base64url-encoded id of the credential returned by the user's WebAuthn client. */
            credId: string;
            /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object returned by the user's WebAuthn client. */
            clientData: string;
            /** Base64url-encoded attestation data returned by the user's WebAuthn client. */
            attestationData: string;
        };
        /** Human-readable name to assign to the credential. */
        credentialName?: string | undefined;
    } | {
        credentialKind: "Key";
        credentialInfo: {
            /** Base64url-encoded id of the credential. */
            credId: string;
            /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object. */
            clientData: string;
            /** Base64url-encoded public key. */
            attestationData: string;
        };
        /** Human-readable name to assign to the credential. */
        credentialName?: string | undefined;
    } | {
        credentialKind: "Totp";
        credentialInfo: {
            /** TOTP one-time code. */
            otpCode: string;
        };
        /** Human-readable name to assign to the credential. */
        credentialName?: string | undefined;
    } | {
        credentialKind: "PasswordProtectedKey";
        credentialInfo: {
            /** Base64url-encoded id of the credential. */
            credId: string;
            /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object. */
            clientData: string;
            /** Base64url-encoded public key. */
            attestationData: string;
        };
        /** User-encrypted private key. Dfns does not have the password to decrypt it. */
        encryptedPrivateKey: string;
        /** Human-readable name to assign to the credential. */
        credentialName?: string | undefined;
    }) | undefined;
    /** Register a recovery key. See [Account Recovery](https://docs.dfns.co/api-reference/auth/account-recovery) for more details. */
    recoveryCredential?: {
        credentialKind: "RecoveryKey";
        credentialInfo: {
            /** Base64url-encoded id of the recovery credential. */
            credId: string;
            /** Base64url-encoded, stringified JSON [client data](https://docs.dfns.co/api-reference/auth/credentials-data#client-data) object. */
            clientData: string;
            /** Base64url-encoded public key. */
            attestationData: string;
        };
        /** User-encrypted private key for the recovery credential. */
        encryptedPrivateKey?: string | undefined;
        /** Human-readable name to assign to the credential. */
        credentialName?: string | undefined;
    } | undefined;
    wallets: {
        network: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "BesuTestnet" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | ("KeyECDSA" | "KeyEdDSA" | "KeyECDSAStark");
        /** Wallet nickname. */
        name?: string | undefined;
    }[];
};

export type RegisterEndUserResponse = {
    credential: {
        /** UUID of the credential that was registered. */
        uuid: string;
        /** Kind of credential that was registered. */
        kind: "Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey" | "PasswordProtectedKey";
        /** Human-readable name of the credential. */
        name: string;
    };
    user: {
        /** User id. */
        id: string;
        /** Username/identifier of the user. */
        username: string;
        /** Organization id. */
        orgId?: string | undefined;
        /** Account id. */
        accountId?: string | undefined;
    };
    authentication: {
        /** Authentication token issued to the user. */
        token: string;
    };
    wallets: {
        /** ID of the wallet. */
        id: string;
        /** Network this wallet is bound to. */
        network: ("Algorand" | "AlgorandTestnet" | "Aptos" | "AptosTestnet" | "ArbitrumOne" | "ArbitrumGoerli" | "ArbitrumSepolia" | "ArcTestnet" | "Areum" | "AvalancheC" | "AvalancheCFuji" | "Adi" | "AdiTestnet" | "AdiTestnetAb" | "BabylonGenesis" | "BabylonTestnet5" | "Base" | "BaseGoerli" | "BaseSepolia" | "Berachain" | "BerachainBArtio" | "BerachainBepolia" | "BesuTestnet" | "Bitcoin" | "BitcoinSignet" | "BitcoinTestnet3" | "BitcoinTestnet4" | "BitcoinCash" | "BitcoinCashTestnet" | "Bob" | "BobSepolia" | "Bsc" | "BscTestnet" | "Canton" | "CantonDevnet" | "CantonTestnet" | "Cardano" | "CardanoPreprod" | "Concordium" | "ConcordiumTestnet" | "Celo" | "CeloAlfajores" | "Codex" | "CodexSepolia" | "CosmosHub4" | "CosmosIcsTestnet" | "Dogecoin" | "DogecoinTestnet" | "Ethereum" | "EthereumClassic" | "EthereumClassicMordor" | "EthereumGoerli" | "EthereumSepolia" | "EthereumHolesky" | "EthereumHoodi" | "FantomOpera" | "FantomTestnet" | "FlareC" | "FlareCCoston2" | "FlowEvm" | "FlowEvmTestnet" | "IconTestnet" | "Hedera" | "HederaTestnet" | "Ink" | "InkSepolia" | "InternetComputer" | "Ion" | "IonTestnet" | "Iota" | "IotaTestnet" | "IotaZodianet" | "Kaspa" | "KaspaTestnet11" | "Kusama" | "KusamaAssetHub" | "Litecoin" | "LitecoinTestnet" | "Movement" | "MovementTestnet" | "Near" | "NearTestnet" | "Optimism" | "OptimismGoerli" | "OptimismSepolia" | "Origyn" | "Plasma" | "PlasmaTestnet" | "Plume" | "PlumeSepolia" | "Paseo" | "PaseoAssetHub" | "Polkadot" | "PolkadotAssetHub" | "Polygon" | "PolygonAmoy" | "PolygonMumbai" | "Polymesh" | "PolymeshTestnet" | "Race" | "RaceSepolia" | "SeiAtlantic2" | "SeiPacific1" | "Solana" | "SolanaDevnet" | "Sonic" | "SonicTestnet" | "Starknet" | "StarknetSepolia" | "Stellar" | "StellarTestnet" | "Sui" | "SuiTestnet" | "Tezos" | "TezosGhostnet" | "TezosShadownet" | "Tempo" | "TempoAndantino" | "TempoModerato" | "Tsc" | "TscTestnet1" | "Ton" | "TonTestnet" | "Tron" | "TronNile" | "Westend" | "WestendAssetHub" | "Xdc" | "XdcApothem" | "XLayer" | "XLayerSepolia" | "XrpLedger" | "XrpLedgerTestnet") | ("KeyECDSA" | "KeyEdDSA" | "KeyECDSAStark");
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
    /** Username/identifier of the user (any unique string accepted, e.g. your internal user ID or email). */
    username: string;
    /** Organization id. */
    orgId?: string | undefined;
    /** Account id. */
    accountId?: string | undefined;
};

export type ResendRegistrationCodeResponse = {
    /** Human-readable success message. */
    message: string;
};

export type ResendRegistrationCodeRequest = { body: ResendRegistrationCodeBody }

export type SendLoginCodeBody = {
    /** Username/identifier of the user to send the login code to. */
    username: string;
    /** Organization id. */
    orgId?: string | undefined;
    /** Account id. */
    accountId?: string | undefined;
};

export type SendLoginCodeResponse = {
    /** Human-readable success message. */
    message: string;
};

export type SendLoginCodeRequest = { body: SendLoginCodeBody }

export type SendRecoveryCodeBody = {
    /** Username/identifier of the user to send the recovery code to. */
    username: string;
    /** Organization id. */
    orgId?: string | undefined;
    /** Account id. */
    accountId?: string | undefined;
};

export type SendRecoveryCodeResponse = {
    /** Human-readable success message. */
    message: string;
};

export type SendRecoveryCodeRequest = { body: SendRecoveryCodeBody }

export type SocialLoginBody = {
    /** Organization id. */
    orgId?: string | undefined;
    /** Social login provider used to issue the JWT. */
    socialLoginProviderKind: "Oidc";
    /** JWT id token issued by the social login provider. */
    idToken: string;
};

export type SocialLoginResponse = {
    /** Authentication token issued to the user. */
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
    /** Authentication token issued to the user. */
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
    /** Updated human-readable name of the Personal Access Token. */
    name?: string | undefined;
    /** Value that can be used to correlate the entity with an external system. */
    externalId?: string | undefined;
};

export type UpdatePersonalAccessTokenParams = {
    /** Token id. */
    tokenId: string;
};

export type UpdatePersonalAccessTokenResponse = {
    /** The access token. Only returned at creation time. */
    accessToken?: string | undefined;
    dateCreated: string;
    /** ID of the credential associated with the access token. */
    credId: string;
    /** Whether the access token is active. */
    isActive: boolean;
    /** Access token kind. */
    kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
    /** User id. */
    linkedUserId: string;
    /** ID of the application the access token is linked to. */
    linkedAppId: string;
    /** Human-readable name of the access token. */
    name: string;
    /** Organization id. */
    orgId: string;
    /** Permissions (roles) assigned to the access token. */
    permissionAssignments: {
        /** Human-readable name of the permission (role). */
        permissionName: string;
        /** ID of the permission (also referred to as "role" in the dashboard). */
        permissionId: string;
        /** ID of the permission assignment. */
        assignmentId: string;
        /** List of API operations granted by this permission. */
        operations?: string[] | undefined;
    }[];
    /** Public key associated with the access token. */
    publicKey: string;
    /** Token id. */
    tokenId: string;
};

export type UpdatePersonalAccessTokenRequest = UpdatePersonalAccessTokenParams & { body: UpdatePersonalAccessTokenBody }

export type UpdateServiceAccountBody = {
    /** Updated human-readable name of the Service Account. */
    name?: string | undefined;
    /** Value that can be used to correlate the entity with an external system. */
    externalId?: string | undefined;
};

export type UpdateServiceAccountParams = {
    /** ID of the service account. */
    serviceAccountId: string;
};

export type UpdateServiceAccountResponse = {
    userInfo: {
        /** Username/identifier of the user (any unique string accepted, e.g. your internal user ID or email). */
        username: string;
        /** Display name of the user. */
        name: string;
        /** User id. */
        userId: string;
        /** User kind. */
        kind: "DfnsStaff" | "AccountUser" | "CustomerEmployee" | "EndUser";
        /** UUID of the user's primary credential. */
        credentialUuid: string;
        /** Organization id. */
        orgId?: string | undefined;
        /** Account id. */
        accountId?: string | undefined;
        /** @deprecated - Flat list of API operations the user has access to. */
        permissions?: string[] | undefined;
        /** Whether the user is active. */
        isActive: boolean;
        /** Whether the user is a service account. */
        isServiceAccount: boolean;
        /** Whether the user has completed registration. */
        isRegistered: boolean;
        /** Permissions (roles) assigned to the user. */
        permissionAssignments: {
            /** Human-readable name of the permission (role). */
            permissionName: string;
            /** ID of the permission (also referred to as "role" in the dashboard). */
            permissionId: string;
            /** ID of the permission assignment. */
            assignmentId: string;
            /** List of API operations granted by this permission. */
            operations?: string[] | undefined;
        }[];
    };
    accessTokens: {
        /** The access token. Only returned at creation time. */
        accessToken?: string | undefined;
        dateCreated: string;
        /** ID of the credential associated with the access token. */
        credId: string;
        /** Whether the access token is active. */
        isActive: boolean;
        /** Access token kind. */
        kind: "Pat" | "ServiceAccount" | "Token" | "Code" | "Recovery" | "Temp" | "Application";
        /** User id. */
        linkedUserId: string;
        /** ID of the application the access token is linked to. */
        linkedAppId: string;
        /** Human-readable name of the access token. */
        name: string;
        /** Organization id. */
        orgId: string;
        /** Permissions (roles) assigned to the access token. */
        permissionAssignments: {
            /** Human-readable name of the permission (role). */
            permissionName: string;
            /** ID of the permission (also referred to as "role" in the dashboard). */
            permissionId: string;
            /** ID of the permission assignment. */
            assignmentId: string;
            /** List of API operations granted by this permission. */
            operations?: string[] | undefined;
        }[];
        /** Public key associated with the access token. */
        publicKey: string;
        /** Token id. */
        tokenId: string;
    }[];
};

export type UpdateServiceAccountRequest = UpdateServiceAccountParams & { body: UpdateServiceAccountBody }

export type UpdateUserBody = {
    isSSORequired: boolean;
};

export type UpdateUserParams = {
    /** User id. */
    userId: string;
};

export type UpdateUserResponse = {
    /** Username/identifier of the user (any unique string accepted, e.g. your internal user ID or email). */
    username: string;
    /** Display name of the user. */
    name: string;
    /** User id. */
    userId: string;
    /** User kind. */
    kind: "DfnsStaff" | "AccountUser" | "CustomerEmployee" | "EndUser";
    /** UUID of the user's primary credential. */
    credentialUuid: string;
    /** Organization id. */
    orgId?: string | undefined;
    /** Account id. */
    accountId?: string | undefined;
    /** @deprecated - Flat list of API operations the user has access to. */
    permissions?: string[] | undefined;
    /** Whether the user is active. */
    isActive: boolean;
    /** Whether the user is a service account. */
    isServiceAccount: boolean;
    /** Whether the user has completed registration. */
    isRegistered: boolean;
    /** Whether the user must authenticate via SSO. */
    isSSORequired: boolean;
    /** Permissions (roles) assigned to the user. */
    permissionAssignments: {
        /** Human-readable name of the permission (role). */
        permissionName: string;
        /** ID of the permission (also referred to as "role" in the dashboard). */
        permissionId: string;
        /** ID of the permission assignment. */
        assignmentId: string;
        /** List of API operations granted by this permission. */
        operations?: string[] | undefined;
    }[];
};

export type UpdateUserRequest = UpdateUserParams & { body: UpdateUserBody }

