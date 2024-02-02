import { Calendar, momentLocalizer } from 'react-big-calendar'
import React, { useState, useLayoutEffect } from 'react';
import moment from "moment";
import { Box, InputLabel, Input, Modal } from '@mui/material';
import { useForm } from "react-hook-form";
import Loader from './loader';
import { FormHelperSPan, FormView, InputFormControl, InputView, ButtonOutline } from '../styled/component';
import MessageAlert from './MessageAlert';

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
    start: new Date(),
    end: new Date(),
}
function Schedule2(props) {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const localizer = momentLocalizer(moment);
    const [myEvents, setEvents] = useState([])
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const [loading, setloading] = useState(false);
    const [message, setmessage] = useState("");

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
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

    const [messageBox, setmessageBox] = useState({
        message: '',
        type: 'error'
    })

    useLayoutEffect(() => {
        setEvents(events)
    }, [])

    async function clearMessage() {
        setmessageBox({ ...messageBox, message: '' })
    }

    const components = {
        event: (props) => {
            const eventType = props?.event?.data?.type;
            switch (eventType) {
                case "Reg":
                    return (
                        <div style={{ color: "white", display: 'flex', padding: '.5rem', justifyContent: 'flex-start', alignItems: 'center', height: "100%" }}>
                            {props.title}
                        </div>
                    );
                case "App":
                    return (
                        <>
                            <div
                                style={{ color: "white", padding: '.5rem', height: "100%", display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}
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

    const handleSelectSlot = ({ start, end }) => {
        handleOpen()
    };

    const handleAddEvent = (data) => {
        try {
            const { title, start, end } = data
            if (title && start && end) {
                setloading(true)
                const newEvent = {
                    id: myEvents.length + 1,
                    title: title,
                    start: new Date(start),
                    end: new Date(end),
                    mentee: [],
                    data: {
                        type: "",
                    },
                }
                const updatedEvents = [...myEvents, newEvent];
                setTimeout(() => {
                    setloading(false)
                }, 1200);
                setmessageBox({ message: 'Event added', type: 'success' })
                setTimeout(() => {
                    handleClose()
                    reset(defaultState);
                }, 2000);
                return setEvents(updatedEvents);
            }
            else {
                setTimeout(() => {
                    setloading(false)
                }, 1200);
                clearMessage()
                return alert('Some input are empty')
            }
        } catch (error) {
            setmessageBox({ message: error.message, type: 'warning' })
            setTimeout(() => {
                setloading(false)
            }, 1200);
        }
        finally {
            setTimeout(() => {
                clearMessage()
            }, 2000);
        }
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
                // components={components}
                selectable
                popup
                onSelectSlot={handleSelectSlot}
                onSelectEvent={handleSelectEvent}
            />

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {messageBox && messageBox.message && <MessageAlert message={messageBox.message} type={messageBox.type} clearMessage={clearMessage} />}
                    <FormView onSubmit={handleSubmit(handleAddEvent)}>
                        <InputView className="mb-[10rem]" style={{
                            marginBottom: '1rem',
                            marginTop: '1rem'
                        }}>
                            <InputFormControl variant="standard">
                                <InputLabel htmlFor="component-simple">Event Title</InputLabel>
                                <Input id="component-simple" placeholder='Event Title'  {...register("title", { required: true })} readOnly={loading ? true : false} />
                                {errors.title && (<FormHelperSPan id="component-error-text">{"Event title field is required"}</FormHelperSPan>)}
                            </InputFormControl>
                        </InputView>
                        <InputView>
                            <InputFormControl variant="standard">
                                <InputLabel htmlFor="component-simple">Start Date</InputLabel>
                                <Input id="component-simple1" placeholder=''  {...register("start", { required: true })} readOnly={loading ? true : false} type='datetime-local' />
                                {errors.start && (<FormHelperSPan id="component-error-text">{"Start date field is required"}</FormHelperSPan>)}
                            </InputFormControl>
                        </InputView>
                        <InputView>
                            <InputFormControl variant="standard">
                                <InputLabel htmlFor="component-simple">End Date</InputLabel>
                                <Input id="component-simple1" placeholder='End Date'  {...register("end", { required: true })} readOnly={loading ? true : false} type='datetime-local' />
                                {errors.end && (<FormHelperSPan id="component-error-text">{"End date field is required"}</FormHelperSPan>)}
                            </InputFormControl>
                        </InputView>
                        <InputView>
                            <div className="flex flex-col mt-5">
                                <ButtonOutline
                                    className={`inline-flex h-14 w-full items-center justify-center whitespace-nowrap rounded-2xl  bg-sky-600 py-3.5 text-xl font-bold text-white smd:w-96 ${loading === true ? "cursor-not-allowed" : "cursor-pointer"
                                        }`}
                                    disabled={loading === true ? true : false}
                                >
                                    {loading ? <Loader loader_color={'#F89878'} /> : "Create Event"}
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
        </div>
    );
}
export default Schedule2