import React, { useState } from 'react'
import logo from '../img/navbar-logo.png'
import { Link } from 'react-router-dom'
import { FaAngleDown } from 'react-icons/fa'

const Navbar = () => {
  const [selectedLang, setSelectedLang] = useState('ENG')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const languages = [
    { code: 'ENG', label: '🇬🇧 ENG' },
    { code: 'RUS', label: '🇷🇺 RUS' },
    { code: 'UZ', label: '🇺🇿 UZ' }
  ]

  const handleSelect = (code) => {
    setSelectedLang(code)
    setDropdownOpen(false)
  }

  return (
    <div className="flex mx-auto justify-between items-center w-[1320px] h-[100px] px-[130px] py-[18px] bg-white shadow-[0px_6px_12px_0px_#0000001A] relative">
      <div className="navbar-logo flex items-center w-[240px] h-[56px] gap-4">
        <img className='w-[60.22px] h-[56px] cursor-pointer' src={logo} alt="logo" />
        <p className='text-[#009688] font-bold font-sans text-[22px] cursor-pointer'>AL MUAMALAT</p>
      </div>

      <div className="navbar-menu">
        <ul className='flex gap-12 font-sans font-semibold text-[15px] leading-[100%] tracking-[0%] cursor-pointer'>
          <li className='text-[#009688]'><Link to="/home">Home</Link></li>
          <li><Link to="/programs">Programs</Link></li>
          <li><Link to="/financy-tools">Financy tools</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className='navbar-button flex items-center gap-4 cursor-pointer relative'>
        {/* Language Selector */}
        <div className="relative">
          <div
            className='flex items-center gap-1 text-black font-sans text-[15px] mt-1'
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span>{languages.find(l => l.code === selectedLang)?.label}</span>
            <FaAngleDown className="text-sm mt-[2px]" />
          </div>

          {dropdownOpen && (
            <div className="absolute bg-white shadow-md border rounded-md mt-2 right-0 z-10">
              {languages.filter(l => l.code !== selectedLang).map(lang => (
                <div
                  key={lang.code}
                  className="px-4 py-2 hover:bg-gray-100 text-sm whitespace-nowrap"
                  onClick={() => handleSelect(lang.code)}
                >
                  {lang.label}
                </div>
              ))}
            </div>
          )}
        </div>

        <span className='text-[#76767699]'>|</span>

        <button className='w-[110px] h-[38px] bg-[#009688] rounded-[8px] text-white font-sans font-semibold text-[15px]'>
          Sign In
        </button>
      </div>
    </div>
  )
}

export default Navbar
