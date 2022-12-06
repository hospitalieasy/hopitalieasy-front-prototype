import "..//..//utilities/style/Button.css"

import * as React from 'react';

import { ButtonWrapper, FormWrapper, InformationTabBase, Label, Section, Title } from "./InformationTab.style"

import { Button } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { Link } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { TextField } from "@mui/material";

const InformationTab = (props) => {
    const { title, buttonLabel, address } = props;
    return (
        <InformationTabBase>
            <FormWrapper>
                <Title>{title}</Title>
                <Section>
                    <TextField id="outlined-basic" label="Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Surname" variant="outlined" />
                </Section>

                <Section>
                    <TextField id="outlined-basic" label="Age" variant="outlined" />
                    <TextField id="outlined-basic" label="Tel-no" variant="outlined" />
                </Section>

                <Section>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        label="Address"
                        multiline
                        rows={3}
                        defaultValue=""
                    />
                </Section>
            </FormWrapper>
            <ButtonWrapper>
                <Button className='save' style={{ backgroundColor: "black" }} component={Link} to={address} variant="contained">
                    <Label>{buttonLabel}</Label>
                </Button>
            </ButtonWrapper>
        </InformationTabBase>
    );
}

export default InformationTab;