import { format } from 'date-fns';
import { setHours, setMinutes, addMinutes } from "date-fns";

export const formatDateWithOf = (date) => {
    // date = new Date(date);
    return format(date, "do 'of' MMMM,  yyyy");
}

export const convertTimeToDate = (time) => {
    const currentDate = new Date();
    // Split time strings into hours and minutes
    const [startHour, startMinute] = time.split(':').map(Number);

    // Set start time on the current date
    const timeDate = new Date(currentDate);
    timeDate.setHours(startHour);
    timeDate.setMinutes(startMinute);
    timeDate.setSeconds(0);

    return timeDate
}

export function formatEventDuration(durationInMinutes) {
    const hours = Math.floor(durationInMinutes / 60)
    const minutes = durationInMinutes % 60
    const minutesString = `${minutes} ${minutes > 1 ? "mins" : "min"}`
    const hoursString = `${hours} ${hours > 1 ? "hrs" : "hr"}`

    if (hours === 0) return minutesString
    if (minutes === 0) return hoursString
    return `${hoursString} ${minutesString}`
}

export function calculateStartEndTimes(date, selectedTime) {
    // Parse the selected time (e.g., "14:30")

    const [time, meridian] = selectedTime.split(" "); // Split into time and AM/PM
    const [hoursStr, minutesStr] = time.split(":"); // Split into hours and minutes
    let hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);

    // Convert to 24-hour format
    if (meridian === "PM" && hours < 12) {
        hours += 12;
    } else if (meridian === "AM" && hours === 12) {
        hours = 0; // Midnight case
    }

    // const [hours, minutes] = selectedTime.split(":").map(Number);

    // Set the start time on the date
    const start = setMinutes(setHours(new Date(date), hours), minutes);

    // Add 30 minutes for the end time
    const end = addMinutes(start, parseInt(minutesStr));

    return { start, end };
}