<script setup lang="ts">
import { ref } from 'vue'
import { useGameStore } from '@/stores/game'
import PlayerSymbol from '@/components/utilities/PlayerSymbol.vue'

const players = ref(['', ''])
const store = useGameStore()

const startGame = () => {
  store.players = players.value
  store.started = true
}
</script>

<template>
  <h3 class="mt-2 lg:mt-0 mb-4">Enter the names of the players</h3>
  <div class="player-name">
    <player-symbol icon="cross" />
    <input type="text" placeholder="Player 1" v-model="players[0]" />
  </div>
  <div class="mt-2 player-name">
    <player-symbol icon="circle" />
    <input type="text" placeholder="Player 2" v-model="players[1]" />
  </div>
  <div class="mt-2">
    <button class="primary" @click="startGame">Start Game</button>
  </div>
</template>

<style scoped>
input[type='text'] {
  @apply w-full border-none text-base outline-0;
}
.player-name {
  @apply pl-2 flex items-center rounded-sm transition-all;
  box-shadow: 0px 0px 0px 1px #1112;
}
div:has(input:focus) {
  box-shadow: 0px 0px 0px 1px #00acc1;
}
</style>
