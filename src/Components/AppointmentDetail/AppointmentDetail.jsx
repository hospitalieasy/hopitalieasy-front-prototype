import { AppointmentDetailBase, Content, ContentWrapper, Date, Label, LeftSide, RightSide, RoleName, RoleTitle, Time, Title, UserImage } from './AppointmentDetail.style'

import BasicRating from '../Rating/Rating'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const AppointmentDetail = (props) => {
    const { role, doctors, patients, filteredAppointments, detail } = props;

    const [detailForPatient, setDetailForPatient] = useState({
        name: "",
        rating: "",
        hour: "",
        day: "",
    })

    const [detailForDoctor, setDetailForDoctor] = useState({
        name: "",
        surname: "",
        birthDate: "",
        telno: "",
        day: "",
        hour: "",
    })

    useEffect(() => {
        if (doctors) {
            const doctor = doctors.find((doctor) => doctor.id === filteredAppointments[detail.index].doctorId);
            const filteredDetails = filteredAppointments[detail.index]

            if (doctor && filteredDetails) {
                setDetailForPatient({
                    name: doctor.name,
                    rating: doctor.rate,
                    hour: filteredDetails.appHour,
                    day: filteredDetails.appDay,
                });
            }
        }
    }, [])

    useEffect(() => {
        if (patients) {
            const patient = patients.find((patient) => patient.id === filteredAppointments[detail.index].patientId);
            const filteredDetails = filteredAppointments[detail.index]

            if (patient && filteredDetails) {
                setDetailForDoctor({
                    name: patient.name,
                    surname: patient.surname,
                    birthDate: patient.birthDate,
                    telno: patient.telno,
                    day: filteredDetails.appDay,
                    hour: filteredDetails.appHour,
                });
            }
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
                        <RoleName>{`Dr. ${detailForPatient.name}`}</RoleName>
                    </LeftSide>
                    <RightSide>
                        <Content>
                            <span>Rating: </span>
                            <Label>
                                <BasicRating rating={detailForPatient.rating} />
                            </Label>
                        </Content>
                        <Content>
                            <span>Appointment: </span>
                            <Time>{detailForPatient.hour}</Time>
                            <span style={{ margin: "0px 12px" }}>|</span>
                            <Date>{detailForPatient.day}</Date>
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
                            <Label>{detailForDoctor.name}</Label>
                        </Content>
                        <Content>
                            <span>Surname: </span>
                            <Label>{detailForDoctor.surname}</Label>
                        </Content>
                        <Content>
                            <span>Birth Date: </span>
                            <Label>{detailForDoctor.birthDate}</Label>
                        </Content>
                        <Content>
                            <span>Phone Number: </span>
                            <Label>{detailForDoctor.telno}</Label>
                        </Content>
                        <Content>
                            <span>Appointment: </span>
                            <Time>{detailForDoctor.hour}</Time>
                            <span style={{ margin: "0px 12px" }}>|</span>
                            <Date>{detailForDoctor.day}</Date>
                        </Content>
                    </RightSide>
                </ContentWrapper>
            )}
        </AppointmentDetailBase>
    )
}

export default AppointmentDetail