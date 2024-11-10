/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  fullName: yup.string().required(),
  gender: yup.string().required(),
  country: yup.string().required(),
  phoneNumber: yup.string().required(),
  about: yup.string().required(),
});

export default function Personalinfo(props) {
  const { dashboard } = props;
  const [profile, setProfile] = useState({
    fullName: `${dashboard?.first_name || ""} ${dashboard?.last_name || ""}`,
    gender: "",
    country: dashboard?.country || "",
    phoneNumber: "",
    about: dashboard?.about_me || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(name, value);
  };

  console.log(profile);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-9/12">
      <section className="w-6/12">
        <div className="w-full mb-8">
          <div className="flex justify-between items-center mb-3">
            <p>Full Name</p>
            <label htmlFor="full-name" className="cursor-pointer">
              Edit
            </label>
          </div>
          <input
            {...register("fullName")}
            type="text"
            id="fullName"
            value={profile?.fullName}
            placeholder="John Doe"
            className="w-full outline-none"
            onChange={(event) => handleChange(event)}
            // value={`${dashboard?.first_name} ${dashboard?.last_name}`}
          />
        </div>

        <div className="mb-8">
          <label className="block mb-3">Gender</label>
          <select
            {...register("gender")}
            value={profile.gender}
            onChange={(e) => handleChange(e)}
            className="bg-transparent outline-none w-40"
          >
            <option value="select" selected>
              select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="mb-8">
          <label className="block mb-3">Country</label>
          <input
            {...register("country")}
            type="text"
            id="country"
            placeholder="NG NIGERIA"
            onChange={(e) => handleChange(e)}
            className="outline-none"
            value={profile?.country || "N/A"}
          />
        </div>

        <div className="w-full mb-8">
          <div className="flex justify-between items-center mb-3">
            <p>Phone Number</p>
            <label htmlFor="phone-number" className="cursor-pointer">
              Edit
            </label>
          </div>
          <input
            {...register("phoneNumber")}
            onChange={(e) => handleChange(e)}
            type="text"
            id="phone-number"
            placeholder="N/A"
            value={profile?.phoneNumber}
            className="outline-none border-b-[0.02px] w-full border-[#434343]"
          />
        </div>
      </section>

      <div className=" mb-8">
        <div className="flex justify-between items-center mb-3">
          <p>About</p>
          <label htmlFor="about" className="cursor-pointer">
            Edit
          </label>
        </div>
        <textarea
          {...register("about")}
          id="about"
          className="outline-none h-56 bg-[#FDF8F8] resize-none w-full py-2 px-4"
          onChange={(e) => handleChange(e)}
          value={profile?.about || ""}
        ></textarea>
      </div>

      <button className="bg-[#FE9B7E] rounded-md w-96 h-11 text-white">
        save
      </button>
    </form>
  );
}
