// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.
// Example 1:
// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false


// TODO This can also be solved using slow and fast pointer approach
const getDigits = (n) => {
  const str = String(n)
  if (str.length === 1) {
    return Number(str[0])
  }
  let sum = 0
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]) * Number(str[i])
  }
  return getDigits(sum)
}

const isHappy = (n) => {
  const res = getDigits(n)
  return res == 1 ? true : false
};

console.log(isHappy(19))
console.log(isHappy(2))


