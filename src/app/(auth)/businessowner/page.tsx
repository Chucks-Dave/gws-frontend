"use client";
import Link from "next/link";
import React from "react";
import CustomInput from "../../../../components/CustomInput";
import { SubmitHandler, useForm } from "react-hook-form";

const BusinessOwner = () => {
  return (
    <div>
      <BussinessOwnerForm />
    </div>
  );
};

export default BusinessOwner;

interface IFormInputs {
  email: string;
  name: string;
  phoneNumber: string;
  businessName: string;
  city: string;
  preferedJob: string;
  preferedJobLocation: string;
  field: string;
  password: string;
  salaryRange: string;
  businessType: string;
  noGraduates: string;
  description: string;
}
const BussinessOwnerForm = () => {
  const {
    register,
    clearErrors,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 flex flex-col">
      <h1 className="font-medium text-[2.75rem] playfair leading-[3.25rem] text-gws text-center pb-8">
        We Help Connect Business Owners With Graduates
      </h1>
      <div className="flex flex-col gap-3">
        <div className="flex row-start-2 flex-col gap-5">
          <CustomInput
            label="Name"
            placeholder="Enter your full name"
            {...register("name", { required: "name is required" })}
            aria-invalid={errors.name ? "true" : "false"}
            onChange={() => clearErrors("name")}
          />
          {errors.name && (
            <p
              className="text-red-950 playfair text-[15px] font-medium -my-2"
              role="alert"
            >
              {errors.name?.message}
            </p>
          )}
          <CustomInput
            label="Business Name"
            placeholder="Enter your Business-Name"
            {...register("businessName", {
              required: "businessName is required",
            })}
            aria-invalid={errors.name ? "true" : "false"}
            onChange={() => clearErrors("businessName")}
          />
          {/* <p
          className="text-red-950 playfair text-[15px] font-medium -my-2"
          role="alert"
        >
          {errors.businessName?.message}
        </p> */}
          {errors.businessName && (
            <p
              className="text-red-950 playfair text-[15px] font-medium -my-2"
              role="alert"
            >
              {errors.businessName?.message}
            </p>
          )}
          <CustomInput
            label="E-mail"
            placeholder="Enter your E-mail"
            {...register("email", { required: "Email Address is required" })}
            aria-invalid={errors.email ? "true" : "false"}
            onChange={() => clearErrors("email")}
          />
          {/* <p
          className="text-red-950 playfair text-[15px] font-medium -my-2"
          role="alert"
        >
          {errors.email?.message}
        </p> */}
          {errors.email && (
            <p
              className="text-red-950 playfair text-[15px] font-medium -my-2"
              role="alert"
            >
              {errors.email?.message}
            </p>
          )}
          <CustomInput
            label="Phone-Number"
            placeholder="Enter your Number"
            {...register("phoneNumber", {
              required: "phoneNumber is required",
            })}
            aria-invalid={errors.phoneNumber ? "true" : "false"}
            onChange={() => clearErrors("phoneNumber")}
          />
          {/* <p
          className="text-red-950 playfair text-[15px] font-medium -my-2"
          role="alert"
        >
          {errors.phoneNumber?.message}
        </p> */}
          {errors.phoneNumber && (
            <p
              className="text-red-950 playfair text-[15px] font-medium -my-2"
              role="alert"
            >
              {errors.phoneNumber?.message}
            </p>
          )}
          <CustomInput
            label="City/State"
            placeholder="Enter your state/city"
            {...register("city", {
              required: "city is required",
            })}
            aria-invalid={errors.city ? "true" : "false"}
            onChange={() => clearErrors("city")}
          />
          {/* <p
          className="text-red-950 playfair text-[15px] font-medium -my-2"
          role="alert"
        >
          {errors.city?.message}
        </p> */}
          {errors.city && (
            <p
              className="text-red-950 playfair text-[15px] font-medium -my-2"
              role="alert"
            >
              {errors.city?.message}
            </p>
          )}
          <CustomInput
            label="Type of Business"
            placeholder="Enter Type of Business"
            {...register("businessType", {
              required: "businessType is required",
            })}
            aria-invalid={errors.businessType ? "true" : "false"}
            onChange={() => clearErrors("businessType")}
          />
          {/* <p
          className="text-red-950 playfair text-[15px] font-medium -my-2"
          role="alert"
        >
          {errors.businessType?.message}
        </p> */}
          {errors.businessType && (
            <p
              className="text-red-950 playfair text-[15px] font-medium -my-2"
              role="alert"
            >
              {errors.businessType?.message}
            </p>
          )}
          <CustomInput
            label="Salary Range"
            placeholder="Enter Salary Range"
            {...register("salaryRange", {
              required: "salaryRange is required",
            })}
            aria-invalid={errors.salaryRange ? "true" : "false"}
            onChange={() => clearErrors("salaryRange")}
          />
          {/* <p
          className="text-red-950 playfair text-[15px] font-medium -my-2"
          role="alert"
        >
          {errors.salaryRange?.message}
        </p> */}
          {errors.salaryRange && (
            <p
              className="text-red-950 playfair text-[15px] font-medium -my-2"
              role="alert"
            >
              {errors.salaryRange?.message}
            </p>
          )}

          <CustomInput
            label="No Of Graduates"
            placeholder="No Of Graduates"
            {...register("noGraduates", {
              required: "No Of Graduates is required",
            })}
            aria-invalid={errors.noGraduates ? "true" : "false"}
            onChange={() => clearErrors("noGraduates")}
          />

          {errors.noGraduates && (
            <p
              className="  text-red-950 playfair text-[15px] font-medium -my-2"
              role="alert"
            >
              {errors.noGraduates?.message}
            </p>
          )}
        </div>
      </div>
      <textarea
        {...register("description", {
          required: "description is required",
        })}
        aria-invalid={errors.description ? "true" : "false"}
        onChange={() => clearErrors("description")}
        placeholder="Describe any specific skills or qualities you are looking for in a graduate, or any other details about the position"
        className="  w-full rounded-[0.5625rem]  drop-shadow-lg px-3  py-8 placeholder:text-[0.825rem]  bg-white placeholder:leading-[0.9375rem] placeholder:text-black focus:outline-none"
      />
      {errors.description && (
        <p
          className="text-red-950 playfair text-[15px] font-medium -my-2"
          role="alert"
        >
          {errors.description?.message}
        </p>
      )}
      <div className="flex  flex-col gap-2">
        <Link
          href="/login"
          className="text-peach playfair text-[1.25rem] leading-[1.75rem] underline"
        >
          Already Have An Account Login
        </Link>
        <button className="bg-gws w-[12.5rem] rounded-[0.625rem] py-3 text-white playfair">
          Submit
        </button>
      </div>
    </form>
  );
};
