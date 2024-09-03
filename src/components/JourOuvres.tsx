import React, { useContext } from "react";
import { TJMContext } from "./TJMContext";

const JoursOuvres: React.FC = () => {
  const context = useContext(TJMContext);

  if (!context) {
    throw new Error("JoursOuvres must be used within a TJMProvider");
  }

  const { values, setValues } = context;

  // Gérer les changements pour chaque checkbox
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      joursOuvres: {
        ...prevValues.joursOuvres,
        [name]: checked ? 1 : 0,
      },
    }));
  };

  return (
    <div className="w-[450px] mx-auto px-10 p-10 rounded-lg bg-[#e7e6e64d] border border-[rgba(255,255,255,0.3)] mb-10">
      <div className=" text-center flex flex-wrap justify-between gap-2 gap-y-8">
        {Object.keys(values.joursOuvres).map((day) => (
          <label
            key={day}
            className="flex items-center font-montserrat font-semibold"
          >
            <input
              type="checkbox"
              name={day}
              checked={
                values.joursOuvres[day as keyof typeof values.joursOuvres] === 1
              }
              onChange={handleChange}
              className="form-checkbox  text-[#4DC5CE] rounded-lg "
            />
            <span className="ml-2">{day}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default JoursOuvres;
