import React from 'react'
import logo from '../img/navbar-logo.png'
import registerImg from '../img/register-img.png'
import { GoPerson } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const Login = () => {
  const { register, handleSubmit } = useForm()

  const { mutate, isLoading, error } = useMutation({
    mutationFn: (submitData) => {
      return axios.post("https://api.al-muamalat.uz/api/auth/signin", submitData)
        .then((response) => {
          localStorage.setItem("testUserToken", response?.data?.data?.tokens?.accessToken)
          toast.success("Login successfully")
        })
    }
  })

  const onSubmit = (data) => {
    mutate(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='w-full lg:w-[1320px] h-auto lg:h-[670px] mx-auto px-4 lg:pl-[70px] flex flex-col lg:flex-row items-center justify-center mt-6'>

        {/* Form Section */}
        <div className='w-full lg:w-[700px] h-auto lg:h-[670px] mt-[40px] lg:mt-[112px] flex flex-col items-center lg:items-start'>

          {/* Logo */}
          <div className='flex justify-between w-full lg:w-[570px] h-[100px]'>
            <div className='flex items-center gap-[10px] w-[340px] h-[56px]'>
              <img src={logo} alt="logo" />
              <Link to="/" className='font-semibold text-[24px] leading-[100%] text-[#009688]'>Al-Muamalat</Link>
            </div>
          </div>

          {/* Title */}
          <div className='w-full lg:w-[553px] gap-[80px] mt-[40px] text-center lg:text-left'>
            <h1 className='font-semibold text-[40px] md:text-[60px] lg:text-[80px] leading-[100%] text-[#000000]'>
              Get started
            </h1>
          </div>

          {/* Input fields */}
          <div className='w-full lg:w-[454px] h-auto lg:h-[190px] gap-[24px] flex flex-col mt-[60px]'>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your phone number"
                {...register("phone_number")}
                className="h-[60px] w-full border border-[#8F8F8F] rounded-[8px] pr-[20px] p-[20px]"
              />
              <GoPerson className="absolute right-[15px] top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password")}
                className="h-[60px] w-full border border-[#8F8F8F] rounded-[8px] pr-[20px] p-[20px]"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className='flex flex-col gap-[10px] mt-[30px] w-full lg:w-[454px]'>
            <button type="submit" className='w-full h-[60px] bg-[#009688] rounded-[8px] flex items-center justify-center cursor-pointer font-sans text-[20px] leading-[100%] text-[#FFFFFF]'>
              Sign In
            </button>

            <Link to="/login" className='font-sans text-[20px] lg:text-[26px] leading-[100%] text-[#8F8F8F] text-center hover:text-[#667cf7]'>
              Create a new account !
            </Link>
          </div>
        </div>

        {/* Image Panel */}
        <div className='w-full lg:w-[700px] h-auto lg:h-[794px] mt-[40px] lg:mt-[90px] bg-[#009688] rounded-[40px] p-4 flex flex-col items-center justify-center'>
          <div className='w-full max-w-[400px] h-auto flex items-center justify-center mt-[60px] lg:mt-[152px]'>
            <img src={registerImg} alt="" className='w-full h-auto object-contain' />
          </div>

          <h1 className='w-full max-w-[500px] mx-auto h-auto lg:h-[179px] mt-6 flex items-center font-semibold text-[20px] md:text-[28px] lg:text-[36px] text-[#FFFFFF] leading-[100%] text-center'>
            Welcome to Al Muamalat – Empowering Your Journey in Islamic Finance
          </h1>
        </div>
      </div>
    </form>
  )
}

export default Login
