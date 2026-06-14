import Link from "next/link";
import Container from "@/app/layout/container";
import Button from "@/app/layout/button";

interface BannerProps {
  data: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    image: string;
  };
}

export default function Banner({ data }: BannerProps) {
  return (
    <section
      className="relative min-h-[68vh] mt-[2px] flex items-center text-white bg-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(18,31,57,0.6), rgba(18,31,57,0.8)), url(${data.image})`,
      }}
    >
      <Container>
        <div>
          <h1 className="font-primary sm:text-[32px] font-playfair text-[28px] md:text-[40px] leading-[1.3] lg:text-[55px] md:leading-[1.1] font-bold">
            {data.title}
          </h1>
          <p className="mt-6 max-w-[1150px] font-Lato text-lg lg:text-base leading-[1.6]">
            {data.description}
          </p>


{/* <Link
  href={data.buttonLink}
  className="banner-btn mt-8 inline-flex items-center"
>
  <span className="banner-btn-bg"></span>

  <span className="banner-btn-text font-Lato text-lg lg:text-base">
    {data.buttonText}
  </span>

  <div className="banner-btn-arrow">
    <Image
      src="/home/button-arrow-primary.svg"
      alt="Arrow"
      width={18}
      height={18}
      className="object-contain h-auto"/>
  </div>
</Link> */}
<Button
  href={data.buttonLink}
  text={data.buttonText}
  className="mt-6"
/>

        </div>
      </Container>
    </section>
  );
}