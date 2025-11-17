import { DfnsApiClient, DfnsError } from '@dfns/sdk'
import { HexString } from '@polkadot/util/types'
import { u8aConcat, u8aToHex, hexToU8a } from '@polkadot/util'
import {
  PolkadotSigner,
  SignerPayloadRaw,
  SignerPayloadJSON,
  SignerResult,
} from '@polymeshassociation/signing-manager-types'
import { DfnsWalletMetadata } from '../types'
import { assertSignResponseSuccessful, sanitizePayload, validateBytesData, validatePolymeshWallet } from '../utils'

/**
 * Core DfnsWallet implementation supporting both direct usage and signing manager integration.
 * Uses factory methods for different creation patterns.
 */
export class DfnsWallet implements PolkadotSigner {
  public readonly address: string
  private readonly DfnsApiClient: DfnsApiClient
  private readonly walletId: string
  private readonly metadata: DfnsWalletMetadata
  private id = 0

  /**
   * Private constructor - use static factory methods instead.
   * @param metadata - Wallet metadata from DFNS API
   * @param DfnsApiClient - DFNS API client instance
   */
  private constructor(metadata: DfnsWalletMetadata, DfnsApiClient: DfnsApiClient) {
    this.metadata = metadata
    if (!metadata.address) {
      throw new DfnsError(-1, 'wallet address is required', { walletId: metadata.id })
    }
    this.address = metadata.address
    this.DfnsApiClient = DfnsApiClient
    this.walletId = metadata.id
  }

  /**
   * Create a DfnsWallet instance from wallet metadata
   *
   * Accepts either full ValidatedPolymeshWallet (from signing managers) or
   * minimal DfnsWalletMetadata (for direct usage with essential properties only).
   *
   * @param metadata - Wallet metadata (full or minimal)
   * @param DfnsApiClient - DFNS API client instance
   * @returns DfnsWallet instance ready for signing
   */
  public static createFromMetadata(metadata: DfnsWalletMetadata, DfnsApiClient: DfnsApiClient): DfnsWallet {
    return new DfnsWallet(metadata, DfnsApiClient)
  }
  /**
   * Create a DfnsWallet instance by fetching wallet data from DFNS API
   *
   * This is a legacy compatibility method that fetches wallet metadata
   * and creates a wallet instance. For new code, consider using the
   * signing managers which provide better integration patterns.
   *
   * @param params - Initialization parameters
   * @param params.walletId - DFNS wallet ID
   * @param params.dfnsClient - DFNS API client instance
   * @returns Promise resolving to DfnsWallet instance
   *
   * @throws {DfnsError} When wallet is not found or invalid for Polymesh
   */
  public static async init(params: { walletId: string; dfnsClient: DfnsApiClient }): Promise<DfnsWallet> {
    const { walletId, dfnsClient } = params

    const wallet = await dfnsClient.wallets.getWallet({ walletId })

    // Use the shared validation utility
    const validatedWallet = validatePolymeshWallet(wallet)

    return new DfnsWallet(validatedWallet, dfnsClient)
  }

  /**
   * Signs raw data (bytes only) using the wallet's private key
   *
   * This method only supports signing arbitrary byte data with `type: 'bytes'`.
   * The data must be hex-encoded and will be automatically wrapped with
   * `<Bytes>...</Bytes>` formatting if not already wrapped.
   *
   * @param raw - Raw signing payload containing bytes data
   * @param raw.type - Must be 'bytes' ('payload' type not supported for security)
   * @param raw.data - Hex-encoded byte data to sign
   * @param raw.address - Wallet address (must match this wallet's address)
   * @returns Promise resolving to signature result with ID
   *
   * @throws {DfnsError} When type is not 'bytes' or data format is invalid
   *
   * @note For transaction signing, use `signPayload()` method instead.
   *       Raw payload signing is disabled for security reasons.
   */
  public async signRaw(raw: SignerPayloadRaw): Promise<SignerResult> {
    const { signature, id } = await this.processRawSigningRequest(raw)
    return { id, signature: signature }
  }

