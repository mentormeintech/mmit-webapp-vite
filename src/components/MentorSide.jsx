import { useNavigate, useLocation, Link } from 'react-router-dom';
import { AiFillCloud, AiFillHome, AiFillQuestionCircle } from "react-icons/ai";
import { BsFillBookFill } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { MdSettings } from "react-icons/md";
import { logOutUser } from "../redux/slices/userslice";
import { logUserOut } from "../utilities/apiClient";
import { useDispatch, useSelector } from "react-redux";


const MentorSide = ({ Mentor }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { dashboard } = useSelector(state => state.mentor_me_user)
    const location = useLocation();
    Mentor = !dashboard ? Mentor : dashboard
    const logOut = () => {
        logUserOut();
        dispatch(logOutUser({ token: '', user: {} }))
        navigate('/auth/signin')
    }

    const nameIcon = `${Mentor?.first_name?.charAt(0)}${Mentor?.last_name?.charAt(0)}`
    return (
        <aside className=" p-4 mt-36 lg:w-1/6 pt-8 border-r flex justify-center min-h-[calc(100vh-144px)]">
            {Mentor?.image && Mentor?.image?.link ? <img src="/images/mentorPic.png" alt="" width={40} height={40} className="h-[40px] w-[40px] mr-10 mt-2" /> : <div width={40} height={40} className="flex justify-center items-center font-bold h-[40px] w-[40px] mr-5 mt-2 bg-[#e3e3e3] rounded-full" >{`${nameIcon}`}</div>}
            <ul>
                <li className="mb-9">
                    <ul>
                        <li>{Mentor?.first_name} {Mentor?.last_name}</li>
                        <li className="text-[#0F88D9]">View Profile</li>
                    </ul>
                </li>


                <li className="mb-5">
                    <Link to="/mentor" className={`${location.pathname == '/mentor' ? 'text-[#0F88D9]' : ''} flex items-center hover:text-[#0F88D9]`}>
                        <i className="mr-2 text-xl"><AiFillHome /></i>
                        Home
                    </Link>
                </li>

                <li className="mb-5">
                    <Link to="/mentorsBooking" className={`${location.pathname == '/mentorsBooking' ? 'text-[#0F88D9]' : ''} flex items-center hover:text-[#0F88D9]`}>
                        <i className="mr-2 text-xl"><BsFillBookFill /></i>
                        Bookings
                    </Link>
                </li>

                <li className="mb-5">
                    <Link to="/mentor/calender" className={`${location.pathname == '/mentor/calender' ? 'text-[#0F88D9]' : ''} flex items-center hover:text-[#0F88D9]`}>
                        <i className="mr-2 text-xl"><AiFillCloud /></i>
                        Calendar
                    </Link>
                </li>

                <li className="mb-5">
                    <Link to="/mentorsSettings" className={`${location.pathname == '/mentorsSettings' ? 'text-[#0F88D9]' : ''} flex items-center hover:text-[#0F88D9]`} >
                        <i className="mr-2 text-xl"><MdSettings /></i>
                        Settings
                    </Link>
                </li>

                <li className="mb-5">
                    <Link to="/mentorsSupport" className={`${location.pathname == '/mentorsSupport' ? 'text-[#0F88D9]' : ''} flex items-center hover:text-[#0F88D9]`}>
                        <i className="mr-2 text-xl"><AiFillQuestionCircle /></i>
                        Support
                    </Link>
                </li>

                <li className="mb-5" onClick={logOut}>
                    <Link to="" className="flex items-center hover:text-[#0F88D9]">
                        <i className="mr-2 text-xl"><HiOutlineLogout /></i>
                        Logout
                    </Link>
                </li>

            </ul>
        </aside>
    )
}

export default MentorSide