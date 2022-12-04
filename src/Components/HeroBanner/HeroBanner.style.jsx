import styled from "styled-components";

export const HeroBannerBase = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 100px 50px;
`;

export const LeftSide = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const RightSide = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImageContainer = styled.div`
    height: 39.4vh;
`;

export const Content = styled.div`
    height: 100%;
    display: flex;
    margin: auto;
    flex-direction: column;
    padding-left: 100px;
`;

export const Title = styled.div`
    font-size: 40px;
    color: #fff;
    font-family: 'Roboto', sans-serif;

`;

export const Description = styled.div`
    font-size: 18px;
    color: #fff;
    margin-top: 50px;
    letter-spacing: 0.1px;
    width: 65%;
    font-family: 'Barlow', sans-serif;
`;

export const ButtonWrapper = styled.div`
    font-size: 20px;
    color: #fff;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    width: 45%;
`;



