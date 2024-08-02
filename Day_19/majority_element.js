// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

const getMajorityElement = (input) => {
  const map = {}
  let element
  let max = Number.NEGATIVE_INFINITY
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      map[input[i]] += 1
    } else {
      map[input[i]] = 1
    }
  }
  // console.log(map)
  Object.keys(map).forEach(key => {
    if (map[key] > max) {
      max = map[key]
      element = key
    }
  })
  return element
}

const nums = [2, 2, 1, 1, 1, 2, 2]
const nums2 = [3, 2, 3]
const nums3 = [6, 5, 5]
const out = getMajorityElement(nums)
const out2 = getMajorityElement(nums2)
const out3 = getMajorityElement(nums3)

console.log(out)
console.log(out2)
console.log(out3)