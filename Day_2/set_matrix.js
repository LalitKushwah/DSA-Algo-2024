// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

const setMatrixByBruteForce = (input) => {
  const zeroesPosition = []
  let iLocations = []
  for (let i = 0; i < input.length; i++) {
    const nestedArr = input[i]
    for (let j = 0; j < nestedArr.length; j++) {
      const value = nestedArr[j]
      if (value === 0) {
        zeroesPosition.push(j)
        iLocations.push(i)
      }
    }
  }
  if (iLocations != undefined && iLocations.length) {
    for (let i = 0; i < iLocations.length; i++) {
      input[iLocations[i]].fill(0, 0, input[iLocations[i]].length)
    }
  }
  for (let i = 0; i < input.length; i++) {
    const subArray = input[i]
    if (!iLocations.includes(i)) {
      for (j = 0; j < zeroesPosition.length; j++) {
        subArray[zeroesPosition[j]] = 0
      }
      input[i] = subArray
    }
  }
  return input
}

const matrix = [[1, 2, 3, 4], [5, 0, 7, 8], [0, 10, 11, 12], [13, 14, 15, 0]]
const output = setMatrixByBruteForce(matrix)
console.log(output)