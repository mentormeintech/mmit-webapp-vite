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


const MenteeSide = ({ Mentee }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dashboard } = useSelector((state) => state.mentor_me_user);
  const location = useLocation();
  Mentee = !dashboard ? Mentee : dashboard;
  
  const logOut = () => {
    logUserOut();
    dispatch(logOutUser({ token: '', user: {}, dashboard: {} }))
    localStorage.removeItem(accessToken)
    sessionStorage.removeItem('persist:MENTOR_ME_REDUX_STATE_STORE')
    navigate("/auth/signin");
  };

  const nameIcon = `${Mentee?.first_name?.charAt(0)}${Mentee?.last_name?.charAt(
    0
  )}`;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <aside className={`lg:w-3/12 w-full transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed lg:static bg-white shadow-lg h-full z-50`}>
    <div className="flex items-center justify-between p-4 border-b">
      <h2 className="font-bold text-lg">Mentee Menu</h2>
      <button onClick={toggleSidebar} className="lg:hidden focus:outline-none">
        <span className="text-xl">{isSidebarOpen ? '✖' : '☰'}</span> {/* Hamburger icon */}
      </button>
    </div>

    <div className="flex flex-col items-center">
      {Mentee?.image && Mentee?.image?.link ? (
        <img
          src={Mentee.image.link}
          alt={`${Mentee.first_name} ${Mentee.last_name}`}
          className="h-[60px] w-[60px] rounded-full object-cover border border-gray-300 my-4"
        />
      ) : (
        <div className="flex justify-center items-center font-bold h-[60px] w-[60px] bg-[#e3e3e3] rounded-full text-gray-700 text-2xl my-4">
          {nameIcon}
        </div>
      )}

      <ul className="flex flex-col space-y-5 px-4">
        <li className="text-lg font-semibold text-center">
          {Mentee?.first_name} {Mentee?.last_name}
        </li>
        <li>
          <Link
            to="/mentee"
            className="flex items-center justify-center hover:text-[#0F88D9] transition-colors duration-300 text-gray-600"
          >
            <AiFillHome className="mr-2 text-xl" />
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/mentee/booking"
            className="flex items-center justify-center hover:text-[#0F88D9] transition-colors duration-300 text-gray-600"
          >
            <BsFillBookFill className="mr-2 text-xl" />
            Bookings
          </Link>
        </li>
        <li>
          <Link
            to="/group-session"
            className="flex items-center justify-center hover:text-[#0F88D9] transition-colors duration-300 text-gray-600"
          >
            <BsFillBookFill className="mr-2 text-xl" />
            Group Sessions
          </Link>
        </li>
        <li>
          <Link
            to="/mentee-settings"
            className="flex items-center justify-center hover:text-[#0F88D9] transition-colors duration-300 text-gray-600"
          >
            <MdSettings className="mr-2 text-xl" />
            Settings
          </Link>
        </li>
        <li>
          <Link
            to="/mentee-support"
            className="flex items-center justify-center hover:text-[#0F88D9] transition-colors duration-300 text-gray-600"
          >
            <AiFillQuestionCircle className="mr-2 text-xl" />
            Support
          </Link>
        </li>
        <li onClick={logOut} className="flex items-center justify-center hover:text-[#0F88D9] transition-colors duration-300">
          <Link to="" className="flex items-center">
            <HiOutlineLogout className="mr-2 text-xl" />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  </aside>

  );
};

export default MenteeSide;
