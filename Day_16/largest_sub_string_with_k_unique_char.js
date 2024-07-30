// longest Substring With K Unique Characters
// Input: Str = “aabbcc”, k = 1
// Output: 2
// Explanation: Max substring can be any one from {“aa” , “bb” , “cc”}.

// Input: Str = “aabbcc”, k = 2
// Output: 4
// Explanation: Max substring can be any one from {“aabb” , “bbcc”}.

// Input: Str = “aabbcc”, k = 3
// Output: 6
// Explanation: 
// There are substrings with exactly 3 unique characters
// {“aabbcc” , “abbcc” , “aabbc” , “abbc” }
// Max is “aabbcc” with length 6.

// Input: Str = “aaabbb”, k = 3
// Output: Not enough unique characters
// Explanation: There are only two unique characters, thus show error message. 

const getLongestSubstringLengthWithKUniqueChar = (string, k) => {
  const map = {}
  let i = 0, j = 0
  let longestSubstringLength = 0
  while (j < string.length) {
    const s = string[j]
    if (!map[s]) {
      map[s] = 1
    } else {
      map[s] = map[s] + 1
    }
    let mapSize = Object.keys(map).length
    if (mapSize < k) {
      j++
    }
    if (mapSize === k) {
      const sum = Object.values(map).reduce((acc, prev) => acc + prev, 0)
      longestSubstringLength = Math.max(longestSubstringLength, sum)
      j++
    }
    if (mapSize > k) {
      while (mapSize > k) {
        const ch = string[i]
        map[ch] = map[ch] - 1
        if (map[ch] === 0) {
          delete map[ch]
          mapSize--
        }
        i++
      }
      j++
    }
  }
  return longestSubstringLength
}

const input_1 = 'aabacbebebe', k_1 = 3
const input_2 = 'aabbcc', k_2 = 1
const input_3 = 'aabbcc', k_3 = 2
const input_4 = 'aabbcc', k_4 = 3

const out_1 = getLongestSubstringLengthWithKUniqueChar(input_1, k_1)
const out_2 = getLongestSubstringLengthWithKUniqueChar(input_2, k_2)
const out_3 = getLongestSubstringLengthWithKUniqueChar(input_3, k_3)
const out_4 = getLongestSubstringLengthWithKUniqueChar(input_4, k_4)

console.log(out_1)
console.log(out_2)
console.log(out_3)
console.log(out_4)