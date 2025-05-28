import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    question: "Will I receive lifetime access to the courses?",
    answer: "Yes, once you purchase a course, you will have lifetime access to it including all updates."
  },
  {
    question: "Can I use the materials for community teaching?",
    answer: "Yes, our resources are designed to be used in both personal and group teaching settings."
  },
  {
    question: "Is there a free trial for the courses?",
    answer: "We offer a 7-day free trial for selected courses so you can explore the content before committing."
  },
  {
    question: "Who can benefit from these courses?",
    answer: "Our courses are suitable for students, educators, professionals, and lifelong learners alike."
  },
  {
    question: "Do the courses include certificates?",
    answer: "Yes, upon successful completion of each course, you will receive a certificate of achievement."
  },
];

const Quations = () => {
  const [openIndex, setOpenIndex] = useState(4);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const leftColumnFaqs = [faqs[0], faqs[4]];
  const rightColumnFaqs = [faqs[1], faqs[2], faqs[3]];

  const renderFaq = (faq) => {
    const actualIndex = faqs.findIndex(f => f.question === faq.question);

    return (
      <div
        key={actualIndex}
        className={`w-[580px] min-h-[97px] md:w-[580px] lg:w-[580px] max-md:w-full max-md:h-auto ${
          openIndex === actualIndex ? 'min-h-[216px]' : ''
        } border-[2px] rounded-[10px] overflow-hidden transition-all duration-300 ${
          openIndex === actualIndex ? 'border-[#42978F]' : 'border-[#686868]'
        }`}
      >
        <div
          onClick={() => toggleFAQ(actualIndex)}
          className='flex justify-between items-start px-[20px] py-[30px] cursor-pointer'
        >
          <p className='font-semibold text-[22px] text-black w-[90%]'>{faq.question}</p>
          <div className='text-[#686868] mt-1'>
            {openIndex === actualIndex ? <FaMinus /> : <FaPlus />}
          </div>
        </div>

        <div className={`px-[20px] pb-[20px] transition-all duration-300 ${openIndex === actualIndex ? 'block' : 'hidden'}`}>
          <p className='text-[20px] text-black leading-[140%]'>{faq.answer}</p>
        </div>
      </div>
    );
  };

  return (
    <div className='w-full max-w-[1440px] mx-auto bg-white pb-[60px] px-4 md:px-0 max-md:px-4 max-md:mt-[80px]'>
      <div className='max-w-[574px] text-center mx-auto mt-[-40px]'>
        <h1 className='font-semibold text-[40px] text-black'>Frequently asked questions</h1>
        <p className='text-[20px] text-[#686868] mt-4'>If you have any further questions, please contact us</p>
      </div>

      {/* Container: desktop 2 ustun, mobilda tagma-tag */}
      <div className='w-[1180px] max-w-full mx-auto mt-[60px] flex flex-col md:flex-row justify-between gap-[20px]'>
        {/* Chap ustun */}
        <div className='flex flex-col gap-[20px] items-center md:items-start'>
          {leftColumnFaqs.map(renderFaq)}
        </div>

        {/* O‘ng ustun */}
        <div className='flex flex-col gap-[20px] items-center md:items-start'>
          {rightColumnFaqs.map(renderFaq)}
        </div>
      </div>
    </div>
  );
};

export default Quations;
