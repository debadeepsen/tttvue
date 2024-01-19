<script setup>
import { useGameStore } from '@/stores/game'
const gameStore = useGameStore()
</script>

<template>
  <table>
    <tr>
      <th>{{ gameStore.players?.[0] }}</th>
      <th>{{ gameStore.players?.[1] }}</th>
    </tr>
    <tr v-for="historyRow in gameStore.history" :key="historyRow">
      <td>{{ historyRow }}</td>
      <td></td>
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
