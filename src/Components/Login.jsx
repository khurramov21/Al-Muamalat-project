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

  const {mutate, isLoading, error} = useMutation({
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
      <div className='w-[1320px] h-[670px] mx-auto pl-[70px] flex items-center justify-center mt-6'>
        <div className='w-[700px] h-[670px] mt-[112px]'>
          <div className='flex justify-between w-[570px] h-[100px]'>
            <div className='flex items-center gap-[10px] w-[340px] h-[56px]'>
              <img src={logo} alt="logo" />
              <Link to="/" className='font-semibold text-[24px] leading-[100%] text-[#009688]'>Al-Muamalat</Link>
            </div>
          </div>

          <div className='w-[553px] gap-[80px] mt-[40px]'>
            <h1 className='font-semibold text-[80px] leading-[100%] text-[#000000]'>Get started</h1>
          </div>

          <div className='w-[454px] h-[190px] gap-[24px] flex flex-col mt-[80px]' >
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

          <div className='flex flex-col gap-[10px]'>
            <button onClick={onSubmit} type="submit" className='w-[454px] h-[60px] bg-[#009688] rounded-[8px] flex items-center justify-center cursor-pointer font-sans text-[20px] leading-[100%] text-[#FFFFFF]'>
              Sign In
            </button>

            <Link to="/login" className='w-[454px] font-sans text-[26px] leading-[100%] text-[#8F8F8F] text-center hover:text-[#667cf7]'>
              Create a new account !
            </Link>
          </div>
        </div>

        <div className='w-[700px] h-[794px] mt-[90px] bg-[#009688] rounded-[40px]'>
          <div className='w-[400px] h-[400px] flex items-center justify-center mx-auto mt-[152px]'>
            <img src={registerImg} alt="" />
          </div>

          <h1 className='w-[500px] mx-auto h-[179px] flex items-center font-semibold text-[36px] text-[#FFFFFF] leading-[100%] text-center'>
            Welcome to Al Muamalat – Empowering Your Journey in Islamic Finance
          </h1>
        </div>
      </div>
    </form>
  )
}

export default Login