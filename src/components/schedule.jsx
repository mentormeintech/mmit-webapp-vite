import { Calendar, momentLocalizer } from 'react-big-calendar'
import React, { useState, useLayoutEffect } from 'react';
import moment from "moment";
import { Box, InputLabel, Input, Modal } from '@mui/material';
import { useForm } from "react-hook-form";
import Loader from './loader';
import { FormHelperSPan, FormView, InputFormControl, InputView, ButtonOutline, ScheduleView } from '../styled/component';
import MessageAlert from './MessageAlert';
import { eventColors } from '../utilities/pageData.util';
import { postRequest, userGetRequest } from '../utilities/apiClient';
import { setToken } from '../utilities/axiosClient';
import { accessToken } from '../utilities/tokenClient';
import Spinner from './Spinner';
import { convertTimeToDate } from '../utilities/util';
import { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';
import axios from 'axios';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    p: 4,
};

const defaultState = {
    title: '',
    event_date: new Date(),
    start: new Date(),
    end: new Date(),
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
    const localizer = momentLocalizer(moment);
    const [myEvents, setEvents] = useState([])
    const [open, setOpen] = useState(false);
    const [bgColor, setbgColor] = useState('#000')
    const [loading, setloading] = useState(false);
    const [eventloading, setEventloading] = useState(false);
    const [message, setmessage] = useState("");

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [messageBox, setmessageBox] = useState({
        message: '',
        type: 'error'
    })

    useLayoutEffect(() => {
        // console.log("session", session)
        // console.log("supaBaseClient", supaBaseClient)
        getMyEvents()
    }, [])

    async function clearMessage() {
        setmessageBox({ ...messageBox, message: '' })
    }


    async function getMyEvents() {
        try {
            await setToken(localStorage.getItem(accessToken))
            setEventloading(true)
            const response = await userGetRequest('event/mentor-events')
            if (response && response.success === true) {
                setEvents(response.data)
                setEventloading(false)
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

    const components = {
        event: (props) => {
            const eventType = props?.event?.data?.type;
            const bg = props?.event?.bg;
            console.log("bg", bg)
            return (
                <ScheduleView className='capitalize ScheduleView' bg={bg}>
                    {props.title.substring(0, 19 - 3) + '...' || 'No Title'}
                </ScheduleView>
            )
        },
    };


    function selectRandomColor() {
        const randomIndex = Math.floor(Math.random() * eventColors.length);
        return eventColors[randomIndex];
    }

    const handleSelectSlot = () => {
        handleOpen()
    };

    const handleAddEvent = async (data) => {
        try {
            setToken(localStorage.getItem(accessToken))
            const { title, bg, event_date } = data
            console.log("event_date", event_date)
            console.log("data", data)
            const start = convertTimeToDate(data.start)
            const end = convertTimeToDate(data.end)
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

    // Refactor this code in such a way that when the google event is done creating update the event table and add the meeting link created created by google to it
    const handleGoogleCalendarEvent = async (data) => {
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
            {isLoading && eventloading ? <Spinner /> :
                <div className="mt-36 py-8 bg-[#f3f4]" style={{ margin: 'auto', display: 'flex', background: '#fff', flexDirection: 'column', justifySelf: 'center', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: '1rem', width: '100%', zIndex: 0 }}>
                    {messageBox && messageBox.message && <MessageAlert message={messageBox.message} type={messageBox.type} clearMessage={clearMessage} />}

                    {session && session.user ? <ButtonOutline
                        onClick={handleSignOut}
                        className={`inline-flex h-14 w-full items-center justify-center whitespace-nowrap rounded-2xl  bg-sky-600 py-3.5 text-xl font-bold text-white smd:w-96 ${loading === true ? "cursor-not-allowed" : "cursor-pointer"
                            }`}
                        disabled={loading === true ? true : false}
                    >
                        {loading ? <Loader loader_color={'#F89878'} /> : "Unlink Your Calendar"}
                    </ButtonOutline> : <ButtonOutline
                        onClick={handleLogin}
                        className={`inline-flex h-14 w-full items-center justify-center whitespace-nowrap rounded-2xl  bg-sky-600 py-3.5 text-xl font-bold text-white smd:w-96 ${loading === true ? "cursor-not-allowed" : "cursor-pointer"
                            }`}
                        disabled={loading === true ? true : false}
                    >
                        {loading ? <Loader loader_color={'#F89878'} /> : "Link Your Calendar"}
                    </ButtonOutline>}
                    {session && session.user && <ButtonOutline
                        onClick={handleSelectSlot}
                        className={`inline-flex h-14 w-full items-center justify-center whitespace-nowrap rounded-2xl  bg-sky-600 py-3.5 text-xl font-bold text-white smd:w-96 ${loading === true ? "cursor-not-allowed" : "cursor-pointer"
                            }`}
                        disabled={loading === true ? true : false}
                    >
                        {loading ? <Loader loader_color={'#F89878'} /> : "Create Event"}
                    </ButtonOutline>}
                    {/* <Calendar
                        {...props}
                        localizer={localizer}
                        events={myEvents}
                        startAccessor="event_date"
                        endAccessor="end"
                        style={{ marginTop: '1rem', marginBottom: '2rem', width: '100%' }}
                        components={components}
                        selectable
                        popup
                        onSelectSlot={handleSelectSlot}
                        onSelectEvent={handleSelectEvent}
                    /> */}
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            {messageBox && messageBox.message && <MessageAlert message={messageBox.message} type={messageBox.type} clearMessage={clearMessage} />}
                            <FormView onSubmit={handleSubmit(handleAddEvent)}>
                                <InputView>
                                    <InputFormControl variant="standard">
                                        <InputLabel htmlFor="component-simple">Session Date</InputLabel>
                                        <Input id="component-simple1" placeholder=''  {...register("event_date", { required: true })} readOnly={loading ? true : false} type='date' />
                                        {errors.event_date && (<FormHelperSPan id="component-error-text">{"Event date field is required"}</FormHelperSPan>)}
                                    </InputFormControl>
                                </InputView>
                                <InputView>
                                    <InputFormControl variant="standard">
                                        <InputLabel htmlFor="component-simple">Start Time</InputLabel>
                                        <Input id="component-simple1" placeholder='' min={new Date()}  {...register("start", { required: true })} readOnly={loading ? true : false} type='time' />
                                        {errors.start && (<FormHelperSPan id="component-error-text">{"Start time field is required"}</FormHelperSPan>)}
                                    </InputFormControl>
                                </InputView>
                                <InputView>
                                    <InputFormControl variant="standard">
                                        <InputLabel htmlFor="component-simple">End Time</InputLabel>
                                        <Input id="component-simple1" placeholder='End Date' min={new Date()}  {...register("end", { required: true })} readOnly={loading ? true : false} type='time' />
                                        {errors.end && (<FormHelperSPan id="component-error-text">{"End time field is required"}</FormHelperSPan>)}
                                    </InputFormControl>
                                </InputView>
                                <InputView>
                                    <div className="flex flex-col mt-5">
                                        <ButtonOutline
                                            className={`inline-flex h-14 w-full items-center justify-center whitespace-nowrap rounded-2xl  bg-sky-600 py-3.5 text-xl font-bold text-white smd:w-96 ${loading === true ? "cursor-not-allowed" : "cursor-pointer"
                                                }`}
                                            disabled={loading === true ? true : false}
                                        >
                                            {loading ? <Loader loader_color={'#F89878'} /> : "Create Schedule"}
                                        </ButtonOutline>
                                        {message && (
                                            <span
                                                className={`text-xs ${success === false ? "text-red-500" : "text-cyan-500"
                                                    } mt-3`}
                                            >
                                                {message}
                                            </span>
                                        )}
                                    </div>
                                </InputView>
                            </FormView>
                        </Box>
                    </Modal>
                </div>}
        </>
    );
}
export default MentorSchedule