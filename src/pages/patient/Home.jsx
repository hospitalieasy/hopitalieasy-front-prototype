import { ContentWrapper, HomeBase, Section } from "./styles/Home.style";

import DefaultBox from "../../Components/DefaultBox/DefaultBox"

const Home = () => {
    return (
        <HomeBase>
            <ContentWrapper>

                <Section width={"95%"} height={"15%"}>
                    <DefaultBox width={"100%"} height={"100%"} background={"#1e1c36"}>

                    </DefaultBox>
                </Section>

                <Section width={"95%"} height={"60%"}>
                    <DefaultBox width={"45%"} height={"100%"} background={"#1e1c36"}>

                    </DefaultBox>
                    <DefaultBox width={"25%"} height={"70%"} background={"#1e1c36"}>

                    </DefaultBox>
                    <DefaultBox width={"25%"} height={"70%"} background={"#1e1c36"}>

                    </DefaultBox>
                </Section>

                <Section width={"95%"} height={"35%"}>
                    <DefaultBox width={"20%"} height={"80%"} background={"#1e1c36"}>

                    </DefaultBox>

                    <DefaultBox width={"30%"} height={"100%"} background={"#1e1c36"}>

                    </DefaultBox>

                    <DefaultBox width={"30%"} height={"100%"} background={"#1e1c36"}>

                    </DefaultBox>
                </Section>

            </ContentWrapper>
        </HomeBase>
    );
}

export default Home;