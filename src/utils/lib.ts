import { STORAGE_KEY, type PlayerRecord, type SymbolValue, CROSS, CIRCLE } from './constants'

/**
 * Converts the box index into alphanumeric form.
 * @param index The box index
 * @returns The algebraic form, e.g. 'A2'
 */
export const getAlgebraicNotation = (index: number) => {
  const row = 4 - Math.ceil((index + 1) / 3)
  const col = ['A', 'B', 'C'][index % 3]
  return `${col}${row}`
}

/**
 * Gets the icon code for the specified box code
 * @param box The box code
 * @returns The icon code
 */
export const getIcon = (box: string) => {
  if (box === CROSS) return 'cross'
  if (box === CIRCLE) return 'circle'
  return 'blank'
}

/**
 * Checks for victory or draw
 * @param boxes The full array of boxes with values
 * @returns The winning symbol
 */
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

  let winningSymbol: SymbolValue | null = null

  for (const [first, second, third] of winningCombinations) {
    const equalityCheck = boxes[first] === boxes[second] && boxes[second] === boxes[third]
    if (equalityCheck && !!boxes[first]) {
      winningSymbol = boxes[first] as SymbolValue
      break
    }
  }

  // check for draw
  if (boxes.every((b) => !!b) && !winningSymbol) return 'D'

  return winningSymbol
}

/**
 * Gets the leaderboard data from local storage
 * @returns 
 */
export const getLeaderboardData = () => {
  const storedJSON = localStorage[STORAGE_KEY]
  let data: PlayerRecord[]

  if (!storedJSON) data = []
  else data = JSON.parse(localStorage[STORAGE_KEY]) as PlayerRecord[]

  return data
}
