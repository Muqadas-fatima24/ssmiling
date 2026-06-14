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
      className={`banner-btn inline-flex items-center ${className}`}
    >
      <span className="banner-btn-bg"></span>

      <span
        className={`banner-btn-text font-Lato text-lg lg:text-base ${textClassName}`}
      >
        {text}
      </span>

      <div className={`banner-btn-arrow ${arrowClassName}`}>
        <Image
          src="/home/button-arrow-primary.svg"
          alt="Arrow"
          width={18}
          height={18}
          className="object-contain w-auto h-auto"
        />
      </div>
    </Link>
  );
}