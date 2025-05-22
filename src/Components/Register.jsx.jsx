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
      <div className='w-[1320px] h-[670px] mx-auto pl-[70px] flex items-center justify-center mt-6'>
        <div className='w-[700px] h-[670px] mt-[112px]'>
          <div className='flex justify-between w-[570px] h-[100px]'>
            <div className='flex items-center gap-[10px] w-[340px] h-[56px]'>
              <img src={logo} alt="logo" />
              <Link to="/home" className='font-semibold text-[24px] leading-[100%] text-[#009688]'>Al-Muamalat</Link>
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

            {/* Phone Number Input (cleaned) */}
            <div className="relative w-full max-w-md">
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

          <div className='w-[454px] h-[60px] bg-[#009688] rounded-[8px] mt-[50px] flex items-center justify-center cursor-pointer'>
            <button type="submit" className='font-sans text-[20px] leading-[100%] text-[#FFFFFF]'>
              Login
            </button>
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
    </form>
  );
}
