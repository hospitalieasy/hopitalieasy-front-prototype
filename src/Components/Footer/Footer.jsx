import { BottomMenu, CreditWrapper, Description, FooterBase, MenuContainer, MenuItem, PatternLayout, Title, TopMenu } from "./Footer.style";

import Credit from "../FooterCredit/Credit";

const Footer = () => {

    const linkAltar = () => {
        window.location.href = "https://www.linkedin.com/in/ismail-altar-ulas/"
    }

    const linkBeste = () => {
        window.location.href = "https://www.linkedin.com/in/beste-sakar-57a429229/"
    }

    const linkEge = () => {
        window.location.href = "https://www.linkedin.com/in/segekaratas/"
    }

    return (
        <FooterBase className="footer">
            <PatternLayout>
                <TopMenu>
                    <MenuContainer>
                        <MenuItem>
                            <Title>Hospitalieasy</Title>
                            <Description>Lorem ipsum dolor sit amet.</Description>
                        </MenuItem>
                        <MenuItem>
                            <Title>About</Title>
                            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, alias.</Description>
                        </MenuItem>
                        <MenuItem>
                            <Title>Contact</Title>
                            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, itaque.</Description>
                        </MenuItem>
                    </MenuContainer>
                </TopMenu>
                <BottomMenu>
                    <CreditWrapper>Created By</CreditWrapper>
                    <Credit title={"İsmail Altar Ulaş"} link={linkAltar} />
                    <Credit title={"Beste Sakar"} link={linkBeste} />
                    <Credit title={"Şinasi Ege Karataş"} link={linkEge} />
                </BottomMenu>
            </PatternLayout>
        </FooterBase>
    );
}

export default Footer;