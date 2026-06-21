import Link from "next/link";
import Image from "next/image";

interface ButtonProps {
  href: string;
  text: string;
  className?: string;
  textClassName?: string;
  arrowClassName?: string;
}

export default function Button({
  href,
  text,
  className = "",
  textClassName = "",
  arrowClassName = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`banner-btn1 inline-flex items-center ${className}`}
    >
      <span className="banner-btn1-bg"></span>

      <span
        className={`banner-btn1-text font-Lato text-lg lg:text-base ${textClassName}`}
      >
        {text}
      </span>

      <div className={`banner-btn1-arrow ${arrowClassName}`}>
        <Image
          src="/home/button-arrow-sec.svg"
          alt="Arrow"
          width={18}
          height={18}
          className="object-contain w-auto h-auto"
        />
      </div>
    </Link>
  );
}