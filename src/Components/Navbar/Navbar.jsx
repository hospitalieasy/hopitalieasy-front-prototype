import { ButtonContainer, LeftSide, NavbarBase, RightSide } from "./Navbar.style"

import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    const { setRole, role } = props;

    const patientRoler = () => {
        if (role !== "doctor") {
            setRole("patient")
        }
    }

    const doctorRoler = () => {
        if (role !== "patient") {
            setRole("doctor")
        }
    }
    return (
        <NavbarBase>
            <LeftSide>
                <Link to={"/"}>
                    <img src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/null/external-hospital-hospital-and-healthcare-xnimrodx-lineal-gradient-xnimrodx.png" alt="" />
                </Link>
            </LeftSide>
            <RightSide>
                <ButtonContainer>
                    <Button
                        onClick={patientRoler}
                        sx={{
                            marginRight: "30px"
                        }}
                        component={Link}
                        to={'/patient-login'}
                        variant="outlined"
                        color="secondary"
                        size="medium">
                        Patient
                    </Button>
                    <Button
                        onClick={doctorRoler}
                        component={Link}
                        to={'/doctor-login'}
                        variant="contained"
                        size="medium">
                        Doctor
                    </Button>
                </ButtonContainer>
            </RightSide>
        </NavbarBase >
    )
}

export default Navbar;