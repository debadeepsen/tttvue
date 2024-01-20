<template>
  <div class="blink">
    <div class="bg-green-500 text-green-800 text-sm p-3 rounded-md">Waiting</div>
  </div>
</template>

<style scoped>
.blink {
  animation: blinker 0.5s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
