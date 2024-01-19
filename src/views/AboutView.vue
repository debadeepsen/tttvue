<script setup lang="ts">
import IconGame from '@/components/icons/IconGame.vue'
</script>

<template>
  <div class="flex flex-col lg:flex-row">
    <div class="w-full lg:w-1/3 p-8 flex justify-center">
      <icon-game />
    </div>
    <div class="w-full lg:w-2/3 flex flex-col items-center lg:items-start">
      <h1>About this game</h1>
      <p>This is a simple tic-tac-toe game implemented with Vue JS.</p>
      <h2>Front End Tech Stack</h2>
      <ul>
        <li><strong>Framework:</strong> &nbsp; Vue JS 3.3.1</li>
        <li><strong>TypeScript version:</strong> &nbsp; 5.3.0</li>
        <li><strong>State management library:</strong> &nbsp; Pinia 2.1.7</li>
      </ul>
      <h2>Repository</h2>
      <a target="_blank" href="https://github.com/debadeepsen/tttvue"
        >https://github.com/debadeepsen/tttvue</a>
    </div>
  </div>
</template>

<style scoped>
h3 {
  @apply mt-6;
}
li {
  @apply mb-2;
}
</style>
