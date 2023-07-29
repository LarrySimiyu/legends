import React, { useState } from "react";
import ProgressButton from "../buttons/progressButton";

const FormHeader = ({ header, subHeader }) => {
  return (
    <div>
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-800 text-3xl font-bold">
        {header}
      </h1>
      <h1 className="text-gray-500 text-xl">{subHeader}</h1>
    </div>
  );
};

export default FormHeader;
