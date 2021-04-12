/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const map = new Map();
  const separator = '.';
  for (let i = 0; i < domains.length; i += 1) {
    const array = domains[i].split(separator).reverse();
    for (let j = 0; j < array.length; j += 1) {
      let k = 0;
      let domain = '';
      while (k <= j) {
        domain += separator + array[k];
        k++;
      }
      if (map.has(domain)) {
        map.set(domain, map.get(domain) + 1);
      } else map.set(domain, 1);
    }
  }
  return Object.fromEntries(map);
}

module.exports = getDNSStats;
