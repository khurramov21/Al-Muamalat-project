import React from 'react'
import TickDouble from '../img/tick-double.png'
import { GrShareRounded } from 'react-icons/gr'

const Programs = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto px-4'>
      <div className='w-full max-w-[1180px] mx-auto'>

        {/* Title Section */}
        <div className='max-w-[680px] mx-auto h-[142px] text-center mt-[100px]'>
          <h1 className='font-bold text-[32px] sm:text-[40px] leading-[100%] text-[#152032]'>
            International educational programs
          </h1>
          <p className='font-medium text-[16px] sm:text-[20px] leading-[100%] text-[#686868] mt-[20px]'>
            Al Muamalat Education's international study programs offer an in-depth learning experience at leading Islamic financial institutions around the world.
          </p>
        </div>

        {/* Main Card Section */}
        <div className='w-full max-w-[1180px] mx-auto mt-[60px] h-auto flex flex-col lg:flex-row gap-[20px] md:gap-[40px]'>

          {/* Left Box */}
          <div className='w-full max-w-[580px] h-[590px] bg-[#F3F8FF] rounded-[10px]'>
            <h1 className='font-medium text-[28px] sm:text-[32px] leading-[100%] text-[#000000] text-center mt-[40px]'>
              What you’ll learn
            </h1>

            {[...Array(6)].map((_, i) => (
              <div key={i} className='flex items-start gap-[20px] mt-[32px] text-[#000000] font-normal text-[16px] sm:text-[20px] leading-[100%] px-[40px]'>
                <img src={TickDouble} alt="tick" />
                <p>Gain a comprehensive understanding of Islamic finance principles and ethics.</p>
              </div>
            ))}
          </div>

          {/* Right Box */}
          <div className='w-full max-w-[580px] h-[590px] bg-[#F3F8FF] rounded-[10px] px-[40px]'>
            <h1 className='font-medium text-[24px] sm:text-[32px] leading-[100%] text-[#000000] text-center mt-[40px]'>
              Why should you study at <br />"AL-MUAMALAT"?
            </h1>

            <div className='max-w-[508px] mx-auto h-[279px] gap-[27px]'>
              {[
                "Lifetime access",
                "Video lessons",
                "Tests",
                "Projects",
                "Downloadable resources",
                "Access via mobile device"
              ].map((text, index) => (
                <div key={index} className='flex items-center gap-[20px] mt-[32px]'>
                  <div className='max-w-[10px] h-[10px] bg-[#152032] rounded-full flex items-center justify-center'>
                    <GrShareRounded className='text-white text-[10px]' />
                  </div>
                  <p className='font-normal text-[16px] sm:text-[20px] leading-[100%] text-[#000000]'>{text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Programs
