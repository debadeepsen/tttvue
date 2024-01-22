<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { STORAGE_KEY, type PlayerRecord } from '@/utils/constants'

const leaderboardData = ref<PlayerRecord[]>([])

onMounted(() => {
  const data = JSON.parse(localStorage[STORAGE_KEY])
  leaderboardData.value = data
})
</script>
<template>
  <div>
    <h1>Leaderboard</h1>
    {{ leaderboardData }}
  </div>
</template>
