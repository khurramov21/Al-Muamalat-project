import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import ourMedia1 from '../img/ourMedia1.png'
import ourMedia2 from '../img/ourMedia2.png'
import ourMedia3 from '../img/ourMedia3.png'
import { PiPlay } from 'react-icons/pi'

const OurMedia = () => {
  const allCards = [
    {
      title: 'Why Islamic finance?',
      image: ourMedia1
    },
    {
      title: 'What makes Islamic banking unique?',
      image: ourMedia2
    },
    {
      title: 'How is risk managed in Islamic banking?',
      image: ourMedia3
    },
    {
      title: 'Understanding profit-sharing in Islamic',
      image: ourMedia2
    },
    {
      title: 'Shariah-compliance in modern banking',
      image: ourMedia1
    },
    {
      title: 'The global growth of Islamic finance',
      image: ourMedia3
    }
  ]

  const [startIndex, setStartIndex] = useState(0)
  const visibleCards = allCards.slice(startIndex, startIndex + 3)

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
    }
  }

  const handleNext = () => {
    if (startIndex < allCards.length - 3) {
      setStartIndex(startIndex + 1)
    }
  }

  return (
    <div className='w-[1400px] h-[920px] mt-[1370px] gap-[60px] bg-[#FFFFFF]'>
      <div className='w-[574px] h-[128px] gap-[20px] text-center mx-auto'>
        <h1 className='font-semibold text-[40px] leading-[100%] text-[#000000]'>Our Media</h1>
        <p className='font-semibold text-[17px] leading-[100%] text-[#686868] mt-[20px]'>Our team consists of seasoned professionals with extensive experience in Islamic finance and management. Each member brings a unique set of skills and expertise.</p>
      </div>

      <div className='w-[1160px] h-[602px] gap-[15px] mx-auto'>
        <div className='w-[1160px] h-[71px] flex justify-between items-center mt-11 mx-auto'>
          <h1 className='font-semibold text-[35px] leading-[100%] text-[#000000]'>
            Our media showcase
          </h1>
          <div className='flex gap-[23px] w-[123px] h-[50px]'>
            <button onClick={handlePrev} className='w-[50px] h-[50px] bg-[#ECF3F6] rounded-[50px] text-center cursor-pointer p-[18px]'><FaArrowLeft /></button>
            <button onClick={handleNext} className='w-[50px] h-[50px] bg-[#009688] rounded-[50px] text-center cursor-pointer p-[18px]'><FaArrowRight className='text-[#FFFFFF]' /></button>
          </div>
        </div>

        <div className='w-[1160px] h-[516px] mx-auto justify-between flex'>
          {visibleCards.map((card, index) => (
            <div key={index} className='w-[380px] h-[516px] rounded-[10px] bg-[#D9D9D9] relative overflow-hidden'>
              <img src={card.image} alt="" className='absolute top-0 left-0 w-full h-full object-cover z-0' />
              <div className='absolute w-[350px] h-[48px] flex justify-between text-[#FFFFFF] p-[30px] z-10 mt-[400px]'>
                <h1 className='text-[20px] font-semibold'>{card.title}</h1>
                <button className='text-[40px] w-[60px] h-[60px] rounded-[50px] bg-[#2198FF] p-[10px] transform transition duration-200 hover:scale-110 active:scale-95'>
                  <PiPlay />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurMedia
