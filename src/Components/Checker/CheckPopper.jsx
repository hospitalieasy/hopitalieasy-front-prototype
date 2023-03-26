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

        newAppointment,
    } = props;

    const [appointments, setAppointments] = React.useState([]);

    React.useEffect(() => {
        axios.get(process.env.REACT_APP_APPOINTMENT_URL)
            .then((response) => setAppointments(response.data))
            .catch((error) => console.log(error))
    }, [])

    const handleClose = () => {
        setCheckDecider(false);
    }

    const cancelAppointment = () => {
        //cancel appointment with api
        //loading
        setCheckDecider(false);
        setDetail(false);
    }

    const chooseAppointment = async () => {
        const filteredAppointment = appointments.filter(appointment =>
            appointment.doctorId === newAppointment.doctorId &&
            appointment.patientId === newAppointment.patientId &&
            appointment.appDay === newAppointment.day &&
            appointment.appHour === newAppointment.hour
        );

        const appId = filteredAppointment.appId;

        const goingData = {
            appStatus: true,
            patientId: newAppointment.patientId
        }

        await axios.put(`${process.env.REACT_APP_APPOINTMENT_URL}/${appId}`, goingData)
            .then(() => {
                // snackbar
            })
            .catch((error) => {
                console.log(error)
            })
    };


    return (
        <Dialog
            open={checkDecider}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogContent>
                <div>
                    {detail && (<span>Are you sure to cancel the appointment?</span>)}
                    {schedule && (<span>Are you sure to choose this hour?</span>)}
                </div>
            </DialogContent>
            <DialogActions>
                {detail && (<Button onClick={cancelAppointment}>CANCEL APPOINTMENT</Button>)}

                {schedule && (<Button onClick={chooseAppointment}>CHOOSE</Button>)}

                <Button onClick={handleClose}>CLOSE</Button>
            </DialogActions>
        </Dialog>
    );
}