import { FormWrapper, LoginFormBase } from "./DoctorLoginForm.style"

import { Button } from "@mui/material";
import React from "react";
import { TextField } from "@mui/material";

const DoctorLoginForm = () => {
    return (
        <LoginFormBase>
            <FormWrapper>
                <TextField id="outlined-basic" label="e-mail" variant="outlined" />
                <TextField id="outlined-password-input" label="password" type={"password"} autoComplete={"current-password"} />
                <Button variant="contained" color="success">Login</Button>
            </FormWrapper>
        </LoginFormBase>
    );
}

export default DoctorLoginForm;