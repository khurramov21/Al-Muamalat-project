import { useEffect, useRef } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const PartnersSlider = () => {
  const swiperRef1 = useRef(null);
  const swiperRef2 = useRef(null);

  useEffect(() => {
    if (swiperRef1.current) {
      new Swiper(swiperRef1.current, {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        speed: 4000,
        loopedSlides: 20,
        autoplay: {
          delay:0,
          disableOnInteraction: false,
          reverseDirection: false,
        },
        breakpoints: {
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        },
      });
    }

    if (swiperRef2.current) {
      new Swiper(swiperRef2.current, {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        speed: 4000,
        loopedSlides: 20,
        autoplay: {
          delay:0,
          disableOnInteraction: false,
          reverseDirection: true,
        },
        breakpoints: {
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        },
      });
    }
  }, []);

  const clients = [
    { title1: "Stripe", color: "text-[#6461FC]" },
    { title1: "American", title2: "Express", color: "text-[#006FCF]" },
    { title1: "Western", title2: "Union", color: "text-[#231F20]" },
    { title1: "Klarna", color: "text-[#0A0B09]" },
    { title1: "Skrill", color: "text-[#862165]" },
    { title1: "AmazonPay", color: "text-[#333E47]" },
  ];

  const renderSlides = () =>
    clients.concat(clients).map((client, index) => (
      <div className="swiper-slide" key={index}>
        <div className="w-[280px] h-[139px] rounded-[10px] bg-[#F6F8F9] border border-[#E1E1E1] flex items-center justify-center text-center px-[20px] my-[15px]">
          <h2 className={`font-bold text-[32px] leading-[36px] ${client.color}`}>
            {client.title1}
            {client.title2 && (
              <>
                <br />
                <span className="font-bold text-[32px]">{client.title2}</span>
              </>
            )}
          </h2>
        </div>
      </div>
    ));

  return (
    <div className="w-[1320px] mx-auto pt-[70px] pb-[70px] absolute top-[2580px]">
      <h1 className="font-semibold text-[40px] text-[#000000] text-center mb-[40px]">
        Our Partners and Clients
      </h1>

      <div className="flex flex-col gap-[20px]">
        {/* Slider 1 */}
        <div className="swiper w-full h-[180px] overflow-hidden" ref={swiperRef1}>
          <div className="swiper-wrapper gap-[70px]">{renderSlides()}</div>
        </div>

        {/* Slider 2 */}
        <div className="swiper w-full h-[180px] overflow-hidden" ref={swiperRef2}>
          <div className="swiper-wrapper gap-[70px]">{renderSlides()}</div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSlider;
