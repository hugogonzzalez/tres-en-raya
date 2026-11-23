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
  // TODO (paso 6): estado currentMove -> 0
  const [currentMove, setCurrentMove] = useState(0)

  // TODO (paso 5): valor derivado currentSquares -> el último tablero del historial
  //                (en el paso 6: el tablero del movimiento actual)
  const currentSquares = history[currentMove]

  const xIsNext= currentMove % 2 === 0

  // TODO (paso 5): función handlePlay(nextSquares)
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }
  // TODO (paso 6): función jumpTo(nextMove)
  function jumpTo(nextMove) {
  setCurrentMove(nextMove)
}

  // TODO (paso 6): lista "moves" con un <li> y un botón por cada tablero del historial
  const moves = history.map((squares, move) => {
    let description
    if(move > 0) {
      description = 'Ir al movimiento #' + move
    } else {
      description = 'Ir al inicio de la partida'
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        {/* TODO (paso 5): pasa a Board las props xIsNext, squares y onPlay */}
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default Game
