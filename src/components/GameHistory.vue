<script setup lang="ts">
import { useGameStore } from '@/stores/game'
const gameStore = useGameStore()
</script>

<template>
  <table>
    <tr>
      <th>{{ gameStore.players?.[0] }}</th>
      <th>{{ gameStore.players?.[1] }}</th>
    </tr>
    <tr v-for="(historyRow, i) in gameStore.history" :key="i">
      <td>{{ historyRow[i][0] }}</td>
      <td>{{ historyRow[i][1] }}</td>
    </tr>
  </table>
</template>

<style scoped>
table {
  @apply w-full border border-solid border-zinc-800/10;
}
th,
td {
  @apply p-2;
}
th {
  @apply bg-zinc-300;
}
</style>
