<template>
  <div class="flex items-center h-[24px]">
    <div class="blink"></div>
  </div>
</template>

<style scoped>
.blink {
  @apply size-3 bg-red-400 rounded-full;
  animation: blinker 1.25s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
