import React from 'react'
import logo from '../img/navbar-logo.png'

const Navbar = () => {
  return (
    <div className="flex mx-auto justify-between w-[1320px] h-[100px] px-[130px] py-[18px] bg-white shadow-[0px_6px_12px_0px_#0000001A]">
        <div className="navbar-logo flex w-[240px] h-[56px] gap-4">
            <img className='w-[60.22px] h-[56px] top-[22px] left-[130px] cursor-pointer' src={logo} alt="logo" />
            <p className='mt-4 text-[#009688] w-[168px] h-[20px] font-bold font-sans text-[22px]leading-[100%] tracking-[0%] cursor-pointer'>AL MUAMALAT</p>
        </div>

        <div className="navbar-menu w-[491px] h-[64px] mt-5">
            <ul className='flex gap-12 font-sans font-semibold text-[15px] leading-[100%] tracking-[0%] align-center cursor-pointer'>
                <li className='text-[#009688]'>Home</li>
                <li>Programs</li>
                <li>Financy tools</li>
                <li>Contact</li>
            </ul>
        </div>

        <div className='navbar-button flex w-[269px] h-[44px] gap-4 cursor-pointer'>
          <p className='w-[91px] h-[44px] mt-4'>🇬🇧 ENG</p>
          <p className='w-[32px] border-[#76767699] mt-4'>|</p>
          <button className='w-[110px] h-[38px] mt-2 bg-[#009688] rounded-[8px] text-[#FFFFFF] font-sans font-semibold text-[15px] leading-[100%] tracking-[0%]'>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar