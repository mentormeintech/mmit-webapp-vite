import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';




function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function CalendarTabs(props) {
    const { handleChange, value, setValue } = props
    // const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                    <Tab label="Events" />
                    <Tab label="Schedule" />
                </Tabs>
            </Box>
        </Box>
    );
}
