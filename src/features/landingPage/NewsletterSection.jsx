import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Alert from "../Alert";
import { postRequest } from "../../utilities/apiClient";
import Loader from "../../components/loader";

export const NewsletterSection = () => {
  const [loading, setloading] = useState(false);
  const [email, setemail] = useState("");
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  async function subscribeToNewsLetter(event) {
    try {
      event.preventDefault();
      if (!email) {
        setloading(false);
        Alert(`No email provided`, "warning");
      } else {
        setloading(true);
        const response = await postRequest("subscribe", { email });
        if (response && response.success === true) {
          Alert(`${response.message}`, "success");
          setloading(false);
        } else {
          Alert(`${response.message}`, "warning");
          setloading(false);
        }
      }
    } catch (error) {
      setloading(false);
      Alert(error.message, "danger");
    }
  }

  return (
    <section id="newsletter" className="w-full py-20">
      <div
        className="container mx-auto grid gap-6 px-8 sm:px-20"
        data-aos="fade-down"
      >
        <div className="grid gap-4">
          {/* <h2 className="text-2xl font-semibold text-secondary-500 sm:text-3xl">
            Newsletter
          </h2> */}
          <h2 className="text-sm sm:text-base md:text-2xl md:mt-3 text-center">
            To get more information subscribe to our news letter
          </h2>
          <div className="flex max-w-3xl flex-col gap-4 sm:flex-row md:max-w-[90%] md:justify-center md:items-center md:mx-auto md:w-full">
            <p className="md:w-[35%] md:font-bold md:text-xl text-[#0F88D9]">
              Subscribe to our Newsletter
            </p>
            <div className="flex flex-col md:flex-row bg-secondary-200 md:p-2 md:w-[85%]">
              <input
                type="email"
                name="email"
                onChange={(event) => setemail(event.target.value)}
                placeholder="Enter your email address"
                className="w-full rounded border border-transparent bg-secondary-200 px-4 py-2 text-sm transition-all hover:border-primary-500 focus:border-secondary-500 focus:outline-none"
              />
              <button
                onClick={(event) => subscribeToNewsLetter(event)}
                type="button"
                disabled={loading === true ? true : false}
                className={`${
                  loading === true ? "cursor-not-allowed" : "cursor-pointer"
                } w-fit rounded border border-[#0F88D9] bg-[#0F88D9] px-6 py-2 md:py-3 md:text-lg text-sm font-medium text-white transition-all hover:bg-opacity-70`}
              >
                {loading ? <Loader /> : "Subscribe"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
