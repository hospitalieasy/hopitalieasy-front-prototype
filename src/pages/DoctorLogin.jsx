import { DefaultLayout, Title } from "./styles/DoctorLogin.style";

import { Button } from "@mui/material";
import DoctorLoginForm from "../Components/DoctorLoginForm/DoctorLoginForm";
import { Link } from "react-router-dom";
import React from "react";
import SendIcon from '@mui/icons-material/Send';

const DoctorLogin = () => {
    return (
        <DefaultLayout>
            <Title><h1 style={{ color: "#fff" }}>Doctor Login Page</h1></Title>
            <DoctorLoginForm />
            <Button component={Link} to={'/'} variant="contained" startIcon={<SendIcon />}>Back Home</Button>
        </DefaultLayout>
    );
}

export default DoctorLogin;