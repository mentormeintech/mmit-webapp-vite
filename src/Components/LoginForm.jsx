import React from 'react'
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  loggedInUser,
  registeredUser,
  changeUserType,
} from "../redux/slices/userslice";
import { signInUser } from "../utilities/apiClient";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCheck } from "react-icons/ai";
import Alert from "../features/Alert";
import { setToken } from "../utilities/axiosClient";
import Loader from "./loader";
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const dispatch = useDispatch();
  const { type } = useSelector((state) => state.mentor_me_user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const changeUser = (type) => {
    dispatch(changeUserType(type));
  };

  const navigate = useNavigate();
  const [message, setmessage] = useState("");
  const [success, setsuccess] = useState(false);
  const [loading, setloading] = useState(false);

  // const url = 'mentor/signin'

  async function registerUser(event) {
    try {
      if (type === "mentee" || type === "mentor") {
        setloading(true);
        setmessage("");
        const url = type === "mentor" ? "mentor/signin" : "mentee/signin";
        const response = await signInUser(url, event);
        if (response && response.success === true) {
          if (response.data.user_type === "mentor") {
            if (response.data.step1 === false) {
              dispatch(
                registeredUser({ token: response.token, user: response.data }),
              );
              setmessage("Registration not completed");
              Alert("Registration not completed", "warning");
              setloading(false);
              setsuccess(response.success);
              return navigate("/mentorregist");
            }
            dispatch(
              loggedInUser({ token: response.token, user: response.data }),
            );
            setmessage(response.message);
            setsuccess(response.success);
            Alert(response.message, "success");
            return setTimeout(() => {
              setloading(false);
              navigate("/mentor");
            }, 40);
          } else {
            dispatch(
              loggedInUser({ token: response.token, user: response.data }),
            );
            setmessage(response.message);
            setsuccess(response.success);
            Alert(response.message, "success");
            await setToken();
            return setTimeout(() => {
              setloading(false);
              navigate("/findamentor");
            }, 40);
          }
        } else {
          setmessage(response.message);
          Alert(response.message, "warning");
          setsuccess(response.success);
          setloading(false);
        }
      } else {
        Alert("Please select user type", "warning");
      }
    } catch (error) {
      Alert(error.message, "error");
      setsuccess(false);
      setloading(false);
    }
  }
  return (
    <div className="relative -top-10 p-20">
      <h1 className="mb-2 smd:text-4xl text-2xl font-semibold">Login into your Account</h1>
      <small className="text-base font-normal text-zinc-800 text-opacity-40">
        {'To enjoy all of our cool features'}
      </small>
      <p className="smd:mt-8 mt-4 text-xl font-normal text-black">
        Log in as <span className="text-xl text-orange-300">*</span>
      </p>
      <div className="mt-3 inline-flex items-start justify-start gap-11">
        <label className="inline-flex items-center justify-start gap-4">
          <input
            type="checkbox"
            name="role"
            value="mentor"
            className="hidden"
          />
          <div
            className={`relative flex h-6 w-6 cursor-pointer items-center justify-center rounded border ${type === "mentor" ? "border-[#0F88D9]" : "border-black"
              }`}
            onClick={() => changeUser("mentor")}
          >
            {type === "mentor" && <AiOutlineCheck color="#0F88D9" />}
          </div>
          <div className="text-center text-base font-semibold text-neutral-700">
            Mentor
          </div>
        </label>
        <label className="inline-flex items-center justify-start gap-4">
          <input
            type="checkbox"
            name="role"
            value="mentor"
            className="hidden"
          />
          <div
            className={`relative flex h-6 w-6 cursor-pointer items-center justify-center rounded border ${type === "mentee" ? "border-[#0F88D9]" : "border-black"
              }`}
            onClick={() => changeUser("mentee")}
          >
            {type === "mentee" && <AiOutlineCheck color="#0F88D9" />}
          </div>
          <div className="text-center text-base font-semibold text-neutral-700">
            Mentee
          </div>
        </label>
      </div>
      <form className="mt-5 w-[320px]" onSubmit={handleSubmit(registerUser)}>
        <div className="flex flex-col">
          <p className="text-xl">Email Address</p>
          <input
            className="inline-flex h-12 w-full items-center justify-start rounded-lg border border-black border-opacity-20 pb-2 pl-5 pt-1.5 outline-none smd:w-96"
            type="email"
            name="email"
            placeholder="123456789@gmail.com"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="mt-1 text-xs text-red-500">
              This field is required
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <p className="mt-3 text-xl">Password</p>
          <input
            className="inline-flex h-12 w-full items-center justify-start rounded-lg border border-black border-opacity-20 pb-2 pl-5 pt-1.5 outline-none smd:w-96"
            type="password"
            name="password"
            placeholder="********"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="mt-1 text-xs text-red-500">
              This field is required
            </span>
          )}
        </div>
        <small className="text-15px mt-2 block cursor-pointer font-normal text-sky-600">
          Forgot password?
        </small>
        <div className=" mt-8">
          <div className="flex flex-col">
            <button
              className={`inline-flex h-14 w-full items-center justify-center whitespace-nowrap rounded-2xl  bg-sky-600 py-3.5 text-xl font-bold text-white smd:w-96 ${loading === true ? "cursor-not-allowed" : "cursor-pointer"
                }`}
              disabled={loading === true ? true : false}
            >
              {loading ? <Loader /> : "Login"}
            </button>
            {message && (
              <span
                className={`text-xs ${success === false ? "text-red-500" : "text-cyan-500"
                  } mt-3`}
              >
                {message}
              </span>
            )}
          </div>
          <div className="ml-0 flex w-full items-center justify-center space-x-2 smd:ml-5 smd:w-96">
            <div className="py-2 text-sm font-medium text-neutral-400">
              Don’t have an account?
            </div>
            <a
              href={"menteesignup"}
              className="text-sm font-medium text-sky-600 transition-all hover:text-secondary-500"
            >
              {"Sign Up"}
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};


