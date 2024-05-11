import React, { useState, useEffect } from "react";
import Header_Signin from "../../components/Header_Signin";
import { putRequest, userGetRequest } from "../../utilities/apiClient";
import Spinner from "../../components/Spinner";
import Alert from "../../features/Alert";
import { setToken } from "../../utilities/axiosClient";
import moment from "moment/moment";


const Notifications = () => {

	const [loading, setloading] = useState(false);
	const [sessions, setsessions] = useState([])

	const getMentorSessions = async () => {
		try {
			await setToken()
			setloading(true);
			const formattedDat = moment(new Date).format("MMMM Do, YYYY");
			const response = await userGetRequest('event/session')
			if (response && response?.success === true) {
				setsessions(response.data);
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

	const approveSession = async (event_id, session_id, status, meeting_time) => {
		try {
			console.log("meeting_time",meeting_time)
			await setToken()
			// alert(event_id)
			setloading(true);
			const response = status === "approved" ? await putRequest(`event/approve?status=${status}&event_id=${event_id}&session_id=${session_id}&meeting_time=${meeting_time}`) : await putRequest(`event/reject?status=${status}&event_id=${event_id}&session_id=${session_id}&meeting_time=${meeting_time}`)
			if (response && response?.success === true) {
				setloading(false);
				Alert(response.message, "success");
				getMentorSessions();
			} else {
				Alert(response.message, "warning");
				setloading(false);
			}
		} catch (error) {
			Alert(error.message, "warning");
			setloading();
		}
	}

	useEffect(() => {
		getMentorSessions()
	}, [])
	return (
		<div>
			<Header_Signin notification={true} />
			{loading ? <Spinner loading={loading} /> : <div className="flex justify-center my-[5rem]">
				<div className="flex flex-col w-[90%] sm:w-[600px] mt-20 p-4 px-8 items-center rounded-3xl border-gray-300 shadow-lg border">
					{sessions && sessions.length > 0 && sessions?.map((item, key) => (
						item?.session && item?.session.length > 0 && item?.session?.map((session_item, index) => (
							session_item?.status === 'not approved' && <div className="flex flex-col gap-3" key={index}>
								<div>
									{item?.mentee[index]?.first_name} {item?.mentee[index]?.last_name} {""}
									would like to schedule a session for{" "}
									{moment(session_item?.time || new Date).format("MMMM Do, YYYY, h:mm A")}
								</div>
								<div className="flex gap-4 w-full justify-end">
									<button className="text-white font-semibold bg-green-700 hover:bg-green-600 p-2 rounded-xl shadow-md" onClick={() => approveSession(item._id, session_item._id, "approved", session_item?.time)}>
										Accept
									</button>
									<button className="text-white font-semibold bg-red-700 hover:bg-red-600 p-2 rounded-xl shadow-md" onClick={() => approveSession(item._id, session_item._id, "rejected")}>
										Reject
									</button>
								</div>
								<div className="w-[98%] my-3 mx-auto border border-gray-200"></div>
							</div>
						))
					))}
				</div>
			</div>}
		</div>
	);
};

export default Notifications;
