import React, { useState } from "react";
import { CurrentMentor } from "../../components/CurrentMentor";
import Header_Signin from "../../components/Header_Signin";
import { useSelector } from "react-redux";
import MenteeSide from "../../components/MenteeSide";
import MenteesSettingsComps from "../../components/MenteesSettingsComps";

function MenteeSettings() {
  const [mentee, setMentee] = useState({
    profile: true,
    personalInfo: false,
    login: false,
  });
  const { dashboard } = useSelector((state) => state.mentor_me_user);

  function displayProfile() {
    setMentee({
      profile: true,
      personalInfo: false,
      login: false,
      notification: false,
    });
  }

  function displayPersonalInfo() {
    setMentee({
      profile: false,
      personalInfo: true,
      login: false,
      notification: false,
    });
  }

  function displayLogin() {
    setMentee({
      profile: false,
      personalInfo: false,
      login: true,
      notification: false,
    });
  }

  // <div className="pt-20 mx-3">
  //   <Header />
  //   <div className="flex">
  //     <MenteeSide />
  //     <section className="w-9/12 py-8 px-5">
  //       <div className="flex gap-x-3">
  //         <div className="border p-6">Help Center</div>
  //         <div className="border p-6">Contact us</div>
  //         <div className="border p-6">Privacy Policy</div>
  //         <div className="border p-6">FAQ</div>
  //       </div>
  //     </section>
  //   </div>
  // </div>
  return (
    <div className="pt-20 mx-3">
      <Header_Signin />
      <div className="flex text-[#454545]">
        <MenteeSide />
        <section className="w-9/12 mt-36 py-8 px-5">
          <h4 className="text-[#454545] text-xl font-semibold mb-12">
            Settings
          </h4>

          <ul className="flex items-center mb-12 w-10/12 justify-between">
            <li
              className={`relative cursor-pointer group ${mentee.profile ? "text-[#0F88D9]" : ""
                }`}
              onClick={displayProfile}
            >
              <div
                className={`group-hover:w-full transition-all delay-500 ease-in h-[2px] bg-[#0F88D9] ${mentee.profile ? "w-full" : "w-0"
                  } absolute left-0 -bottom-[3px]`}
              ></div>
              {"Mentee's Profile"}
            </li>

            <li
              className={`relative cursor-pointer group ${mentee.personalInfo ? "text-[#0F88D9]" : ""
                }`}
              onClick={displayPersonalInfo}
            >
              <div
                className={`group-hover:w-full transition-all delay-500 ease-in h-[2px] bg-[#0F88D9] absolute left-0 -bottom-[3px] ${mentee.personalInfo ? "w-full" : "w-0"
                  }`}
              ></div>{" "}
              Personal Information
            </li>

            <li
              className={`relative cursor-pointer group ${mentee.login ? "text-[#0F88D9]" : ""
                }`}
              onClick={displayLogin}
            >
              <div
                className={`group-hover:w-full transition-all delay-500 ease-in h-[2px] bg-[#0F88D9] absolute left-0 -bottom-[3px] ${mentee.login ? "w-full" : "w-0"
                  }`}
              ></div>
              Login and security
            </li>
          </ul>

          <div>
            <MenteesSettingsComps
              mentee={mentee}
              dashboard={dashboard}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default MenteeSettings;
