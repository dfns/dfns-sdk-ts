export function uint8ArraysEqual(arr1: Uint8Array | undefined, arr2: Uint8Array | undefined): boolean {
  if (!arr1 && !arr2) {
    return true;
  }

  if ((!arr1 && arr2) || (arr1 && !arr2) || arr1!.length !== arr2!.length) {
    return false;
  }

  for (let i = 0; i < arr1!.length; i++) {
    if (arr1![i] !== arr2![i]) {
      return false;
    }
  }

  return true;
}
