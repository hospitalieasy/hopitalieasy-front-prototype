import { DefaultLayoutFirstBase } from "./DefaultLayoutFirst.style";

const DefaultLayoutFirst = ({ children }) => {
    return (
        <DefaultLayoutFirstBase>
            {children}
        </DefaultLayoutFirstBase>
    );
}

export default DefaultLayoutFirst;