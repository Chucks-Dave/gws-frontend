import { Controller } from "react-hook-form";

interface SelectOption {
  value: string;
  label: string;
}

interface ControlledSelectProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  label?: string;
  options: SelectOption[];
  rules?: object;
}

const ControlledSelect: React.FC<ControlledSelectProps> = ({
  name,
  control,
  label,
  options,
  rules,
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-[16px] font-bold text-black">{label}</label>
      )}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <select
              {...field}
              className={`  p-2 lg:w-full max-md:w-full rounded-[4px] px-5 py-[15px] relative drop-shadow-lg focus:outline-none" ${
                fieldState.error ? "border-red-500 border " : ""
              }`}
            >
              <option value="">Select an option</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {fieldState.error && (
              <span className="text-red-500 text-xs playfair">
                {fieldState.error.message}
              </span>
            )}
          </>
        )}
      />
    </div>
  );
};

export default ControlledSelect;
