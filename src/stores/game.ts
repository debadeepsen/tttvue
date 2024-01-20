import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { CIRCLE, CROSS, INITIAL_HISTORY, MOVE } from '@/utils/constants'

export const useGameStore = defineStore('game', () => {
  const players = ref(['', ''])
  const started = ref(false)
  const currentPlayer = ref<number | null>(null)
  const boxes = ref<string[]>(new Array(9).fill(''))
  const history = ref<{ [CROSS]: string[]; [CIRCLE]: string[] }>(INITIAL_HISTORY)

  // every time the game starts, automatically give the turn to player X
  watch(started, function (currentValue) {
    if (currentValue) {
      currentPlayer.value = 0
      // history.value = { [CROSS]: [MOVE], [CIRCLE]: [''] }
    }
  })

  // update history from here only, so that "boxes" is the single source of truth
  // watch(boxes, (val) => {})

  return { players, started, currentPlayer, history, boxes }
})
