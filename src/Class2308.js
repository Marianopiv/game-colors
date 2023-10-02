//Esto me pasa Jova
//
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

let data3 = [
  {
    ba: "ananab",
    length: 6,
    withoutVowels: 3,
    wordWithoutVowels: "nnb",
  },
];

//Tengo que sacar el length de toda la palabra OK
//Tengo que mostrar la palabra sin vocales. OK
//Tengo que sacar el length de la palabra sin vocales.Ok
//Tengo que sacar las primeras dos letras de la palabra.Ok
//Tengo qeu revertir palabra Ok
//Problema grande: hacer el array data 3.

const vowels = ["a", "e", "i", "o", "u"];

const giveMeLength = (str) => str.length;
const giveMeArray = (str) => [...str];
const wordWithoutVowels = (arr) => arr.filter((letter) => !vowels.includes(letter.toLowerCase())).join("");
const giveMeFirstTwoLetters = (str) => str[0].toLowerCase() + str[1].toLowerCase();
const revertWord = (str) => [...str].reverse().join("").toLowerCase();
const giveMeWithoutVowels = (str) => {
  const lettersArray = giveMeArray(str);
  const resultWithoutVowels = wordWithoutVowels(lettersArray).toLowerCase();
  return revertWord(resultWithoutVowels);
};

const giveTransformedObject = (arr) => {
  return arr.map((item) => {
    return {
      [giveMeFirstTwoLetters(item)]: revertWord(item),
      length:giveMeLength(item),
      withoutVowels:giveMeWithoutVowels(item).length,
      wordWithoutVowels:giveMeWithoutVowels(item)
    };
  });
};

const prueba = giveTransformedObject(dataTarea);

console.log(prueba);
