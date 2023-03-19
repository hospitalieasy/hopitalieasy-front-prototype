import styled from "styled-components";

export const HeroBannerBase = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
    
    animation:  0.5s ease-out 0s 1 slideInFromBottom;
    @keyframes slideInFromBottom {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
    }

    @media screen and (max-width: 768px) {
        padding: 0px 24px;
        height: 350px;
        flex-direction: column;
    }
`;

export const LeftSide = styled.div`
    height: 100%;
    width: 25%;
    display: flex;
    margin: auto;
    margin-top: 36px;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const RightSide = styled.div`
    height: 100%;
    width: 65%;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 530px;
    min-height: 300px;
    object-fit: cover;
`;

export const Content = styled.div`
    height: 100%;
    display: flex;
    margin: auto;
    flex-direction: column;
    padding: 24px;
`;

export const Title = styled.div`
    width: 100%;
    font-size: 36px;
    color: #fff;

    @media screen and (max-width: 768px) {
        font-size: 32px;
    }

`;

export const Description = styled.div`
    width: 100%;
    min-width: 150px;
    font-size: 18px;
    color: #fff;
    margin-top: 50px;
    letter-spacing: 0.1px;

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;

export const ButtonWrapper = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    
    @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

`;



