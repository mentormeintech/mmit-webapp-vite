import { Calendar, momentLocalizer } from "react-big-calendar";
import React, { useState, useEffect } from "react";
import moment from "moment";
import { Modal, Box } from "@mui/material";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { ScheduleView } from "../styled/component";
import SessionTime from "./sessionTime";
import Alert from "../features/Alert";
import { getValidToken } from "../utilities/tokenClient";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../utilities/apiClient";
import { setToken } from "../utilities/axiosClient";
import Spinner from "./Spinner";

const localizer = momentLocalizer(moment);

function MentorCalendarCard(props) {
	const { mentorEvent } = props
	const [view, setView] = useState("month");
	const [events, setEvents] = useState([]);
	const [open, setOpen] = useState(false);
	const [loading, setloading] = useState(false)
	const [selectedDate, setSelectedDate] = useState(null);
	const [selectedTime, setSelectedTime] = useState(null);
	const [currentEvent, setcurrentEvent] = useState(null)
	const navigation = useNavigate()

	useEffect(() => {
		setEvents(mentorEvent);
	}, []);

	const handleSelectSlot = ({ start }) => {
		console.log('start', start)
		setSelectedDate(start);
		setOpen(true);
	};

	const sendAmPm = (date) => {
		let newDate = new Date(date).getHours();
		if (newDate < 12) {
			return `${newDate}AM`
		}
		else {
			newDate = newDate % 12
			return `${newDate}PM`
		}
	};


	const handleClose = () => {
		setOpen(false);
		setSelectedDate(null);
	};

	const handleAddEvent = async () => {
		try {
			if (!selectedTime) {
				return Alert('Please pick a time', 'warning')
			}
			if (new Date(selectedTime).getHours() < new Date(selectedDate).getHours()) {
				return Alert(`Please select time from ${sendAmPm(selectedDate)}`, 'warning')
			}
			if (!currentEvent) {
				return Alert('Please pick a schedule', 'warning')
			}
			setOpen(false);
			setloading(true)
			const response = await postRequest(`event/book?time=${new Date(selectedTime)}&event_id=${currentEvent._id}`, {})
			if (response && response.success === true) {
				setOpen(false);
				setloading(false)
				return Alert(`Session booked! Please wait for mentor's response`, 'success')
			}
			else {
				setOpen(false);
				setloading(false)
				return Alert(`${response.message}`, 'warning')
			}
			setloading(false)
		} catch (error) {
			setOpen(false);
			setloading(false)
			return Alert(`${error.message}`, 'warning')
		}
	};


	const handleSelectEvent = async (event) => {
		const { title, end, start } = event
		setcurrentEvent(event)
		const token = await getValidToken()
		if (!token) {
			return navigation('/auth/signin')
		}
		await setToken(token)
		setSelectedDate(start);
		return setOpen(true);
	}

	const components = {
		event: (props) => {
			const eventType = props?.event?.data?.type;
			const bg = props?.event?.bg;
			return (
				<ScheduleView className='capitalize ScheduleView' bg={bg}>
					{props.title.substring(0, 19 - 3) + '...' || 'No Title'}
				</ScheduleView>
			)
		},
	};

	return (
		<div className="relative h-screen">
			{loading ? <Spinner loading={loading} /> : <Calendar
				localizer={localizer}
				events={events}
				startAccessor="start"
				endAccessor="end"
				selectable
				onSelectEvent={handleSelectEvent}
				components={components}
				onView={(newView) => setView(newView)}
				style={{ padding: 0, margin: 0 }}
			/>}
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-title"
				aria-describedby="modal-description"
			>
				<Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded">
					<SessionTime handleAddEvent={handleAddEvent} setSelectedTime={setSelectedTime} selectedDate={selectedDate} />
				</Box>
			</Modal>
		</div>
	);
}

export default MentorCalendarCard;