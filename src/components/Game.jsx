import Board from './Board'
import { useState } from 'react'

// Componente principal del juego.
// Pasos 1-4: solo muestra el tablero.
// Paso 5: guarda el historial de la partida y se lo pasa a Board.
// Paso 6: muestra la lista de movimientos para viajar en el tiempo.
function Game() {
  // TODO (paso 5): estado history -> array con un único tablero vacío
  const [history, setHistory] = useState([Array(9).fill(null)])
  // TODO (paso 5): estado xIsNext -> true (en el paso 6 lo sustituirás por un valor calculado)
  const [xIsNext, setXIsNext] = useState(true)
  // TODO (paso 6): estado currentMove -> 0

  // TODO (paso 5): valor derivado currentSquares -> el último tablero del historial
  //                (en el paso 6: el tablero del movimiento actual)
  const currentSquares = history[history.length - 1]

  // TODO (paso 5): función handlePlay(nextSquares)
  function handlePlay(nextSquares) {
    const nextHistory = [...history, nextSquares]
    setHistory(nextHistory)
    setXIsNext(!xIsNext)
  }
  // TODO (paso 6): función jumpTo(nextMove)

  // TODO (paso 6): lista "moves" con un <li> y un botón por cada tablero del historial

  return (
    <div className="game">
      <div className="game-board">
        {/* TODO (paso 5): pasa a Board las props xIsNext, squares y onPlay */}
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        {/* TODO (paso 6): <ol> con la lista de movimientos */}
      </div>
    </div>
  )
}

export default Game
