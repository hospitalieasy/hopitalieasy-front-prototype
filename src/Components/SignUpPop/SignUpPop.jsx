import "..//..//Utilities/Style/Button.css"

import * as React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import SignUpForm from "..//SingUpForm/SignUpForm";

export default function SignUpPop() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button className='sign' variant="contained" onClick={handleClickOpen}>
                Sign Here
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <SignUpForm />
                <DialogActions>
                    <Button className="sign-close" onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}