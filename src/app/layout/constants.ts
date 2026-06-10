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
    label: 'Smiles We have Made',
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