import styled from "styled-components";

export const Section = styled.div`
    width: 100%;
    height: 100%;
    margin: 40px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
    width: 90%;
    height: 100%;
    padding: 20px;
    background: linear-gradient(#2f2548, #27296d, #35376e);
    border-radius: 10px;
    margin: 24px 0px;
    padding: 36px 0px;
`;


export const Label = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    font-size: 28px;
    color: white;
`;

export const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 40px;

    @media screen and (max-width: 585px) {
        flex-direction: column;
    }
`;

export const Logo = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-right: 16px;
    @media screen and (max-width: 585px) {
        width: 50%;
        margin-bottom: 24px;
    }
`;

export const TextWrapper = styled.div`
    width: 80%;
    height: 100%;
    margin-left: 16px;
    margin-top: -40px;

    @media screen and (max-width: 585px) {
        margin-top: 0px;
        width: 100%;
    }
`;

export const Title = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 40px;
    font-size: 24px;
    color: white;

    @media screen and (max-width: 585px) {
        font-size: 20px;
    }
`;


export const Text = styled.div`
    width: 100%;
    height: 100%;
    font-size: 16px;
    color: white;
    @media screen and (max-width: 585px) {
        font-size: 15px;
        width: 100%;
    }
`;



