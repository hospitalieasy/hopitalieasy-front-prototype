import { BottomMenu, CreditWrapper, FooterBase, MenuContainer, PatternLayout, TopMenu } from "./Footer.style";

import Credit from "../FooterCredit/Credit";
import FooterMenuItem from "../FooterItem/FooterItem";

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
                        <FooterMenuItem title={"asd"} description={"asd"} />
                        <FooterMenuItem title={"asd"} description={"asd"} />
                        <FooterMenuItem title={"asd"} description={"asd"} />
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