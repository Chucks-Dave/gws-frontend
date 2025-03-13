import React from "react";
import { Controller } from "react-hook-form";

interface ControlledInputProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  label?: string;
  placeholder?: string;

  rules?: object;
  className?: string;
}

const ControlledTextArea = ({
  name,
  control,
  label,
  placeholder,

  rules,
  className,
}: ControlledInputProps) => {
  return (
    <div className="space-y-2">
      <label className="text-[16px] font-bold text-black">{label}</label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <textarea
              {...field}
              placeholder={placeholder}
              className={`lg:w-full max-md:w-full max-sm:w-full rounded-[4px] px-5 py-4 drop-shadow-lg focus:outline-none placeholder:roboto ${className} ${
                fieldState.error ? "border-red-500 border" : ""
              }`}
            />
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

export default ControlledTextArea;
