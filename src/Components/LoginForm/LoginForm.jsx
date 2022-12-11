import { Label, LoginFormBase, Title } from "./LoginForm.style"

import { Button } from "@mui/material";
import React from "react";
import { TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = (props) => {
    const { setCurrentUser, setEmail, setPassword, email, password, title, width, height, padding, buttonLabel, text, fontSize } = props;

    const [apiMail, setApiMail] = useState("");
    const [apiPassword, setApiPassword] = useState("");

    const navigate = useNavigate();

    const getData = async (e) => {
        e.preventDefault();

        /* const response = await axios.get(
            `https://hospitaleasyapi.azurewebsites.net/api/Patient`
        ); */

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
        while (index < response.length) {
            if ((response[index].Email == email) && (response[index].Password == password)) {
                alert("user exist login successful")
                setApiMail(response[index].Email)
                setApiPassword(response[index].Password)
                setCurrentUser(true)
                navigate("/app-screen")
                break;
            }
            if (index === (response.length - 1)) {
                alert("user is not exist please try again")
                break;
            }
            index++;
        }

    }

    return (
        <LoginFormBase padding={padding} width={width} height={height}>
            <Title fontSize={fontSize}>{title}</Title>

            <TextField id="outlined-basic" label="E-mail" variant="standard" onChange={(e) => setEmail(e.target.value)} />

            <TextField id="outlined-password-input" label={text} type={"password"} autoComplete={"current-password"} variant="standard" onChange={(e) => setPassword(e.target.value)} />

            <Button onClick={getData} className="login" variant="contained">
                <Label>{buttonLabel}</Label>
            </Button>
        </LoginFormBase>
    );
}

export default LoginForm;