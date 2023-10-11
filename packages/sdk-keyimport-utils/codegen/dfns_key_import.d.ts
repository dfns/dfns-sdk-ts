/* tslint:disable */
/* eslint-disable */
/**
* Builds a request body that needs to be sent to Dfns API in order to import given key
*
* Takes a secret key to be imported, and signers info (needs to be retrieved from Dfns API). Returns
* a body of the request that needs to be sent to Dfns API in order to import given key
*
* Requires a global secure randomness generator to be available, that can be either [Web Crypto API]
* or [Node JS crypto module]. If neither of them is available, throws `Error`.
*
* [Web Crypto API]: https://www.w3.org/TR/WebCryptoAPI/
* [Node JS crypto module]: https://nodejs.org/api/crypto.html
*
* Throws `Error` in case of failure
* @param {SignersInfo} signers_info
* @param {SecretKey} secret_key
* @returns {any}
*/
export function buildKeyImportRequest(signers_info: SignersInfo, secret_key: SecretKey): any;
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
