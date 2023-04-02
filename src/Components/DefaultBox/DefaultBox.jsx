import { DefaultBoxBase } from "./DefaultBox.style";

const DefaultBox = (props) => {
    const { children, width, height, background, margin, display, border, padding } = props;
    return (
        <DefaultBoxBase
            display={display}
            margin={margin}
            width={width}
            height={height}
            background={background}
            border={border}
            padding={padding}
        >
            {children}
        </DefaultBoxBase>
    );
}

export default DefaultBox;