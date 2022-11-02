import DefaultBox from "../../Components/DefaultBox/DefaultBox";
import DefaultLayoutFirst from "../../Components/DefaultLayoutFirst/DefaultLayoutFirst";
import { PatientScreenBase } from "../pageStyles/PatientScreen.style";
import React from "react";

const PatientScreen = () => {
    return (
        <DefaultLayoutFirst>
            <PatientScreenBase>
                <DefaultBox>
                </DefaultBox>
            </PatientScreenBase>
        </DefaultLayoutFirst>
    );
}

export default PatientScreen;