import { useState } from 'react'
import { BsEyeSlash } from "react-icons/bs"
import { FaToggleOn } from "react-icons/fa"
import Personalinfo from "./personalinfo"
import MentorProfileInfo from "./mentorProfileInfo"
import { useForm } from 'react-hook-form';
import { patchRequest } from '../utilities/apiClient'

function MentorsSettingsComps(props) {
  const { mentorship, dashboard } = props

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema), 
  });

  const [formData, setFormData] = useState({
    yearsOfExperience: dashboard?.years_of_experience || '',
    tools: dashboard?.tools || '',
    company: dashboard?.company || '',
    role: dashboard && dashboard?.area_of_expertise && dashboard?.area_of_expertise[0]?.name || '',
    linkedInUrl: dashboard?.linked_in_url || '',
    twitterUrl: dashboard?.twitter_url || '',
    portfolioUrl: dashboard?.portfolio_url || '',
  });

  async function onSubmit(data) {
    console.log("onSubmit", data)
    try {
      // Send data to backend (replace with your actual API endpoint)
      const response = await patchRequest('/mentor/profile',data)

    } catch (error) {
      // Handle errors (e.g., display error message)
      console.error('Error updating profile:', error);
    }
  }


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  if (mentorship && mentorship?.profile) {
    return <>
      <MentorProfileInfo dashboard={dashboard} onSubmit={onSubmit} />
    </>
  }

  if (mentorship && mentorship?.personalInfo) {
    return <Personalinfo dashboard={dashboard} />
  }

  else if (mentorship && mentorship?.login) {
    return <section className="w-[500px]">
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

  else if (mentorship && mentorship?.notification) {
    return <section className="w-[716px]">
      <div className="flex items-center justify-between bg-[#F9F9F9] mb-4 p-3 rounded-lg">
        <p className="w-9/12 text-[20px] font-medium">When deactivated, you will not receive message requests or new messages from your mentees. Your previous messages will remain concealed until you reactivate this function.</p>
        <span className="text-4xl"><FaToggleOn /></span>
      </div>

      <div className="flex items-center justify-between bg-[#F9F9F9] mb-4 p-3 rounded-lg">
        <p className="w-9/12 text-[20px] font-medium">Enable messages from unknown mentees</p>
        <span className="text-4xl"><FaToggleOn /></span>
      </div>

      <div className="flex items-center justify-between bg-[#F9F9F9] mb-4 p-3 rounded-lg">
        <p className="w-9/12 text-[20px] font-medium">Email alert for unread messages</p>
        <span className="text-4xl"><FaToggleOn /></span>
      </div>
    </section>
  }

}

export default MentorsSettingsComps