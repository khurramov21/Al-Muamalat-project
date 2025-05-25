import React from 'react'
import studentsImg from '../img/studentsImg.png'

const Students = () => {
  return (
    <div className='w-[1440px] h-[728px] gap-[60px] bg-[#FFFFFF] max-md:w-full max-md:h-auto max-md:px-4 max-md:py-10 max-md:mt-[80px]'>
      <div className='w-[574px] h-[128px] gap-[16px] text-center mx-auto mt-[-40px] max-md:w-full max-md:h-auto max-md:mt-0'>
        <h1 className='font-semibold text-[40px] leading-[100%] text-[#000000] max-md:text-[28px]'>
          What students say
        </h1>
        <p className='font-semibold text-[17px] leading-[100%] text-[#686868] mt-[20px] max-md:text-[15px]'>
          Our team consists of seasoned professionals with extensive experience in Islamic finance and management. Each member brings a unique set of skills and expertise.
        </p>
      </div>

      <div className='w-[1178px] h-[330px] mx-auto mt-[60px] gap-[40px] flex max-md:flex-col max-md:items-center max-md:gap-6 max-md:w-full max-md:h-auto'>
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className='w-[366px] h-[330px] p-[35px] bg-[#F6F8F9] rounded-[10px] max-md:w-[90%] max-md:h-auto'
          >
            <p className='font-semibold text-[17px] leading-[26px] text-[#686868] max-md:text-[15px]'>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.
            </p>
            <div className='w-[296px] h-[58px] gap-[16px] flex mt-5 max-md:w-full'>
              <img src={studentsImg} alt='students-img' className='max-md:w-[50px] max-md:h-[50px]' />
              <div className='flex flex-col justify-center'>
                <h1 className='font-semibold text-[18px] leading-[26px] text-[#000000] max-md:text-[16px]'>Finlay Kirk</h1>
                <p className='font-sans text-[12px] leading-[26px] text-[#686868] max-md:text-[12px]'>Web designer</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Students
