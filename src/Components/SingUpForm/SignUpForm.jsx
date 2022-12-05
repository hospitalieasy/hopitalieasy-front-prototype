import { FormWrapper, Label, SingUpFormBase, Title, UserAcceptContent } from "./SignUpForm.style"
import { Switch, TextField } from "@mui/material";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const SignUpForm = ({ label }) => {
    return (
        <SingUpFormBase>
            <FormWrapper>
                <Title>
                    Sign Up
                </Title>
                <TextField id="outlined-basic" label="e-mail" variant="standard" style={{ padding: "10px 0px" }} />
                <TextField id="outlined-password-input" label="password" type={"password"} autoComplete={"current-password"} variant="standard" style={{ padding: "10px 0px" }} />
                <UserAcceptContent style={{ padding: "10px 0px" }}>
                    <Switch {...label} defaultChecked color="warning" />
                    <Label>
                        Accept Terms | <Link component={Link} to={'/future-content'} style={{ textDecoration: "none", color: "inherit" }}>Click for Terms Detail</Link>
                    </Label>
                </UserAcceptContent>
                <Button component={Link} to={'/patient-screen'} variant="contained" color="success" style={{ backgroundColor: "black", margin: "10px 0px" }}>Sign Up</Button>
            </FormWrapper>
        </SingUpFormBase>
    );
}

export default SignUpForm;