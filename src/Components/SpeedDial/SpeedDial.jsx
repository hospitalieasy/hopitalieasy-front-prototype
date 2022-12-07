import * as React from 'react';

import Box from '@mui/material/Box';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeIcon from '@mui/icons-material/Home';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

const actions = [
    { icon: <HomeIcon />, name: 'Home' },
    { icon: <CalendarMonthIcon />, name: 'Appointment' },
    { icon: <DescriptionIcon />, name: 'Test Result' },
];


export default function BasicSpeedDial(props) {
    const { setFindIndexItem, setProfileIndexCloser } = props;

    const handleClick = (index) => {
        setFindIndexItem(index);
        setProfileIndexCloser(false);
    };

    return (
        <Box sx={{ height: 70, transform: 'translateZ(0px)' }}>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                md={{ position: 'relative', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
                direction={"right"}
            >
                {actions.map((item, index) => (
                    <SpeedDialAction
                        onClick={() => handleClick(index)}
                        key={item.name}
                        icon={item.icon}
                        tooltipTitle={item.name}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}