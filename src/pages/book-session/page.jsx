import "react-datepicker/dist/react-datepicker.css";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/footer";
import { useNavigate, useParams } from "react-router-dom";
import { useLayoutEffect } from "react";
import Spinner from "../../components/Spinner";
import Alert from "../../features/Alert";
import { logUserOut, userGetRequest } from "../../utilities/apiClient";
import { accessToken } from "../../utilities/tokenClient";
import DatePicker from "react-datepicker";
import moment from "moment";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';
import axios from 'axios';
import { setToken } from "../../utilities/axiosClient";
import { calculateStartEndTimes } from "../../utilities/util";
import { addDays, format } from "date-fns";

const BookSession = () => {

    const VITE_SITE_GOOGLE_CLIENT_SECRET = import.meta.env.VITE_SITE_GOOGLE_CLIENT_SECRET;
    const VITE_SITE_CALLBACK_URL = import.meta.env.VITE_SITE_CALLBACK_URL;
    const GOOGLE_CLIENT_ID = import.meta.env.VITE_SITE_GOOGLE_CLIENT_ID;

    const { session_id } = useParams();
    const session = useSession()
    const navigation = useNavigate();
    const [loading, setLoading] = useState(false);
    const [mentorSession, setMentorSession] = useState({});
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [timeSlots, setTimeSlots] = useState([]);
    const [availabilities, setAvailabilities] = useState([]);
    const { selected_mentor } = useSelector((state) => state.selected_mentor);
    const [timeZone, settimeZone] = useState('')
    const [selectedTime, setSelectedTime] = useState(null);
    const supaBaseClient = useSupabaseClient()

    const today = format(new Date(), "yyyy-MM-dd");
    const maxDate = format(addDays(new Date(), 6), "yyyy-MM-dd");
    //   const timeZone = moment.tz.guess(); // Detect system timezone

    useLayoutEffect(() => {
        getSession(session_id);
    }, []);

    async function getSession(session_id) {
        try {
            const userToken = localStorage.getItem(accessToken);
            if (!userToken) return logUserOut();
            // console.log("Session", session)
            setLoading(true);
            const response = await userGetRequest(`event/session?session_id=${session_id}`);
            if (response?.success) {
                // await fetchCalendarEvents(response.data.oAuthClient)
                // await fetchCalendarEvents("ya29.a0ARW5m761zs8WON36x4lcAHLnJtM5ByFYjKBosKPnG262CM_O0Di2XGzo8p-V-NX1nADrC8E8HQ10sDzPyIgIsKiyvfWF0JVPuPwtoqVtNdo9pUrAVnyKqrJLMoqVtmSnTTo-ejzz9NVYoC_CguA72wN1DLOqXdBImJYaCgYKATUSARASFQHGX2MiCxxucVziTmXx5uz7Gqoudg0170")
                setMentorSession(response.data.session);
                setAvailabilities(response.data.availabilities);
                settimeZone(response.data.timezone)
                setLoading(false);
            }
            else if (response.status === 401) {
                navigation('/auth/signin')
            }
            else {
                Alert(response.message, "warning");
                setLoading(false);
            }
        } catch (error) {
            Alert(error.message, "error");
            setLoading(false);
        }
    }

    const fetchCalendarEvents = async (accessToken) => {
        const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`, // Use the access token here
            },
        });

        if (!response.ok) {
            console.error('Error fetching calendar events:', response);
            return;
        }

        const data = await response.json();
        // console.log('Google Calendar Events:', data.items);
    };

    const handleGoogleCalendarEvent = async (event) => {
        event.preventDefault()
        try {
            if (!selectedDate && !selectedTime) {
                return Alert("Start end date can't be empty", "warning");
            }
            if (new Date().getTime() > new Date(selectedDate).getTime()) {
                return Alert("You can't select a previous date", "warning");
            }
            const { start, end } = calculateStartEndTimes(selectedDate, selectedTime)
            const { title, bg, duration, event_date, description, mentor_provider_token, mentor_access_token } = mentorSession
            mentorSession.start = start
            mentorSession.end = end
            const newEvent = { title, bg, duration, event_date, description, start, end }
            setToken(localStorage.getItem(accessToken))
            if (parseInt(duration) > 60) {
                return Alert("Duration should be between 1 and 60 minutes", "warning");
            }
            if (new Date(start).getTime() > new Date(end).getTime()) {
                return Alert("Start date can't be after end date", "warning");
            }
            if (start && end && event_date) {
                setLoading(true)
                newEvent.description = description
                newEvent.summary = description || 'Mentorship Session'
                newEvent.start = {
                    'dateTime': new Date(start).toISOString(),
                    'timeZone': timeZone
                }
                newEvent.end = {
                    'dateTime': new Date(end).toISOString(),
                    'timeZone': timeZone
                }
                const event = {
                    ...newEvent, conferenceData: {
                        createRequest: {
                            requestId: new Date().getTime(),
                            conferenceSolutionKey: {
                                type: "hangoutsMeet",
                            },
                        },
                    },
                }
                const response = await axios.post('https://www.googleapis.com/calendar/v3/calendars/primary/events', event, {
                    headers: {
                        Authorization: `Bearer ${mentor_access_token}`,
                    },
                    params: {
                        conferenceDataVersion: 1,
                    },
                })
                if (!response.ok) {
                    setLoading(false)
                    return Alert('Unable to perform action', "warning");
                }
                if (response && response.status === 200) {
                    console.log("response", response)
                    // setmessageBox({ message: 'Event added', type: 'success' })
                    // console.log('Meeting link', response.data.hangoutLink)
                    // console.log('Meeting description', response.data.description)
                    // setLoading(false)
                    // getMyEvents()
                    // setTimeout(() => {
                    //     handleClose()
                    //     reset(defaultState);
                    // }, 2000);
                }
                else {

                }

            }
            else {
                setLoading(false)
                return Alert('Some input are empty', "warning");
            }
        } catch (error) {
            Alert(error.message, "warning");
            setLoading(false)
        }
    }

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    useEffect(() => {
        if (selectedDate) {
            const day = moment(selectedDate).format("dddd").toLowerCase();
            generateTimeSlots(day);
        }
    }, [selectedDate]);


    // const formatDate = (date) => {
    //     // Convert the date string to a Date object
    //     const dateObj = new Date(date);

    //     // Formatting options
    //     const options = {
    //         weekday: "short",
    //         year: "numeric",
    //         month: "short",
    //         day: "2-digit",
    //         hour: "2-digit",
    //         minute: "2-digit",
    //         second: "2-digit",
    //         timeZoneName: "short",
    //     };

    //     // Format the date into the desired format
    //     return dateObj.toLocaleString("en-US", options).replace(",", "");
    // };

    const generateTimeSlots = (day) => {
        const slots = [];
        availabilities
            .filter((availability) => availability.dayOfWeek === day)
            .forEach((slot) => {
                const start = moment(slot.start_time);
                const end = moment(slot.end_time);

                while (start.isBefore(end)) {
                    slots.push(start.format("h:mm A"));
                    start.add(30, "minutes");
                }
            });
        setTimeSlots(slots);
    };

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <div className="w-full overflow-hidden pt-7">
                    <Header />
                    <motion.div
                        className="relative flex flex-col items-center mt-16 px-4"
                        initial={{ y: -200 }}
                        animate={{ y: 0 }}
                        transition={{ type: "spring", stiffness: 120 }}
                    >
                        <h1 className="text-xl font-semibold mt-4 capitalize">
                            {`Book a ${mentorSession?.title} with ${selected_mentor.first_name}`}
                        </h1>
                    </motion.div>

                    <motion.div
                        className="max-w-md mx-auto mt-12 bg-white p-6 rounded-lg shadow-lg mb-[3rem]"
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-lg font-semibold mb-4">Book a Session</h2>

                        {/* Time Zone */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">
                                Timezone
                            </label>
                            <p className="w-full border rounded-lg p-2 bg-gray-100">
                                {timeZone}
                            </p>
                        </div>

                        {/* Date Picker */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">
                                Date
                            </label>
                            <input
                                type="date"
                                min={today}
                                max={maxDate}
                                value={selectedDate}
                                onChange={(date) => {
                                    // const formatted = formatDate(date.target.value);
                                    // setSelectedDate(formatted)
                                    setSelectedDate(date.target.value)
                                }}
                                className="w-full border rounded-lg p-2"
                            />
                        </div>

                        {/* Time Slots */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">
                                Time
                            </label>
                            <select
                                className="w-full border rounded-lg p-2"
                                onChange={handleTimeChange}
                                value={selectedTime || ""}
                            >
                                {timeSlots.length > 0 ? (
                                    timeSlots.map((slot, index) => (
                                        <option key={index} value={slot}>
                                            {slot}
                                        </option>
                                    ))
                                ) : (
                                    <option value="">No available times</option>
                                )}
                            </select>
                        </div>

                        {/* Actions */}
                        <div className="flex justify-between items-center mt-4 mb-[5rem]">
                            <button
                                className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700"
                                onClick={() => navigation(-1)}
                            >
                                Cancel
                            </button>
                            <button onClick={handleGoogleCalendarEvent} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                                Save
                            </button>
                        </div>
                    </motion.div>
                    <Footer />
                </div>
            )}
        </>
    );
};

export default BookSession;
