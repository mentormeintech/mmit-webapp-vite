import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function UserInlineInput(props) {
    return (
        <React.Fragment>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '80%' } }}
                noValidate
                autoComplete="off"
            >
                <TextField id={props.id} label={props.placeholder} variant="standard"  {...props} />
            </Box>
        </React.Fragment>
    );
}
