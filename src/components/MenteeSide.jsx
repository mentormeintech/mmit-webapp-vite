import { useNavigate, useLocation, Link } from "react-router-dom";
import { AiFillCloud, AiFillHome, AiFillQuestionCircle } from "react-icons/ai";
import { BsFillBookFill } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { MdSettings } from "react-icons/md";
import { logOutUser } from "../redux/slices/userslice";
import { logUserOut } from "../utilities/apiClient";
import { useDispatch, useSelector } from "react-redux";

const MenteeSide = ({ Mentee }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
//   const { dashboard } = useSelector((state) => state.mentor_me_user);
  const location = useLocation();
//   Mentee = !dashboard ? Mentee : dashboard;
  const logOut = () => {
    logUserOut();
    dispatch(logOutUser({ token: "", user: {} }));
    navigate("/auth/signin");
  };

  return (
    <aside className="w-fit px-10 lg:w-3/12 pt-8 border-r flex justify-center min-h-[calc(100vh-144px)]">
      <ul>
        <li className="mb-12 text-lg font-semibold">
          {Mentee?.first_name} {Mentee?.last_name}
        </li>

        <li className="mb-5">
          <Link
            to="/menteeProfilePage"
            className={`${
              location.pathname == "/menteeProfilePage" ? "text-[#0F88D9]" : ""
            } flex items-center hover:text-[#0F88D9]`}
          >
            <i className="mr-2 text-xl">
              <AiFillHome />
            </i>
            Home
          </Link>
        </li>

        <li className="mb-5">
          <Link
            to="/menteesBooking"
            className={`${
              location.pathname == "/menteesBooking" ? "text-[#0F88D9]" : ""
            } flex items-center hover:text-[#0F88D9]`}
          >
            <i className="mr-2 text-xl">
              <BsFillBookFill />
            </i>
            Bookings
          </Link>
        </li>

        <li className="mb-5">
          <Link
            to="/menteeGroupSessions"
            className={`${
              location.pathname == "/menteeGroupSessions"
                ? "text-[#0F88D9]"
                : ""
            } flex items-center hover:text-[#0F88D9]`}
          >
            <i className="mr-2 text-xl">
              <BsFillBookFill />
            </i>
            Group Sessions
          </Link>
        </li>

        <li className="mb-5">
          <Link
            to="/menteesSettings"
            className={`${
              location.pathname == "/menteesSettings" ? "text-[#0F88D9]" : ""
            } flex items-center hover:text-[#0F88D9]`}
          >
            <i className="mr-2 text-xl">
              <MdSettings />
            </i>
            Settings
          </Link>
        </li>

        <li className="mb-5">
          <Link
            to="/menteesSupport"
            className={`${
              location.pathname == "/menteesSupport" ? "text-[#0F88D9]" : ""
            } flex items-center hover:text-[#0F88D9]`}
          >
            <i className="mr-2 text-xl">
              <AiFillQuestionCircle />
            </i>
            Support
          </Link>
        </li>

        <li className="mb-5" onClick={logOut}>
          <div to="" className="flex items-center hover:text-[#0F88D9]">
            <i className="mr-2 text-xl">
              <HiOutlineLogout />
            </i>
            Logout
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default MenteeSide;
