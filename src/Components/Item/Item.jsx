import { ItemBase } from "./Item.style";

const Item = (props) => {
    const { children, displayInfo } = props;
    return (
        <ItemBase onClick={displayInfo}>
            {children}
        </ItemBase>
    );
}

export default Item;