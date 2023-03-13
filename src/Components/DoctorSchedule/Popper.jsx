import * as React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DoctorSchedule from './DoctorSchedule';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
    const { schedule, setSchedule } = props;

    const handleClose = () => {
        setSchedule(false);
    };

    return (
        <div>
            <Dialog
                open={schedule}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <DoctorSchedule />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>CHOOSE</Button>
                    <Button onClick={handleClose}>CLOSE</Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}