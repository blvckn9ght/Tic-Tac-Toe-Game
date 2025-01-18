<script setup>
    import { computed } from 'vue'
    import { useGameStore } from '../stores/game'

    const game = useGameStore()

    const statusMessage = computed(() => {
      if (game.winner === 'draw') return "It's a draw!"
      if (game.winner) return `Player ${game.winner} wins!`
      return `Current Player: ${game.currentPlayer}`
    })
    </script>

    <template>
      <div class="status">
        <h2>{{ statusMessage }}</h2>
        <div class="scores">
          <div>X: {{ game.scores.X }}</div>
          <div>O: {{ game.scores.O }}</div>
        </div>
      </div>
    </template>

    <style scoped>
    .status {
      text-align: center;
      margin-bottom: 20px;
    }

    .scores {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 10px;
      font-size: 1.2rem;
    }
    </style>
