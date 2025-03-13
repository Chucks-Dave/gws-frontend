import DoubleQuote from "../icons/DoubleIcons";
import QuoteIcon from "../icons/QuoteIcon";

type props = {
  text: string;
  name: string;
  title: string;
};

const Testimonial = ({ text, name, title }: props) => {
  return (
    <>
      <div className="w-[300px] flex flex-col bg-medi-Rectangle h-[300px] gap-4 rounded-[30px] py-6 drop-shadow-lg px-5">
        <QuoteIcon />
        <div className="flex justify-center items-center px-5">
          <p className="text-graydark3 roboto font-normal leading-[20px] text-[14px] text-balance">
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

export default Testimonial;
