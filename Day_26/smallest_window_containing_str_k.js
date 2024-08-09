// Given two strings S and P. Find the smallest window in the string S consisting of all the characters(including duplicates) of the string P.  Return "-1" in case there is no such window present. In case there are multiple such windows of same length, return the one with the least starting index.
// Note : All characters are in Lowercase alphabets. 

// Example 1:

// Input:
// S = "timetopractice"
// P = "toc"
// Output: 
// toprac
// Explanation: "toprac" is the smallest
// substring in which "toc" can be found.

const isAllKeyMatched = (obj) => {
  let isMatched = true
  Object.keys(obj).map(key => {
    if (obj[key] === 0) {
      isMatched = false
    }
  })
  return isMatched
}

const resetMap = (obj) => {
  Object.keys(obj).map(key => {
    obj[key] = 0
  })
  return obj
}

const getSmallestWindow = (S, P) => {
  let i = 0
  let j = 0
  let startingIndex
  let endingIndex
  let windowLength = Number.POSITIVE_INFINITY
  const map = {}
  for (let k = 0; k < P.length; k++) {
    if (!map[P[k]]) map[P[k]] = 0
  }

  while (j < S.length) {
    const char = S[j]
    if (map[char] !== undefined) {
      map[char] = 1
    }

    if (!isAllKeyMatched(map)) {
      j++
    } else {
      const currWindowSize = j - i + 1
      if (currWindowSize < windowLength) {
        startingIndex = i
        endingIndex = j
      } else if (currWindowSize === windowLength) {
        if (i < startingIndex) {
          startingIndex = i
          endingIndex = j
        }
      }
      windowLength = Math.min(currWindowSize, windowLength)
      i++
      j = i
      resetMap(map)
    }
  }
  if (windowLength === Number.POSITIVE_INFINITY) return -1
  return { startingIndex, endingIndex, windowLength }
}
// const S = "timetopractice"
// const P = "toc"
const S = "zoomlazapzo"
const P = "oza"
const { startingIndex, endingIndex } = getSmallestWindow(S, P)
console.log(S.slice(startingIndex, endingIndex + 1))