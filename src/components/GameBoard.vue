<script setup lang="ts">
import { CIRCLE, CROSS } from '@/utils/constants'
import { ref } from 'vue'
import PlayerSymbol from './PlayerSymbol.vue'
import { useGameStore } from '@/stores/game'

const gameStore = useGameStore()
function getIcon(box: string) {
  if (box === CROSS) return 'cross'
  if (box === CIRCLE) return 'circle'
  return 'blank'
}
</script>

<template>
  <div class="p-2 w-full md:w-1/2 lg:w-1/3 flex justify-center items-center">
    <div class="grid grid-cols-3 grid-rows-3 gap-1 bg-[#333] w-72">
      <button
        class="size-full h-[5.5rem] text-lg border-none bg-white rounded-none"
        v-for="(box, i) in gameStore.boxes"
        :key="i"
      >
        <player-symbol :icon="getIcon(box)" :size="54" />
      </button>
    </div>
  </div>
</template>
