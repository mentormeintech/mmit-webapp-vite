import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Input } from "reactstrap";
import { FaArrowLeft } from "react-icons/fa";
import Singupconfirm from "../components/signupconfirm";
import { useDispatch, useSelector, } from "react-redux";
import { useRouter } from 'next/navigation'
import { saveStepData } from "./../redux/slices/userslice";
import { signUpMentorStep2 } from "./../utilities/apiClient";
import Alert from "./../features/Alert";

const Mentorregister = () => {
  const [formstep, setFormstep] = useState(0);
  const { token, user, stepData } = useSelector(state => state.mentor_me_user)
  const [formData, setformData] = useState({
    gender: '',
    country: '',
    company: '',
    years_of_experience: '',
    linked_in_url: '',
    twitter_url: '',
    about_me: '',
    ...stepData
  })
  const [message, setmessage] = useState('Testing Mesage')
  const [success, setsuccess] = useState(false)
  const [loading, setloading] = useState(false)
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()
  const router = useRouter()
  const url = 'mentor/step1'
  // const url = user_type === 'mentor' ? 'mentor/step1' : 'mentor/register'

  const submitForm = (event) => {
    event.preventDefault();
    if (formData.linked_in_url !== '' && formData.about_me !== '') {
      dispatch(saveStepData({ formData: formData }))
      return registerUser(formData)
    }
    return Alert('Fields are empty', 'warning')
  };

  const backForm = () => {
    setFormstep(formstep - 1);
  };

  const completeForm = (event) => {
    event.preventDefault();
    if (formData.gender !== '' && formData.country !== '' && formData.company !== '') {
      dispatch(saveStepData({ formData }))
      setFormstep(formstep + 1);
      return
    }
    return Alert('Fields are empty', 'warning')
  };

  useEffect(() => {
    !token && router.push('/auth/signin')
    const progressbar = document.querySelector(".progress-bar__fill");
    const main = document.querySelector(".main");
    if (progressbar) {
      if (formstep === 0) {
        progressbar.style.width = "0%";
      } else if (formstep === 1) {
        progressbar.style.width = "50%";
      } else if (formstep === 2) {
        progressbar.style.width = "100%";
        main.style.display = "none";
      }
    }
  }, [formstep]);

  async function registerUser(formData) {
    try {
      setloading(true)
      setmessage('')
      const response = await signUpMentorStep2(url, formData)
      if (response && response.success === true) {
        dispatch(saveStepData({ formData: {} }))
        setmessage(response.message)
        Alert(response.message, 'success')
        setsuccess(response.success)
        setFormstep(formstep + 1);
        setTimeout(() => {
          setloading(false)
        }, 40);
      }
      else {
        setmessage(response.message)
        setsuccess(response.success)
        Alert(response.message, 'warning')
        setloading(false)
      }
    } catch (error) {
      Alert(error.message, 'error')
      setsuccess(error.message)
      setloading(false)
    }
  }

  return (
    <>
      <div className="main flex h-screen flex-row items-center justify-between bg-gray-100">
        <div className="relative flex flex-col items-center space-y-4">
          <div className="progress-bar relative -left-[30%]">
            <p className="flex text-sm font-semibold">Step {formstep} of 2</p>
            <div className="progress-bar__container flex h-1 w-32 flex-row bg-white">
              <div className="progress-bar__fill transition-width w-[50%] bg-black duration-300 ease-in-out"></div>
            </div>
          </div>
          <div className="my-auto flex flex-col">
            <div>
              <img
                width={59}
                height={62}
                src="/images/mmitlogo.png"
                alt="MMIT Logo"
                className="absolute left-[66px] top-20 h-[62px] w-[59px]"
              />
            </div>
            <div>
              <img
                src="/images/registerImg.png"
                alt="Registration Image"
                width={609}
                height={500}
              />
            </div>
            <div className="absolute left-[66px] top-[162px] w-[400px] text-left">
              <h1 className="text-[32px] font-bold  text-[#FE9B7E]">
                Mentee <span className="text-[white]">&</span> Experienced
                Professionals
              </h1>
            </div>
            <img
              src="/images/login.png"
              alt="Login Image"
              width={1000}
              height={80}
              className="absolute left-[66px] top-[314px] w-80"
            />
          </div>
        </div>
        <div className="relative mr-[99px]">
          {formstep === 0 && (
            <div className="absolute inset-0 -left-[29rem] flex items-center justify-center transition duration-300 ease-in-out">
              <div className="relative">
                <p className="mb-[1rem] ml-[2rem] text-xl font-medium">
                  Tell us about yourself
                </p>
                <div
                  id="form1"
                  className="flex w-[500px] flex-col items-center space-y-4 rounded-md border"
                >
                  <form className=" ml-[-7rem] w-96 p-6">
                    <div className="mb-4 flex flex-col items-center justify-start">
                      <p className="mb-[3rem] ml-[-11rem]">
                        Upload profile photo
                      </p>
                      <div
                        className="flex
						flex-row items-center"
                      >
                        <label className="mt-[-2rem] flex h-[100px] w-[100px] cursor-pointer flex-row items-center justify-center rounded-full bg-gray-300">
                          <Controller
                            name="file"
                            control={control}
                            render={({ field }) => (
                              <Input
                                className="hidden"
                                {...field}
                                type="file"
                                id="file"
                              />
                            )}
                          />
                          <img
                            src="/images/icons/upload.svg"
                            alt="Upload Icon"
                            width={20}
                            height={20}
                          />
                        </label>

                        <p className="ml-2">Make sure it is below 2mb</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p>Full Name</p>
                      <input
                        type="text"
                        // {...register("full_name", { required: true })}
                        className="w-full rounded  border bg-transparent px-3 py-2 outline-none"
                        value={`${user?.first_name} ${user?.last_name}`}
                        readOnly
                      />
                    </div>
                    <div className="mb-4">
                      <p>Email</p>
                      <input
                        type="text"
                        className="w-full rounded  border bg-transparent px-3 py-2 outline-none"
                        value={user?.email}
                        readOnly
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="gender" className="mb-2 block">
                        Gender:
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        required={true}
                        className="w-full rounded border  bg-transparent px-3 py-2 outline-none"
                        onChange={(event) => {
                          setformData({ ...formData, gender: event.target.value })
                        }}
                        value={formData.gender}
                      >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="prefer_not_to_say">
                          Prefer Not to Say
                        </option>
                      </select>
                      {formData?.gender === '' && <span className="text-xs text-red-500 mt-1">This field is required</span>}

                    </div>
                    <div className="mb-4">
                      <p>Which country do you live in?</p>
                      <input
                        type="text"
                        name="country"
                        required={true}
                        onChange={(event) => setformData({ ...formData, country: event.target.value })}
                        className="w-full rounded border  bg-transparent px-3 py-2 outline-none"
                        value={formData.country}
                      />
                      {formData?.country === '' && <span className="text-xs text-red-500 mt-1">This field is required</span>}
                    </div>
                    <div className="mb-4">
                      <p>Company / School</p>
                      <input
                        type="text"
                        name="company"
                        className="w-full rounded  border  bg-transparent px-3 py-2 outline-none"
                        required={true}
                        onChange={(event) => setformData({ ...formData, company: event.target.value })}
                        value={formData.company}
                      />
                      {errors.company === '' && <span className="text-xs text-red-500 mt-1">This field is required</span>}
                    </div>
                  </form>
                </div>
                <div>
                  <button
                    id="next1"
                    type="submit"
                    onClick={completeForm}
                    className="relative top-[rem] mt-[1rem] inline-flex h-9 w-28 items-center justify-center rounded bg-white px-5 py-3 shadow"
                    disabled={(!formData.gender && !formData.country && !formData.company) ? true : false}
                  >
                    <div className="text-base font-semibold text-black">
                      Continue
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
          {formstep === 1 && (
            <div className="absolute inset-0 -left-[29rem] -top-[4.3rem] flex flex-col items-center justify-center transition duration-300 ease-in-out">
              <div
                id="form2"
                className="flex  w-[500px] flex-col   items-center space-y-4 rounded-md border"
              >
                <form className=" ml-[-7rem] w-96 p-6">
                  <div className="mb-4 flex flex-col items-center justify-start">
                    <p className="ml-[-7.5rem]">
                      Years of professional experience
                    </p>
                    <input
                      type="number"
                      name="years_of_experience"
                      required={true}
                      onChange={(event) => setformData({ ...formData, years_of_experience: event.target.value })}
                      value={formData.years_of_experience}
                      className="w-full rounded  border  bg-transparent px-3 py-2 outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <p>LinkedIn URL Label</p>
                    <input
                      type="text"
                      name="linked_in_url"
                      required={true}
                      onChange={(event) => setformData({ ...formData, linked_in_url: event.target.value })}
                      value={formData.linked_in_url}
                      className="w-full rounded  border  bg-transparent px-3 py-2 outline-none"
                    />
                    {errors.linked_in_url && <span className="text-xs text-red-500 mt-1">This field is required</span>}
                  </div>
                  <div className="mb-4">
                    <p>Twitter(Optional)</p>
                    <input
                      type="text"
                      name="twitter_url"
                      onChange={(event) => setformData({ ...formData, twitter_url: event.target.value })}
                      value={formData.twitter_url}
                      className="w-full rounded  border  bg-transparent px-3 py-2 outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <p>Bio</p>
                    <textarea
                      type="text"
                      name="about_me"
                      required={true}
                      onChange={(event) => setformData({ ...formData, about_me: event.target.value })}
                      value={formData.about_me}
                      placeholder="I am John Doe a Front-End Developer
Experienced front-end developer skilled in HTML, CSS, and JavaScript. Proficient in responsive design and modern frameworks like React and Angular."
                      className="h-40 w-full  rounded  border bg-transparent px-3
                   py-2 outline-none"
                    />
                  </div>
                </form>
              </div>
              <div className="-ml-16 flex flex-row justify-evenly">
                <button
                  id="back1"
                  onClick={backForm}
                  className={`mt-[1rem] inline-flex h-9 w-28 items-center rounded bg-white px-5 py-3 shadow ${loading === true ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  disabled={loading === true ? true : false}
                >
                  <div className="flex items-center text-base font-semibold text-black">
                    <FaArrowLeft />
                    <p className="ml-3">Back</p>
                  </div>
                </button>
                <button
                  onClick={submitForm}
                  id="next2"
                  type="submit"
                  className={`ml-12 mt-[1rem] inline-flex h-9 w-28 items-center rounded bg-white px-5 py-3 shadow ${loading === true ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  disabled={loading === true ? true : false}
                >
                  <div className="text-base font-semibold text-black">
                    Continue
                  </div>
                </button>
              </div>
              <div className="-ml-16 flex flex-row justify-evenly">
                {message && <span className={`text-xs ${success === false ? 'text-red-500' : 'text-cyan-500'} mt-3`}>{message}</span>}
              </div>
            </div>
          )}
        </div>
      </div>
      {formstep === 2 && <Singupconfirm />}
    </>
  );
};

export default Mentorregister;
