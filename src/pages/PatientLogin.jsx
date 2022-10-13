import { DefaultLayout, Title } from "./styles/PatientLogin.style";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import PatientLoginForm from "../Components/PatientLoginForm/PatientLoginForm";
import React from "react";
import SendIcon from '@mui/icons-material/Send';

const PatientLogin = () => {
    return (
        <DefaultLayout>
            <Title><h1 style={{ color: "#fff" }}>Patient Login Page</h1></Title>
            <PatientLoginForm />
            <Button component={Link} to={'/'} variant="contained" startIcon={<SendIcon />}>Back Home</Button>
        </DefaultLayout>
    );
}

export default PatientLogin;