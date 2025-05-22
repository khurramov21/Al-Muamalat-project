import React, { useState } from 'react'
import logo from '../img/navbar-logo.png'
import loginImg from '../img/loginImg.png'
import { GoPerson } from 'react-icons/go'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useAuth } from '../context/Index'

export default function Register() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const auth = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { full_name, password, phone_number } = data;
    auth.register({ full_name, password, phone_number }, () => {
      toast.success("Register successfully");
      navigate("/login");
    }, []);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='w-full lg:w-[1320px] h-auto lg:h-[670px] mx-auto px-4 lg:pl-[70px] flex flex-col lg:flex-row items-center justify-center mt-6'>

        {/* Left Form Side */}
        <div className='w-full lg:w-[700px] h-auto lg:h-[670px] mt-[40px] lg:mt-[112px] flex flex-col items-center lg:items-start'>

          <div className='flex justify-between w-full lg:w-[570px] h-[100px]'>
            <div className='flex items-center gap-[10px] w-[340px] h-[56px]'>
              <img src={logo} alt="logo" />
              <Link to="/home" className='font-semibold text-[24px] leading-[100%] text-[#009688]'>Al-Muamalat</Link>
            </div>
          </div>

          <div className='w-full lg:w-[553px] gap-[80px] mt-[40px] text-center lg:text-left'>
            <h1 className='font-semibold text-[40px] md:text-[60px] lg:text-[80px] leading-[100%] text-[#000000]'>Get started</h1>
            <div className='flex flex-col md:flex-row items-center gap-[10px] mt-4 justify-center lg:justify-start'>
              <p className='font-sans text-[20px] lg:text-[26px] text-[#8F8F8F]'>Already have an account?</p>
              <Link to="/register" className='font-sans text-[20px] lg:text-[26px] text-[#009688] hover:text-[#667cf7]'>Sign In</Link>
            </div>
          </div>

          <div className='w-full lg:w-[454px] h-auto lg:h-[228px] gap-[24px] flex flex-col mt-[60px]'>
            {/* Full Name Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Enter full name"
                {...register("full_name")}
                className="h-[60px] w-full border border-[#8F8F8F] rounded-[8px] pr-[20px] p-[20px]"
              />
              <GoPerson className="absolute right-[15px] top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password")}
                className="h-[60px] w-full border border-[#8F8F8F] rounded-[8px] pr-[20px] p-[20px]"
              />
            </div>

            {/* Phone Number Input */}
            <div className="relative w-full">
              <input
                type="number"
                placeholder="Enter your phone number"
                {...register("phone_number")}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="h-[60px] w-full border border-[#8F8F8F] rounded-[8px] p-[20px]"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className='w-full lg:w-[454px] h-[60px] bg-[#009688] rounded-[8px] mt-[50px] flex items-center justify-center cursor-pointer'>
            <button type="submit" className='font-sans text-[20px] leading-[100%] text-[#FFFFFF]'>
              Login
            </button>
          </div>
        </div>

        {/* Right Image Side */}
        <div className='w-full lg:w-[700px] h-auto lg:h-[794px] mt-[40px] lg:mt-[90px] bg-[#009688] rounded-[40px] p-4 flex flex-col items-center justify-center'>
          <div className='w-full max-w-[400px] h-auto flex items-center justify-center mt-[60px] lg:mt-[152px]'>
            <img src={loginImg} alt="loginImg" className='w-full h-auto object-contain' />
          </div>

          <h1 className='w-full max-w-[500px] mx-auto mt-6 lg:h-[179px] flex items-center font-semibold text-[20px] md:text-[28px] lg:text-[36px] text-[#FFFFFF] leading-[100%] text-center'>
            Welcome to Al Muamalat – Empowering Your Journey in Islamic Finance
          </h1>
        </div>
      </div>
    </form>
  );
}
