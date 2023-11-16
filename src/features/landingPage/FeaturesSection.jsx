import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { GiBookmarklet } from "react-icons/gi";
import { PiChatsCircleFill } from "react-icons/pi";
import { BsFillPeopleFill, BsShieldFillCheck } from "react-icons/bs";
import { Link } from "react-router-dom";

const features = [
  { Icon: FaUser, text: "Expert Tech Mentors" },
  { Icon: BsShieldFillCheck, text: "Personalized Mentorship" },
  { Icon: GiBookmarklet, text: "Accessible Learning" },
  { Icon: PiChatsCircleFill, text: "Networking Opportunities" },
  { Icon: BsFillPeopleFill, text: "Community Collaboration" },
  { Icon: IoIosPeople, text: "Career Growth Support" },
];

const FeatureCard = ({ Icon, text, index }) => (
  <div
    className="flex items-center justify-center gap-3 rounded-sm bg-white px-8 py-4 font-medium"
    data-aos="fade-down"
    data-aos-delay={index * 100}
  >
    <Icon className="text-lg text-secondary-500" />
    <span className="text-sm">{text}</span>
  </div>
);

export const FeaturesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <section id="vision" className="w-full bg-secondary-200 py-20">
      <div className="container mx-auto grid gap-8 px-8 sm:px-10">
        <h2 className="text-2xl font-bold text-secondary-500 sm:text-center sm:text-3xl">
          Why MMIT?
        </h2>

        <div className="mx-auto flex max-w-6xl flex-wrap justify-start gap-x-2 gap-y-4 sm:justify-center">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>

        <div className="grid gap-8" data-aos="fade-down">
          <p className="mx-auto max-w-3xl pt-8 text-center text-sm">
            Don&apos;t miss out on the opportunity to be part of a dynamic and
            inspiring community of learners and educators. Click the &quot;Join
            Our Community&quot; button below to get started on your journey
            towards knowledge and growth.
          </p>
          <Link
            to="/findamentor"
            className="mx-auto w-fit rounded border border-primary-500 bg-primary-500 px-6 py-2 text-center font-medium text-white transition-all hover:bg-opacity-70"
          >
            Join Our Community
          </Link>
        </div>
      </div>
    </section>
  );
};
