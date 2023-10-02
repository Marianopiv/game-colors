import React from "react";

const Clase0409 = () => {
  //Tengo que cheqeuar si cromosoma es xx o xy,
  //Verificar que me pasen un string,
  //Verificar que sean 2 caracteres
  //Y si es xx "felicitaciones vas a tener una hija"
  //Caso contrario felicitaciones vas a tener un varon

  const checkType = (cromosomes) => typeof cromosomes === "string";
  const checkCharacters = (cromosomes) => cromosomes.length === 2;

  const cromosomeTypes = {
    xx: "xx",
    xy: "xy",
  };

  const checkCromosomes = (cromosomes) => {
    if (!checkType(cromosomes)) {
      console.log("no es tipo string");
      return;
    }
    if (!checkCharacters(cromosomes)) {
      console.log("cantidad invalida de caracteres");
      return;
    }
    if (
      cromosomes.toLowerCase() !== cromosomeTypes.xx &&
      cromosomes.toLowerCase() !== cromosomeTypes.xy
    ) {
      console.log("los cromosomas deben ser xx o xy");
      return;
    }
    return cromosomes.toLowerCase() === cromosomeTypes.xx
      ? console.log("felicitaciones vas a tener una hija")
      : console.log("felicitaciones vas a tener un hijo");
  };

  checkCromosomes("xy");

  const animals = ["perro", "gato", "loro", "elefante"];

  const arrayResultado = [
    { animal: "perro", repeat: "r", quantity: 2 },
    { animal: "gato", repeat: null, quantity: null },
    { animal: "loro", repeat: "o", quantity: 2 },
  ];

  const convertToArr = (animal) => animal.split("");
  //Esto me da el array de las letras.

  const exampleObj = {
    p: 1,
    e: 1,
    r: 2,
    o: 1,
  };

  if (exampleObj["z"]) {
    console.log("hola");
  } else {
    console.log("chau");
  }
  const checkRepeated = (animal) => {
    let lettersIncluded = {};
    // p e r r o
    convertToArr(animal).map((letter) => {
      if (lettersIncluded[letter]) {
        /* asi seria accediendo al objeto si es let lettersIncluded = {...lettersIncluded,[letter]:lettersIncluded[letter]+1} */
        lettersIncluded[letter] = lettersIncluded[letter] + 1;
        return letter;
      } else {
        lettersIncluded[letter] = 1;
        return letter;
      }
    });
    console.log(lettersIncluded, "letras incluidas");
    return lettersIncluded;
  };

  //Esta funcion count repeated agregue de tarea para poder completar el repeat y el quantity del ejercicio
  const countRepeated = (lettersIncluded, position) => {
    const result = Object.entries(lettersIncluded).find((letter) => {
      return letter[1] > 1 ? letter[1] : null;
    });
    console.log(result, "");
    return !result ? null : result[position];
  };

  const getNewArr = (animals) => {
    const result = animals.map((animal) => {
      return {
        animal,
        repeat: countRepeated(checkRepeated(animal), 0),
        quantity: countRepeated(checkRepeated(animal), 1),
      };
    });
    console.log(result);
  };

  getNewArr(animals);

  const prueba = checkRepeated("perro");
  console.log(prueba, "esta es lap rueba de check repeated");
  //Otra forma para encontrar el mas grande, ejemplod e for of (para objectos) o for in (para arrays) https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...in

  const object = { a: 1, b: 2, c: 3, d: 2 };

  let masRepetida = {};
  for (const property in object) {
    if (!Object.keys(masRepetida).length) {
      masRepetida.letraRepetida = property;
      masRepetida.cantidad = object[property];
    } else {
      if (masRepetida.cantidad < object[property]) {
        masRepetida.letraRepetida = property;
        masRepetida.cantidad = object[property];
      }
    }
    console.log(masRepetida)
  }

  return <div>Clase0409</div>;
};

export default Clase0409;
