import styled from "styled-components";

export const HomeBase = styled.div`
    height: 88%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.div`
    width: 60%;
    height: 20%;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-size: 28px;
    font-family: 'Roboto Condensed', sans-serif;
    letter-spacing: 1px;

    @media screen and (max-width: 585px) {
        font-size: 20px;
    }
`;

export const AppointmentWrapper = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    padding: 24px;
    overflow-y: auto;
    
    @media screen and (max-width: 585px) {
        
    }
`;

export const ContentWrapper = styled.div`
    width: 80%;
    height: 90px;
    display: flex;
    align-items: center;
    background-color: #737baf;
    border-radius: 10px;
    padding: 0px 12px;
    margin: 12px 0px;

    @media screen and (max-width: 656px) {
        width: 100%;
    }
`;

export const InfoWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 585px) {
        flex-direction: column;
        align-items: center;
        margin-right: 20px;
    }
`;

export const PatientName = styled.div`
    width: 100%;
    margin: 0px 12px;
    color: white;
    font-family: 'Roboto Condensed', sans-serif;
    letter-spacing: 1px;
    font-size: 17px;

    @media screen and (max-width: 585px) {
        font-size: 13px;
    }
`;



