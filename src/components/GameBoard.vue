<script setup lang="ts">
import { CIRCLE, CROSS } from '@/utils/constants'
import { ref } from 'vue'
const boxes = ref(new Array(9))
</script>

<template>
  <div class="p-2 w-full md:w-1/2 lg:w-1/3">
    <div class="grid grid-cols-3 grid-rows-3 gap-2">
      <button
        class="w-16 h-16 lg:w-24 lg:h-24 text-lg border-none bg-white border border-solid"
        v-for="(_b, i) in boxes"
        :key="i"
        v-html="CIRCLE"
      ></button>
    </div>
  </div>
</template>
