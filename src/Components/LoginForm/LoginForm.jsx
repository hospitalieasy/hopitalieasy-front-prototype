import { Label, LoginFormBase, Title } from "./LoginForm.style"

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { TextField } from "@mui/material";

const LoginForm = (props) => {
    const { setMail, setPass, title, address, width, height, padding, buttonLabel, text, fontSize } = props;
    return (
        <LoginFormBase padding={padding} width={width} height={height}>
            <Title fontSize={fontSize}>{title}</Title>
            <TextField id="outlined-basic" label="E-mail" variant="standard" onChange={(e) => setMail(e.target.value)} />
            <TextField id="outlined-password-input" label={text} type={"password"} autoComplete={"current-password"} variant="standard" onChange={(e) => setPass(e.target.value)} />
            <Button className="login" component={Link} to={address} variant="contained">
                <Label>{buttonLabel}</Label>
            </Button>
        </LoginFormBase>
    );
}

export default LoginForm;