// GameHistory.spec.ts
import { describe, it, expect, beforeAll } from 'vitest'
import { mount } from '@vue/test-utils'
import GameHistory from '@/components/GameHistory.vue'
import { createTestingPinia } from '@pinia/testing'
import { useGameStore } from '@/stores/game'
import WaitingSymbol from '@/components/utilities/WaitingSymbol.vue'
import UndoButton from '@/components/UndoButton.vue'

describe('GameHistory', () => {
  const wrapper = mount(GameHistory, {
    global: {
      plugins: [createTestingPinia()]
    }
  })
  const store = useGameStore()

  beforeAll(() => {
    store.players = ['Gandalf', 'Bilbo']
    store.started = true
  })

  it('renders the component', () => {
    expect(wrapper.exists()).to.be.true
    expect(wrapper.html()).to.not.be.empty

    expect(wrapper.findAllComponents(WaitingSymbol).length).toBe(2)
    expect(wrapper.findAllComponents(UndoButton).length).toBe(2)
  })

  it('shows the player names correctly', () => {
    expect(wrapper.text()).toContain('Gandalf')
    expect(wrapper.text()).toContain('Bilbo')
  })
})
