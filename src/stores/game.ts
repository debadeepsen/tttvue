import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { CIRCLE, CROSS, INITIAL_HISTORY } from '@/utils/constants'

export const useGameStore = defineStore('game', () => {
  const players = ref(['', ''])
  const started = ref(false)
  const currentPlayer = ref<number | null>(null)
  const boxes = ref<string[]>(new Array(9).fill(''))
  const history = ref<{ [CROSS]: string[]; [CIRCLE]: string[] }>(INITIAL_HISTORY)

  // every time the game starts, automatically give the turn to player X
  watch(started, function (val) {
    if (val) {
      currentPlayer.value = 0
    }
  })

  return { players, started, currentPlayer, history, boxes }
})
