import { ContentWrapper, TestResultBase } from "../Styles/TestResult.style";

import Loading from "..//..//..//Utilities/Components/Loading/Loading"

const Appointment = () => {
    ;
    return (
        <TestResultBase>
            <ContentWrapper>
                <h2 style={{ color: "#fff" }}>Test Result</h2>
                <Loading />
            </ContentWrapper>
        </TestResultBase>
    );
}

export default Appointment;