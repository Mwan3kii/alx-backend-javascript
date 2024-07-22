export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const idx in array) {
    if (Object.prototype.hasOwnProperty.call(array, idx)) {
      newArray[idx] = appendString + array[idx];
    }
  }
  return newArray;
}
