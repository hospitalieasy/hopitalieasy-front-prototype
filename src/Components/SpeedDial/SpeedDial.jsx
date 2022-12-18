import * as React from 'react';

import Box from '@mui/material/Box';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeIcon from '@mui/icons-material/Home';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { useNavigate } from 'react-router-dom';

const actions = [
    { icon: <HomeIcon color='primary' />, name: 'Home' },
    { icon: <CalendarMonthIcon color='primary' />, name: 'Appointment' },
    { icon: <DescriptionIcon color='primary' />, name: 'Test Result' },
];

export default function BasicSpeedDial() {
    const navigate = useNavigate();

    const menuIndexHandler = (index) => {
        if (index === 0) {
            navigate("/app-screen");
        } else if (index === 1) {
            navigate("/app-screen/appointment");
        } else if (index === 2) {
            navigate("/app-screen/test-result");
        }
    }
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
                        key={item.name}
                        icon={item.icon}
                        tooltipTitle={item.name}
                        onClick={() => menuIndexHandler(index)}
                    >
                    </SpeedDialAction>
                ))}
            </SpeedDial>
        </Box>
    );
}