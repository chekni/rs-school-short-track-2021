/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let leftBorder = 0;
  let rightBorder = array.length - 1;
  while (leftBorder <= rightBorder) {
    const middlePosition = Math.ceil((leftBorder + rightBorder) / 2);
    if (array[middlePosition] === value) {
      return middlePosition;
    }
    if (array[middlePosition] > value) {
      rightBorder = middlePosition - 1;
    } else {
      leftBorder = middlePosition;
    }
  }
  return leftBorder;
}

module.exports = findIndex;
