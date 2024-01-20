import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { MOVE } from '@/utils/constants'

export type PlayerMove = {
  move: string | null
}

export const useGameStore = defineStore('game', () => {
  const players = ref(['', ''])
  const started = ref(false)
  const currentPlayer = ref<number | null>(null)
  const history = ref<[PlayerMove, PlayerMove][] | null>(null)

  // every time the game starts, automatically give the turn to player X
  watch(started, function (currentValue) {
    if (currentValue) {
      currentPlayer.value = 0
      history.value = [[{ move: MOVE }, { move: null }]]
    }
  })

  return { players, started, currentPlayer, history }
})
