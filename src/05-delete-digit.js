/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digitsArray = n.toString().split('');
  const min = Math.min(...digitsArray);
  const deletePos = digitsArray.indexOf(min.toString());
  digitsArray.splice(deletePos, 1);
  return +digitsArray.join('');
}

module.exports = deleteDigit;
