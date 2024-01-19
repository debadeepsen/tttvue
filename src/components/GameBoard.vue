<script setup lang="ts">
import { ref } from 'vue'
const boxes = ref(new Array(9))
</script>

<template>
  <div class="container">
    <div class="board">
      <button v-for="(_b, i) in boxes" :key="i">&times;</button>
    </div>
  </div>
</template>

<style scoped>
.container {
    @apply p-2;
}
.board {
  @apply grid grid-cols-3 grid-rows-3 gap-2;
}
button {
  @apply w-8 h-8 lg:w-12 lg:h-12 text-lg border-none bg-white cursor-pointer;
}
</style>
