import { FormWrapper, Label, SingUpFormBase, UserAcceptContent } from "./SignUpForm.style"
import { Switch, TextField } from "@mui/material";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const SignUpForm = ({ label }) => {
    return (
        <SingUpFormBase>
            <FormWrapper>
                <TextField id="outlined-basic" label="e-mail" variant="standard" />
                <TextField id="outlined-password-input" label="password" type={"password"} autoComplete={"current-password"} variant="standard" />
                <UserAcceptContent>
                    <Switch {...label} defaultChecked color="warning" />
                    <Label>Accept Terms | <span style={{ cursor: "pointer" }}>Click for Terms Detail</span></Label>
                </UserAcceptContent>
                <Button component={Link} to={'/patient-screen'} variant="contained" color="success" style={{ backgroundColor: "black" }}>Sign Up</Button>
            </FormWrapper>
        </SingUpFormBase>
    );
}

export default SignUpForm;