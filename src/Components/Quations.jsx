import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Quations = () => {
    return (
        <div className='w-[1320px] h-[624px] gap-[60px] bg-[#FFFFFF]'>
            <div className='w-[574px] h-[93px] gap-[16px] mx-auto mt-[-40px] text-center'>
                <h1 className='font-semibold text-[40px] leading-[100%] text-[#000000]'>Frequently asked questions</h1>
                <p className='font-sans text-[20px] leading-[100%] text-[#686868] mt-[16px]'>If you have any further questions, please contact us</p>
            </div>

            <div className='w-[1180px] h-[331px] gap-[20px] mx-auto mt-[60px] flex'>
                <div className='w-[580px] h-[326px] gap-[20px]'>
                    <div className='w-[580px] h-[97px] border-[2px] border-[#686868] rounded-[10px] flex justify-between px-[20px] py-[35px] '>
                        <p className='font-semibold text-[22px] leading-[100%] text-[#000000]'>Will I receive lifetime access to the courses?</p>
                        <p className='text-[#686868] mt-1'><FaPlus /></p>
                    </div>

                    <div className='w-[580px] h-[209px] border-[2px] border-[#42978F] rounded-[10px] mt-6'>
                        <div className='flex justify-between px-[20px] py-[35px]'>
                            <p className='font-semibold text-[22px] leading-[30px] text-[#000000]'>Will I receive lifetime access to the courses?</p>
                            <p className='text-[#686868] mt-1'><FaPlus /></p>
                        </div>
                        <p className='font-sans text-[20px] leading-[100%] text-[#000000] px-[20px]'>"Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively."</p>
                    </div>
                </div>

                <div className='w-[580px] h-[326px] gap-[20px] flex flex-col'>
                    <div className='w-[580px] h-[97px] border-[2px] border-[#686868] rounded-[10px] flex justify-between px-[20px] py-[35px] '>
                        <p className='font-semibold text-[22px] leading-[100%] text-[#000000]'>Can I use the materials for community teaching?</p>
                        <p className='text-[#686868] mt-1'><FaPlus /></p>
                    </div>

                    <div className='w-[580px] h-[97px] border-[2px] border-[#686868] rounded-[10px] flex justify-between px-[20px] py-[35px] '>
                        <p className='font-semibold text-[22px] leading-[100%] text-[#000000]'>Is there a free trial for the courses?</p>
                        <p className='text-[#686868] mt-1'><FaPlus /></p>
                    </div>

                    <div className='w-[580px] h-[97px] border-[2px] border-[#686868] rounded-[10px] flex justify-between px-[20px] py-[35px] '>
                        <p className='font-semibold text-[22px] leading-[100%] text-[#000000]'>Who can benefit from these courses?</p>
                        <p className='text-[#686868] mt-1'><FaPlus /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quations