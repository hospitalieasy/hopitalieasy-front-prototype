import "..//..//Utilities/Style/Button.css"

import { FormWrapper, Label, SingUpFormBase, Text, Title, UserAcceptContent } from "./SignUpForm.style"
import { Switch, TextField } from "@mui/material";

import BasicDatePicker from "../BasicDatePicker/BasicDatePicker";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import Terms from "../Terms/Terms";

const SignUpForm = ({ label }) => {
    return (
        <SingUpFormBase>
            <FormWrapper>
                <Title>Sign Up</Title>
                <TextField id="outlined-basic" label="Name" variant="standard" style={{ padding: "10px 0px" }} />
                <TextField id="outlined-basic" label="Surname" variant="standard" style={{ padding: "10px 0px" }} />
                <BasicDatePicker />
                <TextField id="outlined-basic" label="E-mail" variant="standard" style={{ padding: "10px 0px" }} />
                <TextField id="outlined-password-input" label="Password" type={"password"} autoComplete={"current-password"} variant="standard" style={{ padding: "10px 0px" }} />
                <TextField id="outlined-basic" label="Tel-no" variant="standard" style={{ padding: "10px 0px" }} />
                <UserAcceptContent style={{ padding: "10px 0px" }}>
                    <Switch {...label} defaultChecked color="warning" />
                    <Label>
                        <Text>Accept Terms</Text>
                        <Terms />
                    </Label>
                </UserAcceptContent>
                <Button className="sign" component={Link} to={'/app-screen'} variant="contained" color="success">Sign Up</Button>
            </FormWrapper>
        </SingUpFormBase>
    );
}

export default SignUpForm;