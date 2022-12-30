import DefaultBox from "../../Components/DefaultBox/DefaultBox";
import DefaultLayout from "../../Components/DefaultLayout/DefaultLayout"
import Loading from "..//..//Utilities/Components/Loading/Loading"
import React from "react";
import styled from "styled-components";

export const FutureBase = styled.div`
    height: 100vh;
    width: 100%;
`;


export const ContentWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const Future = () => {
    return (
        <DefaultLayout>
            <FutureBase>
                <ContentWrapper>
                    <DefaultBox width="50%" height="50%" border="3px #a768ff solid">
                        <Loading />
                    </DefaultBox>
                </ContentWrapper>
            </FutureBase>
        </DefaultLayout>
    );
}

export default Future;