'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { MeetProps } from '@/app/layout/constants'

export default function Meet({ data }: MeetProps) {
  // Explicitly type the state as a number
  const [activeIndex, setActiveIndex] = useState<number>(1);

  if (!data) return null;

  return (
    <section className="bg-[#B36B3F] py-16 text-white text-center">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Headings */}
        <h2 className="sm:text-[32px] font-playfair text-[28px] md:text-[40px] leading-[1.3] lg:text-[55px] md:leading-[1.1] font-bold mb-4">
          {data.heading}
        </h2>
        <p className="max-w-[850px] mx-auto font-Lato text-sm md:text-base opacity-90 leading-relaxed mb-4">
          {data.description}
        </p>
        <p className="text-sm md:text-base font-semibold mb-10">
          {data.subDescription}
        </p>

        {/* Team Grid */}
        <div className="flex flex-wrap justify-center items-end gap-3 md:gap-4 overflow-hidden mb-12">
          {data.members?.map((member, index: number) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={member.id}
                onClick={() => setActiveIndex(index)}
                className={`relative cursor-pointer transition-all duration-300 ease-in-out group h-[260px] md:h-[320px] rounded-sm overflow-hidden flex items-end ${
                  isActive 
                    ? 'w-[200px] md:w-[240px] bg-[#647996]' 
                    : 'w-[140px] md:w-[170px] bg-[#D9E7F9]'
                }`}
              >
                {/* Image */}
                <div className="w-full h-full relative z-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Gradient */}
                <div
                  className={`absolute inset-0 z-10 transition-all duration-300 ${
                    isActive
                      ? 'bg-linear-to-t from-40% from-secondary to-transparent'
                      : 'h-[170px] bottom-0 w-full bg-linear-to-t from-30% from-[#D9E7F9] via-[#D9E7F9B2] to-transparent'
                  }`}
                />

                {/* Text Layer */}
                <div className="absolute bottom-0 left-0 w-full z-20 p-4 flex flex-col items-center justify-end text-center">
                  <p className={`font-semibold tracking-wide text-xs md:text-sm transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-[#0A2540]'
                  }`}>
                    {member.name}
                  </p>
                  
                  {isActive && member.role && (
                    <p className="text-[10px] md:text-xs text-white opacity-80 mt-0.5">
                      {member.role}
                    </p>
                  )}

                  {/* Arrow Graphic Indicator */}
                  <div className="mt-2">
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        isActive ? 'stroke-white' : 'stroke-[#0A2540]'
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="flex items-center gap-3 bg-[#0A2540] hover:bg-[#123456] transition-colors text-white font-medium text-sm px-6 py-3 rounded-full group">
            Our Team
            <span className="bg-white text-[#0A2540] w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm transform transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </button>
        </div>

      </div>
    </section>
  )
}