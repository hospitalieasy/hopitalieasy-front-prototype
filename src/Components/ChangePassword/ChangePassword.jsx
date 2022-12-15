import { Button, TextField } from "@mui/material";
import { ChangePasswordBase, Title } from "./ChangePassword.style"

import React from "react";
import axios from "axios";
import { useState } from "react";

// TODO: put method(to index) and clear the inputs, notification

const ChangePassword = (props) => {
    const {
        userIndex,

        title,
        width,
        height,
        padding,
        text,
        fontSize
    } = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <ChangePasswordBase padding={padding} width={width} height={height}>
            <Title fontSize={fontSize}>{title}</Title>

            <TextField id="outlined-basic" label="E-mail" variant="standard" onChange={(e) => setEmail(e.target.value)} />

            <TextField id="outlined-password-input" label={text} type={"password"} autoComplete={"current-password"} variant="standard" onChange={(e) => setPassword(e.target.value)} />

            <Button className="login" variant="contained">
                {/* <SnackBar loginNotification={loginNotification} /> */}
                CHANGE PASSWORD
            </Button>
        </ChangePasswordBase>
    );
}

export default ChangePassword;