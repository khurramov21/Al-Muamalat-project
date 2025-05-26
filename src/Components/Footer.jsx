import React from 'react'
import FooterLogo from '../img/footer-logo.png'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full h-[390px] bg-[#009688]'>
            <div className='w-full max-w-[1180px] h-[314px] mx-auto'>
                {/* Logo Section */}
                <div className='w-[140px] h-[76px] flex gap-[10px] items-center mx-auto pt-[50px] sm:pt-[60px] max-md:pt-[104px]'>
                    <img src={FooterLogo} alt="Footer Logo" />
                    <h1 className='font-semibold text-[24px] leading-[100%] text-[#FFFFFF]'>Dior design</h1>
                </div>

                {/* Navigation Links */}
                <div className='w-full max-w-[400px] h-[24px] mx-auto'>
                    <ul className='flex gap-[30px] sm:gap-[50px] font-sans text-[16px] leading-[100%] text-[#FFFFFF] pt-[40px] sm:pt-[80px] justify-center max-md:pt-[64px]'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact US</li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div className='w-full max-w-[400px] h-[24px] mx-auto pt-[40px] sm:pt-[120px] max-md:pt-[104px]'>
                    <ul className='flex justify-center gap-[30px] sm:gap-[50px] font-semibold text-[20px] leading-[100%] text-[#FFFFFF] cursor-pointer '>
                        <li>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <FaYoutube />
                            </a>
                        </li>
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Horizontal Divider */}
                <div className='w-full max-w-[1180px] mx-auto mt-[40px] sm:mt-[66px] border-t-[1px] border-[#FFFFFF] max-md:mt-[66px]'></div>

                {/* Copyright Section */}
                <div className='w-full max-w-[1180px] mx-auto pt-[16px] sm:pt-[24px] text-center max-md:pt-[34px]'>
                    <p className='font-sans text-[16px] leading-[100%] text-[#FFFFFF]'>Copyright Satyam Studio</p>
                </div>

            </div>
        </div>
    )
}

export default Footer
