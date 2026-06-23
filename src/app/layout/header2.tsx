import React from 'react'
import Container from './container';
import Image from 'next/image';
import Link from 'next/link';

export default function Header2() {
  
  const contactInfo = [
  {
    title: "Call Us Now:",
    value: "01908 371 948",
    icon: "/phone-white.svg",
  },
  {
    title: "Email:",
    value: "info@silveroaksdental.com",
    icon: "/phone-white.svg",
  },
  {
    title: "Find Us:",
    value: "68 Victoria Road, Milton Keynes, MK2 2NX",
    icon: "/phone-white.svg",
  },
];
const navLinks = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "ABOUT US",
    href: "/about-us",
  },
  {
    label: "TREATMENTS",
    href: "/treatments",
  },
  {
    label: "SMILE GALLERY",
    href: "/smile-gallery",
  },
  {
    label: "FEES & PLANS",
    href: "/fees-plans",
  },
  {
    label: "TESTIMONIALS",
    href: "/testimonials",
  },
  {
    label: "OPG/CBCT REFERRAL",
    href: "/opg-cbct-referral",
  },
  {
    label: "CONTACT US",
    href: "/contact-us",
  },
];
 const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: "/facebook.svg",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: "/instagram.svg",
  },
  {
    name: "Email",
    href: "mailto:info@silveroaksdental.com",
    icon: "/mail.svg",
  },
];
  return (
    <>
    <div className="bg-[#3e8b8b] fixed top-0 left-0 w-full z-50">
     <Container className='max-w-325'>
      <div className='flex justify-between items-center pt-5.5 pb-8'>
           <div className='flex justify-between items-center  lg:shrink-0 w-[30%]'>
               <div className=' mr-2'>
                <Image src="/silver-logo.webp" alt="Logo" 
                quality={100}
                width={60} height={60} className=' mr-2 w-50 h-auto'/>
               </div>
               <div>
                <Image src="/invis-logo.webp" quality={100} alt="Logo" width={60} height={60} className='w-50 h-auto'/>
               </div>
           </div>
           <div className='flex gap-8 items-center justify-end w-[70%]'>
            {contactInfo.map((info, index) => (
              <div key={index} className='flex gap-2 items-center'>
                <div className='w-8 h-8 bg-green rounded-md flex justify-center items-center bg-[#7a9f3d]'>
                  <Image src={info.icon} alt={info.title} width={15} height={15} />
                </div>
                <div className='flex text-sm leading-tight flex-col text-white '>
                  <p className=' font-semibold'>{info.title}</p>
                  <p className='text-xs font-normal opacity-90'>{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </div>
    <div className=" fixed top-23 left-0 w-full z-52">
    <Container>
      <div className='bg-[#7a9f3d] '>
        <div className='flex justify-between items-center'>
          <nav className="flex">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-6 text-sm py-4"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-4 px-6">
  {socialLinks.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      target="_blank"
    >
      <Image
        src={item.icon}
        alt={item.name}
        width={24}
        height={24}
      />
    </Link>
  ))}
</div>
        </div>
      </div>
    </Container>
    </div>
    </>

  )
}
