import { useNavigate, useLocation, Link } from "react-router-dom";
import { AiFillCloud, AiFillHome, AiFillQuestionCircle } from "react-icons/ai";
import { BsFillBookFill } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { MdSettings } from "react-icons/md";
import { logOutUser } from "../redux/slices/userslice";
import { logUserOut } from "../utilities/apiClient";
import { useDispatch, useSelector } from "react-redux";
import { accessToken } from "../utilities/tokenClient";
import { useState } from "react";


const MenteeSide = ({ Mentee, toggleSidebar, isSidebarOpen }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dashboard } = useSelector((state) => state.mentor_me_user);
  const location = useLocation();
  Mentee = !dashboard ? Mentee : dashboard;

  const logOut = () => {
    dispatch(logOutUser({ token: '', user: {}, dashboard: {} }))
    logUserOut();
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside
      className={`lg:mt-0 lg:w-[18vw] w-full transform transition-transform duration-300 ease-in-out mt-[3.2rem] 
    ${isSidebarOpen ? "translate-x-0 z-50 fixed" : "-translate-x-full"} 
    lg:translate-x-0 fixed lg:static top-0 left-0 h-screen lg:h-[calc(100vh-5rem)] bg-white shadow-sm overflow-hidden border-r border-gray-200`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b">
          {/* <h2 className="font-bold text-lg float-left">Mentee Menu</h2> */}
          <button onClick={toggleSidebar} className="lg:hidden focus:outline-none float-right">
            <span className="text-xl">{isSidebarOpen ? "✖" : "☰"}</span>
          </button>
        </div>

        {/* Sidebar Content (Flex Column, Prevent Scroll) */}
        <div className="flex flex-col items-start flex-grow overflow-hidden p-4">
          {/* {Mentee?.image && Mentee?.image?.link ? (
            <img
              src={Mentee.image.link}
              alt={`${Mentee.first_name} ${Mentee.last_name}`}
              className="h-[60px] w-[60px] rounded-full object-cover border border-gray-300 my-4 float-left"
            />
          ) : (
            <div className="flex justify-center items-center font-bold h-[60px] w-[60px] bg-[#e3e3e3] rounded-full text-gray-700 text-2xl my-4 float-left">
              {nameIcon}
            </div>
          )} */}

          <ul className="flex flex-col space-y-5 w-full">
            <li className="text-lg font-semibold float-left">
              {Mentee?.first_name} {Mentee?.last_name}
            </li>
            <li className="float-left w-full">
              <Link
                to="/mentee"
                className={`flex items-center justify-start hover:text-[#0F88D9] transition-colors duration-300 ${isActive("/mentee") ? "text-[#0F88D9]" : "text-gray-600"
                  }`}
              >
                <AiFillHome className="mr-2 text-xl" /> Home
              </Link>
            </li>
            <li className="float-left w-full">
              <Link
                to="/mentee-booking"
                className={`flex items-center justify-start hover:text-[#0F88D9] transition-colors duration-300 ${isActive("/mentee-booking") ? "text-[#0F88D9]" : "text-gray-600"
                  }`}
              >
              <i className="fa-solid fa-book-open-reader mr-2"></i> Bookings
              </Link>
            </li>
            <li className="float-left w-full">
              <Link
                to="/group-session"
                className={`flex items-center justify-start hover:text-[#0F88D9] transition-colors duration-300 ${isActive("/group-session") ? "text-[#0F88D9]" : "text-gray-600"
                  }`}
              >
                <i className="fa-solid fa-user-group mr-2">{" "}</i> { "\n"} Group Sessions
              </Link>
            </li>
            <li className="float-left w-full">
              <Link
                to="/mentee-settings"
                className={`flex items-center justify-start hover:text-[#0F88D9] transition-colors duration-300 ${isActive("/mentee-settings") ? "text-[#0F88D9]" : "text-gray-600"
                  }`}
              >
                <MdSettings className="mr-2 text-xl" /> Settings
              </Link>
            </li>
            <li onClick={logOut} className="float-left w-full">
              <Link
                to=""
                className="flex items-center justify-start hover:text-[#0F88D9] transition-colors duration-300 text-gray-600"
              >
                <HiOutlineLogout className="mr-2 text-xl" /> Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default MenteeSide;
