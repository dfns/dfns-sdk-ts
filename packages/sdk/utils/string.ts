export const splitString = (text: string, maxLineLength: number = 64): string[] => {
    const regex = new RegExp(`(.{1,${maxLineLength}})`, 'g')
    const matches = text.matchAll(regex)
    const lines: string[] = []
    for (const match of matches) {
        lines.push(match[1])
    }
    return lines
}

export const toHex = (buffer: ArrayBuffer): string => {
    const view = new Uint8Array(buffer)
    let hexString = ""
    for (const byte of view) {
        const hexByte = byte.toString(16)
        hexString += hexByte.padStart(2, "0")
    }
    return hexString.toLowerCase()
}