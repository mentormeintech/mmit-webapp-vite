import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Alert from '../Alert'
import { postRequest } from "../../utilities/apiClient";
import Loader from "../../Components/loader";

export const NewsletterSection = () => {
  const [loading, setloading] = useState(false)
  const [email, setemail] = useState('')
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  async function subscribeToNewsLetter(event) {
    try {
      event.preventDefault()
      if (!email) {
        setloading(false)
        Alert(`No email provided`, 'warning')
      }
      else {
        setloading(true)
        const response = await postRequest('subscribe', { email })
        if (response && response.success === true) {
          Alert(`${response.message}`, 'success');
          setloading(false);
        }
        else {
          Alert(`${response.message}`, 'warning');
          setloading(false)
        }
      }
    } catch (error) {
      setloading(false)
      Alert(error.message, 'danger')
    }
  }

  return (
    <section id="newsletter" className="w-full py-20">
      <div
        className="container mx-auto grid gap-6 px-8 sm:px-20"
        data-aos="fade-down"
      >
        <div className="grid gap-4">
          <h2 className="text-2xl font-semibold text-secondary-500 sm:text-3xl">
            Newsletter
          </h2>
          <p className="text-sm sm:text-base">
            Subscribe to our newsletter to get updates on our program and other
            exciting news.
          </p>
          <div className="flex-gap flex max-w-3xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              name="email"
              onChange={(event) => setemail(event.target.value)}
              placeholder="Enter your email"
              className="w-full rounded border border-transparent bg-secondary-200 px-4 py-2 text-sm transition-all hover:border-primary-500 focus:border-secondary-500 focus:outline-none"
            />
            <button
              onClick={(event) => subscribeToNewsLetter(event)}
              type="button"
              disabled={loading === true ? true : false}
              className={`${loading === true ? 'cursor-not-allowed' : 'cursor-pointer'} w-fit rounded border border-primary-500 bg-primary-500 px-6 py-2 text-sm font-medium text-white transition-all hover:bg-opacity-70`}
            >
              {loading ? <Loader /> : 'Subscribe'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
