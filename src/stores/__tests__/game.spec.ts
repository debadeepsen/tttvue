import { setActivePinia, createPinia } from 'pinia'
import { useGameStore } from '../game'
import { beforeEach, describe, expect, it } from 'vitest'

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Checks initial conditions', () => {
    const store = useGameStore()
    expect(store.boxes.length).toBe(9)
  })

  it('Checks for correct player changes', () => {
    const store = useGameStore()
    store.currentPlayer = 0
    store.setNextPlayer()
    expect(store.currentPlayer).toBe(1)
  })

  it('Tests updating game history', () => {
    const store = useGameStore()
    store.updateGameHistory('X', 2)
    expect(store.history.X.length).toBe(1)
    expect(store.history.X[0]).toBe(2)
  })
})
