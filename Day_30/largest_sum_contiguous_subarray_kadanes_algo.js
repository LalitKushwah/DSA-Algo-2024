// Kadane's Algorithm | Largest Sum Contiguous Subarray


const input = [-5, 4, 6, -3, 4, -1]
const largestSumSubarray = (nums) => {
  let max = Number.NEGATIVE_INFINITY
  let i = 0
  let currSum = 0
  while (i < nums.length) {
    const num = nums[i]
    currSum += num
    if (currSum > max) {
      max = currSum
    }
    if (currSum < 0) {
      currSum = 0
    }
    i++
  }
  return max
}
const input2 = [-1, -4, -10, -2, -3]
console.log(largestSumSubarray(input2))