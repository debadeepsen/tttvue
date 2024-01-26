import { describe, it, expect } from 'vitest'
import { getAlgebraicNotation, whoWon } from '@/utils/lib'

describe('lib', () => {
  it('tests notation', () => {
    const notation = getAlgebraicNotation(1)
    expect(notation).toBe('B3')
  })

  it('tests game logic', () => {
    let boxes: string[]

    boxes = ['X', 'X', 'X', 'O', 'O', '', '', '', '']
    expect(whoWon(boxes)).toBe('X')

    boxes = ['O', 'O', 'O', '', '', 'X', 'X', '', '']
    expect(whoWon(boxes)).toBe('O')

    boxes = ['X', 'O', 'O', '', 'X', '', '', '', 'X']
    expect(whoWon(boxes)).toBe('X')

    boxes = ['O', 'X', 'X', 'X', 'O', 'O', 'X', 'O', 'X']
    expect(whoWon(boxes)).toBe('D')
  })
})
