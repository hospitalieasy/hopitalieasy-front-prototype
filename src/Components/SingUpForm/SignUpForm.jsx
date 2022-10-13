import { FormWrapper, SingUpFormBase } from "./SignUpForm.style"

import { Button } from "@mui/material";
import React from "react";
import { TextField } from "@mui/material";

const SignUpForm = () => {
    return (
        <SingUpFormBase>
            <FormWrapper>
                <TextField id="outlined-basic" label="e-mail" variant="outlined" />
                <TextField id="outlined-password-input" label="password" type={"password"} autoComplete={"current-password"} />
                <Button variant="contained" color="success">Sign Up</Button>
            </FormWrapper>
        </SingUpFormBase>
    );
}

export default SignUpForm;