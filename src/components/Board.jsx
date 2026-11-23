import Square from "./Square"
import { useState } from "react"
import { calculateWinner } from "../utils/calculateWinner"

// Componente: el tablero de 3 x 3 y el texto de estado.
// Pasos 2-4: el tablero guarda su propio estado (squares, xIsNext).
// Paso 5: el estado sube a Game y Board pasa a recibir las props
//         xIsNext, squares y onPlay.
function Board() {
  // TODO (paso 2): estado squares -> array de 9 posiciones a null
  const [squares, setSquares] = useState(Array(9).fill(null))

  // TODO (paso 3): estado xIsNext -> true
  const [xIsNext, setXIsNext] = useState(true)

  // TODO (paso 2): función handleClick(i)
  const valor = xIsNext ? "X" : "O"

  const ganador = calculateWinner(squares)

  function handleClick(i) {
    if (calculateWinner(squares) != null) {
      return
    }

    if (squares[i] !== null) {
      return
    }

    const nombre = squares.slice()
    nombre[i] = valor

    setSquares(nombre)
    setXIsNext(!xIsNext)
  }

  

  // TODO (paso 3): alterna 'X' y 'O' y no permitas pulsar una casilla ocupada

  // TODO (paso 4): no permitas jugar si ya hay ganador


  // TODO (paso 4): texto de estado -> "Ganador: X" o "Siguiente jugador: O"

  return (
    <>
      {/* TODO (paso 4): <div className="status"> con el texto de estado */}
      <div className="status">
        {ganador ? "Ganador: " + ganador : "Siguiente jugador: " + valor}
      </div>

      {/* TODO (paso 1): tres filas <div className="board-row">, cada una con 3 Square */}
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  )
}

export default Board
