import { setActivePinia, createPinia } from 'pinia'
    import { useGameStore } from '../stores/game'
    import { describe, it, expect, beforeEach } from 'vitest'

    describe('Game Store', () => {
      let game

      beforeEach(() => {
        setActivePinia(createPinia())
        game = useGameStore()
      })

      it('initializes with empty board', () => {
        expect(game.board).toEqual(Array(9).fill(null))
      })

      it('alternates players', () => {
        game.makeMove(0)
        expect(game.currentPlayer).toBe('O')
        game.makeMove(1)
        expect(game.currentPlayer).toBe('X')
      })

      it('detects horizontal win', () => {
        game.makeMove(0) // X
        game.makeMove(3) // O
        game.makeMove(1) // X
        game.makeMove(4) // O
        game.makeMove(2) // X
        expect(game.winner).toBe('X')
        expect(game.winningLine).toEqual([0, 1, 2])
      })

      it('detects vertical win', () => {
        game.makeMove(0) // X
        game.makeMove(1) // O
        game.makeMove(3) // X
        game.makeMove(2) // O
        game.makeMove(6) // X
        expect(game.winner).toBe('X')
        expect(game.winningLine).toEqual([0, 3, 6])
      })

      it('detects diagonal win', () => {
        game.makeMove(0) // X
        game.makeMove(1) // O
        game.makeMove(4) // X
        game.makeMove(2) // O
        game.makeMove(8) // X
        expect(game.winner).toBe('X')
        expect(game.winningLine).toEqual([0, 4, 8])
      })

      it('detects draw', () => {
        const moves = [0, 1, 2, 4, 3, 5, 7, 6, 8]
        moves.forEach((move) => game.makeMove(move))
        expect(game.winner).toBe('draw')
      })

      it('resets game state', () => {
        game.makeMove(0)
        game.resetGame()
        expect(game.board).toEqual(Array(9).fill(null))
        expect(game.currentPlayer).toBe('X')
        expect(game.winner).toBe(null)
      })
    })
