import React, { Fragment } from 'react';
import { Box, InputLabel, Input, Modal } from '@mui/material';
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

export default function EventModal(props) {
    const { handleSubmit, handleClose, open, messageBox, clearMessage, handleAddEvent, loading, errors, message, register } = props
    return (
        <Fragment>
            {open === true && <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {messageBox && messageBox.message && (
                        <MessageAlert
                            message={messageBox.message}
                            type={messageBox.type}
                            clearMessage={clearMessage}
                        />
                    )}
                    <FormView onSubmit={handleSubmit(handleAddEvent)}>
                        <InputView>
                            <InputFormControl variant="standard">
                                <InputLabel htmlFor="component-title">Event Name</InputLabel>
                                <Input
                                    id="component-title"
                                    placeholder=""
                                    {...register("title", { required: true })}
                                    readOnly={loading}
                                    type="text"
                                />
                                {errors.title && (
                                    <FormHelperSPan id="component-error-text">
                                        {"Event name field is required"}
                                    </FormHelperSPan>
                                )}
                            </InputFormControl>
                        </InputView>
                        <InputView>
                            <InputFormControl variant="standard">
                                <InputLabel htmlFor="component-duration">Event Duration</InputLabel>
                                <Input
                                    id="component-duration"
                                    placeholder=""
                                    {...register("duration", { required: true })}
                                    readOnly={loading}
                                    type="number"
                                />
                                {errors.duration && (
                                    <FormHelperSPan id="component-error-text">
                                        {"Event duration field is required"}
                                    </FormHelperSPan>
                                )}
                            </InputFormControl>
                        </InputView>
                        <InputView>
                            <InputFormControl variant="standard">
                                <InputLabel htmlFor="component-simple">Session Date</InputLabel>
                                <Input
                                    id="component-simple1"
                                    placeholder=""
                                    {...register("event_date", { required: true })}
                                    readOnly={loading}
                                    type="date"
                                />
                                {errors.event_date && (
                                    <FormHelperSPan id="component-error-text">
                                        {"Event date field is required"}
                                    </FormHelperSPan>
                                )}
                            </InputFormControl>
                        </InputView>
                        <InputView>
                            <InputFormControl variant="standard">
                                <InputLabel htmlFor="component-simple">Start Time</InputLabel>
                                <Input
                                    id="component-simple1"
                                    placeholder="Start time"
                                    min={new Date()}
                                    {...register("start", { required: true })}
                                    readOnly={loading}
                                    type="time"
                                />
                                {errors.start && (
                                    <FormHelperSPan id="component-error-text">
                                        {"Start time field is required"}
                                    </FormHelperSPan>
                                )}
                            </InputFormControl>
                        </InputView>
                        <InputView>
                            <InputFormControl variant="standard">
                                <InputLabel htmlFor="component-simple">End Time</InputLabel>
                                <Input
                                    id="component-simple1"
                                    placeholder="End Date"
                                    min={new Date()}
                                    {...register("end", { required: true })}
                                    readOnly={loading}
                                    type="time"
                                />
                                {errors.end && (
                                    <FormHelperSPan id="component-error-text">
                                        {"End time field is required"}
                                    </FormHelperSPan>
                                )}
                            </InputFormControl>
                        </InputView>
                        <InputView>
                            <div className="flex flex-col mt-5">
                                <ButtonOutline
                                    className={`inline-flex h-14 w-full items-center justify-center whitespace-nowrap rounded-2xl bg-sky-600 text-white text-xl font-bold transition-all duration-300 ease-in-out ${loading ? "cursor-not-allowed opacity-70" : "hover:bg-sky-700"}`}
                                    disabled={loading}
                                >
                                    {loading ? <Loader loader_color="#F89878" /> : "Create Schedule"}
                                </ButtonOutline>
                                {message && (
                                    <span className={`text-xs mt-3 ${success === false ? "text-red-500" : "text-cyan-500"}`}>
                                        {message}
                                    </span>
                                )}
                            </div>
                        </InputView>
                    </FormView>
                </Box>
            </Modal>}
        </Fragment>
    )
}
