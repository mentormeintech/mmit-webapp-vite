import { useState, useLayoutEffect } from 'react'
import { BsEyeSlash } from "react-icons/bs"
import { FaToggleOn } from "react-icons/fa"
import MentorProfileInfo from "./mentorProfileInfo"
import { useForm } from 'react-hook-form';
import { logUserOut, patchRequest } from '../utilities/apiClient'
import Alert from '../features/Alert'
import { useDispatch } from "react-redux";
import { dashboardData, logOutUser } from '../redux/slices/userslice'
import Spinner from './Spinner'
import MentorPersonalinfo from './mentorPersonalInfo'
import MentorChangePassword from './mentorChangePassword';


function MentorsSettingsComps(props) {
  const { mentorship, dashboard } = props
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema), 
  });


  useLayoutEffect(() => {
    if (dashboard && dashboard?.first_name) {
      return setloading(false)
    }
    return setloading(false)
  }, [])


  async function filterOutRoleId(role) {
    const foundId = dashboard?.area_of_expertise.find(expertise => expertise.name === role)
    return foundId._id
  }

  async function onSubmit(data) {
    try {
      setloading(true)
      let area_of_expertise = ''
      let formData = {}
      if (data && data?.area_of_expertise) {
        area_of_expertise = await filterOutRoleId(data.area_of_expertise)
        formData.area_of_expertise = area_of_expertise
      }
      formData = { ...formData, ...data }
      const response = await patchRequest('mentor/profile', formData)
      if (response && response?.status === 200) {
        dispatch(dashboardData(response.data));
        setloading(false)
        return Alert(response?.message, 'success')
      }
      if (response && response?.status === 401) {
        setloading(false)
        Alert(response?.message, 'warning')
        dispatch(logOutUser())
        return logUserOut()

      }
      if (response && (response?.status >= 300 || response?.status <= 400)) {
        setloading(false)
        return Alert(response?.message, 'error')
      }
      if (response && response?.status !== 200) {
        setloading(false)
        return Alert(response?.message, 'warning')
      }
    } catch (error) {
      // Handle errors (e.g., display error message)
      setloading(false)
      return Alert(error?.message, 'warning')
    }
  }


  if (loading) {
    return <Spinner loading={loading} />
  }

  if (mentorship && mentorship?.profile) {
    return <MentorProfileInfo dashboard={dashboard} onSubmit={onSubmit} />
  }

  if (mentorship && mentorship?.personalInfo) {
    return <MentorPersonalinfo dashboard={dashboard} onSubmit={onSubmit} />
  }

  else if (mentorship && mentorship?.login) {
    return <section className="w-[500px]">
      <div className="mb-6">
        <MentorChangePassword setloading={setloading} />
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