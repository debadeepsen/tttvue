<script setup lang="ts">
import IconGame from '@/components/icons/IconGame.vue'
</script>

<template>
  <div class="flex flex-col lg:flex-row">
    <div class="w-full lg:w-1/3 px-0 md:px-4 p-8 flex justify-center">
      <icon-game />
    </div>
    <div class="w-full lg:w-2/3 flex flex-col items-center lg:items-start">
      <h1>About this game</h1>
      <div class="mt-2">This is a simple tic-tac-toe game implemented with Vue JS.</div>
      <!-------------------------------------------------------->
      <h2>How to play</h2>
      <div class="mt-2">
        <p>Provide the player names on the splash screen and press "Start Game". The blinking red dot indicates the player who has the current turn.</p>
        <p>The current player can press anywhere on the empty grid to register their move.</p>
      </div>
      <!-------------------------------------------------------->
      <h2>Game notation</h2>
      <div class="mt-2">
        The game uses a similar technique to chess for recording moves. For example, if a player
        decides to pick <span class="bg-zinc-200 inline-block px-2 mx-1 rounded-sm">row A</span> and
        <span class="bg-zinc-200 inline-block px-2 mx-1 rounded-sm">column 2</span>, their move will be
        recorded as <code class="text-lg font-bold">A2</code>.
      </div>
      <!-------------------------------------------------------->
      <h2>Front End Tech Stack</h2>
      <ul>
        <li><strong>Framework:</strong> Vue JS 3.3.1</li>
        <li><strong>TypeScript version:</strong> 5.3.0</li>
        <li><strong>State management library:</strong> Pinia 2.1.7</li>
      </ul>
      <!-------------------------------------------------------->
      <h2>Repository</h2>
      <a target="_blank" href="https://github.com/debadeepsen/tttvue"
        >https://github.com/debadeepsen/tttvue</a
      >
      <!-------------------------------------------------------->
      <h2>Credits</h2>
      <div>
        Background image by
        <a
          target="_blank"
          href="https://unsplash.com/@jontyson?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          >Jon Tyson</a
        >
        on
        <a
          target="_blank"
          href="https://unsplash.com/photos/brown-and-white-textile-on-brown-wooden-table-eTjX8xc1in8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          >Unsplash</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  @apply mt-6 mb-2;
}
li {
  @apply mb-2;
}
ul {
  @apply mt-0;
}
ul,
li:last-child {
  @apply mb-0;
}
</style>
