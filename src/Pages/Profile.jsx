import React from 'react'
import ProfileImg from '../img/profile-img.png'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

const Profile = () => {
    return (
        <div className='w-[1440px] h-auto mx-auto'>
            <div className='w-[1180px] h-[531px] mx-auto gap-[28px]'>
                <div className='flex gap-[28px] pt-[140px]'>
                    <button className='w-[157px] h-[43px] bg-[#009688] rounded-[10px] text-[#FFFFFF] font-sans font-semibold text-[16px] leading-[100%] tracking-[0%]'>Profile</button>
                    <Link to='/course' className='w-[157px] h-[43px] border-[2px] border-[#686868] bg-[#FFFFFF] rounded-[10px] text-[#686868] font-sans font-semibold text-[16px] leading-[100%] tracking-[0%] flex items-center justify-center'>Course</Link>
                </div>

                <div className='w-[1180px] h-[460px] rounded-[10px] bg-white shadow-[2px_2px_40px_1px_#0000001A] mt-[28px] p-[30px]'>
                    <div className='w-full flex justify-between mt-[25px]'>
                        <div className='w-[335px] h-[80px] gap-[24px] flex items-center'>
                            <img src={ProfileImg} alt="profile-img" />
                            <h1 className='font-semibold text-[32px] leading-[100%] text-[#000000]'>Alexa Rawles</h1>
                        </div>
                        <div className='items-center'>
                            <button className='w-[93px] h-[44px] bg-[#009688] rounded-[8px] text-[#FFFFFF] font-sans font-semibold text-[16px] leading-[100%] tracking-[0%] mt-[25px]'>Save</button>
                        </div>
                    </div>

                    <div className='w-full flex justify-between mt-[40px]'>
                        <div className='flex flex-col gap-[10px]'>
                            <p className='text-[14px] text-[#000000]'> First Name</p>
                            <input type="text" className='w-[537px] h-[46px] bg-[#F7F7F7] rounded-[7px] pt-[16px] p-[20px]' placeholder='Your First Name' />
                        </div>

                        <div className='flex flex-col gap-[10px]'>
                            <p className='text-[14px] text-[#000000]'> Last Name</p>
                            <input type="text" className='w-[537px] h-[46px] bg-[#F7F7F7] rounded-[7px] pt-[16px] p-[20px]' placeholder='Your Last Name' />
                        </div>
                    </div>

                    <div className='w-full flex justify-between mt-[40px]'>
                        <div className='flex flex-col gap-[10px]'>
                            <p className='text-[14px] text-[#000000]'>Address</p>
                            <input type="text" className='w-[537px] h-[46px] bg-[#F7F7F7] rounded-[7px] pt-[16px] p-[20px]' placeholder='Enter Your Address' />
                        </div>

                        <div className='flex flex-col gap-[10px]'>
                            <p className='text-[14px] text-[#000000]'>Birthday</p>
                            <input type="text" className='w-[537px] h-[46px] bg-[#F7F7F7] rounded-[7px] pt-[16px] p-[20px]' placeholder='Enter Your Birthday' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className='mt-[220px]'>
                <Footer />
            </div>
        </div>
    )
}

export default Profile