import React from 'react'
import FooterLogo from '../img/footer-logo.png'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-[1320px] h-[390px] bg-[#009688]'>
            <div className='w-[1180px] h-[314px] mx-auto'>
                <div className='w-[140px] h-[76px] flex gap-[10px] items-center mx-auto pt-[100px]'>
                    <img src={FooterLogo} alt="" />
                    <h1 className='font-semibold text-[24px] leading-[100%] text-[#FFFFFF]'>Dior design</h1>
                </div>

                <div className='w-[400px] h-[24px] mx-auto'>
                    <ul className='flex gap-[50px] font-sans text-[16px] leading-[100%] text-[#FFFFFF] pt-[80px] cursor-pointer'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact US</li>
                    </ul>
                </div>

                <div className='w-[400px] h-[24px] mx-auto pt-[120px]'>
                    <ul className='flex justify-center gap-[50px] font-semibold text-[20px] leading-[100%] text-[#FFFFFF] cursor-pointer'>
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

                <div className='w-[1180px] mx-auto mt-[66px] border-t-[1px] border-[#FFFFFF] rotate-0'></div>

                <div className='w-[1180px] mx-auto pt-[24px] text-center'>
                    <p className='font-sans text-[16px] leading-[100%] text-[#FFFFFF]'>Copyright Satyam Studio</p>
                </div>

            </div>
        </div>
    )
}

export default Footer