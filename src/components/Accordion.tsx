import React, { useContext, useState } from "react";
import { TJMContext, TJMValues } from "./TJMContext";

const InputField: React.FC<{ label: keyof TJMValues }> = ({ label }) => {
  const context = useContext(TJMContext);

  if (!context) {
    throw new Error("InputField must be used within a TJMProvider");
  }

  const { values, setValues } = context;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [label]: parseFloat(event.target.value) || 0 });
  };

  return (
    <div className="flex items-center justify-between bg-[#e7e6e6d3] rounded-lg p-4 mt-8 h-14">
      <label className="text-gray-700 font-medium">{label}</label>
      <div className="relative flex items-center">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500  sm:text-lg">$</span>
        </div>
        <input
          value={
            typeof values[label] === "number"
              ? values[label] !== 0
                ? values[label]
                : ""
              : ""
          }
          onChange={handleChange}
          type="text"
          className="w-[100px] pl-2 py-1 text-right bg-white border border-gray-300 rounded-md text-gray-900 font-semibold"
          placeholder="0.00"
        />
      </div>
    </div>
  );
};

const Accordion: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(TJMContext);

  if (!context) {
    throw new Error("Accordion must be used within a TJMProvider");
  }

  const { values } = context;

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const totalCharges =
    (values.Input || 0) +
    (values.loyer || 0) +
    (values.courses || 0) +
    (values.logiciel || 0);

  return (
    <div
      className={`w-[450px] mx-auto rounded-lg bg-[#e7e6e64d] p-5 mb-2 ${
        isOpen ? "pb-4" : "pb-4"
      }`}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-md font-semibold font-montserrat">
          Frais de fonctionnement
        </h2>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </div>
      {isOpen && (
        <>
          <div className="mt-4 space-y-4">
            {["loyer", "courses", "logiciel"].map((label) => (
              <InputField
                key={String(label)}
                label={label as keyof TJMValues}
              />
            ))}
          </div>
          <div className="mt-8 flex justify-between items-center">
            <div className="text-left">
              <p className="font-semibold text-md font-montserrat">
                Soit un Total de
              </p>
            </div>
            <div className="text-right">
              <p className="text-gray-500 font-montserrat ">Net par mois</p>
              <p className="text-lg font-bold font-montserrat">
                $ {totalCharges}{" "}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Accordion;
