import { Button, TextField } from "@mui/material";
import { LoginFormBase, Title } from "./LoginForm.style"
import React, { useEffect } from "react";

import SnackBar from "../SnackBar/SnackBar";
import axios from "axios";
import { localResponse } from "../../Utilities/LocalData/LocalData.testprops";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = (props) => {
    const {
        user,
        setUser,
        setUserIndex,

        title,
        width,
        height,
        padding,
        text,
        fontSize
    } = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginNotification, setLoginNotification] = useState();


    const navigate = useNavigate();
    let response;
    let index = 0;
    const getData = async (e) => {
        e.preventDefault();

        try {
            response = await axios.get(
                `https://hospitaleasyapi.azurewebsites.net/api/Patient`
            );
        } catch (error) {
            console.log(error.response + "get has a error on login page")
        }

        if (!((email == "") || (password == ""))) {
            while (index < response.length) {
                if ((response[index].Email == email) && (response[index].Password == password)) {
                    setUserIndex(index)
                    setLoginNotification(true);
                    setTimeout(() => {
                        setUser(true)
                        navigate("/app-screen")
                    }, 2000);
                    break;
                }
                if (index === (response.length - 1)) {
                    setLoginNotification(false);
                    break;
                }
                index++;
            }
        } else {
            setLoginNotification(false);
        }

    }

    useEffect(() => {
        if (!user) {
            setLoginNotification(false);
        }
    }, [])

    useEffect(() => {

        if (!((email == "") || (password == ""))) {
            while (index < response.length) {
                if ((response[index].Email == email)) {
                    setLoginNotification(false)
                    if ((response[index].Password == password)) {
                        setLoginNotification(true);
                    }
                }

                if ((response[index].Password == password)) {
                    setLoginNotification(false)
                    if ((response[index].email == email)) {
                        setLoginNotification(true);
                    }
                }
                index++;
            }

        } else {
            setLoginNotification(false);
        }

    }, [email, password])

    return (
        <LoginFormBase padding={padding} width={width} height={height}>
            <Title fontSize={fontSize}>{title}</Title>

            <TextField id="outlined-basic" label="E-mail" variant="standard" onChange={(e) => setEmail(e.target.value)} />

            <TextField id="outlined-password-input" label={text} type={"password"} autoComplete={"current-password"} variant="standard" onChange={(e) => setPassword(e.target.value)} />

            {/* <Button onClick={getData} className="login" variant="contained"> {buttonLabel}</Button> */}
            <Button onClick={getData} className="login" variant="contained">
                <SnackBar loginNotification={loginNotification} />
            </Button>
        </LoginFormBase>
    );
}

export default LoginForm;