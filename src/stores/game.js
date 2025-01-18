import { defineStore } from 'pinia'
    import { ref, computed } from 'vue'

    export const useGameStore = defineStore('game', () => {
      const board = ref(Array(9).fill(null))
      const currentPlayer = ref('X')
      const scores = ref({ X: 0, O: 0 })
      const gameOver = ref(false)
      const winningLine = ref([])
      const startingPlayer = ref('X')

      const winner = computed(() => {
        const lines = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
          [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
          [0, 4, 8], [2, 4, 6]             // Diagonals
        ]

        for (const line of lines) {
          const [a, b, c] = line
          if (board.value[a] && board.value[a] === board.value[b] && board.value[a] === board.value[c]) {
            winningLine.value = line
            return board.value[a]
          }
        }

        if (!board.value.includes(null)) {
          return 'draw'
        }

        return null
      })

      function makeMove(index) {
        if (board.value[index] || gameOver.value) return
        
        board.value[index] = currentPlayer.value
        if (winner.value) {
          if (winner.value !== 'draw') {
            scores.value[winner.value]++
          }
          gameOver.value = true
        } else {
          currentPlayer.value = currentPlayer.value === 'X' ? 'O' : 'X'
        }
      }

      function resetGame() {
        board.value = Array(9).fill(null)
        gameOver.value = false
        winningLine.value = []
        currentPlayer.value = startingPlayer.value
      }

      function toggleStartingPlayer() {
        startingPlayer.value = startingPlayer.value === 'X' ? 'O' : 'X'
        resetGame()
      }

      return {
        board,
        currentPlayer,
        scores,
        gameOver,
        winningLine,
        startingPlayer,
        winner,
        makeMove,
        resetGame,
        toggleStartingPlayer
      }
    })
