// TODO (paso 1): importa Square
// TODO (paso 2): importa useState desde 'react'
// TODO (paso 4): importa calculateWinner desde '../utils/calculateWinner'

// Componente: el tablero de 3 x 3 y el texto de estado.
// Pasos 2-4: el tablero guarda su propio estado (squares, xIsNext).
// Paso 5: el estado sube a Game y Board pasa a recibir las props
//         xIsNext, squares y onPlay.
function Board() {
  // TODO (paso 2): estado squares -> array de 9 posiciones a null
  // TODO (paso 3): estado xIsNext -> true

  // TODO (paso 2): función handleClick(i)
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
      <p>Aquí irá el tablero</p>
    </>
  )
}

export default Board
