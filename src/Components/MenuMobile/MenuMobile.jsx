import * as React from 'react';

import Button from '@mui/material/Button';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeIcon from '@mui/icons-material/Home';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function BasicMenu(props) {
    const { role } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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

    const doctorActions = [
        { icon: <HomeIcon color='primary' />, name: 'Home' },
    ]
    const patientActions = [
        { icon: <HomeIcon color='primary' />, name: 'Home' },
        { icon: <CalendarMonthIcon color='primary' />, name: 'Appointment' },
        { icon: <DescriptionIcon color='primary' />, name: 'Test Result' },
    ];

    const Title = styled.div`
        margin-left: 12px;
    `;

    return (
        <div>
            <Button
                sx={{
                    marginTop: "12px"
                }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon sx={{ color: "white" }} />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {role === "patient" && (
                    patientActions.map((item, index) => (
                        <MenuItem
                            key={item.name}
                            icon={item.icon}
                            onClick={() => menuIndexHandler(index)}
                        >
                            {item.icon}
                            <Title>{item.name}</Title>
                        </MenuItem>
                    ))
                )}
                {role === "doctor" && (
                    doctorActions.map((item, index) => (
                        <MenuItem
                            key={item.name}
                            icon={item.icon}
                            onClick={() => menuIndexHandler(index)}
                        >
                            {item.icon}
                            <Title>{item.name}</Title>
                        </MenuItem>
                    ))
                )}
            </Menu>
        </div>
    );
}