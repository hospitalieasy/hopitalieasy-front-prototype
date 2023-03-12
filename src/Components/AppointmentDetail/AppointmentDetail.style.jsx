import styled from "styled-components";

export const AppointmentDetailBase = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 585px) {
        flex-direction: column;
    }
`;

export const PatientWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-right: 32px;
    margin-top: 28px;
    
    @media screen and (max-width: 585px) {
        margin-right: 0;
        margin-bottom: 16px;
    }
`;

export const PatientName = styled.div`
    text-align: center;
    margin-bottom: 12px;
`;

export const UserImage = styled.div`
    width: 100px;
    background: #cdc3c3;
    border-radius: 10px;
    margin-bottom: 8px;
`;

export const DoctorWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 12px;
    margin-top: 16px;

    @media screen and (max-width: 585px) {
        margin-left: 0px;
    }
`;

export const DoctorName = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    margin-bottom: 12px;
    align-items: center;
`;

export const Major = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 12px;
`;

export const DateWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 12px;
`;

export const Label = styled.div`
    margin-left: 12px;
`;

export const Time = styled.div`
   margin-left: 12px;
`;

export const Date = styled.div`
    margin-left: 8px;
`;