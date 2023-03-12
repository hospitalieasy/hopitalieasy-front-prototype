import { AppointmentDetailBase, Clock, Date, DateWrapper, DoctorName, DoctorWrapper, Label, Major, PatientName, PatientWrapper, Time, UserImage } from './AppointmentDetail.style'

import BasicRating from '../Rating/Rating'
import React from 'react'

const AppointmentDetail = () => {
    return (
        <AppointmentDetailBase>
            <PatientWrapper>
                <UserImage>
                    <img src="https://img.icons8.com/plumpy/100/null/user.png" alt='' />
                </UserImage>
                <PatientName>Jane</PatientName>
            </PatientWrapper>
            <DoctorWrapper>
                <DoctorName>
                    <span>Doctor Name: </span>
                    <Label>Dr.Gustavo</Label>
                    <span style={{ margin: "2px 0px 0px 12px" }}><BasicRating /></span>
                </DoctorName>
                <Major>
                    <span>Major: </span>
                    <Label>Hearth Disease</Label>
                </Major>
                <DateWrapper>
                    <span>Time: </span>
                    <Time>10:00 |</Time>
                    <Date>23/03/2023</Date>
                </DateWrapper>
            </DoctorWrapper>
        </AppointmentDetailBase>
    )
}

export default AppointmentDetail