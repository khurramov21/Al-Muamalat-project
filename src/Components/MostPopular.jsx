import React, { useState, useMemo, useEffect } from 'react'
import courseImg1 from '../img/course-img1.png'
import courseImg2 from '../img/course-img2.png'
import courseImg3 from '../img/course-img3.png'
import { IoStar, IoStarOutline } from 'react-icons/io5'
import { GoArrowUpRight } from 'react-icons/go'

// CourseCard component
const CourseCard = ({ course, staticImg }) => (
  <div className='w-full max-w-[312px] h-[435px] bg-[#F6F8F9] rounded-[24px] flex flex-col p-[16px] flex-shrink-0'>
    <div className='w-full h-[230px] rounded-[24px] p-[10px]' style={{ background: course.bg }}>
      <div className='w-[78px] h-[36px] flex items-center justify-center rounded-[6px] bg-white opacity-60'>
        <p className='font-semibold text-[16px] text-[#1B1D1F]'>{course.category}</p>
      </div>
      <img
        className='w-[189px] h-[180px] object-cover pl-[70px]'
        src={staticImg || course.img}
        alt={course.category}
      />
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

// MostPopular component
const MostPopular = () => {
  const [index, setIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const originalCourses = [
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

  const shuffleArray = (array) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  const courses = useMemo(() => shuffleArray(originalCourses), [])

  // Mobile check
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-slide for mobile
  useEffect(() => {
    if (!isMobile) return
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % courses.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [isMobile, courses.length])

  const visibleCourses = isMobile
    ? [courses[index]]
    : courses.slice(index, index + 3)

  const handlePrev = () => {
    setIndex((prev) => (prev - 3 >= 0 ? prev - 3 : 0))
  }

  const handleNext = () => {
    if (index + 3 < courses.length) {
      setIndex(index + 3)
    }
  }

  return (
    <div className='w-full max-w-[1440px] mx-auto px-4 mt-[150px]'>
      <div className='w-full max-w-[1180px] h-[700px] mx-auto'>
        <h1 className='font-bold text-[40px] text-center text-[#000000]'>Most Popular Course</h1>
        <p className='w-full max-w-[574px] mx-auto font-medium text-[20px] text-[#686868] mt-[20px] text-center'>
          Expert guidance for managing funds in alignment with Islamic principles, helping you make informed, halal investment decisions.
        </p>

        {/* Buttons */}
        <div className='flex justify-center mx-auto gap-4 mt-8 lg:hidden'>
          <button
            onClick={handlePrev}
            className='w-[44px] h-[44px] rounded-full bg-[#009688] text-white text-xl flex items-center justify-center disabled:opacity-50'
            disabled={index === 0}
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className='w-[44px] h-[44px] rounded-full bg-[#009688] text-white text-xl flex items-center justify-center disabled:opacity-50'
            disabled={index + 3 >= courses.length}
          >
            ›
          </button>
        </div>

        {/* Slider */}
        <div className='relative mt-[60px] flex justify-center items-center'>
          <button
            onClick={handlePrev}
            className='hidden lg:flex absolute left-[-10px] w-[44px] h-[44px] rounded-full bg-[#009688] text-white text-xl items-center justify-center disabled:opacity-50'
            disabled={index === 0}
          >
            ‹
          </button>

          <div className='flex gap-[28px] overflow-x-auto lg:overflow-x-visible flex-nowrap justify-start transition-all duration-300'>
            {visibleCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                staticImg={isMobile ? courseImg1 : null} // Fixed image only for mobile
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className='hidden lg:flex absolute right-[-30px] w-[44px] h-[44px] rounded-full bg-[#009688] text-white text-xl items-center justify-center disabled:opacity-50'
            disabled={index + 3 >= courses.length}
          >
            ›
          </button>
        </div>

      </div>
    </div>
  )
}

export default MostPopular
