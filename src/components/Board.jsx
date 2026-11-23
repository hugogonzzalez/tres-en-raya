import Square from "./Square"
import { useState } from "react"
// TODO (paso 4): importa calculateWinner desde '../utils/calculateWinner'

// Componente: el tablero de 3 x 3 y el texto de estado.
// Pasos 2-4: el tablero guarda su propio estado (squares, xIsNext).
// Paso 5: el estado sube a Game y Board pasa a recibir las props
//         xIsNext, squares y onPlay.
function Board() {
  // TODO (paso 2): estado squares -> array de 9 posiciones a null
  const [squares, setSquares] = useState(Array(9).fill(null))
  // TODO (paso 3): estado xIsNext -> true

  // TODO (paso 2): función handleClick(i)
  function handleClick(i){
    const nombre = squares.slice()
    nombre[i] = "X"

    setSquares(nombre)
  }
  //   - copia el array (no lo modifiques directamente)
  //   - escribe 'X' en la posición i de la copia
  //   - guarda la copia en el estado
  // TODO (paso 3): alterna 'X' y 'O' y no permitas pulsar una casilla ocupada
  // TODO (paso 4): no permitas jugar si ya hay ganador

  // TODO (paso 4): texto de estado -> "Ganador: X" o "Siguiente jugador: O"

  return (
    <>
      {/* TODO (paso 4): <div className="status"> con el texto de estado */}

      {/* TODO (paso 1): tres filas <div className="board-row">, cada una con 3 Square */}
      <div className="board-row">
        <Square value={squares[0]} onSqueareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSqueareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSqueareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSqueareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSqueareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSqueareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSqueareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSqueareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSqueareClick={() => handleClick(8)}/>
      </div>
    </>
  )
}

export default Board
