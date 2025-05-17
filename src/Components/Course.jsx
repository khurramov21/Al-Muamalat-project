import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import courseImg1 from '../img/course-img1.png'
import courseImg2 from '../img/course-img2.png'
import courseImg3 from '../img/course-img3.png'
import { IoStar } from 'react-icons/io5';
import { IoStarOutline } from 'react-icons/io5';
import { GoArrowUpRight } from 'react-icons/go';
import Footer from './Footer'

const Course = () => {
    const location = useLocation();

    const isProfile = location.pathname === '/profile';
    const isCourse = location.pathname === '/course';

    return (
        <div className='w-[1440px] h-[1709px] mx-auto bg-[#F6F8F9]'>
            <div className='w-[1180px] h-[1409px] mx-auto gap-[28px]'>
                <div className='flex gap-[28px] pt-[140px]'>
                    <Link
                        to='/profile'
                        className={`w-[157px] h-[43px] rounded-[10px] font-sans font-semibold text-[16px] leading-[100%] tracking-[0%] flex items-center justify-center
        ${isProfile ? 'bg-[#009688] text-white' : 'border-[2px] border-[#686868] text-[#686868] bg-white'}`}
                    >
                        Profile
                    </Link>
                    <Link
                        to='/course'
                        className={`w-[157px] h-[43px] rounded-[10px] font-sans font-semibold text-[16px] leading-[100%] tracking-[0%] flex items-center justify-center
        ${isCourse ? 'bg-[#009688] text-white' : 'border-[2px] border-[#686868] text-[#686868] bg-white'}`}
                    >
                        Course
                    </Link>
                </div>

                <div className='w-[1180px] h-[1338px] gap-[42px] mt-[30px]'>
                    <div className='w-full h-[418px] flex gap-[28px] justify-between'>
                        <div className='w-[312px] h-[430px] bg-[#FFFFFF] rounded-[24px] flex justify-center p-[16px]'>
                            <div className='w-full h-full'>
                                <div className='w-[281px] h-[230px] bg-[#FF7F5080] rounded-[24px] p-[10px]'>
                                    <div className='w-[78px] h-[36px] flex items-center justify-center rounded-[6px] bg-[#FFFFFF] opacity-[60%]'>
                                        <p className='font-semibold text-[16px] leading-[100%] text-[#1B1D1F]'>Design</p>
                                    </div>
                                    <img className='w-[189px] h-[180px] object-cover pl-[70px]' src={courseImg1} alt="course-img1" />
                                </div>
                                <p className='mt-[20px] font-semibold text-[16px] leading-[100%] text-[#363A3D] text-center'>Various versions have evolved daf</p>

                                <div className='flex items-center gap-[11px] pl-[10px] mt-[20px]' >
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <p>(20)</p>
                                </div>
                                <div className='w-[272px] border-[1px] border-[#E7E9EB] mt-[20px]'></div>
                                <div className='w-[280px] h-[44px] mt-[20px] flex items-center justify-between p-[8px]'>
                                    <p className='font-semibold text-[24px] leading-[100%] text-[#1B1D1F]'>500$</p>
                                    <button className='w-[44px] h-[44px] bg-[#009688] rounded-[50px] text-[#FFFFFF] font-sans font-semibold text-[16px] leading-[100%] tracking-[0%] flex items-center justify-center'><GoArrowUpRight /></button>
                                </div>
                            </div>
                        </div>

                        <div className='w-[312px] h-[430px] bg-[#FFFFFF] rounded-[24px] flex justify-center p-[16px]'>
                            <div className='w-full h-full'>
                                <div className='w-[281px] h-[230px] bg-[#CCB4FF80] rounded-[24px] p-[10px]'>
                                    <div className='w-[78px] h-[36px] flex items-center justify-center rounded-[6px] bg-[#FFFFFF] opacity-[60%]'>
                                        <p className='font-semibold text-[16px] leading-[100%] text-[#1B1D1F]'>Business</p>
                                    </div>
                                    <img className='w-[205px] h-[160px] object-cover pl-[70px]' src={courseImg2} alt="course-img2" />
                                </div>
                                <p className='mt-[20px] font-semibold text-[16px] leading-[100%] text-[#363A3D] text-center'>Various versions have evolved daf</p>

                                <div className='flex items-center gap-[11px] pl-[10px] mt-[20px]' >
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStarOutline className='text-[#E7E9EB]' />
                                    <p>(102)</p>
                                </div>
                                <div className='w-[272px] border-[1px] border-[#E7E9EB] mt-[20px]'></div>
                                <div className='w-[280px] h-[44px] mt-[20px] flex items-center justify-between p-[8px]'>
                                    <p className='font-semibold text-[24px] leading-[100%] text-[#1B1D1F]'>500$</p>
                                    <button className='w-[44px] h-[44px] bg-[#00968833] rounded-[50px] text-[#009688] font-sans font-semibold text-[16px] leading-[100%] tracking-[0%] flex items-center justify-center'><GoArrowUpRight /></button>
                                </div>
                            </div>
                        </div>

                        <div className='w-[312px] h-[430px] bg-[#FFFFFF] rounded-[24px] flex justify-center p-[16px]'>
                            <div className='w-full h-full'>
                                <div className='w-[281px] h-[230px] bg-[#A9A8F6] rounded-[24px] p-[10px]'>
                                    <div className='w-[78px] h-[36px] flex items-center justify-center rounded-[6px] bg-[#FFFFFF] opacity-[60%]'>
                                        <p className='font-semibold text-[16px] leading-[100%] text-[#1B1D1F]'>Business</p>
                                    </div>
                                    <img className='w-[189px] h-[180px] object-cover pl-[70px]' src={courseImg3} alt="course-img1" />
                                </div>
                                <p className='mt-[20px] font-semibold text-[16px] leading-[100%] text-[#363A3D] text-center'>Various versions have evolved daf</p>

                                <div className='flex items-center gap-[11px] pl-[10px] mt-[20px]' >
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStarOutline className='text-[#E7E9EB]' />
                                    <p>(102)</p>
                                </div>
                                <div className='w-[272px] border-[1px] border-[#E7E9EB] mt-[20px]'></div>
                                <div className='w-[280px] h-[44px] mt-[20px] flex items-center justify-between p-[8px]'>
                                    <p className='font-semibold text-[24px] leading-[100%] text-[#1B1D1F]'>500$</p>
                                    <button className='w-[44px] h-[44px] bg-[#00779633] rounded-[50px] text-[#007796] font-sans font-semibold text-[16px] leading-[100%] tracking-[0%] flex items-center justify-center'><GoArrowUpRight /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-[418px] flex gap-[28px] justify-between mt-[72px]'>
                        <div className='w-[312px] h-[430px] bg-[#FFFFFF] rounded-[24px] flex justify-center p-[16px]'>
                            <div className='w-full h-full'>
                                <div className='w-[281px] h-[230px] bg-[#FF7F5080] rounded-[24px] p-[10px]'>
                                    <div className='w-[78px] h-[36px] flex items-center justify-center rounded-[6px] bg-[#FFFFFF] opacity-[60%]'>
                                        <p className='font-semibold text-[16px] leading-[100%] text-[#1B1D1F]'>Design</p>
                                    </div>
                                    <img className='w-[189px] h-[180px] object-cover pl-[70px]' src={courseImg1} alt="course-img1" />
                                </div>
                                <p className='mt-[20px] font-semibold text-[16px] leading-[100%] text-[#363A3D] text-center'>Various versions have evolved daf</p>

                                <div className='flex items-center gap-[11px] pl-[10px] mt-[20px]' >
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <p>(20)</p>
                                </div>
                                <div className='w-[272px] border-[1px] border-[#E7E9EB] mt-[20px]'></div>
                                <div className='w-[280px] h-[44px] mt-[20px] flex items-center justify-between p-[8px]'>
                                    <p className='font-semibold text-[24px] leading-[100%] text-[#1B1D1F]'>500$</p>
                                    <button className='w-[44px] h-[44px] bg-[#009688] rounded-[50px] text-[#FFFFFF] font-sans font-semibold text-[16px] leading-[100%] tracking-[0%] flex items-center justify-center'><GoArrowUpRight /></button>
                                </div>
                            </div>
                        </div>

                        <div className='w-[312px] h-[430px] bg-[#FFFFFF] rounded-[24px] flex justify-center p-[16px]'>
                            <div className='w-full h-full'>
                                <div className='w-[281px] h-[230px] bg-[#CCB4FF80] rounded-[24px] p-[10px]'>
                                    <div className='w-[78px] h-[36px] flex items-center justify-center rounded-[6px] bg-[#FFFFFF] opacity-[60%]'>
                                        <p className='font-semibold text-[16px] leading-[100%] text-[#1B1D1F]'>Business</p>
                                    </div>
                                    <img className='w-[205px] h-[160px] object-cover pl-[70px]' src={courseImg2} alt="course-img2" />
                                </div>
                                <p className='mt-[20px] font-semibold text-[16px] leading-[100%] text-[#363A3D] text-center'>Various versions have evolved daf</p>

                                <div className='flex items-center gap-[11px] pl-[10px] mt-[20px]' >
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStarOutline className='text-[#E7E9EB]' />
                                    <p>(102)</p>
                                </div>
                                <div className='w-[272px] border-[1px] border-[#E7E9EB] mt-[20px]'></div>
                                <div className='w-[280px] h-[44px] mt-[20px] flex items-center justify-between p-[8px]'>
                                    <p className='font-semibold text-[24px] leading-[100%] text-[#1B1D1F]'>500$</p>
                                    <button className='w-[44px] h-[44px] bg-[#00968833] rounded-[50px] text-[#009688] font-sans font-semibold text-[16px] leading-[100%] tracking-[0%] flex items-center justify-center'><GoArrowUpRight /></button>
                                </div>
                            </div>
                        </div>

                        <div className='w-[312px] h-[430px] bg-[#FFFFFF] rounded-[24px] flex justify-center p-[16px]'>
                            <div className='w-full h-full'>
                                <div className='w-[281px] h-[230px] bg-[#A9A8F6] rounded-[24px] p-[10px]'>
                                    <div className='w-[78px] h-[36px] flex items-center justify-center rounded-[6px] bg-[#FFFFFF] opacity-[60%]'>
                                        <p className='font-semibold text-[16px] leading-[100%] text-[#1B1D1F]'>Business</p>
                                    </div>
                                    <img className='w-[189px] h-[180px] object-cover pl-[70px]' src={courseImg3} alt="course-img1" />
                                </div>
                                <p className='mt-[20px] font-semibold text-[16px] leading-[100%] text-[#363A3D] text-center'>Various versions have evolved daf</p>

                                <div className='flex items-center gap-[11px] pl-[10px] mt-[20px]' >
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStarOutline className='text-[#E7E9EB]' />
                                    <p>(102)</p>
                                </div>
                                <div className='w-[272px] border-[1px] border-[#E7E9EB] mt-[20px]'></div>
                                <div className='w-[280px] h-[44px] mt-[20px] flex items-center justify-between p-[8px]'>
                                    <p className='font-semibold text-[24px] leading-[100%] text-[#1B1D1F]'>500$</p>
                                    <button className='w-[44px] h-[44px] bg-[#00779633] rounded-[50px] text-[#007796] font-sans font-semibold text-[16px] leading-[100%] tracking-[0%] flex items-center justify-center'><GoArrowUpRight /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-[418px] flex gap-[28px] justify-between mt-[72px]'>
                        <div className='w-[312px] h-[430px] bg-[#FFFFFF] rounded-[24px] flex justify-center p-[16px]'>
                            <div className='w-full h-full'>
                                <div className='w-[281px] h-[230px] bg-[#FF7F5080] rounded-[24px] p-[10px]'>
                                    <div className='w-[78px] h-[36px] flex items-center justify-center rounded-[6px] bg-[#FFFFFF] opacity-[60%]'>
                                        <p className='font-semibold text-[16px] leading-[100%] text-[#1B1D1F]'>Design</p>
                                    </div>
                                    <img className='w-[189px] h-[180px] object-cover pl-[70px]' src={courseImg1} alt="course-img1" />
                                </div>
                                <p className='mt-[20px] font-semibold text-[16px] leading-[100%] text-[#363A3D] text-center'>Various versions have evolved daf</p>

                                <div className='flex items-center gap-[11px] pl-[10px] mt-[20px]' >
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <p>(20)</p>
                                </div>
                                <div className='w-[272px] border-[1px] border-[#E7E9EB] mt-[20px]'></div>
                                <div className='w-[280px] h-[44px] mt-[20px] flex items-center justify-between p-[8px]'>
                                    <p className='font-semibold text-[24px] leading-[100%] text-[#1B1D1F]'>500$</p>
                                    <button className='w-[44px] h-[44px] bg-[#009688] rounded-[50px] text-[#FFFFFF] font-sans font-semibold text-[16px] leading-[100%] tracking-[0%] flex items-center justify-center'><GoArrowUpRight /></button>
                                </div>
                            </div>
                        </div>

                        <div className='w-[312px] h-[430px] bg-[#FFFFFF] rounded-[24px] flex justify-center p-[16px]'>
                            <div className='w-full h-full'>
                                <div className='w-[281px] h-[230px] bg-[#CCB4FF80] rounded-[24px] p-[10px]'>
                                    <div className='w-[78px] h-[36px] flex items-center justify-center rounded-[6px] bg-[#FFFFFF] opacity-[60%]'>
                                        <p className='font-semibold text-[16px] leading-[100%] text-[#1B1D1F]'>Business</p>
                                    </div>
                                    <img className='w-[205px] h-[160px] object-cover pl-[70px]' src={courseImg2} alt="course-img2" />
                                </div>
                                <p className='mt-[20px] font-semibold text-[16px] leading-[100%] text-[#363A3D] text-center'>Various versions have evolved daf</p>

                                <div className='flex items-center gap-[11px] pl-[10px] mt-[20px]' >
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStarOutline className='text-[#E7E9EB]' />
                                    <p>(102)</p>
                                </div>
                                <div className='w-[272px] border-[1px] border-[#E7E9EB] mt-[20px]'></div>
                                <div className='w-[280px] h-[44px] mt-[20px] flex items-center justify-between p-[8px]'>
                                    <p className='font-semibold text-[24px] leading-[100%] text-[#1B1D1F]'>500$</p>
                                    <button className='w-[44px] h-[44px] bg-[#00968833] rounded-[50px] text-[#009688] font-sans font-semibold text-[16px] leading-[100%] tracking-[0%] flex items-center justify-center'><GoArrowUpRight /></button>
                                </div>
                            </div>
                        </div>

                        <div className='w-[312px] h-[430px] bg-[#FFFFFF] rounded-[24px] flex justify-center p-[16px]'>
                            <div className='w-full h-full'>
                                <div className='w-[281px] h-[230px] bg-[#A9A8F6] rounded-[24px] p-[10px]'>
                                    <div className='w-[78px] h-[36px] flex items-center justify-center rounded-[6px] bg-[#FFFFFF] opacity-[60%]'>
                                        <p className='font-semibold text-[16px] leading-[100%] text-[#1B1D1F]'>Business</p>
                                    </div>
                                    <img className='w-[189px] h-[180px] object-cover pl-[70px]' src={courseImg3} alt="course-img1" />
                                </div>
                                <p className='mt-[20px] font-semibold text-[16px] leading-[100%] text-[#363A3D] text-center'>Various versions have evolved daf</p>

                                <div className='flex items-center gap-[11px] pl-[10px] mt-[20px]' >
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStar className='text-[#FFC27A]'/>
                                    <IoStarOutline className='text-[#E7E9EB]' />
                                    <p>(102)</p>
                                </div>
                                <div className='w-[272px] border-[1px] border-[#E7E9EB] mt-[20px]'></div>
                                <div className='w-[280px] h-[44px] mt-[20px] flex items-center justify-between p-[8px]'>
                                    <p className='font-semibold text-[24px] leading-[100%] text-[#1B1D1F]'>500$</p>
                                    <button className='w-[44px] h-[44px] bg-[#00779633] rounded-[50px] text-[#007796] font-sans font-semibold text-[16px] leading-[100%] tracking-[0%] flex items-center justify-center'><GoArrowUpRight /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Footer */}
           <div className='mt-[280px]'>
           <Footer />
           </div>
        </div>
    )
}

export default Course