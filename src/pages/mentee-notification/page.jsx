import React, { useState, useEffect } from "react";
import Header_Signin from "../../components/Header_Signin";
import { logUserOut, putRequest, userGetRequest } from "../../utilities/apiClient";
import Spinner from "../../components/Spinner";
import Alert from "../../features/Alert";
import { setToken } from "../../utilities/axiosClient";
import moment from "moment/moment";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../redux/slices/userslice";


const MenteeNotification = () => {

	const [loading, setloading] = useState(false);
	const dispatch = useDispatch();
	const [menteeSessions, setmenteeSessions] = useState([])
	const { dashboard } = useSelector(
		(state) => state.mentor_me_user
	);

	useEffect(() => {
		getMenteeSessions()
	}, [])

	const getMenteeSessions = async () => {
		try {
			await setToken()
			setloading(true);
			const response = await userGetRequest('notifications/mentee')
			if (response && response?.status === 401) {
				dispatch(logOutUser())
				logUserOut()
				return setloading(false);
			}
			if (response && response?.status === 200 && response?.success === true) {
				setmenteeSessions(response.data);
				Alert(response.message, "success");
				return setloading(false);
			} else {
				Alert(response.message, "warning");
				setloading(false);
			}
		} catch (error) {
			Alert(error.message, "warning");
			setloading(false);
		}
	}

	return (
		<div>
			<Header_Signin notification={true} />
			{loading ? <Spinner loading={loading} /> : <div className="flex justify-center my-[5rem]">
				<div className="flex flex-col w-[90%] sm:w-[600px] mt-20 pt-4 px-8 items-center rounded-3xl border-gray-300 shadow-lg border">
					{menteeSessions && menteeSessions?.map((item, index) => (
						item?.session && item.session?.length > 0 && item.session.map((session, index) => (
							session.mentee === dashboard._id && <div className="flex flex-col gap-5">
								{/* <div className="capitalize">
									{item?.mentor?.first_name} {item?.mentor?.last_name} {""} has {session?.status} your session request for {moment(session?.start || new Date).format("MMMM Do, YYYY, h:mm A")}.
								</div> */}
								<div className="">
									Your mentor {item?.mentor?.first_name} {""} has {session?.status} your session request for {moment(session?.start || new Date).format("MMMM Do, YYYY, h:mm A")}.
								</div>
								<div className="w-[90%] mb-5 mx-auto border border-gray-200"></div>
							</div>
						))
					))}
					{/* <div className="flex flex-col gap-5">
						<div>
							Sheldon Cooper has approved your session request for 30th April, 2024.
						</div>
						<div className="w-[90%] mb-5 mx-auto border border-gray-200"></div>
					</div> */}
				</div>
			</div>}
		</div>
	);
};

export default MenteeNotification;
