<script setup lang="ts">
import { ref } from 'vue'
import { useGameStore, type PlayerMove } from '@/stores/game'
import WaitingSymbol from './WaitingSymbol.vue'
import { MOVE } from '@/utils/constants'

const gameStore = useGameStore()

function isCurrentMove(player: PlayerMove) {
  return player.move === MOVE
}

function getMove(player: PlayerMove) {
  return isCurrentMove(player) ? '' : player.move
}
</script>

<template>
  <table>
    <tr>
      <th>{{ gameStore.players?.[0] }}</th>
      <th>{{ gameStore.players?.[1] }}</th>
    </tr>
    <tr v-for="([playerX, playerO], i) in gameStore.history" :key="i">
      <td>
        {{ getMove(playerX) }}
        <waiting-symbol v-show="isCurrentMove(playerX)" />
      </td>
      <td>
        {{ getMove(playerO) }}
        <waiting-symbol v-show="isCurrentMove(playerO)" />
      </td>
    </tr>
  </table>
</template>

<style scoped>
table {
  @apply w-full border border-solid border-zinc-800/10;
}
th,
td {
  @apply p-2 border-zinc-400 w-1/2;
}
tr:nth-child(2n + 1) {
  @apply bg-zinc-400/10;
}
th {
  @apply bg-zinc-300;
}
</style>
