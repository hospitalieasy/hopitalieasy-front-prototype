import { FormWrapper, Label, SingUpFormBase, Text, Title, UserAcceptContent } from "./SignUpForm.style"
import { Switch, TextField } from "@mui/material";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import Terms from "../Terms/Terms";

const SignUpForm = ({ label }) => {
    return (
        <SingUpFormBase>
            <FormWrapper>
                <Title>Sign Up</Title>
                <TextField id="outlined-basic" label="e-mail" variant="standard" style={{ padding: "10px 0px" }} />
                <TextField id="outlined-password-input" label="password" type={"password"} autoComplete={"current-password"} variant="standard" style={{ padding: "10px 0px" }} />
                <UserAcceptContent style={{ padding: "10px 0px" }}>
                    <Switch {...label} defaultChecked color="warning" />
                    <Label>
                        <Text>Accept Terms</Text>
                        <Terms />
                    </Label>
                </UserAcceptContent>
                <Button component={Link} to={'/patient-screen'} variant="contained" color="success" style={{ backgroundColor: "black", margin: "10px 0px" }}>Sign Up</Button>
            </FormWrapper>
        </SingUpFormBase>
    );
}

export default SignUpForm;