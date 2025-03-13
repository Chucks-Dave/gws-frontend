"use client";
import React from "react";
import CustomInput from "../../../../components/CustomInput";
// import { useForm, SubmitHandler } from "react-hook-form";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    clearErrors,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);
  return (
    <div className="space-y-3">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-16 ">
        <CustomInput
          label="Email"
          placeholder="Enter your Email"
          {...register("email", { required: "Email Address is required" })}
          aria-invalid={errors.email ? "true" : "false"}
          onChange={() => clearErrors("email")}
        />
        {errors.email && (
          <p
            className="text-red-950 playfair text-[15px] font-medium -my-2"
            role="alert"
          >
            {errors.email?.message}
          </p>
        )}
        <CustomInput
          type="password"
          label="Password"
          placeholder="Enter Your Password"
          {...register("password", { required: "Password is required" })}
          aria-invalid={errors.password ? "true" : "false"}
          onChange={() => clearErrors("password")}
        />
        {errors.password && (
          <p
            className="text-red-950 playfair text-[15px] font-medium -my-2"
            role="alert"
          >
            {errors.password?.message}
          </p>
        )}
        <div className="pt-5">
          <button className="bg-gws w-[12.5rem] rounded-[0.625rem] py-3 text-white playfair">
            Submit
          </button>
        </div>
        {/* <ValidatedInput name="" /> */}
      </form>
    </div>
  );
};

export default Login;
