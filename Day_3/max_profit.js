// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// [7,1,1,2,3,6,4]
// Output: 5

const getMaxProfitBruteForce = (priceList) => {
  if (!priceList.length) return 0
  let maxProfit = Number.NEGATIVE_INFINITY

  for (let i = 0; i < priceList.length; i++) {
    const buyingPrice = priceList[i]
    for (let j = i + 1; j < priceList.length; j++) {
      const profit = priceList[j] - buyingPrice
      if (profit > maxProfit) {
        maxProfit = profit
      }
    }
  }
  if (maxProfit < 0) {
    return 0
  }
  return maxProfit
}

const getMaxProfitOptimal = (priceList) => {
  let maxSoFar = 0
  let currentBuy = priceList[0]
  for (let i = 1; i < priceList.length; i++) {
    if (priceList[i] < currentBuy) {
      currentBuy = priceList[i]
    } else if (priceList[i] - currentBuy > maxSoFar) {
      maxSoFar = priceList[i] - currentBuy
    }
  }
  return maxSoFar
}

const input = [7, 1, 5, 3, 6, 4]
const output_1 = getMaxProfitBruteForce(input)
const output_2 = getMaxProfitOptimal(input)

console.log(output_2)
