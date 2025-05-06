import React from 'react';
import headerImg from '../img/header-img.png';
import headerPic from '../img/header-pic.png';
import headerRate from '../img/header-rate.png';
import { MdOutlineCalendarMonth } from "react-icons/md";
import our1 from '../img/our1.png';
import our4 from '../img/our4.png';
import man from '../img/man.png';
import OurSwiper from '../Components/OurSwiper';
import OurMedia from '../Components/OurMedia';
import Students from '../Components/Students';
import Quations from '../Components/Quations';
import WorkShop from '../Components/WorkShop';
import Footer from '../Components/Footer';

// Slider
import Slider from "react-slick";
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

            {/* Our services */}
            <div className='absolute w-[1320px] h-auto top-[678px] left-0'>
                <div className='w-full flex flex-col items-center mt-[70px]'>
                    <h1 className='font-semibold text-[40px] leading-[100%] text-[#000000]'>
                        Our services
                    </h1>
                    <p className='w-[574px] font-semibold text-[20px] leading-[100%] text-[#686868] mt-[20px] text-center'>
                        Expert guidance for managing funds in alignment with Islamic principles, helping you make informed, halal investment decisions.
                    </p>
                </div>

                {/* Card section */}
                <div className='mt-[80px] mx-auto max-w-[1180px] bg-white p-[40px] rounded-[10px]'>
                    <div className='flex flex-wrap justify-between gap-y-[40px]'>

                        {/* Card 1 */}
                        <div className='w-[31%] h-[368px] rounded-[10px] p-[30px] bg-[#DEEAFF] flex flex-col justify-between'>
                            <div>
                                <div className='flex items-center gap-[20px]'>
                                    <img className='w-[85px] h-[85px]' src={our1} alt="our1" />
                                    <h1 className='font-semibold text-[24px] text-[#152032]'>Islamic Fund Management</h1>
                                </div>
                                <p className='mt-[20px] min-h-[96px] font-semibold text-[17px] text-[#454545]'>
                                    We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.
                                </p>
                            </div>
                            <button className='w-full h-[43px] bg-[#152032] rounded-[10px] text-white font-semibold text-[16px]'>Learn more</button>
                        </div>

                        {/* Card 2 */}
                        <div className='w-[31%] h-[368px] rounded-[10px] p-[30px] bg-[#D5F6ED] flex flex-col justify-between'>
                            <div>
                                <div className='flex items-center gap-[20px]'>
                                    <img className='w-[85px] h-[85px]' src={our4} alt="our2" />
                                    <h1 className='font-semibold text-[24px] text-[#152032]'>International Relations</h1>
                                </div>
                                <p className='mt-[20px] min-h-[96px] font-semibold text-[17px] text-[#454545]'>
                                    We establish connections with local and international organizations to promote Islamic financial systems and create that support financial inclusion.
                                </p>
                            </div>
                            <button className='w-full h-[43px] bg-[#152032] rounded-[10px] text-white font-semibold text-[16px]'>Learn more</button>
                        </div>

                        {/* Card 3 */}
                        <div className='w-[31%] h-[368px] rounded-[10px] p-[30px] bg-[#FBE2F4] flex flex-col justify-between'>
                            <div>
                                <div className='flex items-center gap-[20px]'>
                                    <img className='w-[85px] h-[85px]' src={our1} alt="our3" />
                                    <h1 className='font-semibold text-[24px] text-[#152032]'>Education and Training</h1>
                                </div>
                                <p className='mt-[20px] min-h-[96px] font-semibold text-[17px] text-[#454545]'>
                                    We offer short-term training courses, and conferences conducted by experts, along with study tours to leading Islamic financial institutions.
                                </p>
                            </div>
                            <button className='w-full h-[43px] bg-[#152032] rounded-[10px] text-white font-semibold text-[16px]'>Learn more</button>
                        </div>

                        {/* Card 4 */}
                        <div className='w-[31%] h-[368px] rounded-[10px] p-[30px] bg-[#E2DBF9] flex flex-col justify-between'>
                            <div>
                                <div className='flex items-center gap-[20px]'>
                                    <img className='w-[85px] h-[85px]' src={our4} alt="our4" />
                                    <h1 className='font-semibold text-[24px] text-[#152032]'>For Islamic Banks</h1>
                                </div>
                                <p className='mt-[20px] min-h-[96px] font-semibold text-[17px] text-[#454545]'>
                                    We provide experienced consulting on the establishment and management of Islamic banks and branches. We support the development of competitive.
                                </p>
                            </div>
                            <button className='w-full h-[43px] bg-[#152032] rounded-[10px] text-white font-semibold text-[16px]'>Learn more</button>
                        </div>

                        {/* Card 5 */}
                        <div className='w-[31%] h-[368px] rounded-[10px] p-[30px] bg-[#EBEFF3] flex flex-col justify-between'>
                            <div>
                                <div className='flex items-center gap-[20px]'>
                                    <img className='w-[85px] h-[85px]' src={our1} alt="our5" />
                                    <h1 className='font-semibold text-[24px] text-[#152032]'>Islamic Capital Market</h1>
                                </div>
                                <p className='mt-[20px] min-h-[96px] font-semibold text-[17px] text-[#454545]'>
                                    We provide expert advice on the Islamic capital market, including Shariah-compliant investment products, sukuk issuance, and ethical portfolio management.
                                </p>
                            </div>
                            <button className='w-full h-[43px] bg-[#152032] rounded-[10px] text-white font-semibold text-[16px]'>Learn more</button>
                        </div>

                        {/* Card 6 */}
                        <div className='w-[31%] h-[368px] rounded-[10px] p-[30px] bg-[#FFEDB6] flex flex-col justify-between'>
                            <div>
                                <div className='flex items-center gap-[20px]'>
                                    <img className='w-[85px] h-[85px]' src={our4} alt="our6" />
                                    <h1 className='font-semibold text-[24px] text-[#152032]'>Shariah Compliance Audit</h1>
                                </div>
                                <p className='mt-[20px] min-h-[96px] font-semibold text-[17px] text-[#454545]'>
                                    We provide Shariah supervision and audit services, examining the compliance of business models with Shariah principles.
                                </p>
                            </div>
                            <button className='w-full h-[43px] bg-[#152032] rounded-[10px] text-white font-semibold text-[16px]'>Learn more</button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Our Expert Team */}
            <div className='w-[1320px] h-auto absolute top-[1853px] pt-[70px] pb-[70px] px-[20px]'>
                <div className='w-full text-center mb-[40px]'>
                    <h2 className='font-semibold text-[40px] text-[#000000]'>Our Expert Team</h2>
                    <p className='font-semibold text-[17px] text-[#686868] w-[60%] mx-auto'>
                        Our team consists of seasoned professionals with extensive experience in Islamic finance and management. Each member brings a unique set of skills and expertise.
                    </p>
                </div>

                <div className='w-[980px] mx-auto'>
                    <Slider {...sliderSettings}>
                        {teamMembers.map((member, idx) => (
                            <div key={idx}>
                                <div className='flex w-[980px] h-[445px] rounded-[10px] bg-[#D2E6E4] mx-auto'>
                                    <div className='w-[285px] h-[375px] pt-[35px] pl-[50px]'>
                                        <img src={member.image} alt={member.name} className="rounded-[10px] object-cover h-full" />
                                    </div>
                                    <div className='w-[514px] h-[274px] gap-[36px] flex flex-col justify-center pt-[100px] pl-[80px]'>
                                        <h1 className='font-semibold text-[28px] text-[#141B34]'>{member.name}</h1>
                                        <p className='text-[17px] text-[#141B34] leading-[30px]'>
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
