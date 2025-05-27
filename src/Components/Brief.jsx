import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'

const Brief = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto h-[370px] mt-[170px] px-4'>
      <div className='w-full max-w-[1180px] mx-auto'>

        <h1 className='font-bold text-[32px] sm:text-[40px] leading-[100%] text-[#152032] text-center'>
          Brief information about the course
        </h1>

        <div className='flex flex-col sm:flex-row gap-[20px] mt-[65px]'>

          {/* Videodarslar */}
          <div className='w-full max-w-[580px] h-[199px] gap-[30px]'>
            <h1 className='font-medium text-[28px] sm:text-[34px] leading-[100%] text-[#009688] flex items-center'>
              Videodarslar <span className='ml-2'><IoMdArrowDropdown /></span>
            </h1>
            <p className='font-normal text-[20px] sm:text-[28px] leading-[100%] text-[#152032] mt-[20px]'>
              Lessons are posted on the platform in the form of videos, which can be viewed anytime and anywhere. Video lessons are updated.
            </p>
          </div>

          {/* Tasks */}
          <div className='w-full max-w-[580px] h-[199px] gap-[30px] '>
            <h1 className='font-medium text-[28px] sm:text-[34px] leading-[100%] text-[#009688] flex items-center'>
              Tasks <span className='ml-2'><IoMdArrowDropdown /></span>
            </h1>
            <p className='font-normal text-[20px] sm:text-[28px] leading-[100%] text-[#152032] mt-[20px]'>
              Test tasks are given at the end of the module. Only students who successfully pass the test will be able to access the lessons in the next module.
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Brief
