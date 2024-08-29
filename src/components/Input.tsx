import React, { useContext } from "react";
import { TJMContext } from "./TJMContext";

const Input: React.FC = () => {
  const context = useContext(TJMContext);
  console.log(Input);

  if (!context) {
    throw new Error("Input must be used within a TJMProvider");
  }

  const { values, setValues } = context;

  return (
    <div className="w-[450px] mx-auto">
      <label className="block text-md font-montserrat font-semibold leading-6 text-gray-900">
        Salaire mensuelle souahité
      </label>
      <div className="relative mt-2 rounded-md">
        <input
          type="text"
          value={values.Input}
          onChange={(e) =>
            setValues({ ...values, Input: Number(e.target.value) })
          }
          className="outline-none text-lg px-4 text-black font-medium min-h-[48px] rounded-lg flex w-full bg-white border border-gray;"
        />
        <div></div>
      </div>
    </div>
  );
};

export default Input;
