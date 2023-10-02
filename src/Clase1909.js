import React from 'react'
//Que muestre un objeto con caracteristicas de messi en backstick como un texto
const Clase1909 = () => {


    const mostrar = () => {
        const messi = {
            nombre:"lionel",
            edad:35,
            esposa:"antonella"
        }
        console.log(`${JSON.stringify(messi)}`)
    }

    mostrar()
  return (
    <div>Clase1909</div>
  )
}

export default Clase1909