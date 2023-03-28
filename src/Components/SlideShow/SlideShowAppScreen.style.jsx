import styled from "styled-components";

export const SlideShowBase = styled.div`
    height: 100%;
    width: 100%;
    padding: 28px;

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
    display: flex;
    padding: 0px 24px;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 585px) {
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    margin-right: 12px;
    @media screen and (max-width: 585px) {
    }
`;

export const Logo = styled.div`
    height: 100%;
    margin-left: 12px;
`;

export const Image = styled.img`
    height: 150px;
    width: 150px;

    @media screen and (max-width: 585px) {
        height: 100px;
        width: 100px;
    }
`;

export const Title = styled.div`
    width: 100%;
    height: 100%;
    font-size: 26px;
    color: black;
    letter-spacing: 1px;
    font-family: 'Roboto Condensed', sans-serif;
    margin-bottom: 4px;

    @media screen and (max-width: 585px) {
        font-size: 20px;
        margin-bottom: 24px;
    }
`;


export const Text = styled.div`
    width: 100%;
    max-width: 750px;
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
