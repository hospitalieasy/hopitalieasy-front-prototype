import styled from "styled-components";

export const AppointmentDetailBase = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.div`
    height: 100%;
    width: 100%;
    font-size: 22px;
    margin-bottom: 32px;
    text-align: center;
    letter-spacing: 1px;
    font-family: 'Roboto Condensed', sans-serif;

    @media screen and (max-width: 585px) {
        font-size: 20px;
    }
`;

export const ContentWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    @media screen and (max-width: 585px) {
        flex-direction: column;
    }
`;

export const LeftSide = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-right: 32px;
    border-right: 1px solid #c2c1c1;
    
    @media screen and (max-width: 585px) {
        border-right: none;
        padding: 0px;
    }
`;

export const RoleTitle = styled.div`
    height: 100%;
    width: 100%;
    font-size: 18px;
    margin-bottom: 24px;
    text-align: center;
    letter-spacing: 1px;
    font-family: 'Roboto Condensed', sans-serif;

    @media screen and (max-width: 585px) {
        font-size: 16px;
    }
`;

export const RoleName = styled.div`
    text-align: center;
    margin-bottom: 12px;
    letter-spacing: 1px;
    font-family: 'Roboto Condensed', sans-serif;
`;

export const UserImage = styled.div`
    width: 100px;
    background: #cdc3c3;
    border-radius: 10px;
    margin-bottom: 8px;
`;

export const RightSide = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 32px;
    margin-top: 16px;

    @media screen and (max-width: 585px) {
        margin-left: 0px;
        padding: 16px 0px;
    }
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    margin-bottom: 12px;
    align-items: center;
`;

export const Label = styled.div`
    margin-left: 12px;
    font-family: 'Roboto Condensed', sans-serif;
   letter-spacing: 1px;
`;

export const Time = styled.div`
   margin-left: 12px;
   font-family: 'Roboto Condensed', sans-serif;
   letter-spacing: 1px;
`;

export const Date = styled.div`
    margin-left: 4px;
    font-family: 'Roboto Condensed', sans-serif;
   letter-spacing: 1px;
`;