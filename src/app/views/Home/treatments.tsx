
'use client'
import { useState } from 'react';
import Image from 'next/image';
import { TREATMENTS_DATA } from '@/app/layout/constants' // Adjust path as needed
import Container from '@/app/layout/container';

export default function Treatments() {
  const [activeCategory, setActiveCategory] = useState('general');

  // Filter treatments based on active button selection
  const filteredTreatments = TREATMENTS_DATA?.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section className="bg-[#FAF5F0] py-16 md:px-8">
      <Container>
        
        {/* Section Heading */}
        <h2 className=" text-center text-primary mb-12 font-Lato text-[24px] sm:text-[28px] md:text-[34px] lg:text-[42px] font-bold leading-[1.3] md:leading-[1.2]">
          Treatments We Offer
        </h2>

        {/* Category Filter Toggle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mx-auto mb-12">
          
          {/* General Dentistry Button Card */}
          <button 
            onClick={() => setActiveCategory('general')}
            className="relative h-25 rounded-xl text-sm sm:text-base cursor-pointer group bg-cover bg-center shadow-md"
            style={{ backgroundImage: `url('/home/general-dentistry.webp')` }} // Placeholder image
          >
            {/* <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" /> */}
            <div
              className={`absolute -bottom-5 left-1/2 top-[78px] -translate-x-1/2 flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-base whitespace-nowrap transition-all duration-500 shadow-lg ${
                activeCategory === 'general'
                  ? 'bg-secondry text-white' 
                  : 'bg-primary text-white'  
              }`}
            >
              General Dentistry

            <span className={`grid h-6 w-6 place-items-center rounded-[3px] border transition-all duration-300 border-white`}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className={`transition-transform     duration-200 
                 ${
                  activeCategory === 'general' ? 'rotate-180' : 'rotate-0'
                   }              
                `}>
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">                   
                </path>
                </svg>
            </span>

            </div>
          </button>

          {/* Cosmetic Dentistry Button Card */}
          <button 
            onClick={() => setActiveCategory('cosmetic')}
            className="relative h-25 rounded-[10px] cursor-pointer group bg-cover bg-center"
            style={{ backgroundImage: `url('/home/cosmetic-dentistry.webp')` }} // Placeholder image
          >
            {/* <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" /> */}
            <div
              className={`absolute -bottom-5 left-1/2 top-[78px]  -translate-x-1/2 flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-sm sm:text-base whitespace-nowrap transition-all duration-500  shadow-lg ${
                activeCategory === 'cosmetic'
                  ? 'bg-secondry text-white' 
                  : 'bg-primary text-white'  
              }`}
            >
              Cosmetic Dentistry
            <span className={`grid h-6 w-6 place-items-center rounded-[3px] border transition-all duration-300 border-white`}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className={`transition-transform     duration-200 
                 ${
                  activeCategory === 'general' ? 'rotate-180' : 'rotate-0'
                   }              
                `}>
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">                   
                </path>
                </svg>
            </span>
            </div>
          </button>

        </div>

        {/* 3x3 Grid Matrix Layout */}
        <div className="grid md:grid-cols-3">
          {filteredTreatments.map((treatment, index) => (
        <div
        key={treatment.id}
        className={`
        group
        flex flex-col
        items-center 
        justify-center
        p-12
        cursor-pointer
        text-center
        transition-all
        duration-300
        hover:bg-white
        ${
          index !== 2 &&
          index !== 5 &&
          index !== 8
            ? "md:border-r-3  md:border-[#AAAAAC]"
            : ""
        }

        ${
          index < 6
            ? "md:border-b-3  md:border-[#AAAAAC]"
            : ""
        }

       
      `}
    >
              {/* Icon Container Wrap */}
              <div className="w-16 h-16 flex items-center justify-center cursor-pointer rounded-full bg-white shadow-sm border border-slate-100 mb-5 text-2xl group-hover:scale-105 transition-all duration-500">
                {treatment.icon}
              </div>

              {/* Treatment Label */}
              <h3 className="text-[#1E293B] font-medium text-base mb-2 max-w-[200px] min-h-[48px] flex items-center justify-center">
                {treatment.name}
              </h3>

              {/* Dynamic Droplet-Effect Arrow Button */}
              <div className=" flex justify-center cursor-pointer">
                {/* Horizontal droplet background overlay that transitions on hover */}
                <div className="inline-flex items-center justify-center group-hover:bg-[url(/home/arrow-treatments.png)] bg-cover p-4 px-6    transition-all
      duration-700
      ease-in-out ">

               {/* Action Arrow Icon SVG */}
                <svg
                  className="w-5 h-5 text-[#0F172A] group-hover:text-white      transition-colors
        duration-200
        ease-in-out relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                 </div>  
              </div>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}