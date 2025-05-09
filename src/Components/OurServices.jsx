import React from 'react'
import our1 from '../img/our1.png';
import our4 from '../img/our4.png';

const OurServices = () => {
    return (
            <div className='w-full max-w-[1400px] h-auto left-0 px-4 mt-[170px]'>
                <div className='w-full flex flex-col items-center mt-[70px] text-center'>
                    <h1 className='font-semibold text-[32px] sm:text-[40px] leading-[100%] text-[#000000]'>
                        Our services
                    </h1>
                    <p className='w-full max-w-[574px] font-semibold text-[18px] sm:text-[20px] leading-[100%] text-[#686868] mt-[20px]'>
                        Expert guidance for managing funds in alignment with Islamic principles, helping you make informed, halal investment decisions.
                    </p>
                </div>

                {/* Card section */}
                <div className='mt-[80px] mx-auto max-w-[1180px] bg-white p-[20px] sm:p-[40px] rounded-[10px]'>
                    <div className='flex flex-wrap justify-center sm:justify-between gap-y-[40px] gap-x-[20px]'>

                        {/* Card (universal format) */}
                        {[
                            {
                                bg: '#DEEAFF',
                                img: our1,
                                title: 'Islamic Fund Management',
                                desc: 'We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.',
                            },
                            {
                                bg: '#D5F6ED',
                                img: our4,
                                title: 'International Relations',
                                desc: 'We establish connections with local and international organizations to promote Islamic financial systems and create that support financial inclusion.',
                            },
                            {
                                bg: '#FBE2F4',
                                img: our1,
                                title: 'Education and Training',
                                desc: 'We offer short-term training courses, and conferences conducted by experts, along with study tours to leading Islamic financial institutions.',
                            },
                            {
                                bg: '#E2DBF9',
                                img: our4,
                                title: 'For Islamic Banks',
                                desc: 'We provide experienced consulting on the establishment and management of Islamic banks and branches. We support the development of competitive.',
                            },
                            {
                                bg: '#EBEFF3',
                                img: our1,
                                title: 'Islamic Capital Market',
                                desc: 'We provide expert advice on the Islamic capital market, including Shariah-compliant investment products, sukuk issuance, and ethical portfolio management.',
                            },
                            {
                                bg: '#FFEDB6',
                                img: our4,
                                title: 'Shariah Compliance Audit',
                                desc: 'We provide Shariah supervision and audit services, examining the compliance of business models with Shariah principles.',
                            },
                        ].map((card, index) => (
                            <div
                                key={index}
                                className={`w-full sm:w-[48%] lg:w-[31%] h-[368px] rounded-[10px] p-[30px] flex flex-col justify-between`}
                                style={{ backgroundColor: card.bg }}
                            >
                                <div>
                                    <div className='flex items-center gap-[20px]'>
                                        <img className='w-[85px] h-[85px]' src={card.img} alt={`our${index + 1}`} />
                                        <h1 className='font-semibold text-[20px] sm:text-[24px] text-[#152032]'>{card.title}</h1>
                                    </div>
                                    <p className='mt-[20px] min-h-[96px] font-semibold text-[16px] sm:text-[17px] text-[#454545]'>
                                        {card.desc}
                                    </p>
                                </div>
                                <button className='w-full h-[43px] bg-[#152032] rounded-[10px] text-white font-semibold text-[16px]'>
                                    Learn more
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

    )
}


export default OurServices