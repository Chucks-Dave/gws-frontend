import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TwitterIcon from "../icons/TwitterIcon";

const Footer = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <div className="">
      <footer className="bg-Blue w-full px-8 py-6 space-y-4">
        <div className="justify-between flex  ">
          <div className="space-y-3">
            <p className="playfair text-white leading-[2.5rem] font-semibold text-[1.5rem]">
              GWS
            </p>
            <p className="roboto leading-[24px] text-[16px] text-white">
              Graduate Workforce Solution (GWS) <br />
              connects skilled graduates with SMEs,
              <br /> creating impactful careers and driving business
              <br /> growth.
            </p>
          </div>
          {/* <div className="w-px h-[21.875rem] bg-white border-white border" /> */}
          <div className="space-y-3">
            <Header text="Quick Links" />
            <HeaderText text="About Us" />
            <HeaderText text="Our Services" />
            <HeaderText text="Hire A Staff" />
            <HeaderText text="Contact Us" />
            <HeaderText text="Training" />
            <HeaderText text="Our Courses" />
          </div>
          <div className="space-y-3">
            <Header text="Help" />
            <HeaderText text="Contact Us" />
            <HeaderText text="Privacy Policy" />
            <HeaderText text="Terms and Condition" />
          </div>
        </div>
        <hr className="w-full border-white border bg-white" />
        <div className="flex justify-between">
          <p className="text-white font-normal roboto text-[14px] leading-[20px]">
            {fullYear} <strong>&copy; </strong> Graduate Workforce Solution. All
            rights reserved.
          </p>
          <div className="flex flex-row items-center gap-3">
            <p className="text-white font-normal roboto text-[14px] leading-[20px]">
              Follow Us :
            </p>
            <div className="grid grid-cols-3 gap-3">
              <Icons icon={<InstagramIcon href="#" />} />
              {/* <Icons icon={<LinkedlnIcon href="#" />} /> */}
              <Icons icon={<FacebookIcon href="#" />} />
              <Icons icon={<TwitterIcon href="#" />} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

type prop = {
  text: string;
};

export const Header = ({ text }: prop) => {
  return (
    <h4 className="roboto font-bold text-white text-[24px] leading-[32px]">
      {text}
    </h4>
  );
};

type props = {
  text: string;
};

export const HeaderText = ({ text }: props) => {
  return (
    <p className="roboto font-normal text-white text-[16px] leading-[24px]">
      {text}
    </p>
  );
};

type iconprop = {
  icon: React.ReactNode;
};

const Icons = ({ icon }: iconprop) => {
  return (
    <div className="size-[40px] flex justify-center items-center rounded-full bg-transparent border-2 border-white">
      {icon}
    </div>
  );
};
