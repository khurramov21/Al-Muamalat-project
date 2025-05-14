import React, { useState } from 'react'
import logo from '../img/navbar-logo.png'
import loginImg from '../img/loginImg.png'
import { GoPerson } from 'react-icons/go'
import { MdOutlineEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FaAngleDown } from 'react-icons/fa';


const countries = [
  { name: "Uzbekistan", flag: "🇺🇿" },
  { name: "United States", flag: "🇺🇸" },
  { name: "Russia", flag: "🇷🇺" },
  { name: "Japan", flag: "🇯🇵" },
  { name: "Germany", flag: "🇩🇪" },
];

export default function Login() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setShowDropdown(false);
  };

  return (
    <div className='w-[1320px] h-[670px] mx-auto pl-[70px] flex items-center justify-center mt-6'>
      <div className='w-[700px] h-[670px] mt-[112px]'>
        <div className='flex justify-between w-[570px] h-[100px]'>
          <div className='flex items-center gap-[10px] w-[340px] h-[56px]'>
            <img src={logo} alt="logo" />
            <h1 className='font-semibold text-[24px] leading-[100%] text-[#009688]'>Al-Muamalat</h1>
          </div>
        </div>

        <div className='w-[553px] gap-[80px] mt-[40px]'>
          <h1 className='font-semibold text-[80px] leading-[100%] text-[#000000]'>Get started</h1>
          <div className='flex items-center gap-[10px] mt-2'>
            <p className='font-sans text-[26px] leading-[100%] text-[#8F8F8F]'>Already have an account?</p>
            <Link to="/register" className='font-sans text-[26px] leading-[100%] text-[#009688] hover:text-[#667cf7]'>Sign In</Link>
          </div>
        </div>

        <div className='w-[454px] h-[228px] gap-[24px] flex flex-col mt-[80px]'>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your name"
              className="h-[60px] w-full border border-[#8F8F8F] rounded-[8px] pr-[20px] p-[20px]"
            />
            <GoPerson className="absolute right-[15px] top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Enter your email"
              className="h-[60px] w-full border border-[#8F8F8F] rounded-[8px] pr-[20px] p-[20px]"
            />
            <MdOutlineEmail className="absolute right-[15px] top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          <div className="relative w-full max-w-md">
            <div className="relative">
              <input
                type="number"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="h-[60px] w-full border border-[#8F8F8F] rounded-[8px] pl-[60px] pr-[40px] p-[20px]"
              />
              <div
                onClick={() => setShowDropdown(!showDropdown)}
                className="absolute left-[15px] top-1/2 transform -translate-y-1/2 text-xl cursor-pointer select-none"
              >
                {selectedCountry.flag}
              </div>
              <FaAngleDown
                className="absolute right-[15px] top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              />
            </div>

            {showDropdown && (
              <ul className="absolute z-10 mt-2 w-full border rounded-md bg-white shadow-lg max-h-60 overflow-y-auto">
                {countries.map((country) => (
                  <li
                    key={country.name}
                    onClick={() => {
                      handleSelect(country);
                      setShowDropdown(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                  >
                    <span className="text-lg">{country.flag}</span> {country.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

        </div>

        <div className='w-[454px] h-[60px] bg-[#009688] rounded-[8px] mt-[50px] flex items-center justify-center cursor-pointer'>
          <button className='font-sans text-[20px] leading-[100%] text-[#FFFFFF]'>Login In</button>
        </div>

      </div>

      <div className='w-[700px] h-[794px] mt-[90px] bg-[#009688] rounded-[40px]'>
        <div className='w-[400px] h-[400px] flex items-center justify-center mx-auto mt-[152px]'>
          <img src={loginImg} alt="loginImg" />
        </div>

        <h1 className='w-[500px] mx-auto h-[179px] flex items-center font-semibold text-[36px] text-[#FFFFFF] leading-[100%] text-center'>
          Welcome to Al Muamalat – Empowering Your Journey in Islamic Finance
        </h1>
      </div>
    </div>
  );
}
