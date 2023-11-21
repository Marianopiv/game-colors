import React from "react";
import useSquares from "../hook/useSquares";
import { Button } from "@nextui-org/react";
import cubesLg from "../../src/assets/cubesLg.jpg";
import Cube from "../shared/Cube";
import { AiFillCloseCircle } from "react-icons/ai";
import { GrConfigure } from "react-icons/gr";
import ModalConfig from "../components/ModalConfig";

const Clase0511 = () => {
  const {
    colorName,
    colorText,
    fullData,
    toogleModal,
    isChecked,
    handleOnChange,
    handleModal,
    handleRestColor,
    handleSelectAll,
    handleToogleGame,
    selectedTemporalColors,
    selectedColors,
    startGame,
  } = useSquares();

  return (
    <>
      {toogleModal && <ModalConfig fullColors={fullData.info} selectedTemporalColors={selectedTemporalColors} />}
      <div className="h-screen w-screen flex flex-col items-center gap-8 font-mono">
        <Button
          onClick={handleModal}
          className="fixed z-50 right-1 top-2 rounded-sm"
          startContent={toogleModal ? <AiFillCloseCircle /> : <GrConfigure />}
        >
          {toogleModal ? "Cerrar Modal" : "Agregar mas colores"}
        </Button>
        <img className="w-screen h-screen -z-20 absolute object-cover" src={cubesLg} alt="fondo de cubos" />
        <h1 className="text-6xl bg-white dark:bg-white dark:text-black p-3 rounded-sm mt-20 shadow-2xl w-5/6 text-center">
          El Juego de los Cuadrados
        </h1>
        <div className={`${!startGame ? "flex flex-col py-2 bg-white justify-center  items-center w-5/6" : "hidden"}`}>
          <h1 className={`text-4xl p-3 rounded-md text-center`}>Elegí 1 color o mas para jugar</h1>
          <Button
            variant="shadow"
            onClick={() => handleSelectAll([...selectedTemporalColors, ...fullData.info])}
            className={`bg-gradient-to-tr from-pink-500 to-blue-500 text-white shadow-lg p-3 rounded-sm mx-auto`}
          >
            {selectedColors.length === [...selectedTemporalColors, ...fullData.info].length
              ? "Deseleccionar todos"
              : "Seleccionar todos"}
          </Button>
        </div>
        <div
          className={`${
            !startGame
              ? "flex items-center justify-center flex-wrap gap-2 p-3 shadow-2xl w-5/6 mx-14 bg-white rounded-sm"
              : "hidden"
          }`}
        >
          {fullData.info.length > 0 ? (
            [...selectedTemporalColors, ...fullData.info].map((color, index) => (
              <div key={index} className="flex justify-center items-center gap-2 md:w-1/6">
                <div className="flex justify-evenly items-center">
                  <Cube colorName={color.color} height={26} width={26} key={index} />
                  <p className="w-20 text-center"> {color.color}</p>
                </div>
                <input
                  style={{ accentColor: color.color }}
                  onChange={() => handleOnChange(color)}
                  className=" rounded-sm h-6 w-6"
                  checked={isChecked(selectedColors, color)}
                  type="checkbox"
                />
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center">
            <p>Loading</p>
            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
          )}
        </div>
        {startGame && selectedColors.length > 0 && (
          <>
            <div className="shadow-2xl bg-white dark:bg-white rounded-sm flex justify-center gap-4 p-4 mx-14 flex-wrap md:flex-nowrap md:w-2/4">
              {selectedColors?.map((color, index) => {
                return (
                  <Cube
                    customClass={"cursor-pointer shadow-full hover:border-2"}
                    key={index}
                    height={40}
                    width={40}
                    action={() => handleRestColor(color)}
                    colorName={color.color}
                  />
                );
              })}
            </div>
            <div className="shadow-2xl bg-white rounded-sm flex flex-col items-center justify-center gap-4 p-4 mx-14 w-2/4">
              <p>
                Selecciona el color pintado en este cuadrado en la fila de arriba, ignorando el color escrito en texto:
              </p>{" "}
              {<Cube height={40} width={40} colorName={colorName.color} colorText={colorText.color} />}
            </div>
          </>
        )}
        {!startGame && (
          <Button
            variant="shadow"
            onClick={handleToogleGame}
            disabled={selectedColors.length < 1}
            className={`bg-gradient-to-tr from-blue-500 to-pink-500 text-white shadow-lg p-3 rounded-sm mx-auto`}
          >
            Empezár a jugar!
          </Button>
        )}
      </div>
    </>
  );
};

export default Clase0511;
