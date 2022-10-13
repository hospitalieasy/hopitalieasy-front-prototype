import { DefaultLayout, Title } from "./styles/PatientSignUp.style";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import SendIcon from '@mui/icons-material/Send';
import SignUpForm from "../Components/SingUpForm/SignUpForm";

const PatientSignUp = () => {
    return (
        <DefaultLayout>
            <Title><h1 style={{ color: "#fff" }}>Patient Sign Page</h1></Title>
            <SignUpForm/>
            <Button component={Link} to={'/'} variant="contained" startIcon={<SendIcon />}>Back Home</Button>
        </DefaultLayout>
    );
}

export default PatientSignUp;