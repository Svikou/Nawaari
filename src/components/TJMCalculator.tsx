// import React, { useState } from 'react';
// import Input from './Input';

// const TJMCalculator: React.FC = () => {
//   const [monthlySalary, setMonthlySalary] = useState<number>(0);
//   const [operatingCosts, setOperatingCosts] = useState<number>(0);
//   const [tjm, setTjm] = useState<number | null>(null);

//   const calculateTJM = () => {
//     const weeksPerMonth = 4;
//     const daysPerWeek = 5;
//     const totalWorkDaysPerMonth = weeksPerMonth * daysPerWeek;

//     const tjmValue = (monthlySalary + operatingCosts) / totalWorkDaysPerMonth;
//     setTjm(tjmValue);}
//   };

//   return (
//     <div>
//      <div>
//       <Input />
//       </div>
//       <div>
//         <label>Frais de Fonctionnement: </label>
//         <input
//           type="number"
//           value={operatingCosts}
//           onChange={(e) => setOperatingCosts(Number(e.target.value))}
//         />
//       </div>
//       <button onClick={calculateTJM}>Calculer TJM</button>
//       {tjm !== null && (
//         <div>
//           <h3>TJM Calculé: {tjm.toFixed(2)} €</h3>
//         </div>
//       )}
//     </div>

//   );
// };

// export default TJMCalculator;
