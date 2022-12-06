import { CreditWrapper, IconBase, NameLabel } from "./Credit.style.jsx";

import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Credit = (props) => {
    const { title, link } = props;
    return (
        <CreditWrapper>
            <NameLabel>{title}</NameLabel>
            <IconBase><LinkedInIcon fontSize="large" onClick={link} /></IconBase>
        </CreditWrapper>
    )
}

export default Credit;