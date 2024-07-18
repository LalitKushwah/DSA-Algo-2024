// Problem of chocolate distribution
// Last updated: December 26, 2023
// Given an array of N integers , each value represents the number of chocolates in a pack. Each pack can contain a variable number of chocolates. There are m students , the task is to distribute the chocolate packs in such a way that:

// Each student receives a package.
// The difference between the number of chocolates in the packet containing the maximum amount of chocolates and the packet containing the minimum amount of chocolates given to the students is minimal .
// Examples:

// Input: arr[] = {7, 3, 2, 4, 9, 12, 56}, m = 3 
// Output: Minimum difference is 2 

const getChocolateDistribution = (packetList, m) => {
  packetList = packetList.sort((a, b) => a - b)
  packetList = packetList.map(packet => packet)
  let start = 0
  let end = m - 1
  let min = Number.POSITIVE_INFINITY
  while (end < packetList.length) {
    min = Math.min(packetList[end] - packetList[start], min)
    start++
    end++
  }
  return min
}

const input_1 = [7, 3, 0, 0, 2, 4, 9, 12, 56]
const input_2 = [12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50]
const input_3 = [3, 4, 1, 9, 56, 7, 9, 12]
const output_1 = getChocolateDistribution(input_1, 3)
const output_2 = getChocolateDistribution(input_2, 7)
const output_3 = getChocolateDistribution(input_3, 5)

console.log(output_1)
console.log(output_2)
console.log(output_3)