// Word Search
// Medium
// Topics
// Companies
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
// const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCCED"


const wordSearchBruteForce = (board, word) => {
  let k = 0
  let i = 0, j = 0
  let ans = true
  const rowNum = board.length - 1
  const columnNum = board[0].length - 1
  while (i <= rowNum && j <= columnNum) {
    const searchChar = word[k]
    const currChar = board[i][j]
    if (searchChar === currChar) {
      console.log('=== char found ===', currChar)
      k++
      const nextChar = word[k]
      const right = board?.[i]?.[j + 1]
      const left = board?.[i]?.[j - 1]
      const top = board?.[i - 1]?.[j]
      const bottom = board?.[i + 1]?.[j]
      if (nextChar === right) {
        j++
      } else if (nextChar === left) {
        j--
      } else if (nextChar === top) {
        i--
      } else if (nextChar === bottom) {
        i++
      }
    } else {
      k = 0
    }
  }
};


// Apply backtracking on every element to search the
// required word
const depthFirstSearch = (row, col, word, grid) => {
  if (word.length == 0) return true;
  // Check if the cell is not out of bound or particular
  // grid element is not among required characters
  if (
    row < 0 ||
    row == grid.length ||
    col < 0 ||
    col == grid[0].length ||
    grid[row][col] != word[0]
  ) {
    return false;
  }

  let result = false;
  grid[row][col] = "*";

  // Explore the four neighboring directions that is
  // bottom, right, top, left, by adding (0, 1), (1, 0),
  // (0, -1), (-1, 0) indices respectively
  let offsets = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  for (let offset of offsets) {
    let rowOffset = offset[0],
      colOffset = offset[1];
    result = depthFirstSearch(
      row + rowOffset,
      col + colOffset,
      word.substring(1),
      grid
    );
    // Break instead of implementing all steps and
    // wasting our time
    if (result) break;
  }
  // This will revert the cell to it's original value
  grid[row][col] = word[0];
  return result;
}

const wordSearchOptimized = function (board, word) {
  let n = board.length;
  let m = board[0].length;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      if (depthFirstSearch(row, col, word, board))
        return true;
    }
  }
  return false;
};
// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
// const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCCED"
// const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "SEE"
board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCB"

// const out = exist(board, 'ABCCED')
const out = wordSearchOptimized(board, word)
console.log('== 108 ===', out)
