import { FormWrapper, Label, LoginFormBase, Text, Title } from "./LoginForm.style"

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { TextField } from "@mui/material";

const LoginForm = (props) => {
    const { setMail, setPass, title, buttonLabel, address } = props;
    return (
        <LoginFormBase>
            <FormWrapper>
                <Title>
                    {title}
                </Title>
                <TextField id="outlined-basic" label="e-mail" variant="standard" onChange={(e) => setMail(e.target.value)} />
                <TextField id="outlined-password-input" label="password" type={"password"} autoComplete={"current-password"} variant="standard" onChange={(e) => setPass(e.target.value)} />
                <Button style={{ backgroundColor: "black" }} component={Link} to={address} variant="contained">
                    <Label>
                        {buttonLabel}
                    </Label>
                </Button>
            </FormWrapper>
        </LoginFormBase>
    );
}

export default LoginForm;