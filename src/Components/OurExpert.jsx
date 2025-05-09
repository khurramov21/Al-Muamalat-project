import React from 'react'
import Slider from "react-slick";
import man from '../img/man.png';

// Slider
import { LiaTelegramPlane } from 'react-icons/lia';
import { FaInstagram } from 'react-icons/fa';
import { SlSocialFacebook } from 'react-icons/sl';
import { CiTwitter } from 'react-icons/ci';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const teamMembers = [
    {
        name: "Dr. Mezbah Uddin Ahmed",
        image: man,
        description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    },
    {
        name: "Fatima Zahra",
        image: man,
        description:
            "Fatima specializes in Shariah-compliant auditing and ethical Islamic portfolio management. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    },
    {
        name: "Sheikh Abdullah",
        image: man,
        description:
            "Over 15 years of experience guiding Islamic banks through Shariah compliance and advisory roles. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    },
];

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
};

const OurExpert = () => {
    return (
          <div className='w-full lg:w-[1400px] h-auto lg:absolute lg:top-[1853px] pt-[70px] pb-[70px] px-[20px]'>
            <div className='w-full text-center mb-[40px]'>
              <h2 className='font-semibold text-[28px] lg:text-[40px] text-[#000000]'>Our Expert Team</h2>
              <p className='font-semibold text-[15px] lg:text-[17px] text-[#686868] w-full lg:w-[60%] mx-auto'>
                Our team consists of seasoned professionals with extensive experience in Islamic finance and management. Each member brings a unique set of skills and expertise.
              </p>
            </div>
      
            <div className='w-full lg:w-[980px] mx-auto'>
              <Slider {...sliderSettings}>
                {teamMembers.map((member, idx) => (
                  <div key={idx}>
                    <div className='flex flex-col lg:flex-row w-full lg:w-[980px] h-auto lg:h-[445px] rounded-[10px] bg-[#D2E6E4] mx-auto'>
                      
                      {/* Image */}
                      <div className='w-full lg:w-[285px] h-[300px] lg:h-[375px] pt-[20px] lg:pt-[35px] pl-0 lg:pl-[50px] flex justify-center'>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="rounded-[10px] object-cover h-full"
                        />
                      </div>
      
                      {/* Text content */}
                      <div className='w-full lg:w-[514px] gap-[20px] flex flex-col items-center lg:items-start pt-[30px] lg:pt-[70px] px-[20px] py-[20px] lg:pl-[80px] text-center lg:text-left'>
                        <h1 className='font-semibold text-[22px] lg:text-[28px] text-[#141B34] '>{member.name}</h1>
                        <p className='text-[15px] lg:text-[17px] text-[#141B34] leading-[24px] lg:leading-[30px]'>
                          {member.description}
                        </p>
                        <div className='flex w-[198px] h-[24px] justify-between cursor-pointer text-[20px]'>
                          <a href="https://www.telegram.org/" target="_blank" rel="noopener noreferrer">
                            <LiaTelegramPlane />
                          </a>
                          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                          </a>
                          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <SlSocialFacebook />
                          </a>
                          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <CiTwitter />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
      );
      
}

export default OurExpert