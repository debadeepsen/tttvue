<script setup lang="ts">
import { computed, ref } from 'vue'
import { CIRCLE, COL_IDS, CROSS, ROW_IDS, STORAGE_KEY, type SymbolValue } from '@/utils/constants'
import PlayerSymbol from '@/components/utilities/PlayerSymbol.vue'
import { useGameStore } from '@/stores/game'
import { whoWon, getLeaderboardData, getIcon } from '@/utils/lib'
import ModalDialog from '@/components/utilities/ModalDialog.vue'

const winnerSymbol = ref<SymbolValue | null>(null)
const showDialog = ref(false)

const store = useGameStore()

// actions
const { updateGameHistory, setNextPlayer, resetGame } = store

// computed
const winnerName = computed(() => store.players[winnerSymbol.value === CROSS ? 0 : 1])
const numOfMoves = computed(() => store.history[winnerSymbol.value as SymbolValue].length)

// methods
const updateLeaderboard = () => {
  const data = getLeaderboardData()

  data.push({ name: winnerName.value, moves: numOfMoves.value, timestamp: Date.now() })
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

const checkForWin = () => {
  const winningSymbol = whoWon(store.boxes)

  if (winningSymbol === 'X' || winningSymbol === 'O') {
    winnerSymbol.value = winningSymbol
    updateLeaderboard()
    showDialog.value = true
  } else if (winningSymbol === 'D') {
    showDialog.value = true
  }
}

const closeDialog = () => {
  showDialog.value = false
  resetGame()
}

const setBoxValue = (index: number) => {
  if (!store.started) return
  if (store.boxes[index]) return

  const currentSymbol = store.currentPlayer === 0 ? CROSS : CIRCLE
  store.boxes[index] = currentSymbol
  checkForWin()

  updateGameHistory(currentSymbol, index)
  setNextPlayer()
}
</script>

<template>
  <div class="p-2 w-full lg:w-1/3 flex justify-center items-center relative">
    <div class="absolute top-0 -left-[4px] h-full flex flex-col-reverse">
      <div v-for="rowId in ROW_IDS" :key="rowId" class="h-1/3 flex flex-col justify-center">
        {{ rowId }}
      </div>
    </div>
    <div class="absolute -bottom-6 left-0 w-full flex">
      <div v-for="colId in COL_IDS" :key="colId" class="w-1/3 flex justify-center">
        {{ colId }}
      </div>
    </div>
    <div class="grid grid-cols-3 grid-rows-3 gap-1 bg-[#333] w-72">
      <button
        class="size-full h-[5.5rem] text-lg border-none bg-white rounded-none transition-all"
        :style="{ cursor: store.started || !!store.boxes[i] ? 'pointer' : 'default' }"
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
  <modal-dialog :show="showDialog" @close="closeDialog">
    <div v-if="winnerSymbol" class="dialog-content">
      <h2>Congratulations!</h2>
      <div class="mt-2">{{ winnerName }} won in {{ numOfMoves }} moves!</div>
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
