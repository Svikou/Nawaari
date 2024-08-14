import Accordion from "../components/Accordion";
import Input from "../components/Input";
import Render from "../components/Render";

const Main = () => {
  return (
    <main>
    <div className=" text-center pb-[20px] ">
      <h2 className='font-montserrat text-[40px] leading-[52px] font-bold text-[0000] mt-8 tracking-wide'>
          Calculez
          <span className='text-[#4DC5CE]'> votre tarif journalier moyen </span>
          Freelance <br /> avec
          <span className='text-[#4DC5CE]'> Nawaari.com </span>
        </h2>
    </div>
    <section className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
    <div className='flex flex-1 flex-col'>
      <div className="p-8">
      <Input />
      </div>
      <div className="p-5">
      <Accordion/>
      </div>
    </div>
    <div className='flex-1 flex justify-center items-center'>
    <Render/>
    </div>
  
    </section>
    
    </main>
  )
}


export default Main
