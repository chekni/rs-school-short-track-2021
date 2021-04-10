/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const map = new Map();
  for (let i = 0; i < s1.length; i += 1) {
    if (map.has(s1[i])) {
      map.set(s1[i], map.get(s1[i]) + 1);
    } else map.set(s1[i], 1);
  }
  let countSimilar = 0;
  for (let i = 0; i < s2.length; i += 1) {
    if (map.has(s2[i]) && map.get(s2[i]) > 0) {
      map.set(s2[i], map.get(s2[i]) - 1);
      countSimilar += 1;
    }
  }
  return countSimilar;
}

module.exports = getCommonCharacterCount;
