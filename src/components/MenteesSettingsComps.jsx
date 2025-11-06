import { BsEyeSlash } from "react-icons/bs"
import Personalinfo from "./personalinfo"
import MenteeChangePassword from "./menteeChangePassword"
import { useState, useLayoutEffect } from "react";
import Alert from "../features/Alert";
import { useDispatch } from 'react-redux';
import { logOutUser } from '../redux/slices/userslice'
import { logUserOut } from "../utilities/apiClient";

function MenteesSettingsComps(props) {
  const { mentee, dashboard } = props
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (dashboard && dashboard?.first_name) {
      return setloading(false)
    }
    if (!dashboard) {
      Alert("Unauthorized", "warning")
      dispatch(logOutUser())
      setloading(false)
      return logUserOut()
    }
    return setloading(false)
  }, [])


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
  // if (mentee && mentee?.profile) {
  //   return <>
  //     <form className="w-full max-w-[400px] lg:max-w-[500px] float-left">
  //       {/* Interest Field */}
  //       <div className="w-full mb-6">
  //         <div className="flex justify-between items-center mb-3">
  //           <p className="text-sm lg:text-base">Interest</p>
  //           <label htmlFor="experience" className="cursor-pointer text-sm lg:text-base text-[#0F88D9]">
  //             Edit
  //           </label>
  //         </div>
  //         <input
  //           type="text"
  //           id="experience"
  //           placeholder="N/A"
  //           className="outline-none border-b-[0.02px] w-full border-[#434343] pb-2 text-sm lg:text-base"
  //           defaultValue={dashboard?.years_of_experience || ""}
  //         />
  //       </div>

  //       {/* LinkedIn Profile Field */}
  //       <div className="w-full mb-6">
  //         <div className="flex justify-between items-center mb-3">
  //           <p className="text-sm lg:text-base">LinkedIn Profile</p>
  //           <label htmlFor="tools" className="cursor-pointer text-sm lg:text-base text-[#0F88D9]">
  //             Edit
  //           </label>
  //         </div>
  //         <input
  //           type="text"
  //           id="tools"
  //           placeholder="N/A"
  //           className="outline-none border-b-[0.02px] w-full border-[#434343] pb-2 text-sm lg:text-base"
  //           defaultValue={dashboard?.tools || ""}
  //         />
  //       </div>

  //       {/* Twitter Profile Field */}
  //       <div className="w-full mb-6">
  //         <div className="flex justify-between items-center mb-3">
  //           <p className="text-sm lg:text-base">Twitter Profile</p>
  //           <label htmlFor="company" className="cursor-pointer text-sm lg:text-base text-[#0F88D9]">
  //             Edit
  //           </label>
  //         </div>
  //         <input
  //           type="text"
  //           id="company"
  //           placeholder="N/A"
  //           className="outline-none border-b-[0.02px] w-full border-[#434343] pb-2 text-sm lg:text-base"
  //           defaultValue={dashboard?.company || ""}
  //         />
  //       </div>

  //       {/* Save Button */}
  //       <button className="bg-[#FE9B7E] rounded-md w-full lg:w-96 h-11 text-white text-sm lg:text-base hover:bg-[#FF8A6A] transition-colors duration-300">
  //         Save
  //       </button>
  //     </form>
  //   </>
  // }

  if (mentee && mentee?.personalInfo) {
    return <Personalinfo dashboard={dashboard} onSubmit={onSubmit} />
  }

  if (mentee && mentee?.login) {
    return <MenteeChangePassword />
  }

}

export default MenteesSettingsComps