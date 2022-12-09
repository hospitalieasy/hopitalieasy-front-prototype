import { Label, LoginFormBase, Title } from "./LoginForm.style"

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { TextField } from "@mui/material";

const LoginForm = (props) => {
    const { setMail, setPass, title, address } = props;
    return (
        <LoginFormBase>
            <Title>{title} Login</Title>
            <TextField id="outlined-basic" label="E-mail" variant="standard" onChange={(e) => setMail(e.target.value)} />
            <TextField id="outlined-password-input" label={"Password"} type={"password"} autoComplete={"current-password"} variant="standard" onChange={(e) => setPass(e.target.value)} />
            <Button className="login" component={Link} to={address} variant="contained">
                <Label>Login</Label>
            </Button>
        </LoginFormBase>
    );
}

export default LoginForm;