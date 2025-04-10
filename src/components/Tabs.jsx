import React from "react";

const TabItem = ({ label, isActive, onClick }) => {
    return (
        <li
            className={`relative cursor-pointer group text-sm lg:text-base ${isActive ? "text-[#0F88D9]" : ""
                }`}
            onClick={onClick}
        >
            <div
                className={`group-hover:w-full transition-all delay-500 ease-in h-[2px] bg-[#0F88D9] ${isActive ? "w-full" : "w-0"
                    } absolute left-0 -bottom-[3px]`}
            ></div>
            {label}
        </li>
    );
};

const Tabs = ({ mentee, displayProfile, displayPersonalInfo, displayLogin }) => {
    return (
      <ul className="flex flex-wrap items-center mb-8 lg:mb-12 w-full lg:w-7/12 justify-start gap-10">
        {/* <TabItem
          label={"Mentee's Profile"}
          isActive={mentee.profile}
          onClick={displayProfile}
        /> */}
        <TabItem
          label="Personal Information"
          isActive={mentee.personalInfo}
          onClick={displayPersonalInfo}
        />
        <TabItem
          label="Login and security"
          isActive={mentee.login}
          onClick={displayLogin}
        />
      </ul>
    );
};

export default Tabs;