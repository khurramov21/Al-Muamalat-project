import React from 'react'

const WorkShop = () => {
  return (
    <div className='w-[1440px] h-[550px] flex mt-6 mx-auto items-center justify-center'>
     <div className='w-[1180px] h-[465px] flex'>
     <div className='w-[700px] h-[465px] rounded-tl-[10px] rounded-bl-[10px] bg-[#FAE9D3]'>
        <div className='w-[602px] h-[187px] gap-[20px] flex flex-col justify-center mx-auto mt-[50px]'>
          <h1 className='font-semibold text-[32px] leading-[100%] text-[#D28527]'>Workshops and Spiritual Development</h1>
          <p className='font-sans text-[22px] leading-[100%] text-[#D28527]'>Participate in our weekly workshops focused on Islamic studies and spiritual growth. These sessions are designed to help you strengthen your connection with faith and acquire essential skills for daily life</p>
        </div>
      </div>

      <div className='w-[470px] h-[465px] rounded-tr-[10px] rounded-br-[10px] bg-[#F9F7F3]'>
        <div className='p-[20px] mt-[55px]'>
        <div className='w-[371px] h-[102px] gap-[6px] flex flex-col justify-center mx-auto'>
          <h1 className='font-semibold text-[30px] leading-[100%] text-[#152032]'>Free consultation</h1>
          <p className='font-sans text-[22px] leading-[100%] text-[#152032]'>Leave your phone number, and we will reach out to provide you with complete information about our courses. </p>
        </div>

        <div className='w-[371px] h-[58px] gap-[6px] flex flex-col justify-center mx-auto mt-4'>
          <input className='w-[371px] h-[47px] border-[2px] border-[#68686880] rounded-[7px] p-[20px]' type="text" placeholder='Name' />
        </div>

        <div className='w-[371px] h-[58px] gap-[6px] flex flex-col justify-center mx-auto mt-2'>
          <input className='w-[371px] h-[47px] border-[2px] border-[#68686880] rounded-[7px] p-[20px]' type="text" placeholder='+998' />
        </div>

        <div className='w-[371px] h-[34px] flex mt-2 gap-[10px] mx-auto'>
          <input type="checkbox" />
          <p className='font-sans text-[14px] leading-[100%] text-[#152032]'>I agree to the use of my personal information for consultation purposes.</p>
        </div>

        <div className='w-[371px] h-[47px] flex mt-2 gap-[10px] mx-auto'>
          <button className='w-[371px] h-[47px] bg-[#009688] rounded-[7px] text-[#FFFFFF] font-sans font-semibold text-[15px] leading-[100%] tracking-[0%]'>Submit</button>
        </div>

        </div>
      </div>
     </div>
    </div>
  )
}

export default WorkShop