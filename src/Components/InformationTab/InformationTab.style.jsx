import styled from "styled-components";

export const InformationTabBase = styled.div`
    height: 90%;
    width: 70%;
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

    @media screen and (max-width: 585px) {
        display: none;
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
    font-weight: 500;
    margin-right: 20px;
    width: 70px;
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


