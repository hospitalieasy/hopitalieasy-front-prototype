import "..//..//Animations-CSS/Button/Button.css"

import { ButtonContainer, ButtonItem, LeftSide, MidSide, NavItem, NavItemContainer, NavbarBase, RightSide } from "./Navbar.style";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <NavbarBase>
            <LeftSide>
                <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/null/external-hospital-medical-kiranshastry-gradient-kiranshastry-1.png" alt="" />
            </LeftSide>
            <MidSide>
                <NavItemContainer>
                    <NavItem>
                        Home
                    </NavItem>
                    <NavItem>
                        About
                    </NavItem>
                    <NavItem>
                        Contact Us
                    </NavItem>
                </NavItemContainer>
            </MidSide>
            <RightSide>
                <ButtonContainer>
                    <ButtonItem>
                        <Button className="patient-button" component={Link} to={'/patient-login'} variant="outlined" color="secondary" size="medium">Patient</Button>
                    </ButtonItem>
                    <ButtonItem>
                        <Button className="doctor-button" component={Link} to={'/doctor-login'} variant="contained" size="medium">Doctor</Button>
                    </ButtonItem>
                </ButtonContainer>
            </RightSide>
        </NavbarBase >
    )
}

export default Navbar;