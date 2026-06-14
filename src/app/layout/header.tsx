"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { NAV_LINKS } from "./constants"; 
import Container from "./container";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      // Triggers sticky state after scrolling past 110px
      if (window.scrollY > 110) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  return (
    <>
      <header className="hidden lg:block w-full bg-white relative z-50 select-none">
        {/* BACKGROUND STRIP ENGINE */}
        <div className="absolute top-0 left-[25%] lg:left-[30%] xl:left-[39%] right-0 h-12 bg-secondry z-0 hidden md:block" />

        {/* Main Content Layout Container */}
        <Container className=" w-full grid grid-cols-2 md:grid-cols-12 items-center relative z-10">
          {/* LEFT COLUMN SIDE: Company Identity Logo */}
          <div className="col-span-1 md:col-span-2 flex items-center justify-end h-24">
            <Link href="/" className="flex items-center">
              <Image
                src="/home/main-logo-black.webp"
                alt="Start Smiling Logo"
                width={180}
                height={60}
                className="object-contain w-[180px] h-auto -mt-2.5
              "
                priority
              />
            </Link>
          </div>

          {/* RIGHT COLUMN SIDE: Dual Stack Navigation Columns */}
          <div className="col-span-1 md:col-span-10 flex flex-col justify-between w-full h-24">
            {/* UPPER SECTION PANEL: Notification Info + Social Vectors */}
            <div className="h-12 bg-secondry hidden py-1 px-3 md:flex max-w-[800px] xl:max-w-[850px] items-center justify-between px-6 relative z-10">
              <span className="text-white text-base font-medium tracking-wide">
                Book Your Consultation:{" "}
                <span className="font-semibold">01277 353456</span>
              </span>
              <div className="flex items-center gap-3 text-white">
                <a
                  href="#"
                  aria-label="Facebook"
                  className=" transition-opacity"
                >
                  {/* <FaFacebookF className="w-4 h-4" /> */}
                  <Image
                    src="/home/facebook-header.svg"
                    alt="Start Smiling Logo"
                    width={30}
                    height={30}
                    className="object-contain h-auto max-h-[30px] w-auto"
                    priority
                  />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className=" transition-opacity"
                >
                  {/* <FaInstagram className="w-4 h-4" /> */}
                  <Image
                    src="/home/insta-header21.svg"
                    alt="Start Smiling Logo"
                    width={30}
                    height={30}
                    className="object-contain h-auto max-h-[30px] w-auto"
                    priority
                  />
                </a>
              </div>
            </div>

            {/* LOWER SECTION PANEL: Main Router Directory Links */}
            <div className="h-12 pt-[5px] pb-[3px] flex items-center justify-end gap-1  xl:gap-1 bg-white pl-4">
              <nav className="hidden font-Lato md:flex items-center gap-5 lg:gap-7 xl:gap-11">
                {NAV_LINKS.map((item, index) => {
                  // Scenario A: Item has dropdown children
                  if (item.dropdownItems) {
                    return (
                      <div
                        key={index}
                        className="font-Lato relative group py-4 cursor-pointer"
                      >
                        <span className="text-primary font-medium flex items-center gap-1 xl:gap-2 whitespace-nowrap text-xs min-[1150px]:text-sm">
                          {item.label}
                          <Image
                            src="/home/dropdown.svg"
                            alt="Start Smiling Logo"
                            width={10}
                            height={10}
                            className="object-contain h-[10px] w-[10px]"
                            priority
                          />
                        </span>

                        {/* Simulated Menu Dropdown Popover box */}
                        <div className="absolute top-full left-0 text-white w-48 bg-tertiary shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col z-50">
                          {item.dropdownItems.map((dropdownItem, dIndex) => (
                            <Link
                              key={dIndex}
                              href={dropdownItem.href}
                              className="px-4 py-2 text-xs min-[1150px]:text-sm hover:bg-secondry text-white "
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
                      href={item.href || "#"}
                      className={`font-medium text-xs min-[1150px]:text-sm whitespace-nowrap transition-colors
                        ${item.label === 'Home' ? 'text-secondry':'text-primary' }
                        `}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              {/* CALL TO ACTION ACCENT ACTION BUTTON */}
              <Link
                href="#"
                className="bg-primary group whitespace-nowrap font-Lato hover:bg-white text-white hover:text-primary 
  text-xs min-[1150px]:text-sm font-normal px-2 lg:px-3 py-2 rounded-full flex items-center gap-2 transition-all ml-[1.6rem] border border-primary"
              >
                Free Smile Consultation{" "}
                <span className="font-bold">
                      <Image
                        src="/home/button-arrow-sec.svg"
                        alt="Arrow"
                        width={12}
                        height={12}
                        className="object-contain w-[12] h-[12]  invert group-hover:invert-0 transition-all duration-300 "/>
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </header>
      {isScrolled && (
        <header className="w-full animate-slideDown bg-white fixed top-0 z-50 lg:shadow-2xl select-none">
          {/* BACKGROUND STRIP ENGINE */}
          {/* <div className="absolute top-0 left-[25%] lg:left-[30%] xl:left-[39%] right-0 h-10 bg-secondry z-0 hidden md:block" /> */}

          {/* Main Content Layout Container */}
          <Container className=" w-full grid grid-cols-2 md:grid-cols-12 items-center relative z-10">
            {/* LEFT COLUMN SIDE: Company Identity Logo */}
            <div className="col-span-1 md:col-span-2 flex items-center justify-end h-24">
              <Link href="/" className="flex items-center">
                <Image
                  src="/home/main-logo-black.webp"
                  alt="Start Smiling Logo"
                  width={180}
                  height={60}
                  className="object-contain w-45 h-auto -mt-2.5"
                  priority
                />
              </Link>
            </div>

            {/* RIGHT COLUMN SIDE: Dual Stack Navigation Columns */}
            <div className="col-span-1 md:col-span-10 flex flex-col justify-center w-full h-24">

              {/* LOWER SECTION PANEL: Main Router Directory Links */}
              <div className="h-12 flex items-center justify-center gap-1  xl:gap-6 bg-white pl-4">
                <nav className="hidden md:flex items-center gap-5 lg:gap-7 xl:gap-11 text-xs min-[1150px]:text-sm font-Lato">
                  {NAV_LINKS.map((item, index) => {
                    // Scenario A: Item has dropdown children
                    if (item.dropdownItems) {
                      return (
                        <div
                          key={index}
                          className="relative group py-4 cursor-pointer"
                        >
                          <span className=" font-medium text-primary flex items-center gap-1 xl:gap-2 whitespace-nowrap">
                            {item.label}
                            {/* <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" /> */}

                            <Image
                              src="/home/dropdown.svg"
                              alt="Start Smiling Logo"
                              width={10}
                              height={10}
                              className="object-contain pt-[1px] pl-[1px] h-[10px] w-[10px]"
                              priority
                            />
                          </span>

                          {/* Simulated Menu Dropdown Popover box */}
                          <div className="absolute top-full left-0  text-white w-48 bg-tertiary shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col z-50">
                            {item.dropdownItems.map((dropdownItem, dIndex) => (
                              <Link
                                key={dIndex}
                                href={dropdownItem.href}
                                className="px-4 py-2 text-xs  hover:bg-secondry text-white "
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
                        href={item.href || "#"}
                        className={`font-medium  text-xs min-[1150px]:text-sm whitespace-nowrap transition- transition-colors ease .3s
                          ${item.label === 'Home' ? 'text-secondry':'text-primary' }
                          `}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>

                {/* CALL TO ACTION ACCENT ACTION BUTTON */}
                <Link
                  href="#"
                  className="bg-primary hidden  text-xs min-[1150px]:text-sm lg:flex whitespace-nowrap hover:bg-white  text-white hover:text-primary font-normal px-2 lg:px-3 py-2 rounded-full justify-center  items-center gap-2 transition-all ml-4 min-[1150px]:ml-[1.6rem] border border-primary"
                >
                  Free Smile Consultation{" "}
                  <span className="font-bold">
                       <Image
                        src="/home/button-arrow-sec.svg"
                        alt="Arrow"
                        width={12}
                        height={12}
                        className="object-contain w-[12] h-[12] invert group-hover:invert-0 transition-all duration-300 "/>
                  </span>
                </Link>
              </div>
            </div>
          </Container>
        </header>
      )}
      {/* <Header2/> */}
      <header
        className={`lg:hidden w-full bg-white z-50 shadow-2xl ${
          isScrolled ? "fixed top-0 left-0 shadow-2xl" : "relative"
        }`}
      >
        <Container className="flex items-center justify-between px-4 h-20">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/home/main-logo-black.webp"
              alt="Logo"
              width={160}
              height={60}
              className="w-[100%] w-auto h-auto -mt-2.5"
              priority
            />
          </Link>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex flex-col gap-1"
          >
            <span className="w-7 h-1 bg-secondry rounded"></span>
            <span className="w-7 h-1 bg-secondry rounded"></span>
            <span className="w-7 h-1 bg-secondry rounded"></span>
          </button>
        </Container>
      </header>

      {/* modal */}
      <div
        className={`fixed top-0  left-0 w-full h-screen bg-secondry z-[999] transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6">
          <Image
            src="/home/main-logo-black.webp"
            alt="Logo"
            width={160}
            height={60}
            className="object-contain w-auto h-auto"
          />

          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-3xl font-light"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col px-6 py-8 gap-8">
          {NAV_LINKS.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-between">
                <Link
                  href={item.href || "#"}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-sm font-normal"
                >
                  {item.label}
                </Link>

                {item.dropdownItems && (
                  <button onClick={() => toggleDropdown(index)}>
                    <Image
                      src="/home/dropdown.svg"
                      alt="dropdown"
                      width={12}
                      height={12}
                      className={`w-3 h-3 transition-transform duration-300 ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* Dropdown */}
              {openDropdown === index && item.dropdownItems && (
                <div className="mt-3 ml-4 flex flex-col gap-2">
                  {item.dropdownItems.map((dropdownItem, dIndex) => (
                    <Link
                      key={dIndex}
                      href={dropdownItem.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white text-sm"
                    >
                      {dropdownItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="#"
            className="bg-primary text-white ml-4 min-[1150px]:ml-[1.6rem]  text-xs min-[1150px]:text-sm py-4 px-6 flex items-center justify-center gap-2 rounded-full text-center font-normal"
          >
            Free Smile Consultation {""}               <span className="font-bold">
                      <Image
                        src="/home/button-arrow-sec.svg"
                        alt="Arrow"
                        width={12}
                        height={12}
                        className="object-contain w-[12] h-[12]  invert group-hover:invert-0 transition-all duration-300 "/>
                </span>
          </Link>

          <div className="flex gap-4 pt-4">
            <Image
              src="/home/facebook-header.svg"
              alt="Facebook"
              width={30}
              height={30}
            />

            <Image
              src="/home/insta-header21.svg"
              alt="Instagram"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>

    </>

  );
}
