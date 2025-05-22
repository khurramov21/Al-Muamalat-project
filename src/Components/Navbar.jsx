import React, { useState } from 'react'
import logo from '../img/navbar-logo.png'
import { Link, useLocation } from 'react-router-dom'
import { FaAngleDown, FaBars, FaUser } from 'react-icons/fa'

const Navbar = () => {
  const location = useLocation();
  const [selectedLang, setSelectedLang] = useState('ENG')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const getUserToken = localStorage.getItem("testUserToken") 

  const languages = [
    { code: 'ENG', label: '🇬🇧 ENG' },
    { code: 'UZ', label: '🇺🇿 UZ' }
  ]

  const handleSelect = (code) => {
    setSelectedLang(code)
    setDropdownOpen(false)
  }

  const isActive = (path) => location.pathname === path

  const menuItems = [
    { to: '/programs', label: 'Programs'},
    { path: '/international-educational-programs', label: 'International educational programs' },
    { path: '/specialized-courses', label: 'Specialized courses' },
    { path: '/islamic-finance-literacy', label: 'Islamic Finance Literacy Course' },
    { path: '/certification-program', label: 'Certification program' },
  ]

  const defaultLabel = menuItems.find(item => item.path === location.pathname)?.label || 'Programs'

  return (
    <div className="w-[1440px] mx-auto bg-white shadow-md">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
        <div className="max-w-[1180px] mx-auto flex justify-between items-center py-4 flex-wrap">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <img className='w-[50px] h-[50px] sm:w-[60px] sm:h-[56px] cursor-pointer' src={logo} alt="logo" />
            <Link to="/home" className='text-[#009688] font-bold font-sans text-[22px] sm:text-[24px] cursor-pointer'>AL MUAMALAT</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex">
            <ul className='flex gap-12 font-sans font-semibold text-[15px] text-[#333]'>
              <li className={isActive("/home") ? 'text-[#009688]' : ''}><Link to="/home">Home</Link></li>

              <div className="relative group">
                {/* Default (selected) */}
                <div className="cursor-pointer">
                  {defaultLabel}
                </div>

                {/* Dropdown menu (hover) */}
                <div className="absolute hidden group-hover:block bg-white border rounded mt-1 z-10 w-[300px]">
                  {menuItems.map((item) => (
                    <Link 
                      key={item.path}
                      to={item.path}
                      className={`${isActive(item.path) ? 'text-[#009688]' : ''} block px-4 py-2 hover:bg-[#f0f0f0] text-sm`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <li className={isActive("/financy-tools") ? 'text-[#009688]' : ''}><Link to="/financy-tools">Financy tools</Link></li>
              <li className={isActive("/contact") ? 'text-[#009688]' : ''}><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Language & Sign In */}
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

            {/* Sign In and Profile */}

            {
              getUserToken ? (
                 <Link to="/profile" className="text-[18px] w-[110px] h-[38px] bg-[#009688] rounded-[8px] text-white font-sans flex items-center justify-center cursor-pointer gap-[10px]">
                <FaUser />
                <span className="font-sans ">Profile</span>
              </Link>
              ) : (
                <Link to="/register" className='w-[110px] h-[38px] bg-[#009688] rounded-[8px] text-white font-sans font-semibold text-[15px] flex items-center justify-center'>
                Sign In
              </Link>
              ) 
            }

            {/* <div className='flex items-center gap-2'>
              <Link to="/login" className='w-[110px] h-[38px] bg-[#009688] rounded-[8px] text-white font-sans font-semibold text-[15px] flex items-center justify-center'>
                Sign In
              </Link>
              <Link to="/profile" className="text-[18px] w-[110px] h-[38px] bg-[#009688] rounded-[8px] text-white font-sans flex items-center justify-center cursor-pointer gap-[10px]">
                <FaUser />
                <span className="font-sans ">Profile</span>
              </Link>
            </div> */}

          </div>

          {/* Mobile Burger */}
          <div className="sm:hidden flex items-center">
            <FaBars
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden absolute top-[100px] left-0 w-full bg-white shadow-md py-4 z-20">
          <ul className="flex flex-col items-center gap-6 font-sans font-semibold text-[16px] text-[#333]">
            <li className={isActive("/home") ? 'text-[#009688]' : ''}><Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li className={isActive("/programs") ? 'text-[#009688]' : ''}><Link to="/programs" onClick={() => setMenuOpen(false)}>Programs</Link></li>
            <li className={isActive("/financy-tools") ? 'text-[#009688]' : ''}><Link to="/financy-tools" onClick={() => setMenuOpen(false)}>Financy tools</Link></li>
            <li className={isActive("/contact") ? 'text-[#009688]' : ''}><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>

            {/* Mobile Language Selector */}
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

            {/* Mobile Sign In + User */}
            <div className='flex items-center justify-center gap-2 mt-4'>
              <Link to="/register" className='w-[110px] h-[38px] bg-[#009688] rounded-[8px] text-white font-sans font-semibold text-[15px] flex items-center justify-center'>
                Sign In
              </Link>
              <Link to="/profile" className="text-[18px] text-[#009688] cursor-pointer">
                <FaUser />
              </Link>
            </div>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
