import { DefaultBoxBase } from "./DefaultBox.style";

const DefaultBox = ({ children }) => {
    return (
        <DefaultBoxBase>
            {children}
        </DefaultBoxBase>
    );
}

export default DefaultBox;