import { useEffect, useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const getValue = (value:string) => {
    console.log(value)
  };
    

  return (
    <div className="w-[450px] mx-auto h-12 rounded-lg bg-[#e7e6e64d] p-3 items-center">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleAccordion}>
        <h2 className="text-md font-semibold font-montserrat">Frais de fonctionnement</h2>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
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
          {[{label:"loyer"},{label:"courses"},{label:"logiciel"}].map((item)=> <InputField getValue={getValue} label={item.label} /> )}
          <div className="flex justify-between text-sm font-medium mt-4">
            <span>Soit un Total de</span>
            <span className="text-right">Net par mois</span>
          </div>
          <div className="text-right text-xl font-bold">
            0,00 €
          </div>
        </div>
      )}
    </div>
  );
};

interface InputFieldProps{
  label:string;
  getValue:(value:string) => void
}
const InputField = ({ label,getValue }:InputFieldProps) => { 
  const [value,setvalue] = useState('');
  useEffect(()=>{
    if (value){
      getValue(value)
    };
  },[value,getValue])
  return (
    <div className="flex items-center justify-between bg-[#e7e6e6d3] rounded-lg p-4 mt-8">
      <label className="text-gray-700 font-medium">{label}</label>
      <div className="relative flex items-center">
        <input
          value={value}
          onChange={(event) => setvalue(event.target.value) }
          type="text"
          className="w-[160px] pl-2 pr-10 py-1 text-right bg-white border border-gray-300 rounded-md  text-gray-900 font-semibold"
          placeholder="0,00"
        />
        <span className="absolute right-2 text-gray-500 text-lg">€</span>
      </div>
    </div>
  );
};

export default Accordion;

