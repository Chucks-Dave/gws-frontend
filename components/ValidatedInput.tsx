// import { InputProps } from "../types/inputprops";
// import {
//   get,
//   RegisterOptions,
//   FieldPath,
//   //   useForm,
//   FieldValues,
// } from "react-hook-form";
// import { useState } from "react";
// // import { EyesClosed, EyesOpen } from "../Vectors/EyeIcons";

// // import type { FieldValues } from 'react-hook-form/dist/types';

// export type validationProps<
//   TFormValues extends FieldValues,
//   TName extends FieldPath<TFormValues> = FieldPath<TFormValues>
// > = {
//   errMsg?: string;
//   name: TName;
//   showError?: boolean;
//   className?: string;
//   bgColor?: string;
//   isInvalid?: boolean;
//   register?: any;
//   errors?: any;
//   extraLabel?: string;
//   rules?: Omit<
//     RegisterOptions<TFormValues, TName>,
//     "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
//   >;
//   required?: boolean;
// };

// const ValidatedInput = <TFormValues extends FieldValues>({
//   name,
//   errMsg,
//   rules,
//   required = true,
//   label,
//   extraLabel,
//   //   extraClass = "",
//   //   spaceY = true,
//   //   variant = "condensed",
//   className,
//   bgColor,
//   //   isInvalid,
//   prefix,
//   suffix,
//   // containerClass = '',
//   showError = true,
//   register,
//   errors,
//   ...props
// }: validationProps<TFormValues> & Omit<InputProps, "name" | "required">) => {
//   const error = get(errors, name);

//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div>
//       {label && (
//         <p
//           className={`capitalize flex flex-col gap-0 font-semibold text-[1rem]  text-[#000000]`}
//         >
//           <span>
//             {label}
//             {required && <span className="text-error text-[1rem] ml-1">*</span>}
//           </span>

//           <span className="font-normal text-[1rem] text-default">
//             {extraLabel}
//           </span>
//         </p>
//       )}
//       <div
//         className={`input !border ${
//           error ? "border-error" : "border-[#E2E8F0]"
//         } px-6 pr-12 rounded-full min-h-[3rem] focus-within:!border-primary ${
//           bgColor || "bg-white"
//         }  ${className}`}
//       >
//         {prefix && (
//           <span className="select-none -ml-2 h-12 w-12 focus-within:!h-2 rounded-l-xl flex justify-center items-center !-my-4 md:!-my[21px] !hfull mr-2.5 bg-neutral-02">
//             {prefix}
//           </span>
//         )}
//         <input
//           {...register(name, {
//             required: required ? "This Field is required" : false,
//             ...(props.type === "password"
//               ? {
//                   minLength: {
//                     value: 8,
//                     message: "Password must have at least 8 characters",
//                   },
//                 }
//               : {}),
//             ...rules,
//           })}
//           name={name}
//           {...props}
//           type={showPassword ? "text" : props.type}
//           className={`input__box h-[60px] focus:outlinenone placeholder:font-normal placeholder:text-[1rem] placeholder:md:text-[1rem] placeholder:!text-grey-1 input-autofill`}
//         />
//         {suffix && (
//           <span
//             className={`h-10 w-12 select-none  flex justify-center items-center rounded-full`}
//           >
//             {suffix}
//           </span>
//         )}{" "}
//         {props.type === "password" && (
//           <button
//             type="button"
//             className="icon-btn -mr-1 select-none"
//             onClick={() => setShowPassword(!showPassword)}
//           >
//             {showPassword ? <EyesClosed /> : <EyesOpen />}
//           </button>
//         )}
//       </div>

//       {error && showError && (
//         <div className="input-err-msg">{error.message || errMsg}</div>
//       )}
//     </div>
//   );
// };

// export default ValidatedInput;
