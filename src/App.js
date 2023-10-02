import logo from "./logo.svg";
import "./App.css";
import Class1708 from "./Class1708";
import Class2308 from "./Class2308";
import Clase0409 from "./Clase0409";
import Clase0609 from "./Clase0609";
import Clase1409 from "./Clase1409";
import Clase1909 from "./Clase1909";
import Clase2509 from "./Clase2509";
import Clase2709 from "./Clase2709";

function App() {
  const mezclados = [
    { id: 1, parentId: 3 },
    { id: 2, parentId: 3 },
    { id: 2, parentId: 2 },
    { id: 2, parentId: 2 },
    { id: 2, parentId: 2 },
    { id: 2, parentId: 5 },
    { id: 3, parentId: 1 },
  ];
  
  const findParentIds = (mezclados) => {
    let recolectados = [];
    mezclados.map((item) => {
      if (!recolectados.includes(item.parentId)) {
        recolectados.push(item.parentId);
      }
      return item;
    });

    const final = recolectados
      .map((item) => {
        let cantidad = mezclados.filter(
          (campo) => campo.parentId === item
        ).length;
        item = { parentId: item, cantidad };
        return item;
      })
      .sort((a, b) => b.cantidad - a.cantidad)[0];
    console.log(final);
    return final;
  };

  findParentIds(mezclados);
  const players = [
    {
      id: 1,
      nombre: "Juan Pérez",
      club: "FC Barcelona",
      edad: 28,
    },
    {
      id: 2,
      nombre: "Luis Rodríguez",
      club: "Real Madrid",
      edad: 25,
    },
    {
      id: 3,
      nombre: "Martina González",
      club: "Paris Saint-Germain",
      edad: 23,
    },
    {
      id: 4,
      nombre: "Diego Silva",
      club: "Manchester United",
      edad: 30,
    },
    {
      id: 5,
      nombre: "Ana Torres",
      club: "Bayern Munich",
      edad: 27,
    },
  ];

  const devolverNombres = (players, campo) => {
    return players.map((item) => {
      let newItem = {};
      // eslint-disable-next-line array-callback-return
      campo.map((key) => {
        if (item[key]) {
          newItem = { ...newItem, [key]: item[key] };
          return newItem;
        }
      });
      console.log(newItem);
      item = newItem;
      return item;
    });
  };
  console.log(devolverNombres(players, ["club", "nombre", "jova", "id"]));

  return (
    <div className="App">
      {/* <Class1708/>
      <Class2308/> */}
      {/* <Clase0409/> */}
      {/* <Clase0609/> */}
      {/* <Clase1409/> */}
      {/* <Clase1909/> */}
      {/* <Clase2509/> */}
      <Clase2709/>
    </div>
  );
}

export default App;
