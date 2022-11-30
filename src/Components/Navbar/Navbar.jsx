import { Item, ItemContainer, LeftSide, NavbarBase, RightSide } from "./Navbar.style";

const Navbar = () => {

    const navbarItem = ["Home", "About", "Contact"];
    return (
        <NavbarBase>
            <LeftSide>
                Logo
            </LeftSide>
            <RightSide>
                <ItemContainer>
                    {navbarItem.map((item, index) => (
                        <Item key={index} item={item}>
                            {navbarItem[index]}
                        </Item>
                    ))}
                </ItemContainer>
            </RightSide>
        </NavbarBase>
    )
}

export default Navbar;