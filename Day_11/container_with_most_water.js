// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

const findMaxAreaBruteForce = (input) => {
  let maxArea = Number.NEGATIVE_INFINITY

  for (let i = 0; i < input.length; i++) {
    const left = input[i]
    for (let j = i + 1; j < input.length; j++) {
      const right = input[j]
      const height = Math.min(left, right)
      const width = j - i
      maxArea = Math.max(maxArea, height * width)
    }
  }
  return maxArea
}



const findMaxAreaOptimize = (input) => {
  let start = 0
  let end = input.length - 1
  let maxArea = Number.NEGATIVE_INFINITY
  while (start < end) {
    let right = input[end]
    let left = input[start]
    const height = Math.min(left, right)
    const width = end - start
    maxArea = Math.max(maxArea, height * width)
    if (left < right) {
      start++
    } else {
      end--
    }
  }
  return maxArea
}

const input_1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]
const input_2 = [1, 1]
const input_3 = [2, 3, 4, 5, 18, 17, 6]

const out_1 = findMaxAreaOptimize(input_1)
const out_2 = findMaxAreaOptimize(input_2)
const out_3 = findMaxAreaOptimize(input_3)

console.log(out_1)
console.log(out_2)
console.log(out_3)

console.log('==========================')

const out_4 = findMaxAreaBruteForce(input_1)
const out_5 = findMaxAreaBruteForce(input_2)
const out_6 = findMaxAreaBruteForce(input_3)

console.log(out_4)
console.log(out_5)
console.log(out_6)