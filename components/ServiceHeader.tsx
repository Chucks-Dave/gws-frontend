import React from "react";
type ServiceHeaderProps = {
  icon: React.ReactNode;
  header: string;
  text: string;
};

const ServiceHeader = ({ icon, header, text }: ServiceHeaderProps) => {
  return (
    <div className="w-[25rem]  bg-white drop-shadow-xl rounded-[10px] px-6 py-6 space-y-4">
      <div className="flex justify-center items-center">{icon}</div>
      <h1 className="roboto font-bold leading-[2.75rem] text-[2.25rem] text-black text-center">
        {header}
      </h1>
      <p className="playfair text-crimson text-[1.25rem] leading-[1.75rem] text-center">
        {text}
      </p>
    </div>
  );
};
export default ServiceHeader;
