import React, { useState, useEffect } from "react";
import ProfileCard from "../components/ProfileCard";
import Header from "../components/Header";
import Footer from "../components/footer";

const menteeProfilePage = () => {
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

  useEffect(() => {
    getMentors();
  }, [pageQuery]);

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
    <>
      <Header />
      <h2>Welcome Ololade Martha</h2>

      <div>
        <div>
          <span>1 of 3</span>
          <span>Key Ingredient for achieving success</span>
          <span>Two arrows</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, saepe
          iste ipsa incidunt eaque nesciunt unde dolor dignissimos dolores
          quidem laboriosam laborum ducimus repellat architecto modi aspernatur
          iure illo quos.
        </p>
      </div>

      <div>
        <h3>Mentors to meet</h3>
        <ProfileCard />
        {firstThreeMentors &&
          firstThreeMentors?.map((mentor, index) => (
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
      <Footer />
    </>
  );
};

export default menteeProfilePage;
