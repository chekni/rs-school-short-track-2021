/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length) {
    let result = '';
    let counterRepeat = 1;
    let prev = str[0];
    for (let i = 1; i < str.length; i += 1) {
      const cur = str[i];
      if (cur === prev) {
        counterRepeat += 1;
      } else {
        result += counterRepeat > 1 ? `${counterRepeat}${prev}` : prev;
        prev = str[i];
        counterRepeat = 1;
      }
    }
    result += counterRepeat > 1 ? `${counterRepeat}${prev}` : prev;
    return result;
  }
  return '';
}

module.exports = encodeLine;
