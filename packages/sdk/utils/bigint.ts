export const minimizeBigInt = (value: Uint8Array): Uint8Array => {
    const minValue = [0, ...value]
    for (let i = 0; i < minValue.length; ++i) {
        if (minValue[i] === 0) {
            continue
        }
        if (minValue[i] > 0x7f) {
            return new Uint8Array(minValue.slice(i - 1))
        }
        return new Uint8Array(minValue.slice(i))
    }
    return new Uint8Array([0])
}
