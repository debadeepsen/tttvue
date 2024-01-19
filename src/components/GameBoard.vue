<script setup lang="ts">
import { CIRCLE, CROSS } from '@/utils/constants'
import { ref } from 'vue'
const boxes = ref(new Array(9))
</script>

<template>
  <div class="p-2 w-full md:w-1/2 lg:w-1/3">
    <div class="grid grid-cols-3 grid-rows-3 gap-1 bg-[#333]">
      <button
        class="w-full h-full text-lg border-none bg-white rounded-none"
        v-for="(_b, i) in boxes"
        :key="i"
        v-html="CIRCLE"
      ></button>
    </div>
  </div>
</template>
