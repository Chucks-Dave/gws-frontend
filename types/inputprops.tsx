// import React, {
//   DetailedHTMLProps,
//   forwardRef,
//   InputHTMLAttributes,
//   useState,
// } from "react";
// import "./styles.css";

// export type InputProps = {
//   label?: string;
//   extraClass?: string;
//   variant?: "condensed" | "free";
//   spaceY?: boolean;
//   bgColor?: string;
//   isInvalid?: boolean;
//   suffix?: any;
//   prefix?: any;
//   className?: string;
// } & Omit<
//   DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
//   "spaceY" | "bg" | "variant" | "extraClass"
// >;

// const InputField = forwardRef<HTMLInputElement, InputProps>(
//   (
//     {
//       label,
//       extraClass = "",
//       //   spaceY = true,
//       //   variant = "condensed",
//       bgColor = "white",
//       isInvalid,
//       prefix,
//       //   suffix,
//       className,
//       ...props
//     },
//     ref
//   ): JSX.Element => {
//     const [showPassword, setShowPassword] = useState(false);

//     return (
//       <div className={`w-fit`}>
//         {label && (
//           <p
//             className={`capitalize mb-2 flex justify-between flex-wrap gap-4 items-center font-semibold text-sm md:text-base text-[#000000]`}
//           >
//             {label}
//           </p>
//         )}
//         <div
//           className={`input-container flex items-center border border-[#E2E8F0] rounded-full min-h-[3rem] px-2 focus-within:!border-primary  ${
//             bgColor || "bg-white"
//           } ${className} ${isInvalid ? "border-red-500" : ""}`}
//           style={{
//             width: "fit-content", // Ensures the input only takes up the required space
//             maxWidth: "100%", // Prevents overflow
//           }}
//         >
//           {prefix && (
//             <span className="prefix flex items-center mr-2">{prefix}</span>
//           )}
//           <input
//             {...props}
//             ref={ref}
//             type={showPassword ? "text" : props.type}
//             className={`input-box flex-1 min-w-0 focus:outline-none placeholder:text-sm placeholder:text-grey-500 ${
//               extraClass || ""
//             }`}
//             style={{
//               width: "auto", // Makes the input shrink dynamically
//               minWidth: "5rem", // Ensures it doesn't become too small
//             }}
//           />
//           {/* {suffix && (
//             <span className="suffix flex items-center ml-2">{suffix}</span>
//           )} */}
//           {props.type === "password" && (
//             <button
//               type="button"
//               className="icon-btn ml-2"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <EyesClosed /> : <EyesOpen />}
//             </button>
//           )}
//         </div>
//       </div>
//     );
//   }
// );

// InputField.displayName = "InputField";

// export default InputField;

// const EyesOpen = () => {
//   return (
//     <svg
//       width="20"
//       height="20"
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M2.5 10.833C5.5 4.16634 14.5 4.16634 17.5 10.833"
//         stroke="#474747"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M10 14.166C9.6717 14.166 9.34661 14.1014 9.04329 13.9757C8.73998 13.8501 8.46438 13.6659 8.23223 13.4338C8.00009 13.2016 7.81594 12.926 7.6903 12.6227C7.56466 12.3194 7.5 11.9943 7.5 11.666C7.5 11.3377 7.56466 11.0126 7.6903 10.7093C7.81594 10.406 8.00009 10.1304 8.23223 9.89825C8.46438 9.6661 8.73998 9.48195 9.04329 9.35632C9.34661 9.23068 9.6717 9.16602 10 9.16602C10.663 9.16602 11.2989 9.42941 11.7678 9.89825C12.2366 10.3671 12.5 11.003 12.5 11.666C12.5 12.3291 12.2366 12.9649 11.7678 13.4338C11.2989 13.9026 10.663 14.166 10 14.166Z"
//         stroke="#474747"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// };

// const EyesClosed = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="#474747"
//       strokeWidth="2"
//       width="18"
//       height="18"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M13.875 18.825a6.963 6.963 0 01-2.875.675C7.178 19.5 4.19 17.505 2.5 14.5a9.478 9.478 0 011.388-1.938m3.374-3.36A9.45 9.45 0 0112 7.5c3.191 0 6.178 1.995 7.875 4.999.518.805.965 1.646 1.35 2.501a9.403 9.403 0 01-1.378 1.956m-3.45 3.416a9.396 9.396 0 01-1.526 1.304M2.5 2.5l19 19"
//       />
//     </svg>
//   );
// };
