import React, { useContext, useState } from "react";
import { TJMContext, TJMValues } from "./TJMContext";

interface InputFieldProps {
  label: keyof TJMValues; // Spécifier que le label correspond à une clé de TJMValues
}

const InputField: React.FC<InputFieldProps> = ({ label }) => {
  const context = useContext(TJMContext);

  if (!context) {
    throw new Error("InputField must be used within a TJMProvider");
  }

  const { values, setValues } = context;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [label]: parseFloat(event.target.value) || 0 });
  };

  return (
    <div className="flex items-center justify-between bg-[#e7e6e6d3] rounded-lg p-4 mt-8">
      <label className="text-gray-700 font-medium">{label}</label>
      <div className="relative flex items-center">
        <input
          value={values[label]}
          onChange={handleChange}
          type="number"
          className="w-[160px] pl-2 py-1 text-right bg-white border border-gray-300 rounded-md text-gray-900 font-semibold"
          placeholder="0"
        />
      </div>
    </div>
  );
};

const Accordion: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[450px] mx-auto h-12 rounded-lg bg-[#e7e6e64d] p-3 items-center">
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
        <div className="mt-4 space-y-4">
          {["loyer", "courses", "logiciel"].map((label) => (
            <InputField key={String(label)} label={label as keyof TJMValues} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
