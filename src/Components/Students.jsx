import React from 'react'
import studentsImg from '../img/studentsImg.png'

const Students = () => {
  return (
    <div className='w-[1440px] h-[728px] gap-[60px] bg-[#FFFFFF]'>
        <div className='w-[574px] h-[128px] gap-[16px] text-center mx-auto mt-[-40px]'>
            <h1 className='font-semibold text-[40px] leading-[100%] text-[#000000]'>What students say</h1>
            <p className='font-semibold text-[17px] leading-[100%] text-[#686868] mt-[20px]'>Our team consists of seasoned professionals with extensive experience in Islamic finance and management. Each member brings a unique set of skills and expertise.</p>
        </div>

        <div className='w-[1178px] h-[330px] mx-auto mt-[60px] gap-[40px] flex'>
          <div className='w-[366px] h-[330px] p-[35px] bg-[#F6F8F9] rounded-[10px]'>
            <p className='font-semibold text-[17px] leading-[26px] text-[#686868]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.</p>
            <div className='w-[296px] h-[58px] gap-[16px] flex mt-5'>
              <img src={studentsImg} alt="students-img" />
             <div className='flex flex-col'>
             <h1 className='font-semibold text-[18px] leading-[26px] text-[#000000]'>Finlay Kirk</h1>
             <p className='font-sans text-[12px] leading-[26px] text-[#686868]'>Web designer</p>
             </div>
            </div>
          </div>

          <div className='w-[366px] h-[330px] p-[35px] bg-[#F6F8F9] rounded-[10px]'>
            <p className='font-semibold text-[17px] leading-[26px] text-[#686868]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.</p>
            <div className='w-[296px] h-[58px] gap-[16px] flex mt-5'>
              <img src={studentsImg} alt="students-img" />
             <div className='flex flex-col'>
             <h1 className='font-semibold text-[18px] leading-[26px] text-[#000000]'>Finlay Kirk</h1>
             <p className='font-sans text-[12px] leading-[26px] text-[#686868]'>Web designer</p>
             </div>
            </div>
          </div>

          <div className='w-[366px] h-[330px] p-[35px] bg-[#F6F8F9] rounded-[10px]'>
            <p className='font-semibold text-[17px] leading-[26px] text-[#686868]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.</p>
            <div className='w-[296px] h-[58px] gap-[16px] flex mt-5'>
              <img src={studentsImg} alt="students-img" />
             <div className='flex flex-col'>
             <h1 className='font-semibold text-[18px] leading-[26px] text-[#000000]'>Finlay Kirk</h1>
             <p className='font-sans text-[12px] leading-[26px] text-[#686868]'>Web designer</p>
             </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Students