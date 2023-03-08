import styled from "styled-components";

export const InformationTabBase = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TitleWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 25px 0px;
`;

export const Title = styled.div`
    width: 100%;
    font-size: 34px;
    margin-right: 24px;

    @media screen and (max-width: 585px) {
        display: none;
    }
`;

export const CurrentInformation = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 24px;
`;

export const SwitchWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 48px;
`;

export const Label = styled.div`
    font-size: 22px;
    margin-top: -5px;
    padding-right: 5px;
    margin-left: 185px;
    font-weight: 500;
`;

export const FormWrapper = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;


export const FormLabel = styled.div`
    font-size: 17px;
    font-weight: 500;
    margin-right: 20px;
    width: 70px;
    @media screen and (max-width: 585px) {
        display: none;
    }
`;

export const ContentWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0px;
`;



export const ButtonWrapper = styled.div`
    display: flex;
    padding: 20px 0px;
`;


