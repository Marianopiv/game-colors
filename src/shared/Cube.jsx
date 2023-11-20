import React from "react";

const Cube = ({ action,colorName,colorText,customClass,height,width }) => {
  return (
    <div
        onClick={action}
      className={`flex w-1/3 border-black items-center justify-center border ${customClass?customClass:""}`}
      style={{ backgroundColor: colorName, width: width, height: height }}
    >
       <p className="text-xs">{colorText}</p> 
    </div>
  );
};

export default Cube;
