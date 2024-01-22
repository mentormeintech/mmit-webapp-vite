import Header from "../../components/Header";
import Footer from "../../components/footer";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { useParams } from "react-router-dom";

const MentorProfile = () => {

  const { mentor_name } = useParams()
  console.log('mentor_name', mentor_name)

  return (
    <div>
      <Header />
      <div data-aos="fade-down" className="background-dp relative w-[100%]">
        <img
          data-aos="fade-down"
          src="/images/background.png"
          width={2000}
          alt="mentor-dp"
          className="absolute w-[100%]"
          height={50}
        />
      </div>
      <div className="relative" data-aos="fade-right">
        <img
          className="relative left-24 top-36 h-[200px] w-[200px] rounded-full"
          src="/images/profileImage1.png"
          width={2000}
          alt="profilephoto"
          height={50}
        />
        <div
          data-aos="fade-right"
          className="bg-grey relative left-80 top-11 mt-2
        "
        >
          <h1 className="text-4xl font-semibold capitalize mb-2">{mentor_name || 'NIL'}</h1>
          <p className="texl-xl">Product Designer at PDI ltd.</p>
        </div>
      </div>
      <div data-aos="fade-up-right" data-aos-easing="linear"
        data-aos-duration="900" className="m-auto mt-44 max-w-screen-xl px-11">
        <h1 className="mb-5 text-4xl font-semibold">Overview</h1>
        <div className="flex max-w-screen-xl flex-col items-center rounded-md border bg-[#E4CBC81A] p-8 text-left text-base">
          <div className="h-auto">
            <span className="text-base font-medium leading-7 text-zinc-800">
              Hi, I am Amarachi, a Product Designer with nearly four years of
              experience, my background primarily lies in Visual Design.
              <br />
              <br />
              For the past years, I dedicated part of my role to fostering a
              strong design team culture. I believe in the power of scaling
              design rituals and maintaining a high-quality bar as the team
              expands. I believe in the value of collaborative problem-solving
              to drive innovative solutions and in transparent and honest
              communication to foster alignment and drive outcomes. I wish I
              could tell you I learned this the easy way.
              <br />
              <br />I believe I have a lot to share with others when it comes to
              <br />
              <br />
            </span>
            <span className="text-base font-medium leading-7 text-zinc-800">
              - dealing with complexity and ambiguity in this new world of
              uncertainty
              <br />
              - how to articulate design decisions <br />
              - ways of working
              <br />
              - design career path
              <br />
              - build your portfolio case or improve existing
              <br />
              - design career path
              <br />
              - figma, design systems, UI design
              <br />
              - UX research methods
              <br />
              - design process
              <br />
            </span>
            <span className="text-base font-medium leading-7 text-zinc-800"></span>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-offset="300"
          data-aos-easing="ease-in-sine" className="mt-8 inline-flex h-10 w-44 items-center justify-start gap-5">
          <div className="h-8 w-8">
            <div className="flex h-8 items-center justify-center rounded-full bg-zinc-300">
              <FaTwitter />
            </div>
          </div>
          <div className="h-8 w-8">
            <div className="flex h-8 items-center justify-center rounded-full bg-zinc-300">
              <GrMail />
            </div>
          </div>
          <div className="h-8 w-8">
            <div className="flex h-8 items-center justify-center rounded-full bg-zinc-300">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        <div ata-aos="zoom-in" data-aos-offset="300"
          data-aos-easing="ease-in-sine" className="mt-11 flex justify-between">
          <div ata-aos="zoom-in" data-aos-offset="300"
          data-aos-easing="ease-in-sine">
            <h1 className="whitespace-nowrap text-4xl font-semibold text-black">
              Community Statistics
            </h1>
            <p className="text-xl font-medium text-neutral-700">
              Top areas of impact
            </p>
            <p className="text-base font-normal text-neutral-700">
              Topics to be discussed during session
            </p>
          </div>
          <div className="topics flex  flex-row items-end gap-6 whitespace-nowrap text-sm">
            <div className="w-30 border-grey flex h-11 items-center justify-center rounded border px-4">
              General mentorship
            </div>
            <div className="w-30 border-grey flex h-11 items-center justify-center rounded border px-4">
              Design career path
            </div>
            <div className="w-30 border-grey flex h-11 items-center justify-center rounded border px-4">
              UX meaning
            </div>
            <div className="w-30 border-grey flex h-11 items-center justify-center rounded border px-4">
              Interaction design
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default MentorProfile;
