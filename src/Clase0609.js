import React from "react";

const Clase0609 = () => {
  const story = `El lobo se adentró en el bosque. Él tenía un enorme apetito y en realidad no era de confiar. Así que corrió hasta la casa de la abuela antes de que Caperucita pudiera alcanzarlo. Su plan era comerse a la abuela, a Caperucita Roja y a todas las galleticas recién horneadas.

Con estas palabras, el malvado lobo tiró su manta y saltó de la cama. Asustada, Caperucita salió corriendo hacia la puerta. Justo en ese momento, un leñador se acercó a la puerta, la cual se encontraba entreabierta.
La abuelita estaba escondida detrás de él.`;

  //Objetivo, primero separar todo el string en un array de strings, por cada.
  //Despues devolver en que renglon dice caperucita

  const splitByDot = (story) => story.split(".");
  const sentences = splitByDot(story);

  const splitBySpaces = (sentence) => sentence.split(" ");

  const findCaperucita = () => {
    let caperucita = "caperucita";
    let positionsIncluded = [];
    sentences.map((sentence, index) => {
      if (splitBySpaces(sentence.toLowerCase()).includes(caperucita)) {
        positionsIncluded.push(index);
      }
      return positionsIncluded;
    });
    console.log(positionsIncluded);
    return positionsIncluded;
  };

  console.log(sentences)

  findCaperucita();

  return <div>Clase0609</div>;
};

export default Clase0609;
