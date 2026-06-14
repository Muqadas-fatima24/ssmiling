'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from './constants'; // Adjust the import path as needed

export default function Header2() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Triggers sticky state after scrolling past 110px
      if (window.scrollY > 110) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 1. INITIAL STATIC HEADER 
          - Stays inline at the top of the page.
          - Fades out cleanly when scrolled past the threshold.
      */}
      <header 
        className={`w-full bg-white select-none relative z-50 transition-opacity duration-300 ${
          isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* BACKGROUND STRIP ENGINE */}
        <div className="absolute top-0 left-[25%] lg:left-[30%] xl:left-[39%] right-0 h-10 bg-secondry z-0 hidden md:block" />

        {/* Main Content Layout Container */}
        <div className="mx-auto max-w-[1300px] px-4 w-full grid grid-cols-2 md:grid-cols-12 items-center relative z-10">
          
          {/* Identity Logo */}
          <div className="col-span-1 md:col-span-3 mr-8 flex items-center justify-end h-24">
            <Link href="/" className="flex items-center">
              <Image
                src="/home/main-logo-black.webp"
                alt="Start Smiling Logo"
                width={180}
                height={60}
                className="object-contain w-auto max-h-[65px]"
                priority
              />
            </Link>
          </div>

          {/* Navigation Stack */}
          <div className="col-span-1 md:col-span-9 flex flex-col justify-between w-full h-24">
            {/* UPPER SECTION PANEL */}
            <div className="h-10 bg-secondry hidden md:flex max-w-[750px] items-center justify-between px-6 relative z-10 w-full opacity-100">
              <span className="text-white text-xl font-medium tracking-wide">
                Book Your Consultation: <span className="underline font-semibold">01277 353456</span>
              </span>
              <div className="flex items-center gap-4 text-white">
                <a href="#" aria-label="Facebook">
                  <Image src="/home/facebook-header.svg" alt="Facebook" width={30} height={30} className="object-contain h-auto max-h-[30px] w-auto" priority />
                </a>
                <a href="#" aria-label="Instagram">
                  <Image src="/home/insta-header21.svg" alt="Instagram" width={30} height={30} className="object-contain h-auto max-h-[30px] w-auto" priority />
                </a>
              </div>
            </div>

            {/* LOWER SECTION PANEL */}
            <div className="flex items-center justify-center bg-white h-14 gap-1 xl:gap-6 pl-4">
              <nav className="hidden md:flex items-center flex-nowrap min-w-0 gap-4 xl:gap-5">
                {NAV_LINKS.map((item, index) => renderNavLink(item, index))}
              </nav>
              <Link href="#" className="bg-primary whitespace-nowrap hover:bg-white text-white hover:text-primary md:text-[10px] lg:text-sm text-[10px] font-semibold px-4 lg:px-5 py-2.5 rounded-full flex items-center gap-2 transition-all ml-2 border border-primary shrink-0 shadow-sm">
                Free Smile Consultation <span className="font-bold">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </header>


      {/* 2. SMOOTH SLIDE DOWN STICKY HEADER
          - Fixed to top.
          - When active, transitions from Y offset `-translate-y-full` to `translate-y-0`.
      */}
      <header 
        className={`fixed left-0 right-0 top-0 w-full bg-white shadow-md z-50 h-20 border-b border-neutral-100 select-none transform transition-transform duration-500 ease-out ${
          isScrolled ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="mx-auto max-w-[1300px] px-4 w-full h-full flex justify-between items-center gap-4">
          
          {/* Logo - Aligned left cleanly */}
          <div className="flex items-center justify-start shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/home/main-logo-black.webp"
                alt="Start Smiling Logo"
                width={180}
                height={60}
                className="object-contain w-auto max-h-[50px]"
                priority
              />
            </Link>
          </div>

          {/* Navigation - Clean flat flexible alignment */}
          <div className="flex items-center justify-end flex-1 min-w-0">
            <div className="flex items-center justify-around bg-white h-auto w-full gap-4 lg:gap-6">
              <nav className="hidden md:flex items-center flex-nowrap min-w-0 lg:gap-7 gap-5 xl:gap-9">
                {NAV_LINKS.map((item, index) => renderNavLink(item, index))} 
              </nav>
              <Link href="#" className="bg-primary whitespace-nowrap hover:bg-white text-white hover:text-primary md:text-[10px] lg:text-xs text-[10px] font-semibold px-4 lg:px-5 py-2.5 rounded-full flex items-center gap-2 transition-all ml-2 border border-primary shrink-0 shadow-sm">
                Free Smile Consultation <span className="font-bold">&rarr;</span>
              </Link>
            </div>
          </div>

        </div>
      </header>
    </>
  );
}
interface DropdownItem {
  label: string;
  href: string;
}

interface NavLinkItem { 
  label: string;
  href?: string;         // Optional because items with dropdowns might not have a root href
  dropdownItems?: DropdownItem[]; // Optional array for dropdown panels
}

// Extracted Helper function to prevent repetitive dropdown rendering code
function renderNavLink(item: NavLinkItem, index: number) {
  if (item.dropdownItems) {
    return (
      <div key={index} className="relative group py-4 cursor-pointer whitespace-nowrap shrink-0">
        <span className="lg:text-sm font-medium text-primary flex items-center gap-1 xl:gap-2">
          {item.label}
          <Image
            src="/home/dropdown.svg"
            alt="Dropdown Arrow"
            width={10}
            height={10}
            className="object-contain w-[10px] h-[10px] transition-transform duration-300 group-hover:rotate-180"
            priority
          />
        </span>
        <div className="absolute top-full left-0 text-white w-48 bg-primary shadow-xl border rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col z-50">
          {item.dropdownItems.map((dropdownItem, dIndex: number) => (
            <Link key={dIndex} href={dropdownItem.href} className="px-4 py-2 text-xs hover:bg-secondry text-white whitespace-nowrap">
              {dropdownItem.label}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Link key={index} href={item.href || '#'} className="font-medium lg:text-sm whitespace-nowrap transition-colors text-primary shrink-0">
      {item.label}
    </Link>
  );
}