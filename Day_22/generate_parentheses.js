// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
// Example 1:

// Input: n = 3
['()()()', '(())()', '(()())']
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

const isValidParenthethis = (input) => {
  const map = { '(': ')' }
  const stack = []
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]]) {
      stack.push(input[i])
    } else {
      const top = stack[stack.length - 1]
      const elm = Object.keys(map).filter((key) => map[key] === input[i])[0]
      if (top === elm) {
        stack.pop()
      } else {
        stack.push(input[i])
      }
    }
  }
  return stack.length ? false : true
}

const generateParenthesis = function (n) {
  let pairs = n
  const input = []
  const output = []
  while (pairs > 0) {
    input.push('(')
    input.push(')')
    pairs--
  }
  for (let i = 0; i < input.length; i++) {
    const stack = []
    stack.push(input[i])
    for (let j = 0; j < input.length; j++) {
      if (j !== i) {
        stack.push(input[j])
      }
    }
    const isValid = isValidParenthethis(stack)
    if (isValid) {
      output.push(stack.join(''))
    }
  }
  console.log(output)
}

const generateParenthesisOptimized = function (n) {
  const result = [];

  const generate = (current, open, close) => {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    if (open < n) {
      generate(current + '(', open + 1, close);
    }

    if (close < open) {
      generate(current + ')', open, close + 1);
    }
  };

  generate('', 0, 0);
  return result;
};

console.log(generateParenthesisOptimized(3))
