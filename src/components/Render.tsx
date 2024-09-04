import React, { useContext } from "react";
import { TJMContext, TJMValues } from "./TJMContext";

const CalculateurTJM: React.FC = () => {
  const context = useContext(TJMContext);

  if (!context) {
    throw new Error("CalculateurTJM must be used within a TJMProvider");
  }

  const { values } = context;

  const getJoursOuvresCount = (
    joursOuvres: TJMValues["joursOuvres"]
  ): number => {
    return Object.values(joursOuvres).filter(Boolean).length;
  };

  const calculTJM = (): number => {
    const totalCharges =
      values.Input + values.loyer + values.courses + values.logiciel;

    const joursOuvresCount = getJoursOuvresCount(values.joursOuvres);

    return totalCharges / joursOuvresCount;
  };

  return (
    <div className="mx-auto ">
      <p className="block text-lg font-montserrat font-semibold leading-6 text-gray-900 mb-2 text-center">
        Tarif journalier recommandé
      </p>
      <div className="w-[480px] h-[160px] mx-auto rounded-lg bg-[#e7e6e64d] p-3 items-center">
        <p className="mt-8 text-center font-montserrat text-[40px] font-semibold text-[#4DC5CE]">
          {getJoursOuvresCount(values.joursOuvres) > 0
            ? `$${calculTJM().toFixed(2)} / jour`
            : "0,00 / jour"}
        </p>
      </div>
    </div>
  );
};

export default CalculateurTJM;
