import { DefaultBoxBase } from "./DefaultBox.style";

const DefaultBox = (props) => {
    const { children, width, height, background, margin, display } = props;
    return (
        <DefaultBoxBase display={display} margin={margin} width={width} height={height} background={background}>
            {children}
        </DefaultBoxBase>
    );
}

export default DefaultBox;