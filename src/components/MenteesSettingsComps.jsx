import { BsEyeSlash } from "react-icons/bs"
import Personalinfo from "./personalinfo"

function MenteesSettingsComps(props) {
  const { mentee, dashboard } = props
  if (mentee && mentee?.personalInfo) {
    return <Personalinfo dashboard={dashboard} />
  }

  else if (mentee && mentee?.login) {
    return <section className="w-full max-w-[500px]">
      {/* Old Password Field */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <p className="text-sm lg:text-base mb-2">Old Password</p>
        </div>
        <div className="relative">
          <input
            type="password"
            id="old-password"
            placeholder="Enter your old password"
            className="w-full border outline-none h-10 rounded-md px-3 text-sm lg:text-base"
          />
          <i className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
            <BsEyeSlash />
          </i>
        </div>
      </div>

      {/* New Password Field */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <p className="text-sm lg:text-base mb-2">New Password</p>
        </div>
        <div className="relative">
          <input
            type="password"
            id="new-password"
            placeholder="Enter your new password"
            className="w-full border outline-none h-10 rounded-md px-3 text-sm lg:text-base"
          />
          <i className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
            <BsEyeSlash />
          </i>
        </div>
      </div>

      {/* Save Button */}
      <button className="bg-[#0F88D9] text-white rounded-md w-full h-10 text-sm lg:text-base hover:bg-[#2C88D8] transition-colors duration-300">
        Save Changes
      </button>
    </section>
  }

  else if (mentee && mentee?.profile) {
    return <>
      <form className="w-full max-w-[400px] lg:max-w-[500px] float-left">
        {/* Interest Field */}
        <div className="w-full mb-6">
          <div className="flex justify-between items-center mb-3">
            <p className="text-sm lg:text-base">Interest</p>
            <label htmlFor="experience" className="cursor-pointer text-sm lg:text-base text-[#0F88D9]">
              Edit
            </label>
          </div>
          <input
            type="text"
            id="experience"
            placeholder="N/A"
            className="outline-none border-b-[0.02px] w-full border-[#434343] pb-2 text-sm lg:text-base"
            defaultValue={dashboard?.years_of_experience || ""}
          />
        </div>

        {/* LinkedIn Profile Field */}
        <div className="w-full mb-6">
          <div className="flex justify-between items-center mb-3">
            <p className="text-sm lg:text-base">LinkedIn Profile</p>
            <label htmlFor="tools" className="cursor-pointer text-sm lg:text-base text-[#0F88D9]">
              Edit
            </label>
          </div>
          <input
            type="text"
            id="tools"
            placeholder="N/A"
            className="outline-none border-b-[0.02px] w-full border-[#434343] pb-2 text-sm lg:text-base"
            defaultValue={dashboard?.tools || ""}
          />
        </div>

        {/* Twitter Profile Field */}
        <div className="w-full mb-6">
          <div className="flex justify-between items-center mb-3">
            <p className="text-sm lg:text-base">Twitter Profile</p>
            <label htmlFor="company" className="cursor-pointer text-sm lg:text-base text-[#0F88D9]">
              Edit
            </label>
          </div>
          <input
            type="text"
            id="company"
            placeholder="N/A"
            className="outline-none border-b-[0.02px] w-full border-[#434343] pb-2 text-sm lg:text-base"
            defaultValue={dashboard?.company || ""}
          />
        </div>

        {/* Save Button */}
        <button className="bg-[#FE9B7E] rounded-md w-full lg:w-96 h-11 text-white text-sm lg:text-base hover:bg-[#FF8A6A] transition-colors duration-300">
          Save
        </button>
      </form>
    </>
  }

}

export default MenteesSettingsComps