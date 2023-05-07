import styled from "styled-components";

export const OldResultsBase = styled.div`
    height: 100%;
    width: 100%;
    padding: 24px;
`;

export const ContentWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 32px;

    &:first-child {
        margin-top: 0;
    }
`;

export const Date = styled.div`
    height: 20%;
    width: 100%;
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 17px;
`;

export const TestResultImage = styled.img`
    height: 350px;
    width: 400px;
    margin-bottom: 28px;
    border-radius: 5px;
`;

export const Title = styled.div`
    height: 100%;
    width: 100%;
    font-weight: 700;
    margin-bottom: 8px;
`;

export const Text = styled.div`
    height: 100%;
    width: 90%;
    margin-left: 12px;
`;
