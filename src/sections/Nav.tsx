import logo from '../assets/images/logo.jpeg';
const Nav = () => {
  return (
    <header className="w-full bg-[#e7e6e64d] h-20">
      <nav className='flex'>
      <img src={logo} alt="logo" width={190} height={79} className="m-0 w-[190] h-[79] mt-[13px] ml-[40px]"/>
      </nav>
    </header>
  )
}

export default Nav
