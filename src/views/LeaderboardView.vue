<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { type PlayerRecord } from '@/utils/constants'
import { getLeaderboardData } from '@/utils/lib'

const leaderboardData = ref<PlayerRecord[]>([])

onMounted(() => {
  const data = getLeaderboardData()
  // this can be improved by inserting the correct value at the time of updating, rather than sorting the records on mount
  data.sort((x, y) => x.moves - y.moves)
  leaderboardData.value = data
})
</script>
<template>
  <div>
    <h1 class="mb-4">Leaderboard</h1>
    <div v-if="!leaderboardData?.length">
      <div>No leaderboard entries found</div>
    </div>
    <div v-else>
      <div v-for="item in leaderboardData" :key="item.timestamp" class="py-1">
        <strong>{{ item.name }}</strong
        >: {{ item.moves }} moves <span class="p-1 text-sm bg-zinc-100 rounded-sm">{{ new Date(item.timestamp).toLocaleString() }}</span>
      </div>
    </div>
  </div>
</template>
