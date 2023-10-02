//Construir un algoritmo "perfecto"
//Desarrollar una funcion que por parametro tome un nombre, por ejemplo "Mariano", cada letra de la palabra vale 20 dolares, entonces
//cuando yo pase mariano me tiene que retornar un texto de la siguiente manera: "El nombre Mariano costará 140 dolares"

import React from "react";

const Clase1409 = () => {
  const abecedario =  [",",".","!","=","?","|","'","°","<","*",">","-","+",  "#",  "$",  "%",  "&",  "/",  "(",  ")","¨","[","]","{","}","^","@","_","~","´´"]

  const perfectAlgorithm = (passedData) => {
    if (typeof passedData !== "string") {
      console.log(
        "el tipo mencionado no es valido, envíe un nombre en formato string"
      );
      return;
    }
    if (passedData.length < 2) {
      console.log("el nombre deben ser al menos 2 letras");
      return;
    }
    const result = passedData.split('').filter((letter)=>letter!==" ")
    console.log(`El nombre ${result.join('')} costará ${result.length * 20}`);
  };


  perfectAlgorithm("mar  iano");
  return <div>Clase1409</div>;
};

export default Clase1409;
