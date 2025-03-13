"use client";
import React from "react";

// import { useForm, SubmitHandler } from "react-hook-form";
import { SubmitHandler, useForm } from "react-hook-form";
import ControlledInput from "../../../../components/ControlledInput";

interface IFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const { handleSubmit, control } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);
  return (
    <div className="space-y-3">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-16 ">
        <ControlledInput
          placeholder="Enter Email"
          label="Email"
          control={control}
          type="email"
          name="email"
          rules={{ required: "Email is required" }}
        />

        <ControlledInput
          placeholder="Enter password"
          label="password"
          control={control}
          type="password"
          name="password"
          rules={{ required: "Password is required" }}
        />
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
