import styled from "styled-components";

export const TestResultBase = styled.div`
    height: 88%;
    width: 100%;
    display: flex;
    justify-content: center;
    font-family: 'Roboto Condensed', sans-serif;
`;

export const ContentWrapper = styled.div`
    height: 100%;
    width: 100%;
    padding: 24px;
`;

export const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 12px;
    display: flex;
`;

export const Title = styled.div`
    font-size: 28px;
    margin-right: 24px;
    font-weight: 500;

    @media screen and (max-width: 420px) {
        display: none;
    }

    @media screen and (max-width: 585px) {
        font-size: 20px;
    }
`;

export const Ongoing = styled.div`
    margin-left: 28px;
    display: flex;

    @media screen and (max-width: 585px) {
        flex-direction: column;
    }
`;

export const LabelWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 12px;
    font-size: 17px;
    font-weight: 500;

    @media screen and (max-width: 585px) {
        margin: 4px 0px;
    }
`;


export const Label = styled.div` 

    @media screen and (max-width: 585px) {
        font-size: 14px;
    }
`;

export const Icon = styled.div`
`;

export const ResultItems = styled.div`
    height: 75%;
    width: 100%;
    padding: 8px 12px;
    overflow-y: auto;
`;

export const ResultItem = styled.div`
    height: 68px;
    width: 100%;
    background-color: #5672fe;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    margin: 12px 0px;
`;

export const Date = styled.div`
    width: 100%;
    font-size: 17px;
    font-family: 'Roboto Condensed', sans-serif;
    color: #fff;

    @media screen and (max-width: 585px) {
        font-size: 14px;
        margin-right: 16px;
    }
`;

export const DoctorName = styled.div`
    width: 100%;
    font-size: 17px;
    color: #fff;
    font-family: 'Roboto Condensed', sans-serif;

    @media screen and (max-width: 585px) {
        font-size: 14px;
        margin-right: 16px;
    }
`;

