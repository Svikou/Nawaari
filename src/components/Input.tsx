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
      <label className="block text-lg font-montserrat font-semibold leading-6 text-gray-900">
        Salaire mensuel souhaité
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500  sm:text-lg">$</span>
        </div>
        <input
          type="text"
          value={values.Input !== 0 ? values.Input : ""}
          onChange={(e) =>
            setValues({ ...values, Input: parseFloat(e.target.value) || 0 })
          }
          placeholder="0.00"
          className="outline-none text-lg px-4 text-black font-medium min-h-[48px] rounded-lg flex w-full bg-white border border-gray-300 pl-7 pr-20"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500   sm:text-sm"
          >
            <option>USD</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Input;
