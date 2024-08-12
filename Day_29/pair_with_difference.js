// Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. 
// Examples: 

// Input: arr[] = {5, 20, 3, 2, 50, 80}, n = 78
// Output: Pair Found: (2, 80)

// Input: arr[] = {90, 70, 20, 80, 50}, n = 45
// Output: No Such Pair

const findPair = (arr, n) => {
  const map = {}
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]
    const diff = Math.abs(num - n)
    if (map[diff]) {
      return { num1: diff, num2: num }
    } else {
      map[num] = diff
    }
  }
  return "No Such Pair"
}
// const arr = [5, 20, 3, 2, 50, 80], n = 78
const arr = [90, 70, 20, 80, 50], n = 45
const out = findPair(arr, n)
console.log(out)