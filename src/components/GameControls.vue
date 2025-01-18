<script setup>
    import { useGameStore } from '../stores/game'

    const game = useGameStore()
    </script>

    <template>
      <div class="controls">
        <button @click="game.resetGame">New Game</button>
        <button @click="game.toggleStartingPlayer">
          Switch Starting Player (Current: {{ game.startingPlayer }})
        </button>
      </div>
    </template>

    <style scoped>
    .controls {
      margin-top: 20px;
      display: flex;
      gap: 10px;
      justify-content: center;
    }

    button {
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      background-color: #42b983;
      color: white;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    button:hover {
      background-color: #3aa876;
    }
    </style>
