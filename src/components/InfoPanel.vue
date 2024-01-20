<script setup lang="ts">
import { ref, computed } from 'vue'
import { useGameStore } from '@/stores/game'
import PlayerSymbol from '@/components/PlayerSymbol.vue'
import GameHistory from '@/components/GameHistory.vue'

const players = ref(['Manuel', 'Pratyush'])
const gameStore = useGameStore()

const gameInProgress = computed(() => gameStore.started)

function startGame() {
  gameStore.players = players.value
  gameStore.started = true
}
</script>
<template>
  <div class="game-container px-8 lg:px-16 min-h-full w-full lg:w-2/3">
    <h1 class="mb-6">Tic-Tac-Toe</h1>
    <div v-show="!gameInProgress" class="border border-zinc-400 w-full p-2">
      <h3 class="mt-8 lg:mt-0 mb-4">Enter the names of the players</h3>
      <div class="flex">
        <input type="text" placeholder="Player 1" v-model="players[0]" />
        <player-symbol icon="cross" icon-class="mt-2" />
      </div>
      <div class="mt-2 flex">
        <input type="text" placeholder="Player 2" v-model="players[1]" />
        <player-symbol icon="circle" icon-class="mt-2" />
      </div>
      <div class="mt-2">
        <button class="primary" @click="startGame">Start Game</button>
      </div>
    </div>
    <div v-show="gameInProgress">
      <div>
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
.player-name {
  @apply p-1 font-bold inline-flex w-fit rounded-md;
}
</style>
