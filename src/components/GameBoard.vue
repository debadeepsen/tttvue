<script setup lang="ts">
import { ref } from 'vue'
const boxes = ref(new Array(9))
</script>

<template>
  <div class="board">
    <button v-for="(_b, i) in boxes" :key="i">&times;</button>
  </div>
</template>

<style scoped>
.board {
  @apply grid grid-cols-3 grid-rows-3;
}
button {
  @apply w-full h-full;
}
</style>
