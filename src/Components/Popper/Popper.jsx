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
    } = props;

    const [popDecider, setPopDecider] = React.useState("");

    const handleClose = () => {
        if (popDecider === "detail") {
            setDetail(false);
        } else {
            setSchedule(false);
        }
    };

    React.useEffect(() => {
        if (detail) {
            setPopDecider("detail")
        }

        if (schedule) {
            setPopDecider("schedule")
        }
    }, [detail, schedule])

    return (
        <Dialog
            open={(popDecider === "detail" && detail) || (popDecider === "schedule" && schedule)}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogContent>
                {popDecider === "detail" && (<AppointmentDetail role={role} />)}
                {popDecider === "schedule" && (<DoctorSchedule />)}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>CLOSE</Button>
            </DialogActions>
        </Dialog>
    );
}