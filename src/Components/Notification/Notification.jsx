import * as React from 'react';

import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import MailIcon from '@mui/icons-material/Mail';

export default function Notification() {
    return (
        <Box sx={{ color: 'action.active' }}>
            <Badge color="error" variant="dot">
                <MailIcon color='primary' />
            </Badge>
        </Box>
    );
}