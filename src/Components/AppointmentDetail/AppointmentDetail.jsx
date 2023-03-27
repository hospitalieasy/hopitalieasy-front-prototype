import { AppointmentDetailBase, Content, ContentWrapper, Date, Label, LeftSide, RightSide, RoleName, RoleTitle, Time, Title, UserImage } from './AppointmentDetail.style'

import BasicRating from '../Rating/Rating'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const AppointmentDetail = (props) => {
    const { role, doctors, filteredAppointments, detail } = props;

    const [appointmentDetail, setAppointmentDetail] = useState({
        name: "",
        rating: "",
        hour: "",
        day: "",
    })

    useEffect(() => {
        const doctor = doctors.find((doctor) => doctor.id === filteredAppointments[detail.index].doctorId);
        const filteredDetails = filteredAppointments[detail.index]

        if (doctor && filteredDetails) {
            setAppointmentDetail({
                name: doctor.name,
                rating: doctor.rate,
                hour: filteredDetails.appHour,
                day: filteredDetails.appDay,
            });
        }
    }, [])

    return (
        <AppointmentDetailBase>
            <Title>Appointment Detail</Title>
            {(role === "patient") ? (
                <ContentWrapper>
                    <LeftSide>
                        <RoleTitle>Doctor</RoleTitle>
                        <UserImage>
                            <img src="https://img.icons8.com/plumpy/100/null/user.png" alt="" />
                        </UserImage>
                        <RoleName>{`Dr. ${appointmentDetail.name}`}</RoleName>
                    </LeftSide>
                    <RightSide>
                        <Content>
                            <span>Rating: </span>
                            <Label>
                                <BasicRating rating={appointmentDetail.rating} />
                            </Label>
                        </Content>
                        <Content>
                            <span>Appointment: </span>
                            <Time>{appointmentDetail.hour}</Time>
                            <span style={{ margin: "0px 12px" }}>|</span>
                            <Date>{appointmentDetail.day}</Date>
                        </Content>
                    </RightSide>
                </ContentWrapper>
            ) : (
                <ContentWrapper>
                    <LeftSide>
                        <RoleTitle>Patient</RoleTitle>
                        <UserImage>
                            <img src="https://img.icons8.com/plumpy/100/null/user.png" alt='' />
                        </UserImage>
                    </LeftSide>
                    <RightSide>
                        <Content>
                            <span>Name: </span>
                            <Label>Jane</Label>
                        </Content>
                        <Content>
                            <span>Surname: </span>
                            <Label>Doe</Label>
                        </Content>
                        <Content>
                            <span>Birth Date: </span>
                            <Label>01/01/2000</Label>
                        </Content>
                        <Content>
                            <span>Phone Number: </span>
                            <Label>5553332211</Label>
                        </Content>
                        <Content>
                            <span>Appointment: </span>
                            <Time>10:00</Time>
                            <span style={{ margin: "0px 12px" }}>|</span>
                            <Date>23/03/2023</Date>
                        </Content>
                    </RightSide>
                </ContentWrapper>
            )}
        </AppointmentDetailBase>
    )
}

export default AppointmentDetail