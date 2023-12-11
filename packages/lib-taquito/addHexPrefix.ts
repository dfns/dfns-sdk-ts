export function addHexPrefix(inputString: string): string {
    return inputString.startsWith('0x') ? inputString : '0x' + inputString;
}
