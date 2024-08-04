/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */

const findDistance = (p1, p2) => {
  const x = p1[0] - p2[0]
  const y = p1[1] - p2[1]
  return x * x + y * y
}

const validSquare = function (p1, p2, p3, p4) {

  const l1 = findDistance(p1, p2)
  const l2 = findDistance(p1, p3)
  const l3 = findDistance(p1, p4)
  const l4 = findDistance(p2, p3)
  const l5 = findDistance(p2, p4)
  const l6 = findDistance(p3, p4)
  const arr = [l1, l2, l3, l4, l5, l6]
  arr.sort((a, b) => a - b)
  return arr[0] > 0 && arr[0] === arr[1] && arr[1] === arr[2] && arr[2] === arr[3] && arr[3] === arr[0] && arr[4] === arr[5] && arr[4] === 2 * arr[0]
};

const p1 = [0, 0], p2 = [1, 1], p3 = [1, 0], p4 = [0, 1]
// const p1 = [0, 0], p2 = [1, 1], p3 = [1, 0], p4 = [0, 12]
// const p1 = [1, 0], p2 = [-1, 0], p3 = [0, 1], p4 = [0, -1]
const out1 = validSquare(p1, p2, p3, p4)
console.log(out1)