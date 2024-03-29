import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { CIRCLE, CROSS, BLANK, type SymbolValue } from '@/utils/constants'

const defaultState = {
  players: ['', ''],
  started: false,
  currentPlayer: null,
  boxes: new Array(9).fill(BLANK),
  history: { [CROSS]: [], [CIRCLE]: [] }
}

export const useGameStore = defineStore('game', () => {
  const players = ref(defaultState.players)
  const started = ref(defaultState.started)
  const currentPlayer = ref<number | null>(defaultState.currentPlayer)
  const boxes = ref<string[]>(defaultState.boxes)
  const history = ref<{ [CROSS]: number[]; [CIRCLE]: number[] }>(defaultState.history)

  // every time the game starts, automatically give the turn to player X
  watch(started, function (val) {
    if (val) {
      currentPlayer.value = 0
    }
  })

  const updateGameHistory = (currentSymbol: SymbolValue, index: number) => {
    history.value[currentSymbol].push(index)
  }

  const setNextPlayer = () => {
    currentPlayer.value = 1 - currentPlayer.value!
  }

  const undoLastMove = (symbol: SymbolValue) => {
    if (currentPlayer.value === null) return

    const [lastBoxIndex] = history.value[symbol].slice(-1)

    boxes.value[lastBoxIndex] = BLANK
    history.value[symbol].pop()
    currentPlayer.value = 1 - currentPlayer.value
  }

  const resetGame = () => {
    players.value = defaultState.players
    started.value = defaultState.started
    currentPlayer.value = defaultState.currentPlayer
    boxes.value = new Array(9).fill(BLANK)
    history.value = { [CROSS]: [], [CIRCLE]: [] }
  }

  return {
    players,
    started,
    currentPlayer,
    history,
    boxes,
    updateGameHistory,
    setNextPlayer,
    undoLastMove,
    resetGame
  }
})
