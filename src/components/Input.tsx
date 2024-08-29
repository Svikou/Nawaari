import React, { useContext } from "react";
import { TJMContext } from "./TJMContext";

const Input: React.FC = () => {
  const context = useContext(TJMContext);

  if (!context) {
    throw new Error("Input must be used within a TJMProvider");
  }

  const { values, setValues } = context;

  return (
    <div className="w-[450px] mx-auto">
      <label className="block text-md font-montserrat font-semibold leading-6 text-gray-900">
        Salaire mensuel souhaité
      </label>
      <div className="relative mt-2 rounded-md">
        <input
          type="number"
          value={values.Input}
          onChange={(e) =>
            setValues({ ...values, Input: parseFloat(e.target.value) || 0 })
          }
          className="outline-none text-lg px-4 text-black font-medium min-h-[48px] rounded-lg flex w-full bg-white border border-gray;"
        />
      </div>
    </div>
  );
};

export default Input;
