import "..//..//Utilities/Style/Button.css"

import * as React from 'react';

import { SnackbarProvider, useSnackbar } from 'notistack';

import styled from 'styled-components';

export const SuccessButton = styled.span`
    width: 100%;
    height: 100%;
`;

export const ErrorButton = styled.span`
    width: 100%;
    height: 100%;
`;

function Success() {
    const { enqueueSnackbar } = useSnackbar();

    const handleClickVariant = (variant) => () => {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar('Signed up is successful', { variant });
    };

    return (
        <React.Fragment>
            <SuccessButton className='success' onClick={handleClickVariant('success')}>SIGN UP</SuccessButton>
        </React.Fragment>
    );
}

function Error() {
    const { enqueueSnackbar } = useSnackbar();

    const handleClickVariant = (variant) => () => {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar('Invalid information', { variant });
    };

    return (
        <React.Fragment>
            <ErrorButton className='error' onClick={handleClickVariant('error')}>SIGN UP</ErrorButton>
        </React.Fragment>
    );
}

export default function SnackBar(props) {
    const { validationNotification } = props;
    return (
        <SnackbarProvider maxSnack={3}>
            {validationNotification ? (<Success />) : (<Error />)}
        </SnackbarProvider>
    );
}