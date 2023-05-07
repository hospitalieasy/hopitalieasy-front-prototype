import styled from "styled-components";

export const HomeBase = styled.div`
    height: 85%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 862px) {
        flex-direction: column;
    }
`;

export const CurrentAppointments = styled.div`
    width: 50%;
    height: 85%;
    margin-right: 12px;
    background-color: white;
    border-radius: 10px;
    padding: 12px;
    
    animation:  0.5s ease-out 0s 1 slideInFromBottom;
    @keyframes slideInFromBottom {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
    }

    @media screen and (max-width: 862px) {
        width: 95%;
        height: 45%;
        margin-bottom: 24px;
        margin-right: 0px;
    }
`;

export const OldAppointments = styled.div`
    padding: 12px;
    width: 50%;
    height: 85%;
    margin-left: 12px;
    background-color: white;
    border-radius: 10px;
    
    animation:  0.5s ease-out 0s 1 slideInFromBottom;
    @keyframes slideInFromBottom {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
    }

    @media screen and (max-width: 862px) {
        width: 95%;
        height: 45%;
        margin-left: 0px;
    }
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
        font-size: 17px;
        width: 80%;
    }

    @media screen and (max-width: 656px) and (min-width: 586px) {
        font-size: 21px;
    }
`;

export const AppointmentWrapper = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    padding: 24px;
    overflow-y: auto;

`;

export const ContentWrapper = styled.div`
    width: 100%;
    height: 65px;
    display: flex;
    align-items: center;
    background-color: #5672fe;
    border-radius: 10px;
    padding: 0px 12px;
    margin: 12px 0px;

    @media screen and (max-width: 656px) {
        width: 100%;
        height: 60px;
    }
`;

export const InfoWrapper = styled.div`
    height: 100%;
    width: 60%;
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
        width: 100%;
        font-size: 13px;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 48%;
    @media screen and (max-width: 425px) {
        flex-direction: column;
        height: 80%;
        justify-content: space-between;
    }
`;





