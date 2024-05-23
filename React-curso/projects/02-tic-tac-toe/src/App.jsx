import { useState } from 'react'
import confetti from 'canvas-confetti'
import { SHIFTS } from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { Game } from './components/Game'
import { ShiftPanel } from './components/ShiftPanel'
import { saveGame, resetGameStorage } from './logic/storage'
import './App.css'

function App() {

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  const [shift, setShift] = useState(() => {
    const shiftFromStorage = window.localStorage.getItem('shift')
    return shiftFromStorage ?? SHIFTS.X
  })

  // null: There is no winner | false: tie | true: winner 
  const [winner, setWinner] = useState(null) 

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setShift(SHIFTS.X)
    setWinner(null)

    resetGameStorage()
  }

  const updateBoard = (index) => {
    // If we already have a value in the position
    // we won't make anything
    if (board[index] || winner) return

    // Update board
    const newBoard = [...board]
    newBoard[index] = shift
    setBoard(newBoard)

    // Change shift
    const newShift = shift === SHIFTS.X ? SHIFTS.O : SHIFTS.X
    setShift(newShift)

    // Save game
    saveGame({
      board: newBoard, 
      shift: newShift
    })

    //Check winner
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      
      <h1>Tic-Tac-Toe</h1>

      <button onClick={resetGame}>Reset game</button>

      <Game board={board} updateBoard={updateBoard} />

      <ShiftPanel shift={shift} />

      <WinnerModal winner={winner} resetGame={resetGame} />

    </main>
  )
}

export default App
