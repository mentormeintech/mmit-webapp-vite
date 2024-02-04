import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registeredUser } from "../redux/slices/userslice";
import { signInUser } from "../utilities/apiClient";
import Alert from "../features/Alert";
import Loader from "./loader";
import { setToken } from "../utilities/axiosClient";

const SignupForm = (props) => {
  const dispatch = useDispatch();
  const [message, setmessage] = useState("");
  const [success, setsuccess] = useState(false);
  const [loading, setloading] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { user_type } = props;
  const url = user_type === "mentor" ? "mentor/signup" : "mentee/signup";



  async function registerUser(event) {
    try {
      setloading(true);
      setmessage("");
      // setTimeout(() => {
      //   setloading(false)
      // }, 3000);
      const response = await signInUser(url, event);
      if (response && response.success === true) {
        dispatch(
          registeredUser({ token: response.token, user: response.data }),
        );
        setmessage(response.message);
        Alert(response.message, "success");
        setsuccess(response.success);
        await setToken();
        setTimeout(() => {
          // response.data.user_type === 'mentor' && router.push('/mentorregist')
          response.data.user_type === "mentor" && navigate("/auth/career");
          response.data.user_type === "mentee" && navigate("/auth/signin");
          setloading(false);
        }, 40);
      } else {
        setmessage(response.message);
        Alert(response.message, "warning");
        setsuccess(response.success);
        setloading(false);
      }
      // event.preventDefault()
      // user_type === 'mentor' && router.push('/mentorregist')
    } catch (error) {
      Alert(error.message, "error");
      setsuccess(error.message);
      setloading(false);
    }
  }

  // #0F88D
  return (
    <div data-aos='fade-left' className="flex w-[99%] smd:w-[460px] lg:w-[500px] border-black sm:w-[420px] md:w-[400px] xl:w-[500px] mt-8 sm:mt-0 lg:ml-0 md:ml-[-100px] flex-col justify-center pb-10 sm:pl-8 md:pl-0 smd:relative smd:right-0 sm:flex sm:flex-col sm:justify-center lg:relative lg:right-8 xl:mx-auto">
      <div data-aos='fade-left' className="text-base font-normal xl:w-full leading-relaxed text-neutral-700 smd:w-[90%] ">
        {`"Take the Leap and Join Our Transformative Mentorship Program,
      Where Passionate Individuals Connect, Learn, and Inspire Each
      Other Towards Personal and Professional Excellence."`}
      </div>
      <form
        data-aos='fade-left'
        className="mt-5  border-black flex smd:w-[133%] sm:w-[467px] md:w-[528px] xl:w-[600px] lg:w-[580px] flex-col justify-center text-base smd:ml-0"
        onSubmit={handleSubmit(registerUser)}
      >
        {/* <form
        data-aos='fade-left'
        className="mt-5 flex w-9/12 md:w-[900px] flex-col justify-center text-base smd:ml-0"
        onSubmit={handleSubmit(registerUser)}
      > */}
        <div className="flex flex-col w-9/12">
          {/* <div className="flex flex-col smd:w-9/12"> */}
          <p className="xs:text-xl">First Name</p>
          <input
            className="inline-flex h-12 w-[134%] items-center justify-start rounded-lg border border-black border-opacity-20 pb-2 pl-5 pt-1.5 outline-none smd:w-full"
            type="text"
            placeholder="Ololade"
            {...register("first_name", { required: true })}
          />
          {errors.first_name && (
            <span className="mt-1 text-xs text-red-500">
              This field is required
            </span>
          )}
        </div>
        <div className="flex flex-col mt-3 mb-2 w-9/12">
          <p className="xs:text-xl ml-5 smd:ml-0">Last Name</p>
          <input
            className="inline-flex h-12 w-[134%] items-center justify-start rounded-lg border border-black border-opacity-20 pb-2 ml-0 pl-5 pt-1.5 outline-none smd:w-full"
            type="text"
            placeholder="Martha"
            {...register("last_name", { required: true })}
          />
          {errors.last_name && (
            <span className="mt-1 text-xs text-red-500">
              This field is required
            </span>
          )}
        </div>
        <div className="flex flex-col mt-2 mb-2 w-9/12">
          <p className="xs:text-xl">Email Address</p>
          <input
            className="inline-flex h-12 w-[134%] items-center justify-start rounded-lg border border-black border-opacity-20 pb-2\ ml-0 pl-5 pt-1.5 outline-none smd:w-full"
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
        <div className="flex flex-col w-9/12">
          <p className="mt-3 xs:text-xl">Password</p>
          <input
            className="inline-flex h-12 w-[134%] items-center justify-start rounded-lg border border-black border-opacity-20 pb-2 ml-0 pl-5 pt-1.5 outline-none smd:w-full"
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
        <div className="flex flex-col w-9/12">
          <p className="mt-3 xs:text-xl">Confirm Password</p>
          <input
            className="inline-flex h-12 w-[134%] items-center justify-start rounded-lg border border-black border-opacity-20 pb-2 ml-0 pl-5 pt-1.5 outline-none smd:w-full"
            type="password"
            name="repeat_password"
            placeholder="********"
            {...register("repeat_password", { required: true })}
          />
          {errors.repeat_password && (
            <span className="mt-1 text-xs text-red-500">
              This field is required
            </span>
          )}
        </div>
        <div className="mt-8 smd:w-[75%]">
          <div className="flex flex-col w-9/12">
            <button
              className={`inline-flex h-14 items-center justify-center whitespace-nowrap rounded-2xl bg-sky-600 py-3.5 text-xl font-bold text-white smd:px-[230px] sm:px-[175px] md:px-[200px] lg:px-[217px] xl:px-[225px] ${loading === true ? "cursor-not-allowed" : "cursor-pointer"
                }`}
              disabled={loading === true ? true : false}
            >
              {loading ? <Loader /> : "Sign Up"}
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
          <div className="mt-1 w-[100%] flex items-center smd:justify-center space-x-2">
            <div className="py-1 text-sm font-medium text-neutral-400">
              Already have an account?
            </div>
            <Link
              to={"/auth/signin"}
              className="py-1 text-sm font-medium text-sky-600 transition-all hover:text-secondary-500"
            >
              {"Sign In"}
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
