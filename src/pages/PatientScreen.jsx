import { BoxWrapper, DefaultLayout } from "./styles/PatientScreen.style";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import OptionBox from "../Components/OptionBox/OptionBox";
import React from "react";
import SendIcon from '@mui/icons-material/Send';

const PatientScreen = () => {
    return (
        <DefaultLayout>
            <BoxWrapper>
                <OptionBox title={"Appointment"} />
                <OptionBox title={"My Analysis"} />
                <OptionBox title={"My Profile"} />
                <OptionBox title={"Empty"} />
            </BoxWrapper>
            <Button component={Link} to={'/'} variant="contained" startIcon={<SendIcon />}>Back Home</Button>
        </DefaultLayout>
    );
}

export default PatientScreen;