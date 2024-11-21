import { format } from 'date-fns';


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

export function formatEventDescription(durationInMinutes) {
    const hours = Math.floor(durationInMinutes / 60)
    const minutes = durationInMinutes % 60
    const minutesString = `${minutes} ${minutes > 1 ? "mins" : "min"}`
    const hoursString = `${hours} ${hours > 1 ? "hrs" : "hr"}`

    if (hours === 0) return minutesString
    if (minutes === 0) return hoursString
    return `${hoursString} ${minutesString}`
}