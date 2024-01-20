<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Game</RouterLink>
      <RouterLink to="/leaderboard">Leaderboard</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <main>
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
main {
  @apply w-full h-[calc(100vh-53px)] flex justify-center items-center;
}
.container {
  @apply bg-white w-[90vw] lg:w-[80vw] max-w-[1024px] font-normal p-8 lg:p-16 rounded-md shadow-xl;
}
</style>
