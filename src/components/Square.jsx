// Componente: una casilla del tablero.
// Paso 1: muestra el valor que recibe por props.
// Paso 2: avisa al tablero cuando se pulsa.
//
// Props que acabará recibiendo:
//   value         -> 'X', 'O' o null
//   onSquareClick -> función que se ejecuta al hacer clic
function Square(/* TODO (paso 1): recibe las props */) {
  return (
    <button className="square">
      {/* TODO (paso 1): muestra value */}
    </button>
    // TODO (paso 2): añade el evento onClick al botón
  )
}

export default Square
