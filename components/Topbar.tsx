import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import MailIcon from "../icons/MailIcon";
import MarkerIcon from "../icons/MarkerIcon";
import TwitterIcon from "../icons/TwitterIcon";

const Topbar = () => {
  return (
    <div className="bg-Blue flex py-3 px-12 justify-between">
      <span className="flex flex-row items-center gap-4 max-md:hidden">
        <MarkerIcon />
        <p className="text-white font-medium text-[16px] max-md:hidden text-nowrap whitespace-nowrap">
          Rayzer Business Ltd. 226 MM Way, Benin City, Nigeria
        </p>
        <div className="flex flex-row items-center gap-3">
          <MailIcon />
          <p className="text-white font-medium lg:text-[16px] max-md:text-[12px]">
            info@rayzerbusiness.com
          </p>
        </div>
      </span>

      <div className="flex row-start-3 items-center gap-4">
        <FacebookIcon href="https://web.facebook.com/Rayzerbusinesswizebook" />
        <TwitterIcon href="https://x.com/Rayzer_Business" />
        <InstagramIcon href="https://www.instagram.com/rayzer_business/" />
      </div>
    </div>
  );
};

export default Topbar;
