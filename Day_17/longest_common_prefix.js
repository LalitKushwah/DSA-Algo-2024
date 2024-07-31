// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const input = ["flower", "flow", "flight"]
const getLongestCommonPrefix = (input) => {
  if (!input.length) return ""
  if (input.length === 1) return input[0]
  input.sort()
  const first = input[0]
  const second = input[input.length - 1]
  const smallSting = first.length > second.length ? second : first
  let size = smallSting.length
  let i = 0
  while (size > 0) {
    if (first[i] === second[i]) {
      size--
      i++
      continue
    } else {
      break
    }
  }
  return input[0].slice(0, i)
}

const input_2 = ["ab", "a"]
const input_3 = ["dog","racecar","car"]
// const out = getLongestCommonPrefix(input)
const out2 = getLongestCommonPrefix(input_2)
const out3 = getLongestCommonPrefix(input_3)
console.log(out2)
console.log(out3)