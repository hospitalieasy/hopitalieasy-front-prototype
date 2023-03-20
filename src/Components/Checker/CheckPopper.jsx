import * as React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';

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
    } =
        props;

    const handleClose = () => {
        setCheckDecider(false);
    }

    const cancelAppointment = () => {
        //cancel appointment with api
        //loading
        setCheckDecider(false);
        setDetail(false);
    }

    const chooseHour = () => {
        //choose hour with api
        //loading
        setCheckDecider(false);
        setSchedule(false);
    }

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
                {schedule && (<Button onClick={chooseHour}>Choose</Button>)}
                <Button onClick={handleClose}>CLOSE</Button>
            </DialogActions>
        </Dialog>
    );
}