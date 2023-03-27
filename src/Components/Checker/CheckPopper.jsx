import * as React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
    const {
        checkDecider,
        setCheckDecider,
        detail,
        setDetail,
        schedule,
        setSchedule,
        setShowBar,
        setMessage,
        setLoading,

        setNewAppointment,
        newAppointment,

        filteredAppointments,
    } = props;

    const [appointments, setAppointments] = React.useState([]);

    React.useEffect(() => {
        axios.get(process.env.REACT_APP_APPOINTMENT_URL)
            .then((response) => setAppointments(response.data))
            .catch((error) => console.log(error))
    }, [])

    const chooseAppointment = async () => {
        setLoading(true);
        try {
            const filteredAppointment = appointments.filter(appointment =>
                appointment.doctorId === newAppointment.doctorId &&
                appointment.appDay === newAppointment.day &&
                appointment.appHour === newAppointment.hour
            );

            const goingData = {
                appId: filteredAppointment[0].appId,
                appDay: filteredAppointment[0].appDay,
                appHour: filteredAppointment[0].appHour,
                appStatus: true,
                doctorId: filteredAppointment[0].doctorId,
                doctors: null,
                patientId: newAppointment.patientId,
                patients: null
            }

            const appId = parseInt(filteredAppointment[0].appId);

            await axios.put(`${process.env.REACT_APP_APPOINTMENT_URL}/${appId}`, goingData)
                .then(() => {
                    setMessage({
                        color: "green",
                        text: "Appointment got successfully",
                        icon: "success",
                    })
                    setShowBar(true);
                    setSchedule({ ...schedule, show: false });
                    setCheckDecider(false);

                    setLoading(false);
                })
                .catch(() => {
                    setMessage({
                        color: "red",
                        text: "Appointment is failed",
                        icon: "error",
                    })
                    setShowBar(true);
                    setSchedule({ ...schedule, show: false });
                    setCheckDecider(false);

                    setLoading(false);
                })
        } catch (error) {
            console.log(error)
        }
    };

    const cancelAppointmentHandler = async () => {
        setLoading(true);
        try {
            const filteredAppointment = filteredAppointments[detail.index]

            const goingData = {
                appId: filteredAppointment.appId,
                appDay: filteredAppointment.appDay,
                appHour: filteredAppointment.appHour,
                appStatus: false,
                doctorId: filteredAppointment.doctorId,
                doctors: null,
                patientId: 1,
                patients: null
            }

            const appId = filteredAppointment.appId

            await axios.put(`${process.env.REACT_APP_APPOINTMENT_URL}/${appId}`, goingData)
                .then(() => {
                    setMessage({
                        color: "green",
                        text: "Appointment is deleted successfully",
                        icon: "success",
                    })
                    setShowBar(true);
                    setDetail({ ...detail, show: false });
                    setCheckDecider(false);

                    setLoading(false);
                })
                .catch(() => {
                    setMessage({
                        color: "red",
                        text: "Appointment is not deleted",
                        icon: "error",
                    })
                    setShowBar(true);
                    setDetail({ ...detail, show: false });
                    setCheckDecider(false);

                    setLoading(false);
                })
        } catch (error) {
            console.log(error)
        }
    }

    const handleCloseSchedule = () => {
        setCheckDecider(false);
        setNewAppointment({ ...newAppointment, hour: "", day: "" })
    }

    const handleCloseDetail = () => {
        setCheckDecider(false);
    }

    return (
        <Dialog
            open={checkDecider}
            TransitionComponent={Transition}
            keepMounted
            onClose={schedule.show ? (handleCloseSchedule) : (handleCloseDetail)}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogContent>
                <div>
                    {detail.show && (<span>Are you sure to cancel the appointment?</span>)}
                    {schedule.show && (<span>Are you sure to choose this hour?</span>)}
                </div>
            </DialogContent>
            <DialogActions>
                {detail.show && (<Button onClick={cancelAppointmentHandler}>CANCEL APPOINTMENT</Button>)}
                {schedule.show && (<Button onClick={chooseAppointment}>CHOOSE</Button>)}

                {detail.show && (<Button onClick={handleCloseDetail}>CLOSE</Button>)}
                {schedule.show && (<Button onClick={handleCloseSchedule}>CLOSE</Button>)}
            </DialogActions>
        </Dialog>
    );
}