export const getAlgebraicNotation = (index: number) => {
  const row = 4 - Math.ceil((index + 1) / 3)
  const col = ['A', 'B', 'C'][index % 3]
  return `${col}${row}`
}
