import styled from "styled-components";

export const SlideShowBase = styled.div`
    height: 100%;
    width: 100%;
    padding: 40px;

    @media screen and (max-width: 585px) {
        padding: 24px;
    }
`;

export const Card = styled.div`
    width: 100%;
    height: 100%;
`;

export const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 24px;

    @media screen and (max-width: 585px) {
    }
`;

export const Title = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 40px;
    font-size: 26px;
    color: black;
    letter-spacing: 1px;
    font-family: 'Roboto Condensed', sans-serif;

    @media screen and (max-width: 585px) {
        font-size: 20px;
    }
`;


export const Text = styled.div`
    width: 100%;
    height: 100%;
    font-size: 18px;
    color: black;
    letter-spacing: 1px;
    font-family: 'Roboto Condensed', sans-serif;

    @media screen and (max-width: 500px) {
        font-size: 13px;
    }

    @media screen and (max-width: 585px) and (min-width: 500px){
        font-size: 16px;
    }
`;
