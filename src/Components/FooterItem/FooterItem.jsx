import { Description, FooterMenuItemBase, MenuItem, Title } from "./FooterItem.style";

const FooterMenuItem = (props) => {
    const { title, description } = props;
    return (
        <FooterMenuItemBase>
            <MenuItem>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </MenuItem>
        </FooterMenuItemBase>
    );
}

export default FooterMenuItem;