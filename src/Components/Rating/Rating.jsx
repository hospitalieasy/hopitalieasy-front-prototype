import * as React from 'react';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating(props) {
    const { rating } = props;

    const rate = parseInt(rating);
    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Rating
                size='small'
                name="simple-controlled"
                value={rate}
            />
        </Box>
    );
}