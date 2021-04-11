/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(m) {
  const gameArea = new Array(m.length);
  for (let i = 0; i < gameArea.length; i++) {
    gameArea[i] = new Array(m[0].length);
    gameArea[i].fill(0);
  }

  for (let i = 0; i < m.length; i += 1) {
    for (let j = 0; j < m[0].length; j += 1) {
      if (i === 0 && j === 0) {
        gameArea[i][j] += +m[i][j + 1];
        gameArea[i][j] += +m[i + 1][j] + +m[i + 1][j + 1];
      } else
      if (i === 0 && j === m[0].length - 1) {
        gameArea[i][j] += +m[i][j - 1];
        gameArea[i][j] += +m[i + 1][j] + +m[i + 1][j - 1];
      } else
      if (i === m.length - 1 && j === 0) {
        gameArea[i][j] += +m[i][j + 1];
        gameArea[i][j] += +m[i - 1][j] + +m[i - 1][j + 1];
      } else
      if (i === m.length - 1 && j === m[0].length - 1) {
        gameArea[i][j] += +m[i - 1][j] + +m[i - 1][j - 1];
        gameArea[i][j] += +m[i][j - 1];
      } else
      // верхняя строка матрицы
      if (i === 0 && j !== 0 && j !== m[0].length - 1) {
        gameArea[i][j] += +m[i][j - 1] + +m[i][j + 1];
        gameArea[i][j] += +m[i + 1][j - 1] + +m[i + 1][j] + +m[i + 1][j + 1];
      } else
      // нижняя строка матрицы
      if (i === m.length - 1 && j !== 0 && j !== m[0].length - 1) {
        gameArea[i][j] += +m[i][j - 1] + +m[i][j + 1];
        gameArea[i][j] += +m[i - 1][j - 1] + +m[i - 1][j] + +m[i - 1][j + 1];
      } else
      // левый столбец матрицы
      if (j === 0 && i !== 0 && i !== m.length - 1) {
        gameArea[i][j] += +m[i - 1][j] + +m[i - 1][j + 1] + m[i][j + 1];
        gameArea[i][j] += +m[i + 1][j] + +m[i + 1][j + 1];
      } else
      // правый столбец матрицы матрицы
      if (j === m[0].length - 1 && i !== 0 && i !== m.length - 1) {
        gameArea[i][j] += +m[i - 1][j - 1] + +m[i - 1][j];
        gameArea[i][j] += +m[i][j - 1] + +m[i + 1][j] + +m[i + 1][j - 1];
      } else {
        gameArea[i][j] += +m[i + 1][j - 1] + +m[i + 1][j] + +m[i + 1][j + 1];
        gameArea[i][j] += +m[i][j - 1] + +m[i][j + 1];
        gameArea[i][j] += +m[i - 1][j - 1] + +m[i - 1][j] + +m[i - 1][j + 1];
      }
    }
  }

  return gameArea;
}

module.exports = minesweeper;

// minesweeper([
//     [true, false, false],
//     [false, true, false],
//     [false, false, false],
// ]);
