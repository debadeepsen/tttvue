<template>
  <div class="blink"><slot /></div>
</template>

<style scoped>
.blink_me {
  animation: blinker 0.5s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
