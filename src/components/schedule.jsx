import React, { useState, useLayoutEffect } from 'react';
import { useForm } from "react-hook-form";
import Loader from './loader';
import { ButtonOutline } from '../styled/component';
import MessageAlert from './MessageAlert';
import { eventColors } from '../utilities/pageData.util';
import { logUserOut, postRequest, userGetRequest } from '../utilities/apiClient';
import { setToken } from '../utilities/axiosClient';
import { accessToken } from '../utilities/tokenClient';
import Spinner from './Spinner';
import { convertTimeToDate, formatEventDescription } from '../utilities/util';
import { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';
import axios from 'axios';
import { EventCard } from './eventCard';
import { BsCalendarEvent } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
import EventModal from './EventModal';
import ScheduleModal from './ScheduleModal';
import CalendarTabs from './CalendarTabs';



const defaultState = {
    title: '',
    description: '',
    duration: 0,
    event_date: new Date(),
    bg: '',
}

function MentorSchedule(props) {
    const session = useSession()
    const supaBaseClient = useSupabaseClient()
    const { isLoading } = useSessionContext()
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [myEvents, setEvents] = useState([]);
    const [open, setOpen] = useState(false);
    const [bgColor, setbgColor] = useState('#000')
    const [loading, setloading] = useState(false);
    const [eventloading, setEventloading] = useState(false);
    const [message, setmessage] = useState("");
    const [value, setValue] = React.useState(0);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [messageBox, setmessageBox] = useState({
        message: '',
        type: 'error'
    })

    useLayoutEffect(() => {
        getMyEvents()
    }, [])

    async function clearMessage() {
        setmessageBox({ ...messageBox, message: '' })
    }

    const selectedDelete = (eventIndex) => {
        setEvents((prevEvents) => {
          const updatedEvents = [...prevEvents]; // Copy the array
          updatedEvents.splice(eventIndex, 1); // Remove the event
          return updatedEvents; // Update state
        });
        console.log("Deleted event at index:", eventIndex);
      };

    const handleChange = (event, newValue) => {
        console.log("newValue", newValue)
        setValue(newValue);
    };

    async function getMyEvents() {
        try {
            await setToken(localStorage.getItem(accessToken))
            setEventloading(true)
            const response = await userGetRequest('event/mentor-events')
            if (response && response.success === true) {
                setEvents(response.data)
                setEventloading(false)
            }
            else if (response.status === 401) {
                setmessageBox({ message: response.message, type: 'warning' })
                setEventloading(false)
                logUserOut()
            }
            else {
                setmessageBox({ message: response.message, type: 'warning' })
                setEventloading(false)
            }
        } catch (error) {
            setmessageBox({ message: error.message, type: 'warning' })
            setEventloading(false)
        } finally {
            setTimeout(() => {
                clearMessage()
                setEventloading(false)
            }, 5000);
        }
    }

    function selectRandomColor() {
        const randomIndex = Math.floor(Math.random() * eventColors.length);
        return eventColors[randomIndex];
    }

    const handleSelectSlot = () => {
        handleOpen()
    };

    const handleAddEventOld = async (data) => {
        try {
            setToken(localStorage.getItem(accessToken))
            const { title, bg, event_date } = data
            console.log("event_date", event_date)
            console.log("data", data)
            const start = convertTimeToDate(data.start_time)
            const end = convertTimeToDate(data.end_time)
            if (new Date(start).getTime() > new Date(end).getTime()) {
                setmessageBox({ message: "Start date can't be after end date", type: 'warning' })
            }
            else {
                if (start && end && event_date) {
                    setloading(true)
                    const newEvent = {
                        title: title || 'available',
                        start: new Date(start),
                        end: new Date(end),
                        event_date: new Date(event_date),
                        bg: selectRandomColor() ? selectRandomColor() : bgColor,
                        // type: "",
                    }
                    const response = await postRequest('event/create', newEvent)
                    if (response && response.success === true) {
                        await handleGoogleCalendarEvent(newEvent)
                        // setEvents(response.data)
                        // setmessageBox({ message: 'Event added', type: 'success' })
                        // setloading(false)
                        // getMyEvents()
                        // setTimeout(() => {
                        //     handleClose()
                        //     reset(defaultState);
                        // }, 2000);
                    }
                    else {
                        setmessageBox({ message: response.message, type: 'warning' })
                        setloading(false)
                    }
                }
                else {
                    clearMessage()
                    return alert('Some input are empty')
                }
            }
        } catch (error) {
            setmessageBox({ message: error.message, type: 'warning' })
            setloading(false)
        }
        finally {
            setTimeout(() => {
                clearMessage()
            }, 5000);
        }
    }

    const handleAddEvent = async (data) => {
        try {
            setToken(localStorage.getItem(accessToken))
            const { title, bg, description, duration } = data
            // if(duration)
            if (description) {
                setloading(true)
                const newEvent = {
                    title: title || 'available',
                    // event_date: new Date(),
                    description: description,
                    duration: parseInt(duration),
                    bg: selectRandomColor() ? selectRandomColor() : bgColor,
                    // type: "",
                }
                console.log("newEvent", newEvent)
                const response = await postRequest('event/create', newEvent)
                if (response && response.success === true) {
                    // await handleGoogleCalendarEvent(newEvent)
                    setEvents(response.data)
                    setmessageBox({ message: 'Event added', type: 'success' })
                    setloading(false)
                    getMyEvents()
                    setTimeout(() => {
                        handleClose()
                        reset(defaultState);
                    }, 2000);
                }
                else {
                    setmessageBox({ message: response.message, type: 'warning' })
                    setloading(false)
                }
            }
            else {
                clearMessage()
                return alert('Some input are empty')
            }
        } catch (error) {
            setmessageBox({ message: error.message, type: 'warning' })
            setloading(false)
        }
        finally {
            setTimeout(() => {
                clearMessage()
            }, 5000);
        }
    }


    // Refactor this code in such a way that when the google event is done creating update the event table and add the meeting link created created by google to it

    
    const handleGoogleCalendarEventOld = async (data) => {
        try {
            const newEvent = data
            setToken(localStorage.getItem(accessToken))
            const { start, end } = newEvent
            if (start && end) {
                setloading(true)
                newEvent.description = 'Session with a mentee'
                newEvent.summary = 'Mentorship Session'
                newEvent.start = {
                    'dateTime': new Date(start).toISOString(),
                    'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
                }
                newEvent.end = {
                    'dateTime': new Date(end).toISOString(),
                    'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
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
                        Authorization: `Bearer ${session.provider_token}`,
                    },
                    params: {
                        conferenceDataVersion: 1,
                    },
                })
                // console.log("handleGoogleCalendarEvent", response)
                if (response && response.status === 200) {
                    setmessageBox({ message: 'Event added', type: 'success' })
                    console.log('Meeting link', response.data.hangoutLink)
                    console.log('Meeting description', response.data.description)
                    setloading(false)
                    getMyEvents()
                    setTimeout(() => {
                        handleClose()
                        reset(defaultState);
                    }, 2000);
                }
                else {

                }

            }
            else {
                clearMessage()
                return alert('Some input are empty')
            }
        } catch (error) {
            setmessageBox({ message: error.message, type: 'warning' })
            setloading(false)
        }
        finally {
            setTimeout(() => {
                clearMessage()
            }, 5000);
        }
    }

    const handleGoogleCalendarEvent = async (data) => {
        try {
            const { title, bg, duration, event_date } = data
            const newEvent = data
            setToken(localStorage.getItem(accessToken))
            const { start, end } = newEvent
            if (parseInt(duration) > 60) {
                return setmessageBox({ message: "Duration should be between 1 and 60 minutes", type: 'warning' })
            }
            if (new Date(start).getTime() > new Date(end).getTime()) {
                return setmessageBox({ message: "Start date can't be after end date", type: 'warning' })
            }
            if (start && end && event_date) {
                setloading(true)
                // newEvent.description = 'Session with a mentee'
                newEvent.description = title
                newEvent.summary = title || 'Mentorship Session'
                newEvent.start = {
                    'dateTime': new Date(start).toISOString(),
                    'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
                }
                newEvent.end = {
                    'dateTime': new Date(end).toISOString(),
                    'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
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
                        Authorization: `Bearer ${session.provider_token}`,
                    },
                    params: {
                        conferenceDataVersion: 1,
                    },
                })
                // console.log("handleGoogleCalendarEvent", response)
                if (response && response.status === 200) {
                    await handleAddEvent(newEvent)
                    // setmessageBox({ message: 'Event added', type: 'success' })
                    // console.log('Meeting link', response.data.hangoutLink)
                    // console.log('Meeting description', response.data.description)
                    // setloading(false)
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
                clearMessage()
                return alert('Some input are empty')
            }
        } catch (error) {
            setmessageBox({ message: error.message, type: 'warning' })
            setloading(false)
        }
    }

    const handleSelectEvent = (event) => {
        const { title, end, start } = event
        alert(title)
    }


    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const { error } = await supaBaseClient.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    scopes: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events"
                }
            })
            if (error) {
                console.error('Auht error:', error);
                setmessageBox({ message: error.message, type: 'warning' })
            }
        } catch (error) {
            console.error('Login failed:', error);
            setmessageBox({ message: error.message, type: 'error' })
        }
    };

    const handleSignOut = async (event) => {
        event.preventDefault()
        await supaBaseClient.auth.signOut()
    };

    const handleLoginError = () => {
        console.log('Login Failed');
    };

    if (isLoading) {
        return <></>
    }
    return (
        <>
            {isLoading && eventloading ? (
                <Spinner />
            ) : (
                // <div className="flex flex-col items-center justify-center bg-[#e3e3e3] py-10 px-10">
                <div className="flex flex-col items-start justify-center pt-4 px-10">
                    <CalendarTabs setValue={setValue} value={value} handleChange={handleChange} />
                    {messageBox && messageBox.message && (
                        <MessageAlert
                            message={messageBox.message}
                            type={messageBox.type}
                            clearMessage={clearMessage}
                        />
                    )}

                    {/* Action Buttons Container */}
                    <div className="flex flex-col items-start justify-start w-full max-w-lg space-y-2 mb-4 pt-4">
                        {session && session.user ? (
                            value === 0 && <>
                                <ButtonOutline
                                    onClick={handleSelectSlot}
                                    className={`flex items-center justify-center rounded-full bg-sky-600 text-white text-lg font-bold transition-all duration-300 ease-in-out ${loading ? "cursor-not-allowed opacity-70" : "hover:bg-sky-700"}`}
                                    disabled={loading}
                                >
                                    <BsCalendarEvent className='mr-2 text- text-500' />
                                    {loading ? <Loader loader_color="#F89878" /> : "Create Event"}
                                </ButtonOutline>
                            </>

                        ) : (
                            <ButtonOutline
                                onClick={handleLogin}
                                className={`h-12 flex items-center justify-center rounded-full bg-sky-600 text-white text-lg font-bold transition-all duration-300 ease-in-out ${loading ? "cursor-not-allowed opacity-70" : "hover:bg-sky-700"}`}
                                disabled={loading}
                            >
                                {loading ? <Loader loader_color="#F89878" /> : "Link Your Calendar"}
                            </ButtonOutline>
                        )}
                    </div>


                    {/* Event Cards */}
                    {value === 0 && <div className="mt-1 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {myEvents && myEvents.length > 0 ? (
                            myEvents.map((event, index) => (
                                <>
                                
                                <EventCard key={index} event={event} onEventDelete={() => selectedDelete(index)} />
                                </>
                            ))
                        ) : (
                            <div className="bg-gray-100 shadow-md rounded-lg p-6 text-center">
                                <h2 className="text-2xl font-bold text-gray-700 mb-2">No Events Available</h2>
                                <p className="text-gray-500">You have no scheduled mentorship sessions.</p>
                            </div>
                        )}
                    </div>}

                    {/* Modal for Scheduling */}
                    {value === 0 ? <EventModal handleSubmit={handleSubmit} handleClose={handleClose} open={open} messageBox={messageBox} clearMessage={clearMessage} handleAddEvent={handleAddEvent} loading={loading} errors={errors} message={message} register={register} /> :
                        <ScheduleModal clearMessage={clearMessage} setloading={setloading} loading={loading} errors={errors} message={message} />}
                </div>
            )}
        </>





    );
}
export default MentorSchedule