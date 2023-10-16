/* tslint:disable */
/* eslint-disable */
/**
* Builds a request body that needs to be sent to Dfns API in order to import the given key.
*
* Takes as input the `secret_key` to be imported, `signers_info` (contains information
* about the _n_ key holders, needs to be retrieved from Dfns API)
* `min_signers` (which will be the threshold and has to satisfy _2 ≤ min_signers ≤ n_),
* and the `protocol` and `curve` for which the imported key will be used.
*
* Returns a body of the request that needs to be sent to Dfns API in order to import the given key.
*
* Requires a global secure randomness generator to be available, that can be either [Web Crypto API]
* or [Node JS crypto module]. If neither of them is available, throws `Error`.
*
* [Web Crypto API]: https://www.w3.org/TR/WebCryptoAPI/
* [Node JS crypto module]: https://nodejs.org/api/crypto.html
*
* Throws `Error` in case of failure
* @param {SecretKey} secret_key
* @param {SignersInfo} signers_info
* @param {number} min_signers
* @param {number} protocol
* @param {number} curve
* @returns {any}
*/
export function buildKeyImportRequest(secret_key: SecretKey, signers_info: SignersInfo, min_signers: number, protocol: number, curve: number): any;
/**
* The protocol for which a key can be used.
*/
export enum KeyProtocol {
/**
*GG18
*/
  Gg18 = 0,
/**
*Binance EDDSA
*/
  BinanceEddsa = 1,
/**
*CGGMP21
*/
  Cggmp21 = 2,
}
/**
* The curve for which a key can be used
*/
export enum KeyCurve {
/**
* Secp256k1 curve
*/
  Secp256k1 = 0,
/**
* Ed25519 curve
*/
  Ed25519 = 1,
}
/**
* Secret key to be imported
*/
export class SecretKey {
  free(): void;
/**
* Parses the secret key in big-endian format (the most widely-used format)
*
* Throws `Error` if secret key is invalid
* @param {Uint8Array} bytes
* @returns {SecretKey}
*/
  static fromBytesBE(bytes: Uint8Array): SecretKey;
}
/**
* Signers info
*
* Contains information necessary to establish a secure communication channel with
* the signers who're going to host the imported key
*/
export class SignersInfo {
  free(): void;
/**
* Parses signers info from response obtained from Dfns API
*
* Throws `Error` if response is malformed
* @param {any} resp
* @returns {SignersInfo}
*/
  static new(resp: any): SignersInfo;
}
