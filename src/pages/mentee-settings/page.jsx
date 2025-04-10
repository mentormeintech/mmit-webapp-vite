// import React, { useState } from "react";
// import { CurrentMentor } from "../../components/CurrentMentor";
// import Header_Signin from "../../components/Header_Signin";
// import { useSelector } from "react-redux";
// import MenteeSide from "../../components/MenteeSide";
// import MenteesSettingsComps from "../../components/MenteesSettingsComps";

// function MenteeSettings() {
//   const [mentee, setMentee] = useState({
//     profile: true,
//     personalInfo: false,
//     login: false,
//   });
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const { dashboard } = useSelector((state) => state.mentor_me_user);

//   function displayProfile() {
//     setMentee({
//       profile: true,
//       personalInfo: false,
//       login: false,
//       notification: false,
//     });
//   }

//   function displayPersonalInfo() {
//     setMentee({
//       profile: false,
//       personalInfo: true,
//       login: false,
//       notification: false,
//     });
//   }

//   function displayLogin() {
//     setMentee({
//       profile: false,
//       personalInfo: false,
//       login: true,
//       notification: false,
//     });
//   }

//   const toggleSidebar = () => {
//     try {
//       setIsSidebarOpen(!isSidebarOpen);
//     } catch (error) {
//       alert(error.message)
//     }
//   };
//   return (
//     <div className="pt-20 mx-3">
//       <Header_Signin toggleSidebar={toggleSidebar} />
//       <div className="flex text-[#454545]">
//         <MenteeSide toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
//         <section className="w-9/12 mt-[3rem] py-8 px-5">
//           <h4 className="text-[#454545] text-xl font-semibold mb-12">
//             Settings
//           </h4>

//           <ul className="flex items-center mb-12 w-10/12 justify-between">
//             <li
//               className={`relative cursor-pointer group ${mentee.profile ? "text-[#0F88D9]" : ""
//                 }`}
//               onClick={displayProfile}
//             >
//               <div
//                 className={`group-hover:w-full transition-all delay-500 ease-in h-[2px] bg-[#0F88D9] ${mentee.profile ? "w-full" : "w-0"
//                   } absolute left-0 -bottom-[3px]`}
//               ></div>
//               {"Mentee's Profile"}
//             </li>

//             <li
//               className={`relative cursor-pointer group ${mentee.personalInfo ? "text-[#0F88D9]" : ""
//                 }`}
//               onClick={displayPersonalInfo}
//             >
//               <div
//                 className={`group-hover:w-full transition-all delay-500 ease-in h-[2px] bg-[#0F88D9] absolute left-0 -bottom-[3px] ${mentee.personalInfo ? "w-full" : "w-0"
//                   }`}
//               ></div>{" "}
//               Personal Information
//             </li>

//             <li
//               className={`relative cursor-pointer group ${mentee.login ? "text-[#0F88D9]" : ""
//                 }`}
//               onClick={displayLogin}
//             >
//               <div
//                 className={`group-hover:w-full transition-all delay-500 ease-in h-[2px] bg-[#0F88D9] absolute left-0 -bottom-[3px] ${mentee.login ? "w-full" : "w-0"
//                   }`}
//               ></div>
//               Login and security
//             </li>
//           </ul>

//           <div>
//             <MenteesSettingsComps
//               mentee={mentee}
//               dashboard={dashboard}
//             />
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default MenteeSettings;

import React, { useState } from "react";
import Header_Signin from "../../components/Header_Signin";
import { useSelector } from "react-redux";
import MenteeSide from "../../components/MenteeSide";
import MenteesSettingsComps from "../../components/MenteesSettingsComps";
import Tabs from "../../components/Tabs";

function MenteeSettings() {
  const [mentee, setMentee] = useState({
    profile: false,
    personalInfo: true,
    login: false,
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  const toggleSidebar = () => {
    try {
      setIsSidebarOpen(!isSidebarOpen);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="pt-20 mx-3">
      <Header_Signin toggleSidebar={toggleSidebar} />
      <div className="flex flex-col lg:flex-row text-[#454545]">
        {/* Sidebar */}
        <MenteeSide toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        {/* Main Content */}
        <section className="w-full lg:w-9/12 mt-[3rem] py-8 px-4 lg:px-5">
          <h4 className="text-[#454545] text-lg lg:text-xl font-semibold mb-8 lg:mb-12">
            Settings
          </h4>

          {/* Navigation Tabs */}
          <Tabs
            mentee={mentee}
            displayProfile={displayProfile}
            displayPersonalInfo={displayPersonalInfo}
            displayLogin={displayLogin}
          />
          {/* Settings Components */}
          <div>
            <MenteesSettingsComps mentee={mentee} dashboard={dashboard} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default MenteeSettings;
