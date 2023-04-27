import React,{ useState,useEffect} from 'react';
import { header } from '../data';
import {HiMenuAlt4, HiOutlineX} from 'react-icons/hi'
import MobileNav from '../components/MobileNav'
import Nav from '../components/Nav'

 
const Header = () => {
  const [MobileNave,setMobileNave] = useState(false)
  const [isActive,setIsActive] = useState(false)
  const {logo,btnText} =header

useEffect(()=>{
  window.addEventListener('scroll', ()=>{
    window.scrollY > 60 ? setIsActive(true): setIsActive(false)

  })


},[])


  return <header className={`${ isActive ? 'lg:top-0 bg-white shadow-2xl' :'lg:top=[60px]'} py-6 lg:py-4 fixed w-full transition-all z-10`}>
    <div className='container mx-auto flex justify-between items-center'>
      <a href='#' data-aos = 'fade-down' data-aos-delay = '1000'>
        <img src = {logo} alt='' className='w-[108px]'/>
      </a>
      <div className='hidden lg:flex' data-aos = 'fade-down' data-aos-delay = '1200'>
        <Nav />
      </div>
      <button className='btn btn-sm btn-outline hidden lg:flex' data-aos = 'fade-down' data-aos-delay = '1400'>login</button>
      <button className='btn btn-sm btn-outline hidden lg:flex ' data-aos = 'fade-down' data-aos-delay = '1400'>Register Now</button>
      <button className='lg:hidden' onClick={() => setMobileNave( !MobileNave)} > {MobileNave ? (<HiOutlineX className='text-3xl text-accent' />) :(
        <HiMenuAlt4 className='text-3xl text-accent' />
      )}</button>

      <div className={` ${MobileNave ? 'left-0':'-left-full'} fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all `}>
        <MobileNav />
      </div>

    </div>
  </header>;

};

export default Header;
