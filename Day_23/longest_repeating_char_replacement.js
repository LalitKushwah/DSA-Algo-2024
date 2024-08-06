// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

const characterReplacement = (s, k) => {
  let i = 0, j = 0
  let max = 0
  let tempK = k
  let tempMax = 0
  while (j < s.length) {
    if (s[i] === s[j]) {
      j++
      max++
    } else {
      if (k > 0) {
        max++
        k--
        j++
      } else {
        const presentIChar = s[i]
        while (s[i] === presentIChar) {
          i++
        }
        j = i
        k = tempK
        tempMax = Math.max(tempMax, max)
        max = 0
      }
    }
  }
  return Math.max(tempMax, max)
}

const optimised = (s, k) => {
  let ans = 0, n = s.length;
  for (let c = 'A'; c <= 'Z'; c++) {
    let i = 0, j = 0, replaced = 0;
    while (j < n) {
      if (s[j] == c)
        j++;
      else if (replaced < k)
        j++, replaced++;
      else if (s[i] == c)
        i++;
      else
        i++, replaced--;
      ans = Math.max(ans, j - i);
    }
  }
  return ans;
}

const characterReplacementChatGPT = (s, k) => {
  let maxCount = 0; // Maximum frequency of a single character in the current window
  let maxLength = 0; // Result for the maximum length of the window
  let count = {}; // Frequency map

  let left = 0; // Left pointer of the sliding window

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    count[char] = (count[char] || 0) + 1;
    maxCount = Math.max(maxCount, count[char]);

    // Check if the current window is valid
    while (right - left + 1 - maxCount > k) {
      count[s[left]]--;
      left++;
    }

    // Update the maximum length
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}


// const s = "AABABBA", k = 1
// const s = "ABAAAD", k = 0
// const s = "AAAA", k = 2
// const s = "AAACABCCCCCC", k = 2
const s = "ABBB", k = 2

const out = characterReplacementChatGPT(s, k)
console.log(out)