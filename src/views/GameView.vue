<script setup lang="ts">
import GameBoard from '@/components/GameBoard.vue'
import InfoPanel from '@/components/InfoPanel.vue'
</script>

<template>
  <div class="flex flex-col lg:flex-row items-center lg:items-start">
    <game-board />
    <info-panel />
  </div>
</template>
