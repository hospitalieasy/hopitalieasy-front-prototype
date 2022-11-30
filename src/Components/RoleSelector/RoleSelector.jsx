import { CustomButton, LeftSide, RightSide, RoleSelectorBase } from "./RoleSelector.style";

import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import React from "react";

const RoleSelector = () => {
    return (
        <RoleSelectorBase>
            <LeftSide>
                <CustomButton component={Link} to={'/patient-login'} variant="outlined" size="large">Patient
                </CustomButton>
            </LeftSide>
            <RightSide>
                <CustomButton component={Link} to={'/doctor-login'} variant="outlined" size="large">Doctor</CustomButton>
            </RightSide>
        </RoleSelectorBase>
    );
}

export default RoleSelector;