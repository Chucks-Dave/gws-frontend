import React from "react";
import PhoneIcon from "../../../../icons/PhoneIcon";
import LocationIcon from "../../../../icons/LocationIcon";
import AIcon from "../../../../icons/AIcon";

const page = () => {
  return (
    <div className="space-y-4  ">
      <div className="w-full relative bg-home-section bg-cover bg-center ">
        <div className="w-1/2 bg-BlueLight rounded-r-full  py-16 relative px-14 flex flex-col gap-3">
          <h1 className="text-crimson  text-[1.875rem] font-normal playfair leading-[1.875rem] Playfair">
            Contact Us
          </h1>
          <p className="font-normal text-[1.5rem] leading-[2rem] text-graydark py-2 roboto">
            We are here to help you and your loved ones with personalized,
            professional nursing care. Contact us today to learn more about our
            services or book an appointment.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 px-5 py-5 place-items-center">
        <div className="space-y-4">
          <p className="text-Blue font-normal text-[2rem] playfair leading-[2.5rem]">
            Get in Touch with Us
          </p>
          <p className="text-start leading-[2rem] text-[1.5rem] text-gray5 roboto">
            If you have any questions or need more information,
            <br /> please fill out the form, and a member of our team <br />
            will reach out to you shortly.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <ContactUs
              icon={<PhoneIcon />}
              text="+2349041977477"
              label="Phone"
            />
            <ContactUs
              icon={<LocationIcon />}
              text="Benin City, Nigeria"
              label="Address"
            />
            <ContactUs
              icon={<AIcon />}
              text="graduateworkforce@gmail.com"
              label="Email"
            />
          </div>
        </div>
        <div className="bg-BlueLight py-8 px-6 rounded-[8px] flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <CustomInput label="Email" placeholder="Enter E-mail" />
            <CustomInput label="name" placeholder="Enter Name" />
            <CustomInput label="PhoneNumber" placeholder="Enter Phone-Number" />
          </div>
          <textarea
            placeholder="Description"
            className="  w-full rounded-[0.5625rem] px-3  py-8 placeholder:text-[0.825rem]  bg-white placeholder:leading-[0.9375rem] placeholder:text-black focus:outline-none"
          ></textarea>
          <button className="text-[1.5rem] leading-[1.5rem] text-white roboto bg-Blue w-[7.25rem] py-2 rounded-[6px]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;

type prop = {
  icon: React.ReactNode;
  text: string;
  label: string;
};

const ContactUs = ({ icon, label, text }: prop) => {
  return (
    <div className=" flex flex-row  gap-2">
      {icon}
      <div className="space-y-1">
        <p className="text-Blue font-bold text-[1.125rem] leading-[1.5rem] roboto">
          {label}
        </p>
        <p className="text-gray5 text-[1rem] leading-[1.5rem] roboto">{text}</p>
      </div>
    </div>
  );
};

type props = {
  label: string;
  value?: string;
  placeholder: string;
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomInput = ({ label, value, onInputChange, placeholder }: props) => {
  return (
    <div className="flex  flex-col gap-2">
      <label
        className={` text-pretty  text-[1rem] font-normal capitalize text-darkpurple roboto`}
      >
        {label}
      </label>
      <input
        className={`  w-full rounded-[0.5625rem] px-3  py-3 placeholder:text-[0.825rem]  roboto bg-white placeholder:leading-[0.9375rem] placeholder:text-black focus:outline-none`}
        type="text"
        value={value}
        onChange={onInputChange}
        placeholder={placeholder}
      />
    </div>
  );
};
