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


const BookSession = () => {

    const VITE_SITE_GOOGLE_CLIENT_SECRET = import.meta.env.VITE_SITE_GOOGLE_CLIENT_SECRET;
    const VITE_SITE_CALLBACK_URL = import.meta.env.VITE_SITE_CALLBACK_URL;
    const GOOGLE_CLIENT_ID = import.meta.env.VITE_SITE_GOOGLE_CLIENT_ID;

    const { session_id } = useParams();
    const navigation = useNavigate();
    const [loading, setLoading] = useState(false);
    const [mentorSession, setMentorSession] = useState({});
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [timeSlots, setTimeSlots] = useState([]);
    const [availabilities, setAvailabilities] = useState([]);
    const { selected_mentor } = useSelector((state) => state.selected_mentor);
    const [timeZone, settimeZone] = useState('')
    const supaBaseClient = useSupabaseClient()
    //   const timeZone = moment.tz.guess(); // Detect system timezone

    useLayoutEffect(() => {
        getSession(session_id);
    }, []);

    async function getSession(session_id) {
        try {
            const userToken = localStorage.getItem(accessToken);
            if (!userToken) return logUserOut();

            setLoading(true);
            const response = await userGetRequest(`event/session?session_id=${session_id}`);
            if (response?.success) {
                await fetchCalendarEvents(response.data.oAuthClient)
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
        console.log("accessToken", accessToken)
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
        console.log('Google Calendar Events:', data.items);
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
                                value={selectedDate}
                                onChange={(date) => {
                                    // const formatted = formatDate(date.target.value);
                                    // setSelectedDate(formatted)
                                    setSelectedDate(date.target.value)
                                }}
                                className="w-full border rounded-lg p-2"
                            />
                            {/* <DatePicker
                                selected={selectedDate}
                                // onChange={(date) => setSelectedDate(date)}
                                onChange={(date) => {
                                    console.log("onChange", date)
                                    setSelectedDate(date)
                                }}
                                className="w-full border rounded-lg p-2"
                                dateFormat="MMMM d, yyyy"
                            /> */}
                        </div>

                        {/* Time Slots */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">
                                Time
                            </label>
                            <select className="w-full border rounded-lg p-2">
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
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
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
