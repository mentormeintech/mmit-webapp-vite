import { Calendar, globalizeLocalizer, momentLocalizer } from 'react-big-calendar'
import globalize from 'globalize'
import * as React from 'react';
import moment from "moment";

function Schedule2(props) {
    const localizer = momentLocalizer(moment);
    const [myEvents, setEvents] = React.useState([])

    const events = [
        {
            id: 1,
            start: moment("2024-02-18T10:00:00").toDate(),
            end: moment("2024-02-18T11:00:00").toDate(),
            title: "MRI Registration",
            data: {
                type: "Reg",
            },
        },
        {
            id: 2,
            start: new Date('2024-02-02:14:00'),
            end: new Date('2024-02-02:15:00'),
            title: "ENT Appointment",
            data: {
                type: "App",
            },
        },
    ];

    React.useLayoutEffect(() => {
        setEvents(events)
    }, [])

    const components = {
        event: (props) => {
            const eventType = props?.event?.data?.type;
            switch (eventType) {
                case "Reg":
                    return (
                        <div style={{ background: "#454545", color: "white", display: 'flex', padding: '.5rem', justifyContent: 'flex-start', alignItems: 'center', height: "100%" }}>
                            {props.title}
                        </div>
                    );
                case "App":
                    return (
                        <>
                            <div
                                style={{ background: "#eb9572", color: "white", padding: '.5rem', height: "100%", display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}
                            >
                                {props.title}
                            </div>
                        </>
                    );
                default:
                    return null;
            }
        },
    };

    const handleSelectSlot = (event) => {

        const { end, start } = event
        const title = window.prompt('New Event name')
        if (title) {
            const newEvent = {
                id: myEvents.length + 1,
                title: title,
                start, end,
                data: {
                    type: "Reg",
                },
            }
            const updatedEvents = [...myEvents, newEvent];
            return setEvents(updatedEvents);
        }
        return setEvents(myEvents);
    }
    const handleSelectEvent = (event) => {
        const { title, end, start } = event
        alert(title)
    }


    return (
        <div style={{ margin: 'auto', display: 'flex', background: '#fff', flexDirection: 'column', justifySelf: 'center', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: '1rem', width: '100vw' }}>
            <Calendar
                {...props}
                localizer={localizer}
                events={myEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ marginTop: '1rem', marginBottom: '2rem', width: '90%', }}
                components={components}
                selectable
                popup
                onSelectSlot={handleSelectSlot}
                onSelectEvent={handleSelectEvent}
            />
        </div>
    );
}
export default Schedule2