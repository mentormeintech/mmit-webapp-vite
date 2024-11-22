import React, { Fragment } from "react";
import { Box, Input, InputLabel } from "@mui/material";
import Loader from "./loader";
import { ScheduleCard, ButtonOutline } from "../styled/component";
import MessageAlert from "./MessageAlert";
import { DAYS_OF_WEEKS_IN_ORDER } from "../utilities/pageData.util";
import { FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";

// export default function SchedulePage(props) {
export default function ScheduleModal(props) {
    const { handleSubmit, messageBox, clearMessage, handleAddEvent, loading, errors, message, register } = props;

    const [timeSlots, setTimeSlots] = React.useState(
        DAYS_OF_WEEKS_IN_ORDER.reduce((acc, day) => ({ ...acc, [day]: [] }), {})
    );

    // Function to add a new time slot
    const addTimeSlot = (event, day) => {
        event.preventDefault()
        setTimeSlots((prev) => ({
            ...prev,
            [day]: [...prev[day], { start: "09:00", end: "12:00" }],
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

                {messageBox && messageBox.message && (
                    <MessageAlert
                        message={messageBox.message}
                        type={messageBox.type}
                        clearMessage={clearMessage}
                    />
                )}

                {/* <ScheduleCard onSubmit={handleSubmit(handleAddEvent)}> */}
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
                                                value={slot.start}
                                                onChange={(e) =>
                                                    handleTimeChange(day, index, "start", e.target.value)
                                                }
                                            />
                                            <input
                                                type="time"
                                                value={slot.end}
                                                onChange={(e) =>
                                                    handleTimeChange(day, index, "end", e.target.value)
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

                    <div className="button-container">
                        <ButtonOutline
                            className={`inline-flex items-center justify-center rounded-2xl bg-sky-600 text-white text-xl font-bold transition-all duration-300 ${loading ? "cursor-not-allowed opacity-70" : "hover:bg-sky-700"
                                }`}
                            disabled={loading}
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
