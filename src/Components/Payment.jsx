import React from 'react'
import OutlineTrue from '../img/outline-true.png'

const Payment = () => {
  return (
    <div className='w-full max-w-[1180px] mx-auto mt-[111px] flex flex-col lg:flex-row gap-10 lg:gap-0'>
    {/* Left - Our Services */}
    <div className='w-full max-w-[552px] h-[794px] bg-[#009688] mx-auto'>
      <h1 className='font-bold text-[36px] text-[#FFFFFF] px-[20px] lg:px-[76px] pt-[30px] lg:pt-[76px] text-center lg:text-left md:mt-[40px]'>
        Our Services
      </h1>

      {/* Item 1 */}
      <div className='flex flex-col lg:flex-row items-center gap-[10px] lg:gap-[20px] px-[20px] lg:px-[76px] md:mt-[76px]'>
        <img src={OutlineTrue} alt='' className='w-[24px] h-[24px]' />
        <h1 className='font-semibold text-[22px] text-[#FFFFFF] text-center lg:text-left'>
          Space for creative ideas
        </h1>
      </div>
      <p className='w-full max-w-[364px] h-[96px] font-medium text-[16px] leading-[120%] text-[#FFFFFF] mx-auto lg:ml-[120px] mt-2 text-center lg:text-left'>
        Cyber Square nourishes young aspiring minds to get a clear vision of their ideas. We guide them in analyzing and building their vision and ideas into reality.
      </p>

      {/* Item 2 */}
      <div className='flex flex-col lg:flex-row items-center gap-[10px] lg:gap-[20px] px-[20px] lg:px-[76px] mt-[27px]'>
        <img src={OutlineTrue} alt='' className='w-[24px] h-[24px]' />
        <h1 className='font-semibold text-[22px] text-[#FFFFFF] text-center lg:text-left'>
          Engaging and fun curriculum
        </h1>
      </div>
      <p className='w-full max-w-[364px] h-[96px] font-medium text-[16px] leading-[120%] text-[#FFFFFF] mx-auto lg:ml-[120px] mt-2 text-center lg:text-left'>
        Our goal is to create an engaging system that provides exciting activities so children can understand the programming concepts thoroughly so that they can perform them on their own.
      </p>

      {/* Item 3 */}
      <div className='flex flex-col lg:flex-row items-center gap-[10px] lg:gap-[20px] px-[20px] lg:px-[76px] mt-[57px]'>
        <img src={OutlineTrue} alt='' className='w-[24px] h-[24px]' />
        <h1 className='font-semibold text-[22px] text-[#FFFFFF] text-center lg:text-left'>
          Professional teaching methods
        </h1>
      </div>
      <p className='w-full max-w-[364px] h-[96px] font-medium text-[16px] leading-[120%] text-[#FFFFFF] mx-auto lg:ml-[120px] mt-2 text-center lg:text-left'>
        We professionals at Cyber Square, have developed an in-depth understanding in how to teach kids and how to code. We believe in exposing kids to real programming languages and tools.
      </p>
    </div>

    {/* Right - Payment */}
    <div className='w-full max-w-[552px] h-[794px] bg-[#F6F8F9] mx-auto flex flex-col items-center lg:items-start'>
      <div className='w-full max-w-[323px] h-[531px] mt-[40px] px-[20px] lg:px-0 lg:ml-[68px]'>
        <h1 className='font-bold text-[36px] text-[#000000] py-[20px] lg:py-[76px] text-center lg:text-left'>
          Payment
        </h1>

        <div className='w-full max-w-[323px] h-[261px] flex flex-col gap-[12px]'>
          {[
            'Space for creative ideas',
            'Engaging and fun curriculum',
            'Professional teaching methods',
            'Learn from AI & Data Science experts',
            'Courses by IIT, NIT, and IIM alumni',
            'UK certification upon completion',
            'Personalized one-to-one training',
          ].map((text, index) => (
            <div key={index} className='flex items-center gap-[12px]'>
              <p className='w-[8px] h-[8px] rounded-full bg-[#009688]'></p>
              <p className='font-normal text-[18px] text-[#000000]'>{text}</p>
            </div>
          ))}
        </div>
      </div>

      <button className='w-full max-w-[222px] h-[64px] rounded-[8px] bg-[#009688] text-white font-semibold text-[18px] mt-[26px] lg:ml-[68px] mx-auto'>
        Purchase Now
      </button>
    </div>
  </div>
  )
}

export default Payment