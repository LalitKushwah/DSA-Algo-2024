// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

// Example 1:
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

const sortColors = (input) => {
  const colorsOrder = [0, 1, 2]
  const map = {}
  input.forEach(element => {
    if (map[element] != undefined) {
      map[element] = map[element] + 1
    }
    else {
      map[element] = 1
    }
  })
  let count = 0
  for (let i = 0; i < colorsOrder.length; i++) {
    const color = colorsOrder[i]
    const counter = map[colorsOrder[i]]
    for (let i = 1; i <= counter; i++) {
      input[count] = color
      count++
    }
  }
  return input
}

const input_4 = [2, 0, 2, 1, 1, 0]
const output_4 = sortColors(input_4)
console.log(output_4)
