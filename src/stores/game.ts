import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', () => {
  const players = ref(['', ''])
  const started = ref(false)

  return { players, started }
})
