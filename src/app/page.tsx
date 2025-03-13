// import Image from "next/image";
import Topbar from "../../components/Topbar";
import React from "react";
import GraduateIcon from "../../icons/GraduateIcon";
import EnterpriseIcon from "../../icons/EnterpriseIcon";
import ConsultIcons from "../../icons/ConsultIcons";

import DoubleQuote from "../../icons/DoubleIcons";
import QuoteIcon from "../../icons/QuoteIcon";
import Footer from "../../components/Footer";
import { Nav } from "./service/page";
import ServiceHeader from "../../components/ServiceHeader";

export default function Home() {
  return (
    <div className="">
      <Topbar />
      <Nav />
      <main className="">
        <div className="w-full bg-cam px-5 py-12 flex flex-col gap-4 bg-home-graduate bg-center bg-cover relative h-[100vh]">
          <h1 className="font-semibold text-[2.75rem] playfair leading-[3.25rem] text-Blue">
            Empowering Graduates, Elevating SMEs:
            <br /> Bridging the Skills Gap in Nigeria
          </h1>
          <p className="font-normal roboto leading-[2rem] text-[1.5rem] text-crimson">
            Graduate Workforce Solution (GWS) connects skilled graduates with
            SMEs,
            <br /> creating impactful careers and driving business growth.
          </p>
          {/* <p className="font-normal roboto leading-[2rem] text-[1.25rem]">
            At GWS, we’re transforming the way graduates and SMEs connect in
            Nigeria.
            <br /> Our mission is simple: bridge the gap between education and
            meaningful employment.
            <br /> Through our unique LEAD model Learn, Earn, Apply, Develop we
            provide graduates with
            <br /> the practical skills and job placements needed to succeed,
            while equipping SMEs with
            <br /> skilled talent who can make an impact from day one
          </p> */}
          <div className="row-start-2 flex items-center gap-3 pt-10">
            <button className="border playfair text-[0.75rem] leading-[1.25rem] border-Blue w-[200px] py-3 rounded-[10px] px-3 font-medium  ">
              Explore Courses
            </button>
            <button className="playfair text-[0.75rem] leading-[1.25rem] bg-Blue w-[200px] py-3 rounded-[10px] text-white px-3 font-medium  ">
              Hire a Graduate
            </button>
          </div>
        </div>
      </main>
      <div className="px-5 flex justify-center items-center drop-shadow-xl row-start-3 gap-9 relative bottom-12">
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
      <div>
        <h5 className="playfair py-3 text-Blue font-normal text-center  text-[36px] leading-[44px]">
          Testimonials
        </h5>
        <div className="grid grid-cols-3   px-5  place-items-center py-5">
          <Testimonial
            text="The care I received from Trusted Companion made all the difference in my recovery. The nurses were not only professional but also kind and attentive, making me feel comfortable and cared for every step of the way."
            name="Jane M."
            title="patient"
          />
          <Testimonial
            text="The care I received from Trusted Companion made all the difference in my recovery. The nurses were not only professional but also kind and attentive, making me feel comfortable and cared for every step of the way."
            name="Jane M."
            title="patient"
          />
          <Testimonial
            text="The care I received from Trusted Companion made all the difference in my recovery. The nurses were not only professional but also kind and attentive, making me feel comfortable and cared for every step of the way."
            name="Jane M."
            title="patient"
          />
        </div>
      </div>

      <div className="bg-BlueLight w-full px-10 py-3">
        <h3 className=" playfair py-3 text-Blue font-normal text-center  text-[36px] leading-[44px]">
          {" "}
          About Us
        </h3>
        <div className="flex justify-between gap-5 px-8">
          <div className="space-y-3">
            <div className="space-y-2">
              <p className="text-crimson font-normal playfair leading-[2.5rem] text-[1.5rem]">
                Our Mission
              </p>
              <p className="roboto font-normal text-[18px] leading-[24px] text-black">
                At Graduate Workforce Solution,our mission <br /> is to bridge
                the gap between education and <br /> employment, creating
                impactful careers for <br /> graduates and providing SMEs with
                the skilled <br /> workforce they need.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-crimson font-normal playfair leading-[2rem] text-[1.5rem]">
                Our Vision
              </p>
              <p className="roboto font-normal text-[18px] leading-[24px] text-black">
                Our vision is a Nigeria where every graduate is equipped to
                succeed, and every SME has the talent it needs to grow.
              </p>
            </div>
          </div>
          <div className="w-px h-[21.875rem]  border-Blue border" />
          <div className="space-y-2">
            <p className="text-crimson font-normal playfair leading-[2.5rem] text-[1.5rem]">
              Founder’s Story
            </p>
            <p className="roboto font-normal text-[18px] leading-[24px] text-black">
              Graduate Workforce Solution was founded by Emeka Ezeifeka,
              <br /> a pharmacist, entrepreneur, and business coach. Driven by
              <br /> a desire to tackle graduate unemployment and SME staffing
              challenges,
              <br /> Emeka created GWS to empower graduates with the skills they
              need and connect them with SMEs where they can make a difference.
            </p>
          </div>
        </div>
      </div>

      <div className="border-white">
        <Footer />
      </div>
    </div>
  );
}

type props = {
  text: string;
  name: string;
  title: string;
};

const Testimonial = ({ text, name, title }: props) => {
  return (
    <>
      <div className="w-[18.75rem] flex flex-col bg-medi-Rectangle h-[18.75rem]  gap-4 rounded-[30px] py-6 drop-shadow-lg px-5">
        <QuoteIcon />
        <div className="flex justify-center items-center px-5">
          <p className="text-black roboto font-normal leading-[20px] text-[14px] text-balance">
            {text}
          </p>
        </div>
        <div className="flex justify-end relative top-6">
          <DoubleQuote />
        </div>
        <div className="relative flex flex-col  ">
          <p className="absolute left-8 top-2 font-normal  text-[16px] leading-[24px] roboto text-Blue">
            {name}
          </p>
          <p className="absolute top-6 left-8 font-normal text-[16px] leading-[24px] roboto text-crimson">
            {title}
          </p>
        </div>
      </div>
    </>
  );
};
