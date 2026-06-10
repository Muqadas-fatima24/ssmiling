'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from './constants'; // Adjust the import path as needed

export default function Header2() {
  // State to determine if the user has scrolled down past 80px
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If scroll position is greater than 80px, toggle state to true
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach scroll listener on mount
    window.addEventListener('scroll', handleScroll);
    
    // Clean up scroll listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`w-full bg-white select-none transition-all duration-300 left-0 right-0 ${
        isScrolled 
          ? 'fixed top-0 shadow-md z-50 h-20 border-b border-neutral-100' // Sticky configuration styles
          : 'relative z-50' // Initial static landing layout styles
      }`}
    >
      
      {/* BACKGROUND STRIP ENGINE 
        - Instantly fades out via opacity and pointer-events when scrolled past 80px
      */}
      <div 
        className={`absolute top-0 left-[25%] lg:left-[30%] xl:left-[39%] right-0 h-10 bg-secondry z-0 hidden md:block transition-all duration-300 ${
          isScrolled ? 'opacity-0  pointer-events-none' : 'opacity-100'
        }`} 
      />

      {/* Main Content Layout Container 
        - Switches from a custom grid layout to a simple flexible container layout when sticky
      */}
      <div 
        className={`mx-auto max-w-[1300px] px-4 w-full h-full items-center relative z-10 ${
          isScrolled 
            ? 'flex justify-between gap-4' // Layout style matching your uploaded target image
            : 'grid grid-cols-2 md:grid-cols-12' // Initial complex grid system layout
        }`}
      >
        
        {/* LEFT COLUMN SIDE: Company Identity Logo 
          - Switches alignment from right-justified (initial layout) to left-justified (scrolled layout)
        */}
        <div 
          className={`transition-all duration-300 flex items-center ${
            isScrolled 
              ? 'justify-start shrink-0' // Anchors logo to the left side when scrolled
              : 'col-span-1 md:col-span-3 mr-8 justify-end h-24' 
          }`}
        >
          <Link href="/" className="flex items-center">
            <Image
              src="/home/main-logo-black.webp"
              alt="Start Smiling Logo"
              width={180}
              height={60}
              className={`object-contain w-auto transition-all duration-300 ${
                isScrolled ? 'max-h-[50px]' : 'max-h-[65px]' // Slightly reduces logo footprint inside sticky bar
              }`}
              priority
            />
          </Link>
        </div>

        {/* RIGHT COLUMN SIDE: Dual Stack Navigation Columns 
          - Collapses down from a height of 24 to full alignment center height when scrolled
        */}
        <div 
          className={`transition-all duration-300 ${
            isScrolled 
              ? 'flex items-center justify-end flex-1 min-w-0' // Seamless horizontal extension alignment
              : 'col-span-1 md:col-span-9 flex flex-col justify-between w-full h-24'
          }`}
        >
          
          {/* UPPER SECTION PANEL: Notification Info + Social Vectors 
            - Completely hidden when scrolled past 80px using overflow and visibility switches
          */}
          <div 
            className={`h-10 bg-secondry hidden md:flex max-w-[750px] items-center justify-between px-6 relative z-10 transition-all duration-300 ${
              isScrolled 
                ? 'max-h-0 py-0 hidden! opacity-0 overflow-hidden pointer-events-none' 
                : 'max-h-10 w-full opacity-100'
            }`}
          >
            <span className="text-white text-sm font-medium tracking-wide">
              Book Your Consultation: <span className="underline font-semibold">01277 353456</span>
            </span>
            <div className="flex items-center gap-4 text-white">
              <a href="#" aria-label="Facebook" className="transition-opacity">
                <Image
                  src="/home/facebook-header.svg"
                  alt="Facebook"
                  width={30}
                  height={30}
                  className="object-contain h-auto max-h-[30px] w-auto"
                  priority
                />
              </a>
              <a href="#" aria-label="Instagram" className="transition-opacity">
                <Image
                  src="/home/insta-header21.svg"
                  alt="Instagram"
                  width={30}
                  height={30}
                  className="object-contain h-auto max-h-[30px] w-auto"
                  priority
                />
              </a>
            </div>
          </div>

          {/* LOWER SECTION PANEL: Main Router Directory Links 
            - Houses the active standard links and the CTA element side-by-side
          */}
          <div 
            className={`flex items-center justify-center bg-white transition-all duration-300 ${
              isScrolled 
                ? 'h-auto w-full gap-4 lg:gap-6' // Aligns elements side-by-side into a single line
                : 'h-14 gap-1 xl:gap-6 pl-4'
            }`}
          >
            {/* <nav className={`hidden md:flex items-center   flex-nowrap min-w-0 
                isScrolled 
                ? 'xl:gap-9'
                : 'xl:gap-5 gap-4'
                
                `}> */}
                <nav className={`hidden md:flex items-center flex-nowrap min-w-0 ${
  isScrolled 
    ? 'xl:gap-9' 
    : 'gap-4 xl:gap-5'
}`}>
              
              {NAV_LINKS.map((item, index) => {
                // Scenario A: Item has dropdown children
                if (item.dropdownItems) {
                  return (
                    <div key={index} className="relative group py-4 cursor-pointer whitespace-nowrap shrink-0">
                      <span className="lg:text-xs md:text-[10px] text-[8px] font-medium text-primary flex items-center gap-1 xl:gap-2">
                        {item.label}
                        <Image
                          src="/home/dropdown.svg"
                          alt="Dropdown Arrow"
                          width={10}
                          height={10}
                          className="object-contain h-auto max-h-[10px] transition-transform duration-300 group-hover:rotate-180"
                          priority
                          style={{ height: 'auto' }}
                        />
                      </span>
                      
                      {/* Simulated Menu Dropdown Popover box */}
                      <div className="absolute top-full left-0 text-white w-48 bg-primary shadow-xl border rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col z-50">
                        {item.dropdownItems.map((dropdownItem, dIndex) => (
                          <Link 
                            key={dIndex} 
                            href={dropdownItem.href} 
                            className="px-4 py-2 text-xs hover:bg-secondry text-white whitespace-nowrap"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                // Scenario B: Item is a standard root-level link
                return (
                  <Link
                    key={index}
                    href={item.href || '#'}
                    className="font-medium lg:text-xs md:text-[10px] text-[10px] whitespace-nowrap transition-colors text-primary shrink-0"
                  >
                    {item.label}
                  </Link>
                );
              })}

            </nav>

            {/* CALL TO ACTION ACCENT ACTION BUTTON */}
            <Link 
              href="#" 
              className="bg-primary whitespace-nowrap hover:bg-white text-white hover:text-primary md:text-[10px] lg:text-xs text-[10px] font-semibold px-4 lg:px-5 py-2.5 rounded-full flex items-center gap-2 transition-all ml-2 border border-primary shrink-0 shadow-sm"
            >
              Free Smile Consultation <span className="font-bold">&rarr;</span>
            </Link>

          </div>
        </div>

      </div>
    </header>
  );
}