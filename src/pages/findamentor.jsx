import { useState, useEffect, useLayoutEffect } from "react";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import Footer from "../components/footer";
import mentors from "../components/dummydata";
import Spinner from "../components/Spinner";
import Alert from "../features/Alert";
import { userGetRequest } from "../utilities/apiClient";
import { Stack, Pagination, IconButton } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import DatasetIcon from "@mui/icons-material/Dataset";
import ProductDesign from "../assets/Product design icon.png";
import ProjectManagement from "../assets/Project Management.png";
import Frontend from "../assets/Web Analytics.png";

const FindAMentor = () => {
  const [loading, setloading] = useState(false);
  const [careers, setcareers] = useState([]);
  const [pageQuery, setpageQuery] = useState({ page: 1, limit: 20 });
  const [searchTerm, setSearchTerm] = useState("");
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

  const [mentorData, setMentorData] = useState({
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

  const handleChange = (event, value) => {
    setpageQuery({ ...pageQuery, page: value });
  };

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      filterBySearchTerm(searchTerm);
    }
  };

  useEffect(() => {
    getMentors();
    // return () => getMentors()
  }, [pageQuery]);

  useLayoutEffect(() => {
    getCareers();
  }, []);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 180;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 180;
  };
  async function getMentors() {
    try {
      setloading(true);
      const response = await userGetRequest(`mentors?page=${pageQuery.page}&limit=${pageQuery.limit}`);
      if (response && response?.success === true) {
        setdata({ ...data, ...response.data });
        setMentorData({ ...mentorData, ...response.data });
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

  async function getCareers() {
    try {
      const response = await userGetRequest(`careers`);
      if (response && response?.success === true) {
        setcareers(response.data);
      } else {
        Alert(response.message, "warning");
        setloading(false);
      }
    } catch (error) {
      Alert(error.message, "warning");
      setloading();
    }
  }

  const filterBySearchTerm = (searchTerm) => {
    try {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();

      const filteredBySearch = mentorData.docs.filter(
        (mentor) =>
          mentor.first_name.toLowerCase().includes(lowerCaseSearchTerm) ||
          mentor.last_name.toLowerCase().includes(lowerCaseSearchTerm)
      );

      setdata({ ...data, docs: filteredBySearch });
      setSearchTerm("");
    } catch (error) {
      Alert(error.message, "warning");
      setloading();
    }
  };
  async function filterByCareerType(career_id) {
    try {
      setloading(true);
      const response = await userGetRequest(
        `mentors?page=${pageQuery.page}&limit=${pageQuery.limit}`
      );
      if (response && response?.success === true) {
        if (career_id === "all") {
          setdata({ ...data, ...response.data });
          setloading(false);
        } else {
          const filteredMentors = mentorData.docs.filter(
            (mentor) => mentor?.area_of_expertise?.[0]?._id === career_id
          );
          setdata({ ...data, docs: filteredMentors });
        }
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
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="justify-center overflow-hidden m-auto w-[100%]">
          <Header />
          <div className="ml-[10px] sm:ml-[100px] mt-[100px] mb-[30px] font-bold text-[17px] sm:text-[20px]">
            MENTORS
          </div>
          <div className="flex flex-row ml-[10px] mr-[10px] sm:mr-0  sm:ml-[100px] items-center">
            <div className="relative z-10 w-[100%] mr-[10px] sm:mr-[40px] sm:w-[70%] flex items-center pl-[5px] border-b-2">
              <img
                src="images/search-icon.svg"
                className="absolute z-40 w-[25px] sm:w-8"
                alt=""
              />
              <input
                type="text"
                className="sm:h-16 h-10 w-full rounded-sm pr-[15px] pl-[30px] sm:pl-14 sm:pr-10 outline-none"
                placeholder="Search by name"
                value={searchTerm}
                onChange={handleSearchInput}
                onKeyDown={handleKeyPress}
              />
            </div>
            <IconButton
              className="shadow-md w-[38px] h-10 sm:w-[70px] sm:h-[64px]"
              sx={{
                borderRadius: 0,
              }}
              onClick={() => filterBySearchTerm(searchTerm)}
            >
              <FilterListIcon className="w-[25px] h-7" />
            </IconButton>
          </div>
          <div className="sm:ml-[100px] inline-flex flex-row items-center w-[100%] pl-[10px] sm:pl-0 pr-[10px] sm:pr-0 sm:w-[80%] justify-between gap-7 relative whitespace-nowrap pt-7 font-semibold">
            <IconButton
              sx={{
                border: "1px solid #000000",
                width: "25px",
                height: "25px",
              }}
              onClick={slideLeft}
            >
              <ArrowBackIosIcon
                sx={{
                  color: "#000000",
                  width: "20px",
                  height: "20px",
                  paddingLeft: "6px",
                }}
              />
            </IconButton>
            <div
              id="slider"
              className="w-[100%] overflow-x-scroll scroll scroll-smooth whitespace-nowrap scrollbar-hide"
            >
              <ul className="flex flex-row justify-start p-[10px] text-base">
                <li
                  className="mr-8 cursor-pointer text-base"
                  onClick={() => filterByCareerType("all")}
                >
                  <div className="flex flex-col gap-1">
                    <DoneAllIcon />
                    <div>All</div>
                  </div>
                </li>
                {careers &&
                  careers?.map((career, index) => (
                    <div key={index}>
                      <li
                        className="mr-5 cursor-pointer capitalize"
                        key={index}
                        onClick={() => filterByCareerType(career._id)}
                      >
                        {career?.name === "product design" && (
                          <div className="flex flex-col justify-center gap-1">
                            <img
                              src={ProductDesign}
                              className="w-[25px] h-[25px] mx-[auto]"
                            />
                            <div>{career?.name}</div>
                          </div>
                        )}
                        {career?.name === "project management" && (
                          <div className="flex flex-col justify-center gap-1">
                            <img
                              src={ProjectManagement}
                              className="w-[25px] h-[25px] mx-[auto]"
                            />
                            <div>{career?.name}</div>
                          </div>
                        )}
                        {career?.name === "front - end developement" && (
                          <div className="flex flex-col justify-center gap-1">
                            <img
                              src={Frontend}
                              className="w-[25px] h-[25px] mx-[auto]"
                            />
                            <div>{career?.name}</div>
                          </div>
                        )}
                        {career?.name === "data science" && (
                          <div className="flex flex-col gap-1">
                            <DatasetIcon
                              sx={{
                                width: "25px",
                                height: "25px",
                                marginX: "auto",
                                color: "#808080",
                              }}
                            />
                            <div>{career.name}</div>
                          </div>
                        )}
                      </li>
                      {/* {index + 1 === careers?.length && <li className="cursor-pointer capitalize">{career?.name}</li>} */}
                    </div>
                  ))}
              </ul>
            </div>
            <IconButton
              sx={{
                border: "1px solid #000000",
                width: "25px",
                height: "25px",
                display: { lg: "none" },
              }}
              onClick={slideRight}
            >
              <ArrowForwardIosIcon
                sx={{
                  color: "#000000",
                  width: "15px",
                  height: "15px",
                  paddingLeft: "1px",
                }}
              />
            </IconButton>
          </div>
          <div className="mt-16 md:w-[90%] w-[100%] justify-center md:justify-start md:ml-[100px] md:pr-[20px] flex flex-row flex-wrap items-center gap-7">
            {/* <div className="mt-16 flex flex-row flex-wrap items-center justify-center gap-7"> */}
            {data?.docs &&
              data?.docs?.map((mentor, index) => (
                <ProfileCard
                  key={index}
                  index={index}
                  mentor={mentor}
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
                  id={mentor._id}
                />
              ))}
          </div>
          <div className="w-full mt-16 flex justify-center">
            <Stack spacing={2}>
              <Pagination
                count={data?.totalPages}
                page={pageQuery?.page}
                onChange={handleChange}
                variant="outlined"
              />
            </Stack>
          </div>
          <div className="mt-10">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default FindAMentor;
