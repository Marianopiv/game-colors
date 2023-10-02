import React from "react";

const Class1708 = () => {
  const makeLowerCase = (string) => string.toLowerCase();

  const isInArray = (arr, string) =>
    arr.some(
      (included) => included[makeLowerCase(string)] === makeLowerCase(string)
    );

  const TransformArr = (arr) => {
    let firstConversion = [];

    // eslint-disable-next-line array-callback-return
    arr.map((item, index) => {
      if (!isInArray(firstConversion, item)) {
        firstConversion.push({
          [makeLowerCase(item)]: makeLowerCase(item),
          index: index,
        });
      }
      // eslint-disable-next-line no-unused-expressions
      item;
    });
    console.log(firstConversion);
  };
  let data1 = [
    "Banana",
    "Manzana",
    "Frutilla",
    "Banana",
    "Arandanos",
    "Frutilla",
    "Manzana",
    "Limon",
  ];

  TransformArr(data1);

  //TAREA Hacer el mismo algoritmo pero sin crear ninguna variable, no puuedo usar algo como ese first conversion

  const TransformArrWithoutVar = (arr) => {
    // eslint-disable-next-line array-callback-return
    arr.map((item, index) => {
      if (!isInArray(arr, item)) {
        arr.push({
          [makeLowerCase(item)]: makeLowerCase(item),
          index: index,
        });
      }
      // eslint-disable-next-line no-unused-expressions
      item;
    });
    console.log(arr.filter((position) => typeof position === "object"));
  };

  TransformArrWithoutVar(data1);

  let data2 = [
    {
      banana: "banana",
      index: 0,
    },
    {
      manzana: "manzana",
      index: 1,
    },
    {
      frutilla: "frutilla",
      index: 2,
    },
    {
      arandanos: "arandanos",
      index: 4,
    },
    {
      limon: "limon",
      index: 7,
    },
  ];

  //Segunda tarea: Agarrar el data, convertirlo en objetos, los key tendrian que ser las 2 primeras letras del string, y el value tiene que ser la palabra pero al reves ejemplo "ananab" ejemplo de banana data3

  let dataTarea = [
    "Banana",
    "Manzana",
    "Frutilla",
    "Banana",
    "Arandanos",
    "Frutilla",
    "Manzana",
    "Limon",
  ];

  const reverseStr = (string) =>
    makeLowerCase(string).split("").reverse().join("");

  function contarConsonantes(vowel) {
    const regex = /[^aeiouáéíóúü\s\d]/gi;
    const consonantes = vowel.match(regex);
    return consonantes;
  }
  const prueba = contarConsonantes("alo")
  console.log(prueba)
  
  const filterVowels = (array) => {
    let vowels = [];
    array.filter((item) => {
      vowels.push(contarConsonantes(item));
    });
    return vowels;
  };

  const transformArr3 = (arr) => {
    let converted = [];

    arr.map((item, index) => {
      if (!isInArray(converted, item)) {
        converted.push({
          [makeLowerCase(item).slice(0, 2)]: reverseStr(item),
          length: reverseStr(item).length,
          withoutVowels: filterVowels(arr)[index].length,
          wordWithoutVowels: makeLowerCase(
            filterVowels(arr)[index].reverse().join("")
          ),
          index: index,
        });
      }
      // eslint-disable-next-line no-unused-expressions
      item;
    });
    console.log(converted);
  };

  transformArr3(dataTarea);

  let data3 = [
    {
      ba: "ananab",
      length: 6,
      withoutVowels: 3,
      wordWithoutVowels: "nnb",
    },
    {
      manzana: "manzana",
      index: 1,
    },
    {
      frutilla: "frutilla",
      index: 2,
    },
    {
      arandanos: "arandanos",
      index: 4,
    },
    {
      limon: "limon",
      index: 7,
    },
  ];

  const arrNumbers = ["1", "2", "3"];

  const toNumbers = (arr) => {
    return arr.map((item) => Number(item));
  };

  const sumAll = (arr) => {
    return toNumbers(arr).reduce((acc, curr) => {
      acc = acc + curr;
      return acc;
    }, 0);
  };

  const executeFn = (arr) => {
    return sumAll(arr);
  };

  const resultado = executeFn(arrNumbers);

  console.log(resultado);

  return <div>Class1708</div>;
};

export default Class1708;
