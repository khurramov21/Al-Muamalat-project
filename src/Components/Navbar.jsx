import React, { useState } from 'react'
import logo from '../img/navbar-logo.png'
import { Link, useLocation } from 'react-router-dom'
import { FaAngleDown, FaBars, FaUser } from 'react-icons/fa'

const Navbar = () => {
  const location = useLocation()
  const [selectedLang, setSelectedLang] = useState('ENG')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false) // mobile
  const [programsDesktopOpen, setProgramsDesktopOpen] = useState(false) // desktop

  const getUserToken = localStorage.getItem('testUserToken')

  const languages = [
    { code: 'ENG', label: '🇬🇧 ENG' },
    { code: 'UZ', label: '🇺🇿 UZ' }
  ]

  const handleSelect = (code) => {
    setSelectedLang(code)
    setDropdownOpen(false)
  }

  const isActive = (path) => location.pathname === path
  const isProgramsPath = () =>
    menuItems.some(item => location.pathname === item.path)

  const menuItems = [
    { path: '/programs', label: 'Programs' },
    { path: '/international-educational-programs', label: 'International educational programs' },
    { path: '/specialized-courses', label: 'Specialized courses' },
    { path: '/islamic-finance-literacy', label: 'Islamic Finance Literacy Course' },
    { path: '/certification-program', label: 'Certification program' }
  ]

  const defaultLabel = menuItems.find(item => item.path === location.pathname)?.label || 'Programs'

  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white shadow-md">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-4">
            <img className="w-[50px] h-[50px] sm:w-[60px] sm:h-[56px]" src={logo} alt="logo" />
            <Link to="/home" className="text-[#009688] font-bold text-[22px] sm:text-[24px]">AL MUAMALAT</Link>
          </div>

          <div className="hidden md:flex gap-12 font-semibold text-[15px] text-[#333]">
            <Link to="/home" className={isActive('/home') ? 'text-[#009688]' : ''}>Home</Link>

            <div
              className="relative group"
              onClick={() => setProgramsDesktopOpen(prev => !prev)}
            >
              <span className={`cursor-pointer flex items-center gap-2 ${isProgramsPath() ? 'text-[#009688]' : ''}`}>
                {defaultLabel} <FaAngleDown />
              </span>
              <div className={`absolute ${programsDesktopOpen ? 'block' : 'hidden'} group-hover:block bg-white border rounded mt-1 z-10 w-[300px]`}>
                {menuItems.map(item => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-2 text-sm hover:bg-gray-100 ${isActive(item.path) ? 'text-[#009688]' : ''}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/financy-tools" className={isActive('/financy-tools') ? 'text-[#009688]' : ''}>Financy tools</Link>
            <Link to="/contact" className={isActive('/contact') ? 'text-[#009688]' : ''}>Contact</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <div onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-1 cursor-pointer text-[15px]">
                <span>{languages.find(l => l.code === selectedLang)?.label}</span>
                <FaAngleDown className="text-sm mt-[2px]" />
              </div>
              {dropdownOpen && (
                <div className="absolute right-0 bg-white shadow-md border rounded mt-2 z-10">
                  {languages.filter(l => l.code !== selectedLang).map(lang => (
                    <div key={lang.code} onClick={() => handleSelect(lang.code)} className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">
                      {lang.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <span className="text-[#76767699]">|</span>
            {getUserToken ? (
              <Link to="/profile" className="text-[18px] w-[110px] h-[38px] bg-[#009688] rounded-[8px] text-white flex items-center justify-center gap-2">
                <FaUser /> <span>Profile</span>
              </Link>
            ) : (
              <Link to="/register" className="w-[110px] h-[38px] bg-[#009688] rounded-[8px] text-white text-[15px] flex items-center justify-center">
                Sign In
              </Link>
            )}
          </div>

          <div className="md:hidden">
            <FaBars className="text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4">
            <Link to="/home" onClick={() => setMenuOpen(false)} className={isActive('/home') ? 'text-[#009688]' : ''}>Home</Link>

            <div>
              <div
                onClick={() => setProgramsOpen(prev => !prev)}
                className={`flex items-center gap-2 cursor-pointer ${isProgramsPath() ? 'text-[#009688]' : ''}`}
              >
                Programs <FaAngleDown />
              </div>
              {programsOpen && (
                <div className="ml-4 flex flex-col gap-1 mt-1">
                  {menuItems.map(item => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`text-sm hover:bg-gray-100 px-2 py-1 rounded ${isActive(item.path) ? 'text-[#009688]' : ''}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/financy-tools" onClick={() => setMenuOpen(false)} className={isActive('/financy-tools') ? 'text-[#009688]' : ''}>Financy tools</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className={isActive('/contact') ? 'text-[#009688]' : ''}>Contact</Link>

            <div className="relative">
              <div onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-1 cursor-pointer text-[15px]">
                <span>{languages.find(l => l.code === selectedLang)?.label}</span>
                <FaAngleDown className="text-sm mt-[2px]" />
              </div>
              {dropdownOpen && (
                <div className="absolute bg-white shadow-md border rounded mt-2 z-10">
                  {languages.filter(l => l.code !== selectedLang).map(lang => (
                    <div key={lang.code} onClick={() => handleSelect(lang.code)} className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">
                      {lang.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-2 mt-4">
              <Link to="/register" className="w-[110px] h-[38px] bg-[#009688] rounded-[8px] text-white text-[15px] flex items-center justify-center">Sign In</Link>
              <Link to="/profile" className="text-xl flex items-center gap-2 bg-[#009688] rounded-[8px] text-white w-[110px] h-[38px] justify-center"><FaUser /> <span>Profile</span></Link>
            </div>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
