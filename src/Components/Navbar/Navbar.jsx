import "..//..//utilities/style/Button.css"

import { ButtonContainer, ButtonItem, LeftSide, MidSide, NavItemContainer, NavbarBase, RightSide } from "./Navbar.style"

import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <NavbarBase>
            <LeftSide>
                <Link to={"/"}>
                    <img src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/null/external-hospital-hospital-and-healthcare-xnimrodx-lineal-gradient-xnimrodx.png" alt="" />
                </Link>
            </LeftSide>
            <MidSide>
                <NavItemContainer>
                    <Button className="home" component={Link} to={'/'} size="medium">Home</Button>
                    <Button className="about" component={Link} to={'/about'} size="medium">About</Button>
                </NavItemContainer>
            </MidSide>
            <RightSide>
                <ButtonContainer>
                    <ButtonItem>
                        <Button className="patient" component={Link} to={'/patient-login'} variant="outlined" color="secondary" size="medium">Patient</Button>
                    </ButtonItem>
                    <ButtonItem>
                        <Button className="doctor" component={Link} to={'/future-content'} variant="contained" size="medium">Doctor</Button>
                    </ButtonItem>
                </ButtonContainer>
            </RightSide>
        </NavbarBase >
    )
}

export default Navbar;