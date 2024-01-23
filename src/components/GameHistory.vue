<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import { CIRCLE, CROSS } from '@/utils/constants'
import WaitingSymbol from '@/components/utilities/WaitingSymbol.vue'
import IconUndo from './icons/IconUndo.vue'

const store = useGameStore()
</script>

<template>
  <div class="flex flex-wrap w-full shadow-md">
    <div class="w-1/2">
      <div class="col-header">
        {{ store.players?.[0] }}
        <waiting-symbol v-show="store.currentPlayer === 0" class="ml-2" />
      </div>
      <div v-for="(move, i) in store.history[CROSS]" :key="i" class="row">
        {{ move }}
        <button>
          <icon-undo />
        </button>
      </div>
    </div>
    <div class="w-1/2">
      <div class="col-header">
        {{ store.players?.[1] }} <waiting-symbol v-show="store.currentPlayer === 1" class="ml-2" />
      </div>
      <div v-for="(move, i) in store.history[CIRCLE]" :key="i" class="row">
        {{ move }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.col-header {
  @apply w-full box-border bg-zinc-300 font-bold pl-2 py-2 flex;
}
.row {
  @apply w-1/2 pl-2 py-2;
}
</style>
