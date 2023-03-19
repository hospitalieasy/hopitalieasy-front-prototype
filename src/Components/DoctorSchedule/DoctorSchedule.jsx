import React from 'react'
import Tabs from "./Tabs";
import styled from "styled-components";

const DoctorSchedule = () => {
    const DoctorScheduleBase = styled.div`
        height: 100%;
        width: 100%;
    `;
    return (
        <DoctorScheduleBase>
            <Tabs />
        </DoctorScheduleBase>
    )
}

export default DoctorSchedule