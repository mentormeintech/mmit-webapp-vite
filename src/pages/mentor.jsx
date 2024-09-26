import React from "react";
import MentorSide from "../components/MentorSide";
import { AiOutlineCheckSquare } from "react-icons/ai";
import Header_Signin from "../components/Header_Signin";
import { useLayoutEffect, useState } from "react";
import { userDashboard } from "../utilities/apiClient";
import Alert from "../features/Alert";
import Spinner from "../components/Spinner";
import { useDispatch } from "react-redux";
import { dashboardData } from "../redux/slices/userslice";
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { AiFillCloud, AiFillHome, AiFillQuestionCircle } from "react-icons/ai";
import { BsFillBookFill } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { MdSettings } from "react-icons/md";


const MentorDashboard = () => {
  const dispatch = useDispatch()
  const [loading, setloading] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let arr = []
  // const Mentor = CurrentMentor

  // for (let i = 1; i <= Mentor.rating; i++) {
  //   arr.push(1)
  // }

  // let remainder = 5 - Mentor.rating

  // let rem = []

  // for (let i = 1; i <= remainder; i++) {
  //   rem.push(1)
  // }

  const [mentorData, setmentorData] = useState({})

  useLayoutEffect(() => {
    retrieveMentorData()
  }, [])

  const retrieveMentorData = async () => {
    try {
      setloading(true)
      const response = await userDashboard('mentor/me')
      if (response && response.success === true) {
        setmentorData(response.data)
        dispatch(dashboardData(response.data))
        return setTimeout(() => {
          setloading(false)
        }, 40);
        // return Alert(response.message, 'success')
      }
      // setloading(false)
      setloading(false)
      return Alert(response.message, 'warning')
    } catch (error) {
      setloading(false)
      Alert(error.message, 'error')
    }
  }


  return (
    <>
      {loading ? <Spinner loading={loading} /> :
        <>
          <Header_Signin />
          <div className="flex relative">
            {/* Left Navigation */}
            <MentorSide Mentor={mentorData} />

            {/* Main Content */}
            <main className={`flex-1 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'ml-0' : 'ml-64'} p-5`}>

              <section className="w-full mt-36 py-8 px-5">
                <div className="w-[600px] mb-6">
                  <h1 className="text-[24px] font-[600] mb-9">WELCOME {mentorData?.first_name} {mentorData?.last_name}</h1>
                  <p className="mb-7">{parseInt(mentorData.years_of_experience) <= 2 ? "Beginner" : (parseInt(mentorData.years_of_experience) < 4 ? "Intermediate" : (parseInt(mentorData.years_of_experience) < 6 ? "Mid Level" : "Advanced"))}</p>
                  <p className="mb-7">{mentorData.about_me}</p>

                  <div className="w-fit">
                    <div className="flex items-center">
                      <div className="text-[24px] text-[#3A3A3A] font-[600] mr-3">Ratings:</div>
                      <div className="flex items-center">
                        {
                          arr?.map((x, index) => {
                            return <img src="/images/icons/star-fill.png" alt="" width={40} height={40} key={index} />
                          })
                        }
                        {
                          []?.map((x, index) => {
                            return <img src="/images/icons/star-light.png" alt="" width={40} height={40} key={index} />
                          })
                        }
                      </div>
                      {/* <div className="ml-3">{Mentor.rating}/5</div> */}
                    </div>

                    <p className="text-center mt-1">(15 reviews)</p>
                  </div>
                </div>

                <div className="flex border w-fit p-2 bg-[#F3F3F3]">
                  <div className="flex items-center mr-9">
                    <span className="mr-2 text-[#303030]"><AiOutlineCheckSquare /></span>
                    <p className="mr-4">Completed Sessions</p>
                    <span className="bg-[#F89878] rounded-md w-9 h-8 text-white flex items-center justify-center">10</span>
                  </div>

                  <div className="flex items-center mr-9">
                    <span className="mr-2 text-[#303030]"><AiOutlineCheckSquare /></span>
                    <p className="mr-4">Completed Sessions</p>
                    <span className="bg-[#F89878] rounded-md w-9 h-8 text-white flex items-center justify-center">10</span>
                  </div>

                  <div className="flex items-center">
                    <span className="mr-2 text-[#303030]"><AiOutlineCheckSquare /></span>
                    <p className="mr-4">Completed Sessions</p>
                    <span className="bg-[#F89878] rounded-md w-9 h-8 text-white flex items-center justify-center">10</span>
                  </div>

                </div>


                <div className="flex">
                  <div>
                    <h1 className="text-[36px] font-[600]">Community Statistics</h1>
                    <h5 className="text-[20px] font-[500]">Top areas of impact</h5>
                    <h6>Topics to be discussed during sessions</h6>
                  </div>
                  {/*  */}
                  <div>
                    <div className="flex">
                      <button className="border border-[#434343] w-[190px] h-[37px] rounded-[5px]">General mentorship</button>
                      <button className="border border-[#434343] w-[190px] h-[37px] rounded-[5px]">Design career path</button>
                    </div>
                    <div className="flex">
                      <button className="border border-[#434343] w-[190px] h-[37px] rounded-[5px]">Ux meaning</button>
                      <button className="border border-[#434343] w-[190px] h-[37px] rounded-[5px]">Interaction design</button>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </>
      }
    </>
  )
}

export default MentorDashboard