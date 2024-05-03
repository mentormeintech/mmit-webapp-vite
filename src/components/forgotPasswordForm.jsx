import React from "react";
import { useForm } from "react-hook-form";
import { useState, useLayoutEffect } from "react";
import { changeUserType } from "../redux/slices/userslice";
import { patchRequest } from "../utilities/apiClient";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCheck } from "react-icons/ai";
import Alert from "../features/Alert";
import { setToken } from "../utilities/axiosClient";
import Loader from "./loader";
import { useNavigate, Link, useParams } from "react-router-dom";

export default function ForgotPasswordForm() {
    const { user_token } = useParams()
    const navigate = useNavigate();
    // console.log('ForgotPasswordForm user_token', user_token)
    const dispatch = useDispatch();
    const { type } = useSelector((state) => state.mentor_me_user);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useLayoutEffect(() => {
        (async () => {
            if (user_token) {
                return await setToken(user_token);
            }
            return navigate('/auth/signin')
        })()
    }, [])
    const changeUser = (type) => {
        dispatch(changeUserType(type));
    };

    const [message, setmessage] = useState("");
    const [success, setsuccess] = useState(false);
    const [loading, setloading] = useState(false);

    // const url = 'mentor/signin'

    async function resetPassword(event) {
        try {
            if (type === "mentee" || type === "mentor") {
                setloading(true);
                setmessage("");
                const url = type === "mentor" ? "mentor/reset-password" : "mentee/reset-password";
                const response = await patchRequest(url, event);
                if (response && response.success === true) {
                    setmessage(response.message);
                    setsuccess(response.success);
                    Alert('Password changed', "success");
                    await setToken(response.token);
                    return setTimeout(() => {
                        navigate(`/auth/signin`);
                        setloading(false);
                    }, 400);
                } else {
                    setmessage(response.message);
                    Alert(response.message, "warning");
                    setsuccess(response.success);
                    setloading(false);
                }
            } else {
                Alert("Please select account type", "warning");
            }
        } catch (error) {
            Alert(error.message, "error");
            setsuccess(false);
            setloading(false);
        }
    }

    return (
        <div className="relative mb-5 lg:flex lg:flex-col">
            {/* <div data-aos="fade-left" className="relative mb-5 lg:flex lg:flex-col"> */}
            <h1 className="mb-2 smd:text-4xl text-2xl font-semibold">
                Reset Your Account Password
            </h1>
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
            <form className="mt-5 w-11/12" onSubmit={handleSubmit(resetPassword)}>
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
                <div className="flex flex-col">
                    <p className="mt-3 text-xl">Repeat Password</p>
                    <input
                        className="inline-flex h-12 w-full items-center justify-start rounded-lg border border-black border-opacity-20 pb-2 pl-5 pt-1.5 outline-none smd:w-96"
                        type="password"
                        name="repeat_password"
                        placeholder="********"
                        {...register("repeat_password", { required: true })}
                    />
                    {errors.password && (
                        <span className="mt-1 text-xs text-red-500">
                            This field is required
                        </span>
                    )}
                </div>
                <div className="mt-8 w-full">
                    <div className="flex flex-col">
                        <button
                            className={`inline-flex h-14 w-full items-center justify-center whitespace-nowrap rounded-2xl  bg-sky-600 py-3.5 text-xl font-bold text-white smd:w-96 ${loading === true ? "cursor-not-allowed" : "cursor-pointer"
                                }`}
                            disabled={loading === true ? true : false}
                        >
                            {loading ? <Loader /> : "Reset Password"}
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
                </div>
            </form>
        </div>
    );
}
