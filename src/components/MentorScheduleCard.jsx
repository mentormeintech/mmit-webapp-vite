import React, { useState, useEffect } from "react";
import moment from "moment";
import { Modal, Box } from "@mui/material";
import { ScheduleView } from "../styled/component";
import SessionTime from "./sessionTime";
import Alert from "../features/Alert";
import { getValidToken } from "../utilities/tokenClient";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../utilities/apiClient";
import { setToken } from "../utilities/axiosClient";
import Spinner from "./Spinner";

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
		setcurrentEvent(event);
		const token = await getValidToken();
		if (!token) {
			return navigation("/auth/signin");
		}
		await setToken(token);
		setSelectedDate(start);
		return setOpen(true);
	};
	return (
		<div className="relative h-max pb-20">
			{loading ? (
				<Spinner loading={loading} />
			) : (
				<div className="flex flex-wrap items-center mx-auto justify-evenly gap-6 w-max max-w-[100%] p-4 rounded-2xl cursor-pointer">
					{events && events.length > 0 ? events?.map((event, index) => (
						<React.Fragment key={index}>
							{event?.available ? (
								<div
									className="rounded-md border pb-3 shadow-md w-72 h-max cursor-pointer"
									onClick={() => handleSelectEvent(event)}
								>
									<div
										className="text-center text-xl text-white rounded-t-md p-4 font-semibold"
										style={{
											backgroundColor: event.bg,
										}}
									>
										Available
									</div>
									<div className="pt-3 flex flex-col items-center">
										<div className="text-2xl font-semibold mb-3">
											{moment(event.start).format(
												"h:mma"
											)}{" "}
											-{" "}
											{moment(event.end).format("h:mma")}
										</div>
										<div className="text-xl text-gray-700 font-semibold">
											{moment(event.start).format(
												"MMMM D, YYYY"
											)}
										</div>
										<div className="text-2xl font-semibold">
											{/* {moment(event.start).format("YYYY")} */}
										</div>
									</div>
								</div>
							) : (
								<div key={index}></div>
							)}
						</React.Fragment>
					)): 	<div
					className="rounded-md border pb-3 shadow-md w-72 h-max cursor-pointer"
				>
					<div
						className="text-center text-xl text-white rounded-t-md p-4 font-semibold"
						style={{
							backgroundColor: 'var(--theme-blue)',
						}}
					>
						No Session Available
					</div>
				</div>}
				</div>
			)}

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-title"
				aria-describedby="modal-description"
			>
				<Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded">
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
