import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { TbEyeCog, TbTargetArrow } from "react-icons/tb";

const VisionMissionCard = ({ title, children, Icon }) => (
  <div
    className="grid max-w-sm gap-4 rounded-xl border px-6 py-12 text-center shadow-lg"
    data-aos="flip-left"
  >
    <h2 className="flex items-center justify-center gap-2 text-2xl font-bold text-primary-500">
      <span>{title}</span>
      <Icon className="text-2xl" />
    </h2>
    <p className="text-sm leading-relaxed">{children}</p>
  </div>
);

export const VisionMissionSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <section id="vision" className="w-full py-20">
      <div className="container mx-auto px-8 sm:px-10">
        <div className="flex flex-wrap justify-center gap-8">
          <VisionMissionCard title="Our Vision" Icon={TbEyeCog}>
            Empowering Africans transitioning into tech through a
            community-driven platform offering free mentorship
          </VisionMissionCard>

          <VisionMissionCard title="Our Mission" Icon={TbTargetArrow}>
            Enabling easy access to top-notch mentorship for Africans venturing
            into the tech landscape.
          </VisionMissionCard>
        </div>
      </div>
    </section>
  );
};
