import { DefaultBoxBase } from "./DefaultBox.style";

const DefaultBox = (props) => {
    const { children, width, height, background, margin } = props;
    return (
        <DefaultBoxBase margin={margin} width={width} height={height} background={background}>
            {children}
        </DefaultBoxBase>
    );
}

export default DefaultBox;