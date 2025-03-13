"use client";
import React, { useRef, useState } from "react";
import { Controller } from "react-hook-form";
import ImageIcon from "../icons/ImageIcon";
import Image from "next/image";

interface ControlledInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  label?: string;
  placeholder?: string;
  type?: string;
  rules?: object;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  accept?: any;
  showFileName?: boolean;
  multiple?: boolean;
}

const ControlledInput = ({
  name,
  control,
  label,
  placeholder,
  type = "text",
  rules,
  className,
  ref,
  accept,
  multiple = false,

  //   showFileName = true,

  ...rest
}: ControlledInputProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileData, setFileData] = useState<
    { name: string; preview?: string }[]
  >([]);

  return (
    <div className="">
      <label className="text-[16px] font-bold text-black">{label}</label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            {type === "file" ? (
              <div className="flex items-center gap-2">
                {!(fileData.length > 0 && !multiple) && (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className=" px-4 py-2 rounded-md cursor-pointer text-black "
                  >
                    <div className="flex justify-center items-center w-full bg-pink-500 h-full">
                      <ImageIcon />
                    </div>
                  </button>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  accept={accept || "image/*"}
                  onChange={(e) => {
                    const files = Array.from(e.target.files || []);
                    field.onChange(files);

                    if (files.length > 0) {
                      const newFileData: { name: string; preview?: string }[] =
                        [];
                      files.forEach((file) => {
                        if (file.type.startsWith("image/")) {
                          // Handle image preview
                          const reader = new FileReader();
                          reader.onload = () => {
                            newFileData.push({
                              name: file.name,
                              preview: reader.result as string,
                            });
                            if (newFileData.length === files.length) {
                              setFileData([...fileData, ...newFileData]); // Append new previews
                            }
                          };
                          reader.readAsDataURL(file);
                        } else {
                          // Handle document (no preview, just name)
                          newFileData.push({ name: file.name });
                        }
                      });
                      setFileData([...fileData, ...newFileData]);
                    }
                  }}
                  {...rest}
                />

                {fileData.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {fileData.map((file, index) => (
                      <div
                        key={index}
                        className="relative flex items-center gap-2 "
                      >
                        {/* Display image preview or document name */}
                        {file.preview ? (
                          <Image
                            src={file?.preview}
                            alt={file?.name}
                            height={90}
                            width={90}
                            className="w-24 h-24 aspect-square rounded-md "
                          />
                        ) : (
                          <span className="text-[10px] font-normal flex justify-center items-center">
                            {file.name}
                          </span>
                        )}
                        {/* Remove button */}
                        <button
                          type="button"
                          onClick={() => {
                            const updatedFiles = fileData.filter(
                              (_, i) => i !== index
                            );
                            setFileData(updatedFiles);
                            field.onChange(
                              updatedFiles.length > 0 ? updatedFiles : null
                            );
                          }}
                          className="text-red-500 text-xs "
                        >
                          ✖
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <input
                {...field}
                {...rest}
                type={type}
                ref={ref}
                placeholder={placeholder}
                className={`lg:w-full max-md:w-full max-sm:w-full rounded-[4px] px-5 py-4 drop-shadow-lg focus:outline-none placeholder:roboto ${className} ${
                  fieldState.error ? "border-red-500 border" : ""
                }`}
              />
            )}

            {fieldState.error && (
              <span className="text-red-500 text-xs text-center">
                {fieldState.error.message}
              </span>
            )}
          </>
        )}
      />
    </div>
  );
};

export default ControlledInput;
