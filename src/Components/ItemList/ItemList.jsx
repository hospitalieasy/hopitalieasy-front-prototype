import { ItemListBase, ItemWrapper, TextWrapper } from "./ItemList.style";

import Item from "../Item/Item";
import ItemArray from "./ItemList.testprops";

const ItemList = (props) => {
    const { displayInfo, setFindIndexItem, setProfile } = props;
    const handleClick = (index) => {
        setFindIndexItem(index);
        setProfile(false);
    };

    return (
        <ItemListBase>
            {ItemArray.map((item, index) => (
                <Item key={index} item={item} displayInfo={displayInfo} >
                    <div onClick={() => handleClick(index)} index={index}>
                        <ItemWrapper>
                            {item.icon}
                            <TextWrapper>
                                {item.text}
                            </TextWrapper>
                        </ItemWrapper>
                    </div>
                </Item>
            ))}
        </ItemListBase>
    );
}

export default ItemList;