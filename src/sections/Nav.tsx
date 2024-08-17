import logo from '../assets/images/logo.jpeg';
const Nav = () => {
  return (
    <header className="w-full bg-[#e7e6e645] h-20">
      <nav className='flex'>
      <img src={logo} alt="logo" width={180} height={76} className="w-[190] h-[76] flex mt-4 ml-[40px]"/>
      </nav>
    </header>
  )
}

export default Nav
