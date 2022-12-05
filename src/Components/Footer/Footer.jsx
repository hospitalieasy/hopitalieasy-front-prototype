import { BottomMenu, CreditWrapper, Description, FooterBase, Icon, Link, MenuContainer, MenuItem, NameLabel, PatternLayout, Title, TopMenu } from "./Footer.style";

import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
                            <Title>
                                About Us
                            </Title>
                            <Description>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, fugiat!
                            </Description>
                        </MenuItem>

                        <MenuItem>
                            <Title>
                                Lorem, ipsum.
                            </Title>
                            <Link>
                                Lorem ipsum dolor sit amet.
                            </Link>
                        </MenuItem>

                        <MenuItem>
                            <Title>
                                Lorem, ipsum.
                            </Title>
                            <Link>
                                Lorem ipsum dolor sit amet.
                            </Link>
                        </MenuItem>
                    </MenuContainer>
                </TopMenu>
                <BottomMenu>
                    <CreditWrapper>
                        <NameLabel>
                            Created By
                        </NameLabel>
                    </CreditWrapper>

                    <CreditWrapper>
                        <NameLabel>
                            İsmail Altar Ulaş
                        </NameLabel>
                        <Icon>
                            <LinkedInIcon fontSize="large" onClick={linkAltar} />
                        </Icon>
                    </CreditWrapper>

                    <CreditWrapper>
                        <NameLabel>
                            Beste Sakar
                        </NameLabel>
                        <Icon>
                            <LinkedInIcon fontSize="large" onClick={linkBeste} />
                        </Icon>
                    </CreditWrapper>

                    <CreditWrapper>
                        <NameLabel>
                            Şinasi Ege Karataş
                        </NameLabel>
                        <Icon>
                            <LinkedInIcon fontSize="large" onClick={linkEge} />
                        </Icon>
                    </CreditWrapper>
                </BottomMenu>
            </PatternLayout>
        </FooterBase>
    );
}

export default Footer;