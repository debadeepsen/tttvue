<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import PlayerSymbol from '@/components/PlayerSymbol.vue'

const gameStore = useGameStore()
</script>

<template>
  Game between
  <div class="player-name bg-red-400/20 text-red-600">
    {{ gameStore.players[0] }}
    <player-symbol icon="cross" />
  </div>
  and
  <div class="player-name bg-blue-400/20 text-blue-600">
    {{ gameStore.players[1] }}
    <player-symbol icon="circle" />
  </div>
</template>

<style scoped>
.player-name {
  @apply p-1 font-bold inline-flex w-fit rounded-md;
}
</style>
