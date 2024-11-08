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
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const MentorSide = (props) => {
	let { Mentor, isMobileMenuOpen, setIsMobileMenuOpen } = props;
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { dashboard } = useSelector((state) => state.mentor_me_user);
	const location = useLocation();
	Mentor = !dashboard ? Mentor : dashboard;

	const logOut = () => {
		logUserOut();
		dispatch(logOutUser({ token: "", user: {}, dashboard: {} }));
		navigate("/auth/signin");
	};
	const toggleMobileMenu = (event) => {
		event.preventDefault();
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const nameIcon = `${Mentor?.first_name?.charAt(
		0
	)}${Mentor?.last_name?.charAt(0)}`;
	return (
		<aside className="fixed bg-white z-10">
			{/* Toggle button for mobile view */}
			{!isMobileMenuOpen && <div className="flex justify-between items-center ml-3 mt-5 p-2 lg:hidden border rounded-xl">
				<button
					onClick={(event) => toggleMobileMenu(event)}
					className="text-sm text-black"
				>
					Menu
				</button>
			</div>}
			<div
				className={`fixed left-0 top-0 h-full bg-white border-r shadow-md transition-transform duration-300 ease-in-out 
            ${
				isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
			} lg:translate-x-0 lg:w-1/6 p-4 mt-[75px] md:mt-32`}
			>
				{isMobileMenuOpen && (
					<div className="flex justify-self-end p-2 -mt-5 mb-4 rounded-full border h-min w-min lg:hidden">
						<FaXmark
							onClick={(event) => toggleMobileMenu(event)}
						/>
					</div>
				)}
				<ul>
					<li className="mb-9">
						<ul>
							<li className="capitalize">
								{Mentor?.first_name} {Mentor?.last_name}
							</li>
							<li className="text-[#0F88D9]">View Profile</li>
						</ul>
					</li>
					<li className="mb-5">
						<Link
							to="/mentor"
							className={`${
								location.pathname === "/mentor"
									? "text-[#0F88D9]"
									: ""
							} flex items-center hover:text-[#0F88D9]`}
						>
							<AiFillHome className="mr-2 text-xl" />
							Home
						</Link>
					</li>
					<li className="mb-5">
						<Link
							to="/mentor/booking"
							className={`${
								location.pathname === "/mentor/booking"
									? "text-[#0F88D9]"
									: ""
							} flex items-center hover:text-[#0F88D9]`}
						>
							<BsFillBookFill className="mr-2 text-xl" />
							Bookings
						</Link>
					</li>
					<li className="mb-5">
						<Link
							to="/mentor-calendar"
							className={`${
								location.pathname === "/mentor-calendar"
									? "text-[#0F88D9]"
									: ""
							} flex items-center hover:text-[#0F88D9]`}
						>
							<AiFillCloud className="mr-2 text-xl" />
							Calendar
						</Link>
					</li>
					<li className="mb-5">
						<Link
							to="/mentor-settings"
							className={`${
								location.pathname === "/mentor-settings"
									? "text-[#0F88D9]"
									: ""
							} flex items-center hover:text-[#0F88D9]`}
						>
							<MdSettings className="mr-2 text-xl" />
							Settings
						</Link>
					</li>
					<li className="mb-5">
						<Link
							to="/mentor-support"
							className={`${
								location.pathname === "/mentor-support"
									? "text-[#0F88D9]"
									: ""
							} flex items-center hover:text-[#0F88D9]`}
						>
							<AiFillQuestionCircle className="mr-2 text-xl" />
							Support
						</Link>
					</li>
					<li className="mb-5" onClick={logOut}>
						<Link
							to=""
							className="flex items-center hover:text-[#0F88D9]"
						>
							<HiOutlineLogout className="mr-2 text-xl" />
							Logout
						</Link>
					</li>
				</ul>
			</div>
		</aside>
	);
};

export default MentorSide;
