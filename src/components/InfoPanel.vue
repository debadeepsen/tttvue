<script setup lang="ts">
import { ref, computed } from 'vue'
import { useGameStore } from '@/stores/game'
import { CROSS, CIRCLE } from '@/utils/constants.ts'

const players = ref(['DEB', 'KAL'])
const gameStore = useGameStore()

const gameInProgress = computed(() => gameStore.started)

function startGame() {
  gameStore.players = players.value
  gameStore.started = true
}
</script>
<template>
  <div class="game-container px-8 min-h-full w-full lg:w-2/3">
    <div v-show="!gameInProgress" class="border border-zinc-400 w-full p-2">
      <h3 class="mb-4">Enter the names of the players</h3>
      <div>
        <input type="text" placeholder="Player 1" v-model="players[0]" />
      </div>
      <div class="mt-2">
        <input type="text" placeholder="Player 2" v-model="players[1]" />
      </div>
      <div class="mt-2">
        <button class="primary" @click="startGame">Start Game</button>
      </div>
    </div>
    <div v-show="gameInProgress">
      Game between
      <span class="player-name"
        >{{ gameStore.players[0] }}
        <span class="player-symbol" v-html="CROSS"></span>
      </span>
      and
      <span class="player-name"
        >{{ gameStore.players[1] }} <span class="player-symbol" v-html="CIRCLE"></span
      ></span>
    </div>
  </div>
</template>

<style scoped>
.game-container input {
  @apply w-full;
}
.player-name {
  @apply text-cyan-600 font-bold;
}
.player-symbol {
  @apply inline-block w-8 h-8 ml-1 rounded-full bg-zinc-800/20;
}
.player-symbol svg {
  @apply w-2 h-2;
}
</style>
