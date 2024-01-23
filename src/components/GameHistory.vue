<script setup lang="ts">
import { computed } from 'vue'
import { useGameStore } from '@/stores/game'
import { CIRCLE, CROSS } from '@/utils/constants'
import WaitingSymbol from '@/components/utilities/WaitingSymbol.vue'
import UndoButton from './UndoButton.vue'
import { getAlgebraicNotation } from '@/utils/lib'

const store = useGameStore()

const crossHistory = computed(() => store.history[CROSS].map((h) => getAlgebraicNotation(h)))
const circleHistory = computed(() => store.history[CIRCLE].map((h) => getAlgebraicNotation(h)))
</script>

<template>
  <div class="flex flex-wrap w-full shadow-md">
    <div class="w-1/2">
      <div class="col-header">
        {{ store.players?.[0] }}
        <waiting-symbol v-show="store.currentPlayer === 0" class="ml-2" />
        <undo-button v-show="store.currentPlayer !== 0 && !!store.history[CROSS]?.length" />
      </div>
      <div v-for="(move, i) in crossHistory" :key="i" class="row">
        {{ move }}
      </div>
    </div>
    <div class="w-1/2">
      <div class="col-header">
        {{ store.players?.[1] }}
        <waiting-symbol v-show="store.currentPlayer === 1" class="ml-2" />
        <undo-button v-show="store.currentPlayer !== 1 && !!store.history[CIRCLE]?.length" />
      </div>
      <div v-for="(move, i) in circleHistory" :key="i" class="row">
        {{ move }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.col-header {
  @apply w-full box-border bg-zinc-300 font-bold pl-2 py-5 flex items-center h-[24px];
}
.row {
  @apply pl-2 py-2 flex items-center;
}
</style>
