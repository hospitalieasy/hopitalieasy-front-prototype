import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Calculator from "../Calculator/Calculator"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// TODO: add notification when log out clicked

export default function ProfileMenu(props) {
    const {
        setUser,
        userIndex,
        setUserIndex,
        role,
    } = props;

    const [name, setName] = useState("");

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    /* fetch data from API */
    useEffect(() => {
        axios.get(
            `http://localhost:3002/users`
        ).then((response) => {
            setName(response.data[userIndex].Name);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    const navigate = useNavigate();
    const showProfile = () => {
        navigate("/app-screen/profile")
    }

    const logoutHandler = () => {
        setUserIndex(null)
        setUser(false);
    };

    const showCalculator = () => {

    }

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
                {role === "patient" && (
                    <MenuItem onClick={showCalculator}>Calculator</MenuItem>
                )}
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </Menu>
        </>
    );
}