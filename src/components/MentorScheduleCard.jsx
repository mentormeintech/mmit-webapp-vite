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

function MentorScheduleCard(props) {
	const { mentorEvent } = props;
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

			return (
				<div className="relative h-max pb-20">
            {loading ? (
                <Spinner loading={loading} />
            ) : (
                <div className="flex flex-wrap items-center mx-auto justify-between gap-6 w-max max-w-[90%] border p-4 rounded-2xl shadow-lg">
                    {mentorEvent?.map((event, index) => (
                        <React.Fragment key={index}>
                            {event.available ? (
                                <div className="rounded-md border shadow-md w-72 h-max">
                                    <div
                                        className="text-center text-xl rounded-t-md p-4 font-semibold"
                                        style={{
                                            backgroundColor: event.bg,
                                        }}
                                    >
                                        Available
                                    </div>
                                    <div className="p-2 flex flex-col items-center">
                                        <div className="text-3xl font-semibold mb-3">
                                            {moment(event.start).format("h:mma")}
                                        </div>
                                        <div className="text-2xl font-semibold">
                                            {moment(event.start).format("MMMM D")}
                                        </div>
                                        <div className="text-2xl font-semibold">
                                            {moment(event.start).format("YYYY")}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div key={index}></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            )}
        </div>
			);
		}

		export default MentorScheduleCard;
