import { DfnsApiClient } from '@dfns/sdk'
import { GetWalletResponse } from '@dfns/sdk/types/wallets'
import { Fido2Assertion, CredentialSigner } from '@dfns/sdk'

/**
 * WebAuthn signer configuration interface
 * Based on the WebAuthnSignerConf from @dfns/sdk-browser
 */
export interface WebAuthnSignerConf {
  /**
   * The "relying party" identifies your application to users, when users create/use passkeys. (Read more [here](https://www.w3.org/TR/webauthn-2/#relying-party)).
   * - id: The relying party identifier is a valid domain string identifying the WebAuthn Relying Party.
   * In other words, its the domain your application is running on, which will be tied to the passkeys that users create.
   * We advise to use the root domain, not the full domain (eg `acme.com`, not `app.acme.com` nor `foo.app.acme.com`), that way, passkeys created
   * by your users can be re-used on other subdomains (eg. on `foo.acme.com` and `bar.acme.com`) in the future. Read more [here](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions#rp).
   * - name: A string representing the name of the relying party (e.g. "Acme"). This is the name the user will be presented with when creating or validating a WebAuthn operation.
   */
  relyingParty: { id: string; name: string }
  /**
   * Timeout to use for navigator.credentials calls. That's the time after which if user did not successfully
   * select and use his passkey, an error will be thrown by webauthn client. Read more [here](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions#timeout).
   * */
  timeout?: number
}

export interface InjectedAccountWithMeta {
  address: string
  meta: {
    genesisHash?: string | null
    name?: string
    source: string
  }
  type?: KeypairType
}

export type KeypairType = 'ed25519' | 'sr25519' | 'ecdsa' | 'ethereum'

export type DfnsWalletOptions = {
  walletId: string
  dfnsClient: DfnsApiClient
  metadata?: WalletMetadata
}

export type WalletMetadata = {
  id: string
  name: string
  network: string
  address: string
}

/**
 * A narrowed type representing a validated Polymesh wallet from DFNS
 *
 * This type ensures that all wallets have:
 * - Active status
 * - Polymesh or PolymeshTestnet network
 * - Ed25519 signing key
 * - Non-null address
 */
export type ValidatedPolymeshWallet = GetWalletResponse & {
  status: 'Active'
  network: 'Polymesh' | 'PolymeshTestnet'
  address: string // Required (not optional)
  signingKey: {
    scheme: 'EdDSA'
    curve: 'ed25519'
    publicKey: string
  }
}

/**
 * Wallet metadata for DfnsWallet creation
 * 
 * Can be either a full ValidatedPolymeshWallet or minimal metadata
 * with just the essential properties required for signing operations.
 */
export type DfnsWalletMetadata = ValidatedPolymeshWallet | {
  /** Wallet ID from DFNS */
  id: string
  /** Wallet address (must be valid Polymesh address) */
  address: string
  /** Signing key information */
  signingKey: {
    id: string
    scheme: 'EdDSA'
    curve: 'ed25519'
    publicKey: string
    delegatedTo?: string
  }
}

// Signing Manager Types
export type PolymeshNetwork = 'Polymesh' | 'PolymeshTestnet'

export type WalletFilter = { type: 'user'; owner: string } | { type: 'wallet'; walletId: string } | { type: 'all' }

/**
 * Logout callback function type
 * Called when the user is logged out for any reason
 */
export type LogoutCallback = () => void

// Signing Manager Options Types
export interface DfnsServiceAccountSigningManagerOptions {
  dfnsClient: DfnsApiClient
  network?: PolymeshNetwork
  userId?: string
  walletId?: string
}

export interface DfnsBrowserSigningManagerOptions {
  dfnsClient: DfnsApiClient
  storage: Storage | null
  network?: PolymeshNetwork
  walletId?: string
}

export interface DfnsExternalSigningManagerOptions {
  dfnsClient: DfnsApiClient
  credentialSigner: CredentialSigner<Fido2Assertion>
  network?: PolymeshNetwork
  userId?: string
  walletId?: string
}
