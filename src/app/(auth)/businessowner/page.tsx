"use client";
import Link from "next/link";
import React from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import ControlledInput from "../../../../components/ControlledInput";
import ControlledTextArea from "../../../../components/ControlledTextArea";

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
  const { handleSubmit, control } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 flex flex-col">
      <h1 className="font-medium text-[2.75rem] playfair leading-[3.25rem] text-gws text-center pb-8">
        We Help Connect Business Owners With Graduates
      </h1>
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-8">
          <ControlledInput
            placeholder="Enter your name"
            label="Name"
            control={control}
            type="name"
            name="Name"
            rules={{ required: "Name is required" }}
          />

          <ControlledInput
            placeholder="Enter Business Name"
            label="Business Name"
            control={control}
            type="string"
            name="BusinessName"
            rules={{ required: "BusinessName is required" }}
          />

          <ControlledInput
            placeholder="Enter Email"
            label="Email"
            control={control}
            type="email"
            name="email"
            rules={{ required: "email is required" }}
          />
          <ControlledInput
            placeholder="Enter Phone-Number"
            label="Phone-Number"
            control={control}
            type=""
            name="phonenumber"
            rules={{ required: "Phone-Number is required" }}
          />

          <ControlledInput
            placeholder="Enter city/state"
            label="City"
            control={control}
            type=""
            name="City"
            rules={{ required: "city is required" }}
          />
          <ControlledInput
            placeholder="Enter type of business"
            label="type of business"
            control={control}
            type=""
            name="typeofbusiness"
            rules={{ required: "business is required" }}
          />
          <ControlledInput
            placeholder="Enter Salary Range"
            label="Salary Range"
            control={control}
            type=""
            name="salary"
            rules={{ required: "salary range is required" }}
          />
          <ControlledInput
            placeholder="No Of Graduates"
            label="No Of Graduates"
            control={control}
            type=""
            name="No Of Graduates"
            rules={{ required: "No Of Graduates is required" }}
          />
        </div>
      </div>
      <ControlledTextArea
        label="Description"
        placeholder="Enter description"
        control={control}
        name="description"
        rules={{ required: "description is required" }}
      />

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
