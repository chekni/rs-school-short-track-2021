/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const specialOnePosition = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === -1) {
      specialOnePosition.push(i);
    }
  }
  const resultArr = [];
  arr.sort((a, b) => a - b);
  let j = specialOnePosition.length;
  for (let i = 0, cur = 0; cur < arr.length; i += 1) {
    if (specialOnePosition[i] >= 0) {
      while (cur < specialOnePosition[i]) {
        resultArr.push(arr[j]);
        cur += 1;
        j += 1;
      }
      resultArr.push(-1);
      cur += 1;
    } else {
      resultArr.push(arr[j]);
      cur += 1;
      j += 1;
    }
  }
  return resultArr;
}

module.exports = sortByHeight;

// sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
