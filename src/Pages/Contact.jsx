import React from 'react'
import WorkShop from '../Components/WorkShop'
import Footer from '../Components/Footer'

const Contact = () => {
    return (
        <div className='w-[1440px] h-[705px] mx-auto mt-6'>
            <div className='max-w-[1180px] mx-auto h-auto pt-[70px] flex gap-[77px]'>
                <div className='w-[538px] h-[507px]'>
                    <h1 className='text-[64px]  text-[#000000]'>Let’s Talk</h1>
                    <p className='text-[20px] text-[#686868]'>Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help</p>

                    <div className='w-[133px] h-[76px] gap-[20px] pt-[54px]'>
                        <h1 className='font-sans text-[32px] text-[#000000]'>Email</h1>
                        <p className='text-[16px] text-[#686868]'>beebs@gmail.com</p>
                    </div>

                    <div className='w-[104px] h-[155px] gap-[20px] pt-[94px]'>
                        <h1 className='font-sans text-[32px] text-[#000000]'>Socials</h1>
                        <div className='flex flex-col gap-[20px]'>
                            <a href='https://www.instagram.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-[16px] text-[#686868] underline'
                            >
                                Instagram
                            </a>
                            <a
                                href='https://www.twitter.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-[16px] text-[#686868] underline'
                            >
                                Twitter
                            </a>
                            <a
                                href='https://www.facebook.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-[16px] text-[#686868] underline'
                            >
                                Facebook
                            </a>
                        </div>

                    </div>
                </div>

                <div className='w-[565px] h-[705px] gap-[28px]'>
                    <div className='flex flex-col gap-[10px]'>
                        <p className='text-[14px] text-[#000000]'>Name</p>
                        <input type="text" className='w-[565px] h-[46px] bg-[#F7F7F7] rounded-[7px] pt-[16px]' />
                    </div>

                    <div className='flex flex-col gap-[10px] pt-[20px]'>
                        <p className='text-[14px] text-[#000000]'>Email</p>
                        <input type="text" className='w-[565px] h-[46px] bg-[#F7F7F7] rounded-[7px]' />
                    </div>

                    <div className='flex flex-col gap-[10px] pt-[20px]'>
                        <p className='text-[14px] text-[#000000]'>What service are you interested in</p>
                        <select className='w-[565px] h-[46px] bg-[#F7F7F7] rounded-[7px] p-[12px] text-[#6B7280]'>
                            <option value="" disabled selected>Select project type</option>
                            <option value="web">Web Development</option>
                            <option value="mobile">Mobile App Development</option>
                            <option value="design">UI/UX Design</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-[10px] pt-[20px]'>
                        <p className='text-[14px] text-[#000000]'>Budget</p>
                        <select className='w-[565px] h-[46px] bg-[#F7F7F7] rounded-[7px] p-[12px] text-[#6B7280]'>
                            <option value="" disabled selected>Select project budget</option>
                            <option value="1000">$1,000 - $5,000</option>
                            <option value="5000">$5,000 - $10,000</option>
                            <option value="10000">$10,000+</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-[10px] pt-[20px]'>
                        <p className='text-[14px] text-[#000000]'>Message</p>
                        <textarea className='w-[565px] h-[165px] bg-[#F7F7F7] rounded-[7px] p-[16px] text-[#000] resize-none' placeholder="Type your message here..." />
                    </div>

                    <button className='w-[565px] h-[46px] bg-[#009688] rounded-[7px] text-[#FFFFFF] font-sans font-semibold text-[15px] leading-[100%] tracking-[0%] mt-[20px]'>Submit</button>
                </div>


            </div>

            <WorkShop />
            <Footer />
        </div>

    )
}

export default Contact