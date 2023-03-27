import * as React from 'react';

import AppointmentDetail from "..//AppointmentDetail/AppointmentDetail"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DoctorSchedule from '../DoctorSchedule/DoctorSchedule';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
    const {
        role,
        detail,
        setDetail,
        schedule,
        setSchedule,
        setCheckDecider,

        disabledAppointments,
        setNewAppointment,

        doctors,
        filteredAppointments,

        userId,
    } = props;

    const handleClose = () => {
        setSchedule(false)
        setDetail(false);
    };

    const CheckPopper = () => {
        setCheckDecider(true);
    }

    return (
        <Dialog
            open={detail.show || schedule.show}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogContent>
                {detail.show && (
                    <AppointmentDetail
                        role={role}
                        detail={detail}
                        doctors={doctors}
                        filteredAppointments={filteredAppointments}
                    />
                )}

                {schedule.show && (
                    <DoctorSchedule
                        userId={userId}
                        schedule={schedule}
                        disabledAppointments={disabledAppointments}
                        filteredAppointments={filteredAppointments}
                        setNewAppointment={setNewAppointment}
                    />
                )}
            </DialogContent>

            <DialogActions>
                {detail.show && (<Button onClick={CheckPopper}>CANCEL APPOINTMENT</Button>)}
                <Button onClick={handleClose}>CLOSE</Button>
            </DialogActions>
        </Dialog>
    );
}