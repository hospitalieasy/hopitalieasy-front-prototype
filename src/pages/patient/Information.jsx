import { ContentWrapper, InformationBase, Section } from "./styles/Information.style";

import DefaultBox from "../../Components/DefaultBox/DefaultBox"

const Information = () => {
    return (
        <InformationBase>
            <ContentWrapper>
                <DefaultBox margin={"0px 0px 30px 0px"} width={"90%"} height={"10%"} background={"#1e1c36"}>

                </DefaultBox>
                <Section>
                    <DefaultBox width={"70%"} height={"100%"} background={"#1e1c36"}>

                    </DefaultBox>
                    <DefaultBox width={"25%"} height={"65%"} background={"#1e1c36"}>

                    </DefaultBox>
                </Section>
            </ContentWrapper>
        </InformationBase>
    );
}

export default Information;