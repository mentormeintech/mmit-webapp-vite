import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Input } from "reactstrap";
import { FaArrowLeft } from "react-icons/fa";
import Singupconfirm from "../../components/signupconfirm";
import { useDispatch, useSelector, } from "react-redux";
import { saveStepData } from "../../redux/slices/userslice";
import { signUpMentorStep2 } from "../../utilities/apiClient";
import { useNavigate } from "react-router-dom";
import Alert from "../../features/Alert";
import { setToken } from "../../utilities/axiosClient";
import { getValidToken } from "../../utilities/tokenClient";

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
  const [message, setmessage] = useState('')
  const [success, setsuccess] = useState(false)
  const [loading, setloading] = useState(false)
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()
  const navigation = useNavigate()
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
    !token && navigation('/auth/signin')
    const progressbar = document.querySelector(".progress-bar__fill");
    const main = document.querySelector(".main");
    if (progressbar) {
      if (formstep === 0) {
        progressbar.style.width = "30%";
      } else if (formstep === 1) {
        progressbar.style.width = "60%";
      } else if (formstep === 2) {
        progressbar.style.width = "100%";
        main.style.display = "none";
      }
    }
  }, [formstep]);

  async function registerUser(formData) {
    try {
      setToken(getValidToken())
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
      {formstep != 2 && <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Progress Bar */}
        <div className="w-full p-4 bg-white shadow-sm">
          <div className="flex justify-center items-center">
            <p className="text-sm font-semibold">Step {formstep} of 2</p>
            <div className="ml-4 w-32 bg-gray-300 rounded-full h-1.5">
              <div className={`h-1.5 bg-black rounded-full`} style={{ width: formstep === 0 ? '30%' : (formstep === 1 ? '60%' : '100%') }}></div>
              {/* <div className={`h-1.5 bg-black rounded-full`} style={{ width: formstep === 1 ? '50%' : '100%' }}></div> */}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main flex h-screen flex-col lg:flex-row items-center bg-gray-100 p-4">
          {/* Left Section: Images and Absolute Elements */}
          <div className="hidden lg:flex w-1/2 flex-col items-center justify-center">
            {/* Registration Image */}
            <div className="relative flex flex-col items-center">
              {/* Main Image */}
              <div className="w-[300px] lg:w-[500px]">
                <img
                  src="/images/registerImg.png"
                  alt="Registration Image"
                  className="w-full h-auto"
                />
              </div>

              {/* Headline */}
              <div className="absolute top-[8rem] lg:top-[10rem] w-full text-center">
                <h1 className="text-2xl lg:text-3xl font-bold text-[#FE9B7E]">
                  Mentee <span className="text-white"> & </span> Experienced Professionals
                </h1>
              </div>

              {/* Login Image */}
              <div className="absolute top-[14rem] lg:top-[16rem] w-[200px] lg:w-[250px]">
                <img
                  src="/images/login.png"
                  alt="Login Image"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Right Section: Form */}
          <div className="w-full lg:w-3/4 mt-10 lg:mt-0 px-4">
            {formstep === 0 && (
              <div className="flex items-center justify-center transition-all duration-300 ease-in-out">
                <div className="bg-white p-6 lg:p-8 rounded-lg shadow-lg w-full lg:w-[80%]">
                  <h2 className="text-xl font-medium mb-4">Tell us about yourself</h2>

                  <form className="space-y-4">
                    {/* Upload Profile Photo */}
                    <div className="flex flex-col space-y-2">
                      <label className="text-sm font-semibold">Upload profile photo</label>
                      <label className="cursor-pointer">
                        <input type="file" className="hidden" />
                        <div className="flex items-center justify-center h-24 w-24 rounded-full bg-gray-300">
                          <img src="/images/icons/upload.svg" alt="Upload Icon" className="w-6 h-6" />
                        </div>
                      </label>
                      <p className="text-xs text-gray-500">Make sure it is below 2MB</p>
                    </div>

                    {/* Input Fields */}
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-semibold">Full Name</label>
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded"
                          value={`${user?.first_name} ${user?.last_name}`}
                          readOnly
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold">Email</label>
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded"
                          value={user?.email}
                          readOnly
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold">Gender</label>
                        <select
                          className="w-full p-2 border border-gray-300 rounded"
                          onChange={(event) =>
                            setformData({ ...formData, gender: event.target.value })
                          }
                          value={formData.gender}
                        >
                          <option value="">Select</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="prefer_not_to_say">Prefer Not to Say</option>
                        </select>
                        {formData.gender === '' && (
                          <span className="text-xs text-red-500">This field is required</span>
                        )}
                      </div>

                      {/* Additional Fields */}
                      <div>
                        <label className="text-sm font-semibold">Country</label>
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded"
                          onChange={(event) =>
                            setformData({ ...formData, country: event.target.value })
                          }
                          value={formData.country}
                        />
                        {formData.country === '' && (
                          <span className="text-xs text-red-500">This field is required</span>
                        )}
                      </div>

                      <div>
                        <label className="text-sm font-semibold">Company / School</label>
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded"
                          onChange={(event) =>
                            setformData({ ...formData, company: event.target.value })
                          }
                          value={formData.company}
                        />
                        {errors.company === '' && (
                          <span className="text-xs text-red-500">This field is required</span>
                        )}
                      </div>
                    </div>

                    {/* Continue Button */}
                    <div className="flex justify-center mt-6">
                      <button
                        className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition-colors"
                        onClick={completeForm}
                        disabled={!formData.gender || !formData.country || !formData.company}
                      >
                        Continue
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Step 2 Form */}
            {formstep === 1 && (
              <div className="flex flex-col items-center justify-center">
                {/* Second Form */}
                <div className="bg-white p-6 lg:p-8 rounded-lg shadow-lg w-full lg:w-[80%]">
                  <h2 className="text-xl font-medium mb-4">More Information</h2>
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-semibold">Years of Experience</label>
                      <input
                        type="number"
                        className="w-full p-2 border border-gray-300 rounded"
                        onChange={(event) =>
                          setformData({ ...formData, years_of_experience: event.target.value })
                        }
                        value={formData.years_of_experience}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold">LinkedIn URL</label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded"
                        onChange={(event) =>
                          setformData({ ...formData, linked_in_url: event.target.value })}
                        value={formData.linked_in_url}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold">Twitter (Optional)</label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded"
                        onChange={(event) =>
                          setformData({ ...formData, twitter_url: event.target.value })}
                        value={formData.twitter_url}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold">Bio</label>
                      <textarea
                        className="w-full p-2 h-32 border border-gray-300 rounded"
                        placeholder="Tell us more about yourself"
                        onChange={(event) =>
                          setformData({ ...formData, about_me: event.target.value })}
                        value={formData.about_me}
                      />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between mt-6">
                      <button
                        className="bg-gray-200 text-black py-2 px-6 rounded hover:bg-gray-300 transition-colors"
                        onClick={backForm}
                      >
                        Back
                      </button>
                      <button
                        className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition-colors"
                        onClick={submitForm}
                      >
                        Continue
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>}

      {formstep === 2 && <Singupconfirm />}
    </>
  );
};

export default Mentorregister;
