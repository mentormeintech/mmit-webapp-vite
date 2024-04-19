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

  useEffect(() => {
    getMentors();
    // retrieveMenteeData();
  }, [pageQuery]);

  useEffect(() => {
  }, [menteeData]);

  useLayoutEffect(() => {
    retrieveMenteeData();
  }, []);

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

  const getMyNotifications = async () => {
    try {
      await setToken()
      setloading(true);
      const response = await userGetRequest('notifications/mentor')
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

  return (
    <div className="pt-20 mx-3">
      <Header_Signin getMyNotifications={getMyNotifications} />
      <div className="flex gap-x-4">
        <MenteeSide Mentee={menteeData} />
        <div className="flex flex-col gap-y-4 mt-[2.5Sessionrem]">
          <h2 className="text-3xl my-5 font-semibold">
            Welcome {menteeData?.first_name} {menteeData?.last_name}
          </h2>
          <div className="md:max-w-[70vw] md:h-[30vh]">
            <DynamicParagraph />
          </div>

          <div className="pb-10">
            <h3 className="my-5 text-xl font-semibold">Mentors to meet</h3>
            <div className="flex gap-3">
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
                    sessions={mentor.sessions || "0"} //sessions organised by the mentors
                    reviews={mentor.ratings && mentor.ratings?.length}
                    experience={mentor?.years_of_experience || 0}
                    attendance={mentor?.attendance || "97%"}
                    image={mentor.image}
                  />
                ))}
            </div>
            <div className="flex justify-end md:w-[54.5vw] mt-5">
              <Link
                to="/findamentor"
                className="p-4 rounded-lg text-white bg-[#0F88D9]"
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
