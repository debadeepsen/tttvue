<script setup lang="ts">
import { ref } from 'vue'
import { useGameStore } from '@/stores/game'

const players = ref(['', ''])
const gameStore = useGameStore()
function startGame() {
  gameStore.players = players.value()
}
</script>
<template>
  <div class="p-4 min-h-full w-[65%]">
    <h2>Info</h2>
    <div class="border border-zinc-400 w-full p-2">
      <h3>Enter the names of the players</h3>
      <div>
        <input type="text" placeholder="Player 1" v-model="players[0]" />
      </div>
      <div class="mt-2">
        <input type="text" placeholder="Player 2" v-model="players[1]" />
      </div>
      <div class="mt-2">
        <button @click="startGame">Start Game</button>
      </div>
    </div>
  </div>
</template>
