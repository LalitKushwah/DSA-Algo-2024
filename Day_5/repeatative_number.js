// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant extra space.
// Example 1:


// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3
// Example 3:

// Input: nums = [3,3,3,3,3]
// Output: 3

const findRepeatativeNumber = (numberList) => {
  if (!numberList || numberList.length && numberList.length === 1) return null
  const map = {}
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i]
    if (map[number]) return number
    else {
      map[number] = number
    }
  }
  return undefined
}
const input_1 = [1, 3, 4, 2, 2]
const input_2 = [3, 1, 3, 4, 2]
const input_3 = [3, 3, 3, 3, 3]

const output_1 = findRepeatativeNumber(input_1)
const output_2 = findRepeatativeNumber(input_2)
const output_3 = findRepeatativeNumber(input_3)

console.log(output_1)
console.log(output_2)
console.log(output_3)
