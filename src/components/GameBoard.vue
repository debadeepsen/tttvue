<script setup lang="ts">
import { CIRCLE, CROSS } from '@/utils/constants'
import PlayerSymbol from './PlayerSymbol.vue'
import { useGameStore } from '@/stores/game'

const store = useGameStore()

function getIcon(box: string) {
  if (box === CROSS) return 'cross'
  if (box === CIRCLE) return 'circle'
  return 'blank'
}

function updateGameHistory(currentSymbol: typeof CROSS | typeof CIRCLE, index: number) {
  store.history[currentSymbol].push(index.toString())
}

function setNextPlayer() {
  store.currentPlayer = store.currentPlayer === 0 ? 1 : 0
}

function setBoxValue(index: number) {
  if (!store.started) return
  if(store.boxes[index]) return

  const currentSymbol = store.currentPlayer === 0 ? CROSS : CIRCLE
  store.boxes[index] = currentSymbol
  updateGameHistory(currentSymbol, index)
  setNextPlayer()
}
</script>

<template>
  <div class="p-2 w-full md:w-1/2 lg:w-1/3 flex justify-center items-center">
    <div class="grid grid-cols-3 grid-rows-3 gap-1 bg-[#333] w-72">
      <button
        class="size-full h-[5.5rem] text-lg border-none bg-white rounded-none"
        :style="{ cursor: store.started ? 'pointer' : 'default' }"
        v-for="(box, i) in store.boxes"
        :key="i"
        @click="setBoxValue(i)"
      >
        <player-symbol
          :icon="getIcon(box)"
          :size="54"
          :icon-class="box === CROSS ? 'text-red-600' : 'text-blue-600'"
        />
      </button>
    </div>
  </div>
</template>
