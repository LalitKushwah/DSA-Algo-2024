// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.
// You must write an algorithm that runs in O(n) time and uses only constant extra space.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]

const findAllDuplicatesInArray = (input) => {
  const map = {}
  const output = []
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] === undefined) {
      map[input[i]] = 1
    } else {
      map[input[i]] = map[input[i]] + 1
    }
  }
  Object.keys(map).map(key => {
    if (map[key] > 1) {
      output.push(Number(key))
    }
  })
  return output
}

const nums = [4, 3, 2, 7, 8, 2, 3, 1]
const out = findAllDuplicatesInArray(nums)
console.log(out)