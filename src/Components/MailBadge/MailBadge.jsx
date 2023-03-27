import * as React from 'react';

import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MailIcon from '@mui/icons-material/Mail';
import Slide from '@mui/material/Slide';
import axios from 'axios';
import styled from 'styled-components';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ContentWrapper = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #5672fe;
    border-radius: 10px;
    padding: 32px 12px;
    margin: 8px 0px;
`;

const DoctorName = styled.div`
    text-align: center;
    width: 100%;
    margin: 0px 12px;
    color: white;

    @media screen and (max-width: 585px) {
        font-size: 13px;
    }
`;

const DoctorInfoWrapperCurrent = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 585px) {
        margin-right: 20px;
    }
`;

const Label = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 16px;

    @media screen and (max-width: 585px) {
        font-size: 12px;
    }
`;

const DateWrapper = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 4px 0px;
    color: white;
    margin-right: 6px;
`;

const Day = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 16px;

    @media screen and (max-width: 585px) {
        font-size: 12px;
    }
`;

const Time = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 16px;

    @media screen and (max-width: 585px) {
        font-size: 12px;
    }
`;

export default function MailBadge(props) {
    const { userId } = props;

    const [open, setOpen] = React.useState(false);

    const [doctors, setDoctors] = React.useState([]);
    const [currentAppointments, setCurrentAppointments] = React.useState([]);
    const [filteredAppointments, setFilteredAppointments] = React.useState([]);
    const [numOfAppointments, setNumOfAppointments] = React.useState(null);

    React.useEffect(() => {
        axios.get(process.env.REACT_APP_DOCTOR_URL)
            .then((response) => setDoctors(response.data))
            .catch((error) => console.log(error))

        axios.get(process.env.REACT_APP_APPOINTMENT_URL)
            .then((response) => {
                setCurrentAppointments(response.data)
            })
            .catch((error) => console.log(error))
    }, [])

    React.useEffect(() => {
        if (currentAppointments.length > 0) {
            const filteredAppointments = currentAppointments.filter(
                (appointment) => appointment.patientId === userId && appointment.appStatus
            );
            setFilteredAppointments(filteredAppointments);
            setNumOfAppointments(filteredAppointments.length)
        }
    }, [currentAppointments, userId]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button className='notification' variant="contained" onClick={handleClickOpen}>
                <Badge badgeContent={numOfAppointments} color="warning">
                    <MailIcon color="action" fontSize='small' />
                </Badge>
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Your Current Appointments"}</DialogTitle>
                <DialogContent>

                    {filteredAppointments.map((appointment, index) => (
                        <ContentWrapper key={index}>
                            <DoctorInfoWrapperCurrent>
                                <Label style={{ color: "white" }} key={index}>#{index + 1}</Label>
                                <DateWrapper>
                                    <Day>{appointment.appDay}</Day>
                                    <Time>{appointment.appHour}</Time>
                                </DateWrapper>
                                <DoctorName>
                                    Dr.{
                                        doctors.find(doctor => doctor.id === appointment.doctorId)?.name
                                    }
                                </DoctorName>
                            </DoctorInfoWrapperCurrent>
                        </ContentWrapper>
                    ))}

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}