<script setup lang="ts">
import { computed } from 'vue'
import SymbolCross from '@/components/icons/symbols/SymbolCross.vue'
import SymbolCircle from '@/components/icons/symbols/SymbolCircle.vue'

const props = defineProps<{
  icon: 'cross' | 'circle'
  size?: number
  iconClass?: string
}>()

const iconSvg = computed(() => (props.icon === 'cross' ? SymbolCross : SymbolCircle))
const sizeClass = computed(() => (props.size ? `w-${props.size} h-${props.size}` : 'w-5 h-5'))
</script>

<template>
  <span class="inline-block ml-1" :class="sizeClass">
    <keep-alive><component :is="iconSvg" :class="iconClass" /></keep-alive>
  </span>
</template>
