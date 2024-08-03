const getMissingNumber = (input) => {
  const map = {}
  const length = input.length
  for (let i = 0; i < length; i++) {
    map[input[i]] = true
  }
  for (let i = 0; i <= length; i++) {
    if (!map[i]) return i
  }
}
const nums = [3, 0, 1]
const nums2 = [0, 1]
const nums3 = [9, 6, 4, 2, 3, 5, 7, 0, 1]
const out = getMissingNumber(nums)
const out2 = getMissingNumber(nums2)
const out3 = getMissingNumber(nums3)
console.log(out)
console.log(out2)
console.log(out3)