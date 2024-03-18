import { toBase64 } from "./base64"
import { splitString } from "./string"
import { minimizeBigInt } from "./bigint"

// Using crypto.subtle in order to run this in the browser
// Adding `Browser` in the function name to distinguish with native node crypto module usage
export const exportPublicKeyInPemFormatBrowser = async (key: CryptoKeyPair): Promise<string> => {
    const exported = await crypto.subtle.exportKey('spki', key.publicKey)
    const b64Exported = toBase64(Buffer.from(exported))
    const pem = `-----BEGIN PUBLIC KEY-----\n${splitString(b64Exported).join("\n")}\n-----END PUBLIC KEY-----`
    return pem
}

export const rawSignatureToAns1 = (rawSignature: Uint8Array): Uint8Array => {
    const r = rawSignature.slice(0, 32)
    const s = rawSignature.slice(32)

    const minR = minimizeBigInt(r)
    const minS = minimizeBigInt(s)

    return new Uint8Array([
        0x30,
        minR.length + minS.length + 4,
        0x02,
        minR.length,
        ...minR,
        0x02,
        minS.length,
        ...minS
    ])
}