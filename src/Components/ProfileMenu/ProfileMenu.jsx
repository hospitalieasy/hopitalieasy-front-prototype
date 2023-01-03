import * as React from 'react';

import { INITIAL_STATE, apiPostReducer } from '../../Hooks/Reducer/postReducer';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
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
    } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate();
    const showProfile = () => {
        navigate("/app-screen/profile")
    }

    const logoutHandler = () => {
        setUserIndex(null)
        setUser(false);
    };

    /* sets the name  */
    const [apiName, apiSetName] = useState("");

    /* useReducer hook fetching the data states */
    const [state, dispatch] = React.useReducer(apiPostReducer, INITIAL_STATE);

    /* gets the data from server */
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(
                `https://hospitaleasyapi.azurewebsites.net/api/Patient`
            ).then(response => {
                dispatch({ type: "FETCH_SUCCESS", payload: response.data[userIndex] })
                apiSetName(state.apiPost.Name)
            }).catch(error => {
                dispatch({ type: "FETCH_ERROR" })
            })
        }
        getData();
    }, [])

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
                <Avatar sx={{ bgcolor: "#fff", color: "#000" }}>{apiName.charAt(0)}</Avatar>
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