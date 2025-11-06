import React from "react";
import { AiFillBell, AiOutlineClose } from "react-icons/ai";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logOutUser } from "../redux/slices/userslice";

function Header_Signin(props) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { dashboard } = useSelector((state) => state.mentor_me_user);

	if (!dashboard && !dashboard._id) {
		logOutUser();
		dispatch(logOutUser({ token: "", user: {}, dashboard: {} }));
		return navigate("/auth/signin");
	}
	const { notification } = props;
	return (
		<nav className="bg-stone-200 md:h-20 w-full flex items-center px-6 py-2 md:px-0 md:pr-7 md:py-0 fixed top-0 left-0 z-50 shadow-md px-4 md:px-8">
			<a href="/">
				<img
					alt="MMIT Logo"
					// className="w-auto h-0 md:h-auto md:w-auto md:ml-[5px] lg:ml-[10px] mb-[38]"
					className="h-10 w-auto"
					src="/images/mmit-logo.png"
				/>
			</a>

			<div className="flex text-[#303030] ml-auto mr-4 md:mr-8 items-center text-2xl">
				{!notification ? (
					<div
						className="bg-[#D9D9D9] flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full mr-3 cursor-pointer hover:bg-gray-300"
						onClick={() =>
							dashboard && dashboard.user_type === "mentee"
								? navigate("/mentee-notifications")
								: navigate("/mentor-notifications")
						}
					>
						<AiFillBell className="md:w-auto h-5 md:h-auto hover:bg-gray-300" />
					</div>
				) : (
					<div
						className="bg-[#D9D9D9] flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full mr-3 cursor-pointer hover:bg-gray-300"
						onClick={() =>
							dashboard && dashboard.user_type === "mentee"
								? navigate("/mentee")
								: navigate("/mentor")
						}
					>
						<FaHome />
					</div>
				)}
				<div className="bg-[#D9D9D9] flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full hover:bg-gray-300">
					<BsFillChatLeftTextFill className="md:w-auto h-4 md:h-auto" />
				</div>
			</div>
			<div
				className="text-2xl cursor-pointer lg:hidden hover:bg-gray-300"
				onClick={props.toggleSidebar}
			>
				<FaBars className="w-auto h-5 md:h-auto" />
			</div>
			{/* <div className="text-2xl cursor-pointer lg:hidden hover:bg-gray-300" onClick={props.toggleSidebar}>
				{true ? <FaBars  className='w-auto h-5 md:h-auto' /> : <AiOutlineClose />}
			</div> */}
		</nav>
	);
}

export default Header_Signin;
