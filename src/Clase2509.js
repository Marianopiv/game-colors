import React, { useEffect, useState } from "react";
import { optionColors } from "./config/config";

//Al usuario tiene que aparecer input con dos botones, con esos botones agrego colores en ingles.

//Red blue yellow black. cada vez que agrego uno doy agregar, una vez que agrego todo, doy listo, cuadno doy listo me tiene que generar un cuadrado de 100 px con el color elegidoy tambien me tiene que elegir un color random dentro de los que elegi y me tiene que aparecer ne la pantalla.
/* Ejemplo: ROjo, apreto cuadrado rojo, al apretar en cuadrado rojo, debe desaparecer y sumarme un score. Al tocar otro color debe tocar incorrecto y debe elegir otro color. Al terminar, decir cuantos segundos paasaron, cuantos eran los colores que yo agregue */

const Clase2509 = () => {
  const [score, setScore] = useState(0);

  const [squares, setSquares] = useState([]);

  const [word, setWord] = useState("");

  const [play, setPlay] = useState(false);

  const chooseColors = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setSquares([...squares, { color: value }]);
    }
  };

  const runWords = () => {
    setWord(squares[Math.trunc(Math.random() * squares.length)]);
  };

  useEffect(() => {
    runWords();
  }, [play]);

  const handleChoose = (square, word) => {
    runWords();
    if (square.color === word.color) {
      setSquares(squares.filter((obj) => obj.color !== word.color));
      setScore(score + 1);
      runWords();
    }
  };

  return (
    <div>
      <h1>Elegi con cuantos colores jugar:</h1>
      {!play &&
        optionColors.map((option,index) => (
          <div key={index}>
            <span>{option.color}</span>
            <input
              value={option.color}
              onChange={chooseColors}
              type="checkbox"
              name=""
              id=""
            />
          </div>
        ))}
      <button onClick={() => setPlay(true)}>Start</button>
      <h1>{word?.color}</h1>
      <p>Score:{score}</p>
      {squares.length > 0 && play ? (
        squares?.map((square) => (
          <div
            onClick={() => handleChoose(square, word)}
            style={{
              backgroundColor: `${square.color}`,
              width: "100px",
              height: "100px",
            }}
          ></div>
        ))
      ) : (
        <h1>Juego terminado!</h1>
      )}
    </div>
  );
};

export default Clase2509;
