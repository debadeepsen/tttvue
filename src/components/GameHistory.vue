<script setup lang="ts">
import { ref } from 'vue'
import { useGameStore } from '@/stores/game'
import WaitingSymbol from './WaitingSymbol.vue'
import { CIRCLE, CROSS, MOVE } from '@/utils/constants'

const store = useGameStore()
</script>

<template>
  <div class="flex flex-wrap w-full shadow-md">
    <div class="w-1/2">
      <div class="col-header">{{ store.players?.[0] }}</div>
      <div v-for="(move, i) in store.history[CROSS]" :key="i" class="row">
        {{ move }}
      </div>
    </div>
    <div class="w-1/2">
      <div class="col-header">{{ store.players?.[1] }}</div>
      <div v-for="(move, i) in store.history[CIRCLE]" :key="i" class="row">
        {{ move }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.col-header {
  @apply w-full box-border bg-zinc-300 font-bold pl-2 py-2;
}
.row {
  @apply w-1/2 pl-2 py-2;
}
</style>
