import React from "react";
import { BsFillPersonFill, BsFillClipboard2MinusFill } from "react-icons/bs";
import { useNavigate, useParams } from 'react-router-dom';
import { accessToken, mentorAccess } from "../utilities/tokenClient";
import { selectedMentor } from "../redux/slices/mentorSlice";
import { useDispatch } from "react-redux";

const ProfileCard = (props) => {

  const { name, role, sessions, reviews, experience, attendance, image, id, index, mentor } = props
  const navigate = useNavigate()
  const dispatch = useDispatch();

  async function navigateToProfilePage() {
    localStorage.setItem(mentorAccess, id)
    dispatch(selectedMentor(mentor));
    navigate(`/profile/${name}`)
  }
  return (

<div
  key={index}
  className="flex w-full sm:w-[17rem] p-2 flex-col sm:ml-0 rounded-b-[0.5rem] rounded-t-[1rem] border bg-500 cursor-pointer"
  onClick={navigateToProfilePage}
>
  {/* Image Container */}
  <div className="h-56 overflow-hidden rounded-[1rem]">
    {image ? (
      <img
        className="w-full h-full object-cover"
        src={image}
        alt="mentor-dp"
      />
    ) : (
      <img
        className="w-full h-full object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3f0j-Ox8s4hYDLrs9CN2EP9QqPGTxyvkpshO4_iza3Q&s"
        alt="mentor-dp"
      />
    )}
  </div>

  {/* Mentor Details */}
  <div className="flex flex-col mt-4">
    <p className="capitalize ml-4 text-xl font-semibold">{name}</p>
    <div className="mt-2 ml-4 flex flex-col">
      <div className="flex flex-row items-center text-sm">
        <BsFillClipboard2MinusFill />
        <span className="ml-2 capitalize">{role}</span>
      </div>
      <div className="mt-2 flex flex-row items-center text-sm">
        <BsFillPersonFill />
        <span className="ml-2">
          {sessions} sessions ({reviews} reviews)
        </span>
      </div>
    </div>
  </div>

  {/* Experience and Attendance */}
  <div className="mt-4 flex flex-row justify-between rounded bg-zinc-300 bg-opacity-50 p-2 text-sm">
    <div>
      <p className="text-xs font-medium text-neutral-700 text-opacity-70">
        Experience
      </p>
      <p className="text-xs font-semibold capitalize">{`${experience} years`}</p>
    </div>
    <div>
      <p className="text-xs font-medium text-neutral-700 text-opacity-70">
        Avg. Attendance
      </p>
      <p className="text-xs font-semibold text-black">{attendance}</p>
    </div>
  </div>
</div>
  );
};

export default ProfileCard;
