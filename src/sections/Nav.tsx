import logo from "../assets/images/logo.jpeg";
const Nav = () => {
  return (
    <header className="w-full bg-[#e7e6e645] h-[70px] ">
      <nav className="flex">
        <img
          src={logo}
          alt="logo"
          width={200}
          height={76}
          className="w-[200px] h-[76] flex mt-2 ml-[40px]"
        />
      </nav>
    </header>
  );
};

export default Nav;
