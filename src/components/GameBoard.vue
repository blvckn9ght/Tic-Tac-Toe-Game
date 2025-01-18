<script setup>
    import { computed } from 'vue'
    import { useGameStore } from '../stores/game'

    const game = useGameStore()

    const cellClasses = (index) => [
      'cell',
      { 'winning-cell': game.winningLine.includes(index) }
    ]
    </script>

    <template>
      <div class="board">
        <div
          v-for="(cell, index) in game.board"
          :key="index"
          :class="cellClasses(index)"
          @click="game.makeMove(index)"
        >
          {{ cell }}
        </div>
      </div>
    </template>

    <style scoped>
    .board {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      grid-template-rows: repeat(3, 100px);
      gap: 5px;
    }

    .cell {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #333;
      font-size: 2rem;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .cell:hover {
      background-color: #f0f0f0;
    }

    .winning-cell {
      background-color: #c8e6c9;
    }
    </style>
