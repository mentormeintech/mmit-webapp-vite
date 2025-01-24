import {useState} from 'react'
import { BsEyeSlash } from "react-icons/bs"
import { FaToggleOn } from "react-icons/fa"
import Personalinfo from "./personalinfo"

function MentorsSettingsComps(props) {
  const { mentorship, dashboard } = props

  const [formData, setFormData] = useState({
    yearsOfExperience: dashboard?.years_of_experience || '',
    tools: dashboard?.tools || '',
    company: dashboard?.company || '',
    role: dashboard && dashboard?.area_of_expertise && dashboard?.area_of_expertise[0]?.name || '',
    linkedInUrl: dashboard?.linked_in_url || '',
    twitterUrl: dashboard?.twitter_url || '',
    portfolioUrl: dashboard?.portfolio_url || '',
  });

  async function handleSubmit(event) {
    event.preventDefault(); 
    console.log("formData", JSON.stringify(formData))
    // try {
    //   // Send data to backend (replace with your actual API endpoint)
    //   const response = await fetch('/api/update-profile', { 
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }

    //   const data = await response.json(); 

    //   // Handle success (e.g., show success message, update local state)
    //   console.log('Profile updated successfully:', data); 

    // } catch (error) {
    //   // Handle errors (e.g., display error message)
    //   console.error('Error updating profile:', error); 
    // }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


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

  else if (mentorship && mentorship?.profile) {
    return <>
    <form onSubmit={handleSubmit}>
      <section className="w-72">
        <div className="w-full mb-8">
          <div className="flex justify-between items-center mb-3">
            <p>Level of Experience</p>
            <label htmlFor="yearsOfExperience" className="cursor-pointer">Edit</label> 
          </div>
          <input 
            type="text" 
            id="yearsOfExperience" 
            placeholder="N/A" 
            className="outline-none border-b-[0.02px] w-full border-[#434343] pb-3" 
            value={formData.yearsOfExperience} 
            onChange={handleChange} 
          />
        </div>

        <div className="w-full mb-8">
          <div className="flex justify-between items-center mb-3">
            <p>Tools</p>
            <label htmlFor="tools" className="cursor-pointer">Edit</label>
          </div>
          <input 
            type="text" 
            id="tools" 
            placeholder="N/A" 
            className="outline-none border-b-[0.02px] w-full border-[#434343] pb-3" 
            value={formData.tools} 
            onChange={handleChange} 
          />
        </div>

        <div className="w-full mb-8">
          <div className="flex justify-between items-center mb-3">
            <p>Company</p>
            <label htmlFor="company" className="cursor-pointer">Edit</label>
          </div>
          <input 
            type="text" 
            id="company" 
            placeholder="N/A" 
            className="outline-none border-b-[0.02px] w-full border-[#434343] pb-3" 
            value={formData.company} 
            onChange={handleChange} 
          />
        </div>

        <div className="w-full mb-8">
          <div className="flex justify-between items-center mb-3">
            <p>Role</p>
            <label htmlFor="role" className="cursor-pointer">Edit</label>
          </div>
          <input 
            type="text" 
            style={{ textTransform: 'capitalize' }} 
            id="role" 
            placeholder="N/A" 
            className="outline-none border-b-[0.02px] w-full border-[#434343] pb-3" 
            value={formData.role} 
            onChange={handleChange} 
          />
        </div>

        <div className="w-full mb-8">
          <div className="flex justify-between items-center mb-3">
            <p>LinkedIn Profile</p>
            <label htmlFor="linkedInUrl" className="cursor-pointer">Edit</label> 
          </div>
          <input 
            type="text" 
            id="linkedInUrl" 
            placeholder="N/A" 
            className="outline-none border-b-[0.02px] w-full border-[#434343] pb-3" 
            value={formData.linkedInUrl} 
            onChange={handleChange} 
          />
        </div>

        <div className="w-full mb-8">
          <div className="flex justify-between items-center mb-3">
            <p>Twitter Profile</p>
            <label htmlFor="twitterUrl" className="cursor-pointer">Edit</label> 
          </div>
          <input 
            type="text" 
            id="twitterUrl" 
            placeholder="N/A" 
            className="outline-none border-b-[0.02px] w-full border-[#434343] pb-3" 
            value={formData.twitterUrl} 
            onChange={handleChange} 
          />
        </div>

        <div className="w-full mb-8">
          <div className="flex justify-between items-center mb-3">
            <p>Portfolio Link</p>
            <label htmlFor="portfolioUrl" className="cursor-pointer">Edit</label> 
          </div>
          <input 
            type="text" 
            id="portfolioUrl" 
            placeholder="N/A" 
            className="outline-none border-b-[0.02px] w-full border-[#434343] pb-3" 
            value={formData.portfolioUrl} 
            onChange={handleChange} 
          />
        </div>
      </section>

      <button className="bg-[#FE9B7E] rounded-md w-96 h-11 text-white" type="submit">
        save
      </button>

      <div className="flex justify-between items-center min-h-32 w-11/12 max-w-[840px] px-12 py-5 bg-[#F9F9F9] rounded-md mt-14">
        <div className="w-4/12">
          <h5 className="mb-2 font-medium">I want to take a break</h5>
          <p className="italic text-[12px]">When {"you're"} on a break, members will be unable to book calls with you.</p>
        </div>

        <span className="text-4xl"><FaToggleOn /></span>
      </div>
    </form>
    </>
  }
}

export default MentorsSettingsComps