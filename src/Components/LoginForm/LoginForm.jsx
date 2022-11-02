import { FormWrapper, LoginFormBase } from "./LoginForm.style"

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { TextField } from "@mui/material";

const LoginForm = () => {
    return (
        <LoginFormBase>
            <FormWrapper>
                <TextField id="outlined-basic" label="e-mail" variant="standard" />
                <TextField id="outlined-password-input" label="password" type={"password"} autoComplete={"current-password"} variant="standard" />
                <Button style={{ backgroundColor: "black" }} component={Link} to={'/patient-screen'} variant="contained">Login</Button>
            </FormWrapper>
        </LoginFormBase>
    );
}

export default LoginForm;