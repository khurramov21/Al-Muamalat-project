import React, { useState } from 'react'
import logo from '../img/navbar-logo.png'
import { Link } from 'react-router-dom'
import { FaAngleDown, FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [selectedLang, setSelectedLang] = useState('ENG')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const languages = [
    { code: 'ENG', label: '🇬🇧 ENG' },
    { code: 'UZ', label: '🇺🇿 UZ' }
  ]

  const handleSelect = (code) => {
    setSelectedLang(code)
    setDropdownOpen(false)
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white shadow-md">
      <div className="max-w-[1180px] mx-auto flex justify-between items-center py-4 px-8 sm:px-12">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <img className='w-[50px] h-[50px] sm:w-[60px] sm:h-[56px] cursor-pointer' src={logo} alt="logo" />
          <p className='text-[#009688] font-bold font-sans text-[22px] sm:text-[24px] cursor-pointer'>AL MUAMALAT</p>
        </div>

        {/* Desktop Menu Section */}
        <div className="hidden sm:flex">
          <ul className='flex gap-12 font-sans font-semibold text-[15px] text-[#333]'>
            <li className='text-[#009688]'><Link to="/home">Home</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/financy-tools">Financy tools</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Language Selector and Sign In */}
        <div className='hidden sm:flex items-center gap-4 relative'>
          {/* Language Selector */}
          <div className="relative">
            <div
              className='flex items-center gap-1 text-black font-sans text-[15px] cursor-pointer'
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
                    className="px-4 py-2 hover:bg-gray-100 text-sm"
                    onClick={() => handleSelect(lang.code)}
                  >
                    {lang.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          <span className='text-[#76767699]'>|</span>

          <Link to="/login" className='w-[110px] h-[38px] bg-[#009688] rounded-[8px] text-white font-sans font-semibold text-[15px] flex items-center justify-center'>
            Sign In
          </Link>
        </div>

        {/* Mobile Burger Menu Button */}
        <div className="sm:hidden flex items-center">
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu Section */}
      {menuOpen && (
        <div className="sm:hidden absolute top-[100px] left-0 w-full bg-white shadow-md py-4 z-20">
          <ul className="flex flex-col items-center gap-6 font-sans font-semibold text-[16px] text-[#333]">
            <li><Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/programs" onClick={() => setMenuOpen(false)}>Programs</Link></li>
            <li><Link to="/financy-tools" onClick={() => setMenuOpen(false)}>Financy tools</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>

            {/* Language Selector in Mobile */}
            <div className="relative mt-4">
              <div
                className='flex items-center gap-1 text-black font-sans text-[15px] cursor-pointer'
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>{languages.find(l => l.code === selectedLang)?.label}</span>
                <FaAngleDown className="text-sm mt-[2px]" />
              </div>

              {dropdownOpen && (
                <div className="absolute bg-white shadow-md border rounded-md mt-2 right-0 z-10 ">
                  {languages.filter(l => l.code !== selectedLang).map(lang => (
                    <div
                      key={lang.code}
                      className="px-4 py-2 hover:bg-gray-100 text-sm"
                      onClick={() => handleSelect(lang.code)}
                    >
                      {lang.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sign In Button in Mobile */}
            <Link to="/login" className='w-[110px] h-[38px] bg-[#009688] rounded-[8px] text-white font-sans font-semibold text-[15px] mt-4 flex items-center justify-center' >
              Sign In
            </Link>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
