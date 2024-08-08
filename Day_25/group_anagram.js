// Given an array of strings, return all groups of strings that are anagrams. The groups must be created in order of their appearance in the original array. Look at the sample case for clarification.

// Note: The final output will be in lexicographic order.
// const group = (objects) => {
//   const validWords = ["cat", "tac", "god", "dog"]; // Specify the valid labels

const group = (objects) => {
  const grouped = Object.values(objects.reduce((acc, obj) => {
    // Get the key of the outer object (e.g., 'act', 'god')
    const key = Object.keys(obj)[0];

    // Sort the characters in the key to create a canonical form (e.g., 'act' -> 'act', 'god' -> 'dgo')
    const sortedKey = key.split('').sort().join('');

    // Group objects by the sorted key
    acc[sortedKey] = acc[sortedKey] || [];
    acc[sortedKey].push(obj);

    return acc;
  }, {}));
  return grouped
}


const getAnagramGroup = (input) => {
  const mapList = []
  for (let i = 0; i < input.length; i++) {
    const str = input[i]
    const map = {}
    for (let j = 0; j < str.length; j++) {
      if (map[str[j]]) {
        map[str[j]] += map[str[j]]
      } else {
        map[str[j]] = 1
      }
    }
    mapList.push({ [str]: map })
  }
  const grouped = group(mapList)
  let res = ''
  for (let i = 0; i < grouped.length; i++) {
    const group = grouped[i]
    for (let j = 0; j < group.length; j++) {
      const obj = group[j]
      res += `${Object.keys(obj)[0]} `
    }
    res += `\n`
  }
  console.log(res)
}

const input = ["act", "god", "cat", "dog", "tac"]
const out = getAnagramGroup(input)
console.log(out)