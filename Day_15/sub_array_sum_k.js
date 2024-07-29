// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
// A subarray is a contiguous non-empty sequence of elements within an array.
// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

const getSubArraysWithSumK = (input, k) => {
  let i = 0
  let j = 0
  let sum = 0
  let count = 0
  while (j < input.length) {
    sum += input[j]
    if (sum < k) {
      j++
    }
    if (k === sum) {
      count++
      j++
    } else if (sum > k) {
      while (sum > k) {
        sum -= input[i]
        i++
      }
      j++
    }
  }
  return count
}


const getSubArrayHashApproach = (nums, k) => {
  let map = new Map();
  let sum = 0;
  let count = 0;
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) count += map.get(sum - k);
    if (map.has(sum)) map.set(sum, map.get(sum) + 1);
    else map.set(sum, 1);
  }
  return count;
}

const nums = [1, 1, 1]
const input_2 = [1, 2, 3]
// const out = getSubArraysWithSumK(nums, 2)
const out2 = getSubArraysWithSumK(input_2, 3)
const out_3 = getSubArrayHashApproach(input_2, 3)

console.log(out_3)