import React from 'react'
import Tabs from "./Tabs";
import styled from "styled-components";

const DoctorSchedule = (props) => {
    const { setNewAppointment, disabledAppointments, schedule } = props;

    const DoctorScheduleBase = styled.div`
        height: 100%;
        width: 100%;
    `;
    return (
        <DoctorScheduleBase>
            <Tabs
                schedule={schedule}
                disabledAppointments={disabledAppointments}
                setNewAppointment={setNewAppointment}
            />
        </DoctorScheduleBase>
    )
}

export default DoctorSchedule