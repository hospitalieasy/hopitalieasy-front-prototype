import { ContentWrapper, TestResultBase } from "../Styles/TestResult.style";

import DefaultBox from "..//..//..//Components/DefaultBox/DefaultBox"
import Loading from "..//..//..//Utilities/Components/Loading/Loading"

const Appointment = () => {
    ;
    return (
        <TestResultBase>
            <ContentWrapper>
                <DefaultBox width="50%" height="50%" border="3px #a768ff solid">
                    <Loading />
                </DefaultBox>
            </ContentWrapper>
        </TestResultBase>
    );
}

export default Appointment;