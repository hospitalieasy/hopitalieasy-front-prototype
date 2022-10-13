import { Button } from "@mui/material";
import { DefaultLayout } from "./styles/Error.style";
import { Link } from "react-router-dom";
import React from "react";
import SendIcon from '@mui/icons-material/Send';

const Error = () => {
    return (
        <DefaultLayout>
            <h1 style={{ color: "#fff" }}>404 Page Not Found</h1>
            <Button component={Link} to={'/'} variant="contained" startIcon={<SendIcon />}>Back Home</Button>
        </DefaultLayout>
    );
}

export default Error;