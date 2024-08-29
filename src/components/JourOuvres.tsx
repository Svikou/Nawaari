// import React, { useContext } from "react";
// import { TJMContext } from "./TJMContext";

// const JoursOuvres: React.FC = () => {
//   const context = useContext(TJMContext);

//   if (!context) {
//     throw new Error("JoursOuvres must be used within a TJMProvider");
//   }

//   const { values, setValues } = context;

//   // Gérer les changements pour chaque checkbox
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, checked } = event.target;
//     setValues((prevValues) => ({
//       ...prevValues,
//       joursOuvres: {
//         ...prevValues.joursOuvres,
//         [name]: checked ? 1 : 0,
//       },
//     }));
//   };

// là maintenant on vise les 100 commit enfait
// DINGRIIIIIII MY G

//   return (
//     <div className="p-4 bg-[#f5f7fa] rounded-lg">
//       <h3 className="text-center text-md font-semibold text-gray-700 mb-4">
//         MES JOURS OUVRÉS
//       </h3>
//       <div className="grid grid-cols-3 gap-4 text-center">
//         {Object.keys(values.joursOuvres).map((day) => (
//           <label key={day} className="flex items-center justify-center">
//             <input
//               type="checkbox"
//               name={day}
//               checked={
//                 values.joursOuvres[day as keyof typeof values.joursOuvres] === 1
//               }
//               onChange={handleChange}
//               className="form-checkbox text-purple-500"
//             />
//             <span className="ml-2">{day}</span>
//           </label>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JoursOuvres;
