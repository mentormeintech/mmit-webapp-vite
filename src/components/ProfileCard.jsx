import React from "react";
import { BsFillPersonFill, BsFillClipboard2MinusFill } from "react-icons/bs";
import { useNavigate, useParams } from 'react-router-dom';

const ProfileCard = ({
  name,
  role,
  sessions,
  reviews,
  experience,
  attendance,
  image,
}) => {

  const navigate = useNavigate()

  return (

    <div className="flex sm:w-[17rem] w-[90%] p-[7px] flex-col sm:ml-0 whitespace-nowrap rounded-b-[0.5rem] rounded-t-[1rem] border bg-red cursor-pointer" onClick={() => navigate(`/profile/${name}`)}>
      <div className="h-56">
        {image ? <img
          className="rounded-[1rem] w-[100%] h-[135%] sm:h-[120%]"
          src={image}
          alt="mentor-dp"
        /> : <img
          className="rounded-[1rem] w-[100%] h-[135%] sm:h-[120%]"
          src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3f0j-Ox8s4hYDLrs9CN2EP9QqPGTxyvkpshO4_iza3Q&s'}
          alt="mentor-dp"
        />}
      </div>
      <div className="flex mt-[4.5rem] xs:mt-[6.5rem] sm:mt-10 flex-col">
        <p className="capitalize ml-4 mt-4 sm:mt-2 text-xl font-semibold">{name}</p>
        <div className="mt-2 ml-14 flex flex-col">
          <div className=" -ml-10 flex flex-row items-center text-sm ">
            <BsFillClipboard2MinusFill />
            <span className="ml-2 capitalize">{role}</span>
          </div>
          <div className="-ml-10 mt-2 flex flex-row items-center text-sm">
            <BsFillPersonFill />
            <span className="ml-2">
              {sessions} sessions ({reviews} reviews)
            </span>
          </div>
        </div>
      </div>
      <div className="backdrop: mt-6 flex h-16 flex-row justify-between rounded bg-zinc-300 bg-opacity-50 p-2 pt-[14px] text-sm">
        <div>
          <p className="text-xs font-medium text-neutral-700 text-opacity-70">
            Experience
          </p>
          <p className="text-xs font-semibold capitalize">{`${experience} years`}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-neutral-700 text-opacity-70">
            Avg.Attendance
          </p>
          <p className="text-xs font-semibold text-black">{attendance}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
