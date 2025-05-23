import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import courseImg1 from '../img/course-img1.png'
import courseImg2 from '../img/course-img2.png'
import courseImg3 from '../img/course-img3.png'
import { IoStar, IoStarOutline } from 'react-icons/io5'
import { GoArrowUpRight } from 'react-icons/go'
import Footer from './Footer'

const courses = [
  { id: 1, category: 'Design', rating: 5, reviews: 20, price: '500$', img: courseImg1, bg: '#FF7F5080', btnBg: '#009688', btnText: '#FFFFFF' },
  { id: 2, category: 'Business', rating: 4, reviews: 102, price: '500$', img: courseImg2, bg: '#CCB4FF80', btnBg: '#00968833', btnText: '#009688' },
  { id: 3, category: 'Business', rating: 4, reviews: 102, price: '500$', img: courseImg3, bg: '#A9A8F6', btnBg: '#00779633', btnText: '#007796' },
  { id: 4, category: 'Design', rating: 5, reviews: 20, price: '500$', img: courseImg1, bg: '#FF7F5080', btnBg: '#009688', btnText: '#FFFFFF' },
  { id: 5, category: 'Business', rating: 4, reviews: 102, price: '500$', img: courseImg2, bg: '#CCB4FF80', btnBg: '#00968833', btnText: '#009688' },
  { id: 6, category: 'Business', rating: 4, reviews: 102, price: '500$', img: courseImg3, bg: '#A9A8F6', btnBg: '#00779633', btnText: '#007796' },
  { id: 7, category: 'Design', rating: 5, reviews: 20, price: '500$', img: courseImg1, bg: '#FF7F5080', btnBg: '#009688', btnText: '#FFFFFF' },
  { id: 8, category: 'Business', rating: 4, reviews: 102, price: '500$', img: courseImg2, bg: '#CCB4FF80', btnBg: '#00968833', btnText: '#009688' },
  { id: 9, category: 'Business', rating: 4, reviews: 102, price: '500$', img: courseImg3, bg: '#A9A8F6', btnBg: '#00779633', btnText: '#007796' },
]

const CourseCard = ({ course }) => (
  <div className='w-full max-w-[312px] h-full bg-white rounded-[24px] flex flex-col p-[16px]'>
    <div className='w-full h-[230px] rounded-[24px] p-[10px]' style={{ background: course.bg }}>
      <div className='w-[78px] h-[36px] flex items-center justify-center rounded-[6px] bg-white opacity-60'>
        <p className='font-semibold text-[16px] text-[#1B1D1F]'>{course.category}</p>
      </div>
      <img className='w-[189px] h-[180px] object-cover pl-[70px]' src={course.img} alt={course.category} />
    </div>
    <p className='mt-[20px] font-semibold text-[16px] text-center text-[#363A3D]'>
      Various versions have evolved daf
    </p>
    <div className='flex items-center gap-[11px] pl-[10px] mt-[20px]'>
      {[...Array(5)].map((_, i) =>
        i < course.rating ? (
          <IoStar key={i} className='text-[#FFC27A]' />
        ) : (
          <IoStarOutline key={i} className='text-[#E7E9EB]' />
        )
      )}
      <p>({course.reviews})</p>
    </div>
    <div className='w-full border border-[#E7E9EB] mt-[20px]' />
    <div className='w-full h-[44px] mt-[20px] flex items-center justify-between p-[8px]'>
      <p className='font-semibold text-[24px] text-[#1B1D1F]'>{course.price}</p>
      <button
        className='w-[44px] h-[44px] rounded-full flex items-center justify-center'
        style={{ background: course.btnBg, color: course.btnText }}
      >
        <GoArrowUpRight />
      </button>
    </div>
  </div>
)

const Course = () => {
    const location = useLocation()
    const isProfile = location.pathname === '/profile'
    const isCourse = location.pathname === '/course'
  
    return (
      <div className='w-full h-[100vh] min-h-screen bg-[#F6F8F9] py-16 pt-[140px]'>
        {/* Outer padding + background */}
        <div className="w-full px-4 sm:px-8 md:px-12">
          {/* Center container, max width like navbar */}
          <div className="max-w-[1180px] mx-auto">
            {/* Navigation tabs */}
            <div className='flex flex-wrap gap-4 sm:gap-6 md:gap-[28px] mb-[40px] justify-center sm:justify-start'>
              <Link
                to='/profile'
                className={`w-[157px] h-[43px] rounded-[10px] font-sans font-semibold text-[16px] flex items-center justify-center ${
                  isProfile
                    ? 'bg-[#009688] text-white'
                    : 'border-2 border-[#686868] text-[#686868] bg-white'
                }`}
              >
                Profile
              </Link>
              <Link
                to='/course'
                className={`w-[157px] h-[43px] rounded-[10px] font-sans font-semibold text-[16px] flex items-center justify-center ${
                  isCourse
                    ? 'bg-[#009688] text-white'
                    : 'border-2 border-[#686868] text-[#686868] bg-white'
                }`}
              >
                Course
              </Link>
            </div>
  
            {/* Cards Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-[28px] justify-items-center items-stretch'>
              {courses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
         {/* Footer container */}
         <div className='w-full max-w-[1440px] mx-auto mt-[70px]'>
              <Footer />
            </div>
      </div>
    )
  }
  
  

export default Course
