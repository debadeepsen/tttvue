<script setup lang="ts">
import { computed } from 'vue'
import SymbolCross from '@/components/icons/symbols/SymbolCross.vue'
import SymbolCircle from '@/components/icons/symbols/SymbolCircle.vue'
import SymbolEmpty from '@/components/icons/symbols/SymbolEmpty.vue'

const props = defineProps<{
  icon: 'cross' | 'circle' | 'blank'
  size?: number
  iconClass?: string
}>()

const iconSvg = computed(() => {
  const components = {
    cross: SymbolCross,
    circle: SymbolCircle,
    blank: SymbolEmpty
  }

  return components[props.icon]
})
</script>

<template>
  <span
    class="inline-block ml-1"
    :style="{
      width: size ? `${size}px` : '1.25rem',
      height: size ? `${size}px` : '1.25rem'
    }"
  >
    <keep-alive><component :is="iconSvg" :class="iconClass" /></keep-alive>
  </span>
</template>
