import { CROSS, CIRCLE } from './constants'

export const getAlgebraicNotation = (index: number) => {
  const row = 4 - Math.ceil((index + 1) / 3)
  const col = ['A', 'B', 'C'][index % 3]
  return `${col}${row}`
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
