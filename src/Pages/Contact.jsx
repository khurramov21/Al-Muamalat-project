import React from 'react'
import WorkShop from '../Components/WorkShop'
import Footer from '../Components/Footer'

const Contact = () => {
  return (
   <>
    <div className='w-full max-w-[1440px] mx-auto mt-6 px-4 sm:px-6 md:px-8'>
      <div className='max-w-[1180px] mx-auto h-auto pt-[70px] flex flex-col lg:flex-row gap-[40px] lg:gap-[77px]'>
        {/* Left Column */}
        <div className='w-full lg:w-[538px] h-auto lg:h-[507px]'>
          <h1 className='text-[40px] sm:text-[48px] lg:text-[64px] text-[#000000]'>Let’s Talk</h1>
          <p className='text-[16px] sm:text-[18px] lg:text-[20px] text-[#686868] mt-2'>
            Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help
          </p>

          <div className='mt-[40px]'>
            <h1 className='font-sans text-[24px] sm:text-[28px] lg:text-[32px] text-[#000000]'>Email</h1>
            <p className='text-[16px] text-[#686868] mt-1'>beebs@gmail.com</p>
          </div>

          <div className='mt-[40px]'>
            <h1 className='font-sans text-[24px] sm:text-[28px] lg:text-[32px] text-[#000000]'>Socials</h1>
            <div className='flex flex-col gap-[12px] mt-[10px]'>
              <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='text-[16px] text-[#686868] underline'>
                Instagram
              </a>
              <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer' className='text-[16px] text-[#686868] underline'>
                Twitter
              </a>
              <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='text-[16px] text-[#686868] underline'>
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className='w-full lg:w-[565px] h-auto lg:h-[705px] flex flex-col gap-[20px]'>
          <div className='flex flex-col gap-[10px]'>
            <p className='text-[14px] text-[#000000]'>Name</p>
            <input type="text" className='w-full lg:w-[565px] h-[46px] bg-[#F7F7F7] rounded-[7px] pt-[16px] p-3' />
          </div>

          <div className='flex flex-col gap-[10px]'>
            <p className='text-[14px] text-[#000000]'>Email</p>
            <input type="text" className='w-full lg:w-[565px] h-[46px] bg-[#F7F7F7] rounded-[7px] p-3' />
          </div>

          <div className='flex flex-col gap-[10px]'>
            <p className='text-[14px] text-[#000000]'>What service are you interested in</p>
            <select className='w-full lg:w-[565px] h-[46px] bg-[#F7F7F7] rounded-[7px] p-[12px] text-[#6B7280]'>
              <option value="" disabled selected>Select project type</option>
              <option value="web">Web Development</option>
              <option value="mobile">Mobile App Development</option>
              <option value="design">UI/UX Design</option>
            </select>
          </div>

          <div className='flex flex-col gap-[10px]'>
            <p className='text-[14px] text-[#000000]'>Budget</p>
            <select className='w-full lg:w-[565px] h-[46px] bg-[#F7F7F7] rounded-[7px] p-[12px] text-[#6B7280]'>
              <option value="" disabled selected>Select project budget</option>
              <option value="1000">$1,000 - $5,000</option>
              <option value="5000">$5,000 - $10,000</option>
              <option value="10000">$10,000+</option>
            </select>
          </div>

          <div className='flex flex-col gap-[10px]'>
            <p className='text-[14px] text-[#000000]'>Message</p>
            <textarea
              className='w-full lg:w-[565px] h-[165px] bg-[#F7F7F7] rounded-[7px] p-[16px] text-[#000] resize-none'
              placeholder="Type your message here..."
            />
          </div>

          <button className='w-full lg:w-[565px] h-[46px] bg-[#009688] rounded-[7px] text-[#FFFFFF] font-sans font-semibold text-[15px] mt-[10px]'>
            Submit
          </button>
        </div>
      </div>
    </div>

    <div className='w-full max-w-[1440px] mx-auto sm:mt-[100px] lg:mt-[150px]'>
        <WorkShop />
      </div>

      <div className='w-full max-w-[1440px] mx-auto sm:mt-[100px] lg:mt-[150px]'>
        <Footer />
      </div>
   </>
  )
}

export default Contact
