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
    <div data-aos='fade-left' className="flex w-[100%] smd:w-[500px] flex-col justify-center p-10 smd:relative smd:right-0 sm:flex sm:flex-col sm:justify-center lg:relative lg:right-8 xl:mx-auto">
      <div data-aos='fade-left' className="text-base font-normal xl:w-full leading-relaxed text-neutral-700 smd:w-[90%] ">
        {`"Take the Leap and Join Our Transformative Mentorship Program,
      Where Passionate Individuals Connect, Learn, and Inspire Each
      Other Towards Personal and Professional Excellence."`}
      </div>
      <form
        data-aos='fade-left'
        className="mt-5 flex w-[100%] flex-col justify-center text-base smd:ml-0"
        onSubmit={handleSubmit(registerUser)}
      >
        <div className="mb-[1rem] flex flex-col  smd:flex-row smd:items-center smd:w-full">
          <div className="flex flex-col smd:w-[40%]">
            <p className="xs:text-xl ">First Name</p>
            <input
              className="inline-flex h-12 w-[100%] items-center justify-start rounded-lg border border-black border-opacity-20 pb-2 pl-5 pt-1.5 outline-none smd:w-full"
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
          <div className="smd:ml-4  flex flex-col">
            <p className="xs:text-xl smd:ml-0">Last Name</p>
            <input
              className="inline-flex h-12 w-[100%] items-center justify-start rounded-lg border border-black border-opacity-20 pb-2 smd:ml-0 pl-5 pt-1.5 outline-none smd:w-full"
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
        </div>
        <div className="flex flex-col">
          <p className="xs:text-xl">Email Address</p>
          <input
            className="inline-flex h-12 w-[100%] items-center justify-start rounded-lg border border-black border-opacity-20 pb-2 pl-5 pr-12 pt-1.5 outline-none smd:w-96"
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
          <p className="mt-3 xs:text-xl">Password</p>
          <input
            className="inline-flex h-12 w-[100%] items-center justify-start rounded-lg border border-black border-opacity-20 pb-2 pl-5 pt-1.5 outline-none smd:w-96"
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
          <p className="mt-3 xs:text-xl">Confirm Password</p>
          <input
            className="inline-flex h-12 w-[100%] items-center justify-start rounded-lg border border-black border-opacity-20 pb-2 pl-5 pt-1.5 outline-none smd:w-96"
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
        <div className="mt-8 smd:w-[320px]">
          <div className="flex flex-col">
            <button
              className={`inline-flex h-14 w-[60%] smd:w-[100%] items-center justify-center whitespace-nowrap rounded-2xl bg-sky-600 py-3.5 text-xl font-bold text-white smd:px-52 ${loading === true ? "cursor-not-allowed" : "cursor-pointer"
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
          <div className="mt-1 flex flex-col smd:flex-row items-center justify-center w-[100%] space-x-2">
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
