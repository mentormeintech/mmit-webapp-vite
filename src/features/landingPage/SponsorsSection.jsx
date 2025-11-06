import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { PiMetaLogoBold } from "react-icons/pi";
import { FaSkype, FaVimeoV } from "react-icons/fa";

export const SponsorsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <section
      id="sponsors"
      className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-8 py-20 text-7xl xl:px-20"
    >
      <div data-aos="fade-down">
        <FaSkype />
      </div>
      <div data-aos="fade-down" data-aos-delay="200">
        <FaVimeoV />
      </div>
      <div data-aos="fade-down" data-aos-delay="400">
        <PiMetaLogoBold />
      </div>
    </section>
  );
};
