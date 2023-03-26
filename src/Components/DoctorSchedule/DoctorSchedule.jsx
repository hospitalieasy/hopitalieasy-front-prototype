import React from 'react'
import Tabs from "./Tabs";
import styled from "styled-components";

const DoctorSchedule = (props) => {
    const { appointments, setAppointments, schedule } = props;

    const DoctorScheduleBase = styled.div`
        height: 100%;
        width: 100%;
    `;
    return (
        <DoctorScheduleBase>
            <Tabs
                schedule={schedule}
                appointments={appointments}
                setAppointments={setAppointments}
            />
        </DoctorScheduleBase>
    )
}

export default DoctorSchedule