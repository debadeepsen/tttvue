export const CROSS = 'X'
export const CIRCLE = 'O'
export const BLANK = ''
export const DRAW = 'D'
export const MOVE = 'M'
export const ROW_IDS = ['1', '2', '3']
export const COL_IDS = ['A', 'B', 'C']
export const STORAGE_KEY = 'ttt-data'

export type PlayerRecord = { name: string; moves: number; timestamp: number }
export type SymbolValue = typeof CROSS | typeof CIRCLE
