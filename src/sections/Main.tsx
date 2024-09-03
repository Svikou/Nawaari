import ConverterForm from "../components/ConverterForm";
import Accordion from "../components/Accordion";
import Input from "../components/Input";
import Render from "../components/Render";
import { TJMProvider } from "@/components/TJMContext";
import JoursOuvres from "@/components/JourOuvres";

const Main = () => {
  return (
    <main>
      <div className=" text-center pb-[20px] ">
        <h2 className="font-montserrat text-[40px] leading-[52px] font-bold text-[0000] my-16 tracking-wide">
          Calculez
          <span className="text-[#4DC5CE]"> votre tarif journalier moyen </span>
          Freelance <br /> avec
          <span className="text-[#4DC5CE]"> Nawaari.com </span>
        </h2>
      </div>
      <section className="flex justify-between max-lg:flex-col gap-10 w-full max-container">
        <TJMProvider>
          <div className="flex flex-1 flex-col">
            <div className="pb-5">
              <Input />
            </div>
            <div className="p-5">
              <Accordion />
            </div>
            <div className="pt-2">
              <p className="block text-lg font-montserrat font-semibold leading-6 text-gray-900 mb-2 text-center">
                Mes jours ouvrés
              </p>
              <JoursOuvres />
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="pb-5">
              <Render />
            </div>

            <div className="pt-2">
              <p className="block text-lg font-montserrat font-semibold leading-6 text-gray-900 mb-2 text-center">
                Convertisseur de devises
              </p>
            </div>
            <div className="currency-converter">
              <ConverterForm />
            </div>
          </div>
        </TJMProvider>
      </section>
    </main>
  );
};

export default Main;
