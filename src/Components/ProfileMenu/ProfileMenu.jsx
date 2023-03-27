import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// TODO: add notification when logout clicked

export default function ProfileMenu(props) {
    const {
        setUser,
        userIndex,
        setUserIndex,
        role,
        setRole,
    } = props;

    const [name, setName] = useState("");

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    let END_POINT;
    /* fetching data */
    useEffect(() => {
        if (role === "patient") {
            axios.get(process.env.REACT_APP_PATIENT_URL).then((response) => {
                setName(response.data[userIndex].name);
            }).catch((error) => {
                console.log(error);
            })
        } else {
            axios.get(process.env.REACT_APP_DOCTOR_URL).then((response) => {
                setName(response.data[userIndex].name);
            }).catch((error) => {
                console.log(error);
            })
        }
    }, [])

    const showProfile = () => {
        navigate("/app-screen/profile")
    }

    const logoutHandler = () => {
        setUserIndex(null)
        setUser(false);
        setRole("");

        navigate("/");
    };

    return (
        <>
            <Button
                id="basic-button"
                className='profile'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Avatar sx={{ bgcolor: "#fff", color: "#000" }}>{name.charAt(0)}</Avatar>
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
                <MenuItem onClick={showProfile} >My Profile</MenuItem>
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </Menu>
        </>
    );
}