// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

const canJump = (input) => {
  let goal = input.length - 1
  for (let i = input.length - 2; i >= 0; i--) {
    if (i + input[i] >= goal) {
      goal = i
    }
  }
  return goal === 0 ? true : false
}

const out = canJump([2, 3, 1, 1, 4])
const out2 = canJump([3, 2, 1, 0, 4])
console.log(out)
console.log(out2)