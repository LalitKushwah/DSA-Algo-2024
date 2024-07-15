// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]


const input_1 = [0, 1, 0, , 432, 0, 22, 0, 0, 10, 0, 3, 12, 0]
const input_2 = [0]

// use new array - doesn't consider space complexity
const moveZerosToRightFirstSolution = (input) => {
  if (!input || !Array.isArray(input)) return
  if (input.length < 2) return input

  const newArray = Array(input.length).fill(0)
  let newArrayIndex = 0
  input.forEach((element, index) => {
    if (element) {
      newArray[newArrayIndex] = element
      newArrayIndex++
    }
  })
  return newArray
}

// use the same input array to perform shitfing operation
const moveZerosToRightSecondSolution = (input) => {
  if (!input || !Array.isArray(input)) return
  if (input.length < 2) return input
  let startIndex = 0
  let endIndex = startIndex + 1

  while (endIndex <= input.length - 1) {
    const forwardValue = input[startIndex]
    const backwardValue = input[endIndex]
    if (!forwardValue && backwardValue) {
      input[endIndex] = forwardValue
      input[startIndex] = backwardValue
      endIndex++
      startIndex++
    } else {
      if (!forwardValue && !backwardValue) {
        endIndex++
      } else {
        startIndex++
        endIndex++
      }
    }
  }
  return input
}

const moveZerosToRightThirdSolution = (input) => {
  if (!input || !Array.isArray(input)) return
  if (input.length < 2) return input
  let count = 0

  for (let i = 0; i < input.length; i++) {
    if (input[i]) {
      input[count] = input[i]
      count++
    }
  }
  if (count < input.length - 1) {
    input.fill(0, count++, input.length - 1)
  }
  return input
}


const output_1 = moveZerosToRightFirstSolution(input_1)
const output_2 = moveZerosToRightFirstSolution(input_2)

const output_3 = moveZerosToRightSecondSolution(input_1)
const output_4 = moveZerosToRightSecondSolution(input_2)

const output_5 = moveZerosToRightThirdSolution(input_1)
const output_6 = moveZerosToRightThirdSolution(input_2)

console.log(output_5)
console.log(output_6)