<script setup lang="ts">
import { ref } from 'vue'
import { CIRCLE, COL_IDS, CROSS, ROW_IDS } from '@/utils/constants'
import PlayerSymbol from './PlayerSymbol.vue'
import { useGameStore } from '@/stores/game'
import { getAlgebraicNotation, whoWon } from '@/utils/lib'
import ModalDialog from './ModalDialog.vue'

const store = useGameStore()
const winnerSymbol = ref<typeof CROSS | typeof CIRCLE | null>(null)
const showDialog = ref(false)

const getIcon = (box: string) => {
  if (box === CROSS) return 'cross'
  if (box === CIRCLE) return 'circle'
  return 'blank'
}

const updateGameHistory = (currentSymbol: typeof CROSS | typeof CIRCLE, index: number) => {
  const box = getAlgebraicNotation(index)
  store.history[currentSymbol].push(box)
}

const setNextPlayer = () => {
  store.currentPlayer = store.currentPlayer === 0 ? 1 : 0
}

const checkForWin = () => {
  const winningSymbol = whoWon(store.boxes)

  console.log({ winningSymbol })

  if (winningSymbol === 'X' || winningSymbol === 'O') {
    winnerSymbol.value = winningSymbol
    showDialog.value = true
  } else if (winningSymbol === 'D') {
    showDialog.value = true
  }

  return false
}

const setBoxValue = (index: number) => {
  if (!store.started) return
  if (store.boxes[index]) return

  const currentSymbol = store.currentPlayer === 0 ? CROSS : CIRCLE
  store.boxes[index] = currentSymbol
  if (checkForWin()) return

  updateGameHistory(currentSymbol, index)
  setNextPlayer()
}
</script>

<template>
  <div class="p-2 w-full md:w-1/2 lg:w-1/3 flex justify-center items-center relative">
    <div class="absolute top-0 -left-4 h-full flex flex-col-reverse">
      <div v-for="rowId in ROW_IDS" :key="rowId" class="h-1/3 flex flex-col justify-center">
        {{ rowId }}
      </div>
    </div>
    <div class="absolute -bottom-4 left-0 w-full flex">
      <div v-for="colId in COL_IDS" :key="colId" class="w-1/3 flex justify-center">
        {{ colId }}
      </div>
    </div>
    <div class="grid grid-cols-3 grid-rows-3 gap-1 bg-[#333] w-72">
      <button
        class="size-full h-[5.5rem] text-lg border-none bg-white rounded-none"
        :style="{ cursor: store.started ? 'pointer' : 'default' }"
        v-for="(box, i) in store.boxes"
        :key="i"
        @click="setBoxValue(i)"
      >
        <player-symbol
          :icon="getIcon(box)"
          :size="54"
          :icon-class="box === CROSS ? 'text-red-600' : 'text-blue-600'"
        />
      </button>
    </div>
  </div>
  <modal-dialog :show="showDialog" @close="showDialog = false">
    <div v-if="winnerSymbol" class="dialog-content">
      <h2>Congratulations!</h2>
      <div class="mt-2">
        {{ store.players[winnerSymbol === CROSS ? 0 : 1] }} won in
        {{ store.history[winnerSymbol].length }} moves!
      </div>
    </div>
    <div v-else class="dialog-content">
      <h2>Draw!</h2>
      <div class="mt-2">
        The game between {{ store.players[0] }} and {{ store.players[1] }} ended in a draw.
      </div>
    </div>
  </modal-dialog>
</template>
<style scoped>
.dialog-content {
  @apply p-4 flex flex-col justify-center items-center;
}
</style>
