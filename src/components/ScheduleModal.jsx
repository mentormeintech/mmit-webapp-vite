import React, { useState, useEffect } from "react";
import { Box, Input, InputLabel } from "@mui/material";
import Loader from "./loader";
import { ScheduleCard, ButtonOutline } from "../styled/component";
import MessageAlert from "./MessageAlert";
import { DAYS_OF_WEEKS_IN_ORDER } from "../utilities/pageData.util";
import { FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useForm } from "react-hook-form";
import { accessToken } from "../utilities/tokenClient";
import { setToken } from "../utilities/axiosClient";
import { postRequest } from "../utilities/apiClient";

// export default function SchedulePage(props) {
export default function ScheduleModal(props) {

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [messageBox, setmessageBox] = useState({
        message: '',
        type: 'error'
    })
    const { clearMessage, existingAvailabilities, loading, message, setloading } = props;
    const [timeSlots, setTimeSlots] = useState(
        DAYS_OF_WEEKS_IN_ORDER.reduce((acc, day) => ({ ...acc, [day]: [] }), {})
    );

    useEffect(() => {
        if (existingAvailabilities?.length > 0) {
            const transformed = existingAvailabilities.reduce((acc, slot) => {
                const { dayOfWeek, start_time, end_time } = slot;
                acc[dayOfWeek] = acc[dayOfWeek] || [];
                acc[dayOfWeek].push({
                    start_time: new Date(start_time).toISOString().slice(11, 16), // Format as HH:mm
                    end_time: new Date(end_time).toISOString().slice(11, 16),   // Format as HH:mm
                });
                return acc;
            }, DAYS_OF_WEEKS_IN_ORDER.reduce((acc, day) => ({ ...acc, [day]: [] }), {}));
            setTimeSlots(transformed);
        }
    }, [existingAvailabilities]);

    function checkForOverlaps(schedule) {
        // Iterate over each day in the schedule
        Object.keys(schedule).forEach((day) => {
            const slots = schedule[day];
            if (slots.length > 0) {
                // Sort slots by start time
                const sortedSlots = slots.sort((a, b) => a.start_time.localeCompare(b.start_time));

                // Check for overlaps
                for (let i = 0; i < sortedSlots.length; i++) {
                    const currentSlot = sortedSlots[i];

                    // Ensure start_time is before end_time in each slot
                    if (currentSlot.start_time >= currentSlot.end_time) {
                        throw new Error(`Invalid time range on ${day}: Start time (${currentSlot.start_time}) must be before end time (${currentSlot.end_time}).`);
                    }

                    // If there's a next slot, check for overlaps
                    if (i < sortedSlots.length - 1) {
                        const nextSlot = sortedSlots[i + 1];

                        // If the current slot's end time is greater than the next slot's start time, there's an overlap
                        if (currentSlot.end_time > nextSlot.start_time) {
                            throw new Error(`Overlap detected on ${day}: Slot ${JSON.stringify(currentSlot)} overlaps with ${JSON.stringify(nextSlot)}`);
                        }
                    }
                }
            }
        });

        return "No overlaps found!";
    }

    const transformSchedule = (schedule) => {
        const transformedAvailabilities = [];

        Object.keys(schedule).forEach((day) => {
            schedule[day].forEach((slot) => {
                transformedAvailabilities.push({
                    start_time: new Date(`1970-01-01T${slot.start_time}:00Z`), // Convert to Date
                    end_time: new Date(`1970-01-01T${slot.end_time}:00Z`),     // Convert to Date
                    dayOfWeek: day
                });
            });
        });

        return transformedAvailabilities;
    };

    const handleScheduleSlot = async (event, timeSlots) => {
        event.preventDefault()
        try {
            const formData = {}
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            setToken(localStorage.getItem(accessToken))
            const updatedSchedule = checkForOverlaps(timeSlots)
            if (updatedSchedule === 'No overlaps found!') {
                const transformedSchedule = transformSchedule(timeSlots)
                formData.timezone = timezone
                formData.availabilities = transformedSchedule
                console.log('timeSlots', JSON.stringify(formData))
                const response = await postRequest('schedule/create', formData)
                if (response && response.success === true) {
                    setmessageBox({ message: 'Schedule created', type: 'success' })
                    setloading(false)
                }
                else {
                    setmessageBox({ message: response.message, type: 'warning' })
                    setloading(false)
                }
            }

        } catch (error) {
            setmessageBox({ message: error.message, type: 'warning' })
            setloading(false)
        }
    }

    // Function to add a new time slot
    const addTimeSlot = (event, day) => {
        event.preventDefault()
        setTimeSlots((prev) => ({
            ...prev,
            [day]: [...prev[day], { start_time: "09:00", end_time: "12:00" }],
        }));
    };

    // Function to delete a time slot
    const deleteTimeSlot = (event, day, index) => {
        event.preventDefault()
        setTimeSlots((prev) => ({
            ...prev,
            [day]: prev[day].filter((_, i) => i !== index),
        }));
    };

    // Function to handle time change
    const handleTimeChange = (day, index, field, value) => {
        setTimeSlots((prev) => ({
            ...prev,
            [day]: prev[day].map((slot, i) =>
                i === index ? { ...slot, [field]: value } : slot
            ),
        }));
    };

    return (
        <div className="schedule-page-container">
            <Box sx={{ width: "100%", margin: "0 auto", padding: "0rem 0" }}>
                {/* <h1 htmlFor="component-duration" className="schedule-title">
                    Schedule
                </h1> */}

                {/* <ScheduleCard onSubmit={handleSubmit(handleAddSchedule)}> */}
                <ScheduleCard>
                    <div className="grid-container">
                        {DAYS_OF_WEEKS_IN_ORDER?.map((day) => (
                            <React.Fragment key={day}>
                                {/* Left: Day Label */}
                                <div className="day-label capitalize">{day.substring(0, 3)}</div>
                                {/* Right: Time Slots */}
                                <div className="day-content">

                                    {timeSlots[day]?.map((slot, index) => (
                                        <div key={index} className="time-slot">
                                            <input
                                                type="time"
                                                value={slot.start_time}
                                                onChange={(e) =>
                                                    handleTimeChange(day, index, "start_time", e.target.value)
                                                }
                                            />
                                            <input
                                                type="time"
                                                value={slot.end_time}
                                                onChange={(e) =>
                                                    handleTimeChange(day, index, "end_time", e.target.value)
                                                }
                                            />
                                            <div className="delete-button">
                                                <ImCross className="cursor-pointer" onClick={(event) => deleteTimeSlot(event, day, index)} />
                                            </div>
                                        </div>
                                    ))}
                                    <div
                                        className="add-button"
                                    >
                                        <FaPlus className="cursor-pointer" onClick={(event) => addTimeSlot(event, day)} />
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>

                    {messageBox && messageBox.message && (
                        <MessageAlert
                            message={messageBox.message}
                            type={messageBox.type}
                            clearMessage={() => setmessageBox({ message: '', type: 'warning' })}
                        />
                    )}
                    <div className="button-container">
                        <ButtonOutline
                            className={`inline-flex items-center justify-center rounded-2xl bg-sky-600 text-white text-xl font-bold transition-all duration-300 ${loading ? "cursor-not-allowed opacity-70" : "hover:bg-sky-700"
                                }`}
                            disabled={loading}
                            onClick={(event) => handleScheduleSlot(event, timeSlots)}
                        >
                            {loading ? <Loader loader_color="#F89878" /> : "Save"}
                        </ButtonOutline>
                        {message && (
                            <span
                                className={`text-xs mt-3 ${message.success === false ? "text-red-500" : "text-cyan-500"
                                    }`}
                            >
                                {message}
                            </span>
                        )}
                    </div>
                </ScheduleCard>
            </Box>
        </div>
    );
}
