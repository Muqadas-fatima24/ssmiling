// constants.ts

export interface DropdownItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href?: string; // Optional if it has a dropdown instead
  dropdownItems?: DropdownItem[];
  textColorClass?: string; // Optional override for specific link colors (like Home)
}

export const NAV_LINKS: NavItem[] = [
  {
    label: 'Home',
    href: '#',
    textColorClass: 'text-orange-800 hover:text-black',
  },
  {
    label: 'About Us',
    dropdownItems: [
      { label: 'Our Team', href: '#' },
      { label: 'Our Clinic', href: '#' },
    ],
  },
  {
    label: "Smiles We've Made",
    dropdownItems: [
      { label: 'Gallery', href: '#' },
      { label: 'Testimonials', href: '#' },
    ],
  },
  {
    label: 'General Dentistry',
    dropdownItems: [
      { label: 'Checkups', href: '#' },
      { label: 'Hygienist', href: '#' },
    ],
  },
  {
    label: 'Cosmetic Dentistry',
    dropdownItems: [
      { label: 'Teeth Whitening', href: '#' },
      { label: 'Veneers', href: '#' },
    ],
  },
  {
    label: 'Contact Us',
    href: '#',
  },
];


// banner 
export const HOME_BANNER = {
  title: "Welcome To Start Smiling Dental Practice",
  description:
    "We provide gentle, high-quality dental care in a calm and friendly environment. Our experienced team focuses on your comfort at every step, helping you care for a healthy, confident smile for the long term.",
  buttonText: "Book Online",
  buttonLink: "#",
  image: "/home/banner.webp",
};


// 3rd part

// constants.ts

export interface AwardSectionType {
  heading: string;
  description: string[];
  buttonText: string;
  buttonLink: string;
  images: {
    large: string;
    top: string;
    bottom: string;
  };
}

export const AWARD_SECTION: AwardSectionType = {
  heading: "Award-Winning Dentistry With A Personal Touch",
  description: [
    "At Start Smiling, you can feel supported by our experienced team. Every member of the team will do their utmost to make your experience feel calm, clear and reassuring.",
    "Your safety, wellbeing and comfort are always our priority, and we strive to deliver a high standard of patient care and service.",
  ],
  buttonText: "Book Online",
  buttonLink: "#",
  images: {
    large: "/home/sec.webp",
    top: "/home/sec2.webp",
    bottom: "/home/sec3.webp",
  },
};


// ...last

// constants/treatmentsData.js
export const TREATMENTS_DATA = [
  // General Dentistry Treatments (From Image)
  { id: 1, name: 'Teeth Straightening', icon: '🦷', category: 'general', link: '#' },
  { id: 2, name: 'NiTime Aligners', icon: '✨', category: 'general', link: '#' },
  { id: 3, name: 'Dental Implants', icon: '🔩', category: 'general', link: '#' },
  { id: 4, name: 'SmileFast', icon: '⭐', category: 'general', link: '#' },
  { id: 5, name: 'Porcelain and Composite Veneers', icon: '💎', category: 'general', link: '#' },
  { id: 6, name: 'Teeth Whitening', icon: '💡', category: 'general', link: '#' },
  { id: 7, name: 'Crowns and Bridges', icon: '👑', category: 'general', link: '#' },
  { id: 8, name: 'Dentures', icon: '👑', category: 'general', link: '#' },
  { id: 9, name: 'Gum Contouring', icon: '🌿', category: 'general', link: '#' },

  // Cosmetic Dentistry Dummy Treatments
  { id: 10, name: 'Composite Bonding', icon: '✨', category: 'cosmetic', link: '#' },
  { id: 11, name: 'Laser Teeth Bleaching', icon: '⚡', category: 'cosmetic', link: '#' },
  { id: 12, name: 'Invisalign Clear Braces', icon: '💎', category: 'cosmetic', link: '#' },
  { id: 13, name: 'Hollywood Smile Makeover', icon: '🌟', category: 'cosmetic', link: '#' },
  { id: 14, name: 'Gum Bleaching', icon: '🌸', category: 'cosmetic', link: '#' },
  { id: 15, name: 'Tooth Contouring', icon: '📐', category: 'cosmetic', link: '#' }
];


// testimonial data 


// data
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Michael Seymour",
    role: "Patient",
    image:  "/home/testimonials-1.png", // Replace with your actual asset path
    rating: 5,
    text: "I had some excellent treatment at Start smiling and can’t thank the team enough. The care and kindness shown by everyone really stood out and put me at complete ease throughout the entire process.I have been using start smiling for the last 4 years, I can highly recommend their services. I had 3 implants fitted, and also some cosmetic work done to perfection.I have been using start smiling for the last 4 years, I can highly ",
  },
  {
    id: 2,
    name: "John Robinson",
    role: "Patient",
    image:  "/home/testimonials-1.png",
    rating: 5,
    text: "I had some excellent treatment at Start smiling and can’t thank the team enough. The care and kindness shown by everyone really stood out and put me at complete ease throughout the entire process.I have been using start smiling for the last 4 years, I can highly recommend their services. I had 3 implants fitted, and also some cosmetic work done to perfection.I have been using start smiling for the last 4 years, I can highly  ",
  },
    {
    id: 3,
    name: "Michael Seymour",
    role: "Patient",
    image:  "/home/testimonials-1.png",// Replace with your actual asset path
    rating: 5,
    text: "I had some excellent treatment at Start smiling and can’t thank the team enough. The care and kindness shown by everyone really stood out and put me at complete ease throughout the entire process.I have been using start smiling for the last 4 years, I can highly recommend their services. I had 3 implants fitted, and also some cosmetic work done to perfection.I have been using start smiling for the last 4 years. I can highly. ",
  },
  {
    id: 4,
    name: "John Robinson",
    role: "Patient",
    image: "/home/testimonials-1.png",
    rating: 5,
    text: "I had some excellent treatment at Start smiling and can’t thank the team enough. The care and kindness shown by everyone really stood out and put me at complete ease throughout the entire process.I have been using start smiling for the last 4 years, I can highly recommend their services. I had 3 implants fitted, and also some cosmetic work done to perfection.I have been using start smiling for the last 4 years.I can highly. yex.",
  },
  // Add more items here...
];