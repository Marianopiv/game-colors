import React from "react";
import Cube from "../shared/Cube";
import { Button } from "@nextui-org/react";
import useSquares from "../hook/useSquares";

const ModalConfig = ({ fullColors, selectedTemporalColors }) => {
  const { handleOnChangeTemp, handleModal, isChecked, temporalColors } = useSquares();


  return (
    <div className="w-screen h-screen z-50 bg-white flex justify-center items-center">
      <div className="w-96 mx-1 md:w-1/3 h-2/3 border border-black rounded-sm flex flex-col gap-2 pt-4">
        {" "}
        <h1 className="text-center">Seleccione nuevos colores para agregar a los existentes</h1>
        <div className="flex flex-col items-center p-4 gap-2 h-80">
          {temporalColors.map((color, index) => (
            <div key={index} className="flex w-48 justify-between">
              <p className="w-20 text-center">{color.color}</p>
              <Cube colorName={color.color} height={26} width={26} key={index} />
              <input
                onChange={() => handleOnChangeTemp(color)}
                checked={isChecked(selectedTemporalColors,color)}
                isChecked={selectedTemporalColors.map((c) => c.color).includes(color.color)}
                style={{ accentColor: color }}
                className=" rounded-sm h-6 w-6"
                type="checkbox"
              />
            </div>
          ))}
        </div>
        <Button
          onClick={handleModal}
          variant="shadow"
          className={`bg-gradient-to-tr from-blue-500 to-pink-500 text-white shadow-lg p-3 rounded-sm mx-auto mt-14`}
        >
          Guardar colores agregados
        </Button>
      </div>
    </div>
  );
};

export default ModalConfig;
