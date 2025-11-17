/**
 * Wallet implementations for DFNS Polymesh signing
 *
 * This module exports both single-wallet and multi-wallet PolkadotSigner implementations:
 * - DfnsWallet: Signs with a specific wallet
 * - DfnsMultiWalletSigner: Delegates to appropriate wallet based on address
 */

export { DfnsWallet } from './wallet'
export { DfnsMultiWalletSigner } from './multi-wallet-signer'
export type { DfnsWalletMetadata } from '../types'
