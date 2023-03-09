import styled from "styled-components";

export const AppointmentBase = styled.div`
    height: 88%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const MajorSection = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const AppointmentSection = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 862px) {
        flex-wrap: wrap;
    }
`;

export const Box = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: white;
    border-radius: 10px;
    margin: 20px 12px;
`;

export const BoxAvailable = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: white;
    border-radius: 10px;
    margin: 20px 12px;
    padding: 32px;

    @media screen and (max-width: 862px) {
        width: 95%;
    }
`;

export const TitleWrapper = styled.div`
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
    
    @media screen and (max-width: 585px) {
        font-size: 20px;
    }
`;

export const DoctorWrapper = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    margin-top: 32px;
    padding: 20px 0px;
    flex-direction: column;

    @media screen and (max-width: 585px) {
        padding: 0px;
    }
`;

export const ContentWrapper = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #737baf;
    border-radius: 10px;
    padding: 0px 12px;
    margin: 8px 0px;
`;

export const DoctorInfoWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media screen and (max-width: 585px) {
        flex-direction: column;
        align-items: center;
        margin-right: 20px;
    }
`;

export const DoctorName = styled.div`
    text-align: center;
    width: 100%;
    margin: 0px 12px;
    color: white;

    @media screen and (max-width: 585px) {
        font-size: 15px;
    }
`;

export const BoxCurrent = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: white;
    border-radius: 10px;
    margin: 20px 12px;

    @media screen and (max-width: 862px) {
        width: 95%;
    }
`;

