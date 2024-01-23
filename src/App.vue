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
  @apply w-full h-screen flex justify-center items-center;
}
.container {
  @apply max-[375px]:pt-4 bg-white lg:w-[80vw] max-w-[1024px] font-normal p-8 lg:p-16 rounded-md shadow-xl;
}
</style>
