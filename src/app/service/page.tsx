"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ConsultIcons from "../../../icons/ConsultIcons";
import EnterpriseIcon from "../../../icons/EnterpriseIcon";
import GraduateIcon from "../../../icons/GraduateIcon";

import DotIcon from "../../../icons/DotIcon";
// import NurseIcon from "../../../icons/NurseIcon";
import ServiceHeader from "../../../components/ServiceHeader";

const page = () => {
  return (
    <div className="space-y-6">
      <div className="w-full relative bg-home-graduate bg-cover bg-center h-[600px]">
        <div className="w-1/2 bg-BlueLight h-[600px] rounded-r-full  py-10 relative px-8 flex flex-col gap-3">
          <h1 className="text-crimson  text-[1.775rem] font-normal playfair leading-[1.875rem] Playfair">
            GWS connects qualified graduates <br /> with Small and Medium
            Enterprises
            <br /> (SMEs) for training and employment opportunities. We provide
            the following services
          </h1>
          <p className="font-normal text-[1.3rem] leading-[2rem] text-graydark py-2 roboto">
            {/* Training programs for graduates Job matching and placement for
            graduates in SMEs Continuous mentorship and support for graduates
            Recruitment support for business owners to find skilled graduates */}
            At GWS, we’re transforming the way graduates and SMEs connect in
            Nigeria. Our mission is simple: bridge the gap between education and
            meaningful employment. Through our unique LEAD model Learn, Earn,
            Apply, Develop we provide graduates with the practical skills and
            job placements needed to succeed, while equipping SMEs with skilled
            talent who can make an impact from day one
          </p>
        </div>
      </div>
      <div className="px-5 flex justify-center items-center row-start-3 gap-9 py-3 relative bottom-16">
        <ServiceHeader
          icon={<GraduateIcon />}
          header="Graduate Training and Placement"
          text="We offer hands-on training and direct placement for graduates,
            preparing them to succeed in SMEs across Nigeria"
        />
        <ServiceHeader
          icon={<EnterpriseIcon />}
          header="SME Staffing Solutions"
          text="Our graduates come equipped with essential business skills, tailored to meet the unique needs of small and medium-sized enterprises."
        />
        <ServiceHeader
          icon={<ConsultIcons />}
          header="Consulting and Support"
          text="GWS also provides business consulting services and training for SME staff to optimize operations and staffing solutions."
        />
      </div>
      <div className="px-5 space-y-4 py-10">
        <h1 className="playfair text-[2rem] leading-[2.5rem] text-Blue font-normal ">
          Comprehensive List of the Services We Provide:
        </h1>

        <div className="grid grid-cols-2 relative ">
          <div className="">
            <p className="text-gray5 font-normal text-[1.0rem] leading-[1.5rem] roboto">
              At Graduate WorkForce Solutions, we provide the following
              services;
            </p>
            <ServiceText text="Graduate Training and Placement" />
            <ServiceText text="SME Staffing Solutions" />
            <ServiceText text="Consulting and Support" />
          </div>
          {/* <div className="relative bottom-14">
            <NurseIcon />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default page;

export const Nav = () => {
  return (
    <>
      <div className="flex justify-between px-8 py-3 items-center">
        <Image
          src="/GWSLOGO.jpg"
          alt="GWSLOGO.jpg"
          height={80}
          width={80}
          className="rounded-[10px]"
          loading="lazy"
        />
        <div className="row-start-4 flex items-center gap-3">
          <NavLink href="/" label="Home" />

          <NavLink href="/service" label="Our-services" />
          <NavLink href="#" label="Courses" />
          <NavLink href="/businessowner" label="Hire-A-Staff" />
          <NavLink href="/service/contact-us" label="Contact-us" />
          {/* <NavLink href="/businessowner" label="Register_business" /> */}
          <NavLink href="/graduate" label="signup " />
          <NavLink href="/login" label="login" />
        </div>
      </div>
    </>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, className }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`playfair text-[1.25rem] leading-[1.5625rem] text-crimson ${
        isActive ? "border-b-2 border-gws" : ""
      } ${className}`}
    >
      {label}
    </Link>
  );
};

type prop = {
  text: string;
};

const ServiceText = ({ text }: prop) => {
  return (
    <div className="space-x-2  flex items-center">
      <DotIcon />
      <p className="roboto text-gray5 text-[1rem] leading-[1.5rem] font-normal">
        {text}
      </p>
    </div>
  );
};
