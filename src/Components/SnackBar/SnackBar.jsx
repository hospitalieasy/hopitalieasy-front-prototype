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
        enqueueSnackbar('Account is Correct', { variant });
    };

    return (
        <React.Fragment>
            <SuccessButton className='success' onClick={handleClickVariant('success')}>LOGIN</SuccessButton>
        </React.Fragment>
    );
}

function Error() {
    const { enqueueSnackbar } = useSnackbar();

    const handleClickVariant = (variant) => () => {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar('Account is Incorrect', { variant });
    };

    return (
        <React.Fragment>
            <ErrorButton className='error' onClick={handleClickVariant('error')}>LOGIN</ErrorButton>
        </React.Fragment>
    );
}

export default function SnackBar(props) {
    const { loginNotification } = props;
    return (
        <SnackbarProvider maxSnack={3}>
            {loginNotification ? (<Success />) : (<Error />)}
        </SnackbarProvider>
    );
}