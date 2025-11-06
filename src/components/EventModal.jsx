import React, { Fragment } from 'react';
import { Box, InputLabel, Input, Modal, TextField } from '@mui/material';
import Loader from './loader';
import { FormHelperSPan, FormView, InputFormControl, InputView, ButtonOutline } from '../styled/component';
import MessageAlert from './MessageAlert';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';

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

// const blue = {
//     100: '#DAECFF',
//     200: '#b6daff',
//     400: '#3399FF',
//     500: '#007FFF',
//     600: '#0072E5',
//     900: '#003A75',
// };

// const grey = {
//     50: '#F3F6F9',
//     100: '#E5EAF2',
//     200: '#DAE2ED',
//     300: '#C7D0DD',
//     400: '#B0B8C4',
//     500: '#9DA8B7',
//     600: '#6B7A90',
//     700: '#434D5B',
//     800: '#303740',
//     900: '#1C2025',
// };

// const Textarea = styled(BaseTextareaAutosize)(
//     ({ theme }) => `
//     box-sizing: border-box;
//     width: 320px;
//     font-family: 'IBM Plex Sans', sans-serif;
//     font-size: 0.875rem;
//     font-weight: 400;
//     line-height: 1.5;
//     padding: 8px 12px;
//     border-radius: 8px;
//     color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//     background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
//     border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
//     box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

//     &:hover {
//       border-color: ${blue[400]};
//     }

//     &:focus {
//       border-color: ${blue[400]};
//       box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
//     }

//     // firefox
//     &:focus-visible {
//       outline: 0;
//     }
//   `,
// );

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
                                <TextField
                                    required
                                    id="standard-title"
                                    variant="standard"
                                    placeholder=""
                                    label="Title"
                                    {...register("title", { required: true })}
                                    readOnly={loading}
                                    type="text"
                                // error
                                // helperText={"Event name field is required"}
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
                                {/* <InputLabel htmlFor="component-duration">Event Duration</InputLabel> */}
                                <TextField
                                    id="standard-event-duration"
                                    placeholder=""
                                    label="Event Duration"
                                    {...register("duration", { required: true, valueAsNumber: true, min: 10, max: 60 })}
                                    readOnly={loading}
                                    type="number"
                                    variant="standard"
                                // error
                                // helperText={"Event duration should be between 30 and 60"}
                                />
                                {errors.duration && (
                                    <FormHelperSPan id="component-error-text">
                                        {"Event duration should be between 30 and 60"}
                                    </FormHelperSPan>
                                )}
                            </InputFormControl>
                        </InputView>
                        <InputView>
                            <InputFormControl variant="standard">
                                <TextField
                                    id="standard-description"
                                    variant="standard"
                                    maxRows={5}
                                    label="Description"
                                    placeholder=""
                                    {...register("description", { required: true })}
                                    readOnly={loading}
                                    multiline
                                    rows={4}
                                    type="text" />
                                {errors.description && (
                                    <FormHelperSPan id="component-error-text">
                                        {"Event description field is required"}
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
