import Image from "next/image";
import Container from "@/app/layout/container";
import Button from "@/app/layout/button";
import { AwardSectionType } from "@/app/layout/constants";

interface AwardProps {
  data: AwardSectionType;
}

export default function Award({ data }: AwardProps) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center"> 

          {/* LEFT SIDE IMAGES */}
          <div className="flex justify-center">
            <div className="grid grid-cols-[1fr_1fr] gap-4">

              {/* Tall Image */}
              <div className="row-span-2 mt-6 mb-6">
                <Image
                  src={data.images.large}
                  alt=""
                  width={550}
                  height={700}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              {/* Top Right */}
              <Image
                src={data.images.top}
                alt=""
                width={350}
                height={300}
                className="w-full object-cover rounded-md"
              />

              {/* Bottom Right */}
              <Image
                src={data.images.bottom}
                alt=""
                width={350}
                height={300}
                className="w-full object-cover rounded-md"
              />
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="lg:max-w-[620px]">
            <h2 className=" text-primary font-playfair text-[24px] sm:text-[28px] md:text-[34px] lg:text-[42px] font-bold leading-[1.3] md:leading-[1.2]">
              {data.heading}
            </h2>

            <div className="mt-6 space-y-5">
              {data.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-Lato text-[#25314F] text-base leading-[1.8]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <Button
              href={data.buttonLink}
              text={data.buttonText}
              className="mt-6"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}