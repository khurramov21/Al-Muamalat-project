import React from 'react'
import ProfileImg from '../img/profile-img.png'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import request from '../Services/Request'

const Profile = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['userData'],
    queryFn: () => request.get('/user/me').then(res => res.data.data)
  })
console.log(data)
  const user = data;

  return (
    <>
      {/* Main Content Container */}
      <div className='w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8'>
        <div className='w-full max-w-[1180px] mx-auto pt-[140px]'>
          {/* Tabs */}
          <div className='flex flex-wrap gap-4 md:gap-[28px]'>
            <button className='w-[157px] h-[43px] bg-[#009688] rounded-[10px] text-white font-sans font-semibold text-[16px]'>
              Profile
            </button>
            <Link
              to='/course'
              className='w-[157px] h-[43px] border-[2px] border-[#686868] bg-white rounded-[10px] text-[#686868] font-sans font-semibold text-[16px] flex items-center justify-center'
            >
              Course
            </Link>
          </div>

          {/* Card */}
          <div className='w-full h-auto bg-white rounded-[10px] shadow-[2px_2px_40px_1px_#0000001A] mt-[28px] p-[20px] sm:p-[30px]'>
            <div className='flex flex-col lg:flex-row justify-between gap-6'>
              {/* Profile Info */}
              <div className='flex flex-col sm:flex-row sm:items-center gap-[16px] sm:gap-[24px]'>
                <img src={ProfileImg} alt="profile-img" />
                <div>
                  <h1 className='font-semibold text-[24px] sm:text-[32px] text-[#000]'>{user?.full_name}</h1>
                  <p className='font-semibold text-[14px] sm:text-[16px] text-[#000]'>+ {user?.phone_number}</p>
                  <p className='font-semibold text-[14px] sm:text-[16px] text-[#000]'>{user?.address}</p>
                  <p className='font-semibold text-[14px] sm:text-[16px] text-[#000]'>{user?.birthday}</p>
                </div>
              </div>

              {/* Save Button */}
              <div className='flex justify-end'>
                <button className='w-[93px] h-[44px] bg-[#009688] rounded-[8px] text-white font-sans font-semibold text-[16px] mt-2 lg:mt-[25px]'>
                  Save
                </button>
              </div>
            </div>

            {/* Form Fields */}
            <div className='mt-[40px] flex flex-col gap-[40px]'>
              <div className='flex flex-col lg:flex-row justify-between gap-[20px]'>
                <div className='flex flex-col gap-[10px] w-full lg:w-[537px]'>
                  <p className='text-[14px] text-[#000000]'>Full Name</p>
                  <input
                    type='text'
                    className='w-full h-[46px] bg-[#F7F7F7] rounded-[7px] pt-[16px] p-[20px]'
                    placeholder='Your Full Name'
                    defaultValue={user?.full_name || ''}
                  />
                </div>
                <div className='flex flex-col gap-[10px] w-full lg:w-[537px]'>
                  <p className='text-[14px] text-[#000000]'>Phone Number</p>
                  <input
                    type='number'
                    className='w-full h-[46px] bg-[#F7F7F7] rounded-[7px] pt-[16px] p-[20px]'
                    placeholder='Your Phone Number'
                    defaultValue={user?.phone_number || ''}
                  />
                </div>
              </div>

              <div className='flex flex-col lg:flex-row justify-between gap-[20px]'>
                <div className='flex flex-col gap-[10px] w-full lg:w-[537px]'>
                  <p className='text-[14px] text-[#000000]'>Address</p>
                  <input
                    type='email'
                    className='w-full h-[46px] bg-[#F7F7F7] rounded-[7px] pt-[16px] p-[20px]'
                    placeholder='Enter Your Address'
                    defaultValue={user?.address || ''}
                  />
                </div>
                <div className='flex flex-col gap-[10px] w-full lg:w-[537px]'>
                  <p className='text-[14px] text-[#000000]'>Birthday</p>
                  <input
                    type='date'
                    className='w-full h-[46px] bg-[#F7F7F7] rounded-[7px] pt-[16px] p-[20px]'
                    placeholder='Enter Your Birthday'
                    defaultValue={user?.birthday || ''}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - OUTSIDE padded container */}
      <div className='mt-[70px] sm:mt-[150px] lg:mt-[220px] w-full max-w-[1440px] mx-auto'>
        <Footer />
      </div>
    </>
  )
}

export default Profile
