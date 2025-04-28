import React from 'react';
import headerImg from '../img/header-img.png';
import headerPic from '../img/header-pic.png';
import headerRate from '../img/header-rate.png';
import { MdOutlineCalendarMonth } from "react-icons/md";

const Home = () => {
    return (
        <div className='mx-auto w-full max-w-[1320px] h-[678px] bg-[#009688] relative'>
            {/* Header container */}
            <div className='flex justify-between items-start w-full h-full relative'>

                {/* Left side content */}
                <div className='flex flex-col justify-start w-[723px] h-[390px] pl-[130px] pt-[100px]'>
                    <p className='w-[421px] h-[41px] pt-[10px] pr-[25px] pb-[10px] pl-[35px] rounded-[10px] bg-[#FFFFFF] font-sans font-semibold text-[17px] leading-[100%] tracking-[2%] mt-[20px]'>
                        Seeking Knowledge is an Obligation in Islam
                    </p>
                    <h1 className='w-[723px] h-[210px] mt-[40px] font-sans font-semibold text-[58px] leading-[70px] tracking-[0%] text-[#FFFFFF]'>
                        Enhance Your Understanding of Islamic Ethics with Al-Muamalat
                    </h1>

                    <div className='header-button flex mt-[40px]'>
                        <button className='w-[244px] h-[59px] bg-[#FD661F] rounded-[10px] text-[#FFFFFF] font-sans font-semibold text-[16px] leading-[100%] tracking-[2%] cursor-pointer uppercase mt-[15px]'>
                            Students’ Opinion
                        </button>
                        <div className='flex absolute mt-[15px] top-[450px] left-[350px]'>
                            <img src={headerPic} alt="header-pic" className="mr-2" />
                            <img src={headerRate} alt="header-rate" />
                        </div>
                    </div>
                </div>

                {/* Right side image */}
                <div className='w-[504px] h-[572px] absolute top-[80px] right-[70px]'>
                    <img className='object-cover w-full h-full opacity-90' src={headerImg} alt="header-img" />
                </div>
            </div>

            {/* Floating info box */}
            <div className='absolute w-[227px] h-[75px] top-[70px] left-[700px] rounded-[20px] bg-[#FFFFFFCC] backdrop-blur-[20px] flex items-center px-[20px]'>
                <div className='w-[37px] h-[37px] rounded-[8px] bg-[#23BDEE] flex items-center justify-center text-[#FFFFFF]'>
                    <MdOutlineCalendarMonth />
                </div>
                <div className='ml-[20px]'>
                    <h1 className='text-[#595959] font-semibold'>250k</h1>
                    <p className='text-[#545567] font-semibold text-[14px] leading-[1.4] tracking-[2%]'>Assisted Student</p>
                </div>
            </div>

            <div className='absolute w-[574px] h-[131px] left-[433px] mt-[70px]'>
                <h1 className='absolute w-[574px] h-[49px] font-semibold text-[40px] leading-[100%] tracking-[0%] text-[#000000] ml-[100px]'>Our services </h1>
                <p className='absolute w-[574px] h-[72px] font-semibold text-[20px] leading-[100%] tracking-[0%] text-[#686868] mt-[50px] text-center ml-[-80px]'>Expert guidance for managing funds in alignment with Islamic principles, helping you make informed, halal investment decisions.</p>
            </div>

        </div>
    );
}; 

export default Home;
