// Polkadot Signer exports
export { DfnsWallet, DfnsMultiWalletSigner, type DfnsWalletMetadata } from './wallet'

// Signing managers and base classes
export {
  DfnsSigningManagerBase,
  DfnsBrowserSigningManager,
  DfnsServiceAccountSigningManager,
  DfnsExternalSigningManager,
} from './signing-manager'

// Credential signers
export {
  DfnsExternalCredentialSigner,
  type PendingChallenge,
  type ChallengeResult,
  type DfnsExternalCredentialSignerOptions,
} from './credential-signers'

// All type exports - consolidated from types/index.ts
export type {
  // Core types
  InjectedAccountWithMeta,
  KeypairType,
  DfnsWalletOptions,
  WalletMetadata,
  ValidatedPolymeshWallet,

  // Signing manager types
  PolymeshNetwork,
  WalletFilter,
  LogoutCallback,

  // Signing manager options
  DfnsServiceAccountSigningManagerOptions,
  DfnsBrowserSigningManagerOptions,
  DfnsExternalSigningManagerOptions,
} from './types'
