<script setup>
    import GameBoard from './components/GameBoard.vue'
    import GameStatus from './components/GameStatus.vue'
    import GameControls from './components/GameControls.vue'
    </script>

    <template>
      <div class="app">
        <h1>Tic-Tac-Toe</h1>
        <GameStatus />
        <GameBoard />
        <GameControls />
      </div>
    </template>

    <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      display: flex;
      justify-content: center;
      min-height: 100vh;
      background-color: #f5f5f5;
    }

    .app {
      text-align: center;
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    h1 {
      color: #2c3e50;
      margin-bottom: 20px;
    }

    @media (max-width: 480px) {
      .board {
        grid-template-columns: repeat(3, 80px);
        grid-template-rows: repeat(3, 80px);
      }
    }
    </style>
