<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import PlayerSymbol from '@/components/PlayerSymbol.vue'

const store = useGameStore()
</script>

<template>
  <span class="hidden lg:inline-block mr-2">Game between</span>
  <div class="player-name bg-red-400/20 text-red-600">
    {{ store.players[0] }}
    <player-symbol icon="cross" />
  </div>
  <span class="inline-block lg:hidden mx-2">vs</span>
  <span class="hidden lg:inline-block mx-2">and</span>
  <div class="player-name bg-blue-400/20 text-blue-600">
    {{ store.players[1] }}
    <player-symbol icon="circle" />
  </div>
</template>

<style scoped>
.player-name {
  @apply p-1 font-bold inline-flex w-fit rounded-md;
}
</style>
