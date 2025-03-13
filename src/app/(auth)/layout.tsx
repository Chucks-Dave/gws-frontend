"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/GRADUATEEDIT.png",
    text: "All-in-one platform to Find jobs and , Connect With Business Owners",
  },
  {
    src: "/GRADUATEEDIT2.png",
    text: "As a Business Owner, Connect With Competent Graduates For Your Jobs",
  },
  {
    src: "/GRADUATEEDIT.png",
    text: "Work dey",
  },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length); // Loop through slides
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, []);
  return (
    <div className="flex overflow-y-hidden">
      <div className="w-1/2 relative h-screen">
        {/* <Image
          src="/image 7.png"
          width={720}
          height={720}
          alt=""
          className=" h-full object-cover"
        /> */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 h-full w-full transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Image */}
            <Image
              src={slide.src}
              alt={`Carousel image ${index}`}
              height={1024}
              width={1024}
              quality={100}
              className="h-full w-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#05044F]/10 z-20"></div>
            {/* Text */}
            <div className="absolute inset-0 z-30 flex items-end justify-center text-center px-6 pb-11">
              <p className="text-white md:text-2xl lg:text-[32px] lg:leading-snug font-bold max-w-[600px] playfair">
                {slide.text}
              </p>
            </div>
          </div>
        ))}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`h-[10px] rounded-full cursor-pointer transition-all duration-1000 ${
                currentIndex === index ? "bg-white w-[34px]" : "bg-gws w-[10px]"
              }`}
            ></span>
          ))}
        </div>
      </div>

      <div
        className="py-3 px-8 space-y-1 overflow-y-scroll h-screen custom-scrollbar w-1/2
      "
      >
        <div className="flex items-end  gap-6 ">
          <Image
            src="/GWSLOGO.jpg"
            alt="GWSLOGO.jpg"
            height={80}
            width={80}
            className="rounded-[10px] flex items-end justify-end"
            loading="lazy"
          />
          <h1 className="font-semibold text-[2.75rem] playfair leading-[3.25rem] text-peach text-center">
            Welcome to Gws
          </h1>
        </div>

        <div className="flex flex-col gap-2 py-8 overflow-hidden  ">
          {/* <div className="justify-center items-center flex gap-5">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="registrationType"
                value="graduate"
                onChange={() => handleChange("graduate")}
                className="accent-blue-600"
              />
              Register As A Graduate
            </label>
            <label className="flex items-center gap-2 ">
              <input
                type="radio"
                name="registrationType"
                value="businessOwner"
                onChange={() => handleChange("businessOwner")}
                className="accent-green-600"
              />
              Register As A Business Owner
            </label>
          </div> */}
          {children}
        </div>

        {/* <div className="mt-4 ">
          {selectedOption === "graduate" && <GraduateForm />}
          {selectedOption === "businessOwner" && <BussinessOwnerForm />}
        </div> */}
      </div>
    </div>
  );
}
