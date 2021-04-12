/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const map = new Map();
  const resultArray = [];
  for (let i = 0; i < names.length; i += 1) {
    const cur = names[i];
    if (map.has(cur)) {
      resultArray.push(`${cur}(${map.get(cur)})`);
      map.set(`${cur}(${map.get(cur)})`, 1);
      map.set(cur, map.get(cur) + 1);
    } else {
      resultArray.push(cur);
      map.set(cur, 1);
    }
  }
  return resultArray;
}

module.exports = renameFiles;
// renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']);
