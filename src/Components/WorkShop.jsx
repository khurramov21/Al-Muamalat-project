import React from 'react'

const WorkShop = () => {
  return (
    <div className='w-full max-w-[1440px] h-auto mt-6 mx-auto px-4'>
      <div className='w-full max-w-[1180px] h-auto flex flex-col lg:flex-row mx-auto'>
        {/* Left box */}
        <div className='w-full lg:w-[700px] h-auto lg:h-[465px] rounded-t-[10px] lg:rounded-tl-[10px] lg:rounded-bl-[10px] bg-[#FAE9D3] flex items-center'>
          <div className='w-full max-w-[602px] mx-auto mt-[40px] lg:mt-[50px] px-2 flex flex-col gap-[20px]'>
            <h1 className='font-semibold text-[24px] sm:text-[28px] lg:text-[32px] leading-[120%] text-[#D28527] text-center lg:text-left'>
              Workshops and Spiritual Development
            </h1>
            <p className='font-sans text-[18px] sm:text-[20px] lg:text-[22px] leading-[130%] text-[#D28527] text-center lg:text-left'>
              Participate in our weekly workshops focused on Islamic studies and spiritual growth. These sessions are designed to help you strengthen your connection with faith and acquire essential skills for daily life
            </p>
          </div>
        </div>

        {/* Right box */}
        <div className='w-full lg:w-[470px] h-auto lg:h-[465px] rounded-b-[10px] lg:rounded-tr-[10px] lg:rounded-br-[10px] bg-[#F9F7F3]'>
          <div className='p-[20px] mt-[30px] lg:mt-[55px] flex flex-col items-center'>
            <div className='w-full max-w-[371px] h-auto gap-[6px] flex flex-col'>
              <h1 className='font-semibold text-[24px] sm:text-[26px] lg:text-[30px] leading-[120%] text-[#152032] text-center lg:text-left'>
                Free consultation
              </h1>
              <p className='font-sans text-[18px] sm:text-[20px] lg:text-[22px] leading-[130%] text-[#152032] text-center lg:text-left'>
                Leave your phone number, and we will reach out to provide you with complete information about our courses.
              </p>
            </div>

            <div className='w-full max-w-[371px] mt-4'>
              <input
                className='w-full h-[47px] border-[2px] border-[#68686880] rounded-[7px] p-[12px]'
                type="text"
                placeholder='Name'
              />
            </div>

            <div className='w-full max-w-[371px] mt-2'>
              <input
                className='w-full h-[47px] border-[2px] border-[#68686880] rounded-[7px] p-[12px]'
                type="text"
                placeholder='+998'
              />
            </div>

            <div className='w-full max-w-[371px] mt-2 flex gap-[10px] items-start'>
              <input type="checkbox" className='mt-1' />
              <p className='font-sans text-[14px] text-[#152032]'>
                I agree to the use of my personal information for consultation purposes.
              </p>
            </div>

            <div className='w-full max-w-[371px] mt-2'>
              <button className='w-full h-[47px] bg-[#009688] rounded-[7px] text-[#FFFFFF] font-sans font-semibold text-[15px]'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkShop
