# Respuestas

Nombre y apellidos: Hugo Gonzalez

Responde con tus palabras y cita fragmentos de tu propio código.

## 1. ¿Qué diferencia hay entre una prop y un estado? Pon un ejemplo de cada uno en tu proyecto
La diferencia es que un prop es un dato que el padre le envia al hijo por ejemplo Board envia value={squares[0]} a Square, y Square lo recibe y el estado es un dato que el componente guarda y puede cambiar por ejemplo const [currentMove, setCurrentMove] = useState(0) en Game

## 2. ¿Por qué el estado de las casillas no se queda en Square y se sube a Board (y después a Game)?
Porque el ganador se calcula mirando las 9 casillas juntas, y eso solo lo puede hacer Board. Y el historial de tableros tiene que estar en Game

## 3. ¿Por qué se copia el array con slice() en vez de modificarlo directamente? ¿Qué dejaría de funcionar si no lo hicieras?
Para no tocar el tablero anterior. Si cambiaras el array original, todos los movimientos del historial acabarian iguales.

## 4. ¿Por qué se escribe onSquareClick={() => handleClick(0)} y no onSquareClick={handleClick(0)}? Pruébalo y explica lo que ocurre
Sin flecha, la funcion se ejecuta al dibujar la pagina. Con flecha, solo se ejecuta al pulsar. Pruebalo quitandola y mira el error en la consola.

## 5. ¿Para qué sirve la prop key en la lista de movimientos? ¿Por qué aquí se puede usar el número de movimiento?
Para que React distinga cada elemento de la lista. Como los movimientos no se reordenan, el numero sirve como identificador.

## 6. ¿Por qué xIsNext no tiene su propio useState en la versión final?
Porque se puede calcular con currentMove. Si lo guardaras aparte, podrias tener dos datos que no coinciden.
