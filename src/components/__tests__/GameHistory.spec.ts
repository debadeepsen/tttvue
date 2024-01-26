// GameHistory.spec.ts
import { describe, it } from 'vitest'
import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import GameHistory from '@/components/GameHistory.vue'
import { getAlgebraicNotation } from '@/utils/lib'
import { createTestingPinia } from '@pinia/testing'
import { useGameStore } from '@/stores/game'

describe('GameHistory', () => {
  const store = useGameStore()
  //   const store = {
  //     players: ['Player1', 'Player2'],
  //     currentPlayer: 0,
  //     history: {
  //       0: [
  //         /* moves for player 1 */
  //       ],
  //       1: [
  //         /* moves for player 2 */
  //       ]
  //     }
  //   }

  it('renders the component', async () => {
    const wrapper = mount(GameHistory, {
      global: {
        plugins: [createTestingPinia()]
      }
    })
    expect(wrapper.exists()).to.be.true
  })

  it('displays player names correctly', async () => {
    const wrapper = mount(GameHistory, {
      global: {
        provide: {
          useGameStore: () => store
        }
      }
    })

    expect(wrapper.text()).to.include('Player1')
    expect(wrapper.text()).to.include('Player2')
  })

  it('displays cross and circle move history correctly', async () => {
    const store = {
      players: ['Player1', 'Player2'],
      currentPlayer: 0,
      history: {
        0: [
          /* moves for player 1 */
        ],
        1: [
          /* moves for player 2 */
        ]
      }
    }

    const wrapper = mount(GameHistory, {
      global: {
        provide: {
          useGameStore: () => store
        }
      }
    })

    // Assuming your getAlgebraicNotation function formats moves correctly
    expect(wrapper.text()).to.include(getAlgebraicNotation(store.history[0][0]))
    expect(wrapper.text()).to.include(getAlgebraicNotation(store.history[1][0]))
  })

  it('shows waiting symbol and undo button based on current player', async () => {
    const store = {
      players: ['Player1', 'Player2'],
      currentPlayer: 0,
      history: {
        0: [
          /* moves for player 1 */
        ],
        1: [
          /* moves for player 2 */
        ]
      }
    }

    const wrapper = mount(GameHistory, {
      global: {
        provide: {
          useGameStore: () => store
        }
      }
    })

    // Assuming you have WaitingSymbol and UndoButton components
    expect(wrapper.findComponent({ name: 'WaitingSymbol' }).exists()).to.be.true
    expect(wrapper.findComponent({ name: 'UndoButton' }).exists()).to.be.true
  })
})
