import { RoleSelectorBase, SelectWrapper } from "./RoleSelector.style";

import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import React from "react";

const RoleSelector = () => {
    return (
        <RoleSelectorBase>
            <SelectWrapper>
                <Button component={Link} to={'/patient-login'} variant="contained" color="secondary" size="large">Patient
                </Button>
                <Button component={Link} to={'/doctor-login'} variant="contained" size="large">Doctor</Button>
            </SelectWrapper>
        </RoleSelectorBase>
    );
}

export default RoleSelector;