import { CROSS, CIRCLE, BLANK } from './constants'

export const getAlgebraicNotation = (index: number) => {
  const row = 4 - Math.ceil((index + 1) / 3)
  const col = ['A', 'B', 'C'][index % 3]
  return `${col}${row}`
}

export const hasWon = (symbol: typeof CROSS | typeof CIRCLE, boxes: string[]) => {
  //   const isRowFilled = (start: number) =>
  //     boxes[start] === symbol && boxes[start + 1] === symbol && boxes[start + 2] === symbol
  //   const rowWinCondition = isRowFilled(0) || isRowFilled(1) || isRowFilled(2)
  //   console.log(isRowFilled(0))
  //   console.log(isRowFilled(1))
  //   console.log(isRowFilled(2))
  //   console.log({ rowWinCondition })
  //   const isColFilled = (start: number) =>
  //     boxes[start] === symbol && boxes[start + 3] === symbol && boxes[start + 6] === symbol
  //   const colWinCondition = isColFilled(0) || isColFilled(1) || isColFilled(2)
  //   console.log({ colWinCondition })
  //   const diagWinCondition =
  //     (boxes[0] === symbol && boxes[4] === symbol && boxes[8] === symbol) ||
  //     (boxes[2] === symbol && boxes[4] === symbol && boxes[6] === symbol)
  //   console.log({ diagWinCondition })
  //   console.log()
  //   console.log()
  //   return rowWinCondition || colWinCondition || diagWinCondition
}

export const whoWon = (boxes: string[]) => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  let winningSymbol: typeof CROSS | typeof CIRCLE | null = null

  for (const [first, second, third] of winningCombinations) {
    const equalityCheck = boxes[first] === boxes[second] && boxes[second] === boxes[third]
    if (equalityCheck && !!boxes[first]) {
      winningSymbol = boxes[first] as typeof CROSS | typeof CIRCLE
      break
    }
  }

  // check for draw
  if (boxes.every((b) => !!b) && !winningSymbol) return 'D'

  return winningSymbol
}
