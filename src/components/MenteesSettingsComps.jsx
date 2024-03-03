import { BsEyeSlash } from "react-icons/bs"
import Personalinfo from "./personalinfo"

function MenteesSettingsComps(props) {
  const { mentee, dashboard } = props
  if (mentee && mentee?.personalInfo) {
    return <Personalinfo dashboard={dashboard} />
  }

  else if (mentee && mentee?.login) {
    return <section className="w-[500px]">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <p>Email Address</p>
          <label htmlFor="email" className="text-[#0F88D9]">Change Email Address</label>
        </div>
        <div className="relative">
          <input type="email" readOnly={true} id="email" className="w-full border outline-none h-10 rounded-md" />
          <i className="absolute right-14 top-1/2 -translate-y-1/2 cursor-pointer"><BsEyeSlash /></i>
        </div>
      </div>

	  <div className="mb-6">
        <div className="flex items-center justify-between">
          <p>Change Password</p>
          <label htmlFor="password" className="text-[#0F88D9]">Update</label>
        </div>
        <div className="relative">
          <input type="password" readOnly={true} id="password" className="w-full border outline-none h-10 rounded-md" />
          <i className="absolute right-14 top-1/2 -translate-y-1/2 cursor-pointer"><BsEyeSlash /></i>
        </div>
      </div>

      <button className="text-[#0F88D9] cursor-pointer">Delete Account</button>
    </section>
  }

  else if (mentee && mentee?.profile) {
    return <>
      <form>
        <section className="w-72">
          <div className="w-full mb-8">
            <div className="flex justify-between items-center mb-3">
              <p>Interest</p>
              <label htmlFor="experience" className="cursor-pointer">Edit</label>
            </div>
            <input type="text" id="experience" placeholder="N/A" className="outline-none border-b-[0.02px] w-full border-[#434343] pb-3" defaultValue={dashboard?.years_of_experience} />
          </div>

          <div className="w-full mb-8">
            <div className="flex justify-between items-center mb-3">
              <p>LinkedIn Profile</p>
              <label htmlFor="tools" className="cursor-pointer">Edit</label>
            </div>
            <input type="text" id="tools" placeholder="N/A" className="outline-none border-b-[0.02px] w-full border-[#434343] pb-3" defaultValue={dashboard?.tools || ''} />
          </div>

          <div className="w-full mb-8">
            <div className="flex justify-between items-center mb-3">
              <p>Twitter Profile</p>
              <label htmlFor="company" className="cursor-pointer">Edit</label>
            </div>
            <input type="text" id="company" placeholder="N/A" className="outline-none border-b-[0.02px] w-full border-[#434343] pb-3" defaultValue={dashboard?.company || ''} />
          </div>
        </section>

        <button className="bg-[#FE9B7E] rounded-md w-96 h-11 text-white">save</button>
      </form>
    </>
  }
}

export default MenteesSettingsComps