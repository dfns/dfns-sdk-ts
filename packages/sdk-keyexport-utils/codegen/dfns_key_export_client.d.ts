/* tslint:disable */
/* eslint-disable */
/**
* This class can be used to generate an encryption/decryption key pair,
* create a key-export request (which needs to be forwarded to the Dfns API),
* and parse the response of the Dfns API to extract the key of a wallet.
*/
export class KeyExportContext {
  free(): void;
/**
* Generates a new encryption/decryption key pair.
*
* Requires a global secure randomness generator to be available, that can be either [Web Crypto API]
* or [Node JS crypto module]. If neither of them is available, throws `Error`.
*
* [Web Crypto API]: https://www.w3.org/TR/WebCryptoAPI/
* [Node JS crypto module]: https://nodejs.org/api/crypto.html
*
* Throws `Error` in case of failure.
* @returns {KeyExportContext}
*/
  static new(): KeyExportContext;
/**
* Returns a request body that needs to be sent to Dfns API in order to
* export the key of the wallet with the given `wallet_id`.
*
* Throws `Error` in case of failure.
* @returns {any}
*/
  buildKeyExportRequest(): any;
/**
* Parses the response from Dfns API and recovers the private key.
*
* It returns the private key as a big endian byte array,
* or an `Error` (if the private key cannot be recovered,
* or is recovered but doesn’t match the public_key).
* @param {any} response
* @returns {SecretKey}
*/
  recoverSecretKey(response: any): SecretKey;
}
/**
* Secret key to be exported
*/
export class SecretKey {
  free(): void;
/**
* Serializes the secret key in big-endian format.
* @returns {Uint8Array}
*/
  toBytesBE(): Uint8Array;
}
