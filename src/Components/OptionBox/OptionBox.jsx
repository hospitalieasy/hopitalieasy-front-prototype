import { OptionBoxBase, Title } from "./OptionBox.style";

const OptionBox = ({ title }) => {

    return (
        <OptionBoxBase>
            <Title>
                {title}
            </Title>
        </OptionBoxBase>
    );
}

export default OptionBox;