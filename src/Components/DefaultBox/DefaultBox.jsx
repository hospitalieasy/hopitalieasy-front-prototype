import { DefaultBoxBase } from "./DefaultBox.style";

const DefaultBox = (props) => {
    const { children } = props;
    return (
        <DefaultBoxBase>
            {children}
        </DefaultBoxBase>
    );
}

export default DefaultBox;