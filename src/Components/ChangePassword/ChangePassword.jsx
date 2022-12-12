import { Button, TextField } from "@mui/material";
import { ChangePasswordBase, Title } from "./ChangePassword.style"
import React, { useEffect } from "react";

import SnackBar from "../SnackBar/SnackBar";
import { localResponse } from "../../Utilities/LocalData/LocalData.testprops";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ChangePassword = (props) => {
    const {
        password,
        setPassword,
        email,
        setEmail,
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

    const [loginNotification, setLoginNotification] = useState();

    const navigate = useNavigate();
    let index = 0;
    const getData = async (e) => {
        e.preventDefault();

        /* const response = await axios.get(
            `https://hospitaleasyapi.azurewebsites.net/api/Patient`
        ); */

        if (!((email == "") || (password == ""))) {
            while (index < localResponse.length) {
                if ((localResponse[index].email == email) && (localResponse[index].password == password)) {
                    setUserIndex(index)
                    setLoginNotification(true);
                    setTimeout(() => {
                        setUser(true)
                        navigate("/app-screen")
                    }, 2000);
                    break;
                }
                if (index === (localResponse.length - 1)) {
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
            while (index < localResponse.length) {
                if ((localResponse[index].email == email)) {
                    setLoginNotification(false)
                    if ((localResponse[index].password == password)) {
                        setLoginNotification(true);
                    }
                }

                if ((localResponse[index].password == password)) {
                    setLoginNotification(false)
                    if ((localResponse[index].email == email)) {
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
        <ChangePasswordBase padding={padding} width={width} height={height}>
            <Title fontSize={fontSize}>{title}</Title>

            <TextField id="outlined-basic" label="E-mail" variant="standard" onChange={(e) => setEmail(e.target.value)} />

            <TextField id="outlined-password-input" label={text} type={"password"} autoComplete={"current-password"} variant="standard" onChange={(e) => setPassword(e.target.value)} />

            <Button onClick={getData} className="login" variant="contained">
                <SnackBar loginNotification={loginNotification} />
            </Button>
        </ChangePasswordBase>
    );
}

export default ChangePassword;