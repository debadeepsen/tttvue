<script setup lang="ts">
import { computed } from 'vue'
import { useGameStore } from '@/stores/game'
import PlayerNamesForm from '@/components/PlayerNamesForm.vue'
import GameHistory from '@/components/GameHistory.vue'
import GameInfo from '@/components/GameInfo.vue'

const gameStore = useGameStore()

const gameInProgress = computed(() => gameStore.started)
</script>
<template>
  <div class="game-container px-8 lg:px-16 min-h-full w-full lg:w-2/3">
    <h1 class="mb-6">Tic-Tac-Toe</h1>
    <div v-show="!gameInProgress" class="border border-zinc-400 w-full p-2">
      <player-names-form />
    </div>
    <div v-show="gameInProgress">
      <div>
        <game-info />
      </div>
      <div class="mt-4">
        <game-history />
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-container input {
  @apply w-full;
}
</style>
