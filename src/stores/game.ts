import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export type PlayerMove = {
  player: number
  move: string
}

export const useGameStore = defineStore('game', () => {
  const players = ref(['', ''])
  const started = ref(false)
  const currentPlayer = ref<number | null>(null)
  const history = ref<PlayerMove[]>([])

  // every time the game starts, automatically give the turn to player 1
  watch(started, function (currentValue) {
    if (currentValue) {
      currentPlayer.value = 0
    }
  })

  return { players, started, currentPlayer, history }
})
