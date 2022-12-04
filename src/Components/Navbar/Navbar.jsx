import { Item, ItemContainer, LeftSide, NavbarBase, RightSide } from "./Navbar.style";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {

    const navbarItem = ["Home", "About", "Contact"];
    return (
        <NavbarBase>
            <LeftSide>
                <span style={{ padding: "0px 5px", color: "#333", background: "#fff", borderRadius: "2px" }}>H</span><span style={{ fontSize: "23px" }}>ospitalieasy</span>
            </LeftSide>
            <RightSide>
                <ItemContainer>
                    {navbarItem.map((item, index) => (
                        <Item key={index} item={item}>
                            {navbarItem[index]}
                        </Item>
                    ))}
                    <Item>
                        <Button component={Link} to={'/doctor-login'} variant="contained" size="medium">Doctor</Button>
                    </Item>
                    <Item>
                        <Button component={Link} to={'/patient-login'} variant="contained" color="secondary" size="medium">Patient</Button>
                    </Item>
                </ItemContainer>
            </RightSide>
        </NavbarBase >
    )
}

export default Navbar;