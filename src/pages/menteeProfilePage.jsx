import React, { useState, useEffect, useLayoutEffect } from "react";
import ProfileCard from "../components/ProfileCard";
import Footer from "../components/footer";
import MenteeSide from "../components/MenteeSide";
import DynamicParagraph from "../components/DynamicParagraph";
import Alert from "../features/Alert";
import { userGetRequest } from "../utilities/apiClient";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userDashboard } from "../utilities/apiClient";
import { dashboardData } from "../redux/slices/userslice";
import Header_Signin from "../components/Header_Signin";
import { setToken } from "../utilities/axiosClient";

const menteeProfilePage = () => {
  const [loading, setloading] = useState(false);
  const [pageQuery, setpageQuery] = useState({ page: 1, limit: 20 });
  const [data, setdata] = useState({
    docs: [],
    hasNextPage: false,
    hasPrevPage: false,
    limit: 2,
    nextPage: null,
    page: 0,
    pagingCounter: 0,
    prevPage: null,
    totalDocs: 0,
    totalPages: 0,
  });
  const dispatch = useDispatch();
  const [menteeData, setmenteeData] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    getMentors();
    // retrieveMenteeData();
  }, [pageQuery]);

  useEffect(() => {
  }, [menteeData]);

  useLayoutEffect(() => {
    retrieveMenteeData();
  }, []);

  const toggleSidebar = () => {
  try {
    setIsSidebarOpen(!isSidebarOpen);
  } catch (error) {
    alert(error.message)
  }
  };

  const retrieveMenteeData = async () => {
    try {
      setloading(true);
      const response = await userDashboard("mentee/me");
      if (response && response.success === true) {
        setmenteeData(response.data);
        dispatch(dashboardData(response.data));
        return setTimeout(() => {
          setloading(false);
        }, 40);
        // return Alert(response.message, 'success')
      }
      else {
        setloading(false);
        return Alert(response.message || 'Something went wrong', "warning");
      }
      // setloading(false)

    } catch (error) {
      setloading(false);
      Alert(error.message, "error");
    }
  };

  async function getMentors() {
    try {
      setloading(true);
      const response = await userGetRequest(
        `mentors?page=${pageQuery.page}&limit=${pageQuery.limit}`
      );
      if (response && response?.success === true) {
        setdata({ ...data, ...response.data });
        setloading(false);
      } else {
        Alert(response.message, "warning");
        setloading(false);
      }
    } catch (error) {
      Alert(error.message, "warning");
      setloading();
    }
  }

  const firstThreeMentors = data?.docs?.slice(0, 3);

  return (

    <div className="w-full pt-2 lg:mx-0 lg:flex lg:flex-col lg:gap-y-10">
      <div className="w-full mx-3 lg:mx-0 bg-red-100"></div>
      <Header_Signin userData={menteeData} toggleSidebar={toggleSidebar} />
      <div className="lg:flex lg:flex-row lg:gap-x-8 mt-[3rem]">
        <div>
          <MenteeSide Mentee={menteeData} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        </div>

        {/* Main Content (Scrollable, 80% width) */}
        <div className="mt-[6rem] mx-3 lg:mx-0 lg:w-4/5 lg:ml-[6%] flex flex-col gap-y-8 lg:mt-[3rem]">
          <h2 className="text-3xl font-semibold text-center lg:text-left">
            Welcome {menteeData?.first_name} {menteeData?.last_name}
          </h2>
          <DynamicParagraph />

          <div className="pb-10">
            <h3 className="text-xl font-semibold">Mentors to meet</h3>
            <div className="flex flex-col md:flex-row flex-wrap gap-6">
              {firstThreeMentors &&
                firstThreeMentors.map((mentor, index) => (
                  <ProfileCard
                    key={index}
                    name={`${mentor?.first_name?.toLowerCase()} ${mentor?.last_name?.toLowerCase()}`}
                    role={
                      mentor?.area_of_expertise &&
                        mentor?.area_of_expertise.length > 0
                        ? mentor?.area_of_expertise[0]?.name
                        : "NIL"
                    }
                    id={mentor._id}
                    mentor={mentor}
                    sessions={mentor.sessions || "0"}
                    reviews={mentor.ratings && mentor.ratings?.length}
                    experience={mentor?.years_of_expertise || 0}
                    attendance={mentor?.attendance || "97%"}
                    image={mentor.image}
                  />
                ))}
            </div>
            <div className="flex justify-start mt-5">
              <Link
                to="/findamentor"
                className="p-4 rounded-lg text-white bg-[#0F88D9] hover:bg-[#2C88D8] transition-colors duration-300"
              >
                Browse more mentor
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default menteeProfilePage;
