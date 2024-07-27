
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

const isValidParenthethis = (string) => {
  if (string.length === 1) return false
  if (!string.length) return true
  const map = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  const stack = []

  for (let i = 0; i < string.length; i++) {
    const elm = string[i]
    const top = stack[stack.length - 1]
    if (map[elm]) {
      stack.push(elm)
    } else {
      const key = Object.keys(map).filter(key => map[key] === elm)[0]
      if (key === top) {
        stack.pop()
      } else {
        stack.push(elm)
      }
    }
  }
  return stack.length ? false : true
}

const s = "()[]{}"
const s_2 = "(]"
const s_3 = '()'
const s_4 = ")(){}"

const out = isValidParenthethis(s)
const out_2 = isValidParenthethis(s_2)
const out_3 = isValidParenthethis(s_3)
const out_4 = isValidParenthethis(s_4)
console.log(out)
console.log(out_2)
console.log(out_3)
console.log(out_4)