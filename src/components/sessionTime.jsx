import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";

const localizer = momentLocalizer(moment);

function SessionTime(props) {
	const { handleAddEvent, setSelectedTime, selectedDate } = props;
	let minutes = new Date(selectedDate).getMinutes();
	let hours = new Date(selectedDate).getHours();
	minutes = minutes > 10 ? minutes : `0${minutes}`;
	hours = hours > 10 ? hours : `0${hours}`;
	const time = hours + ":" + minutes;
	return (
		<div className=" flex flex-col">
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<TimePicker
					label="Pick Time"
					onChange={(event) => setSelectedTime(new Date(event))}
				/>
			</LocalizationProvider>
			<button
				onClick={handleAddEvent}
				className="mt-10 bg-blue-500 text-white px-4 py-2 rounded"
			>
				Schedule A Session
			</button>
		</div>
	);
}

export default SessionTime;
