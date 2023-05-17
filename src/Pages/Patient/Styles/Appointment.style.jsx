import styled from "styled-components";

export const AppointmentBase = styled.div`
    height: 88%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 40px;
`;

export const Section = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    margin: ${props => props.margin};
    display: flex;
    align-items: center;

    @media screen and (max-width: 862px) {
        flex-wrap: ${props => props.wrap};
    }
`;

export const AvailableAppointment = styled.div`
    width: 50%;
    height: 100%;
    margin-right: 12px;
    padding: 24px 32px;
    background-color: white;
    border-radius: 10px;
    
    animation:  0.5s ease-out 0s 1 slideInFromBottom;
    @keyframes slideInFromBottom {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
    }

    @media screen and (max-width: 862px) {
        width: 100%;
        margin: 0px;
        height: 80%;
    }
`;

export const TitleWrapperOne = styled.div`
    width: 300px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 585px) {
        width: 240px;
    }
`;

export const Title = styled.div`
    width: 100%;
    font-size: 24px;
    letter-spacing: 1px;
    font-family: 'Roboto Condensed', sans-serif;
    
    @media screen and (max-width: 585px) {
        font-size: 20px;
    }
`;

export const AppointmentWrapper = styled.div`
    width: 100%;
    height: 335px;
    display: flex;
    margin-top: 32px;
    flex-direction: column;
    overflow-y: scroll;
    padding-top: 12px;

    @media screen and (max-width: 585px) {
        padding: 0px;
    }
`;

export const AppointmentItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`;

export const ContentWrapper = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #5672fe;
    border-radius: 10px;
    padding: 32px 12px;
    margin: 8px 0px;
`;

export const DoctorInfoWrapperAvailable = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 585px) {
        flex-direction: column;
        align-items: center;
        margin-right: 20px;
    }
`;

export const DoctorNameAvailable = styled.div`
    text-align: center;
    width: 100%;
    margin: 0px 12px;
    color: white;
    letter-spacing: 1px;
    font-family: 'Roboto Condensed', sans-serif;

    @media screen and (max-width: 585px) {
        font-size: 13px;
    }
`;

export const DoctorNameCurrent = styled.div`
    width: 100%;
    margin: 0px 12px;
    color: white;
    letter-spacing: 1px;
    font-family: 'Roboto Condensed', sans-serif;

    @media screen and (max-width: 585px) {
        font-size: 13px;
    }
`;

export const CurrentAppointments = styled.div`
    width: 50%;
    height: 100%;
    margin-left: 12px;
    padding: 24px;
    background-color: white;
    border-radius: 10px;
    overflow-y: auto;
    
    animation:  0.5s ease-out 0s 1 slideInFromBottom;
    @keyframes slideInFromBottom {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
    }

    @media screen and (max-width: 862px) {
        width: 100%;
        margin: 24px 0px;
        height: 80%;
    }
`;


export const TitleWrapperSecond = styled.div`
    width: 285px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 585px) {
        width: 240px;
    }
`;

export const DoctorInfoWrapperCurrent = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 585px) {
        margin-right: 20px;
    }
`;

export const DateWrapper = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 4px 0px;
    color: white;
    margin-right: 6px;

    @media screen and (max-width: 585px) {
        font-size: 10px;
    }
`;

export const Date = styled.div`
    width: 100%;
    height: 100%;
`;


