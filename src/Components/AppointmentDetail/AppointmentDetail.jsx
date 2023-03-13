import { AppointmentDetailBase, ContentWrapper, Date, DateWrapper, DoctorRating, Label, LeftSide, Major, PatientName, RightSide, Time, Title, TitleDoctor, UserImage } from './AppointmentDetail.style'

import BasicRating from '../Rating/Rating'
import React from 'react'

const AppointmentDetail = () => {
    return (
        <AppointmentDetailBase>
            <Title>Appointment Detail</Title>
            <ContentWrapper>
                <LeftSide>
                    <TitleDoctor>Doctor</TitleDoctor>
                    <UserImage>
                        <img src="https://img.icons8.com/plumpy/100/null/user.png" alt='' />
                    </UserImage>
                    <PatientName>Dr.Jane</PatientName>
                </LeftSide>
                <RightSide>
                    <DoctorRating>
                        <span>Rating: </span>
                        <Label><BasicRating /></Label>
                    </DoctorRating>
                    <Major>
                        <span>Major: </span>
                        <Label>Hearth Disease</Label>
                    </Major>
                    <DateWrapper>
                        <span>Appointment: </span>
                        <Time>10:00</Time>
                        <span style={{ margin: "0px 12px" }}>|</span>
                        <Date>23/03/2023</Date>
                    </DateWrapper>
                </RightSide>
            </ContentWrapper>
        </AppointmentDetailBase>
    )
}

export default AppointmentDetail