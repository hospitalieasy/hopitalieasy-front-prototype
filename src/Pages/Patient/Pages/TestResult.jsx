import { ContentWrapper, Date, DoctorName, Icon, ResultItem, ResultItems, TestResultBase, Title, TitleWrapper } from "../Styles/TestResult.style";

import { Button } from "@mui/material";
import DefaultBox from "..//..//..//Components/DefaultBox/DefaultBox"

const TestResult = () => {

    return (
        <TestResultBase>
            <DefaultBox width="95%" height="85%" background="#fff" margin="20px 0px 0px 0px">
                <ContentWrapper>
                    <TitleWrapper>
                        <Title>Test Results</Title>
                        <Icon>
                            <img style={{ marginBottom: "4px" }} src="https://img.icons8.com/emoji/36/null/test-tube-emoji.png" alt="" />
                        </Icon>
                    </TitleWrapper>
                    <ResultItems>
                        <ResultItem>
                            <Date>10/10/2000</Date>
                            <DoctorName>Dr.Adam Smith</DoctorName>
                            <Button className="show-patient-result" variant="contained">Show Result</Button>
                        </ResultItem>
                    </ResultItems>
                </ContentWrapper>
            </DefaultBox>
        </TestResultBase>
    );
}

export default TestResult;