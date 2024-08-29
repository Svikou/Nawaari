import React, { useContext } from "react";
import { TJMContext } from "./TJMContext";

const CalculateurTJM: React.FC = () => {
  const context = useContext(TJMContext);

  if (!context) {
    throw new Error("CalculateurTJM must be used within a TJMProvider");
  }

  const { values } = context;

  const calculTJM = (): number => {
    const totalCharges =
      values.Input + values.loyer + values.courses + values.logiciel;
    return totalCharges / values.joursTravailles;
  };

  return (
    <div className="mx-auto ">
      <p className="block text-md font-montserrat font-semibold leading-6 text-gray-900 mb-2 text-center">
        Tarif journalier recommandé
      </p>
      <div className="w-[480px] h-[160px] mx-auto rounded-lg bg-[#e7e6e64d] p-3 items-center">
        <p className="mt-8 text-center font-montserrat text-[40px] font-semibold text-[#4DC5CE]">
          {values.joursTravailles > 0 ? calculTJM().toFixed(2) : "0"} €
        </p>
      </div>
    </div>
  );
};

export default CalculateurTJM;
