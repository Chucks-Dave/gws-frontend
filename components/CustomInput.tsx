type props = {
  placeholder: string;
  label?: string;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomInput = ({ placeholder, label, type, value, onChange }: props) => {
  return (
    <>
      <div className="flex flex-col gap-1.5">
        <label className="text-[16px] font-bold text-black">{label}</label>
        <input
          className="lg:w-full max-md:w-full max-sm:w-full rounded-[4px] px-5 py-4 drop-shadow-lg focus:outline-none placeholder:roboto"
          placeholder={placeholder}
          value={value}
          type={type}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default CustomInput;
