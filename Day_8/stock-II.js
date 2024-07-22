const getProfit = (prices) => {
  let buy = prices[0]
  let profit = 0

  for (let i = 1; i < prices.length; i++) {
    const sell = prices[i]
    if (sell > buy) {
      profit += sell - buy
    }
    buy = sell
  }
  return profit
}

const out = getProfit([1, 2, 3, 4, 5])
const out2 = getProfit([7, 1, 5, 3, 6, 4])
console.log(out)
console.log(out2)

