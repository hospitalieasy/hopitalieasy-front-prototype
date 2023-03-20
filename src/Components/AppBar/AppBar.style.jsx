import styled from "styled-components";

export const AppBarBase = styled.div`
    height: 12%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 12px 0px;
    
    animation:  0.5s ease-out 0s 1 slideInFromBottom;
    @keyframes slideInFromBottom {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
    }
`;

export const LeftSide = styled.div`
    height: 100%;
    width: 62%;
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

    @media screen and (max-width: 656px) {
        display: none;
    }

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }

    @media screen and (max-width: 1026px) and (min-width: 768px) {
        font-size: 24px;
    }
`;

export const SpeedDialWrapper = styled.div`
    margin-top: -10px;
    width: 240px;
`;

export const RightSide = styled.div`
    height: 100%;
    display: flex;
    padding: 20px 0px;
    margin-right: 15px;
`;

export const ContentWrapper = styled.div`
    height: 42px;
    display: flex;
    justify-content: space-between;
`;

export const NotificationWrapper = styled.div`
    display: flex;
    align-items: center;
    max-height: 100%;
    margin-right: 12px;
`;

export const ProfileWrapper = styled.div`
    width: 0%;
    height: 100%;
    padding-right: 12px;
`;




