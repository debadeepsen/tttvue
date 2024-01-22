import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { CIRCLE, CROSS } from '@/utils/constants'

const defaultState = {
  players: ['', ''],
  started: false,
  currentPlayer: null,
  boxes: new Array(9).fill(''),
  history: { [CROSS]: [], [CIRCLE]: [] }
}

export const useGameStore = defineStore('game', () => {
  const players = ref(defaultState.players)
  const started = ref(defaultState.started)
  const currentPlayer = ref<number | null>(defaultState.currentPlayer)
  const boxes = ref<string[]>(defaultState.boxes)
  const history = ref<{ [CROSS]: string[]; [CIRCLE]: string[] }>(defaultState.history)

  // every time the game starts, automatically give the turn to player X
  watch(started, function (val) {
    if (val) {
      currentPlayer.value = 0
    }
  })

  const resetGame = () => {
    players.value = defaultState.players
    started.value = defaultState.started
    currentPlayer.value = defaultState.currentPlayer
    boxes.value = new Array(9).fill('')
    history.value = { [CROSS]: [], [CIRCLE]: [] }
  }

  return { players, started, currentPlayer, history, boxes, resetGame }
})
