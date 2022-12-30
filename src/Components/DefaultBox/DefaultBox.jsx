import { DefaultBoxBase } from "./DefaultBox.style";

const DefaultBox = (props) => {
    const { children, width, height, background, margin, display, border } = props;
    return (
        <DefaultBoxBase
            display={display}
            margin={margin}
            width={width}
            height={height}
            background={background}
            border={border}
        >
            {children}
        </DefaultBoxBase>
    );
}

export default DefaultBox;