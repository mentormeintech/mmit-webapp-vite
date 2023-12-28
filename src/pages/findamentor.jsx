import { useState, useEffect, useLayoutEffect } from 'react'
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import Footer from "../components/footer";
import mentors from "../components/dummydata";
import Spinner from '../components/Spinner';
import Alert from '../features/Alert';
import { userGetRequest } from '../utilities/apiClient';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

const FindAMentor = () => {
  const [loading, setloading] = useState(false)
  const [careers, setcareers] = useState([])
  const [pageQuery, setpageQuery] = useState({ page: 1, limit: 20 })
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
  })

  const handleChange = (event, value) => {
    setpageQuery({ ...pageQuery, page: value })
  };

  useEffect(() => {
    getMentors()
    // return () => getMentors()
  }, [pageQuery])

  useLayoutEffect(() => {
    getCareers()
  }, [])

  async function getMentors() {
    try {
      setloading(true)
      const response = await userGetRequest(`mentors?page=${pageQuery.page}&limit=${pageQuery.limit}`)
      if (response && response?.success === true) {
        setdata({ ...data, ...response.data })
        setloading(false)
      }
      else {
        Alert(response.message, "warning");
        setloading(false)
      }
    } catch (error) {
      Alert(error.message, "warning");
      setloading()
    }
  }

  async function getCareers() {
    try {
      const response = await userGetRequest(`careers`)
      if (response && response?.success === true) {
        setcareers(response.data)
      }
      else {
        Alert(response.message, "warning");
        setloading(false)
      }
    } catch (error) {
      Alert(error.message, "warning");
      setloading()
    }
  }


  return (
    <>
      {loading ? <Spinner loading={loading} /> : <div className="justify-center overflow-hidden lg:m-auto lg:w-[1440px]">
        <Header />

        <div className="mt-16 flex flex-row justify-center">
          <div className="relative z-10 w-[90%]">
            <img
              width={100}
              height={100}
              src="images/search-icon.svg"
              className="absolute left-4 top-6 z-40 w-8"
              alt=""
            />
            <input
              type="text"
              className="h-16 w-full items-center rounded-sm border px-12 pl-14 outline-none"
              placeholder="Search by name, role"
            />
          </div>
        </div>
        <div className=" sm:ml-10 inline-flex flex-row items-center justify-between gap-7 relative ml-4 whitespace-nowrap pt-7 font-semibold">
          <img src="images/tabler_arrow-up.svg" width={20} height={20} alt="" />
          <ul className="ml-[-20px] flex flex-row justify-between p-[10px] text-base">
            <li className="mr-8 cursor-pointer text-base">All</li>
            {careers && careers?.map((career, index) => (
              <>
                {index < careers?.length - 1 && <li className="mr-8 cursor-pointer capitalize" key={index}>{career?.name}</li>}
                {index + 1 === careers?.length && <li className="cursor-pointer capitalize">{career?.name}</li>}
              </>
            ))}
            {/* <li className="mr-8 cursor-pointer">Product Design</li>
            <li className="mr-8 cursor-pointer">Backend Development</li>
            <li className="mr-8 cursor-pointer">UI/UX</li>
            <li className="cursor-pointer">Frontend Development</li> */}
          </ul>
        </div>
        <div className="mt-16 flex flex-row flex-wrap items-center justify-start gap-7">
          {/* <div className="mt-16 flex flex-row flex-wrap items-center justify-center gap-7"> */}
          {data?.docs && data?.docs?.map((mentor, index) => (
            <ProfileCard
              key={index}
              name={`${mentor?.first_name?.toLowerCase()} ${mentor?.last_name?.toLowerCase()}`}
              role={mentor?.area_of_expertise && mentor?.area_of_expertise.length > 0 ? mentor?.area_of_expertise[0]?.name : "NIL"}
              sessions={mentor.sessions || '0'} //sessions organised by the mentors
              reviews={mentor.ratings && mentor.ratings?.length}
              experience={mentor?.years_of_experience || 0}
              attendance={mentor?.attendance || '97%'}
              image={mentor.image}
            />
          ))}
          {/* {mentors && mentors?.map((mentor, index) => (
            <ProfileCard
              key={index}
              name={mentor.name}
              role={mentor.role}
              sessions={mentor.sessions}
              reviews={mentor.reviews}
              experience={mentor.experience}
              attendance={mentor.attendance}
              image={mentor.image}
            />
          ))} */}
        </div>
        <div className="w-full mt-16 flex justify-center">
          <Stack spacing={2}>
            <Pagination count={data?.totalPages} page={pageQuery?.page} onChange={handleChange} variant="outlined" />
          </Stack>
        </div>
        <div className="mt-10">
          <Footer />
        </div>
      </div>}

    </>
  );
};

export default FindAMentor;
