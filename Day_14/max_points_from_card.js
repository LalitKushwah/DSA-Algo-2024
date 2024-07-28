// There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.
// In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.
// Your score is the sum of the points of the cards you have taken.
// Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

// cardPoints = [1,2,3,4,5,6,1]
// k = 3

const getMaxPointsFromCardsDeck = (cards, k) => {
  const total_sum = cards.reduce((prev, acc) => prev + acc, 0)
  let j = 0
  let i = 0
  let result = 0
  let windowSize = cards.length - k
  let currentSum = 0
  if (!windowSize) return total_sum
  currentSum += cards[j]
  while (j < cards.length) {
    if (j < windowSize) {
      j++
    }
    if (j - i + 1 === windowSize) {
      result = Math.max(result, total_sum - currentSum)
      currentSum -= cards[i]
      i++
      j++
    }
  }
  return result
}

const cardPoints = [1, 2, 3, 4, 5, 6, 1]
const input_2 = [2, 2, 2]
const input_3 = [9, 7, 7, 9, 7, 7, 9]
const input_4 = [100, 40, 17, 9, 73, 75]
// const output = getMaxPointsFromCardsDeck(cardPoints, 3)
// const output2 = getMaxPointsFromCardsDeck(input_2, 2)
// const output3 = getMaxPointsFromCardsDeck(input_3, 7)
const output4 = getMaxPointsFromCardsDeck(input_3, 7)



console.log(output4)