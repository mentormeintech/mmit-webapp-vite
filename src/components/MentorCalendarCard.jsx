import { Calendar,Views, momentLocalizer } from "react-big-calendar";
import React, { useState, useEffect } from "react";
import moment from "moment";
import { Modal, Box, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { ScheduleView } from "../styled/component";

const localizer = momentLocalizer(moment);

function MentorCalendarCard(props) {
	const { mentorEvent } = props
	const [view, setView] = useState("month");
	const [events, setEvents] = useState([]);
	const [open, setOpen] = useState(false);
	const [selectedDate, setSelectedDate] = useState(null);
	const [selectedTime, setSelectedTime] = useState(null);
	console.log('mentorEvents', mentorEvent)
	useEffect(() => {
		setEvents(mentorEvent);
	}, []);

	const handleSelectSlot = ({ start }) => {
		console.log('start', start)
		setSelectedDate(start);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setSelectedDate(null);
	};

	const handleAddEvent = () => {
		const currentDate = new Date();
		currentDate.setDate(currentDate.getDate() - 1);

		if (selectedDate < currentDate) {
			alert("You cannot add events on past dates.");
			return;
		}
		if (selectedDate && selectedTime) {
			const [startTime, endTime] = selectedTime.split("-");
			const [startHour, startMinute] = startTime.split(":");
			const [endHour, endMinute] = endTime.split(":");
			const startDate = new Date(selectedDate);
			startDate.setHours(parseInt(startHour), parseInt(startMinute));
			const endDate = new Date(selectedDate);
			endDate.setHours(parseInt(endHour), parseInt(endMinute));
			const newEvent = {
				title: "Booked	",
				start: startDate,
				end: endDate,
			};
			setEvents([...events, newEvent]);
			handleClose();
		}
	};


	const handleSelectEvent = (event) => {
		const { title, end, start } = event
		alert(title)
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
			<Calendar
				localizer={localizer}
				events={events}
				startAccessor="start"
				endAccessor="end"
				selectable
				// defaultView={Views.WEEK}
				onSelectEvent={handleSelectEvent}
				// onSelectSlot={handleSelectSlot}
				components={components}
				onView={(newView) => setView(newView)}
				style={{ padding: 0, margin: 0 }}
			/>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-title"
				aria-describedby="modal-description"
			>
				<Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded">
					<RadioGroup
						value={selectedTime}
						onChange={(e) => setSelectedTime(e.target.value)}
					>
						<FormControlLabel
							value="8:00am-9:00am"
							control={<Radio />}
							label="8:00am - 9:00am"
						/>
						<FormControlLabel
							value="9:00am-10:00am"
							control={<Radio />}
							label="9:00am - 10:00am"
						/>{" "}
						<FormControlLabel
							value="10:00am-11:00am"
							control={<Radio />}
							label="10:00am - 11:00am"
						/>
						<FormControlLabel
							value="11:00am-12:00pm"
							control={<Radio />}
							label="11:00am - 12:00pm"
						/>
						<FormControlLabel
							value="12:00pm-1:00pm"
							control={<Radio />}
							label="12:00pm - 1:00pm"
						/>
						<FormControlLabel
							value="1:00pm-2:00pm"
							control={<Radio />}
							label="1:00pm - 2:00pm"
						/>
						<FormControlLabel
							value="2:00pm-3:00pm"
							control={<Radio />}
							label="2:00pm - 3:00pm"
						/>
						<FormControlLabel
							value="3:00pm-4:00pm"
							control={<Radio />}
							label="3:00pm - 4:00pm"
						/>
						<FormControlLabel
							value="4:00pm-5:00pm"
							control={<Radio />}
							label="4:00pm - 5:00pm"
						/>
					</RadioGroup>
					<button
						onClick={handleAddEvent}
						className="bg-blue-500 text-white px-4 py-2 rounded"
					>
						Add Event
					</button>
				</Box>
			</Modal>
		</div>
	);
}

export default MentorCalendarCard;
