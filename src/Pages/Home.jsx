import React from 'react';
import headerImg from '../img/header-img.png';
import headerPic from '../img/header-pic.png';
import headerRate from '../img/header-rate.png';
import { MdOutlineCalendarMonth } from "react-icons/md";
import OurServices from '../Components/OurServices';
import OurExpert from '../Components/OurExpert';
import OurSwiper from '../Components/OurSwiper';
import OurMedia from '../Components/OurMedia';
import Students from '../Components/Students';
import Quations from '../Components/Quations';
import WorkShop from '../Components/WorkShop';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div className='mx-auto w-full max-w-[1400px] max-h-[678px] bg-[#009688] relative'>
          <div className="w-full max-w-[1180px] h-full mx-auto relative px-4 sm:px-6 md:px-[50px]">
            <div className="flex flex-col lg:flex-row justify-between w-full">
      
              {/* Stat box */}
              <div className='w-[223px] h-[75px] bg-[#eeeeee] rounded-[20px] flex items-center justify-center gap-[10px] 
                              absolute top-[90px] left-1/2 transform -translate-x-1/2 lg:top-[110px] lg:left-[620px] lg:translate-x-0'>
                <div className='w-[37px] h-[37px] bg-[#23BDEE] rounded-[10px] flex items-center justify-center'>
                  <MdOutlineCalendarMonth />
                </div>
                <div className='flex flex-col justify-center'>
                  <p className='font-sans text-[24px] leading-none text-[#595959]'>250k</p>
                  <p className='font-sans text-[14px] leading-none text-[#545567]'>Assisted Student</p>
                </div>
              </div>
      
              {/* LEFT SIDE: TEXT CONTENT */}
              <div className="flex flex-col max-w-full lg:max-w-[723px] mt-[180px] lg:mt-[140px] px-2 lg:px-0">
      
                {/* Top Badge */}
                <div className="w-full max-w-[421px] h-[41px] rounded-[10px] bg-white flex items-center justify-center mb-[40px] sm:mb-[70px] mx-auto lg:mx-0">
                  <p className="font-sans text-[16px] sm:text-[17px] leading-tight text-[#252641] text-center lg:text-left">
                    Seeking Knowledge is an Obligation in Islam
                  </p>
                </div>
      
                {/* Heading */}
                <div className="h-auto mb-[30px] sm:mb-[50px]">
                  <h1 className="font-semibold text-[30px] sm:text-[42px] lg:text-[58px] leading-snug text-[#FFFFFF] text-center lg:text-left">
                    Enhance Your Understanding of Islamic Ethics with Al-Muamalat
                  </h1>
                </div>
      
                {/* Buttons + Rating */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-[20px] sm:gap-[40px] mt-[10px] relative lg:static">
      
                  {/* Button */}
                  <div className="w-full  max-w-[244px] h-[59px] rounded-[10px] bg-[#FD661F] flex items-center justify-center cursor-pointer hover:bg-[#fa7b49] mx-auto sm:mx-0">
                    <button className="font-sans text-[17px] leading-[100%] text-white">
                      Students’ opinion
                    </button>
                  </div>
      
                  {/* Rating */}
                  <div className="flex items-center gap-[10px] justify-center sm:justify-start sm:absolute sm:left-[280px] mt-2 sm:mt-0">
                    <img src={headerPic} alt="User" className="w-auto h-auto" />
                    <img src={headerRate} alt="Rating" className="w-auto h-auto" />
                  </div>
                </div>
              </div>
      
              {/* RIGHT SIDE: IMAGE */}
              <div className="w-full max-w-[504px] h-auto mt-[50px] lg:mt-[140px] px-2 lg:px-0 ">
                <img src={headerImg} alt="Header visual" className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>
             
            {/* Our services */}
            <OurServices/>
            {/* Our Expert Team */}
            <OurExpert/>
            {/* Our Partners and Clients */}
            <OurSwiper/>
            {/* Our Media */}
            <OurMedia/>
            {/* What students say*/}
            <Students/>
            {/* Frequently asked questions */}
            <Quations/>
            {/* WorkShop */}
            <WorkShop/>
            {/* Footer */}
            <Footer/>
        </div>
      );
      
};

export default Home;
