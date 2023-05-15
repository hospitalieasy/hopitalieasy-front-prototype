import { AppointmentDetailBase, Content, ContentWrapper, Date, Label, LeftSide, RightSide, RoleName, RoleTitle, Time, Title, UserImage } from './AppointmentDetail.style'

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
                    surname: doctor.surname,
                    rating: doctor.rate,
                    hour: filteredDetails.appHour,
                    day: filteredDetails.appDay,
                });
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        <RoleName>{`Dr.${detailForPatient.name} ${detailForPatient.surname}`}</RoleName>
                    </LeftSide>
                    <RightSide>
                        <Content>
                            <span style={{ fontWeight: "600", fontFamily: "'Roboto Condensed', sans-serif", letterSpacing: "1px" }}>Appointment: </span>
                            <Time>{detailForPatient.hour}</Time>
                            <span style={{ margin: "0px 12px", fontFamily: "'Roboto Condensed', sans-serif", letterSpacing: "1px" }}>|</span>
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
                            <span style={{ fontFamily: "'Roboto Condensed', sans-serif", letterSpacing: "1px" }}>Name: </span>
                            <Label>{detailForDoctor.name}</Label>
                        </Content>
                        <Content>
                            <span style={{ fontFamily: "'Roboto Condensed', sans-serif", letterSpacing: "1px" }}>Surname: </span>
                            <Label>{detailForDoctor.surname}</Label>
                        </Content>
                        <Content>
                            <span style={{ fontFamily: "'Roboto Condensed', sans-serif", letterSpacing: "1px" }}>Birth Date: </span>
                            <Label>{detailForDoctor.birthDate}</Label>
                        </Content>
                        <Content>
                            <span style={{ fontFamily: "'Roboto Condensed', sans-serif", letterSpacing: "1px" }}>Phone Number: </span>
                            <Label>{detailForDoctor.telno}</Label>
                        </Content>
                        <Content>
                            <span style={{ fontWeight: "600", fontFamily: "'Roboto Condensed', sans-serif", letterSpacing: "1px" }}>Appointment: </span>
                            <Time>{detailForDoctor.hour}</Time>
                            <span style={{ margin: "0px 12px", fontFamily: "'Roboto Condensed', sans-serif", letterSpacing: "1px" }}>|</span>
                            <Date>{detailForDoctor.day}</Date>
                        </Content>
                    </RightSide>
                </ContentWrapper>
            )}
        </AppointmentDetailBase>
    )
}

export default AppointmentDetail