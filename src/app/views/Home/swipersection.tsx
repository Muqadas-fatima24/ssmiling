"use client";

import React, { useState, useRef } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Testimonial } from "@/app/layout/constants";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Container from "@/app/layout/container";

interface SwiperProps {
  data: Testimonial[];
}

export default function SwiperSection({ data }: SwiperProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef<any>(null);
  const openModal = (index: number) => {
    setActiveIndex(index);

    if (mainSwiperRef.current?.autoplay) {
      mainSwiperRef.current.autoplay.stop();
    }

    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);

    if (mainSwiperRef.current?.autoplay) {
      mainSwiperRef.current.autoplay.start();
    }
  };
  return (
    <section className="py-16 bg-white select-none">
      {/* Section Heading */}
      <Container>
        <h2 className="text-center text-[24px] sm:text-[28px] md:text-[34px] lg:text-[42px] font-bold leading-[1.3] md:leading-[1.2]  text-primary font-Lato mb-12">
          What Our Patients Have To Say
        </h2>

        {/* Main Swiper Container */}
        <Container className="relative mb-8 overflow-hidden">
          <SwiperComponent
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            onSwiper={(swiper) => {
              mainSwiperRef.current = swiper;
            }}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              1024: { slidesPerView: 2 },
            }}
            navigation={{
              prevEl: ".main-swiper-prev",
              nextEl: ".main-swiper-next",
            }}
            className="testimonial-swiper"
          >
            {data.map((item, index) => {
              const wordCount = item.text.trim().split(/\s+/).length;
              const showReadMore = wordCount > 25;
              return (
                <SwiperSlide key={item.id}>
                  <div className="bg-[#fdf5f0] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-3 md:gap-6 min-h-[240px] relative">
                    {/* Left Side: Profile & Overlapping Quote Icon */}
                    <div className="relative shrink-0 w-32 h-37 mx-auto md:mx-0">
                      <Image
                        src={item.image}
                        width={100}
                        height={100}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>

                    {/* Right Side: Copy Content */}
                    <div className="flex flex-col grow mt-4 md:mt-0">
                      <div>
                        <p className="text-tertiary text-sm md:text-base leading-relaxed line-clamp-3">
                          {/* {item.text} */}
                          {showReadMore
                            ? item.text.split(" ").slice(0, 25).join(" ")
                            : item.text}
                        </p>
                        {/* <button
                      onClick={() => openModal(index)}
                      className="text-[#1e2e4f] font-bold text-sm mt-6 block text-left"
                    >
                      Read more
                    </button> */}
                        {showReadMore && (
                          <button
                            onClick={() => openModal(index)}
                            className="text-primary cursor-pointer font-bold text-sm mt-6 block text-left"
                          >
                            Read more
                          </button>
                        )}
                      </div>

                      <div className="border-t border-[#73788730] pt-4 mt-4 flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-primary text-base">
                            {item.name}
                          </h4>
                          <p className="text-xs text-primary">{item.role}</p>
                        </div>
                        <div className="flex gap-0.5 text-[#b56a43]">
                          <Image
                            src={"/home/stars-brown.svg"}
                            width={100}
                            height={100}
                            alt="stars"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </SwiperComponent>
        </Container>

        {/* --- MAIN CAROUSEL TEARDROP BUTTONS --- */}
        <div className="flex justify-center items-center gap-1 mt-8">
          <button className="main-swiper-prev">
            <Image
              src={"/home/patient-say-left.svg"}
              width={56}
              height={56}
              alt={"patient-say-left"}
              className="w-[56px] h-[56px] object-cover cursor-pointer"
            />
          </button>
          <button className="main-swiper-next ">
            <Image
              src={"/home/patient-say-right.svg"}
              width={56}
              height={56}
              alt={"patient-say-left"}
              className="w-[56px] h-[56px] object-cover cursor-pointer"
            />
          </button>
        </div>

        {/* --- MODAL DIALOG POPUP --- */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm  animate-fadeIn">
            <div className="absolute inset-0" onClick={closeModal}></div>

            <div className="bg-white  min-h-[420px] rounded-[20px] max-w-[760px] w-[95%] relative z-10 shadow-xl overflow-hidden">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute right-5 top-5 z-50 flex h-10 w-10 items-center justify-center hover:bg-primary hover:text-white rounded-full bg-[#F3EBE6] text-2xl text-primary cursor-pointer"
              >
                ×
              </button>

              {/* Modal Swiper */}
              <SwiperComponent
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                initialSlide={activeIndex}
                loop={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  prevEl: ".modal-swiper-prev",
                  nextEl: ".modal-swiper-next",
                }}
              >
                {data.map((item) => (
                  <SwiperSlide key={`modal-${item.id}`}>
                    <>
                      {/* <div className="border-t-4 rounded-4xl width-[98%] mx-auto border-secondry "></div>
                <div className="relative">
               
                   <div className="flex p-6  md:flex-row gap-6 items-start">
                    <div className="relative shrink-0 w-26 h-30 mx-auto md:mx-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div className="grow w-full">
                      <div className="flex flex-col justify-between items-start mb-4 pb-2  gap-3"> 
                        <div>
                          <h3 className="font-bold text-xl mb-1 text-primary">{item.name}</h3>
                          <p className="text-xs text-primary">{item.role}</p>
                        </div>
                        <div className="flex gap-0.5 text-[#b56a43] mt-2 md:mt-0">
                         <Image 
                         src={'/home/stars-brown.svg'}
                         width={100}
                         height={100}
                         alt="stars"                     
                         />
                         </div>
                      </div>                    
                    </div>

                   </div>

                    <div className="grow mt-3 p-6  w-full  border-t border-[#73788780]">
                      <p className="text-primary text-sm md:text-base leading-relaxed max-h-[30vh] overflow-y-auto">
                        {item.text}
                      </p>
                    </div>
                  <div className="relative">
                    <div className="flex items-center absolute bottom-0 justify-between border-t border-[#73788730] bg-[#F8EFEA] px-5 py-4 sm:px-7 ">
        <button
          className="modal-swiper-prev"
        >
          <Image
                    src={'/home/patient-say-left.svg'}
                    width={20}
                    height={20}
                    alt={'/patient-say-left'}
                    className="w-[50%] h-full object-cover"
                  />
        </button>
        <p className="text-center text-[13px] font-semibold uppercase tracking-[0.08em] text-tertiary">
         More patient  stories     
        </p>
        <button
          className="modal-swiper-next flex justify-end"
        >
           <Image
                    src={'/home/patient-say-right.svg'}
                    width={20}
                    height={20}
                    alt={'/patient-say-left'}
                    className="w-[50%] h-full object-cover "
                  />
        </button>
                    </div>
                    </div>
                  </div> */}

                      {/* change */}
                      <div className="h-[4px] w-full bg-secondry"></div>
                      <div className="relative">
                        <div className="flex p-8 gap-6 items-start">
                          <div className=" relative shrink-0 w-[95px] h-[95px]">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover rounded-xl"
                            />
                          </div>
                          <div className="grow w-full">
                            <div className="flex flex-col justify-between items-start mb-4 pb-2  gap-3">
                              <div>
                                <h3 className="font-bold text-xl mb-1 text-primary">
                                  {item.name}
                                </h3>
                                <p className="text-xs text-primary">
                                  {item.role}
                                </p>
                              </div>
                              <div className="flex gap-0.5 text-[#b56a43] mt-2 md:mt-0">
                                <Image
                                  src={"/home/stars-brown.svg"}
                                  width={100}
                                  height={100}
                                  alt="stars"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="px-8 py-6 border-t border-[#73788740]">
                          <p className="text-primary text-sm md:text-base leading-relaxed max-h-[30vh] overflow-y-auto">
                            {item.text}
                          </p>
                        </div>
                        <div className="border-t mt-auto border-[#73788730] bg-[#F8EFEA] px-7 py-5 flex items-center justify-between">
                          <button className="modal-swiper-prev shrink-0 ">
                            <Image
                              src="/home/patient-say-left.svg"
                              width={40}
                              height={40}
                              alt="Previous"
                              className="w-10 h-10 cursor-pointer"
                            />
                          </button>

                          <p className="text-center text-[13px] font-semibold uppercase tracking-[0.08em] text-tertiary">
                            More Patient Stories
                          </p>

                          <button className="modal-swiper-next shrink-0">
                            <Image
                              src="/home/patient-say-right.svg"
                              width={40}
                              height={40}
                              alt="Next"
                              className="w-10 h-10 cursor-pointer"
                            />
                          </button>
                        </div>
                      </div>

                      {/* change */}
                    </>
                  </SwiperSlide>
                ))}
              </SwiperComponent>

              {/* --- MODAL CAROUSEL TEARDROP BUTTONS --- */}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
