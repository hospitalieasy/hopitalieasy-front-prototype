import DefaultBox from "../../Components/DefaultBox/DefaultBox";
import DefaultLayout from "..//..//Components//DefaultLayout/DefaultLayout"
import React from "react";
import styled from "styled-components";

export const ErrorBase = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const ContentWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const Error = () => {
    return (
        <DefaultLayout>
            <ErrorBase>
                <ContentWrapper>
                    <DefaultBox width="50%" height="50%" border="3px #a768ff solid">
                        <h1 style={{ fontSize: "45px", color: "#fff", display: "flex", marginTop: "140px", justifyContent: "center" }}>404 Page Is Not Exist</h1>
                    </DefaultBox>
                </ContentWrapper>
            </ErrorBase>
        </DefaultLayout>
    );
}

export default Error;