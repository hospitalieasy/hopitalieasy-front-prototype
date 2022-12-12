import { Button, TextField } from "@mui/material";
import { LoginFormBase, Title } from "./LoginForm.style"
import React, { useEffect } from "react";

import SnackBar from "../SnackBar/SnackBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = (props) => {
    const { currentUser, setCurrentUser, setEmail, setPassword, email, password, title, width, height, padding, text, fontSize } = props;

    const [apiMail, setApiMail] = useState("");
    const [apiPassword, setApiPassword] = useState("");
    const [loginNotification, setLoginNotification] = useState();

    const navigate = useNavigate();


    const response = [
        {
            id: 1,
            Email: "altar@hotmail.com",
            Password: "123",
            Name: "Altar",
            Surname: "Ulaş",
            BirthDay: "04/07/2000",
            Phone: "0505-505-505",
        },
        {
            id: 2,
            Email: "beste@hotmail.com",
            Password: "1234",
            Name: "Beste",
            Surname: "Sakar",
            BirthDay: "02/02/1999",
            Phone: "0502-502-502",
        },
        {
            id: 3,
            Email: "ege@hotmail.com",
            Password: "12345",
        },
        {
            id: 4,
            Email: "test@hotmail.com",
            Password: "asd123",
        },
    ];

    let index = 0;

    const getData = async (e) => {
        e.preventDefault();

        /* const response = await axios.get(
            `https://hospitaleasyapi.azurewebsites.net/api/Patient`
        ); */

        if (!((email == "") || (password == ""))) {
            while (index < response.length) {
                if ((response[index].Email == email) && (response[index].Password == password)) {
                    setLoginNotification(true);
                    setApiMail(response[index].Email)
                    setApiPassword(response[index].Password)
                    setTimeout(() => {
                        setCurrentUser(true)
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
        if (!currentUser) {
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
                    if ((response[index].Email == email)) {
                        setLoginNotification(true);
                    }
                }
                index++;
            }

        } else {
            setLoginNotification(false);
        }

    }, [email, password, currentUser])

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