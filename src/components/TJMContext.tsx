import React, { createContext, useState, ReactNode } from "react";

// Définir les types pour les valeurs du contexte
type TJMValues = {
  loyer: number;
  courses: number;
  logiciel: number;
  Input: number;
  InputField: number;
  joursTravailles: 28;
};

// Définir le type pour le contexte
type TJMContextType = {
  values: TJMValues;
  setValues: React.Dispatch<React.SetStateAction<TJMValues>>;
};

// Créer le contexte avec un type par défaut
const TJMContext = createContext<TJMContextType | undefined>(undefined);

type TJMProviderProps = {
  children: ReactNode;
};

const TJMProvider: React.FC<TJMProviderProps> = ({ children }) => {
  const [values, setValues] = useState<TJMValues>({
    loyer: 0,
    courses: 0,
    logiciel: 0,
    joursTravailles: 28,
    Input: 0,
    InputField: 0,
  });

  return (
    <TJMContext.Provider value={{ values, setValues }}>
      {children}
    </TJMContext.Provider>
  );
};

export { TJMContext, TJMProvider };
export type { TJMValues };
