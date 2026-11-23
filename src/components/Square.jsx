// Componente: una casilla del tablero.
// Paso 1: muestra el valor que recibe por props.
// Paso 2: avisa al tablero cuando se pulsa.
//
// Props que acabará recibiendo:
//   value         -> 'X', 'O' o null
//   onSquareClick -> función que se ejecuta al hacer clic
  function Square({value, onSquareClick}){
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  )
}

export default Square
