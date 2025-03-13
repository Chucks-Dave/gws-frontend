"use client";

import React from "react";
import { useForm } from "react-hook-form";

import Link from "next/link";
import ControlledInput from "../../../../components/ControlledInput";
import ControlledSelect from "../../../../components/ControlledSelect";
import ControlledTextArea from "../../../../components/ControlledTextArea";

const Register = () => {
  // const [selectedOption, setSelectedOption] = useState<string>("");

  // const handleChange = (value: string) => {
  //   setSelectedOption(value);
  // };

  return (
    <div className="">
      <div
        className="py-3  space-y-2 
      "
      >
        <h1 className="font-medium text-[1.5rem] playfair leading-px text-gws text-center ">
          Welcome to the Graduate Workforce Solution (GWS) Registration form!
          This form is designed for driven graduates seeking to kickstart their
          careers with practical skills and professional development
          opportunities. At GWS, we empower graduates to add immediate value to
          SMEs across various sectors such as pharmacy, cosmetics, electronics,
          and more.
        </h1>
        <p className="font-medium text-[1.5rem] playfair leading-px text-gws text-center py-5">
          By filling out this form, you`ll provide us with essential information
          about your education, skills, career goals, and preferences. Join us
          to gain hands-on experience, receive mentorship, and secure instant
          employment in an SME of your choice after training. Take the first
          step towards a successful career journey with GWS. Complete the form
          below to unlock your potential!
        </p>
        {/* <div className="flex flex-col gap-2 py-8">
          <div className="justify-center items-center flex gap-5">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="registrationType"
                value="graduate"
                onChange={() => handleChange("graduate")}
                className="accent-blue-600"
              />
              Register As A Graduate
            </label>
            <label className="flex items-center gap-2 ">
              <input
                type="radio"
                name="registrationType"
                value="businessOwner"
                onChange={() => handleChange("businessOwner")}
                className="accent-green-600"
              />
              Register As A Business Owner
            </label>
          </div>
        </div> */}
        <div className="">
          <GraduateForm />
        </div>
        {/* <div className="mt-4 ">
          {selectedOption === "graduate" && <GraduateForm />}
          {selectedOption === "businessOwner" && <BussinessOwnerForm />}
        </div> */}
      </div>
    </div>
  );
};

export default Register;

// type props = {
//   placeholder: string;
//   label?: string;
//   type?: string;
//   value?: string;
// };

// const CustomInput = ({ placeholder, label, type, value }: props) => {
//   return (
//     <>
//       <div className="flex flex-col gap-1.5">
//         <label className="text-[16px] font-bold text-black">{label}</label>
//         <input
//           className="lg:w-[17.5rem] max-md:w-full max-sm:w-full rounded-[4px] px-5 py-4 drop-shadow-lg focus:outline-none placeholder:roboto"
//           placeholder={placeholder}
//           value={value}
//           type={type}
//         />
//       </div>
//     </>
//   );
// };

// interface CustomSelectProps {
//   options: { value: string; label: string }[]; // Array of options for the select dropdown
//   value?: string; // The currently selected value
//   onChange: (value: string) => void; // Function to handle changes in selection
//   label?: string; // Optional label for the select dropdown
// }

// const CustomSelect: React.FC<CustomSelectProps> = ({
//   options,
//   value,
//   onChange,
//   label,
// }) => (
//   <div className="flex flex-col gap-2">
//     {label && (
//       <label className="text-[16px] font-bold text-darkgray">{label}</label>
//     )}
//     <select
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       className="lg:w-full max-md:w-full  rounded-[4px] px-5 py-[15px] relative drop-shadow-lg focus:outline-none"
//     >
//       {options.map((option) => (
//         <option
//           key={option.value}
//           value={option.value}
//           className="absolute top-2"
//         >
//           {option.label}
//         </option>
//       ))}
//     </select>
//   </div>
// );

// interface IFormInputs {
//   email: string;
//   name: string;
//   phoneNumber: string;

//   city: string;
//   preferedJob: string;
//   preferedJobLocation: string;
//   field: string;
//   password: string;
// }

interface FormValues {
  email: string;
  password: string;
}
const GraduateForm = () => {
  // const [imagePreview, setImagePreview] = useState<string | null>(null);
  // const [image, setImage] = useState<string | null>(null);
  // const fileInputRef = useRef<HTMLInputElement | null>(null);
  // const imageInputRef = useRef<HTMLInputElement | null>(null);
  // const [selectedValue, setSelectedValue] = useState("");

  // const handleIconClick = () => {
  //   if (fileInputRef.current) {
  //     fileInputRef.current.click();
  //   }
  // };

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files && event.target.files.length > 0) {
  //     const file = event.target.files[0];

  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setImagePreview(reader.result as string);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const handleIconClicks = () => {
  //   if (imageInputRef.current) {
  //     imageInputRef.current.click();
  //   }
  // };
  // const handleFileChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files && event.target.files.length > 0) {
  //     const file = event.target.files[0];

  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setImage(reader.result as string);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };
  // const handleCancelled = () => {
  //   setImage(null);
  //   if (imageInputRef.current) {
  //     imageInputRef.current.value = "";
  //   }
  // };
  // const handleCancel = () => {
  //   setImagePreview(null);
  //   if (fileInputRef.current) {
  //     fileInputRef.current.value = "";
  //   }
  // };

  // const options = [
  //   { value: "BSC", label: "BSC" },
  //   { value: "HND", label: "HND" },
  //   { value: "OND", label: "OND" },
  //   { value: "certificates", label: "certificates" },
  //   { value: "SSCE", label: "SSCE" },
  // ];
  // const option = [
  //   { value: "Cosmetics/Skin Care", label: "Cosmetics/Skin Care" },
  //   {
  //     value: "Pharmacy/Consumables/Surgicals",
  //     label: "Pharmacy/Consumables/Surgicals",
  //   },
  //   { value: "Electronics/Electricals", label: "Electronics/Electricals" },
  //   { value: "Clothings/Boutiques", label: "Clothings/Boutiques" },
  //   { value: "Supermarkets/BabyShops", label: "Supermarkets/BabyShops" },
  //   { value: "BuildingMaterials", label: "BuildingMaterials" },
  //   { value: "Schools/TrainingCenters", label: "Schools/TrainingCenters" },
  //   {
  //     value: "Computers/Phones/Accessories/Software",
  //     label: "Computers/Phones/Accessories/Software",
  //   },
  //   { value: "Food Stores/Drinks/Wines", label: "Food Stores/Drinks/Wines" },
  //   {
  //     value: "Spare Parts and Automobiles",
  //     label: "Spare Parts and Automobiles",
  //   },
  // ];

  // const handleChange = (value: string) => {
  //   setSelectedValue(value);
  //   console.log("Selected Value:", value);
  // };

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };
  const { handleSubmit, control } = useForm<FormValues>();
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="py-3  ">
        <div className=" grid grid-cols-2 gap-8 py-2">
          <div className="bg-transparent  w-[10.375rem] flex justify-center items-center rounded-[10px] border border-dashed border-black4 h-[150px]">
            <ControlledInput
              name="resume"
              control={control}
              label=""
              type="file"
              // buttonLabel="Upload Resume"
              accept=".pdf,.doc,.docx"
              rules={{ required: "Resume is required" }}
              className="text-[10px] text-red-500 border-red-500 border"
            />
          </div>
          <div className="bg-transparent  w-[10.375rem] flex justify-center items-center rounded-[10px] border border-dashed border-black4 h-[150px]">
            <div className="flex flex-col items-center justify-center">
              {/* {!imagePreview && (
                <span className="cursor-pointer" onClick={handleIconClick}>
                  <ImageIcon />
                </span>
              )} */}
              {/* <p className="text-[16px] font-bold text-black5 opacity-[73%] roboto">
                  {imagePreview ? "Image Uploaded" : "Browse Image"}
                </p> */}
            </div>
            {/* <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleFileChange}
            /> */}
            <ControlledInput
              name="profilePicture"
              control={control}
              label=""
              type="file"
              rules={{ required: "Profile picture is required" }}
            />

            {/* {imagePreview && (
              <div className="mt-4 flex justify-center">
                <Image
                  src={imagePreview}
                  alt="Preview"
                  width={90}
                  height={90}
                  className="h-auto max-w-full rounded-[10px]"
                />
                <button
                  className="text-[20px] font-bold"
                  onClick={handleCancel}
                >
                  X
                </button>
              </div>
            )} */}
          </div>
        </div>

        <div className="  ">
          <div className="grid grid-cols-2   gap-8 w-full ">
            <ControlledInput
              label="E-mail"
              placeholder="Enter your E-mail"
              control={control}
              name="E-mail"
              type="email"
              rules={{ required: "Email is required" }}
            />
            <ControlledInput
              label="FullName"
              placeholder="Enter your FullName"
              control={control}
              name="FullName"
              type="FullName"
              rules={{ required: "FullName is required" }}
            />
            <ControlledInput
              label="Phone-Number"
              placeholder="Enter your Phone-Number"
              control={control}
              name="PhoneNumber"
              type="Phone-Number"
              rules={{ required: "Phone-Number is required" }}
            />
            {/* <CustomInput label="Password" placeholder="Password" />
            <CustomInput
              label="Re-enter Password"
              placeholder="Password"
            /> */}
            <ControlledInput
              label="Date Of Birth"
              placeholder="Enter your Date Of Birth"
              control={control}
              name="Date Of Birth"
              type="Date"
              rules={{ required: "Date Of Birth is required" }}
              className="w-full"
            />
            <ControlledInput
              label="Gender"
              placeholder="Enter your Gender"
              control={control}
              name="Gender"
              type="Gender"
              rules={{ required: "Gender is required" }}
              className=""
            />

            <ControlledInput
              label="Address"
              placeholder="Enter your Address"
              control={control}
              name="Address"
              type="Address"
              rules={{ required: "Address is required" }}
              className=""
            />
            <ControlledInput
              label="Institution "
              placeholder="Enter Institution  Attended"
              control={control}
              name="Institution"
              type="Institution"
              rules={{ required: "Institution  Attended is required" }}
              className=""
            />

            {/* <CustomSelect
              options={options}
              value={selectedValue}
              onChange={handleChange}
              label="Degree Obtained"
            /> */}
            <ControlledSelect
              name="Degree Obtained"
              control={control}
              label="Degree Obtained"
              options={[
                { value: "BSC", label: "BSC" },
                { value: "HND", label: "HND" },
                { value: "OND", label: "OND" },
                { value: "certificates", label: "certificates" },
                { value: "SSCE", label: "SSCE" },
              ]}
              rules={{ required: "selection is required" }}
            />
            <ControlledInput
              label="Course Studied"
              placeholder="Enter Course Studied"
              control={control}
              name="course studied"
              type="Course Studied"
              rules={{ required: "Course Studied   is required" }}
              className=""
            />

            <ControlledInput
              label="Year of Graduation"
              placeholder="Enter Year of Graduation"
              control={control}
              name="Year of Graduation"
              type="Year of Graduation"
              rules={{ required: "Year of Graduation is required" }}
              className=""
            />

            <ControlledTextArea
              label=" Relevant Skills"
              placeholder="Enter skills"
              control={control}
              name="Skills"
              rules={{ required: "Skills is required" }}
            />

            <ControlledTextArea
              label=" Describe your aspirations"
              placeholder="Enter Aspirations"
              control={control}
              name="Aspirations"
              rules={{ required: "Aspiration is required" }}
            />

            <ControlledSelect
              name="Preferred SME Job Sector"
              label="Preferred SME Job Sector"
              options={[
                { value: "Cosmetics/Skin Care", label: "Cosmetics/Skin Care" },
                {
                  value: "Pharmacy/Consumables/Surgicals",
                  label: "Pharmacy/Consumables/Surgicals",
                },
                {
                  value: "Electronics/Electricals",
                  label: "Electronics/Electricals",
                },
                { value: "Clothings/Boutiques", label: "Clothings/Boutiques" },
                {
                  value: "Supermarkets/BabyShops",
                  label: "Supermarkets/BabyShops",
                },
                { value: "BuildingMaterials", label: "BuildingMaterials" },
                {
                  value: "Schools/TrainingCenters",
                  label: "Schools/TrainingCenters",
                },
                {
                  value: "Computers/Phones/Accessories/Software",
                  label: "Computers/Phones/Accessories/Software",
                },
                {
                  value: "Food Stores/Drinks/Wines",
                  label: "Food Stores/Drinks/Wines",
                },
                {
                  value: "Spare Parts and Automobiles",
                  label: "Spare Parts and Automobiles",
                },
              ]}
              control={control}
              rules={{ required: "selection is required" }}
            />
            <ControlledInput
              label="other fields"
              placeholder="Enter other fields"
              control={control}
              name="other fields"
              type="other fields"
              rules={{ required: "other fields is required" }}
              className=""
            />

            <ControlledInput
              label="Your Prefered Job Location?"
              placeholder="Enter Prefered Job Location"
              control={control}
              name="Prefered Job Location"
              type="Prefered Job Location"
              rules={{ required: "Prefered Job Location is required" }}
              className=""
            />
            <ControlledInput
              label="Are you willing to relocate?"
              placeholder="either yes/no"
              control={control}
              name="Are you willing to relocate"
              type="Are you willing to relocate"
              rules={{ required: "Answer is required" }}
              className=""
            />

            <ControlledInput
              label="Are you willing to relocate?"
              placeholder="either yes/no"
              control={control}
              name="Are you willing to relocate"
              type="Are you willing to relocate"
              rules={{ required: "Answer is required" }}
              className=""
            />
            <ControlledInput
              label="If No, When available?"
              placeholder="enter date"
              control={control}
              name="Are you willing to relocate"
              type="date"
              rules={{ required: "date is required" }}
              className=""
            />

            <ControlledInput
              label="Reference"
              placeholder="enter Reference"
              control={control}
              name="Reference"
              type="Reference"
              rules={{ required: "Reference is required" }}
              className=""
            />
            <ControlledInput
              label="Relationship"
              placeholder="enter Relationship"
              control={control}
              name="Relationship"
              type="Relationship"
              rules={{ required: "Relationship is required" }}
              className=""
            />
            <ControlledInput
              label="Contact Information"
              placeholder="enter Contact Information"
              control={control}
              name="Contact Information"
              type="Contact Information"
              rules={{ required: "Contact Information is required" }}
              className=""
            />

            <ControlledInput
              label="Reference2"
              placeholder="enter Reference"
              control={control}
              name="Reference2"
              type="Reference2"
              rules={{ required: "Reference is required" }}
              className=""
            />
            <ControlledInput
              label="Relationship2"
              placeholder="enter Relationship"
              control={control}
              name="Relationship2"
              type="Relationship2"
              rules={{ required: "Relationship is required" }}
              className=""
            />
            <ControlledInput
              label="Contact Information2"
              placeholder="enter Contact Information"
              control={control}
              name="Contact Information2"
              type="Contact Information2"
              rules={{ required: "Contact Information is required" }}
              className=""
            />
            <ControlledInput
              label="password"
              placeholder="Enter your password"
              control={control}
              name="password"
              type="password"
              rules={{ required: "password is required" }}
              className=""
            />
            <ControlledInput
              label="password2"
              placeholder="confirm your password"
              control={control}
              name="password2"
              type="password"
              rules={{ required: "password confirmation is required" }}
              className=""
            />
            <ControlledTextArea
              label="Any other comment"
              placeholder="Enter comment"
              control={control}
              name="comment"
              rules={{ required: "Comment is required" }}
            />
          </div>
          <div className="flex  flex-col gap-5">
            <Link
              href="/login"
              className="text-peach playfair text-[1.25rem] leading-[1.75rem] underline py-4"
            >
              Already Have An Account Login
            </Link>
            <button className="bg-gws w-[12.5rem] rounded-[0.625rem] py-3 text-white playfair">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
