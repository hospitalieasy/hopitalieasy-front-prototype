import styled from "styled-components";

export const InformationTabBase = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    overflow-y: auto;
`;

export const Title = styled.div`
    text-align: center;
    font-size: 34px;
    padding: 20px 24px;

    font-family: 'Roboto Condensed', sans-serif;
    letter-spacing: 1px;

    @media screen and (max-width: 585px) {
        display: none;
    }

    @media screen and (max-width: 768px) {
        font-size: 26px;
    }
`;

export const FormWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
`;

export const SwitchWrapper = styled.div`
    width: 100%;    
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormLabel = styled.div`
    font-size: 17px;
    margin-right: 20px;
    width: 70px;

    font-family: 'Roboto Condensed', sans-serif;
    letter-spacing: 1px;
    
    @media screen and (max-width: 500px) {
        display: none;
    }
`;

export const ContentWrapper = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 28px 20px;
`;

export const ButtonWrapper = styled.div`
    width: 350px;
    display: flex;
    justify-content: center;
    margin: 20px 0px;
    padding-bottom: 0px;

    @media screen and (max-width: 1024px) {
        padding-bottom: 20px;
    }
`;


