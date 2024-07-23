// Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.
// A subarray is a contiguous part of an array.
// Example 1:

// Input: nums = [4,5,0,-2,-3,1], k = 5
// Output: 7
// Explanation: There are 7 subarrays with a sum divisible by k = 5:
// [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
// Example 2:

// Input: nums = [5], k = 9
// Output: 0

const getSubArrayDivisibleByKBruteForce = (input, k) => {
  let output = 0
  for (let i = 0; i < input.length; i++) {
    let sum = input[i]
    if (sum % k === 0) {
      output++
    }
    for (let j = i + 1; j < input.length; j++) {
      sum = sum + input[j]
      if (sum % k === 0) {
        output++
      }
    }
  }
  return output
}

const getSubArrayDivisibleByKOptimized = (input, k) => {
  let prefixRemainder = 0
  let output = 0
  let map = {}
  for (let i = 0; i < k; i++) {
    map[i] = 0
  }
  map[0] = 1

  for (let i = 0; i < input.length; i++) {
    prefixRemainder = (prefixRemainder + input[i] % k + k) % k
    output += map[prefixRemainder]
    map[prefixRemainder]++
  }
  return output
}

const input_1 = [4, 5, 0, -2, -3, 1]
const k_1 = 5
const input_2 = [5]
const k_2 = 9

const output_1 = getSubArrayDivisibleByKBruteForce(input_1, k_1)
const output_2 = getSubArrayDivisibleByKOptimized(input_1, k_1)


console.log(output_1)
console.log(output_2)