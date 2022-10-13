import { FormWrapper, LoginFormBase } from "./PatientLoginForm.style"

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { TextField } from "@mui/material";

const PatientLoginForm = () => {
    return (
        <LoginFormBase>
            <FormWrapper>
                <TextField id="outlined-basic" label="e-mail" variant="outlined" />
                <TextField id="outlined-password-input" label="password" type={"password"} autoComplete={"current-password"} />
                <Button component={Link} to={'/patient-screen'} variant="contained" color="success">Login</Button>
                <Button component={Link} to={'/patient-sign-up'} variant="contained" color="success">Sign Up</Button>
            </FormWrapper>
        </LoginFormBase>
    );
}

export default PatientLoginForm;