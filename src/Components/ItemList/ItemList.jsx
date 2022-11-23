import Item from "../Item/Item";
import ItemArray from "./ItemList.testprops";
import { ItemListBase } from "./ItemList.style";

const ItemList = (props) => {
    const { displayInfo, setFindIndexItem } = props;
    const handleClick = (index) => {
        setFindIndexItem(index);
    };
    return (
        <ItemListBase>
            {ItemArray.map((item, index) => (
                <Item key={index} item={item} displayInfo={displayInfo} >
                    <div onClick={() => handleClick(index)} index={index}>
                        {item.icon}
                    </div>
                </Item>
            ))}
        </ItemListBase>
    );
}

export default ItemList;