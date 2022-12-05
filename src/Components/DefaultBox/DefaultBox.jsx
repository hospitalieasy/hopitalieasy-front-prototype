import { DefaultBoxBase } from "./DefaultBox.style";

const DefaultBox = (props) => {
    const { children, width, height, background } = props;
    return (
        <DefaultBoxBase width={width} height={height} background={background}>
            {children}
        </DefaultBoxBase>
    );
}

export default DefaultBox;