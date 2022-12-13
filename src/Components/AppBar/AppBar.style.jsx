import styled from "styled-components";

export const AppBarBase = styled.div`
    height: 12%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    animation:  0.5s ease-out 0s 1 slideInFromBottom;
    @keyframes slideInFromBottom {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
    }
`;

export const LeftSide = styled.div`
    height: 100%;
    width: 80%;
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;
`;


export const Title = styled.div`
    color: #fff;
    font-size: 30px;
    width: 52%;
    letter-spacing: 4px;
    font-weight: 600;
    font-family: 'Barlow', sans-serif;
`;

export const SpeedDialWrapper = styled.div`
    margin-top: -10px;
    width: 48%;
`;

export const RightSide = styled.div`
    height: 100%;
    display: flex;
    padding: 20px 0px;
    margin-right: 15px;
`;

export const ContentWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
`;

export const NotificationWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 15px;
    margin-bottom: -50px;
`;

export const ProfileWrapper = styled.div`
    width: 0%;
    height: 100%;
`;




