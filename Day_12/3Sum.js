// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

const getAllTripplets = (nums) => {
  nums.sort((a, b) => a - b)
  const sumTarget = 0
  const result = []
  for (let i = 0; i < nums.length - 1; i++) {
    const num = nums[i]
    // const target = sumTarget - num
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      const tempSum = num + nums[left] + nums[right]
      if (tempSum < sumTarget) {
        left++
      } else if (tempSum > sumTarget) {
        right--
      } else {
        result.push([num, nums[left], nums[right]])
        left++
        right--
      }
    }
  }
  // Convert each subarray to a JSON string and add it to a Set to remove duplicates
  const uniqueArraySet = new Set(result.map(subarray => JSON.stringify(subarray)));
  // Convert back the unique JSON strings to arrays
  return Array.from(uniqueArraySet).map(subarray => JSON.parse(subarray));
}

const input_1 = [-1, 0, 1, 2, -1, -4]
const input_2 = [0, 0, 0, 0]
const input_3 = [-2, 0, 1, 1, 2]

// const out_1 = getAllTripplets(input_1)
// const out_2 = getAllTripplets(input_2)
const out_3 = getAllTripplets(input_3)
// console.log(out_1)
// console.log(out_2)
console.log(out_3)