  /**
   * Signs a structured transaction payload for Polymesh
   *
   * This method handles full transaction payloads with proper validation
   * and formatting for Polymesh network transactions.
   *
   * @param signerPayload - Structured transaction payload
   * @returns Promise resolving to signature result with DFNS signature ID
   *
   * @throws {DfnsError} When address doesn't match or signing fails
   */
  public async signPayload(signerPayload: SignerPayloadJSON): Promise<SignerResult> {
    this.validateAddress(signerPayload.address)

    const localId = ++this.id

    const response = await this.DfnsApiClient.wallets.generateSignature({
      walletId: this.walletId,
      body: {
        kind: 'SignerPayload',
        // Remove null values from the payload to avoid issues with the DFNS API
        payload: sanitizePayload(signerPayload),
      },
    })

    assertSignResponseSuccessful(response)
    // assertSignResponseSuccessful ensures signature exists
    const signature = this.formatSignature(response.signature?.encoded || '')

    return { id: localId, signature }
  }

  /**
   * Process raw signing requests with type-specific validation
   *
   * Only supports 'bytes' type for arbitrary data signing. Raw payload
   * signing is disabled for security reasons - use signPayload() for
   * transaction signing instead.
   *
   * @private
   */
  private async processRawSigningRequest(raw: SignerPayloadRaw): Promise<{ signature: HexString; id: number }> {
    this.validateAddress(raw.address)

    if (raw.type === 'payload') {
      throw new DfnsError(
        -1,
        'Raw payload signing not supported for security reasons. Use signPayload() for transaction signing.',
        {
          type: raw.type,
          suggestion: 'Use signPayload() method instead for transaction payloads',
        }
      )
    } else if (raw.type === 'bytes') {
      // For bytes type, validate format and ensure proper wrapping using official Polkadot utilities
      const wrappedData = validateBytesData(raw.data)
      const localId = ++this.id

      const response = await this.DfnsApiClient.wallets.generateSignature({
        walletId: this.walletId,
        body: {
          kind: 'Message',
          message: wrappedData,
        },
      })

      assertSignResponseSuccessful(response)
      return {
        signature: this.formatSignature(response.signature?.encoded || ''),
        id: localId,
      }
    } else {
      throw new DfnsError(-1, 'unsupported raw signing type', {
        type: raw.type,
        supportedTypes: ['bytes'],
        note: 'Use signPayload() for transaction payloads',
      })
    }
  }

  /**
   * Formats signatures with appropriate prefixes for Polymesh/Polkadot
   *
   * Adds the correct signature type prefix based on the key scheme and curve:
   * - ED25519: 0x00 prefix
   * - SR25519: 0x01 prefix (ref for future support)
   * - ECDSA: 0x02 prefix (ref for future support)
   *
   * Currently only ED25519 is supported by DFNS for Polymesh.
   *
   * @private
   */
  private formatSignature(signature: string): HexString {
    const keyScheme = this.metadata.signingKey.scheme
    const keyCurve = this.metadata.signingKey.curve

    if (keyScheme === 'EdDSA' && keyCurve === 'ed25519') {
      // ED25519 prefix: 0x00
      const prefix = new Uint8Array([0x00])
      const rawSignature = hexToU8a(signature)
      const prefixedSignature = u8aConcat(prefix, rawSignature)
      return u8aToHex(prefixedSignature)
    } else {
      throw new DfnsError(-1, 'unsupported key type for Polymesh', {
        scheme: keyScheme,
        curve: keyCurve,
        supportedTypes: ['EdDSA/ed25519'],
        note: 'DFNS currently only supports ed25519 keys for Polymesh',
      })
    }
  }

  /**
   * Validates that the given address matches this wallet's address
   *
   * @private
   */
  private validateAddress(givenAddress: string) {
    if (this.address !== givenAddress) {
      throw new DfnsError(-1, 'address does not match the wallet used to initialize DfnsWallet', {
        expectedAddress: this.address,
        givenAddress,
      })
    }
  }
}
