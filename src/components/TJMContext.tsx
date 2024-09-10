import React, { createContext, useState, ReactNode } from "react";

// Définie les types pour les valeurs du contexte
type TJMValues = {
  loyer: number;
  courses: number;
  logiciel: number;
  Input: number;
  InputField: number;
  joursOuvres: Days;
};

type Days = {
  Lundi: number;
  Mardi: number;
  Mercredi: number;
  Jeudi: number;
  Vendredi: number;
  Samedi: number;
  Dimanche: number;
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
    Input: 0,
    InputField: 0,
    joursOuvres: {
      Lundi: 0,
      Mardi: 0,
      Mercredi: 0,
      Jeudi: 0,
      Vendredi: 0,
      Samedi: 0,
      Dimanche: 0,
    },
  });

  return (
    <TJMContext.Provider value={{ values, setValues }}>
      {children}
    </TJMContext.Provider>
  );
};

export { TJMContext, TJMProvider };
export type { TJMValues };
