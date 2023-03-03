import { BottomMenu, CreditWrapper, Description, FooterBase, IconBase, Label, MenuContainer, MenuItem, NameLabel, PatternLayout, Title, TopMenu } from "./Footer.style";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useCallback } from "react";

const Footer = () => {
    const openLink = useCallback((url) => () => {
        window.location.href = url;
    }, []);

    return (
        <FooterBase className="footer">
            <PatternLayout>
                <TopMenu>
                    <MenuContainer>
                        <MenuItem>
                            <Title>Hospitalieasy</Title>
                            <Description>
                                Make your life easier with the Hospitalieasy app starting today. Get started right now!
                            </Description>
                        </MenuItem>
                        <MenuItem>
                            <Title>About</Title>
                            <Description>
                                We are the team that developed the Hospitalieasy application as a graduation project at Yaşar University!
                            </Description>
                        </MenuItem>
                        <MenuItem>
                            <Title>Contact</Title>
                            <Description>
                                For all your questions, you can contact us through our secretary.
                            </Description>
                        </MenuItem>
                    </MenuContainer>
                </TopMenu>
                <BottomMenu>
                    <Label>Created By</Label>
                    <CreditWrapper>
                        <NameLabel>{"İsmail Altar Ulaş"}</NameLabel>
                        <IconBase>
                            <LinkedInIcon fontSize="large" onClick={openLink("https://www.linkedin.com/in/ismail-altar-ulas/")} />
                        </IconBase>
                    </CreditWrapper>
                    <CreditWrapper>
                        <NameLabel>{"Beste Sakar"}</NameLabel>
                        <IconBase>
                            <LinkedInIcon fontSize="large" onClick={openLink("https://www.linkedin.com/in/beste-sakar-57a429229/")} />
                        </IconBase>
                    </CreditWrapper>
                    <CreditWrapper>
                        <NameLabel>{"Şinasi Ege Karataş"}</NameLabel>
                        <IconBase>
                            <LinkedInIcon fontSize="large" onClick={openLink("https://www.linkedin.com/in/segekaratas/")} />
                        </IconBase>
                    </CreditWrapper>
                </BottomMenu>
            </PatternLayout>
        </FooterBase>
    );
};

export default Footer;
