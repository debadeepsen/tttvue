<template>
    <div
      data-testid="modal"
      v-show="show"
      class="bg-zinc-600/70 fixed left-0 top-0 w-screen h-screen z-[100] flex justify-center items-center"
      v-on:click="() => $emit('close')"
    >
      <div
        class="rounded-lg shadow-xl p-4 bg-white w-full lg:min-w-[300px] max-w-[600px] relative"
        v-on:click.stop=""
      >
        <button
          class="absolute top-[6px] right-[6px] text-3xl w-8 h-8 bg-zinc-200/50 hover:bg-zinc-300/70 rounded-full flex justify-center items-center"
          v-on:click="() => $emit('close')"
          title="Close this dialog"
        >
          &times;
        </button>
        <div><slot /></div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    show: Boolean,
  })
  defineEmits(['close'])
  </script>
  