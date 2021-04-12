function isMAC48Address(n) {
  const arr = n.split('-');
  const regexp = /([0-9A-F]{1,2}){2}/;
  let sign = true;
  for (let i = 0; i < arr.length && sign; i += 1) {
    sign = sign && regexp.test(arr[i].toString()) && arr[i].length === 2;
  }
  return sign;
}

module.exports = isMAC48Address;
