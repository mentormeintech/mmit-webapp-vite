import React, { useState, useEffect } from "react";
import { Modal, Box } from "@mui/material";
import SessionTime from "./sessionTime";
import Alert from "../features/Alert";
import { getValidToken } from "../utilities/tokenClient";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../utilities/apiClient";
import { setToken } from "../utilities/axiosClient";
import Spinner from "./Spinner";
import { formatEventDuration } from "../utilities/util";

function MentorScheduleCard(props) {
	const { mentorEvent, mentor_id } = props;
	const [view, setView] = useState("month");
	const [events, setEvents] = useState([]);
	const [open, setOpen] = useState(false);
	const [loading, setloading] = useState(false);
	const [selectedDate, setSelectedDate] = useState(null);
	const [selectedTime, setSelectedTime] = useState(null);
	const [currentEvent, setcurrentEvent] = useState(null);
	const navigation = useNavigate();

	useEffect(() => {
		console.log('mentorEvent', mentorEvent)
		setEvents(mentorEvent);
	}, []);

	const sendAmPm = (date) => {
		let newDate = new Date(date).getHours();
		if (newDate < 12) {
			return `${newDate}AM`;
		} else {
			newDate = newDate % 12;
			return `${newDate}PM`;
		}
	};

	const handleClose = () => {
		setOpen(false);
		setSelectedDate(null);
	};

	const handleAddEvent = async () => {
		try {
			if (!selectedTime) {
				return Alert("Please pick a time", "warning");
			}
			if (
				new Date(selectedTime).getHours() <
				new Date(selectedDate).getHours()
			) {
				return Alert(
					`Please select time from ${sendAmPm(selectedDate)}`,
					"warning"
				);
			}
			if (!currentEvent) {
				return Alert("Please pick a schedule", "warning");
			}
			setOpen(false);
			setloading(true);
			const response = await postRequest(
				`event/book?time=${new Date(selectedTime)}&event_id=${currentEvent._id
				}&mentor_id=${mentor_id}`,
				{}
			);
			if (response && response.success === true) {
				setOpen(false);
				setloading(false);
				return Alert(
					`Session booked! Please wait for mentor's response`,
					"success"
				);
			} else {
				setOpen(false);
				setloading(false);
				return Alert(`${response.message}`, "warning");
			}
			setloading(false);
		} catch (error) {
			setOpen(false);
			setloading(false);
			return Alert(`${error.message}`, "warning");
		}
	};

	const handleSelectEvent = async (event) => {
		const { title, end, start } = event;
		console.log("event",event._id)
		setcurrentEvent(event);
		const token = await getValidToken();
		if (!token) {
			return navigation("/auth/signin");
		}
		await setToken(token);
		setSelectedDate(start);
		// return setOpen(true);
		return navigation(`/book-session/${event._id}`);
	};

	return (
		<div className="relative h-max pb-20">
			{loading ? (
				<Spinner loading={loading} />
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center mx-auto max-w-[90%] p-4 rounded-2xl">
					{events && events.length > 0 ? (
						events.map((event, index) => (
							<React.Fragment key={index}>
								{event?.available ? (
									<div
										className="rounded-lg border shadow-lg w-full h-max cursor-pointer transition-all duration-300 hover:scale-105"
										onClick={() => handleSelectEvent(event)}
									>
										{/* Title Section */}
										<div
											className="text-center text-xl text-white rounded-t-lg p-4 font-semibold capitalize"
											style={{
												backgroundColor: event.bg || "var(--theme-blue)",
											}}
										>
											{event?.title || "Session"}
										</div>

										{/* Duration Section */}
										<div className="p-4 flex flex-col items-center space-y-3">
											<div className="text-md font-semibold text-gray-700">
												Duration: <span className="text-gray-600">{formatEventDuration(event?.duration) || "30 Mins"}</span>
											</div>
										</div>
									</div>
								) : (
									<div></div>
								)}
							</React.Fragment>
						))
					) : (
						<div className="rounded-lg border shadow-lg w-full h-max">
							<div
								className="text-center text-xl text-white rounded-t-lg p-4 font-semibold"
								style={{
									backgroundColor: "var(--theme-blue)",
								}}
							>
								No Session Available
							</div>
						</div>
					)}
				</div>
			)}

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-title"
				aria-describedby="modal-description"
			>
				<Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-xl">
					<SessionTime
						handleAddEvent={handleAddEvent}
						setSelectedTime={setSelectedTime}
						selectedDate={selectedDate}
					/>
				</Box>
			</Modal>
		</div>



	);
}

export default MentorScheduleCard;
